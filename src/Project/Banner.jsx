import React from 'react'
import  './Style.css'

const Banner = () => {
  return (
    <div>
        <div className="banner">
           <div className='wrap'>
                <div className='item1'>
                    <h2>One of the best learning management system  tools available</h2>
                    <p>Our comprehensive eLearning platform is on a mission to empower <br /> individuals like you with expert-led classes, personalized mentorship, and <br /> seamless connections to job opportunities.</p>
                </div>
                <div className='item2'>
                    <form action="">
                        <h2>Be part of McAnderson’s early users.</h2>
                        <h2>Join the waitlist now!</h2>
                        <p>Enter the fields below to get started</p>
                        <input type="text" name="" id="" placeholder='Full name'/><br />
                        <input type="email" name="" id="" placeholder='Enter Email' /><br />
                        <button>Join Waitlist</button>
                    </form>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Banner