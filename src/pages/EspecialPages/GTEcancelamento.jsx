import { NavBar } from "../../components/NavBar";
import { Cancelamento } from "../../scripts/GT/especial/Cancelamento";
import { Footer } from "../../components/Footer";
export function GTEcancelamento() {
  const title = "Cancelamento";
  const script =
    "Cliente solicita cancelamento de cartão Especial na base  por motivo de () e agendamento pra segunda via. Procedimento realizado com sucesso. Segue dados:";
  const path = "SERVICO | ESPECIAL | CANCELAMENTO E SOLICITACAO DE 2 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
