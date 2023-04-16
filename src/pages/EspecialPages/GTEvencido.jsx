import { NavBar } from "../../components/NavBar";
import { Vencido } from "../../scripts/GT/especial/Vencido";
import { Footer } from "../../components/Footer";
export function GTEvencido() {
  const title = "Cartão Vencido";
  const script =
    'Cliente informa que ao passar em validador aparece a mensagem "cartão cancelado", após verificação em sistema foi verificado que o cartão encontra-se com hotlist "cartão vencido", assim, foi orientada que deverá dirigir-se a unidade de saúde mas próxima da sua residência, para solicitar o pedido de revalidação. O prazo médio de resposta é de 10 dias úteis.';
  const path =
    "SERVICO | ESPECIAL | REVALIDAÇÃO | CADASTRO LOCALIZADO | AVALIAÇÃO MÉDICA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Vencido title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
