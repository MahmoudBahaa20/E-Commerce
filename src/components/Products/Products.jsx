import React, { useEffect, useState } from "react";
import Style from './Products.module.css'
import RecentProducts from "../RecentProducts/RecentProducts";

export default function Products(){
    const [Counter,setCounter]=useState(0);
    useEffect(()=>{},[])
    return<>
<RecentProducts/>
    
    
    </>
}