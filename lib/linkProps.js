const SITE_HOSTNAMES = new Set(["brightjasper.com", "www.brightjasper.com"]);

export function getLinkProps(href) {
  if (!href || href.startsWith("/") || href.startsWith("#")) {
    return { href };
  }

  let url;
  try {
    url = new URL(href);
  } catch {
    return { href };
  }

  const isHttpLink = url.protocol === "http:" || url.protocol === "https:";
  const isInternalLink = isHttpLink && SITE_HOSTNAMES.has(url.hostname);

  if (!isHttpLink || isInternalLink) {
    return { href };
  }

  url.searchParams.set("utm_source", "brightjasper.com");
  url.searchParams.set("utm_medium", "referral");

  return {
    href: url.toString(),
    target: "_blank",
    rel: "noopener",
    referrerPolicy: "origin",
  };
}
