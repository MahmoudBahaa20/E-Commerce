import React, { useEffect, useState } from "react";
import Style from './Brands.module.css'
import axios from "axios";

export default function Brands(){
    const [Brands,setBrands]=useState([]);

    function getBrands(){
        axios.get('https://ecommerce.routemisr.com/api/v1/brands')
        .then(({data})=>{
setBrands(data.data)
console.log(data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getBrands();
    },[])
    return<>
   <section>
    <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-4 brand">
            {Brands.map((brand)=>
            <div className="px-4">
                <img src={brand.image} alt={brand.name} />
                <h3>{brand.name}</h3>
            </div>
            )}

        </div>

    </div>
   </section>
    
    
    </>
}