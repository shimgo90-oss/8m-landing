const SPREADSHEET_ID = "10Tfl1LBZF8K1gb1cLQcQBuHw4WIu55H5iRmk30Llsh8";
const SHEET_NAME = "시트1";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const email = cleanCell(payload.email);
    const duration = cleanCell(payload.duration);
    const frequency = cleanCell(payload.frequency);
    const feelings = Array.isArray(payload.feelings)
      ? payload.feelings.map(cleanCell).join(", ")
      : "";
    const source = cleanCell(payload.source);

    if (!email || !duration || !frequency || !feelings || payload.consent !== true) {
      return jsonResponse({ ok: false, error: "Missing fields" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
      if (!sheet) throw new Error("Target sheet not found");
      sheet.appendRow([
        new Date(),
        email,
        duration,
        frequency,
        feelings,
        source,
        "Yes",
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: "Internal error" });
  }
}

function cleanCell(value) {
  const text = String(value || "").trim().slice(0, 500);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
