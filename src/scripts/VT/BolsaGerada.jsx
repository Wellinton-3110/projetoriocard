import "../../styles/index.css";
import "../../styles/styles.css";
import { AiOutlineCopy } from "react-icons/ai";

export function BolsaGerada(props) {
  async function copy() {
    const copyElement = document.getElementById("copy");
    const range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      const successful = document.execCommand("copy");
      const message = successful
        ? "Texto copiado com sucesso!"
        : "Falha ao copiar o texto.";
      alert(message);
    } catch (err) {
      console.error("Erro ao copiar o texto:", err);
    }

    window.getSelection().removeAllRanges();
  }
  return (
    <div className="w-full h-[75.5vh] flex items-center justify-center overflow-hidden">
      <div className="animateCard bgScriptVT overflow-hidden flex flex-col relative w-[75vw] h-[67vh] m-auto text-center border-4 border-t-[1px] border-b-[8px] border-r-[5px] border-l-[6px] border-black/90 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[65vh]">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h1 className="ml-6 font-black [font-size:25px] [letter-spacing:1px] underline [line-height:40px] absolute top-5">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold [font-size:17px] [letter-spacing:3px] w-[450px] sm:w-[230px] tall:text-[13px] sm:font-normal md:w-[330px]"
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
