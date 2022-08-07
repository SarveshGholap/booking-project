import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) =>{
  return (
  <>
    <div className="w-full h-29 px-2">
    <img
     className= "w-full h-full rounded-xl"
     src ={props.src}
     alt ="EntertainmentCard"
     />
    </div>
  </>
  );
};

const EntertainmentCardSlider =() => {
  const EntertainmentImage =[
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTQ1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png"
  ];
  const settings ={
    infinity:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:false,
    InitialSlide:0
  }
  return (
    <>
      <Slider {...settings}>
      {EntertainmentImage.map((image)=> (
        <EntertainmentCard src ={image} />
      ))}
      </Slider>
    </>
  );
};
export default EntertainmentCardSlider;
