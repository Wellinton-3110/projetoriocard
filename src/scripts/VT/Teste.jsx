import Slider from "react-slick";

import "../../styles/index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Teste() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="h-5 w-5 bg-black/50">
        <h3>1</h3>
      </div>
      <div className="h-5 w-5 bg-black/80">
        <h3>2</h3>
      </div>
      <div className="h-8 w-[60px] bg-black/20">
        <h3>3</h3>
      </div>
      <div className="h-5 w-5 bg-black/60">
        <h3>4</h3>
      </div>
    </Slider>
  );
}
