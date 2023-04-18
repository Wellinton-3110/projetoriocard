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
import { EXativacaoBui } from "./pages/ExpressoPages/EXativacaoBui";
import { EXcancelamento } from "./pages/ExpressoPages/EXcancelamento";
import { EXcancelamentoDisponivel } from "./pages/ExpressoPages/EXcancelamentoDisponivel";
import { EXsuspensoSetrans } from "./pages/ExpressoPages/EXsuspensoSetrans";
import { EXbolsaGerada } from "./pages/ExpressoPages/EXbolsaGerada";
import { EXbolsaPendente } from "./pages/ExpressoPages/EXbolsaPendente";
import { EXbolsaNgerada } from "./pages/ExpressoPages/EXbolsaNgerada";

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
        {/*____________________________EX___________________________*/}
        <Route path="/EXativacaoBui" element={<EXativacaoBui />} />
        <Route path="/EXcancelamento" element={<EXcancelamento />} />
        <Route
          path="/EXcancelamentoDisponivel"
          element={<EXcancelamentoDisponivel />}
        />
        <Route path="/EXsuspensoSetrans" element={<EXsuspensoSetrans />} />
        <Route path="/EXbolsaGerada" element={<EXbolsaGerada />} />
        <Route path="/EXbolsaPendente" element={<EXbolsaPendente />} />
        <Route path="/EXbolsaNgerada" element={<EXbolsaNgerada />} />
      </Routes>
    </BrowserRouter>
  );
}
