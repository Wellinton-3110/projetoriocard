import { NavBar } from "../../components/NavBar";
import { Cancelamento } from "../../scripts/EX/Cancelamento";
import { Footer } from "../../components/Footer";

export function EXcancelamento() {
  const title = "CANCELAMENTO";
  const script = `Cliente solicita cancelamento de cartão "EXPRESSO" por motivo de (), foi verificado que cartão está associado a ele como usuário. Cancelamento feito com sucesso. Segue dados:`;

  const path = "SERVIÇO | USUÁRIO | VT | CARTÃO | CANCELAR | NA | NA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
