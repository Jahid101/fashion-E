import { Layout } from "antd";
import Head from "next/head";
import { useRouter } from 'next/router';
import React from "react";
const { Content } = Layout;

const AppLayout = ({ children }: any) => {
  const router = useRouter()

  return (
    <React.Fragment>
      <Head>
        <title>Project-101</title>
        <meta name="description" content="Project-101" />

        {/* For not auto zoom in mobile devices */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta
          property="og:image"
          content="https://orange-assessment.netlify.app/siteLogo.png"
        ></meta>

        <meta property="og:type" content="website" />

        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="https://orange-assessment.netlify.app/siteLogo.png"
        ></link>

        <meta name="keywords" content=""></meta>

        <meta name="msvalidate.01" content="69226226970AB66BA8B8B92B7127D2A3" />

      </Head>

      <script src="https://apis.google.com/js/platform.js" async defer></script>

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* Inter font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />

      <Content>{children}</Content>

    </React.Fragment>
  );
}


export default AppLayout;
