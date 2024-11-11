import './login.css';
import logo from "../Images/logoo.png";
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  useNavigate } from 'react-router';

export default function Login() {
    const [values, setValues] = useState({
        Email: '',
        Password: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_BASE_URL+'/login', {email: values.Email[0], password: values.Password[0]})
            .then(res => {
                console.log("Login Successful!", res);
                // alert("Done");
                navigate('/');
            })
            .catch(err => {
                console.log("Login failed", err);
                alert("Login Failed");
            });
    }
    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }

    return (
        <div>

            {/* <div className='mainBg' style={{backgroundImage: `url(${bg})`} } > */}
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                <img src={logo} alt='logo'/>
                    <div className='LoginContainer LoginBox'>
                        <form >
                           
                            <h4>Welcome! Please login to continue</h4>

                            <div className="input">
                                <input type="text" name="Email" id="Email" required title="Please enter your email here" placeholder='Enter Email'
                                onChange={onHandleChange}/>
                                
                            </div>

                            <div className="input">
                                <input type="password" name="Password" id="Password" required title="Please enter your Password here" placeholder='Enter Password' onChange={onHandleChange}/>
                                
                            </div>

                            {/* <input type="submit" value="Login" className="login-btn" /> */}
                            <button className="login-btn" onClick={handleSubmit}>Login</button>
                            <p>Not a member? <Link to="/register">SignUp</Link></p>
                           
                        </form>
                    </div>
                </div>
            </div>
         
        </div>
    );
}











