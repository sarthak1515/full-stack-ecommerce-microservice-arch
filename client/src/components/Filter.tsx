"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathName = usePathname();

  const handleFilterChange = (val: string) => {
    const params = new URLSearchParams();
    params.set("sort", val);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex items-center gap-2 justify-end text-sm text-gray-500 my-6 mx-4">
      <label htmlFor="filter">Sort by:</label>
      <select
        id="filter"
        className="ring ring-gray-300 shadow-md rounded-sm p-1 outline-0"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price:Low to High</option>
        <option value="desc">Price:High to low</option>
      </select>
    </div>
  );
}

export default Filter;
