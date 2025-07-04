import React, { useEffect, useState } from "react";
import Style from './Login.module.css'
import { useFormik } from "formik";
import axios from "axios";
import { Link, Links, useNavigate } from "react-router-dom";
import * as Yup from 'yup';



export default function Login(){
    const [apiError,setapiError]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    let navigate=useNavigate();

    useEffect(()=>{},[])
    function handleLogin(formValues){
        setIsLoading(true);
 axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formValues)
 .then ((response)=>{
if(response.data.message==='success'){
    setIsLoading(false)
navigate('/')
    localStorage.setItem('userToken',response.data.token)
    setuserLogin(response.data.token)
    navigate('/')
    
}
console.log(response.data.message)
 })
.catch((apiResponse)=>{
    setIsLoading(false);
    setapiError(apiResponse?.response?.data?.message);
})
    }
    let validationScheme = Yup.object().shape({
        email:Yup.string().email('Email is invalid').required('Email is Required'),
        password:Yup.string().matches(/^[A-Z][a-z0-9]{3,10}$/,'Password must be start uppercase and smallcase and 3 number or more').required('Password is Required')
    })
    let formik=useFormik({
        initialValues:{
           
            email:'',
            password:''
        },
        validationSchema:validationScheme,
        onSubmit:handleLogin
    })
    return<>
    <section className="h-[100vh] flex flex-col justify-center items-center  register">
        <div className="container mx-auto ">
            {apiError?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:null}
            
            <form class="max-w-xl mx-auto flex flex-col justify-center items-center  " onSubmit={formik.handleSubmit}>
                <h2 className="text-[36px] font-semibold  text-[#35AFA0] text-center py-20">Login</h2>
  
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email :</label>
  </div>
  {formik.errors.email && formik.touched.email?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div>:null}
  
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
  </div>
  {formik.errors.password && formik.touched.password?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.password}
</div>:null}
  
  <button type="submit" className="text-white mb-5 bg-[#35AFA0] hover:bg-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#35AFA0] dark:hover:bg-[#35AFA0] dark:focus:ring-[#35AFA0]">{isLoading?<i className="fa fa-spinner fa-spin"></i>:'Login'}</button>
  <p>Didn't have account? <span className="text-[#35AFA0] ps-4 font-semibold"><Link to={'/register'}>Register Now</Link></span></p>
</form>

        </div>
    </section>

    
    
    </>
}