import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/icon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
            rel="stylesheet"
          />
        </Head>
      </Head>
      <body className="body-template">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
