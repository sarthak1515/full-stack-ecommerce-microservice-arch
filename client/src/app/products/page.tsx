import ProductList from "@/components/ProductList";
import React from "react";

async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductList category={category} params="products"></ProductList>
    </div>
  );
}

export default ProductPage;
