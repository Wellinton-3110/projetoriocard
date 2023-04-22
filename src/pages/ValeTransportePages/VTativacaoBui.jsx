import { NavBar } from "../../components/NavBar";
import { AtivacaoBui } from "../../scripts/VT/AtivacaoBui";
import { Footer } from "../../components/Footer";

export function VTativacaoBui() {
  const title = "ATIVAÇÃO DE BILHETE ÚNICO INTERMUNICIPAL";
  const script =
    'Cliente solicita orientações para ativação do bilhete único no seu cartão vale transporte, ciente de criar um cadastro no site da riocard "Para Empresas", declarar renda no site riobilheteunico.com.br/declaracao e após o prazo máximo de 48 horas, solicitar ativação por meio do site para empresas, assim, após mais 48 horas pode validar o benefício pelo app Valida+ ou aproximando o cartão de um terminal de consulta.';
  const path = "INFORMACAO | USUÁRIO | VT | CARTÃO | ALTERAÇÃO REGRA BUI";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <AtivacaoBui title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
