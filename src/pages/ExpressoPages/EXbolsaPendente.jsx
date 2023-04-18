import { NavBar } from "../../components/NavBar";
import { BolsaPendente } from "../../scripts/EX/BolsaPendente";
import { Footer } from "../../components/Footer";

export function EXbolsaPendente() {
  const title = "Bolsa de Crédito Pendente";
  const script = `Cliente solicita análise de bolsa de crédito no seu cartão expresso, ciente que a bolsa de crédito está pendente em sistema, dentro do prazo de 4 dias após a baixa do pagamento da ordem de cancelamento, orientado a aguardar o prazo.`;

  const path = "INFORMACAO | USUARIO | EXPRESSO | BOLSA DE CREDITO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <BolsaPendente title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
