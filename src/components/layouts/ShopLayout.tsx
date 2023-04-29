import Head from "next/head";
import React from "react";

interface ILayout {
  title: string;
  description: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const ShopLayout = ({
  children,
  title,
  description,
  imageFullUrl,
}: ILayout) => {
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      <nav></nav>
      <main className="mx-auto m-20 max-w-7xl px-8 py-0 ">{children}</main>
      <footer></footer>
    </>
  );
};
