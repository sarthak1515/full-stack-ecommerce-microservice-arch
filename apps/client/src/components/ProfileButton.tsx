"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

function ProfileButton() {
  const router = useRouter();
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="See Orders"
          labelIcon={<ShoppingBag className="w-4 h-4"></ShoppingBag>}
          onClick={() => router.push("/orders")}
        ></UserButton.Action>
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default ProfileButton;
