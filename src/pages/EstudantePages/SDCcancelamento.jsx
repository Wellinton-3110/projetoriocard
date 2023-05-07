import { NavBar } from "../../components/NavBar";
import { Scancelamento } from "../../scripts/GT/estudante/Scancelamento";
import { Footer } from "../../components/Footer";

export function SDCcancelamento() {
  const title = "CANCELAMENTO DO CARTÃO SEEDUC";
  const script = `Cliente solicita cancelamento do seu cartão estudante SEEDUC, ciente que o cancelamento e agendamento para a retirada da segunda via do cartão é realizado exclusivamente através do site do aluno, onde o mesmo pode acessar através do site da riocard na parte de gratuidade.`;

  const path =
    "SERVIÇO | ESTUDANTE | SEEDUC | COMO SOLICITAR A 2° VIA DO CARTÃO";
  return (
    <div className="">
      <NavBar />
      <Scancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
