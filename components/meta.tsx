import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      {/* Favicon */}
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

      {/* Theme color */}
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Description */}
      <meta
        name="description"
        content="A health workers’ magazine for a new society"
      />

      {/* Title */}
      <title>Vital Signs</title>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="/images/banner-draft.png" />
      <meta name="twitter:title" content="Vital Signs Magazine" />
      <meta
        name="twitter:description"
        content="A health workers’ magazine for a new society"
      />
      <meta name="twitter:image" content="/images/banner-draft.png" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.vitalsignsmag.org/"
      />
      <meta property="og:title" content="Vital Signs Magazine" />
      <meta
        property="og:description"
        content="A health workers’ magazine for a new society"
      />
      <meta property="og:image" content="/images/banner-draft.png" />

      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
  );
}
