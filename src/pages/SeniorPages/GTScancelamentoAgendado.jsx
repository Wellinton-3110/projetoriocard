import { NavBar } from "../../components/NavBar";
import { CancelamentoAgendado } from "../../scripts/GT/senior/CancelamentoAgendado";
import { Footer } from "../../components/Footer";
export function GTScancelamentoAgendado() {
  const title = "Cancelamento com ação de agendmaneto";
  const script =
    "Cliente solicita cancelamento do seu cartão sênior na base por motivo de (...) e agendamento para segunda via. Procedimento realizado com sucesso. Segue dados:";
  const path = "SERVICO | SENIOR | CANCELAMENTO E SOLICITACAO DE 2 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <CancelamentoAgendado title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
