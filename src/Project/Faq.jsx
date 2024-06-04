import React, { useState } from 'react'

const Faq = () => {
  const[drop,setdrop]=useState(false)
  const[drop1,setdrop1]=useState(false)
  const[drop2,setdrop2]=useState(false)
  const[drop3,setdrop3]=useState(false)
  const[drop4,setdrop4]=useState(false)
  const[drop5,setdrop5]=useState(false)

  const toggle=()=>{
    setdrop(!drop)
  }
  const toggle1=()=>{
    setdrop1(!drop1)
  }
  const toggle2=()=>{
    setdrop2(!drop2)
  }
  const toggle3=()=>{
    setdrop3(!drop3)
  }
  const toggle4=()=>{
    setdrop4(!drop4)
  }
  const toggle5=()=>{
    setdrop5(!drop5)
  }
  
  return (
    <div>
      <div className='faq1'>
          <button>Tagline Here</button>
          <h2>Frequently asked Question</h2>
        </div>
      <div className='faq2'>
        <div className='faq' onClick={toggle}>
          
            <div >
              <div className='faq3'>
                <h5>Can I take a course for free</h5>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              
            <div>
              {
                drop &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
          </div>
        </div>
        <div className='faq' onClick={toggle1}>
          <div className='faq3'>
            <h5>Will I take an assessment to start?</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
              {
                drop1 &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
        </div>
        <div className='faq' onClick={toggle2}>
          <div className='faq3'>
            <h5>How do I process Refunds?</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
              {
                drop2 &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
        </div>
        <div className='faq' onClick={toggle3}>
          <div className='faq3' >
            <h5>How to pay the tuition fee?</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
              {
                drop3 &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
        </div>
        <div className='faq' onClick={toggle4}>
          <div className='faq3'>
            <h5>Is the programs beginner-friendly?</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
              {
                drop4 &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
        </div>
        <div className='faq' onClick={toggle5}>
          <div className='faq3'>
            <h5>Can I transfer to another program after applying for one?</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
              {
                drop5 &&(
                <div>
                  <p>See the most common asked questions and their answers</p>
                  <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                )
              }   
            </div>
        </div>

      </div>
      <div className='faqs'>
          <h2>Still have questions?</h2>
          <small>If you couldn’t see your question, get in contact with us now to get your answer</small>
          <button>Contact Us</button>
        </div>
    </div>

    
  )
}

export default Faq