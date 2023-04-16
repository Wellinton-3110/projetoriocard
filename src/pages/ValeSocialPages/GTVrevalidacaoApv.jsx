import { NavBar } from "../../components/NavBar";
import { RevalidacaoApv } from "../../scripts/GT/valeSocial/RevalidacaoApv";
import { Footer } from "../../components/Footer";

export function GTVrevalidacaoApv() {
  const title = "REVALIDAÇÃO APROVADA";
  const script =
    "Cliente solicita consulta em cartão Vale Social, deseja informação a respeito da aprovação da sua revalidação. Foi informado(a) que já foi atualizado, assim já pode utilizar seu cartão novamente.";
  const path = "INFORMACOES | VALE SOCIAL | BENEFÍCIO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <RevalidacaoApv title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
