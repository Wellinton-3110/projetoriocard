import { NavBar } from "../../components/NavBar";
import { Prenovacao } from "../../scripts/GT/estudante/Prenovacao";
import { Footer } from "../../components/Footer";

export function PLUrenovacao() {
  const title = "PASSE LIVRE UNIVERSITÁRIO RENOVAÇÃO";
  const script = `Cliente solicita orientações para renovação do seu benefício passe livre universitário, orientado de acordo com o site da riocard:`;

  const path = "INFORMAÇÃO | PLU | BENEFÍCIO | REVALIDAÇÃO";
  return (
    <div className="">
      <NavBar />
      <Prenovacao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
