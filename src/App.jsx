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
import { GTVvencido } from "./pages/ValeSocialPages/GTVvencido";
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
  /*--------------------------------------ESCOLAR------------------------------------------------*/
}
import { MUprimeiraVia } from "./pages/EstudantePages/MUprimeiraVia";
import { MUsegundaVia } from "./pages/EstudantePages/MUsegundaVia";
import { MUcancelamento } from "./pages/EstudantePages/MUcancelamento";
import { MUcadastramento } from "./pages/EstudantePages/MUcadastramento";
import { MUatualizarEscola } from "./pages/EstudantePages/MUatualizarEscola";
import { PLUprimeiraVia } from "./pages/EstudantePages/PLUprimeiraVia";
import { PLUsegundaVia } from "./pages/EstudantePages/PLUsegundaVia";
import { PLUcancelamento } from "./pages/EstudantePages/PLUcancelamento";
import { PLUrenovacao } from "./pages/EstudantePages/PLUrenovacao";
import { SDCprimeiraVia } from "./pages/EstudantePages/SDCprimeiraVia";
import { SDCsegundaVia } from "./pages/EstudantePages/SDCsegundaVia";
import { SDCcancelamento } from "./pages/EstudantePages/SDCcancelamento";
import { FEDprimeiraVia } from "./pages/EstudantePages/FEDprimeiraVia";
import { FEDsegundaVia } from "./pages/EstudantePages/FEDsegundaVia";
import { FEDcancelamento } from "./pages/EstudantePages/FEDcancelamento";
import { FEDcadastramento } from "./pages/EstudantePages/FEDcadastramento";
import { FEDatualizarEscola } from "./pages/EstudantePages/FEDatualizarEscola";
{
  /*--------------------------------------EX------------------------------------------------*/
}
import { EXativacaoBui } from "./pages/ExpressoPages/EXativacaoBui";
import { EXativacaoTsocial } from "./pages/ExpressoPages/EXativacaoTsocial";
import { EXcancelamento } from "./pages/ExpressoPages/EXcancelamento";
import { EXcancelamentoDisponivel } from "./pages/ExpressoPages/EXcancelamentoDisponivel";
import { EXjaCancelado } from "./pages/ExpressoPages/EXjaCancelado";
import { EXforaPadrao } from "./pages/ExpressoPages/EXforaPadrao";
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
  /*-----------------------------------------VT---------------------------------------------*/
}
import { VTativacaoBui } from "./pages/ValeTransportePages/VTativacaoBui";
import { VTativacaoTsocial } from "./pages/ValeTransportePages/VTativacaoTsocial";
import { VTsuspensoSetrans } from "./pages/ValeTransportePages/VTsuspensoSetrans";
import { VTcancelamento } from "./pages/ValeTransportePages/VTcancelamento";
import { VTcancelamentoDisponivel } from "./pages/ValeTransportePages/VTcancelamentoDisponivel";
import { VTjaCancelado } from "./pages/ValeTransportePages/VTjaCancelado";
import { VTforaPadrao } from "./pages/ValeTransportePages/VTforaPadrao";
import { VTbolsaGerada } from "./pages/ValeTransportePages/VTbolsaGerada";
import { VTbolsaPendente } from "./pages/ValeTransportePages/VTbolsaPendente";
import { VTbolsaNgerada } from "./pages/ValeTransportePages/VTbolsaNgerada";
import { VTintegracao } from "./pages/ValeTransportePages/VTintegracao";
import { VTnaoIntegracao } from "./pages/ValeTransportePages/VTnaoIntegracao";
import { VTrecargaEfetuada } from "./pages/ValeTransportePages/VTrecargaEfetuada";
import { VTrecargaPendente } from "./pages/ValeTransportePages/VTrecargaPendente";
import { VTrecargaPresa } from "./pages/ValeTransportePages/VTrecargaPresa";
import { Cadastro } from "./components/Cadastro";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/projectriocard/" element={<HomePage />} />
        <Route path="/Cadastro" element={<Cadastro />} />
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
        <Route path="/GTVvencido" element={<GTVvencido />} />
        <Route path="/GTVcadastramento" element={<GTVcadastramento />} />
        <Route path="/GTVcancelamento" element={<GTVcancelamento />} />
        <Route path="/GTVandamento" element={<GTVandamento />} />
        <Route path="/GTVrevalidacaoApv" element={<GTVrevalidacaoApv />} />
        <Route path="/GTVrevalidacaoAnd" element={<GTVrevalidacaoAnd />} />
        <Route path="/GTbloqueio1368" element={<GTbloqueio1368 />} />
        <Route path="/GTbloqueio1368s" element={<GTbloqueio1368s />} />
        <Route path="/GTdescancelar" element={<GTdescancelar />} />
        <Route path="/GTbiometria" element={<GTbiometria />} />
        {/*____________________________ESCOLAR___________________________*/}
        <Route path="/MUprimeiraVia" element={<MUprimeiraVia />} />
        <Route path="/MUsegundaVia" element={<MUsegundaVia />} />
        <Route path="/MUcancelamento" element={<MUcancelamento />} />
        <Route path="/MUcadastramento" element={<MUcadastramento />} />
        <Route path="/MUatualizarEscola" element={<MUatualizarEscola />} />
        <Route path="/PLUprimeiraVia" element={<PLUprimeiraVia />} />
        <Route path="/PLUsegundaVia" element={<PLUsegundaVia />} />
        <Route path="/PLUcancelamento" element={<PLUcancelamento />} />
        <Route path="/PLUrenovacao" element={<PLUrenovacao />} />
        <Route path="/SDCprimeiraVia" element={<SDCprimeiraVia />} />
        <Route path="/SDCsegundaVia" element={<SDCsegundaVia />} />
        <Route path="/SDCcancelamento" element={<SDCcancelamento />} />
        <Route path="/FEDprimeiraVia" element={<FEDprimeiraVia />} />
        <Route path="/FEDsegundaVia" element={<FEDsegundaVia />} />
        <Route path="/FEDcancelamento" element={<FEDcancelamento />} />
        <Route path="/FEDcadastramento" element={<FEDcadastramento />} />
        <Route path="/FEDatualizarEscola" element={<FEDatualizarEscola />} />

        {/*____________________________EX___________________________*/}
        <Route path="/EXativacaoBui" element={<EXativacaoBui />} />
        <Route path="/EXativacaoTsocial" element={<EXativacaoTsocial />} />
        <Route path="/EXcancelamento" element={<EXcancelamento />} />
        <Route
          path="/EXcancelamentoDisponivel"
          element={<EXcancelamentoDisponivel />}
        />
        <Route path="/EXjaCancelado" element={<EXjaCancelado />} />
        <Route path="/EXforaPadrao" element={<EXforaPadrao />} />
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
        <Route path="/VTjaCancelado" element={<VTjaCancelado />} />
        <Route path="/VTforaPadrao" element={<VTforaPadrao />} />
        <Route path="/VTbolsaGerada" element={<VTbolsaGerada />} />
        <Route path="/VTbolsaPendente" element={<VTbolsaPendente />} />
        <Route path="/VTbolsaNgerada" element={<VTbolsaNgerada />} />
        <Route path="/VTintegracao" element={<VTintegracao />} />
        <Route path="/VTnaoIntegracao" element={<VTnaoIntegracao />} />
        <Route path="/VTrecargaEfetuada" element={<VTrecargaEfetuada />} />
        <Route path="/VTrecargaPendente" element={<VTrecargaPendente />} />
        <Route path="/VTrecargaPresa" element={<VTrecargaPresa />} />
      </Routes>
    </BrowserRouter>
  );
}
