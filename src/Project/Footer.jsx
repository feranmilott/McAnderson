import React from 'react'
import image from './images/logo2.png'
import './Style.css'
const Footer = () => {
  return (
    <div className='footer'>
         <div className='first'>
            <div><img src={image} alt="" /></div>
            <div className='icon'> 
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className='second'>
            <small>© 2024 McAderson - All rights reserved</small>
            <div className='third'>
                <small>Terms & Conditions</small>
                <small>Cookies</small>
                <small>Privacy Policy</small>
            </div>
        </div>
       {/* <div className='fire'>
            <p>© 2024 McAderson - All rights reserved</p>
           
        </div> */}
    </div>
  )
}

export default Footer