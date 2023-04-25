import { NavBar } from "../../components/NavBar";
import { BolsaGerada } from "../../scripts/VT/BolsaGerada";
import { Footer } from "../../components/Footer";

export function VTbolsaGerada() {
  const title = "Bolsa de Crédito Gerada";
  const script = `Cliente solicita análise de bolsa de crédito no seu cartão vale transporte, ciente que a bolsa foi gerada e que teria que entrar no site da riocard "para empresas", na parte de pedidos, selecionar a opção de gerenciamento de bolsa de crédito do cartão para a segunda via e efetuar a transferência.`;

  const path = "INFORMACAO | USUARIO | VT | BOLSA DE CREDITO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <BolsaGerada title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
