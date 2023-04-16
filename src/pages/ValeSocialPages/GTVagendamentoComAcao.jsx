import { NavBar } from "../../components/NavBar";
import { AgendamentoComAcao } from "../../scripts/GT/valeSocial/AgendamentoComAcao";
import { Footer } from "../../components/Footer";
export function GTVagendamentoComAcao() {
  const title = "Agendamento com ação";
  const script =
    "Cliente solicita agendamento para foto de cartão Vale Social na base. Procedimento realizado com sucesso. Segue dados:";
  const path = "SERVICO | AGENDAMENTO DE 1 VIA | CADASTRO LOCALIZADO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <AgendamentoComAcao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
