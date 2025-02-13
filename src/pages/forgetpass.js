import React, { useState } from "react";
import './forgetpass.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgetpass(){
    const msg=(()=>{
        alert("Changes Applied Successfully...")
    })
    const[values,setValues]=useState({
        email:'',
        currentpass:"",
        newpass:""
      })
      const navigate=useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/register',values)
    .then(response=>{
      console.log(response);
      navigate('/login')
    })
    .catch(err=>console.log(err))
      })
    return(
        <>
        <div className="newpass">
            <form onSubmit={handleSubmit} className="passform">
                <h2 className="text">ENTER PASSWORD</h2>
                <input onChange={e=>setValues({...values,email:e.target.value})} type="email" name="mail" id="mail" placeholder="Email ID"  required/>
                <input onChange={e=>setValues({...values,currentpass:e.target.value})} type="password" name="cpass" id="rpass" placeholder="Current Password"/>
                <input onChange={e=>setValues({...values,newpass:e.target.value})} type="password" name="npass" id="rpass" placeholder="New Password" required />
                <br/>
                <button onClick={msg} onSubmit={handleSubmit} className="donepass btn btn-outline-success" type="submit">Confirm Password</button>
            </form>
        </div>
        </>
    );
}
export default Forgetpass;