import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="max-w-[350px] max-h-max relative">
      <FiSearch
        size={16}
        className="absolute top-1/2 -translate-y-1/2 left-2"
      />

      <input
        type="text"
        className="border border-none outline-none pl-7 pr-18 w-full py-2 bg-black/15"
        name="search"
        id="search"
      />
      <span className="absolute top-1/2 hover:cursor-pointer h-full flex items-center justify-center -translate-y-1/2 text-black/70 right-2">
        search
      </span>
    </div>
  );
}
