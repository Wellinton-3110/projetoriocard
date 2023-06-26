import { BsPhone } from "react-icons/bs";
import { GiVibratingSmartphone } from "react-icons/all";
import "../styles/index.css";

export function AppPhone() {
  return (
    <div className="flex items-center justify-center p-2 w-[15vw]">
      <GiVibratingSmartphone className="relative h-[43px] w-[43px] text-black/50 cursor-pointer" />
      <ul
        id="ulPhone"
        className="hidden text-left absolute bg-zinc-200 [z-index:2] w-[140px] max-h-[193.5px] cursor-default top-[144%] left-[-10%] border-[1px] border-[black] p-3 font-light text-[15px]"
        onClick={(e) => e.stopPropagation()}
      ></ul>
    </div>
  );
}
