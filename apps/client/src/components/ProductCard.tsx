"use client";

import useCartStore from "@/stores/cartstore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

function ProductCard({ product }: { product: ProductType }) {
  const [productType, setProductType] = useState({
    color: product.colors[0],
    size: product.sizes[0],
  });
  const { addToCart } = useCartStore();

  const handleProductType = (type: "size" | "color", value: string) => {
    setProductType((prev) =>
      type === "size" ? { ...prev, size: value } : { ...prev, color: value }
    );
  };
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productType.size!,
      selectedColor: productType.color!,
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/2]">
          <Image
            src={product.images?.[productType.color!] || ""}
            alt={product.name}
            fill
            className="object-contain hover:scale-105 transition duration-300"
            style={{ backgroundColor: "#F9F9F9" }}
          ></Image>
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-md">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex  flex-col">
            <label htmlFor="size">Size</label>
            <select
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1 outline-0"
              onChange={(e) => handleProductType("size", e.target.value)}
            >
              {product.sizes.map((size) => {
                return (
                  <option key={size} value={size}>
                    {size.toLocaleUpperCase()}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-500 self-baseline">Color</span>
            <div className="flex items-center  gap-2">
              {product.colors.map((color) => {
                return (
                  <div
                    key={color}
                    className={`w-[14px] h-[14px] rounded-full ring-offset-1 ring-1 ${
                      productType.color === color
                        ? " ring-gray-400"
                        : " ring-gray-200"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => handleProductType("color", color)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className=" font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            type="button"
            className="flex items-center gap-2 shadow-md px-2 py-1 text-sm rounded-lg ring-1 ring-gray-100 cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4"></ShoppingCart>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
