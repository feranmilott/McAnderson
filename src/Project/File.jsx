import React from 'react'
import woman from './images/woman.png'

import  './Style.css'
const File = () => {
  return (
    <div className='feature'>
        <div className='enhance'>
            <div className='hance'>
                <h6>Exciting Features</h6>
                <h3>Unlock Your Potential with Our Featured Offerings</h3>
                <p>Don't miss out on this opportunity to be part of something extraordinary. Join our waitlist now to  secure your spot and be at the forefront of the future of learning.</p>
            </div>
            <div className='general'>
                <div className='content1'>
                    <div>
                        <h2>Discover learning from anywhere</h2>
                        <p>Why confine yourself to a lecture hall when you have the  freedom to learn from the comfort of your home, the serenity of the beach, the creativity of a recording studio, or the familiarity of your own shop?</p>
                    </div>
                    <div>
                        <h2>Learn for prosperity</h2>
                        <p>Whether you're charting a career path, embracing fresh  challenges, or acquiring new skills for professional growth, we're here to guide you toward achieving your goals.</p>
                    </div>
                </div>
                <div className='content2'>
                    <img src={woman} alt="" />
                </div>
                <div className='content1'>
                    <div>
                        <h2>Learn from the most proficient</h2>
                        <p>Our educators are meticulously chosen to ensure optimal learning outcomes. They are experts in their respective  fields, dedicated to providing you with the quality education you deserve.</p>
                    </div>
                    <div>
                        <h2>Learning becomes a community experience</h2>
                        <p>Learners unite to exchange knowledge, collaborate, and  elevate their comprehension. Your learning journey is  shared, not solitary.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default File