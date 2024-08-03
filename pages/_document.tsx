import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="54de3e95-17b4-4d5f-889c-551763432a69"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
