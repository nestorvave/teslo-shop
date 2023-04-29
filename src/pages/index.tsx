import Image from "next/image";
import { Inter } from "next/font/google";
import { ShopLayout } from "../components/layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ShopLayout
      title="Teslo-Shop - Home"
      description="Find the best products from Teslo"
    >
      <h1 className="text-3xl font-semibold ">Shop</h1>
      <h2 className="text-xl mb-1 ">All the products.</h2>
    </ShopLayout>
  );
}
