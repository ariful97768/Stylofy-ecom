import SearchInput from "@/components/search-input";
import img from "@/assets/feature-product.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/ui/product-card";

export default function Product() {
  return (
    <main className="max-w-7xl tracking-wider mt-14 gap-10 mx-auto flex">
      <aside className="shrink-0 space-y-6 w-1/5">
        <h3 className="font-bold">Filters</h3>
        <div>
          <h4 className="font-bold mb-2 text-sm">Size</h4>
          <div className="flex border-b-2 border-gray-400 border-dotted pb-4.5 gap-1">
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
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Availability</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="availability" />
                  <Label htmlFor="availability">Available</Label>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outOfStock" />
                  <Label htmlFor="outOfStock">Out Of Stock </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Popular</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="availability" />
                  <Label htmlFor="availability">Available</Label>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outOfStock" />
                  <Label htmlFor="outOfStock">Out Of Stock </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="availability" />
                  <Label htmlFor="availability">Available</Label>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outOfStock" />
                  <Label htmlFor="outOfStock">Out Of Stock </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Colors</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="availability" />
                  <Label htmlFor="availability">Available</Label>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outOfStock" />
                  <Label htmlFor="outOfStock">Out Of Stock </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
      <section className="space-y-10">
        <div>
          <div>
            <Breadcrumb>
              <BreadcrumbList className="text-xs">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="font-bold pt-2.5  text-xl tracking-wider uppercase">
              Products
            </h1>
          </div>
          <div className=" flex mt-2 gap-10">
            <SearchInput />
            <div className="gap-2 hidden flex-col">
              <div>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
              </div>
              <div>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
                <span className="uppercase min-w-20 shrink-0 text-xs px-2.5 py-1 border border-gray-400">
                  BEST SELLERS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-8">
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
          <ProductCard img={img} />
        </div>
      </section>
    </main>
  );
}
