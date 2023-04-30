import { NavBar } from "../../components/NavBar";
import { Bloqueio1368 } from "../../scripts/GT/bloqueios/Bloqueio1368";
import { Footer } from "../../components/Footer";

export function GTbloqueio1368() {
  const title = "HOTLIST 684 OU 1368(Utilização indevida/COM CARTÃO)";
  const script = `Usuário tem o cartão, porém encontra-se cancelado por 684 ou 1368 – Solicitado que compareça com a sua documentação ao posto de atendimento, sindicato de
  origem para verificação do motivo, no caso de SEEDUC (Conexão Educação) deve procurar a escola para mais informações sobre o motivo do cancelamento. (Não informado sobre o
  Hotlist)`;

  const path = "INFORMACAO | PLU/ESTUDANTE/ESPECIAL | BENEFÍCIO  ";
  return (
    <div className="">
      <NavBar />
      <Bloqueio1368 title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
