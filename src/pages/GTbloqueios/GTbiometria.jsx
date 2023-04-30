import { NavBar } from "../../components/NavBar";
import { Biometria } from "../../scripts/GT/bloqueios/Biometria";
import { Footer } from "../../components/Footer";

export function GTbiometria() {
  const title = "BIOMETRIA IRREGULAR";
  const script = `Cliente solicita o motivo do bloqueio do cartão (), ciente que a biometria facial está irregular e que precisa ir em loja portando a sua documentação, para verificar o motivo do bloqueio e solicitar a reativação do cartão`;

  const path = "INFORMACAO | PLU/ESTUDANTE/ESPECIAL/VALE SOCIAL | BENEFÍCIO  ";
  return (
    <div className="">
      <NavBar />
      <Biometria title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
