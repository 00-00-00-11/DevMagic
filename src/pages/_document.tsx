import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class Bot extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700;800&display=swap"
            as="style"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Bot;
