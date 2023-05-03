import "../styles/index.css";
import { Link } from "react-router-dom";

export function HomePath() {
  return (
    <Link
      to="/projectriocard/"
      className="[font-size:21px] font-bold relative right-[-7vw] sm:right-[-57%] sm:top-[5%] sm:text-[14px] sm:w-14 sm:h-[27px] md:right-[-51%] md:top-[3%] md:text-[14px] md:w-14 md:h-[27px] translate-x-[-50%] border-[3px] border-blue-400 bg-blue-300 w-[110px] text-center rounded-md hover:bg-blue-400 transition-all"
    >
      Home
    </Link>
  );
}
