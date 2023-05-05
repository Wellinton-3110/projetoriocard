import { NavBar } from "../../components/NavBar";
import { PprimeiraVia } from "../../scripts/GT/estudante/PprimeiraVia";
import { Footer } from "../../components/Footer";

export function PLUprimeiraVia() {
  const title = "PASSE LIVRE UNIVERSITÁRIO AGENDAMENTO DA 1° VIA";
  const script = `Cliente solicita agendamento para a retirada da primeira via do seu passe livre universitário, ciente que o agendamento é feito exclusivamente através do site da universidade, orientado como acessar o site.`;

  const path = "INFORMAÇÃO | PLU | 1° VIA";
  return (
    <div className="">
      <NavBar />
      <PprimeiraVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
