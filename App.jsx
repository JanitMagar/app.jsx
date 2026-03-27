import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const mystyle = {
    alignItems: "center",
    backgroundColor: "#edfaef",
    padding: "100px",
    fontFamily: "Arial",
    color: "#003008",
    marginRight: "500px",
  };
  return (
    <div style={mystyle}>
      <img src="https://heraldcollege.edu.np/our-courses"/>
      <h1>Join Us</h1>
      <p>Create your account to get started</p>
    </div>
  )
}
function Login(){
  const mystyle = {
    color: "black",
    backgroundColor: "#ffffff",
    fontFamily: "Arial",
    marginLeft: "800px",
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
  };
  return (
  <div style={mystyle}>
  <h1>Create Account</h1>
  <h3>Enter your details below</h3>
  First Name: <br />
  <input type="text" name="name" id="name" placeholder='Joe'/><br />
  Last Name: <br />
  <input type="text" name="lastname" id="lastname" placeholder='Doe'/><br />
  Email Address: <br /> 
  <input type="email" name="email" id="email" /> <br />
  Password: <br />
  <input type="password" name="password" id="password" /><br/>
  <button onClick={() => alert("Sign Up clicked!")}>Sign Up</button>
  <p>Already have an account? <a href="/login">Login</a></p>
  </div>
  )
}

function App() {
  return (
    <div>
      <Logo />
      <Login />
    </div>
  )
}

export default App
