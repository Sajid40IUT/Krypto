import React, { useState } from "react";
import "./Login.css";
import Helmet from 'react-helmet';
import cryptocurrency from '../../images/cryptocurrency.png';
import Tilt from 'react-parallax-tilt';
import 'tachyons';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        props.onRouteChange('yes');
    }

    return (
        <div >
        <Helmet bodyAttributes={{style: 'background-color : #001529'}} />
        <Tilt tiltMaxAngleY={2} tiltMaxAngleX={5}>
                <div className='Tilt left br2 shadow-2 pa3 ma4 mt3' style={{ height: '8em', width: '8em'}}>
                    <img alt='logo' src={cryptocurrency}/>
                </div>
        </Tilt>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="btn1" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => {props.onFormSwitch('register');
        props.onState('yes')}}>
            Don't have an account? Register here.
            </button>
        </div>
        </div>
    )
}

export default Login; 