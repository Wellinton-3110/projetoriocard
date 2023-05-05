import { NavBar } from "../../components/NavBar";
import { PsegundaVia } from "../../scripts/GT/estudante/PsegundaVia";
import { Footer } from "../../components/Footer";

export function PLUsegundaVia() {
  const title = "PASSE LIVRE UNIVERSITÁRIO AGENDAMENTO DA 2° VIA";
  const script = `Cliente solicita agendamento para a retirada da segunda via do seu passe livre universitário, ciente que o agendamento é feito exclusivamente através do site da universidade, orientado como acessar o site.`;

  const path = "INFORMAÇÃO | PLU | 2° VIA";
  return (
    <div className="">
      <NavBar />
      <PsegundaVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
