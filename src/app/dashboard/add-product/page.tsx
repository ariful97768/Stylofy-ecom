"use client";

import InputPhoto from "@/components/inputPhoto";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, RefObject, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { toast } from "sonner";

export interface ImgType {
  img1: File | null;
  img2: File | null;
  img3: File | null;
  img4: File | null;
  img5: File | null;
  img6: File | null;
  img7: File | null;
}

export default function AddProduct() {
  const [inPending, setPending] = useState(false);
  const [imageContainer, setImage] = useState<ImgType>({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
    img7: null,
  });

  const imgRef = useRef<HTMLInputElement | null>(null);
  const imgRef2 = useRef<HTMLInputElement | null>(null);
  const imgRef3 = useRef<HTMLInputElement | null>(null);
  const imgRef4 = useRef<HTMLInputElement | null>(null);
  const imgRef5 = useRef<HTMLInputElement | null>(null);
  const imgRef6 = useRef<HTMLInputElement | null>(null);
  const imgRef7 = useRef<HTMLInputElement | null>(null);

  function handleImageInput(ref: RefObject<HTMLInputElement | null>) {
    if (!ref) return;
    ref.current?.click();
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API;
    const formEvent = e.currentTarget;
    const form = new FormData(formEvent);
    const formData = Object.fromEntries(form);
    const imgArr: File[] = Object.values(imageContainer).filter(
      (i) => i !== null
    );

    if (imgArr.length < 1) {
      Swal.fire({ text: "Please select at least one image!", icon: "warning" });
      return;
    }

    try {
      // upload images
      const imagePromises = imgArr.map(async (img) => {
        if (!img) return null;

        const imageFile = new FormData();
        imageFile.append("image", img);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: "POST",
            body: imageFile,
          }
        );

        const data = await res.json();
        return data;
      });

      const imgRes = await toast
        .promise(Promise.all(imagePromises), {
          loading: "Uploading images...",
          success: (data) => `${data.length} Images uploaded successfully`,
          error: "Uploading failed",
        })
        .unwrap();

      const imgUrl = imgRes.map((img) => img.data.url);

      // post product data
      const product = {
        name: formData.name,
        description: formData.dsc,
        size: formData.size,
        quantity: formData.quantity,
        price: formData.price,
        discount: formData.discount,
        category: formData.category,
        images: imgUrl,
      };

      const dataRes = await toast
        .promise(
          fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/add-product`, {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }),
          {
            loading: "Adding product",
            success: () => "Product added successfully",
            error: (a) => {
              if ((a as string).toString().includes("403"))
                return "You are not authorized";
              return `${a}Failed to add product`;
            },
          }
        )
        .unwrap();

      const res = await dataRes.json();
      formEvent.reset();
      setImage({
        img1: null,
        img2: null,
        img3: null,
        img4: null,
        img5: null,
        img6: null,
        img7: null,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Some unknown error happened");
    } finally {
      setPending(false);
    }
  }
  return (
    <form onSubmit={submit} className="max-w-5xl w-full mx-auto">
      <div className="pt-10 relative w-full">
        <div className="flex mb-5 gap-5">
          <div className="w-full space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                id="name"
                type="text"
                name="name"
                placeholder="Product name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                required
                id="price"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="size">Size</Label>
              <Select required name="size">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="XS">Beshi Chikna: XS</SelectItem>
                  <SelectItem value="S">Small: S</SelectItem>
                  <SelectItem value="M">Medium: M</SelectItem>
                  <SelectItem value="L">Large: L</SelectItem>
                  <SelectItem value="XL">Extra Large: XL</SelectItem>
                  <SelectItem value="2XL">Behsi Muta: 2XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category</Label>
              <Select required name="category">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="T-Shirt">T-Shirts</SelectItem>
                  <SelectItem value="Pant">Pants</SelectItem>
                  <SelectItem value="Jackets">Jackets</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-full space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                required
                id="quantity"
                type="text"
                name="quantity"
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="discount">Discount</Label>
              <Input
                required
                id="discount"
                type="number"
                min={0}
                max={99}
                name="discount"
                placeholder="Discount"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="dsc">Short description</Label>
              <Textarea
                required
                id="dsc"
                name="dsc"
                placeholder="Short description"
                className="h-26 rounded-none"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-3 items-center">
            <InputPhoto
              id="img1"
              imageContainer={imageContainer}
              setImage={setImage}
              isLarge={true}
              func={handleImageInput}
              imageRef={imgRef}
            />
            <div className="space-y-3">
              <div className="flex gap-3">
                <InputPhoto
                  id="img2"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef2}
                />
                <InputPhoto
                  id="img3"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef3}
                />
                <InputPhoto
                  id="img4"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef4}
                />
              </div>
              <div className="flex gap-3">
                <InputPhoto
                  id="img5"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef5}
                />
                <InputPhoto
                  id="img6"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef6}
                />
                <InputPhoto
                  id="img7"
                  imageContainer={imageContainer}
                  setImage={setImage}
                  func={handleImageInput}
                  imageRef={imgRef7}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          disabled={inPending}
          variant={"primary"}
          className="absolute bottom-0 right-0"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
