import React, { useState } from "react";
import axios from 'axios';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [userType, setUserType] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {
            email: email,
            pass: pass,
            userType: userType
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
            }
        })

        console.log(loginStatus);
        console.log(email);
    }   

    
    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="radio"
                        id="student"
                        name="userType"
                        value="student"
                        checked={userType === 'student'}
                        onChange={() => setUserType('student')}
                    />
                    <label htmlFor="student">Student</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="teacher"
                        name="userType"
                        value="teacher"
                        checked={userType === 'teacher'}
                        onChange={() => setUserType('teacher')}
                    />
                    <label htmlFor="teacher">Teacher</label>
                </div>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}