import React from 'react';
import './Testinomial.css';
import img1 from '../Component/Images/bill.jpg'
import img2 from '../Component/Images/sundar.jpg'
import img3 from '../Component/Images/satya.jpg'

const Testinomial = () => {
    return (
        <div class="testimonial-area">
            <div class="container">
                {/* <div class="row"> */}
                {/* <div class="col-sm-12">
                        <div class="section-header text-center">
                            <h4>Testimonials</h4>
                            <h2>What Clients Says</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.</p>
                        </div>
                    </div> */}
                <div class="col-12">
                    <div class="carousel slide w-75 custom" data-bs-ride="true" id="carouselExampleIndicators">
                        <div class="carousel-indicators">
                            <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="icon-area">
                                    <i class="fa fa-comments"></i>
                                </div>
                                <div class="content text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <div class="person"><img alt="" src={img1} /></div>
                                    <h4>David Jones</h4>
                                    <h6>Web Developer</h6>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="icon-area">
                                    <i class="fa fa-comments"></i>
                                </div>
                                <div class="content text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div class="person"><img alt="" src={img2} /></div>
                                    <h4>Martin Thomas</h4>
                                    <h6>Graphics Designer</h6>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="icon-area">
                                    <i class="fa fa-comments"></i>
                                </div>
                                <div class="content text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <div class="person"><img alt="" src={img3} /></div>
                                    <h4>Luke Jobs</h4>
                                    <h6>UI/UX Designer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Testinomial;
