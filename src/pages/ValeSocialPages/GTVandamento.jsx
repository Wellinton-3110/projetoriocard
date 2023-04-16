import { NavBar } from "../../components/NavBar";
import { Andamento } from "../../scripts/GT/valeSocial/Andamento";
import { Footer } from "../../components/Footer";

export function GTVandamento() {
  const title = "Andamento";
  const script =
    "Cliente solicitou consulta em cartão Vale Social na base, solicita informação a respeito da aprovação do seu benefício vale social. Foi informado(a) que ainda não consta seu cadastro no sistema, orientado(a) a aguardar ou entrar em contato com o posto que solicitou benefício para mais informações.";
  const path = "INFORMACOES | VALE SOCIAL | BENEFÍCIO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Andamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
