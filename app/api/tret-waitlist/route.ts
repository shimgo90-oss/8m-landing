const ALLOWED_ANSWERS = {
  duration: ["I haven't started yet", "Less than 1 month", "1–3 months", "3–6 months", "More than 6 months"],
  frequency: ["1–2 nights a week", "3–4 nights a week", "5–7 nights a week", "I'm paused right now", "I'm not sure"],
  feelings: ["Peeling", "Tightness", "Dryness", "Stinging", "Sudden sensitivity", "It feels comfortable"],
} as const;

type Payload = {
  email?: unknown;
  answers?: unknown;
  consent?: unknown;
  company?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function readAnswer(
  answers: Record<string, unknown>,
  key: keyof typeof ALLOWED_ANSWERS,
  multiple = false,
) {
  const value = answers[key];
  if (!Array.isArray(value) || value.length === 0) return null;
  const allowed = ALLOWED_ANSWERS[key] as readonly string[];
  if (!value.every((item): item is string => typeof item === "string" && allowed.includes(item))) return null;
  if (!multiple && value.length !== 1) return null;
  return value;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (payload.company) return Response.json({ ok: true });

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const answers = payload.answers && typeof payload.answers === "object"
    ? (payload.answers as Record<string, unknown>)
    : {};
  const duration = readAnswer(answers, "duration");
  const frequency = readAnswer(answers, "frequency");
  const feelings = readAnswer(answers, "feelings", true);

  if (!isValidEmail(email) || payload.consent !== true || !duration || !frequency || !feelings) {
    return Response.json({ error: "Please complete the quiz, email, and consent." }, { status: 400 });
  }

  const airtableToken = process.env.AIRTABLE_ACCESS_TOKEN;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Waitlist";
  if (!airtableToken || !airtableBaseId) {
    return Response.json({ error: "Waitlist connection is not configured yet." }, { status: 503 });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${encodeURIComponent(airtableBaseId)}/${encodeURIComponent(airtableTableName)}`,
      {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: email,
              "Tretinoin Duration": duration[0],
              "Usage Frequency": frequency[0],
              "Skin Feelings": feelings.join(", "),
              Consent: true,
              Source: "tret-support-result",
            },
          },
        ],
        typecast: true,
      }),
      cache: "no-store",
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Airtable returned ${response.status}: ${detail.slice(0, 300)}`);
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Tret waitlist submission failed", error);
    return Response.json({ error: "We couldn't save your place. Please try again." }, { status: 502 });
  }
}
