import React from "react";
import Document, { Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;