import "../../../styles/index.css";
import "../../../styles/styles.css";
import { AiOutlineCopy } from "react-icons/ai";

export function AgendamentoComAcao(props) {
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
      <div className="animateCard bgScript overflow-hidden flex flex-col relative w-[71vw] h-[67vh] m-auto text-center border-4 border-t-[1px] border-b-[8px] border-r-[5px] border-l-[6px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[65vh]">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h1 className="ml-6 font-black [font-size:21px] [letter-spacing:1px] underline [line-height:40px] absolute top-4">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold [font-size:12px] [letter-spacing:3px] w-[690px] sm:w-[250px] tall:text-[10px] sm:font-normal md:w-[350px]"
          >
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
