import React, { useEffect, useState } from "react";
import Style from './MainSlider.module.css';
import axios from "axios";
import Slider from "react-slick";
import slide1 from'../../../public/slider2.d5bc29a3b1afa74813e9.jpeg';
import slide2 from'../../../public/slider3.99cb51759e22d50c22bf.webp';
import slide3 from'../../../public/slider4.91960c83e72a60eef666.webp';
import slide4 from'../../../public/slider5.610225bf098ebbcdb5c3.jpg';


export default function MainSlider(){
    const [Counter,setCounter]=useState(0);
    useEffect(()=>{},[])
      var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
    return<>
<section>
    <div className="container mx-auto my-20 mainslider">
        <Slider {...settings}>
      <img className="w-full h-[300px]" src={slide1} alt="slider1" />
      <img className="w-full h-[300px]" src={slide2} alt="slider2" />
      <img className="w-full h-[300px]" src={slide3} alt="slider3" />
      <img className="w-full h-[300px]" src={slide4} alt="slider4" />
    </Slider>

    </div>
</section>
    
    
    </>
}