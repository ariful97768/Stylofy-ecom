"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/components/ui/product-card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auth } from "@/firebase.config";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function CheckoutForm({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  async function confirmOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formFields = new FormData(form);
    const data = Object.fromEntries(formFields);
    try {
      const orderInfo = {
        user: auth.currentUser?.email,
        product: product._id,
        discount: product.discount,
        quantity: 1,
        price: (
          product.price -
          (product.price / 100) * product.discount
        ).toFixed(2),
        shipping: 70,
        userInfo: {
          name: data.name,
          email: data.email,
        },
        order: {
          country: data.country,
          city: data.city,
          address: data.address,
        },
      };

      await toast
        .promise(
          fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/confirm-order`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(orderInfo),
          }),
          {
            loading: "Submitting order...",
            success: () => "Order submitted",
            error: (a) => {
              return `${a}`;
            },
          }
        )
        .unwrap();
      form.reset();
    } catch (error) {
      toast.error("Could not confirm the order");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={(e) => confirmOrder(e)}>
      <h3 className="uppercase text-sm font-medium mb-5">Shipping address</h3>
      <div className="space-y-4">
        <Input required name="name" placeholder="Name" type="text" />
        <Input required name="email" placeholder="Email" type="email" />
        <Select required name="country">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
            <SelectItem value="Bidesh">Bidesh</SelectItem>
            <SelectItem value="Shondesh">Shondesh</SelectItem>
          </SelectContent>
        </Select>
        <Input required name="city" placeholder="City" type="text" />
        <Input required name="address" placeholder="Address" type="text" />
        <RadioGroup name="payment" required defaultValue="cod" className="flex">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod">Cash On Delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Card</Label>
          </div>
        </RadioGroup>
        <button
          disabled={loading}
          className="py-2.5 mt-10 min:w-[100px] max-h-max w-full items-center justify-center flex px-15 bg-black/30 rounded-none uppercase text-sm font-semibold shrink-0"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
}
