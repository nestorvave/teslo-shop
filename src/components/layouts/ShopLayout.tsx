import Head from "next/head";
import React from "react";
import { Navbar } from "../ui/Navbar";
import { SideMenu } from "../ui/SideMenu";

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
    <div className="relative">
      <Head>
        <title> {title} </title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <SideMenu />
      <Navbar />
      <main className="mx-auto m-20 max-w-screen-2xl px-8 py-0 pointer-events-none overflow-hidden opacity-20 ">
        {children}
      </main>
      <footer></footer>
    </div>
  );
};
