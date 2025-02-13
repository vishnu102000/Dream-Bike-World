import React, { useState } from "react";
import './contact.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contactus(){
    const[values,setValues]=useState({
        name:'',
        email:'',
        mobile:'',
        Subject:'',
        Message:''
      })
      const navigate=useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/Messages',values)
    .then(response=>{
      console.log(response);
      navigate('/cont')
    })
    .catch(err=>console.log(err))
      })
    const Success=(()=>{
        alert("Your Request is Successfully Received...")
    })
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="forms" >
            <h1> for Contact</h1>
            <div className="firstline row">
            <div className="lhand col-6">
            <input onChange={e=>setValues({...values,name:e.target.value})} type="text" className="name" name="fullname" placeholder="Your name" />
            </div>
            <div className="rhand col-6">
            <input onChange={e=>setValues({...values,email:e.target.value})} type="email" className="email" name="mail" placeholder="email-id" />
            </div>
            </div>
            <div className="secondline row">
            <div className="lhand col-6">
            <input onChange={e=>setValues({...values,mobile:e.target.value})} type="text" className="phone number" name="mobile" placeholder="Your phone number" />
            </div>
            <div className="rhand col-6">
            <input onChange={e=>setValues({...values,Subject:e.target.value})} type="text" className="subject" name="subject" placeholder="Subject" />
            </div>
            </div>
            <div className="mess" style={{marginTop:"40px"}}>
                <input onChange={e=>setValues({...values,Message:e.target.value})} type="text" className="sentence" name="sentence" placeholder="Write here" />
            </div>
            <button onClick={Success} type="submit" className="submit btn"><a href="#" style={{cursor:"pointer"}}>Submit</a></button>
        </div>
        </form>

        <div className="container" id="address" style={{border:"0px solid",maxWidth:"1400px",marginTop:"500px", marginBottom:"-650px"}}>
            <div className="row" id="maps">
                <div className="col-6" id="map">
                    <h3 className="map" style={{fontFamily:"fantasy"}}>MAP OUR OFFICE</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13603.505529697804!2d76.20662060801938!3d10.521069511511774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707901925533!5m2!1sen!2sin" 
                    width="400" height="350" style={{border:"3px solid blue", marginBottom:"30px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="col-6" id="addr">
                    <div className="left">
                    <p className="office">Branch Office :-</p>
                    <span className="addr"> StreetRider World <br/>Shop No: 420, Marar Road, Punkunnam <br/> Thrissur District -680 602</span>
                    </div>
                    <br/>
                    <div className="right">
                    <p className="office"> Head Office :-</p>
                    <span className="addr">46 Gary Cliffs, Saundershaven <br/> Hughesport ,<br/>England , <br/> Zip code :SW15 4AF</span>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Contactus;