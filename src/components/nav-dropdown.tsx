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

export function NavMenu() {
  const context = useContext(AuthContext);

  async function logout() {
    try {
      await context?.signOutUser();
      context?.setUser(null);

      Swal.fire({
        text: "Signed out successfully",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        text: "Some unknown error happened while singing out user",
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
        <DropdownMenuItem>Cart</DropdownMenuItem>
        <DropdownMenuItem>Orders</DropdownMenuItem>
        <DropdownMenuItem onClick={logout} variant="destructive">
          Logout
        </DropdownMenuItem>
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
