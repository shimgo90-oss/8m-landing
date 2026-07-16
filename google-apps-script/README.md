# Tret-support waitlist → Google Sheets

Target spreadsheet: `Tretinoin Users Waitlist`

## One-time Google setup

1. Open the target Google Sheet.
2. Choose **Extensions → Apps Script**.
3. Replace the editor contents with `Code.gs` from this folder and save.
4. Open **Project Settings → Script properties** and add:
   - Property: `WEBHOOK_SECRET`
   - Value: a long random secret (32+ characters)
5. Choose **Deploy → New deployment → Web app**.
6. Set **Execute as** to yourself and **Who has access** to anyone.
7. Deploy, approve the Google permission prompt, and copy the `/exec` URL.

## Vercel environment variables

Add the following to the Preview environment first:

- `GOOGLE_SHEETS_WEB_APP_URL` = the Apps Script `/exec` URL
- `GOOGLE_SHEETS_WEBHOOK_SECRET` = the same secret from Script properties

Redeploy the preview after saving both values. Test one submission and confirm a new row appears in `시트1` before adding the variables to Production.
