import { NavBar } from "../../components/NavBar";
import { Cadastramento } from "../../scripts/GT/especial/Cadastramento";
import { Footer } from "../../components/Footer";
export function GTEcadastramento() {
  const title = "Cadastramento";
  const script =
    "Cliente solicita cadastramento de cartão Especial na base. Foi informado que o benefício é solicitado na clínica da família por meio da apresentação do laudo médico e sua documentação pessoal, somente após isso pode retornar o contato para que seja realizado agendamento para emissão do cartão em Loja.";
  const path = "INFORMACAO | ESPECIAL | 1 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cadastramento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
