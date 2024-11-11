import React from 'react';
import { useEffect } from 'react';
import './Home.css';
import harshhome from '../Images/heroImage.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <div className='hero-harsh'>
            <div className='container'>
                <div className='row h-75'>
                    <div className='col-12 col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6' data-aos="fade-right">
                        <div className='harsh-desc' >
                            <span>Hello!</span>
                            <h1>I'm <span className='harsh-name'>Harsh</span></h1>
                            <h1><span className='harsh-surname'>Patil</span></h1>
                            <h5 className='harsh-position'>Software Engineer</h5>
                            <p className='harsh-career'>A React Developer specializing in building modern web applications.</p>
                            <div className='harsh-socialmedia-main'>
                                <div className='harsh-socialmedia'>
                                    <button type="button" className="btn btn-info btn-sm bg-transparent social-mediabtn">
                                        <FontAwesomeIcon className='iconStyle' icon={faLinkedinIn} />
                                    </button>
                                    <button type="button" className="btn btn-info btn-sm bg-transparent social-mediabtn">
                                        <FontAwesomeIcon className='iconStyle' icon={faGithub} />
                                    </button>
                                    <button type="button" className="btn btn-info btn-sm bg-transparent social-mediabtn">
                                        <FontAwesomeIcon className='iconStyle' icon={faInstagram} />
                                    </button>
                                    <button type="button" className="btn btn-info btn-sm bg-transparent social-mediabtn">
                                        <FontAwesomeIcon className='iconStyle' icon={faFacebook} />
                                    </button>
                                </div>
                                <button type="button" class="btn harsh-resume-btn btn-outlined-info rounded-pill btn-sm">Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 d-flex  justify-content-center align-self-center' data-aos="fade-left">
                        {/* <img src={harshhome} alt="Harshpatil" className='harshImg-home' /> */}
                        <img src={harshhome} alt="Harshpatil" className='harshImg-home' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
