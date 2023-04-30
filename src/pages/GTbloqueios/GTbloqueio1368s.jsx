import { NavBar } from "../../components/NavBar";
import { Bloqueio1368s } from "../../scripts/GT/bloqueios/Bloqueio1368s";
import { Footer } from "../../components/Footer";

export function GTbloqueio1368s() {
  const title = "HOTLIST 684 OU 1368(Utilização indevida/SEM CARTÃO)";
  const script = `Usuário não tem mais o cartão(perda, roubo ou danificado), porém encontra-se cancelado por 684 ou 1368 - Com usuário ainda em linha, dados enviados a supervisão para reverter o cancelamento e solicitar a segunda via.
  No caso de SEEDUC (Conexão Educação) devemos abrir ocorrência. Árvore: SERVIÇO>ESTUDANTE>SEEDUC>CADASTRO LOCALIZADO>SOLICITAÇÃO DE 2ª
  VIA>CARTÃO CANCELADO1368
  `;

  const path = "INFORMACAO | PLU/ESTUDANTE/ESPECIAL/VALESOCIAL | BENEFÍCIO  ";
  return (
    <div className="">
      <NavBar />
      <Bloqueio1368s title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
