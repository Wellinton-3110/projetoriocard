import { NavBar } from "../../components/NavBar";
import { MatualizarEscola } from "../../scripts/GT/estudante/MatualizarEscola";
import { Footer } from "../../components/Footer";

export function MUatualizarEscola() {
  const title = "ESCOLA MUNICIPAL DESATUALIZADA";
  const script = `Cliente solicita (segunda via/cancelamento) do seu cartão estudante municipal, verificado que a escola cadastrada em sistema está divergente da escola verbalizada pelo cliente, ciente que, para que o procedimento solicitado seja realizado, primeiramente teria que solicitar a atualização dos dados do aluno com a nova escola`;

  const path = "INFORMAÇÃO | ESTUDANTE | BENEFÍCIO";
  return (
    <div className="">
      <NavBar />
      <MatualizarEscola title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
