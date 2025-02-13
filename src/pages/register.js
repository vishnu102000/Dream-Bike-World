import React, { useState } from "react";
import './register.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";




function Register(){
    const[values,setValues]=useState({
        fname:'',
        lname:'',
        mobile:'',
        email:'',
        password:""
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
        <div className="regform">
        <form onSubmit={handleSubmit} className="form2" >
                <p className="regtitle" style={{marginTop:"30px"}}>CREATE ACCOUNT</p>
                
                <input onChange={e=>setValues({...values,fname:e.target.value})} className="fname" name="fname" id="fname" placeholder="FIRST NAME" required/> <br/>
                <input onChange={e=>setValues({...values,lname:e.target.value})} className="lname" name="lname" id="lname" placeholder="LAST NAME" required/> <br/>
                <input onChange={e=>setValues({...values,mobile:e.target.value})} className="number" name="mobile" id="mobile" placeholder="+91 - PHONE NUMBER"required/> <br/>
                <input onChange={e=>setValues({...values,email:e.target.value})} type='email' className="mail" name="mail" id="email" placeholder=" EMAIL "required/> <br/>
                <input  type="password" className="pass" name="pass" id="passkey" placeholder="CREATE PASSWORD" required/> <br/>
                <input onChange={e=>setValues({...values,password:e.target.value})} type="password" className="pass" name="pass" id="passkey" placeholder="RE- ENTER PASSWORD"required/> <br/>

                <button onSubmit={handleSubmit} type="submit" className="button" style={{fontWeight:"bold"}}>submit</button> <br/>
                <p  className="log"><a href="log" id="user"> Already a  User</a></p>
                


                </form>
        </div>
        </>
    );
}
export default Register;