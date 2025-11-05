import Image from "next/image";
import { cookies } from "next/headers";
import { type Product } from "@/components/ui/product-card";
import CheckoutForm from "./checkout-form";

export default async function Checkout({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  const id = (await params).productId;
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/get-product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: `token=${token}`,
    },
    credentials: "include",
  });

  const product: Product = await res.json();

  return (
    <main className="max-w-7xl tracking-wider mx-auto mt-14">
      <div>
        <h1 className="uppercase text-3xl font-black">Checkout</h1>
        {/* <p className="mt-2 text-base">Billing</p> */}
      </div>
      <div className="flex justify-between">
        <div className="max-w-[450px] mt-8">
          <CheckoutForm product={product} />
        </div>
        <div className="mr-20">
          <div className="border w-[406px] space-y-8 p-8 pb-6">
            <h3 className="uppercase">Your order</h3>
            <div className="w-full space-y-6">
              <div id="cart-item" className="flex w-full gap-3">
                <div className="relative border shrink-0 border-gray-400 h-33 w-28">
                  <Image
                    src={product.images[0]}
                    unoptimized
                    fill
                    className="object-cover"
                    alt="product image"
                  />
                </div>
                <div className="flex py-4 flex-col w-full">
                  <div className="grow">
                    <div className="flex w-full justify-between items-center">
                      <h4 className="text-sm">{product.name}</h4>
                      {/* <span>
                        <GiCancel size={16} className="text-gray-700" />
                      </span> */}
                    </div>
                    <span className="text-xs">{product?.size}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>(1)</span>
                    <div className="flex items-center gap-3">
                      <span className="line-through">${product.price}</span>
                      <span>
                        $
                        {(
                          product.price -
                          (product.price / 100) * product.discount
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3.5">
              <div className="space-y-2 border-y border-gray-300 py-3.5">
                <div className="flex justify-between text-xs">
                  <h4>Subtotal</h4>
                  <span>
                    $
                    {(
                      product.price -
                      (product.price / 100) * product.discount
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <h4>Shipping</h4>
                  <span>$70</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <h4>Total</h4>
                <span>
                  $
                  {(
                    product.price -
                    (product.price / 100) * product.discount +
                    70
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
