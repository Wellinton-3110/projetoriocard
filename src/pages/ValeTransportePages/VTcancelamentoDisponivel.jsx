import { NavBar } from "../../components/NavBar";
import { CancelamentoDisponivel } from "../../scripts/VT/CancelamentoDisponivel";
import { Footer } from "../../components/Footer";

export function VTcancelamentoDisponivel() {
  const title = "CANCELAMENTO VT COM STATUS DISPONÍVEL";
  const script = `Cliente solicitou cancelamento de cartão vale transporte, mas foi verificado que o cartão está disponível sem nenhum comprador associado. Foi orientado a realizar associação do cartão pelo site "Para Empresas" de acordo com os guias práticos da riocard, em seguida solicitar o cancelamento pelo site ou central de atendimento.`;

  const path = "INFORMAÇÃO | USUÁRIO | EXPRESSO | CARTÃO | CANCELAR ";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <CancelamentoDisponivel title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
