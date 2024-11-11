import React from 'react';
import './Recruiters.css'
import RecImages from '../Images/Recruiters/ZYCUS.jpg';
import zopper from '../Images/Recruiters/Zopper.png';
import tata from '../Images/Recruiters/tata.jpg';
import ubi from '../Images/Recruiters/ubi.png';
import te from '../Images/Recruiters/te.png';
import skl from '../Images/Recruiters/SLK.png';
import ms from '../Images/Recruiters/Microsoft.jpg';
import bc from '../Images/Recruiters/barclays.png';
import hex from '../Images/Recruiters/Hexaware.png';
const Recruiters = () => {
    return (
        <div className="container rcontainer">
            <h1 className="heading">Our Recruiters</h1>
            <div className="box-container recruiters">
                <div className="box rBox">
                    <a href='https://www.zycus.com/'>
                        <img src={RecImages}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <a href='https://www.zopper.com/'>
                        <img src={zopper}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <a href='https://www.tatapower.com/'>
                        <img src={tata}></img>
                    </a>

                </div>
                <div className="box rBox">
                    <a href='https://www.ubisoft.com/en-us/'>
                        <img src={ubi}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <a href=''>
                        <img src={te}></img>
                    </a>

                </div>
                <div className="box rBox">
                    <a href=' '>
                        <img src={skl}></img>
                    </a>

                </div>
                <div className="box rBox">
                    <a href=' '>
                        <img src={ms}></img>
                    </a>
                </div>

                <div className="box rBox">
                    <a href=' '>
                        <img src={bc}></img>
                    </a>
                </div>




            </div>
        </div>
    );
};

export default Recruiters;