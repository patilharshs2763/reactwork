import React from 'react'
import "./Location.css"
import Gwaliya from "./Images/Gwaliya.webp"

const Location = () => {
  return (
    <div className='container devminds-location mt-2'>
        <img src = {Gwaliya} alt="gwaliya" className='devminds-reach' />
        <div className='devminds-india'>
            <h2>We reach<br/><span className='devminds-www'>across<br/>India</span></h2>
        </div>
    </div>
  )
}

export default Location;