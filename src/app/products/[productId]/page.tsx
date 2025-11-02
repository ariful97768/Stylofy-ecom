import Image from "next/image";
import img from "@/assets/feature-product.png";

export default function ProductDetails() {
  return (
    <main className="max-w-7xl flex gap-[100px] justify-center tracking-wider mx-auto mt-14">
      <div className="flex gap-10 items-center">
        <div>
          <div className="relative w-[367px] border border-gray-300 h-[428px]">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative w-16 h-[76px] border border-gray-300">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
          <div className="relative w-16 h-[76px] border border-gray-300">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
          <div className="relative w-16 h-[76px] border border-gray-300">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
          <div className="relative w-16 h-[76px] border border-gray-300">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
          <div className="relative w-16 h-[76px] border border-gray-300">
            <Image
              src={img}
              className="object-cover"
              fill
              alt="product image"
            />
          </div>
        </div>
      </div>
      <div className="border border-gray-300 flex flex-col pt-12 px-10 pb-3">
        <div>
          <h1 className="uppercase pb-1.5 text-sm font-semibold">
            ABSTRACT PRINT SHIRT
          </h1>
          <span className="text-sm font-semibold">$99</span>
          <p className="text-xs mt-3 text-black/50 font-semibold">
            MRP incl. of all taxes
          </p>
        </div>
        <p className="font-medium text-xs mt-10 mb-22 max-w-[250px]">
          Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
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
        <button className="py-2.5 min:w-[100px] max-h-max w-full items-center justify-center flex px-15 bg-black/30 rounded-none uppercase text-sm font-semibold shrink-0">
          Buy Now
        </button>
      </div>
    </main>
  );
}
