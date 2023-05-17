import "../styles/styles.css";
import "../styles/index.css";
import {
  hideGT,
  seniorMenu,
  especialMenu,
  valeSocialMenu,
  bloqueiosMenu,
  estudanteMenu,
  estudanteMunicipal,
  PLU,
  SDC,
  estudanteFederal,
} from "../functions/function";
import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
          className="hidden absolute bg-zinc-200 [z-index:2] w-[130px] max-h-[153.5px] cursor-default top-[137%] right-[0] border-[1px] border-[black] p-3 "
          onClick={(e) => e.stopPropagation()}
        >
          <li
            className=" hover:border-b-[0.5px] text-zinc-700 border-black font-light text-[15px] mb-1"
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
            className="hover:border-b-[0.5px] text-[15px] text-blue-500 border-black font-light mb-1"
            onClick={especialMenu}
          >
            Especial
            <ul
              id="ulEspecial"
              className=" hidden absolute left-[103%] w-[170px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-0 space-y-[3px] w-21 cursor-pointer bg-zinc-200"
            >
              {/*------------------------------------------------------------------------------*/}

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEagendamentoComAcao"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  AgendamentoCom/A
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEagendamentoSemAcao"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  AgendamentoSem/A
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEandamento"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  Andamento/Solicitação
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEcancelamento"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  Cancelamento
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEcadastramento"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  Cadastramento
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTEvencido"
                  className="relative left-[-19px] w-[95px] text-zinc-700"
                >
                  Cartão Vencido
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>
            </ul>
          </li>
          {/*------------------------------------------------------------------------------*/}

          <li
            className="hover:border-b-[0.5px] text-[#76a714] border-black font-light text-[15px] mb-1"
            onClick={valeSocialMenu}
          >
            Vale Social
            <ul
              id="ulValeSocial"
              className=" hidden absolute left-[103%] w-[185px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
            >
              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVagendamentoComAcao"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  AgendamentoC/AÇÃO
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVagendamentoSemAcao"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  AgendamentoS/AÇÃO
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVandamento"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Andamento/Solicitação
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVvencido"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Cartão vencido
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVcadastramento"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Cadastramento
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVcancelamento"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Cancelamento
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVrevalidacaoApv"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Revalidação aprovada
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>
              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTVrevalidacaoAnd"
                  className="relative left-[0] w-[180px] ml-1 text-zinc-700"
                >
                  Revalidação em andamento
                </Link>
                <BsFillArrowRightCircleFill className="absolute text-zinc-700 right-1" />
              </li>
            </ul>
          </li>

          <li
            onClick={estudanteMenu}
            className=" hover:border-b-[0.5px] text-[#ff8d31] border-black font-light text-[15px] mb-1"
          >
            Estudante
            <ul
              onClick={(e) => e.stopPropagation()}
              id="ulEstudante"
              className="hidden w-19 absolute left-[101%] top-[-0.5%] border-[1px] border-zinc-700 text-zinc-700 p-2 pl-[1.5px] space-y-[2px] cursor-pointer bg-zinc-200"
            >
              <span className="flex items-center justify-center [font-size:13px]">
                <li
                  onClick={SDC}
                  className="w-[90px] ml-1 "
                  to="/GTSagendamento"
                >
                  SEEDUC
                  <ul
                    id="ulSeeduc"
                    className="hidden absolute left-[102%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
                  >
                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        className="relative w-[95px] ml-1 "
                        to="/SDCprimeiraVia"
                      >
                        1° VIA
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        className="relative w-[95px] ml-1"
                        to="/SDCsegundaVia"
                      >
                        2° VIA
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/SDCcancelamento"
                        className="relative w-[95px] ml-1"
                      >
                        Cancelamento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>
                  </ul>
                </li>
              </span>

              <span className="flex items-center justify-center [font-size:13px]">
                <li
                  onClick={PLU}
                  className="w-[90px] ml-1"
                  to="/GTScadastramento"
                >
                  PLU
                  <ul
                    id="ulPlu"
                    className="hidden absolute left-[102%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
                  >
                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        className="relative w-[95px] ml-1 "
                        to="/PLUprimeiraVia"
                      >
                        1° VIA
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        className="relative w-[95px] ml-1"
                        to="/PLUsegundaVia"
                      >
                        2° VIA
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/PLUcancelamento"
                        className="relative w-[95px] ml-1"
                      >
                        Cancelamento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/PLUrenovacao"
                        className="relative w-[95px] ml-1"
                      >
                        Renovação
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>
                  </ul>
                </li>
              </span>

              <span className="flex items-center justify-center [font-size:13px]">
                <li onClick={estudanteFederal} className="w-[90px] ml-1">
                  Federal
                  <ul
                    id="ulFederal"
                    className="hidden absolute w-[135px] left-[102%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px]  cursor-pointer bg-zinc-200"
                  >
                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/FEDprimeiraVia"
                        className="relative w-[105px] ml-1 "
                      >
                        1° via FED
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/FEDsegundaVia"
                        className="relative w-[105px] ml-1"
                      >
                        2° via FED
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/FEDatualizarEscola"
                        className="relative w-[105px] ml-1"
                      >
                        Atualizar/escola
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/FEDcadastramento"
                        className="relative w-[105px] ml-1"
                      >
                        Cadastramento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/FEDcancelamento"
                        className="relative w-[105px] ml-1"
                      >
                        Cancelamento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>
                  </ul>
                </li>
              </span>

              <span className="flex items-center justify-center [font-size:13px]">
                <li onClick={estudanteMunicipal} className="w-[90px] ml-1">
                  Municipal
                  <ul
                    id="ulMunicipal"
                    className="hidden absolute w-[135px] left-[102%] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px]  cursor-pointer bg-zinc-200"
                  >
                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/MUprimeiraVia"
                        className="relative w-[105px] ml-1 "
                      >
                        1° via
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/MUsegundaVia"
                        className="relative w-[105px] ml-1"
                      >
                        2° via
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/MUatualizarEscola"
                        className="relative w-[105px] ml-1"
                      >
                        Atualizar/escola
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/MUcadastramento"
                        className="relative w-[105px] ml-1"
                      >
                        Cadastramento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>

                    <li className="flex items-center justify-center [font-size:13px]">
                      <Link
                        to="/MUcancelamento"
                        className="relative w-[105px] ml-1"
                      >
                        Cancelamento
                      </Link>
                      <BsFillArrowRightCircleFill className="relative" />
                    </li>
                  </ul>
                </li>
              </span>
            </ul>
          </li>

          <li
            className="hover:border-b-[0.5px] flex items-center gap-3 text-black border-black font-light text-[15px] mb-1"
            onClick={bloqueiosMenu}
          >
            <p>Bloqueios</p>
            <p className="mt-1 text-[red] ">
              <AiOutlineCloseCircle />
            </p>
            <ul
              id="ulBloqueios"
              className=" hidden absolute left-[103%] w-[170px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[2px] w-21 cursor-pointer bg-zinc-200"
            >
              {/*------------------------------------------------------------------------------*/}

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTbloqueio1368"
                  className="relative w-[130px] text-zinc-700"
                >
                  684 ou 1368 C/Cartão
                </Link>
                <BsFillArrowRightCircleFill className="absolute right-1 text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTbloqueio1368s"
                  className="relative w-[130px] text-zinc-700"
                >
                  684 ou 1368 S/Cartão
                </Link>
                <BsFillArrowRightCircleFill className="absolute right-1 text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTbiometria"
                  className="relative w-[130px] text-zinc-700"
                >
                  Biometria Irregular
                </Link>
                <BsFillArrowRightCircleFill className="absolute right-1 text-zinc-700" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/GTdescancelar"
                  className="relative w-[130px] text-zinc-700"
                >
                  Descancelar
                </Link>
                <BsFillArrowRightCircleFill className="absolute right-1 text-zinc-700" />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
