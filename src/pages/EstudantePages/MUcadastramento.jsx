import { NavBar } from "../../components/NavBar";
import { Mcadastramento } from "../../scripts/GT/estudante/Mcadastramento";
import { Footer } from "../../components/Footer";

export function MUcadastramento() {
  const title = "CADASTRAMENTO ESTUDANTE MUNICIPAL";
  const script = `Cliente solicita cadastramento para retirada do cartão estudante municipal, ciente que o cadastramento é realizado exclusivamente na escola, após isso, retornar o contato com a Riocard para agendamento da primeira via do cartão`;

  const path = "SERVIÇO | ESTUDANTE | BENEFÍCIO";
  return (
    <div className="">
      <NavBar />
      <Mcadastramento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
