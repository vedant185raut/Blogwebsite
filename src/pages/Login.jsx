import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../context/authContext';
const Login = () => {
  const [inputs,setInputs]= useState({
    username:"",
    password:""
  });
  const[err,setError]= useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  
  
  const handleChange = e =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async( e) =>{
    e.preventDefault();
    try{
      await login(inputs)
      navigate("/");
    }catch(err){
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className='userlog'>
        <h1>Login</h1>
        <form action="">
          <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
          <input required type="password" placeholder='password'name='password' onChange={handleChange}/>
          <button onClick={handleSubmit} >Login</button>
          {err && <p>{err}</p>}
          <span>Don't have an account? <Link to="/register"> Register Now</Link></span>
        </form>
      </div>
    </>
  )
}

export default Login;