"use client";
import AuthProvider from "@/Context/AuthProvider";
import Orders from "./orders-content";

export default function OrdersPage() {
  return (
    <AuthProvider>
      <Orders />
    </AuthProvider>
  );
}
