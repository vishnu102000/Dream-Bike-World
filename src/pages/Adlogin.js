import React, { useState } from "react";
import './adlogin.css';
import { useNavigate } from "react-router-dom";

    const Adminlogin =({onLogin, isAuthenticated})=>{
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const navi = useNavigate();
    const handleLogin=()=>{
      if (username==="ram@gmail.com" && password==="123"){
        onLogin();
      }
      
      else{
        alert("Invalid credentials... Please Try Again");
      }
    };
    
    if (isAuthenticated){
      return navi('/dashboard')
    }
    return(
        <>
        <form className="form6" style={{marginTop:"100px", marginBottom:"-550px"}}>
            <h1 style={{marginTop:"50px"}}>Admin Login</h1>
            <p>Only Authority Person</p>

            <div className="row">

                <div className="col-4">
                    <label className="user" id="username">Username</label>
                </div>
                <div className="col-8">
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="name" placeholder="Email"/> <br/>
                </div>
                <div className="col-4">
                    <label className="password" id="password">Password</label>
                </div>
                <div className="col-8">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="password" placeholder="Password"/> <br/>
                </div>
            </div>
            <button type="submit" onClick={handleLogin} className="button btn btn-outline-success">Proceed</button>
        </form>
        </>
    );
}
export default Adminlogin;