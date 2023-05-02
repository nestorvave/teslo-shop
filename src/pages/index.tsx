
import { Inter } from "next/font/google";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../../database/products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ShopLayout
      title="Teslo-Shop - Home"
      pageDescription="Find the best products from Teslo"
    >
      <h1 className="text-3xl font-semibold ">Shop</h1>
      <h2 className="mb-1 text-xl ">All the products.</h2>

      <section className="grid grid-cols-1 gap-2  sm:grid-cols-2 md:grid-cols-3 ">
        {initialData.products.map((product) => (
          <div className="border" key={product.title}>
            <img
              src={`/products/${product.images[0]}`}
              alt={product.title}
            />
          </div>
        ))}
      </section>
    </ShopLayout>
  );
}
