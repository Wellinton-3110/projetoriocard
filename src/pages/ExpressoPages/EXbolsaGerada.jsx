import { NavBar } from "../../components/NavBar";
import { BolsaGerada } from "../../scripts/EX/BolsaGerada";
import { Footer } from "../../components/Footer";

export function EXbolsaGerada() {
  const title = "Bolsa de Crédito Gerada";
  const script = `Cliente solicita análise de bolsa de crédito no seu cartão expresso, ciente que a bolsa foi gerada e que teria que entrar no site da riocard "para você", na parte de pedidos, selecionar a opção de transferência de crédito do cartão cancelado para a segunda via e efetuar a transferência.`;

  const path = "INFORMACAO | USUARIO | EXPRESSO | BOLSA DE CREDITO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <BolsaGerada title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
