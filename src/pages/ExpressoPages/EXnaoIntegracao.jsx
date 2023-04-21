import { NavBar } from "../../components/NavBar";
import { NaoIntegracao } from "../../scripts/EX/NaoIntegracao";
import { Footer } from "../../components/Footer";

export function EXnaoIntegracao() {
  const title = "NÃO INTEGRAÇÃO(BUI/BUC)";
  const script = `Cliente informa que seu cartão expresso não integrou de acordo com o (bilhete único carioca/ bilhete único intermunicipal), cliente solicita análise para resarcimento, seguem os dados:`;

  const path =
    "SERVIÇO | COMPRADOR | EXPRESSO | RECARCIMENTO | BILHETE ÚNICO CARIOCA / INTERMUNICIPAL";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <NaoIntegracao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
