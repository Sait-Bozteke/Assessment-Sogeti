import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";


const Register = () => {
  const navigate  = useNavigate()
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`
    e.preventDefault();
    createUser(email,password,navigate,displayName)
    console.log(firstName,lastName,email,password)
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">
          Register
        </h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" id="first-name" className="form-control" placeholder="Enter your first name.." onChange={(e) => setFirstName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" id="last-name" className="form-control" placeholder="Enter your last name.." onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email adress.." onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          {/* <input type="button" value="Register" className="btn btn-primary form-control" onClick={handleSubmit}/> */}
          <input type="submit" value="Register" className="btn btn-primary form-control" />
        </form>
      </div>
    </div>
  )
};

export default Register;
