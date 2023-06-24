import { Show7Image } from "../../components/Show7Image";
import { AiOutlineCopy } from "react-icons/ai";
import "../../styles/index.css";
import "../../styles/styles.css";

import ativacao from "../../assets/VT/bui/ativacao.png";
import ativacao2 from "../../assets/VT/bui/ativacao2.png";
import ativacao3 from "../../assets/VT/bui/ativacao3.png";
import ativacao4 from "../../assets/VT/bui/ativacao4.png";
import ativacao5 from "../../assets/VT/bui/ativacao5.png";
import ativacao6 from "../../assets/VT/bui/ativacao6.png";
import ativacao7 from "../../assets/VT/bui/ativacao7.png";

export function AtivacaoBui(props) {
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
    <div className="w-full h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="animateCard bgScriptVT overflow-hidden flex flex-col relative w-[75vw] h-[71vh] m-auto text-center border-t-[1px] border-b-[2px] border-r-[3px] border-l-[4.5px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[65vh]">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h1 className="ml-6 font-black [font-size:23px] [letter-spacing:2px] underline [line-height:40px] absolute top-6">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold [font-size:16px] [letter-spacing:1px] max-w-[650px] sm:w-[230px] tall:text-[13px] sm:font-normal md:w-[330px]"
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
            <AiOutlineCopy className="w-9 h-9" />
          </span>
          <span className="absolute  bottom-1 right-12 cursor-pointer">
            <Show7Image
              className="w-9 h-9"
              image1={ativacao}
              image2={ativacao2}
              image3={ativacao3}
              image4={ativacao4}
              image5={ativacao5}
              image6={ativacao6}
              image7={ativacao7}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
