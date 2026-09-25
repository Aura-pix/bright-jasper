const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || "./google-service-account.json";
const urls = process.argv.slice(2);

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error(`Service account not found at ${SERVICE_ACCOUNT_PATH}`);
  console.error("Set GOOGLE_SERVICE_ACCOUNT_PATH env var or place file at project root.");
  process.exit(1);
}

if (urls.length === 0) {
  console.error("Pass at least one URL to submit.");
  process.exit(1);
}

const SCOPES = ["https://www.googleapis.com/auth/indexing"];
const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_PATH,
  scopes: SCOPES,
});

const indexing = google.indexing({ version: "v3", auth });

async function submitUrls() {
  for (const url of urls) {
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: "URL_UPDATED",
        },
      });
      console.log(`✓ Submitted: ${url} (status: ${res.status})`);
    } catch (err) {
      console.error(`✗ Failed: ${url}`, err.message);
      process.exitCode = 1;
    }
  }
}

submitUrls();