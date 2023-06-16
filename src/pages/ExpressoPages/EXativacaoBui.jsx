import { NavBar } from "../../components/NavBar";
import { AtivacaoBui } from "../../scripts/EX/AtivacaoBui";
import { Footer } from "../../components/Footer";

export function EXativacaoBui() {
  const title = "Ativação Bilhete Único";
  const script =
    'Cliente solicita orientações para ativação do bilhete único no seu cartão expresso, ciente de criar um cadastro no site da riocard "para você", declarar renda no site riobilheteunico.com.br/declaracao e após o prazo máximo de 48 horas, solicitar ativação por meio do site para você, assim, após mais 48 horas validar o benefício pelo app Valida+ ou aproximando o cartão de um terminal de consulta.';
  const path = "INFORMACAO | USUARIO | EXPRESSO | ALTERAÇAO REGRA BUI";
  return (
    <div className="">
      <NavBar />
      <AtivacaoBui title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
