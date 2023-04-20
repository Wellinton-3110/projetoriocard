import { NavBar } from "../../components/NavBar";
import { AtivacaoBui } from "../../scripts/EX/AtivacaoBui";
import { Footer } from "../../components/Footer";

export function EXativacaoBui() {
  const title = "Ativação Bilhete Único";
  const script =
    'Cliente solicita orientações para ativação do bilhete único no seu cartão expresso, ciente de criar um cadastro no site da riocard "para você", declarar renda no site riobilheteunico.com.br/declaracao e após um prazo máximo de 48 horas pode solicitar ativação por meio do site para você, assim, após mais 48 horas pode validar pelo app Valida+ ou aproximando o cartão de um Terminal de Consulta.';
  const path = "INFORMACAO | USUARIO | EXPRESSO | ALTERAÇAO REGRA BUI";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <AtivacaoBui title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
