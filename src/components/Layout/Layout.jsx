import React, { useEffect, useState } from "react";
import Style from './Layout.module.css'
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    const [Counter,setCounter]=useState(0);
    useEffect(()=>{},[])
    return<>
 <Navber/>
 <div className="my-8">
    <Outlet></Outlet>
 </div>
 <Footer/>
    
    
    </>
}