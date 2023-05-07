import { NavBar } from "../../components/NavBar";
import { Fcadastramento } from "../../scripts/GT/estudante/Fcadastramento";
import { Footer } from "../../components/Footer";

export function FEDcadastramento() {
  const title = "CADASTRAMENTO ESTUDANTE FEDERAL";
  const script = `Cliente solicita cadastramento para retirada do cartão estudante federal, ciente que o cadastramento é realizado exclusivamente na escola, após isso, retornar o contato com a Riocard para agendamento da primeira via do cartão`;

  const path = "SERVIÇO | ESTUDANTE | BENEFÍCIO";
  return (
    <div className="">
      <NavBar />
      <Fcadastramento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
