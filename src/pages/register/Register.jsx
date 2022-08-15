import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerform">
            <label>Email</label>
            <input class="registerInput"type="text" placeholder="Enter your email"/>
            <label>Username</label>
            <input class="registerInput"type="text" placeholder="Enter your username"/>
            <label>Password</label>
            <input class="registerInput"type="password" placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link  className="link" to="/login"> LOGIN</Link>
        </button>
    </div>
  )
}

export default Register
