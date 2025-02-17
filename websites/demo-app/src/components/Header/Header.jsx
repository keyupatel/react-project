import React from 'react';
import {  NavLink } from "react-router";
import './Header.scss';
const Header = () => {
    
  return (
    
    <nav className='nav-item'>
      {/* NavLink makes it easy to show active states */}
        <NavLink
            to="/"
            className={({isActive}) => isActive ? "active" : "nav-link"}
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({isActive}) => isActive ? "active" : "nav-link"}
        >
            About
        </NavLink>
        <NavLink
            to="/product"
            className={({isActive}) => isActive ? "active" : "nav-link"}
        >
            Product
        </NavLink> 
        <NavLink
            to="/github"
            className={({isActive}) => isActive ? "active" : "nav-link"}
        >
            Github
        </NavLink> 
       
        
      </nav>

  )
}

export default Header