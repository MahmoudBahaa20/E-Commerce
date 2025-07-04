import React, { useEffect, useState } from "react";
import Style from './Footer.module.css'
import image from '../../../public/334f03c99198ac744a17ed9b6b6a494ae460de7e.png'
import image1 from '../../../public/563c6840345c1787c82604eb06cf57004ac76231.png'
import image2 from '../../../public/8ccafd7b932f62a83df39bab9ca724d6963c2a7f.png'
import image5 from '../../../public/77a1df6c72b6fab1752c8524e5b797574cada6b9.png'

export default function Footer(){
    const [Counter,setCounter]=useState(0);
    useEffect(()=>{},[])
    return<>
<footer>
    <section className="one ">
    <div className="container mx-auto py-10">
        <span>$20 discount for your first order</span>
        <h3>Join our newsletter and get...</h3>
        <p>Join our email subscription now to get updates
on promotions and coupons.</p>
<div className=" my-6  ">
   <div className="inputs">
     <form >
    <input  type="email" placeholder="Your email address" />
    
</form>
<button>Subscribe</button>
   </div>

</div>
<img src={image} alt="image1"  />
    </div>
    
</section>

<section>
    <div className="container mx-auto my-28">
        <div className="grid  lg:grid-cols-2 four">
            <div className="flex items-center gap-5">
               <i className="fa-solid fa-phone text-[#35AFA0] text-[20px]"></i>
<div>
    <p className="text-[20px]">8 800 555-55</p>
<span className="text-[11px]">Working 8:00 - 22:00</span>
</div>
            </div>
            <div className="flex items-center gap-4 card"> 
                <div>
                    <p className="text-[14px] font-semibold">Download App on Mobile :</p>
                <span className="text-[11px]">15% discount on your first purchase</span>
                </div>
              <div className="images flex items-center gap-2">
                  <img src={image1} alt="image2" />
                <img src={image2} alt="image3" />
              </div>
                <div className="icons flex items-center gap-2">
                    <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                
            </div>
        </div>

    </div>
</section>
<section>
    <div className="container mx-auto my-8 grid lg:grid-cols-2 five ">
        <div>
            <span className="text-[12px]">Copyright 2025 © All rights reserved by Mahmoud Bahaa</span>
        </div>
        <div className="icons flex items-center gap-2">
        <div className="terms flex items-center gap-2">
            <span className="text-[12px]">Privacy Policy</span>
        <span className="text-[12px]">Terms and Conditions</span>
        <span className="text-[12px]">Cookie</span>

        </div>
        <img src={image5} alt="image5"  />

        </div>

    </div>
</section>
</footer>

    
    
    </>
}