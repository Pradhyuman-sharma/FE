import React, { useState } from "react";
import { registerUser } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp= ()=> {
  const [uniqueName,setUniqueName]= useState('');
  const [password,setPassword]= useState('');
  const navigate = useNavigate();

  const registerApiCall = ()=>{
    const data = {
      uniqueName:uniqueName,
      password:password
    }
    registerUser(data).then((res)=>{
      if(res?.success){
        toast.success(res?.message,{position:"top-center"});
        navigate("/sign-in")
      }else{
        toast.error(res?.message,{position:"top-center"});

      }
    })
  }

    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Unique Name</label>
          <input className="form-control" placeholder="Enter here" value={uniqueName} onChange={(e)=>{
            setUniqueName(e.target.value);
          }}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={(e)=>{
            e.preventDefault();
            if(uniqueName !=="" && password !== ""){
              registerApiCall();
            }else{
              toast.error("Feilds can't be empty",{position:"center"});

            }
          }}> 
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  
}

export default SignUp;
