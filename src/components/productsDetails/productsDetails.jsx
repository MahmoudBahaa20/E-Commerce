import React, { useEffect, useState } from "react";
import Style from './ProductsDetails.module.css'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";


export default function ProductsDetails(){
    let {id,category}=useParams();

    const [productDetails,setproductDetails]=useState(null);
    const [productRelated,setproductRelated]=useState([]);
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    function getProductsDetails(id){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        .then(({data})=>{
            setproductDetails(data.data);

        })
        .catch(()=>{

        })
    }
    function getRelatedProducts(category){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=>{
            let allProducts=data.data;
            let related=allProducts.filter((product)=>product.category.name==category);
            
            
            setproductRelated(related);


        })
        .catch(()=>{

        })
    }

    useEffect(()=>{
        getProductsDetails(id);
        getRelatedProducts(category);
    },[id,category])
    return<>
    <section className="productdetails">
        <div className="container mx-auto flex flex-col justify-center my-[500px] h-[100vh]">
            <div className="row flex flex-wrap items-center">
                <div className="w-1/4">
                 <Slider className="slider" {...settings}>
      {productDetails?.images.map((src)=> <img className="w-full" src={src} alt={productDetails?.title} />)}
    </Slider>
                   
                </div>
                <div className="details w-3/4 p-6 ">
<h2 className="text-lg font-normal text-gray-950">{productDetails?.title}</h2>
<p className="font-light text-gray-500 mt-4">{productDetails?.description}</p>
<div className="flex justify-between items-center mt-4">
<span className="text-[#D51243]">{productDetails?.price} EGP</span>
<span>{productDetails?.ratingsAverage} <i className="fa fa-star text-yellow-500"></i></span>

</div>
<button className="btn px-4 py-2 w-full rounded-lg bg-[#D51243] text-white mt-4">Add to card</button>
                </div>

            </div>
            <h2 className="mt-20 text-[20px] font-semibold text-[#35AFA0]">Related Products</h2>
            <div className="grid grid-cols-4 relatedproducts">
                
                {productRelated.map((product)=>
                    <div className="product p-6">
                        
<Link to={`/productsdetails/${product.id}/${product.category.name}`}>
    <img className="w-full" src={product.imageCover} alt="cardimage"  />
<span className="text-[#71778E] text-[13px]">{product.category.name}</span>
<h2 className="text-[#202435]">{product.title.split(' ').splice(0,2).join(' ')}</h2>
<div className="flex justify-between items-center">
<span className="text-[#D51243]">{product.price} EGP</span>
<span>{product.ratingsAverage} <i className="fa fa-star text-yellow-500"></i></span>

</div>
<button className="btn px-4 py-2 w-full rounded-lg bg-[#D51243] text-white">Add to card</button>
</Link>
</div>
            
                )}
            </div>

        </div>
    </section>
    
    
    
    </>
}