import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Commonbtn.css"

const Commonbtn = (props) => {
    return (
        <div>
            <div className={`audbtn ${props.className}`}>
                <Button className='devminds-audience' variant="contained" endIcon={props.endIcon}>
                    {props.text}
                </Button>
            </div>
        </div>
    )
}

export default Commonbtn;