import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* <meta charset="utf-8" />
        <meta name="description" content="3번 안에 SAT 1550+ 고득점 전문. 결과로 증명하는 트리플 어학원" />
        <meta name="keywords" content="SAT, 어학원, 고득점, 1550, 1600, 만점, 트리플, 강남" />
        <meta name="author" content="Triple Academy" />
        <meta property="og:title" content="트리플 어학원 - SAT 고득점 전문" />
        <meta property="og:description" content="3번 안에 SAT 1550+ 고득점 전문. 결과로 증명합니다." />
        <meta property="og:type" content="website" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}