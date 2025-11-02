import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function ProductCard({ img }: { img: string | StaticImport }) {
  return (
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
  );
}
