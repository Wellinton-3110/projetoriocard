import { NavBar } from "../../components/NavBar";
import { Integracao } from "../../scripts/VT/Integracao";
import { Footer } from "../../components/Footer";

export function VTintegracao() {
  const title = "INFORMAÇÕES SOBRE INTEGRAÇÃO";
  const script = `Cliente solicita analise das integrações do seu cartão vale transporte nos dias(...), ciente que não temos acesso ao relatório de uso, saldo do cartão e nem a valores das integrações, em sistema, orientado a verificar o relatório de uso no aplicativo ou solicita-loem loja.`;

  const path =
    "INFORMACAO | USUARIO | VT | CARTÃO | INFORMAÇÕES SOBRE INTEGRAÇÃO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Integracao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
