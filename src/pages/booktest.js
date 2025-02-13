import React, { useState } from "react";
import './booktest.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Testride(){
    const[values,setValues]=useState({
        name:'',
        age:'',
        mobile:'',
        email:'',
        Re:'',
        Triumph:'',
        Honda:''
      })
      const navigate=useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/Customer',values)
    .then(response=>{
      console.log(response);
      navigate('/')
    })
    .catch(err=>console.log(err))
      })
    const Success=(()=>{
        alert("Your Booking is Completed")
    })
    return(
        <>
        <div>
            <form onSubmit={handleSubmit} className="form4">
                <h1 className="booking4">BOOK TEST RIDE</h1>
                <input onChange={e=>setValues({...values,name:e.target.value})} className="name" name="name"  placeholder="YOUR NAME"  required/>
                <input onChange={e=>setValues({...values,age:e.target.value})} type="number" className="age" name="age" placeholder=" YOUR AGE"  required/>
                <input onChange={e=>setValues({...values,mobile:e.target.value})} className="number" name="phone" placeholder="+91- PHONE NUMBER"  required/>
                <input onChange={e=>setValues({...values,email:e.target.value})} type="email" className="email" name="mail" placeholder=" EMAIL"  required/>
                <input  type="date" id="date" /><br/>
                <div className="radio" >
                <input onChange={e=>setValues({...values,Re:e.target.value})} type="radio" /><span id="bikeradio"> R E CLASSIC 350 </span> 
                <input onChange={e=>setValues({...values,Triumph:e.target.value})} type="radio" /><span id="bikeradio"> TRIUMPH SILVER  </span>
                <input onChange={e=>setValues({...values,Honda:e.target.value})} type="radio" /><span id="bikeradio"> HONDA CRAFTED VERSION </span>
                </div>
                <button onClick={Success} type="submit" className="button btn btn-outline-danger"><a href="/" >CONFIRM</a></button>
            </form>
        </div>
        </>
    );
}
export default Testride;