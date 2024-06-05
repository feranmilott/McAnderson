import React from 'react'
import git from './images/Asset 1.png'
import copy from './images/gittla.png'
import google from './images/gooogl.png'
import micro from './images/mii-removebg-preview.png'
import copy1 from './images/ifa-removebg-preview.png'
import atl from './images/attlassian.png'
import  './Style.css'

const Logo = () => {
  return (
    <div className='both'>
        <h2>Some of our Partners</h2>
        <div className='images'>
                <img src={git} alt="" />
                 {/* <img src={cool} alt="" />  */}
                <img src={copy} alt="" />
                <img src={google} alt="" />
                <img src={micro} alt="" />
                <img src={copy1} alt="" />
                <img src={atl} alt="" />

        </div>
    </div>
  )
}

export default Logo