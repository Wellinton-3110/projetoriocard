import { NavBar } from "../../components/NavBar";
import { Cancelamento } from "../../scripts/GT/valeSocial/Cancelamento";
import { Footer } from "../../components/Footer";

export function GTVcancelamento() {
  const title = "Cancelamento";
  const script =
    "Cliente solicita cancelamento de cartão Vale Social na base, por motivo de () e agendamento pra segunda via. Procedimento realizado com sucesso. Segue dados:";
  const path = "SERVICO | VALE SOCIAL | CANELAMENTO E SOLICITACAO DE 2 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
