import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GTScadastramento } from "./pages/SeniorPages/GTScadastramento";
import { GTSagendamento } from "./pages/SeniorPages/GTSagendamento";
import { GTScancelamentoAgendado } from "./pages/SeniorPages/GTScancelamentoAgendado";
import { GTScancelamento } from "./pages/SeniorPages/GTScancelamento";
import { GTEagendamentoComAcao } from "./pages/EspecialPages/GTEagendamentoComAcao";
import { GTEagendamentoSemAcao } from "./pages/EspecialPages/GTEagendamentoSemAcao";
import { GTEcancelamento } from "./pages/EspecialPages/GTEcancelamento";
import { GTEcadastramento } from "./pages/EspecialPages/GTEcadastramento";
import { GTEandamento } from "./pages/EspecialPages/GTEandamento";
import { GTEvencido } from "./pages/EspecialPages/GTEvencido";
import { GTVagendamentoComAcao } from "./pages/ValeSocialPages/GTVagendamentoComAcao";
import { GTVagendamentoSemAcao } from "./pages/ValeSocialPages/GTVagendamentoSemAcao";
import { GTVcadastramento } from "./pages/ValeSocialPages/GTVcadastramento";
import { GTVcancelamento } from "./pages/ValeSocialPages/GTVcancelamento";
import { GTVandamento } from "./pages/ValeSocialPages/GTVandamento";
import { GTVrevalidacaoApv } from "./pages/ValeSocialPages/GTVrevalidacaoApv";
import { GTVrevalidacaoAnd } from "./pages/ValeSocialPages/GTVrevalidacaoAnd";
import { GTbloqueio1368 } from "./pages/GTbloqueios/GTbloqueio1368";
import { GTbloqueio1368s } from "./pages/GTbloqueios/GTbloqueio1368s";
import { GTdescancelar } from "./pages/GTbloqueios/GTdescancelar";
import { GTbiometria } from "./pages/GTbloqueios/GTbiometria";
{
  /*--------------------------------------------------------------------------------------*/
}
import { EXativacaoBui } from "./pages/ExpressoPages/EXativacaoBui";
import { EXativacaoTsocial } from "./pages/ExpressoPages/EXativacaoTsocial";
import { EXcancelamento } from "./pages/ExpressoPages/EXcancelamento";
import { EXcancelamentoDisponivel } from "./pages/ExpressoPages/EXcancelamentoDisponivel";
import { EXsuspensoSetrans } from "./pages/ExpressoPages/EXsuspensoSetrans";
import { EXbolsaGerada } from "./pages/ExpressoPages/EXbolsaGerada";
import { EXbolsaPendente } from "./pages/ExpressoPages/EXbolsaPendente";
import { EXbolsaNgerada } from "./pages/ExpressoPages/EXbolsaNgerada";
import { EXrecargaEfetuada } from "./pages/ExpressoPages/EXrecargaEfetuada";
import { EXrecargaPendente } from "./pages/ExpressoPages/EXrecargaPendente";
import { EXrecargaPresa } from "./pages/ExpressoPages/EXrecargaPresa";
import { EXintegracao } from "./pages/ExpressoPages/EXintegracao";
import { EXnaoIntegracao } from "./pages/ExpressoPages/EXnaoIntegracao";
{
  /*--------------------------------------------------------------------------------------*/
}
import { VTativacaoBui } from "./pages/ValeTransportePages/VTativacaoBui";
import { VTativacaoTsocial } from "./pages/ValeTransportePages/VTativacaoTsocial";
import { VTsuspensoSetrans } from "./pages/ValeTransportePages/VTsuspensoSetrans";
import { VTcancelamento } from "./pages/ValeTransportePages/VTcancelamento";
import { VTcancelamentoDisponivel } from "./pages/ValeTransportePages/VTcancelamentoDisponivel";
import { VTbolsaGerada } from "./pages/ValeTransportePages/VTbolsaGerada";
import { VTbolsaPendente } from "./pages/ValeTransportePages/VTbolsaPendente";
import { VTbolsaNgerada } from "./pages/ValeTransportePages/VTbolsaNgerada";
import { VTintegracao } from "./pages/ValeTransportePages/VTintegracao";
import { VTnaoIntegracao } from "./pages/ValeTransportePages/VTnaoIntegracao";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/projectriocard/" element={<HomePage />} />
        {/*____________________________GT___________________________*/}
        <Route path="/GTScadastramento" element={<GTScadastramento />} />
        <Route path="/GTSagendamento" element={<GTSagendamento />} />
        <Route
          path="/GTScancelamento/agendamento"
          element={<GTScancelamentoAgendado />}
        />
        <Route exact path="/GTScancelamento" element={<GTScancelamento />} />
        <Route
          path="/GTEagendamentoComAcao"
          element={<GTEagendamentoComAcao />}
        />
        <Route
          path="/GTEagendamentoSemAcao"
          element={<GTEagendamentoSemAcao />}
        />
        <Route path="/GTEcancelamento" element={<GTEcancelamento />} />
        <Route path="/GTEcadastramento" element={<GTEcadastramento />} />
        <Route path="/GTEandamento" element={<GTEandamento />} />
        <Route path="/GTEvencido" element={<GTEvencido />} />
        <Route
          path="/GTVagendamentoComAcao"
          element={<GTVagendamentoComAcao />}
        />
        <Route
          path="/GTVagendamentoSemAcao"
          element={<GTVagendamentoSemAcao />}
        />
        <Route path="/GTVcadastramento" element={<GTVcadastramento />} />
        <Route path="/GTVcancelamento" element={<GTVcancelamento />} />
        <Route path="/GTVandamento" element={<GTVandamento />} />
        <Route path="/GTVrevalidacaoApv" element={<GTVrevalidacaoApv />} />
        <Route path="/GTVrevalidacaoAnd" element={<GTVrevalidacaoAnd />} />
        <Route path="/GTbloqueio1368" element={<GTbloqueio1368 />} />
        <Route path="/GTbloqueio1368s" element={<GTbloqueio1368s />} />
        <Route path="/GTdescancelar" element={<GTdescancelar />} />
        <Route path="/GTbiometria" element={<GTbiometria />} />
        {/*____________________________EX___________________________*/}
        <Route path="/EXativacaoBui" element={<EXativacaoBui />} />
        <Route path="/EXativacaoTsocial" element={<EXativacaoTsocial />} />
        <Route path="/EXcancelamento" element={<EXcancelamento />} />
        <Route
          path="/EXcancelamentoDisponivel"
          element={<EXcancelamentoDisponivel />}
        />
        <Route path="/EXsuspensoSetrans" element={<EXsuspensoSetrans />} />
        <Route path="/EXbolsaGerada" element={<EXbolsaGerada />} />
        <Route path="/EXbolsaPendente" element={<EXbolsaPendente />} />
        <Route path="/EXbolsaNgerada" element={<EXbolsaNgerada />} />
        <Route path="/EXrecargaEfetuada" element={<EXrecargaEfetuada />} />
        <Route path="/EXrecargaPendente" element={<EXrecargaPendente />} />
        <Route path="/EXrecargaPresa" element={<EXrecargaPresa />} />
        <Route path="/EXintegracao" element={<EXintegracao />} />
        <Route path="/EXnaoIntegracao" element={<EXnaoIntegracao />} />
        {/*____________________________VT___________________________*/}
        <Route path="/VTativacaoBui" element={<VTativacaoBui />} />
        <Route path="/VTativacaoTsocial" element={<VTativacaoTsocial />} />
        <Route path="/VTsuspensoSetrans" element={<VTsuspensoSetrans />} />
        <Route path="/VTcancelamento" element={<VTcancelamento />} />
        <Route
          path="/VTcancelamentoDisponivel"
          element={<VTcancelamentoDisponivel />}
        />
        <Route path="/VTbolsaGerada" element={<VTbolsaGerada />} />
        <Route path="/VTbolsaPendente" element={<VTbolsaPendente />} />
        <Route path="/VTbolsaNgerada" element={<VTbolsaNgerada />} />
        <Route path="/VTintegracao" element={<VTintegracao />} />
        <Route path="/VTnaoIntegracao" element={<VTnaoIntegracao />} />
      </Routes>
    </BrowserRouter>
  );
}
