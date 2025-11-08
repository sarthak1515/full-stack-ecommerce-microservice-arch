import Image from "next/image";
import Link from "next/link";

import React from "react";

function Footer() {
  return (
    <div className="p-8 mt-16 flex flex-col items-center gap-y-8 md:flex-row md:items-start md:justify-between bg-gray-800">
      <div className="flex flex-col gap-4 items-center md:items-start ">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="nazrana"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          ></Image>
          <p className="text-sm font-medium tracking-wider text-white">
            Nazrana.
          </p>
        </Link>
        <p className="text-sm text-gray-100">© 2025 Nazrana.</p>
        <p className="text-sm text-gray-100">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Seller</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
}

export default Footer;
