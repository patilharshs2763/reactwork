import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function StudentPlaced21() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL+'/readPlacedStud')

            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>

            <div className="container">
                <h1 className="heading">Placement Record</h1>
                <div className="box-container">
                    {data.map((addstudplaced, index) => {
                        return <div key={index}>
                            <div className="box">
                                <img src={addstudplaced.image} alt="img"></img>
                                <h3>{addstudplaced.name}</h3>
                                <p>
                                    Company: {addstudplaced.company}<br />
                                    Student Details: {addstudplaced.details}
                                </p>
                                
                            </div>

                        </div>
                    })}
                </div>

                <br /><br />
                <Button className='btn back-btn-studplaced' as={Link} to={"/drop"}>Back</Button>

            </div>
            {/* <img src={data.image} alt="student"></img>  
            <p>Name: {data.name}</p>
            <p>Company: {data.company}</p>
            <p>Student Details: {data.studDetails}</p> */}
        </>
    );
}
export default StudentPlaced21;