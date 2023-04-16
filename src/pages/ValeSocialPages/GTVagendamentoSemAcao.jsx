import { NavBar } from "../../components/NavBar";
import { AgendamentoSemAcao } from "../../scripts/GT/valeSocial/AgendamentoSemAcao";
import { Footer } from "../../components/Footer";
export function GTVagendamentoSemAcao() {
  const title = "Agendamento Sem ação";
  const script =
    "Cliente solicita agendamento para foto de cartão Vale Social na base. O sistema não disponibilizou ação de agendamento. Segue dados: Agendamento para a Loja RioCard Mais(), de acordo com a planilha em sistema, cliente foi informado que deverá apresentar um documento de identificação para retirada do cartão.";
  const path = "SERVICO | AGENDAMENTO DE 1 VIA | CADASTRO LOCALIZADO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <AgendamentoSemAcao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
