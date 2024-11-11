import React from 'react'
import './Home.css'
import heroImg from "../Images/hero-img.jpg"
const Home = () => {
    const donwloadAlert = () => {
        alert("Downloaded Succefully!");
    }
    return (
        <div className='hero-main'>
            <div className='left-content'>
                <div className='describe'>
                    <h1>Welcome <span className='name-title'>Harsh</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <button className='view-btn' onClick={donwloadAlert}>Download CV</button>
                </div>

            </div>
            <div className='right-content'>
                <img src={heroImg} alt='Image not found' className='hero-img-style' />
            </div>

        </div>
    )
}

export default Home
