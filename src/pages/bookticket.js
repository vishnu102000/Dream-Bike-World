import React, { useState } from "react";
import './bookticket.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tickets(){
    const[values,setValues]=useState({
        name:'',
        age:'',
        mobile:'',
        email:'',
        BikeShow:'',
        Stuntshow:''
      })
      const navigate= useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/visitors',values)
    .then(response=>{
      console.log(response);
      navigate('/')
    })
    .catch(err=>console.log(err))
      })
    const Success=(()=>{
        alert("Booking is Completed...")
    })
    return(
        <>
        <div>
            <form className="form5" onSubmit={handleSubmit}>
            <h1 className="booking5" style={{fontWeight:"bold", margin:"40px",letterSpacing:"10px"}}>BOOK - TICKETS</h1>
                <input onChange={e=>setValues({...values,name:e.target.value})} className="name" name="name"  placeholder="YOUR NAME" required/>
                <input onChange={e=>setValues({...values,age:e.target.value})} type="number" className="age" name="age" placeholder=" YOUR AGE"  required/>
                <input onChange={e=>setValues({...values,number:e.target.value})} className="number" name="phone" placeholder="+91- PHONE NUMBER"  required/>
                <input onChange={e=>setValues({...values,email:e.target.value})} type="email" className="email" name="mail" placeholder=" EMAIL"  required/>
                <div className="radio"  required >
                <input onChange={e=>setValues({...values,Bikeshow:e.target.value})} className="check" type="checkbox" style={{width:"40px",height:"25px", margin:"auto"}} />
                <span id="showradio"> Bike Show Fest </span>
                <input onChange={e=>setValues({...values,Stuntshow:e.target.value})} className="check" type="checkbox" style={{width:"40px",height:"25px", margin:"10px"}} />
                <span id="showradio">Stunts & Track Events</span>
                </div>
                
                <button onClick={Success} type="submit" className="button btn btn-outline-primary">CONFIRM</button>
            </form>
        </div>
        </>
    );
}
export default Tickets;