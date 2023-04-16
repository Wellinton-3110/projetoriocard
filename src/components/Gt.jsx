import "../styles/styles.css";
import "../styles/index.css";
import {
  hideGT,
  seniorMenu,
  especialMenu,
  valeSocialMenu,
  bloqueiosMenu,
} from "../functions/function";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export function Gt() {
  return (
    <ul className="flex items-center justify-center p-2 w-[15vw]">
      <li
        className="relative border-solid border-[2px] cursor-pointer border-[#9c3] bg-white p-[5px] rounded-[21%] text-[#00d99d] text-[27px] font-medium hover:border-[3px]"
        onClick={hideGT}
      >
        GT
        <ul
          id="ulGT"
          className="absolute bg-zinc-200 [z-index:2] max-h-[143.5px] w-[105px] cursor-default top-[145%] right-[-80%] border-[1px] border-[black] p-3 hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <li
            className=" hover:border-b-[0.5px] [font-size:15px] text-zinc-700 border-black font-light text-[7px] mb-1"
            onClick={seniorMenu}
          >
            Sênior
            <ul
              id="ulSenior"
              className="hidden absolute left-[103%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
            >
              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 " to="/GTSagendamento">
                  Agendamento
                </Link>
                <BsFillArrowRightCircleFill className="relative" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1" to="/GTScadastramento">
                  Cadastramento
                </Link>
                <BsFillArrowRightCircleFill className="relative" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTScancelamento/agendamento"
                  className="relative w-[95px] ml-1"
                >
                  CancelamentoC
                </Link>
                <BsFillArrowRightCircleFill className="relative" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link to="/GTScancelamento" className="relative w-[95px] ml-1">
                  CancelamentoS
                </Link>
                <BsFillArrowRightCircleFill className="relative" />
              </li>
            </ul>
          </li>

          <li
            className="hover:border-b-[0.5px] [font-size:15px] text-blue-500 border-black font-light text-[7px] mb-1"
            onClick={especialMenu}
          >
            Especial
            <ul
              id="ulEspecial"
              className="hidden absolute left-[103%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] w-21 cursor-pointer bg-zinc-200"
            >
              {/*------------------------------------------------------------------------------*/}

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEagendamentoComAcao"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  AgendamentoCA
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEagendamentoSemAcao"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  AgendamentoSA
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEandamento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Andamento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEcancelamento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Cancelamento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEcadastramento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Cadastramento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEvencido"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  C/Vencido
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>
            </ul>
          </li>
          {/*------------------------------------------------------------------------------*/}

          <li
            className="hover:border-b-[0.5px] [font-size:15px] text-[#76a714] border-black font-light text-[7px] mb-1"
            onClick={valeSocialMenu}
          >
            Vale Social
            <ul
              id="ulValeSocial"
              className="hidden absolute left-[103%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
            >
              {/*------------------------------------------------------------------------------*/}

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVagendamentoComAcao"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  AgendamentoCA
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVagendamentoSemAcao"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  AgendamentoSA
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVandamento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Andamento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVcadastramento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Cadastramento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVcancelamento"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  Cancelamento
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>
              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVrevalidacaoApv"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  RevalidaçãoAPR
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>
              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVrevalidacaoAnd"
                  className="relative w-[95px] ml-1 text-zinc-700"
                >
                  RevalidaçãoAND
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>
            </ul>
          </li>

          <li
            className="hover:border-b-[0.5px] [font-size:15px] text-black border-black font-light text-[7px] mb-1"
            onClick={bloqueiosMenu}
          >
            Bloqueios
            <ul
              id="ulBloqueios"
              className="hidden absolute left-[103%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
            >
              {/*------------------------------------------------------------------------------*/}

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 text-zinc-700">
                  fdgdfgdfgd
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 text-zinc-700">
                  dfgdfgdgf
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 text-zinc-700">
                  dfgdfgdg
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 text-zinc-700">
                  Vencimendfgdfgdfgto
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link className="relative w-[95px] ml-1 text-zinc-700">
                  dfgdfgd
                </Link>
                <BsFillArrowRightCircleFill className="relative text-zinc-700" />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
