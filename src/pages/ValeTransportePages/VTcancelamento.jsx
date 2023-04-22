import { NavBar } from "../../components/NavBar";
import { Cancelamento } from "../../scripts/VT/Cancelamento";
import { Footer } from "../../components/Footer";

export function VTcancelamento() {
  const title = "CANCELAMENTO";
  const script = `Cliente solicita cancelamento de cartão "vale transporte" por motivo de (), foi verificado que cartão está associado a empresa/ele como usuário. Cancelamento realizado com sucesso. Segue dados:`;

  const path = "SERVIÇO | USUÁRIO | VT | CARTÃO | CANCELAR | NA | NA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
