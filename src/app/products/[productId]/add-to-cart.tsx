"use client";
import { auth } from "@/firebase.config";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function AddToCart({ id }: { id: string }) {
  const [success, setSuccess] = useState(false);
  const [loading, setloading] = useState(false);

  async function submit() {
    setloading(true);
    try {
      await (
        await fetch("/api/add-to-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            userId: auth.currentUser?.email,
            product: id,
          }),
        })
      ).json();

      toast.success("Product added to cart");
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      toast.error("Could not add to cart");
    } finally {
      setloading(false);
    }
  }
  return (
    <>
      {success ? (
        <Link href={`/checkout/${id}`}>
          <button className="py-2.5 min:w-[100px] max-h-max w-full items-center justify-center flex px-15 bg-black/30 rounded-none uppercase text-sm font-semibold shrink-0">
            Buy Now
          </button>
        </Link>
      ) : (
        <button
          disabled={loading}
          onClick={submit}
          className="py-2.5 min:w-[100px] max-h-max w-full items-center justify-center flex px-15 bg-black/30 rounded-none uppercase text-sm font-semibold shrink-0"
        >
          {loading ? "Adding..." : "Add to cart"}
        </button>
      )}
    </>
  );
}
