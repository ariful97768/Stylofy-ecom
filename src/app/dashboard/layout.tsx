import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-7xl pt-5 gap-5 mx-auto flex">
      <aside className="w-1/7 min-h-[calc(100vh-95px)] bg-black/10 p-5 shrink-0 border">
        <ul className="space-y-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard/my-orders"}>My Orders</Link>
          </li>
          <li>
            <Link href={"/dashboard/all-orders"}>All Orders</Link>
          </li>
          <li>
            <Link href={"/dashboard/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/dashboard/users"}>Users</Link>
          </li>
          <li>
            <Link href={"/dashboard/add-product"}>Add Product</Link>
          </li>
        </ul>
      </aside>
      {children}
    </main>
  );
}
