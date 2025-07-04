import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import UserContextProvider, { userContext } from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductsDetails from './components/productsDetails/productsDetails'
import Products from './components/Products/Products'
import Brands from './components/Brands/Brands'
import Carts from './components/Carts/Carts'
import CartContextProvider from './Context/CartsContext'
import { Toaster } from 'react-hot-toast'
import Checkout from './components/Checkout/Checkout'
import Order from './components/Order/Order'
import {HeroUIProvider} from "@heroui/react"


let x=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'products',element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'contacts',element:<ProtectedRoute><Contacts/></ProtectedRoute>},
    {path:'carts',element:<ProtectedRoute><Carts/></ProtectedRoute>},
    {path:'about',element:<ProtectedRoute><About/></ProtectedRoute>},
    {path:'checkout',element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders',element:<ProtectedRoute><Order/></ProtectedRoute>},
    {path:'productsdetails/:id/:category',element:<ProtectedRoute><ProductsDetails/></ProtectedRoute>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>}
    
    
   
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return<HeroUIProvider>
     <UserContextProvider>
    <CartContextProvider>
      <RouterProvider router={x}></RouterProvider>
      <Toaster/>
    </CartContextProvider>
     
  </UserContextProvider>
  </HeroUIProvider>
 
  
}

export default App
