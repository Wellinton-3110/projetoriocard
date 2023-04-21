import { NavBar } from "../../components/NavBar";
import { Integracao } from "../../scripts/EX/Integracao";
import { Footer } from "../../components/Footer";

export function EXintegracao() {
  const title = "INFORMAÇÕES SOBRE INTEGRAÇÃO";
  const script = `Cliente solicita analise das integrações do seu cartão expresso nos dias(...), ciente que não temos acesso ao relatório de uso, saldo do cartão e nem a valores das integrações, em sistema, orientado a verificar o relatório de uso no aplicativo ou solicita-loem loja.`;

  const path =
    "INFORMACAO | USUARIO | EXPRESSO | RELATÓRIO | SALDO E INFORMAÇÕES DE USO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Integracao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
