import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import NavDropdown from "./nav-dropdown";

export default function Navbar() {
  return (
    <nav className="flex mt-7 justify-between items-center max-w-7xl mx-auto">
      <div className="flex gap-9 items-center">
        {/* <GiHamburgerMenu size={20} /> */}
        <ul className="flex gap-8 font-semibold items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Collections</Link>
          </li>
          <li>
            <Link href={"#"}>New</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-black">Stylofy</h1>
      </div>
      <div className="flex gap-11 items-center">
        <span className="p-3 rounded-full -rotate-45 bg-black text-white">
          <FaRegHeart size={16} />
        </span>
        <div className="flex items-center">
          <span className="text-xs px-5 py-3.5 hover:cursor-default bg-black text-white rounded-[18px]">
            Cart
          </span>
          <div className="rounded-full relative border-black border-6 p-2 -ml-1">
            <CgShoppingBag size={16} />
            {/* <div className="absolute -top-1 -right-5 p-px  bg-[#f2f2f2f2] text-xs rounded-full">
              <div className="flex items-center w-3.5 h-3.5 justify-center shrink-0">1</div>
            </div> */}
          </div>
        </div>
        <NavDropdown />
      </div>
    </nav>
  );
}
