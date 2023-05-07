import { NavBar } from "../../components/NavBar";
import { FatualizarEscola } from "../../scripts/GT/estudante/FatualizarEscola";
import { Footer } from "../../components/Footer";

export function FEDatualizarEscola() {
  const title = "ESCOLA FEDERAL DESATUALIZADA";
  const script = `Cliente solicita (segunda via/cancelamento) do seu cartão estudante federal, verificado que a escola cadastrada em sistema está divergente da escola verbalizada pelo cliente, ciente que, para que o procedimento solicitado seja realizado, primeiramente teria que solicitar a atualização dos dados do aluno com a nova escola`;

  const path = "INFORMAÇÃO | ESTUDANTE | BENEFÍCIO";
  return (
    <div className="">
      <NavBar />
      <FatualizarEscola title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
