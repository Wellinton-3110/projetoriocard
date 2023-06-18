import "../../../../src/styles/styles.css";
import "../../../../src/styles/index.css";
import { AiOutlineCopy } from "react-icons/ai";

export function Prenovacao(props) {
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
      <div className="animateCard bgScript overflow-hidden flex flex-col relative w-[71vw] h-[71vh] m-auto text-center border-t-[1px] border-b-[2px] border-r-[3px] border-l-[4.5px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[65vh]">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h1 className="ml-6 font-black [font-size:22px] [letter-spacing:1px] underline [line-height:20px] absolute top-10 tall:top-2">
            {props.title}
          </h1>
          <h2
            id="copy"
            className="font-bold mb-5 text-[14px] [letter-spacing:1px] max-w-[770px] sm:w-[330px] tall:text-[11px] sm:font-normal md:w-[430px]"
          >
            {props.script}

            <div className="text-[12px] w-[750px] ">
              <br />
              <br />
              <h3>Bolsista ProUni / Cotista:</h3>
              <br />
              <p className="text-left text-[11px]">
                Não é necessário comparecer em uma das lojas Riocard Mais. A
                renovação será automática mediante o envio dos dados válidos
                pela instituição de ensino.
              </p>
            </div>
            <div className="text-[12px] w-[750px]">
              <br />

              <h3 className="text-center">Hipossuficientes:</h3>
              <br />
              <p className="text-left text-[11px]">
                A solicitação de renovação é anual e presencial.
              </p>
              <br />
              <p className="text-left text-[11px]">
                O aluno deve ir à uma da lojas de gratuidade Riocard Mais (Campo
                Grande, Carioca, Méier ou Siqueira Campos), mediante agendamento
                prévio e apresentar toda a documentação obrigatória para a
                concessão do benefício.{" "}
              </p>
              <br />
              <p className="text-left text-[11px]">
                Todos os documentos necessários para emissão da 1ª via deverão
                ser apresentados, atualizados, juntamente com o cartão atual.
              </p>
              <br />
              <p className="text-left text-[11px]">
                Caso ele esteja danificado, ou tenha sido perdido, será
                necessário o pagamento da taxa para emissão da 2ª via.
              </p>
            </div>
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
        </div>
      </div>
    </div>
  );
}
