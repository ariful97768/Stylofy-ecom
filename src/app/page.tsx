import Navbar from "../components/navbar";
import { FiSearch } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import img from "@/assets/feature-product.png";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mt-14 mx-auto">
        <div>
          <h2>MEN</h2>
          <h2>WOMEN</h2>
          <h2>KIDS</h2>
          <div className="max-w-[350px] mt-4 max-h-max relative">
            <FiSearch
              size={16}
              className="absolute top-1/2 -translate-y-1/2 left-2"
            />

            <input
              type="text"
              className="border border-none outline-none pl-7 pr-18 w-full py-2 bg-black/30"
              name="search"
              id="search"
            />
            <span className="absolute top-1/2 hover:cursor-pointer h-full flex items-center justify-center -translate-y-1/2 text-black/70 right-2">
              search
            </span>
          </div>
        </div>
        <section className="mt-23 flex items-center">
          <div className="w-full mr-3 flex flex-col h-[376px]">
            <div className="grow">
              <h1 className="text-5xl tracking-wider mb-2 font-black leading-10">
                NEW <br /> COLLECTION
              </h1>
              <p className="tracking-wider">
                Summer <br /> 2024
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-black/30 shrink-0 items-center justify-between max-w-64 py-2 w-full px-7">
                <span>Go To Shop</span>
                <BsArrowUpRight className="rotate-45" size={24} />
              </div>
              <div className="flex gap-3 items-center">
                <span className="rotate-180 text-gray-500 border-gray-400 border-2">
                  <RiArrowRightSLine size={34} />
                </span>
                <span className="border-gray-400 border-2 text-black/80">
                  <RiArrowRightSLine size={34} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="relative border border-gray-400 w-[366px] h-[376px]">
              <Image src={img} fill className="object-cover" alt="product" />
            </div>
            <div className="relative border border-gray-400 w-[366px] h-[376px]">
              <Image src={img} fill className="object-cover" alt="product" />
            </div>
          </div>
        </section>
        <section className="mt-37 space-y-6">
          <div className="relative max-w-max">
            <h1 className="text-5xl tracking-wider mb-2 font-black leading-10">
              NEW <br /> THIS WEEK
            </h1>
            <span className="tracking-wider absolute top-5 font-bold -right-9">
              (50)
            </span>
          </div>
          <div className="w-full flex gap-6 relative">
            <span className="absolute right-0 -top-10">See All</span>
            <div id="product-card" className="max-w-max">
              <div className="relative border border-gray-400 w-[301px] h-[308px]">
                <Image src={img} fill className="object-cover" alt="product" />
              </div>
              <div className="pt-3.5">
                <span className="text-black/60 text-xs font-medium">
                  V-Neck T-Shirt
                </span>
                <div className="flex items-center justify-between">
                  <h2>Embroidered Seersucker Shirt</h2>
                  <span>$99</span>
                </div>
              </div>
            </div>
            <div id="product-card" className="max-w-max">
              <div className="relative border border-gray-400 w-[301px] h-[308px]">
                <Image src={img} fill className="object-cover" alt="product" />
              </div>
              <div className="pt-3.5">
                <span className="text-black/60 text-xs font-medium">
                  V-Neck T-Shirt
                </span>
                <div className="flex items-center justify-between">
                  <h2>Embroidered Seersucker Shirt</h2>
                  <span>$99</span>
                </div>
              </div>
            </div>
            <div id="product-card" className="max-w-max">
              <div className="relative border border-gray-400 w-[301px] h-[308px]">
                <Image src={img} fill className="object-cover" alt="product" />
              </div>
              <div className="pt-3.5">
                <span className="text-black/60 text-xs font-medium">
                  V-Neck T-Shirt
                </span>
                <div className="flex items-center justify-between">
                  <h2>Embroidered Seersucker Shirt</h2>
                  <span>$99</span>
                </div>
              </div>
            </div>
            <div id="product-card" className="max-w-max">
              <div className="relative border border-gray-400 w-[301px] h-[308px]">
                <Image src={img} fill className="object-cover" alt="product" />
              </div>
              <div className="pt-3.5">
                <span className="text-black/60 text-xs font-medium">
                  V-Neck T-Shirt
                </span>
                <div className="flex items-center justify-between">
                  <h2>Embroidered Seersucker Shirt</h2>
                  <span>$99</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-max mx-auto flex gap-3 items-center">
              <span className="rotate-180 text-gray-500 border-gray-400 border-2">
                <RiArrowRightSLine size={34} />
              </span>
              <span className="border-gray-400 border-2 text-black/80">
                <RiArrowRightSLine size={34} />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
