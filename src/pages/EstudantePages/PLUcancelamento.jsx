import { NavBar } from "../../components/NavBar";
import { Pcancelamento } from "../../scripts/GT/estudante/Pcancelamento";
import { Footer } from "../../components/Footer";

export function PLUcancelamento() {
  const title = "PASSE LIVRE UNIVERSITÁRIO CANCELAMENTO ";
  const script = `Cliente solicita o cancelamento do seu cartão passe livre universítário, ciente que o cancelamento e agendamento para retirada da segunda via somente é realizado através do site da universidade, orientado como acessar o site.`;

  const path = "INFORMAÇÃO | PLU | BENEFÍCIO";
  return (
    <div className="">
      <NavBar />
      <Pcancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
