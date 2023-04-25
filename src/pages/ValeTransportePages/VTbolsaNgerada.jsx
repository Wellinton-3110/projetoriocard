import { NavBar } from "../../components/NavBar";
import { BolsaNgerada } from "../../scripts/VT/BolsaNgerada";
import { Footer } from "../../components/Footer";

export function VTbolsaNgerada() {
  const title = "Bolsa não gerada após o cancelamento";
  const script = `Cliente solicita análise de bolsa de crédito no seu cartão vale transporte, verificado que a bolsa de crédito não foi gerada 4 dias após a baixa do pagamento da ordem de cancelamento.`;

  const path =
    "SERVIÇO | COMPRADOR | EXPRESSO | BOLSA DE CREDITO | PROBLEMAS NA GERAÇÃO DE BOLSA DE CREDITO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <BolsaNgerada title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
