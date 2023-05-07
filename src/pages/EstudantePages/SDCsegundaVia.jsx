import { NavBar } from "../../components/NavBar";
import { SsegundaVia } from "../../scripts/GT/estudante/SsegundaVia";
import { Footer } from "../../components/Footer";

export function SDCsegundaVia() {
  const title = "AGENDAMENTO DE 2° VIA SEEDUC";
  const script = `Cliente solicita agendamento da segunda via do seu cartão estudante SEEDUC, ciente que o procedimento é realizado exclusivamente através do site do aluno, onde o mesmo pode acessar através do site da riocard na parte de gratuidade.`;

  const path =
    "SERVIÇO | ESTUDANTE | SEEDUC | COMO SOLICITAR A 2° VIA DO CARTÃO";
  return (
    <div className="">
      <NavBar />
      <SsegundaVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
