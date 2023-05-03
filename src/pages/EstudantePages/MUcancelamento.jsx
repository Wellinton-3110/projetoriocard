import { NavBar } from "../../components/NavBar";
import { Mcancelamento } from "../../scripts/GT/estudante/Mcancelamento";
import { Footer } from "../../components/Footer";

export function MUcancelamento() {
  const title = "CANCELAMENTO E SOLICITAÇÃO DE SEGUNDA VIA";
  const script = `Cliente solicita cancelamento de cartão estudante municipal por motivos de (), verificado que os dados do aluno e da escola estão de acordo em sistema, cancelamento e agendamento da segunda via realizados com sucesso, seguem os dados:`;

  const path =
    "SERVIÇO | ESTUDANTE | CANCELAMENTO E SOLICITAÇÃO DE SEGUNDA VIA";
  return (
    <div className="">
      <NavBar />
      <Mcancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
