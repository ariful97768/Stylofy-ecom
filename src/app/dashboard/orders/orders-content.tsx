"use client";

import { Product } from "@/components/ui/product-card";
import { AuthContext } from "@/Context/AuthProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface Orders extends Product {
  status: string;
  product: {
    name: string;
    category: string;
    images: string[];
  };
}

export default function Orders() {
  const context = useContext(AuthContext);
  const [data, setData] = useState<Orders[]>([]);

  useEffect(() => {
    if (!context?.user?.email) return;
    async function fetchData(email: string) {
      try {
        const res = await fetch(`https://stylofy-ecom-server.vercel.app/get-orders/${email}`, {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) throw new Error("Unable to fetch data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: "Unable to fetch data",
        });
      }
    }
    fetchData(context.user.email);
  }, [context?.user?.email]);

  async function handleCancel(id: string) {
    try {
      const res = await fetch(`https://stylofy-ecom-server.vercel.app/delete-order/${id}`, {
        credentials: "include",
        method: "DELETE",
      });
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
    <div className="max-w-6xl pt-10 mx-auto overflow-x-auto">
      {data.length < 1 ? (
        <div className="text-3xl font-bold">No Orders Found</div>
      ) : (
        <table className="table-fixed text-sm w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                No.
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Image
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Name
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Category
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Price
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Status
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Quantity
              </th>
              <th
                style={{ width: "11.11%" }}
                className="border px-4 py-2 text-left"
              >
                Placed
              </th>
              <th
                style={{ width: "11.11%" }}
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
                  <span>
                    <Image
                      src={d.product.images[0]}
                      unoptimized
                      width={50}
                      height={50}
                      alt=""
                    />
                  </span>
                </td>
                <td className="border px-4 py-2">{d.product.name}</td>
                <td className="border px-4 py-2">{d.product.category}</td>
                <td className="border px-4 py-2">{d.price}</td>
                <td className="border px-4 py-2">{d.status}</td>
                <td className="border px-4 py-2">{d.quantity}</td>
                <td className="border px-4 py-2">
                  {new Date(d.createdAt).toLocaleDateString()}
                </td>
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
      )}
    </div>
  );
}
