import React, { useState } from "react";
import './log1.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Log1(){
    const[values,setValues]=useState({
        fullname:'',
        email:'',
        password:''
      })
      const navigate=useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/user',values)
    .then(response=>{
      console.log(response);
      navigate('/bikesale')
    })
    .catch(err=>console.log(err))
      })
    return(
        <div className="logform1" >
            <form className="form" onSubmit={handleSubmit} >
                <p className="logtitle" style={{marginTop:"30px"}}>User Login</p>
                <h5><small style={{color:"white", fontFamily:"sans-serif",fontWeight:"bold"}}>Please Enter Your Credentials</small></h5>
                <input onChange={e=>setValues({...values,fullname:e.target.value})} className="fullname" name="fullname" id="text" placeholder="FULL NAME" required/> 
                <input onChange={e=>setValues({...values,email:e.target.value})} type="email" className="email" name="mail" id="text" placeholder=" EMAIL " required/> 
                <input onChange={e=>setValues({...values,password:e.target.value})} type="password" className="pass" name="pass" id="text" placeholder="ENTER PASSWORD" required/> <br/>
                <button onClick={handleSubmit} type="submit" className="logone" style={{fontWeight:"bold"}}><a href="bikesale" style={{textDecorationLine:"none", color:"white"}}>L O G I N</a></button> <br/>
                <div className="box" style={{marginTop:"20px"}}>
                <input type="checkbox" id="checkbox"/><span style={{fontFamily:"serif",fontSize:"20px"}}> Remember Me</span> <br/><br/>
                </div>
                <p className="reg"><a href="newpass" id="fpass"> Forget Password</a> <a href="reg" id="new"> New User </a></p>
                
                </form>            
        </div>
    );
    
}
export default Log1;