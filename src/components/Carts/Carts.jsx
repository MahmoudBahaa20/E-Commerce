import React, { useContext, useEffect, useState } from "react";
import Style from './Carts.module.css'
import { cartContext } from "../../Context/CartsContext";
import { Link } from "react-router-dom";


export default function Carts(){
    let {getLoggedCart , UpdateProducts , DeleteCart , setcartsCount}=useContext(cartContext)
    const [carts,setCartsDetails]=useState(null);
   async function getCarts(){
        let response=await getLoggedCart();
        console.log(response.data);
        setCartsDetails(response.data.data);
    }
   async function UpdateCarts(productId,count){
        let response=await UpdateProducts(productId,count);
        setcartsCount(response.data);
        console.log(response.data.data);
        setCartsDetails(response.data.data);
    }
   async function DeleteProducts(productId){
        let response=await DeleteCart(productId);
        setcartsCount(response.data);
        console.log(response.data.data);
        setCartsDetails(response.data.data);
    }
    useEffect(()=>{
        getCarts()
    },[])
    return<>
    <section className="my-20">
        <div className="container mx-auto">
            <h2 className="text-center my-10 text-[24px] font-semibold text-[#35AFA0]">Category Shopping</h2>
            <div className="flex gap-2 justify-center my-10">
                <p>Total Price is </p>
                <span className="text-[#35AFA0]">{carts?.totalCartPrice} EGP</span>
            </div>
            

<div className="relative  mx-auto shadow-md ">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cart">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3 tables-1">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3 tables-2">
          Product
        </th>
        <th scope="col" className="px-6 py-3 tables-2">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 tables-2">
          Price
        </th>
        <th scope="col" className="px-6 py-3 tables-2">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {carts?.products.map((product)=>
    <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600  ">
        <td className="p-4 tables-3">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semiboldt text-gray-900 dark:text-white tables-3">
          {product.product.title}
        </td>
        <td className="px-6 py-4 tables-3">
          <div className="flex items-center">
            <button onClick={()=>UpdateCarts(product.product.id , product.count -1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <span>{product.count}</span>
            <button onClick={()=>UpdateCarts(product.product.id , product.count +1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold  text-gray-900 dark:text-white tables-3">
        {product.price} EGP
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>DeleteProducts(product.product.id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>
    )}
    
    </tbody>
  </table>
  <Link to={'/checkout'}>
<button  className="btn px-4 py-2  w-full rounded-lg bg-[#D51243] text-white">CheckOut</button>
</Link>
</div>




        </div>
    </section>
    
    
    </>
}