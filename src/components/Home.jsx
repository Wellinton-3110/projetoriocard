import "../styles/styles.css";
import "../styles/index.css";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { hideAllMenus } from "../functions/function";

export function Home() {
  return (
    <div onClick={hideAllMenus} className="w-full h-[73vh] bg-white/10 flex">
      <div className="bgHome w-[83vw] h-[67.5vh] m-auto text-center border-[3px] border-t-[1px] relative border-black/90 rounded-md p-3">
        {/*------------------------------------###-----------------------------------------*/}
        <div className="flex items-center mt-7 justify-center [font-size:26px] tall:text-[21px]">
          <h1 className="md:text-[15px] ml-6 textAp [line-height:40px] [letter-spacing:1px]">
            Olá
            <br className="" /> seja bem vindo(a) ao site de Scripts Riocard,
            escolha o script que deseja nos menus acima
          </h1>

          <span className="md:absolute md:right-[210px] md:top-4">
            <BsArrowUpRight className="w-3 h-3 ml-4 animate-bounce" />
          </span>
        </div>
        {/*-----------------------------------###-----------------------------------------*/}

        <footer className="md:text-[15px] textAp relative mt-5 [font-size:22px] [letter-spacing:2px] tall:text-[17px]">
          ...
          <br />
          <br />
          Após selecionar o script, clique no ícone abaixo para copiar e
          cole(CTRL + V) onde desejar.
          <BsArrowDownRight className="absolute right-[10vw] top-[17vh] w-7 h-7 animate-bounce sm:top-[22vh] sm:right-[13vw] md:w-4 md:h4 md:right-[9vw] md:top-[27vh]" />
        </footer>
        <AiOutlineCopy className="absolute w-7 h-7 bottom-7 right-7 mouse-pointer animate-ping md:w-4 md:h4 md:right-2 md:bottom-2" />
        {/*-----------------------------------###-----------------------------------------*/}
      </div>
    </div>
  );
}
