import "../styles/styles.css";
import "../styles/index.css";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { hideAllMenus } from "../functions/function";

export function Home() {
  return (
    <div
      onClick={hideAllMenus}
      className="w-full h-[75vh] bg-white/10 flex [z-index:1]"
    >
      <div className="bgHome w-[85vw] h-[69.5vh] m-auto text-center border-[3px] border-t-[1px] relative border-black/90 rounded-md p-3">
        {/*------------------------------------###-----------------------------------------*/}
        <div className="flex items-center mt-[20px] justify-center [font-size:26px] tall:text-[21px]">
          <h1 className="myFont md:text-[11px] ml-6 [line-height:40px]">
            Olá
            <br className="" /> seja bem vindo(a) ao site de Scripts Riocard,
            escolha o script que deseja nos menus acima
          </h1>

          <span className="absolute top-[5vh] right-[9vw] md:right-[210px] md:top-4">
            <BsArrowUpRight className="w-5 h-5 ml-4 animate-bounce" />
          </span>
        </div>
        {/*-----------------------------------###-----------------------------------------*/}

        <footer className="mySubFont md:text-[15px] textAp relative mt-14 tall:text-[17px]">
          ...
          <br />
          <br />
          Após selecionar o script, clique no ícone abaixo para copiar e
          cole(CTRL + V) onde desejar.
          <BsArrowDownRight className="absolute right-[10vw] top-[23vh] w-7 h-7 animate-bounce sm:top-[22vh] sm:right-[13vw] md:w-4 md:h4 md:right-[9vw] md:top-[27vh]" />
        </footer>
        <AiOutlineCopy className="absolute w-7 h-7 bottom-7 right-7 mouse-pointer animate-ping md:w-4 md:h4 md:right-2 md:bottom-2" />
        {/*-----------------------------------###-----------------------------------------*/}
      </div>
    </div>
  );
}
