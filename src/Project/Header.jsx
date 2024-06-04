import React, { useRef, useState } from 'react'
import logo from './images/logo.png'
import  './Style.css'


const Header = () => {
    // const mobile=useRef()
    // const toggle=()=>{
        
    // }
  return (
    <div>
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="#">Why McAnderson?</a>
                <a href="#">Learning Paths</a>
                <a href="#">Key Features</a>
                <a href="#">FAQ</a>
            </nav>
            <nav>
                <a href="#">Coming Soon</a> 
            </nav> 
            {/* <div className='ham' >
                    <i class="fa-solid fa-bars"></i>  
                </div> */}
        </div>
    </div>
  )
}

export default Header