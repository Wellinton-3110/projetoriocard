import "../styles/styles.css";
import "../styles/index.css";
import logo from "../assets/logo.png";
import { HomePath } from "./HomePath";
import { Gt } from "./Gt";
import { Ex } from "./Ex";
import { Link } from "react-router-dom";
import {
  hideBuiVT,
  hideVT,
  hideCancelamentoVT,
  hideBolsaVT,
  hideIntegracaoVT,
  hideTsocialVT,
  hideRecargasVT,
} from "../functions/function";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export function NavBar() {
  const nome = window.location.pathname;
  return (
    <div className="AppBar relative h-[10vh] w-[100vw] bg-gradient-to-b from-[#00CEFC] to-[#00cefc00] flex items-center justify-between ">
      {/*-----------------------------------------------------------LEFT LOGO-----------------------------------------------------------*/}
      <img
        src={logo}
        alt=""
        className="LogoBar w-17 h-10 relative left-[7vw]"
      />

      {/*-----------------------------------------------------------HOME-----------------------------------------------------------*/}
      {nome === "/projectriocard/" || nome === "/projectriocard" ? (
        ""
      ) : (
        <HomePath />
      )}
      {/*-----------------------------------------------------------Right Menu-----------------------------------------------------------*/}

      <div className="#MenuBar flex max-h-[43px] max-w-[230px] relative right-[3vw] sm:right-[22%] md:right-[28%] p-3">
        <Gt />
        <Ex />

        <ul
          onClick={hideVT}
          className="flex items-center justify-center p-2 w-[15vw]"
        >
          <li className="border-solid absolute border-[2px] border-[#f37032] bg-white p-[5px] cursor-pointer rounded-[21%] text-[#f37032] text-[27px] font-medium hover:border-[3px]">
            VT
            <ul
              id="ulVT"
              className="hidden absolute bg-zinc-200 [z-index:2] w-[140px] max-h-[193.5px] cursor-default top-[144%] left-0 border-[1px] border-[black] p-3 font-light text-[15px]"
              onClick={(e) => e.stopPropagation()}
            >
              <li
                onClick={hideBuiVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1"
              >
                BUI
                <ul
                  id="ulBuiVT"
                  className="hidden absolute right-[103%] w-[145px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTativacaoBui"
                      className="relative w-[115px] ml-1"
                    >
                      Ativação
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTsuspensoSetrans"
                      className="relative w-[115px] ml-1"
                    >
                      Suspenso Setrans
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                onClick={hideTsocialVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1"
              >
                Tarifa Social
                <ul
                  id="ulTsocialVT"
                  className="hidden absolute right-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTAtivacaoTsocial"
                      className="relative w-[95px] ml-1"
                    >
                      Ativação
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                onClick={hideBolsaVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1"
              >
                Bolsa de Crédito
                <ul
                  id="ulBolsaVT"
                  className="hidden absolute right-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTbolsaGerada"
                      className="relative w-[95px] ml-1"
                    >
                      Gerada
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2" />
                    <Link
                      to="/VTbolsaPendente"
                      className="relative w-[95px] ml-1"
                    >
                      Pendente
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2" />
                    <Link
                      to="/VTbolsaNgerada"
                      className="relative w-[95px] ml-1"
                    >
                      Não gerada
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                onClick={hideCancelamentoVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1 block"
              >
                Cancelamento
                <ul
                  id="ulCancelamentoVT"
                  className="hidden absolute right-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTcancelamento"
                      className="relative w-[95px] ml-1"
                    >
                      Associado
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTcancelamentoDisponivel"
                      className="relative w-[95px] ml-1"
                    >
                      Disponível
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link to="/VTforaPadrao" className="relative w-[95px] ml-1">
                      Fora do padrão
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                onClick={hideIntegracaoVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1 block"
              >
                Integrações
                <ul
                  id="ulIntegracaoVT"
                  className=" hidden absolute right-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link to="/VTintegracao" className="relative w-[95px] ml-1">
                      Informações
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2" />
                    <Link
                      to="/VTnaoIntegracao"
                      className="relative w-[95px] ml-1"
                    >
                      Não integração
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                onClick={hideRecargasVT}
                className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1 block"
              >
                Recargas
                <ul
                  id="ulRecargasVT"
                  className="hidden absolute right-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
                >
                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2 " />
                    <Link
                      to="/VTrecargaEfetuada"
                      className="relative w-[95px] ml-1"
                    >
                      Efetuada
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2" />
                    <Link
                      to="/VTrecargaPendente"
                      className="relative w-[95px] ml-1"
                    >
                      Pendente
                    </Link>
                  </li>

                  <li className="flex items-center justify-center [font-size:13px]">
                    <BsFillArrowLeftCircleFill className="relative mr-2" />
                    <Link
                      to="/VTrecargaPresa"
                      className="relative w-[95px] ml-1"
                    >
                      Presa ATM
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
