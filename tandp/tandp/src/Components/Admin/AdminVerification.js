import '../Login/login.css';
import logo from "../Images/logoo.png";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminVerification() {
    const [values, setValues] = useState({
        code: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        console.log(values);
        event.preventDefault();
        axios.post(process.env.REACT_APP_BASE_URL + '/adminVerify', { username: "admin", code: values.code })
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    navigate("/adminPage");
                } else {
                    alert("Invalid Code ..");
                }
            })
            .catch(err => {
                console.log("Admin Login failed Something went wrong ! ", err);
                alert("Invalid Code ..");
            });
    }
    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    return (
        <div>

            {/* <div className='mainBg' style={{backgroundImage: `url(${bg})`} } > */}
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                    <img src={logo} alt='logo' />
                    <div className='LoginContainer AdminBox'>
                        <form onSubmit={handleSubmit}>

                            <h4>Administrator User</h4>

                            <div className="input">
                                <input type="password" name="code" id="Code" required title="Please enter your code here" placeholder='Enter Code' onChange={onHandleChange}
                                />
                            </div>
                            <button className="login-btn" onClick={handleSubmit}>Verify</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AdminVerification;