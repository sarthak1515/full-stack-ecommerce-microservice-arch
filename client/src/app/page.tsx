import ProductList from "@/components/ProductList";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="px-4">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="feature-product" fill></Image>
      </div>
      <ProductList category={category} params="homepage"></ProductList>
      <ToastContainer />
    </div>
  );
};

export default Homepage;
