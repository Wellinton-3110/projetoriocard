import { NavBar } from "../../components/NavBar";
import { RecargaPresa } from "../../scripts/EX/RecargaPresa";
import { Footer } from "../../components/Footer";

export function EXrecargaPresa() {
  const title = "RECARGA PRESA NO ATM";
  const script = `Cliente informa que ao tentar realizar recarga no ATM, recarga fica presa e não é compensada no cartão expresso.`;

  const path =
    "RECLAMAÇÃO | COMPRADOR | EXPRESSO | RECARGA | ATM | DESFEITA/PENDENTE | COM/SEM NÚMERO DE TERMINAL";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RecargaPresa title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
