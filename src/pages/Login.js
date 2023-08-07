import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
  
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate  = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate)
    console.log(email,password)
  }
  const handleGoogleLogin = () => {
    signUpProvider(navigate)
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">
          Login
        </h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email adress.." onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          {/* <input type="button" value="Register" className="btn btn-primary form-control" onClick={handleSubmit}/> */}
          <input type="submit" value="Login" className="btn btn-primary form-control" />
          <button className="btn btn-primary form-control" onClick={handleGoogleLogin}>Continue with Google</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
