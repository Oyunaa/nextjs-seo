import React from "react";
import Head from "next/head";

export interface IMeta {
  title: string;
  description: string;

  site_name: string;
  image: string;
}

export const Meta = ({ metaData }: { metaData: IMeta }) => {
  return (
    <Head>
      <title>Web site</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />

      <meta name="site_name" content={metaData.site_name} />
      <meta name="image" content={metaData.image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
