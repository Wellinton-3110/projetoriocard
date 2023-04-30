import { NavBar } from "../../components/NavBar";
import { AtivacaoTsocial } from "../../scripts/VT/AtivacaoTsocial";
import { Footer } from "../../components/Footer";

export function VTativacaoTsocial() {
  const title = "ATIVAÇÃO TARIFA SOCIAL";
  const script =
    'Cliente solicita orientações para ativação da tarifa social no seu vale transporte, ciente de criar um cadastro no site da riocard "Para Empresas", declarar renda no site riobilheteunico.com.br/declaracao e após o prazo máximo de 48 horas, solicitar ativação por meio do site para empresas, assim, após mais 48 horas pode validar o benefício pelo app Valida+ ou aproximando o cartão de um terminal de consulta.';
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
