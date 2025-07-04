import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let cartContext=createContext();


export default function CartContextProvider(props){
    let headers={
        token:localStorage.getItem('userToken')
    }
    const [cartsCount,setcartsCount]=useState(null);
    function getLoggedCart(){
       return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
            headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function DeleteCart(productId){
       return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function addProducts(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function UpdateProducts(productId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count:count
        },{
            headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function CheckoutProducts(cartId,url,formValue){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{
            shippingAddress:formValue
        },{
            headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
   async function addCarts(){
        let response = await getLoggedCart();
        console.log(response.data);
        setcartsCount(response.data);

    }
    useEffect(()=>{
        addCarts();
    },[])
    return<cartContext.Provider value={{getLoggedCart, DeleteCart , addProducts , UpdateProducts , CheckoutProducts , cartsCount , setcartsCount}}>
{props.children}
    </cartContext.Provider>

}