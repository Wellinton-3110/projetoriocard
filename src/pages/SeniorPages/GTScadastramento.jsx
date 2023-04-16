import { NavBar } from "../../components/NavBar";
import { Cadastramento } from "../../scripts/GT/senior/Cadastramento";
import { Footer } from "../../components/Footer";
export function GTScadastramento() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Cadastramento />
      <Footer />
    </div>
  );
}
