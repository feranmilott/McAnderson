import React from 'react'
import  './Style.css'
import * as yup from "yup"
import {useFormik} from 'formik'

const Banner = () => {
  let formik = useFormik({
    initialValues:{
      fullname:'',
      email:'' 
      },
      onSubmit : (values)=>{
        console.log(values)
      },
      validationSchema:yup.object({
        fullname:yup.string().max(12,'max of 12').matches(/^[A-Za-z]*$/),
        email:yup.string().email('incorrect email'),
      })
  })
  // console.log(formik.values)
  return (
    <div className='wrapper'>
        <div className="banner">
           <div className='wrap'>
                <div className='item1'>
                    <h2>One of the best learning management system  tools available</h2>
                    <p>Our comprehensive eLearning platform is on a mission to empower  individuals like you with expert-led classes, personalized mentorship, and  seamless connections to job opportunities.</p>
                </div>
                <div className='item2'>
                  <div className="form">
                  
                        <h2>Be part of McAnderson’s early users.</h2>
                        <h2>Join the waitlist now!</h2>
                        <p>Enter the fields below to get started</p>
                        <form action="" onSubmit={formik.handelSubmit}>
                        <input type="text" name="fullname" placeholder='Full name' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
                        <input type="text" name="email" placeholder='Enter Email' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
                        {/* <input type="text" name="" id="" placeholder='Full name'/><br />
                        <input type="email" name="" id="" placeholder='Enter Email' /><br /> */}
                        <button>Join Waitlist</button>
                    </form>
                  </div>
                    
                </div>
           </div>
        </div>
    </div>
  )
}

export default Banner