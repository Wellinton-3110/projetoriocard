import { NavBar } from "../../components/NavBar";
import { Andamento } from "../../scripts/GT/especial/Andamento";
import { Footer } from "../../components/Footer";
export function GTEandamento() {
  const title = "Andamento da solicitação";
  const script =
    "Cliente solicita informações a respeito da aprovação do seu benefício. Foi informada que ainda não consta seu cadastro no sistema, orientado(a) a aguardar ou entrar em contato com o posto que solicitou benefício para mais informações.";
  const path = "INFORMACAO | ESPECIAL | BENEFICIO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Andamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
