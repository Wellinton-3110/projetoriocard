import { NavBar } from "../../components/NavBar";
import { Agendamento } from "../../scripts/GT/senior/Agendamento";
import { Footer } from "../../components/Footer";
export function GTEagendamentoSemAcao() {
  const title = "Agendamento sem ação";
  const script = (
    <>
      <br />
      Cliente solicita agendamento para foto de cartão Especial na base, porém o
      mesmo não opta por nenhuma das lojas disponíveis para o agendamento, segue
      os dados:
      <br />
      <br />
      Cliente informa que vai na loja de Campo Grande a qual não precisa de
      agendamento no endereço: Rua Aurélio Figueiredo, 15 - Loja 26 A e B -
      Campo Grande (Terminal de Campo Grande)
      <br />
      <br />
      Cliente informa que vai na CIAD onde não precisa de agendamento no
      endereço: Av. Pres. Vargas, 1997 - Centro, Rio de Janeiro
      <br />
      <br />
      Cliente foi informado que deverá apresentar um documento de
      identificação.";
    </>
  );

  const path =
    "SERVICO | ESPECIAL | AGENDAMENTO DE 2 VIA | CADASTRO LOCALIZADO | COM/SEM ACAO DE AGENDAMENTO";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Agendamento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
