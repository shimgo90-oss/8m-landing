# Airtable waitlist setup

## 1. Create the table

Create a table named `Waitlist` with these exact field names:

| Field | Airtable type |
| --- | --- |
| Email | Email |
| Tretinoin Duration | Single line text |
| Usage Frequency | Single line text |
| Skin Feelings | Long text |
| Consent | Checkbox |
| Source | Single line text |
| Created At | Created time |

`Created At` is filled automatically by Airtable. The API does not send a value for it.

## 2. Create a Personal Access Token

Open <https://airtable.com/create/tokens> and create a token with:

- Scope: `data.records:write`
- Access: only the Base that contains the `Waitlist` table

Copy the token when Airtable shows it. Do not commit it to Git.

## 3. Find the Base ID

Open <https://airtable.com/developers/web/api/introduction>, select the Base, and copy the ID beginning with `app`.

## 4. Configure local development

Create `.env.local` in the project root:

```env
AIRTABLE_ACCESS_TOKEN=pat_your_token
AIRTABLE_BASE_ID=app_your_base_id
AIRTABLE_TABLE_NAME=Waitlist
```

Restart the Next.js development server after saving the file.

## 5. Configure Vercel Preview

Add the same three values in Vercel → Project Settings → Environment Variables. Add them to Preview first, redeploy, submit one test response, and confirm a new Airtable record before adding them to Production.
