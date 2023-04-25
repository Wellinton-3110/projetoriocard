import { NavBar } from "../../components/NavBar";
import { BolsaPendente } from "../../scripts/VT/BolsaPendente";
import { Footer } from "../../components/Footer";

export function VTbolsaPendente() {
  const title = "Bolsa de Crédito Pendente";
  const script = `Cliente solicita análise de bolsa de crédito no seu cartão vale transporte, ciente que a bolsa de crédito está pendente em sistema, orientado(a) a aguardar o prazo de 4 dias após a baixa do pagamento da ordem de cancelamento.`;

  const path = "INFORMACAO | USUARIO | VT | BOLSA DE CREDITO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <BolsaPendente title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
