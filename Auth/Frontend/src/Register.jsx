import React, { useState } from "react";
import axios from 'axios';
console.log(axios);
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('student');
    const [registerStatus, setRegisterStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register",{
            email:email,
            pass:pass,
            name:name,
            userType:userType
        }).then((response)=>{
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("ACCOUNT Created SUCCESSFULLY");
            }
        })
        console.log(registerStatus);
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>    
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
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
