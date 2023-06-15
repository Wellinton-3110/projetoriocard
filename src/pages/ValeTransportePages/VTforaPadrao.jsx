import { NavBar } from "../../components/NavBar";
import { ForaPadrao } from "../../scripts/VT/ForaPadrao";
import { Footer } from "../../components/Footer";

export function VTforaPadrao() {
  const title = "CANCELAMENTO VT FORA DO PADRÃO";
  const script = `Cliente informa cancelamento do seu cartão e solicita o motivo no atendimento, verificado que seu cartão está bloqueado com o motivo "fora do padrão/fora do padrão vans", cliente orientado a ir em loja com sua documentação para verificar o motivo do cancelamento e alteração do motivo em sistema.`;

  const path =
    "INFORMAÇÃO | USUÁRIO | VT | USUÁRIO | CANCELAMENTO FORA DO PADRÃO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <ForaPadrao title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
