import { NavBar } from "../../components/NavBar";
import { Descancelar } from "../../scripts/GT/bloqueios/Descancelar";
import { Footer } from "../../components/Footer";

export function GTdescancelar() {
  const title = "DESCANCELAR";
  const script = `Cliente informa dificuldade no uso do cartão () e solicita o motivo em sistema, verificado que o cartão está com o hotlist "descancelar", orientado(a) a ir em loja com os documentos pessoais para análise da situação pois já fazem mais de 48 horas do hotlist em sistema.
  `;

  const path = "INFORMACAO | PLU/ESTUDANTE/ESPECIAL/VALE SOCIAL | BENEFÍCIO  ";
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Descancelar title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
