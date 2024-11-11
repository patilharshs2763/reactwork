import React from 'react'
import CompA from '../CompA/CompA'
import CompC from '../CompC/CompC'

const CompD = () => {
    return (
        <div>
            <h1>Im in CompD</h1>
            Calling A:
            <CompA  />
            Calling C:
            <CompC />
        </div>
    )
}

export default CompD
