import { NavBar } from "../../components/NavBar";
import { RevalidacaoAnd } from "../../scripts/GT/valeSocial/RevalidacaoAnd";
import { Footer } from "../../components/Footer";

export function GTVrevalidacaoAnd() {
  const title = "REVALIDAÇÃO EM ANDAMENTO";
  const script =
    "Cliente solicita orientações referentes a revalidação do seu vale social, ciente que o benefício não foi renovado até o momento e que entre em contato nas próximas datas para acompanhamento.";
  const path = "INFORMACOES | VALE SOCIAL | BENEFÍCIO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RevalidacaoAnd title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
