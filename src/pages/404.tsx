import { ShopLayout } from "@/components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="There is not something to show"
    >
      <div className="flex h-[calc(100vh-250px)] w-full flex-col items-center justify-center sm:flex-row">
        <h1 className=" text-8xl font-extralight ">404 | </h1>
        <h1 className=" ml-1 text-2xl font-extralight ">Page not found</h1>
      </div>
    </ShopLayout>
  );
};

export default Custom404;
