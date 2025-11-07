"use client";

import { Product } from "@/components/ui/product-card";
import { AuthContext } from "@/Context/AuthProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface Orders extends Product {
  status: string;
  payment: "card" | "cod";
  product: {
    name: string;
    category: string;
    images: string[];
  };
}

export default function Orders() {
  const context = useContext(AuthContext);
  const [data, setData] = useState<Orders[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!context?.user?.email) return;

    async function fetchData(email: string) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_URL}/get-orders/${email}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Unable to fetch data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        const msg =
          error instanceof Error ? error.message : "Unable to fetch data";
        Swal.fire({
          icon: "error",
          text: msg,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData(context.user.email);
  }, [context?.user?.email]);

  async function handleCancel(id: string) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/delete-order/${id}`,
        {
          credentials: "include",
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Could not cancel your order");

      const remaining = data.filter((d) => d._id !== id);
      setData(remaining);
      const dataRes = await res.json();
      toast.success(dataRes.message);
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Could not cancel your order";
      toast.error(msg);
    }
  }

  return (
    <div className="max-w-6xl w-full p-5 rounded-md bg-white/50 mx-auto overflow-x-auto">
      {loading ? (
        <div className="text-3xl text-center font-bold">Loading...</div>
      ) : data.length < 1 ? (
        <div className="text-3xl text-center font-bold w-full">
          No Orders Found
        </div>
      ) : (
        <>
          <h1 className="text-2xl mb-8 font-semibold">Total orders</h1>
          <table className="table-fixed min-w-[900px] text-sm w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th
                  style={{ width: "5%" }}
                  className="border px-4 py-2 text-left"
                >
                  No.
                </th>
                <th
                  style={{ width: "7.5%" }}
                  className="border px-4 py-2 text-left"
                >
                  Image
                </th>
                <th
                  style={{ width: "10%" }}
                  className="border px-4 py-2 text-left"
                >
                  Name
                </th>
                <th
                  style={{ width: "10%" }}
                  className="border px-4 py-2 text-left"
                >
                  Category
                </th>
                <th
                  style={{ width: "9%" }}
                  className="border px-4 py-2 text-left"
                >
                  Price
                </th>
                <th
                  style={{ width: "10%" }}
                  className="border px-4 py-2 text-left"
                >
                  Status
                </th>
                <th
                  style={{ width: "9%" }}
                  className="border px-4 py-2 text-left"
                >
                  Quantity
                </th>
                <th
                  style={{ width: "9%" }}
                  className="border px-4 py-2 text-left"
                >
                  Placed
                </th> 
                <th
                  style={{ width: "9%" }}
                  className="border px-4 py-2 text-left"
                >
                  Payment
                </th>
                <th
                  style={{ width: "9%" }}
                  className="border px-4 py-2 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, idx) => (
                <tr key={d._id} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">
                    <span className="relative inline-block h-11 w-13">
                      <Image
                        src={d.product.images[0]}
                        unoptimized
                        fill
                        className="object-contain h-full w-full"
                        alt=""
                      />
                    </span>
                  </td>
                  <td className="border px-4 py-2 truncate">
                    {d.product.name}
                  </td>
                  <td className="border px-4 py-2">{d.product.category}</td>
                  <td className="border px-4 py-2">{d.price}</td>
                  <td className="border px-4 py-2">{d.status.toUpperCase()}</td>
                  <td className="border px-4 py-2">{d.quantity}</td>
                  <td className="border px-4 py-2">
                    {new Date(d.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{(d.payment).toString().toUpperCase()  }</td>
                  <td className="border px-4 py-2">
                    <span
                      onClick={() => handleCancel(d._id)}
                      className="text-sm cursor-default px-2 py-1 border rounded bg-white hover:bg-red-200"
                    >
                      Cancel
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
