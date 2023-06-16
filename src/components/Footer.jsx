import "../styles/index.css";

export function Footer() {
  return (
    <div className="h-[15vh] bg-gradient-to-b flex justify-between border-b-1 border-r-0 border-l-0 border-t-2 border-[1x] border-[black] from-[#34d3f7d9] to-[#43beda62] w-[100vw]">
      <div className="logo flex-1 border border-r-1 border-t-0 border-l-0 border-b-0 border-black">
        <img
          className="w-15 h-11 ml-7 mt-7"
          src="https://www.cartaoriocard.com.br/rcc/static/img/logo.png"
          alt="logo-image"
        />
      </div>

      <div className="flex-1 ml-2 tall:text-[11px]">
        <h1 className="mt-2 underline">Sistemas</h1>
        <ul className="flex flex-col gap-1 mt-2 max-w-[100px] tall:mt-0 ">
          <a
            href="http://callcenter.riocard.com/index.asp"
            target="_blank"
            className="[font-size:10px] hover:underline cursor-pointer tall:text-[8px] tall:mb-0 tall:h-[8px]"
          >
            Gratuidade
          </a>
          <a
            href="https://backoffice.riocardti.com.br/scrbkf"
            target="_blank"
            className="[font-size:10px] hover:underline cursor-pointer tall:text-[8px] tall:mb-0 tall:h-[8px]"
          >
            Expresso
          </a>
          <a
            href="https://backoffice.riocardti.com.br/riocardbkf"
            target="_blank"
            className="[font-size:10px] hover:underline cursor-pointer tall:text-[8px] tall:mb-0 tall:h-[8px]"
          >
            Vale Transporte
          </a>
          <a
            href="https://backoffice.riocardti.com.br/backoffice/"
            target="_blank"
            className="[font-size:10px] hover:underline cursor-pointer tall:text-[8px] tall:mb-0 tall:h-[8px]"
          >
            SPE
          </a>
          <a
            href="https://riocard.evalyze.com/LogInv2.aspx?AspxAutoDetectCookieSupport=1"
            target="_blank"
            className="[font-size:10px] hover:underline cursor-pointer tall:text-[8px] tall:mb-0 tall:h-[8px]"
          >
            Evalyze
          </a>
        </ul>
      </div>
    </div>
  );
}
