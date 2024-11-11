import React from 'react'
import CompD from '../CompD/CompD'

const CompB = (props) => {
    return (
        <div>
            <h1>Im in CompB</h1>
            Calling D:
            <h3>Name:{props.Name}<br />Roll:{props.roll}<br />Address:{props.address}<br />Number:{props.number}<br />Class:{props.className}<br />Phone number:{props.phoneNumber}</h3>
            <CompD />
        </div>
    )
}

export default CompB
