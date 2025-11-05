import Image from "next/image";
import Link from "next/link";
export interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  size: string;
  discount: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  _id: string;
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div id="product-card" className="max-w-max border">
      <Link href={`/products/${product._id}`}>
        <div className="relative border border-gray-400 w-[301px] h-[308px]">
          <Image
            unoptimized
            src={product.images[0]}
            fill
            className="object-cover"
            alt="product"
          />
        </div>
        <div className="pt-3.5">
          <span className="text-black/60 text-xs font-medium">
            {product.category}
          </span>
          <div className="flex  items-center justify-between">
            <h2 className="w-65 truncate">{product.name}</h2>
            <span>${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
