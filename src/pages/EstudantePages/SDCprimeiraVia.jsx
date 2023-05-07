import { NavBar } from "../../components/NavBar";
import { SprimeiraVia } from "../../scripts/GT/estudante/SprimeiraVia";
import { Footer } from "../../components/Footer";

export function SDCprimeiraVia() {
  const title = "AGENDAMENTO DE 1° VIA SEEDUC";
  const script = `Cliente solicita agendamento de primeira via do seu cartão estudante SEEDUC, ciente que o procedimento é realizado exclusivamente através do site do aluno, onde o mesmo pode acessar através do site da riocard na parte de gratuidade.`;

  const path = "SERVIÇO | ESTUDANTE | SEEDUC | COMO SOLICITAR CARTÃO";
  return (
    <div className="">
      <NavBar />
      <SprimeiraVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
