import { NavBar } from "../../components/NavBar";
import { RecargaEfetuada } from "../../scripts/VT/RecargaEfetuada";
import { Footer } from "../../components/Footer";

export function VTrecargaEfetuada() {
  const title = "RECARGA EFETUADA";
  const script = `Cliente solicita consulta de recarga no valor de (R$...) realizada no seu cartão vale transporte, ciente que a recarga já consta efetuada e adicionada ao saldo total do seu cartão.`;

  const path = "INFORMACAO | USUARIO | VT | RECARGA | CONSULTA A RECARGA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RecargaEfetuada title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
