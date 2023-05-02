import Head from "next/head";
import React from "react";
import { Navbar } from "../ui/Navbar";

interface ILayout {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const ShopLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}: ILayout) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <Navbar />
      <main className="mx-auto m-20 max-w-screen-2xl px-8 py-0 ">
        {children}
      </main>
      <footer></footer>
    </>
  );
};
