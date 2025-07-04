import React, { useEffect, useState } from "react";
import Style from './CategorySlider.module.css'
import axios from "axios";
import Slider from "react-slick";

export default function CategorySlider(){
    const [Category,setCategory]=useState([]);
     var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true
  };
    function getCategory(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>{
setCategory(data.data)
        })
        .catch(()=>{

        })
    }
    useEffect(()=>{
        getCategory()
    },[])
    return<>
   <section>
    <div className="container mx-auto">
        <h2 className="py-4 font-semibold text-[#35AFA0]">Shop Popular Categories</h2>
        <Slider {...settings}>
      {Category.map((category)=><div className=" category">
        <img className="w-full" src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </div>)}
    </Slider>
    </div>
   </section>
    
    
    </>
}