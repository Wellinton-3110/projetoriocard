import "../styles/styles.css";
import "../styles/index.css";
import logo from "../assets/logo.png";
import { hideEX } from "../functions/function";
import { HomePath } from "./HomePath";
import { Gt } from "./Gt";

export function NavBar() {
  const nome = window.location.pathname;
  return (
    <div className="AppBar h-[9vh] w-[100vw] bg-gradient-to-b from-[#00CEFC] to-[#00cefc00] flex items-center justify-between ">
      {/*-----------------------------------------------------------LEFT LOGO-----------------------------------------------------------*/}
      <img
        src={logo}
        alt=""
        className="LogoBar w-17 h-10 relative left-[7vw]"
      />

      {/*-----------------------------------------------------------HOME-----------------------------------------------------------*/}
      {nome === "/riocardnew/" || nome === "/riocardnew" ? "" : <HomePath />}
      {/*-----------------------------------------------------------Right Menu-----------------------------------------------------------*/}

      <div className="#MenuBar flex max-h-[43px] max-w-[230px] relative right-[7vw] sm:right-[22%] md:right-[28%] p-3">
        <Gt />

        <ul
          className="flex items-center justify-center p-2 w-[15vw]"
          onClick={hideEX}
        >
          <li className="relative border-solid border-[2px] border-[#ec008c] bg-white p-[5px] rounded-[21%] text-[#ff089cfe] text-[27px] font-medium hover:border-[3px]">
            EX
            <ul
              id="ulEX"
              className="hidden absolute bg-zinc-200 [z-index:2] max-h-[143.5px] cursor-default top-[137%]  border-[1px] border-[black] p-3 font-light text-[15px]"
              onClick={(e) => e.stopPropagation()}
            >
              <li className="hover:border-b-[1px] text-zinc-400 border-black cursor-pointer mb-1">
                BUI
              </li>

              <li className="hover:border-b-[1px] text-blue-400 border-black cursor-pointer mb-1">
                Compra
              </li>

              <li className="hover:border-b-[1px] text-blue-400 border-black cursor-pointer mb-1">
                Cancelamento
              </li>

              <li className="hover:border-b-[1px] text-blue-400 border-black cursor-pointer mb-1">
                Bloqueios
              </li>
            </ul>
          </li>
        </ul>

        <ul id="ulVT" className="flex items-center justify-center p-2 w-[15vw]">
          <li className="border-solid border-[2px] border-[#f37032] bg-white p-[5px] cursor-pointer rounded-[21%] text-[#f37032] text-[27px] font-medium hover:border-[3px]">
            VT
          </li>
        </ul>
      </div>
    </div>
  );
}
