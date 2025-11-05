import Image from "next/image";
import { cookies } from "next/headers";
import { type Product } from "@/components/ui/product-card";
import AddToCart from "./add-to-cart";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const id = await params;
  const product: Product = await (
    await fetch(`/api/get-product/${id.productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    })
  ).json();
  console.log(product);
  return (
    <main className="flex items-center justify-center h-[calc(100vh-150px)]">
      <div className="max-w-7xl flex gap-[100px] justify-center tracking-wider mx-auto mt-14">
        <div className="flex gap-10 items-center">
          <div>
            <div className="relative w-[367px] border border-gray-300 h-[428px]">
              <Image
                src={product?.images[0]}
                unoptimized
                className="object-cover"
                fill
                alt="product image"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto h-[428px] gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-16 shrink-0 h-[76px] border border-gray-300"
              >
                <Image
                  src={img}
                  unoptimized
                  className="object-cover"
                  fill
                  alt="product image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-300 flex flex-col pt-12 px-10 pb-3">
          <div>
            <h1 className="uppercase pb-1.5 text-sm font-semibold">
              {product.name}
            </h1>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                Price: ${product.price}
              </span>
              <span className="text-sm font-semibold">
                Discount: %{product.discount}
              </span>
            </div>
            <p className="text-xs mt-3 text-black/50 font-semibold">
              MRP incl. of all taxes
            </p>
          </div>
          <p className="font-medium text-xs mt-10 mb-22 max-w-[250px]">
            {product.description}
          </p>
          <div className="grow">
            <h4 className="mb-2 text-sm">Size</h4>
            <div className="flex gap-1">
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                XS
              </span>
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                S
              </span>
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                M
              </span>
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                L
              </span>
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                XL
              </span>
              <span className="border border-gray-400 p-2.5 font-semibold text-sm inline-block text-center hover:cursor-default w-10 h-10">
                2X
              </span>
            </div>
          </div>
          <AddToCart id={product._id} />
        </div>
      </div>
    </main>
  );
}
