import { NavBar } from "../../components/NavBar";
import { Fcancelamento } from "../../scripts/GT/estudante/Fcancelamento";
import { Footer } from "../../components/Footer";

export function FEDcancelamento() {
  const title = "CANCELAMENTO E SOLICITAÇÃO DE SEGUNDA VIA";
  const script = `Cliente solicita cancelamento de cartão estudante federal por motivos de (), verificado que os dados do aluno e da escola estão de acordo em sistema, cancelamento e agendamento da segunda via realizados com sucesso, seguem os dados:`;

  const path =
    "SERVIÇO | ESTUDANTE | CANCELAMENTO E SOLICITAÇÃO DE SEGUNDA VIA";
  return (
    <div className="">
      <NavBar />
      <Fcancelamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
