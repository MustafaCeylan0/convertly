import React from "react";
import Head from "next/head";
const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} key="title" />
    </Head>
  );
};

export default SEO;
