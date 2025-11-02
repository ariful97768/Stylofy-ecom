import { GiCancel } from "react-icons/gi";
import img from "@/assets/feature-product.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function Checkout() {
  return (
    <main className="max-w-7xl tracking-wider mx-auto mt-14">
      <div>
        <h1 className="uppercase text-3xl font-black">Checkout</h1>
        {/* <p className="mt-2 text-base">Billing</p> */}
      </div>
      <div className="flex justify-between">
        <div className="max-w-[450px] mt-8">
          <div>
            <h3 className="uppercase text-sm font-medium mb-5">
              Shipping address
            </h3>
            <div className="space-y-4">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="Bidesh">Bidesh</SelectItem>
                  <SelectItem value="Shondesh">Shondesh</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="City" type="text" />
              <Input placeholder="Address" type="text" />
              <RadioGroup defaultValue="cod" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash On Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Card</Label>
                </div>
              </RadioGroup>
              <button className="py-2.5 mt-10 min:w-[100px] max-h-max w-full items-center justify-center flex px-15 bg-black/30 rounded-none uppercase text-sm font-semibold shrink-0">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
        <div className="mr-20">
          <div className="border w-[406px] space-y-8 p-8 pb-6">
            <h3 className="uppercase">Your order</h3>
            <div className="w-full space-y-6">
              <div id="cart-item" className="flex w-full gap-3">
                <div className="relative border shrink-0 border-gray-400 h-33 w-28">
                  <Image src={img} fill className="object-cover" alt="" />
                </div>
                <div className="flex py-4 flex-col w-full">
                  <div className="grow">
                    <div className="flex w-full justify-between items-center">
                      <h4 className="text-sm">Basic Heavy T-Shirt</h4>
                      <span>
                        <GiCancel size={16} className="text-gray-700" />
                      </span>
                    </div>
                    <span className="text-xs">XL</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>(1)</span>
                    <span>$99</span>
                  </div>
                </div>
              </div>
              <div id="cart-item" className="flex w-full gap-3">
                <div className="relative border shrink-0 border-gray-400 h-33 w-28">
                  <Image src={img} fill className="object-cover" alt="" />
                </div>
                <div className="flex py-4 flex-col w-full">
                  <div className="grow">
                    <div className="flex w-full justify-between items-center">
                      <h4 className="text-sm">Basic Heavy T-Shirt</h4>
                      <span>
                        <GiCancel size={16} className="text-gray-700" />
                      </span>
                    </div>
                    <span className="text-xs">XL</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>(1)</span>
                    <span>$99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3.5">
              <div className="space-y-2 border-y border-gray-300 py-3.5">
                <div className="flex justify-between text-xs">
                  <h4>Subtotal</h4>
                  <span>$180</span>
                </div>
                <div className="flex justify-between text-xs">
                  <h4>Shipping</h4>
                  <span>$70</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <h4>Total</h4>
                <span>$180</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
