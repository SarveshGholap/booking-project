import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component.js";

const Premier = (props) =>{
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };
  return (
    <>
    <div className="flex flex-col items-start gap-1">
      <h3 className="text-white text-bold">Premieres</h3>
      <p className="text-white text-sm">Brand new releases every friday</p>
    </div>
    <Slider {...settings}>
    {props.PremierImages.map((image) => (
      <Poster  {...image} isDark/>
    ))}
    </Slider>
    </>
  );
};
export default Premier;
