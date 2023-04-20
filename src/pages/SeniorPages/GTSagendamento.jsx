import { NavBar } from "../../components/NavBar";
import { Agendamento } from "../../scripts/GT/senior/Agendamento";
import { Footer } from "../../components/Footer";
export function GTSagendamento() {
  const title = "Agendamento";
  const script =
    "Cliente solicita agendamento para foto de cartão sênior na base. Procedimento realizado com sucesso. Segue dados:";
  const path = "SERVICO | SENIOR | AGENDAMENTO DE FOTO/1 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Agendamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
