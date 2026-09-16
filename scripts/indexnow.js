const key = process.env.INDEXNOW_KEY;
const urls = process.argv.slice(2);

if (!key) {
  console.error("Missing INDEXNOW_KEY environment variable.");
  process.exit(1);
}

if (urls.length === 0) {
  console.error("Pass at least one URL to submit.");
  process.exit(1);
}

const host = "brightjasper.com";
const endpoint = "https://api.indexnow.org/indexnow";

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  }),
});

const body = await response.text();
console.log(`IndexNow status: ${response.status}`);
if (body) console.log(body);

if (!response.ok) process.exit(1);
