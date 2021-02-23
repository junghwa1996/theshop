import App, { Container } from "next/app";
import React from "react";
import { Analytics } from "aws-amplify";
import Auth from "@aws-amplify/auth"
import awsconfig from "../aws-exports";
Auth.configure(awsconfig);
Analytics.configure(awsconfig);
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
export default MyApp;