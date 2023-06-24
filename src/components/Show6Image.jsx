import * as Dialog from "@radix-ui/react-dialog";
import { FcImageFile } from "react-icons/fc";
import Slider from "react-slick";

import "../styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Show6Image(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "25px",
          color: "black",
          border: "1px black solid",
          background: "white",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger onClick={(e) => e.stopPropagation()}>
        <FcImageFile className="w-9 h-9" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="bg-black/95 w-full h-[100vh] absolute top-0">
          <Dialog.Title>{props.title}</Dialog.Title>
          <Slider
            {...settings}
            className="absolute m-auto w-[87vw] h-[95vh] top-5 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[95vh] w-5">
              <img
                src={props.image1}
                alt=""
                className="relative h-[75vh] w-[100%] top-[9vh] left-3"
              />
            </div>

            <div className="relative h-[95vh] w-5 ">
              <img
                src={props.image2}
                alt=""
                className="relative h-[75vh] w-[95vw] top-[9vh] left-3"
              />
            </div>
            <div className="relative h-[95vh] w-5 ">
              <img
                src={props.image3}
                alt=""
                className="relative h-[75vh] w-[95vw] top-[9vh] left-3"
              />
            </div>
            <div className="relative h-[95vh] w-5 ">
              <img
                src={props.image4}
                alt=""
                className="relative h-[75vh] w-[95vw] top-[9vh] left-3"
              />
            </div>
            <div className="relative h-[95vh] w-5 ">
              <img
                src={props.image5}
                alt=""
                className="relative h-[75vh] w-[95vw] top-[9vh] left-3"
              />
            </div>
            <div className="relative h-[95vh] w-5 ">
              <img
                src={props.image6}
                alt=""
                className="relative h-[75vh] w-[95vw] top-[9vh] left-3"
              />
            </div>
          </Slider>
          <Dialog.Close className="absolute w-14 h-6 top-7 bg-red-600 right-10 rounded-md">
            <button>fechar</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
