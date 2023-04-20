import { NavBar } from "../../components/NavBar";
import { RecargaEfetuada } from "../../scripts/EX/RecargaEfetuada";
import { Footer } from "../../components/Footer";

export function EXrecargaEfetuada() {
  const title = "RECARGA EFETUADA";
  const script = `Cliente solicita consulta de recarga no valor de (R$...) realizada no seu cartão expresso, ciente que a recarga já consta efetuada e adicionada ao saldo total do seu cartão.`;

  const path =
    "INFORMACAO | USUARIO | EXPRESSO | RECARGA | CONSULTA DE RECARGA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RecargaEfetuada title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
