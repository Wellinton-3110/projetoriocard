import { NavBar } from "../../components/NavBar";
import { AtivacaoTsocial } from "../../scripts/EX/AtivacaoTsocial";
import { Footer } from "../../components/Footer";

export function EXativacaoTsocial() {
  const title = "ATIVAÇÃO TARIFA SOCIAL";
  const script =
    'Cliente solicita orientações para ativação da tarifa social no seu cartão expresso, ciente de criar um cadastro no site da riocard "para você", declarar renda no site riobilheteunico.com.br/declaracao e após o prazo máximo de 48 horas, solicitar ativação por meio do site para você, assim, após mais 48 horas validar o benefício pelo app Valida+ ou aproximando o cartão de um terminal de consulta.';
  const path =
    "INFORMACAO | COMPRADOR | EXPRESSO | CADASTRO | CADASTRO DO COMPRADOR";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <AtivacaoTsocial title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
