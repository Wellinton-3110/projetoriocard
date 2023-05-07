import { NavBar } from "../../components/NavBar";
import { Vencido } from "../../scripts/GT/valeSocial/Vencido";
import { Footer } from "../../components/Footer";

export function GTVvencido() {
  const title = "CARTÃO VENCIDO";
  const script =
    "Cliente solicitou consulta em cartão Vale Social na base, verificado que o benefício encontrasse vencido segundo informações do sistema, cliente orientado a renovação por meio da apresentação do laudo médico atualizado juntamente com a sua documentação pessoal na fundação leão 13 ou posto SETRANS.";
  const path = "INFORMACOES | VALE SOCIAL | BENEFÍCIO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Vencido title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
