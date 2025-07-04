import React, { useEffect, useState } from "react";
import Style from './Contacts.module.css'

export default function Contacts(){
    const [Counter,setCounter]=useState(0);
    useEffect(()=>{},[])
    return<>
    <section>
        <div className="conatainer mx-auto contacts">
            <h2 className="text-[#202435] text-[40px] text-center">Get In Touch</h2>
            <p className="text-[#202435] text-[14px] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
veniam vel.</p>
<div className="grid md:grid-cols-3 mt-20 px-8">
    <div className="flex flex-col justify-center items-center mx-4 my-4 py-6 card">
        <i className="fa-solid fa-location-dot text-[#35AFA0] text-[20px]"></i>
        <p className="text-[#202435] text-[15px] text-center font-semibold mt-4">102 Street 2714 Donovan</p>
        <p className="text-[#202435] text-[13px] text-center mt-4">Lorem ipsum dolar site amet discont</p>
    </div>
    <div className="flex flex-col justify-center items-center  mx-4 my-4 py-6 card">
        <i className="fa-solid fa-phone text-[#35AFA0] text-[20px]"></i>
        <p className="text-[#202435] text-[15px] text-center font-semibold mt-4">+02 1234 567 88</p>
        <p className="text-[#202435] text-[13px] text-center mt-4">Lorem ipsum dolar site amet discont</p>
    </div>
    <div className="flex flex-col justify-center items-center mx-4 my-4 py-6 card">
        <i className="fa-regular fa-envelope text-[#35AFA0] text-[20px]"></i>
        <p className="text-[#202435] text-[15px] text-center font-semibold mt-4">info@example.com</p>
        <p className="text-[#202435] text-[13px] text-center mt-4">Lorem ipsum dolar site amet discont</p>
    </div>

</div>
<div className="my-28 bg-[rgba(255,255,255,0.2)] shadow">
    <h2 className="text-[#202435] text-[40px] text-center">Send Us</h2>
    <p className="text-[#202435] text-[14px] text-center">Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact
offices.</p>
 <form class="container mx-auto flex flex-col justify-center items-center">
    <div className="flex  items-center gap-10 inputs1  mt-28">
        <div class="mb-5">
    <div>
  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
  <input type="text" id="name" className= "w-[400px] bg-[#F3F4F7] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  " placeholder="Enter Your Name" required />

</div>
    </div>
    <div class="mb-5">
    <div>
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
  <input type="email" id="email" className= "w-[400px] bg-[#F3F4F7] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  " placeholder="name@flowbite.com" required />

</div>

</div>
  

</div>
<div class="mb-5">
    <div>
  <label htmlFor="phone" className="block  mb-2 text-sm font-medium text-gray-900">Phone number</label>
  <input type="tel" id="phone" className= "w-[850px] inputs bg-[#F3F4F7] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  " placeholder="Enter Your phone" required />

</div>
</div>
<div class="mb-5">
    <div>
  <label htmlFor="name" className="block  mb-2 text-sm font-medium text-gray-900">Message</label>
  <textarea  id="name" className= "w-[850px] inputs bg-[#F3F4F7] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  " placeholder="Enter Your Message" required ></textarea>

</div>

</div>
<div className="flex justify-center ">
    <button type="submit" className= "mb-10 text-white bg-[#35AFA0] hover:bg-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[37px] py-[14px] text-center ">Submit</button>
</div>
</form>

   


  

</div>


        </div>
    </section>
    
    
    </>
}