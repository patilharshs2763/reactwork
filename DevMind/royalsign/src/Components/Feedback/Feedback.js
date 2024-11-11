import React from 'react'
import { StarFilled } from '@ant-design/icons';

import "./Feedback.css"
const Feedback = () => {
    return (
        <div className='container-fluid devmind-feedback'>
            <h1 className='devmind-feedback-title'>lovely feedback from our clients</h1>
            <div className='devmin-feedback-data'>
                <div className='devmind-user'>
                    <span className='feedback-rate'><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span><br />
                    <span>Very professional and<br />
                        understanding and fast</span><br />
                    <span>-Mr.Patil</span>
                </div>
                <div className='devmind-user'>
                    <span className='feedback-rate'><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span><br />
                    <span>Very professional and<br />
                        understanding and fast</span><br />
                    <span>-Mr.Patil</span>
                </div>
                <div className='devmind-user'>
                    <span className='feedback-rate'><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span><br />
                    <span>Very professional and<br />
                        understanding and fast</span><br />
                    <span>-Mr.Patil</span>
                </div>
            </div>
        </div >
    )
}

export default Feedback