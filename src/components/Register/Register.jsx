import React, { useContext, useEffect, useState } from "react";
import Style from './Register.module.css'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { userContext } from "../../Context/UserContext";


export default function Register(){
    let {setuserLogin}=useContext(userContext)
    const [apiError,setapiError]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    let navigate=useNavigate();

    useEffect(()=>{},[])
    function handleRegister(formValues){
        setIsLoading(true);
 axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formValues)
 .then ((response)=>{
if(response.data.message==='success'){
    localStorage.setItem('userToken',response.data.token);
    setuserLogin(response.data.token)
    setIsLoading(false);
navigate('/login');
}
 })
.catch((apiResponse)=>{
    setIsLoading(false);
    setapiError(apiResponse?.response?.data?.message);
})
    }
    let validationScheme = Yup.object().shape({
        name:Yup.string().min(3,'Name minlength is 3').max(10,'Name maxlength is 10').required('Name is Required'),
        email:Yup.string().email('Email is invalid').required('Email is Required'),
        phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'Phone must be eqyptain number').required('phone is Required'),
        password:Yup.string().matches(/^[A-Z][a-z0-9]{3,10}$/,'Password must be start uppercase and smallcase and 3 number or more').required('Password is Required'),
        rePassword:Yup.string().min(3,'Name minlength is 3').oneOf([Yup.ref('password')],'password and repassword must be the same').required('Repassword is Required')
    })
    let formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            password:'',
            rePassword:''
        },
        validationSchema:validationScheme,
        onSubmit:handleRegister
    })
    return<>
    <section className="h-[100vh] flex flex-col justify-center items-center  register">
        <div className="container mx-auto ">
            {apiError?<div className="p-4 flex justify-center items-center my-6 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:null}
            
            <form class="max-w-xl mx-auto flex flex-col justify-center items-center  " onSubmit={formik.handleSubmit}>
                <h2 className="text-[36px] font-semibold  text-[#35AFA0] text-center py-20">Register</h2>
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name :</label>
  </div>
  {formik.errors.name && formik.touched.name?<div className=" p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.name}
</div>:null}
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email :</label>
  </div>
  {formik.errors.email && formik.touched.email?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div>:null}
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone :</label>
  </div>
  {formik.errors.phone && formik.touched.phone?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.phone}
</div>:null}
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
  </div>
  {formik.errors.password && formik.touched.password?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.password}
</div>:null}
  <div class="relative z-0 w-full mb-4 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword" id="repassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="repassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password Again :</label>
  </div>
  {formik.errors.rePassword && formik.touched.rePassword?<div className="p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.rePassword}
</div>:null}
  <button type="submit" className="text-white mb-5 bg-[#35AFA0] hover:bg-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#35AFA0] dark:hover:bg-[#35AFA0] dark:focus:ring-[#35AFA0]">{isLoading?<i className="fa fa-spinner fa-spin"></i>:'Submit'}</button>
</form>

        </div>
    </section>

    
    
    </>
}