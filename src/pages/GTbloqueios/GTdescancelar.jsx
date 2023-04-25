import { NavBar } from "../../components/NavBar";
import { Descancelar } from "../../scripts/GT/bloqueios/Descancelar";
import { Footer } from "../../components/Footer";

export function GTdescancelar() {
  const title = "DESCANCELAR";
  const script = `Cliente informa que o cartão foi bloqueado e solicita o motivo em sistema, verificado que o cartão está bloqueado com o hotlist "descancelar", orientado a ir em loja verificar o motivo pois já fazem mais de 48 horas do hotlist.
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
