import { NavBar } from "../../components/NavBar";
import { Cancelamento } from "../../scripts/GT/senior/Cancelamento";
import { Footer } from "../../components/Footer";
export function GTScancelamento() {
  const title = "Cancelamento sem ação de agendamento";
  const script =
    "Cliente solicita cancelamento do seu cartão na base  por motivo de  e solicitação de segunda via, porém o sistema não disponibiliza agendamento. O cliente foi direcionado para a Loja RioCard Mais Com posse de documento de identificação e comprovante de residência para solicitar segunda via.";
  const path = "SERVICO | SENIOR | CANCELAMENTO E SOLICITACAO DE 2 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
