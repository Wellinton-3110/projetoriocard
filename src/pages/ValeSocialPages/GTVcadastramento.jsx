import { NavBar } from "../../components/NavBar";
import { Cadastramento } from "../../scripts/GT/valeSocial/Cadastramento";
import { Footer } from "../../components/Footer";
export function GTVcadastramento() {
  const title = "Cadastramento";
  const script =
    "Cliente solicita cadastramento de cartão Vale Social na base. Foi informado que o cadastro é realizado apenas pela Fundação Leão XIII ou SETRANS. portanto, foi direcionado ao posto mais próximo a sua residência para solicitação do mesmo com a sua documentação e laudo médico atualizado.";
  const path = "INFORMACAO | VALE SOCIAL | 1 VIA";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cadastramento title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
