import { NavBar } from "../../components/NavBar";
import { RecargaPendente } from "../../scripts/EX/RecargaPendente";
import { Footer } from "../../components/Footer";

export function EXrecargaPendente() {
  const title = "RECARGA PENDENTE";
  const script = `Cliente solicita consulta do status de recarga em cartão expresso, foi verificado que a última recarga consta como pendente, cliente orientado a validar a recarga via app Valida mais, ônibus, terminal de consulta ou aguardar liberação de espaço no cartão.
  `;

  const path =
    "INFORMACAO | USUARIO | EXPRESSO | RECARGA EMBARCADA | RECARGA NÃO EFETUADA(PENDENTE)/ONIBUS";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RecargaPendente title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
