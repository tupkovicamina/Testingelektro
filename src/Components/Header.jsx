import React, { useRef } from 'react'
import logo from './../assets/Images/logo1-removebg-preview.png'
import '../CSS/header.css'
import {FaBars, FaTimes} from "react-icons/fa";

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
            <a href='/'>
              <img src={logo} alt='Logo' className='logo-img' />
            </a>

            <nav ref={navRef}>
                <a href='/#'>Početna</a>
                <a href='/#'>O Nama</a>
                <a href='/#'>Projekti</a>
                <a href='/#'>Kontakt</a>

                <button className = "nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = "nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        
    </header>
  )
}

export default Header