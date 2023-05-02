import React from "react";
import NextLink from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="mx-auto my-auto flex w-full justify-between px-7 py-3 ">
      <div className="flex items-center justify-center  ">
        <NextLink href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <h3 className="text-xl font-semibold ">Teslo | </h3>
            <h5 className="mx-1">Shop</h5>
          </a>
        </NextLink>
      </div>
      <div className="hidden gap-1 sm:flex">
        <NextLink href="/category/men" passHref legacyBehavior>
          <a className="m-0 flex cursor-pointer items-center ">
            <button className="w-16 rounded-md border border-none p-2 text-xs  font-semibold hover:bg-gray-100 ">
              Men
            </button>
          </a>
        </NextLink>
        <NextLink href="/category/woman" passHref legacyBehavior>
          <a className="m-0 flex cursor-pointer items-center  ">
            <button className="w-16 rounded-md border border-none p-2 text-xs  font-semibold hover:bg-gray-100">
              Woman
            </button>
          </a>
        </NextLink>
        <NextLink href="/category/kid" passHref legacyBehavior>
          <a className="m-0 flex cursor-pointer items-center">
            <button className="w-16 rounded-md border border-none p-2 text-xs font-semibold hover:bg-gray-100">
              Kids
            </button>
          </a>
        </NextLink>
      </div>
      <div className="flex">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <AiOutlineSearch size={22} color="757575" />
        </button>
        <NextLink href="/category/woman" passHref legacyBehavior>
          <a className="flex items-center">
            <button className=" relative rounded-full p-2 hover:bg-gray-100 ">
              <AiOutlineShoppingCart size={22} color="757575" />

              <span className="absolute bottom-5 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 p-1 text-xs text-white">
                2
              </span>
            </button>
          </a>
        </NextLink>
        <a className="m-0 flex cursor-pointer items-center">
          <button className="w-13 ml-1 rounded-md border border-none p-2 text-xs font-semibold hover:bg-gray-100">
            Menu
          </button>
        </a>
      </div>
    </nav>
  );
};
