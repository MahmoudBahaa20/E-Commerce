import React, { useContext, useEffect, useState } from "react";
import Style from './Checkout.module.css'
import { useFormik } from "formik";
import axios from "axios";
import { cartContext } from "../../Context/CartsContext";
import { Await } from "react-router-dom";





export default function Checkout(){

    let {CheckoutProducts}=useContext(cartContext);
    

    

    useEffect(()=>{},[])
       let formik=useFormik({
        initialValues:{
           
            details:'',
            phone:'',
            city:''
        },
        onSubmit:()=> handleCheckout('6861d58507d9989f30e8559e','https://mahmoudbahaa20.github.io/E-Commerce/')
    })
   async function handleCheckout(cartId,url){
      let {data}= await CheckoutProducts(cartId,url,formik.values);
     if(data.status === 'success'){
        window.location.href=data.session.url;
     }
     
    }
   
 
    return<>
    <section className="h-[100vh] flex flex-col justify-center items-center  register">
        <div className="container mx-auto ">
          
            
            <form class="max-w-xl mx-auto flex flex-col justify-center items-center  " onSubmit={formik.handleSubmit}>
                <h2 className="text-[36px] font-semibold  text-[#35AFA0] text-center py-20">CheckOut Now</h2>
  
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Details :</label>
  </div>
  
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone :</label>
  </div>
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your City :</label>
  </div>
  
  <button type="submit" className="text-white mb-5 bg-[#35AFA0] hover:bg-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#35AFA0] dark:hover:bg-[#35AFA0] dark:focus:ring-[#35AFA0]">Pay Now</button>
  
</form>

        </div>
    </section>

    
    
    </>
}