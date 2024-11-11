import React from 'react'
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import './ErrorPage.css';
const ErrorPage = () => {
    return (
        <div className='custom-error-page text-center'>

            <div class="glitch-wrapper">
                <div class="glitch" data-text="404">404</div>
            </div>
            <h4>Page not found</h4>
            <Flex gap="large" wrap="wrap">
                <Link to={'/'} className='btn error-button'>Return Home</Link>
                <Link to={'/contact'} className='btn  error-button'>Report Problem</Link>
            </Flex>
        </div>
    )
}

export default ErrorPage
