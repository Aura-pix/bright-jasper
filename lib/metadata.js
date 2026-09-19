const SITE_URL = "https://brightjasper.com";

export function createPageMetadata({
  title,
  description,
  path,
  url: providedUrl,
  keywords,
  type = "website",
}) {
  const url = providedUrl || `${SITE_URL}${path}`;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: `${SITE_URL}/refinery.png`,
          width: 1280,
          height: 853,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/refinery.png`],
    },
  };
}
