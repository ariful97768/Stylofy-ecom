import { ImgType } from "@/app/dashboard/add-product/page";
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction } from "react";
import { FiUpload } from "react-icons/fi";

const InputPhoto = ({
  imageRef,
  isLarge = false,
  func,
  id,
  setImage,
  imageContainer,
}: {
  imageRef: RefObject<HTMLInputElement | null>;
  isLarge?: boolean;
  func: (a: RefObject<HTMLInputElement | null>) => void;
  id: keyof ImgType;
  setImage: Dispatch<SetStateAction<ImgType>>;
  imageContainer: ImgType;
}) => {
  return (
    <div
      id={id.toString()}
      onClick={() => func(imageRef)}
      className={`${
        isLarge
          ? `${
              imageContainer[id] ? "" : "py-10 px-9"
            } w-[220px] h-[220px] col-span-2 row-span-2`
          : `${imageContainer[id] ? "" : "py-6 px-9"} w-[100px] h-[100px]`
      } border border-gray-400 bg-[#F6F9FF] overflow-hidden flex flex-col items-center justify-center relative gap-2 rounded-2xl border-dashed`}
    >
      {imageContainer[id] ? (
        <Image
          fill
          className="object-cover w-full h-full"
          src={URL.createObjectURL(imageContainer[id])}
          alt=""
        />
      ) : (
        <>
          <div className="p-2 border border-[#316EED] rounded-lg border-dashed max-w-max max-h-max">
            <FiUpload className="text-xl" />
          </div>
          {isLarge && (
            <div className="text-center">
              <h3 className="font-semibold txt-primary">Upload cover photo</h3>
              <p className="text-xs txt-secondary">jpg, png only</p>
            </div>
          )}
          <input 
            onChange={(e) =>
              e.target?.files && e.target?.files[0]
                ? setImage({ ...imageContainer, [id]: e.target?.files[0] })
                : null
            }
            hidden
            id={id.toString()}
            accept="image/jpeg, image/png"
            type="file"
            ref={imageRef}
          />
        </>
      )}
    </div>
  );
};

export default InputPhoto;
