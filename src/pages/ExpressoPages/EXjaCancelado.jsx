import { NavBar } from "../../components/NavBar";
import { JaCancelado } from "../../scripts/EX/JaCancelado";
import { Footer } from "../../components/Footer";

export function EXjaCancelado() {
  const title = "CARTÃO JÁ CANCELADO";
  const script = `Cliente solicita cancelamento de cartão "expresso", foi verificado que cartão já está cancelado em sistema pelo motivo de (). Cliente ciente do número da ordem de cancelamento ().`;

  const path =
    "INFORMAÇÃO | USUÁRIO | EXPRESSO | CARTÃO | CANCELAMENTO POR QUEBRA, PERDA OU AVARIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <JaCancelado title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
