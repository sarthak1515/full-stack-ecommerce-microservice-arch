import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

function Navbar() {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-2 border-b border-gray-200 pb-4">
        {/* left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="nazrana"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          ></Image>
          <p className="hidden md:block text-md font-medium tracking-wider">
            Nazrana.
          </p>
        </Link>
        {/* right */}
        <div className="flex items-center gap-6">
          <SearchBar></SearchBar>
          <Link href="/">
            <Home className="w-4 h-4 text-gray-600"></Home>
          </Link>
          <Bell className="w-4 h-4 text-gray-600"></Bell>
          <ShoppingCartIcon></ShoppingCartIcon>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <ProfileButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
