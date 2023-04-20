import { NavBar } from "../../components/NavBar";
import { SuspensoSetrans } from "../../scripts/VT/SuspensoSetrans";
import { Footer } from "../../components/Footer";

export function VTsuspensoSetrans() {
  const title = "BUI Suspensão SETRANS";
  const script = `Cliente solicita consulta de status do bilhete único em cartão vale transporte, foi verificado que o mesmo possui suspensão setrans devido a (...), o mesmo foi direcionado a loja riocard mais próxima com a sua documentação, para verificar o motivo da suspensão.`;

  const path = "INFORMACAO | USUARIO | VT | CARTAO | BU SUSPENSO SETRANS";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <SuspensoSetrans title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
