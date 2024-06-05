import React, { useRef, useState } from 'react'
import logo from './images/logo.png'
import  './Style.css'


const Header = () => {
   const[menu,setmenu]=useState(false)
   const toggle = () => {
    setmenu(!menu);
  };
  return (
    <div>
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div >
                <nav className={`down ${menu ? 'drop' : ''}`}>
                    <a href="#">Why McAnderson?</a>
                    <a href="#">Learning Paths</a>
                    <a href="#">Key Features</a>
                    <a href="#">FAQ</a> 
                </nav>
                <div className='ham' onClick={toggle}>
                      {menu?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>} 
                    </div>
            </div>
               
                <nav className='down'>
                   <a href="#">Coming Soon</a> 
                 </nav> 
            {/* <div className='ham' onClick={toggle}>
                    <i class="fa-solid fa-bars"></i>  
            </div>    */}
        </div>
    </div>
  )
}

export default Header