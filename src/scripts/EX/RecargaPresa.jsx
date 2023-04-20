import "../../styles/index.css";
import "../../styles/styles.css";
import { AiOutlineCopy } from "react-icons/ai";

export function RecargaPresa(props) {
  async function copy() {
    const text = document.getElementById("copy").textContent;

    await navigator.clipboard.writeText(text);
    alert(
      "texto copiado com sucesso, tecle CTRL + V na área desejada para colar"
    );
  }
  return (
    <div className="w-full h-[75.5vh] flex items-center justify-center overflow-hidden">
      <div className="bgScriptEx overflow-hidden flex flex-col relative w-[75vw] h-[700px] m-auto text-center border-4 border-t-[1px] border-b-[8px] border-r-[5px] border-l-[6px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[470px]">
        <div className="flex flex-col items-center justify-center flex-1 h-[100%] ">
          <h1 className="ml-6 font-black [font-size:25px] text-center [letter-spacing:2px] underline [line-height:20px] absolute top-5">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold [font-size:17px] [letter-spacing:3px] w-[750px] sm:w-[230px] sm:font-normal md:w-[330px] tall:text-[14px]"
          >
            {props.script}
            <br />
            <br />
            <p>Dados para abertura da ocorrência:</p>
            <div className="flex flex-col text-left font-light text-[14px] tall:text-[12px] tall:">
              <br />
              <br />
              <p>Nome do Usuário:</p>
              <p>Nº do CPF:</p>
              <p>Nº do Cartão:</p>
              <p>Data e Horário da não integração:</p>
              <p>
                Forma de Ressarcimento: (Recarga no cartão ou Conta Corrente/
                Poupança)
              </p>
              <p>Banco:</p>
              <p>Agência:</p>
              <p>Conta:</p>
              <p>Endereço:</p>
              <p>Bairro:</p>
              <p>Município:</p>
              <p>Cep:</p>
              <p>Rua/av:</p>
              <p>Número:</p>
              <p>Complemento:</p>
              <p>Referencia:</p>
            </div>
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
