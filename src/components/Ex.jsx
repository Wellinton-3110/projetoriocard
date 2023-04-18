import "../styles/styles.css";
import "../styles/index.css";
import { hideEX } from "../functions/function";
import { Link } from "react-router-dom";
import { hideCancelamento, hideBui, hideBolsa } from "../functions/function";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

export function Ex() {
  return (
    <ul
      className="flex items-center justify-center p-2 w-[15vw]"
      onClick={hideEX}
    >
      <li className="relative border-solid border-[2px] border-[#ec008c] bg-white p-[5px] rounded-[21%] text-[#ff089cfe] text-[27px] font-medium hover:border-[3px]">
        EX
        <ul
          id="ulEX"
          className="hidden absolute bg-zinc-200 [z-index:2] w-[130px] max-h-[143.5px] cursor-default top-[137%] right-0 border-[1px] border-[black] p-3 font-light text-[15px]"
          onClick={(e) => e.stopPropagation()}
        >
          <li
            onClick={hideBui}
            className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1"
          >
            BUI
            <ul
              id="ulBui"
              className="hidden absolute left-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
            >
              <li className="flex items-center justify-center [font-size:13px]">
                <Link to="/ExAtivacaoBui" className="relative w-[95px] ml-1">
                  Ativação
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2 " />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/EXsuspensoSetrans"
                  className="relative w-[95px] ml-1"
                >
                  Suspenso Setrans
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2" />
              </li>
            </ul>
          </li>

          <li
            onClick={hideBolsa}
            className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1"
          >
            Bolsa de Crédito
            <ul
              id="ulBolsa"
              className="hidden absolute left-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
            >
              <li className="flex items-center justify-center [font-size:13px]">
                <Link to="/EXbolsaGerada" className="relative w-[95px] ml-1">
                  Gerada
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2 " />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link to="/EXbolsaPendente" className="relative w-[95px] ml-1">
                  Pendente
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2" />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/EXsuspensoSetrans"
                  className="relative w-[95px] ml-1"
                >
                  Não gerada
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2" />
              </li>
            </ul>
          </li>

          <li
            onClick={hideCancelamento}
            className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1 block"
          >
            Cancelamento
            <ul
              id="ulCancelamento"
              className="hidden absolute left-[103%] w-[135px] top-[-1%] border-[1px] border-zinc-700 p-2 pl-[1.5px] space-y-[3px] cursor-pointer bg-zinc-200"
            >
              <li className="flex items-center justify-center [font-size:13px]">
                <Link to="/EXcancelamento" className="relative w-[95px] ml-1">
                  Associado
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2 " />
              </li>

              <li className="flex items-center justify-center [font-size:13px]">
                <Link
                  to="/EXcancelamentoDisponivel"
                  className="relative w-[95px] ml-1"
                >
                  Disponível
                </Link>
                <BsFillArrowRightCircleFill className="relative ml-2" />
              </li>
            </ul>
          </li>

          <Link className="hover:border-b-[1px] text-zinc-700 border-black cursor-pointer mb-1">
            Bloqueios
          </Link>
        </ul>
      </li>
    </ul>
  );
}
