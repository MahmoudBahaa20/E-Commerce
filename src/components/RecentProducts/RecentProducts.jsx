import React, { useContext, useEffect, useState } from "react";
import Style from './RecentProducts.module.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartsContext";
import toast from "react-hot-toast";





export default function RecentProducts(){
    const [RecentProduct,setRecentProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const[CurrentProduct,setCurrentProduct]=useState(0);
    let{addProducts , setcartsCount}=useContext(cartContext);
    
   async function addToCart(productId){
    setLoading(true);
    setCurrentProduct(productId);
        let response=await addProducts(productId);
        
          
        if(response.data.status==="success"){
            setcartsCount(response.data);
             setLoading(false);
            toast.success(response.data.message,{
position:'top-center',
duration:1000

            })
        }
        else{
             setLoading(false);
              toast.error(response.data.message)
        }
    }
    function getProducts(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
setRecentProduct(data.data);
console.log(data.data)
    })
    .catch((error)=>{

    })
    }
    useEffect(()=>{
getProducts();
    },[])
    return<>
    <section>
        <div className="container mx-auto recentproduct grid lg:grid-cols-4 sm:grid-cols-2 ">
            {RecentProduct.map((product)=><div key={product.id} >
<div className="product p-6">
<Link to={`/productsdetails/${product.id}/${product.category.name}`}>
    <img className="w-full" src={product.imageCover} alt="cardimage"  />
<span className="text-[#71778E] text-[13px]">{product.category.name}</span>
<h2 className="text-[#202435]">{product.title.split(' ').splice(0,2).join(' ')}</h2>
<div className="flex justify-between items-center">
<span className="text-[#D51243]">{product.price} EGP</span>
<span>{product.ratingsAverage} <i className="fa fa-star text-yellow-500"></i></span>

</div>

</Link>
<button onClick={()=>addToCart(product.id)} className="btn px-4 py-2 w-full rounded-lg bg-[#D51243] text-white">{CurrentProduct=== product.id && loading?<i className="fas fa-spinner fa-spin"></i>:'Add to card'}</button>
</div>
            </div>)}

        </div>
    </section>
    
    
    
    </>
}