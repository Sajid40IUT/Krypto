import React, { useState } from "react";
import "./Register.css";
import Helmet from 'react-helmet';
import cryptocurrency from '../../images/cryptocurrency.png';
import 'tachyons';
import Tilt from 'react-parallax-tilt';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

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
        <div className="regbackground">
        <div className="regshape"></div>
        <div className="regshape"></div>
        </div>
        <div className="regauth-form-container">
            <h2>Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="reglabel" htmlFor="name">Full Name</label>
            <input className="reginput" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
            <label className="reglabel" htmlFor="email">Email</label>
            <input className="reginput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="reglabel" htmlFor="password">Password</label>
            <input className="reginput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="regbtn1" type="submit">Register</button>
            <button className="reglink-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </form>
        
    </div>
    </div>
    )
}

export default Register;