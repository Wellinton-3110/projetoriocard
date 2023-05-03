import { NavBar } from "../../components/NavBar";
import { MprimeiraVia } from "../../scripts/GT/estudante/MprimeiraVia";
import { Footer } from "../../components/Footer";

export function MUprimeiraVia() {
  const title = "AGENDAMENTO DE 1° VIA";
  const script = `Cliente solicita agendamento de primeira via do seu cartão estudante municipal, verificado que os dados do aluno e da escola estão de acordo em sistema, agendamento realizado com sucesso, seguem os dados:`;

  const path =
    "SERVIÇO | ESTUDANTE | AGENDAMENTO DE 1° VIA | CADASTRO LOCALIZADO | AÇÃO DE AGENDAMENTO";
  return (
    <div className="">
      <NavBar />
      <MprimeiraVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
