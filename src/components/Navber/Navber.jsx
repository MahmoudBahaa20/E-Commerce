import React, { useContext, useEffect, useState } from "react";
import Style from './Navber.module.css'
import image from '../../../public/freshcart-logo.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/UserContext.jsx";
import { cartContext } from "../../Context/CartsContext.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};



export default function Navber(){
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
     
   <NavLink to={'/'}> Home</NavLink>,
   <NavLink to={'/products'}> Products</NavLink>,
   <NavLink to={'/brands'}> Brands</NavLink>,
   <NavLink to={'/carts'}> Carts</NavLink>,
   <NavLink to={'/contacts'}> Contacts</NavLink>,
    
    
  ];
    let navigate=useNavigate();
  let {userLogin , setuserLogin}=useContext(userContext)
  let {cartsCount}=useContext(cartContext);
  function logOut(){
localStorage.removeItem('userToken');
setuserLogin(null)
navigate('/login')
  }
  
    return<>
 <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Shopping</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {userLogin!==null?<>
        <NavbarItem isActive>
          <NavLink color="foreground" to={'/'}>
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <NavLink aria-current="page" to={'/products'}>
            Products
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={'/brands'}>
            Brands
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={'/carts'}>
            Carts
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={'/contacts'}>
            contacts
          </NavLink>
        </NavbarItem>
        
        </>:null}
        
      </NavbarContent>
      <NavbarContent justify="end">
        {userLogin===null?<>
        <NavbarItem className="hidden lg:flex">
          <NavLink to={'/login'}>Login</NavLink>
        </NavbarItem>
        <NavbarItem>
         <NavLink to={'/register'}>
          <Button as={Link} color="primary"  variant="flat">
            Sign Up
          </Button>
          </NavLink> 
        </NavbarItem>
        
        </>:<NavbarItem>
         <div >
          <Button as={Link} color="primary"  variant="flat" onClick={logOut}>
            LogOut
          </Button>
          </div> 
        </NavbarItem>

}
<NavbarItem>
         <div className="relative">
          <i className="fa-solid fa-cart-shopping text-[#35AFA0]"></i>
          <span className="absolute top-[-5px] right-[-5px] bg-[#35AFA0] w-[15px] text-center rounded-lg text-black">{cartsCount?.numOfCartItems}</span>
          </div> 
        </NavbarItem>
        
        
        
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    




    
    


    
    
    </>
}