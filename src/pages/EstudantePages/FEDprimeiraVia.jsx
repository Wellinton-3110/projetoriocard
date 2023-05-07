import { NavBar } from "../../components/NavBar";
import { FprimeiraVia } from "../../scripts/GT/estudante/FprimeiraVia";
import { Footer } from "../../components/Footer";

export function FEDprimeiraVia() {
  const title = "AGENDAMENTO DE 1° VIA";
  const script = `Cliente solicita agendamento de primeira via do seu cartão estudante federal, verificado que os dados do aluno e da escola estão de acordo em sistema, agendamento realizado com sucesso, seguem os dados:`;

  const path =
    "SERVIÇO | ESTUDANTE | AGENDAMENTO DE 1° VIA | CADASTRO LOCALIZADO | AÇÃO DE AGENDAMENTO";
  return (
    <div className="">
      <NavBar />
      <FprimeiraVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
