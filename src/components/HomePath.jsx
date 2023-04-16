import "../styles/index.css";
import { Link } from "react-router-dom";

export function HomePath() {
  return (
    <Link
      to="/riocardnew/"
      className="[font-size:21px] font-bold absolute left-[50vw] sm:left-[20%] sm:top-[3%] sm:text-[14px] sm:w-14 sm:h-[25px] md:left-[17%] md:top-[3%] md:text-[14px] md:w-14 md:h-[25px] translate-x-[-50%] border-[2px] border-blue-400 bg-blue-300 w-[110px] text-center rounded-md hover:bg-blue-400 transition-all"
    >
      Home
    </Link>
  );
}
