import "../../styles/index.css";
import "../../styles/styles.css";
import { AiOutlineCopy } from "react-icons/ai";

export function AtivacaoBui(props) {
  async function copy() {
    const text = document.getElementById("copy").textContent;

    await navigator.clipboard.writeText(text);
    alert(
      "texto copiado com sucesso, tecle CTRL + V na área desejada para colar"
    );
  }
  return (
    <div className="w-full h-[75.5vh] flex items-center justify-center overflow-hidden">
      <div className="bgScriptVT overflow-hidden flex flex-col relative w-[75vw] h-[700px] m-auto text-center border-4 border-t-[1px] border-b-[8px] border-r-[5px] border-l-[6px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[470px]">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h1 className="ml-6 font-black [font-size:23px] [letter-spacing:2px] underline [line-height:40px] absolute top-6">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold [font-size:16px] [letter-spacing:4px] w-[450px] sm:w-[230px] sm:font-normal md:w-[330px]"
          >
            <p>NOME:</p>
            <p>CPF:</p>
            <p>CARTÃO:</p>
            <br />
            {props.script}
          </h2>
          <h3 className="absolute bottom-4">{props.path}</h3>
          <span
            className="absolute  animate-pulse bottom-3 right-3 cursor-pointer"
            onClick={() => {
              copy();
            }}
          >
            <AiOutlineCopy className="w-7 h-7" />
          </span>
        </div>
      </div>
    </div>
  );
}
