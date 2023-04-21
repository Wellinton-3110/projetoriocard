import { NavBar } from "../../components/NavBar";
import { CancelamentoDisponivel } from "../../scripts/EX/CancelamentoDisponivel";
import { Footer } from "../../components/Footer";

export function EXcancelamentoDisponivel() {
  const title = "Cancelamento disponível";
  const script = `Cliente solicitou cancelamento de cartão expresso, mas foi verificado que o cartão está disponível sem nenhum comprador associado. Foi orientado a realizar associação do cartão pelo site "Para Você" de acordo com os guias práticos da riocard, em seguida solicitar o cancelamento pelo site ou central de atendimento.`;

  const path = "INFORMAÇÃO | USUÁRIO | EXPRESSO | CARTÃO | CANCELAR ";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <CancelamentoDisponivel title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
