import Head from "next/head";
import { useEffect } from "react";

export default function Meta() {
  useEffect(() => {
    const existingMetaTags = document.head.querySelectorAll(
      'meta[name="description"], meta[name="twitter:description"], meta[property="og:description"], meta[name="twitter:image"], meta[property="og:image"]'
    );

    existingMetaTags.forEach((tag) => {
      // Check if the content attribute is empty or null
      if (!tag.getAttribute("content")) {
        // Fill the content attribute if it's empty
        if (tag.getAttribute("name") === "description") {
          tag.setAttribute(
            "content",
            "A health workers’ magazine for a new society"
          );
        } else if (
          tag.getAttribute("name") === "twitter:description" ||
          tag.getAttribute("property") === "og:description"
        ) {
          tag.setAttribute(
            "content",
            "A health workers’ magazine for a new society"
          );
        } else if (
          tag.getAttribute("name") === "twitter:image" ||
          tag.getAttribute("property") === "og:image"
        ) {
          tag.setAttribute("content", "/images/banner-draft.png");
        }
      }
    });
  }, []);

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/feed.xml"
      />
      <meta name="description" content="Vital Signs Magazine" />
      <title>Vital Signs Magazine</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="vitalsignsmag.org" />
      <meta
        property="twitter:url"
        content="https://www.vitalsignsmag.org/"
      />
      <meta name="twitter:title" content="Vital Signs Magazine" />
      <meta name="twitter:image" content="/images/banner-draft.png" />
      <meta
        property="og:url"
        content="https://www.vitalsignsmag.org/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Vital Signs Magazine" />
      <meta property="og:image" content="/images/banner-draft.png" />
    </Head>
  );
}
