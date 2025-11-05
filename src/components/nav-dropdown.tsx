"use client";
import { FaRegUser } from "react-icons/fa";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "@/Context/AuthProvider";
import Swal from "sweetalert2";
import Link from "next/link";

export function NavMenu() {
  const context = useContext(AuthContext);

  async function logout() {
    try {
      await (
        await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/signout`, {
          method: "GET",
          credentials: "include",
        })
      ).json();

      await context?.signOutUser();
      context?.setUser(null);
      Swal.fire({
        text: "Signed out successfully",
        icon: "success",
      });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Some unknown error happened while singing out user";
      Swal.fire({
        text: msg,
        icon: "error",
      });
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="inline-block p-3.5 bg-black text-white rounded-full">
          <FaRegUser size={16} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/cart"}>
          <DropdownMenuItem>Cart</DropdownMenuItem>
        </Link>
        {context?.user ? (
          <>
            <Link href={"/dashboard/orders"}>
              <DropdownMenuItem>Orders</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={logout} variant="destructive">
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <Link href={"/login"}>
            <DropdownMenuItem>Signin</DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function NavDropdown() {
  return (
    <AuthProvider>
      <NavMenu />
    </AuthProvider>
  );
}
