import React, { useEffect, useState } from "react";
import axios from "axios";
import './dashboard.css'
import user from './images/user login.jpg'
import register from './images/computer log.jpg'
import tickpass from './images/ticket.jpg'
import ride from './images/bike.jpg'
import contact from './images/contact log.jpg'
import message from './images/message.jpg'

function Dashboard(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/user')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])
    

    return(
    <>
    <div className="container" id="logs" style={{border:"0px solid blue", marginTop:"100px"}}>
        <div className="row" id="row1" style={{marginTop:"100px"}}>
            <div className="col-3">
            <a href="userlog"><img src={user} alt="" style={{}}/></a>
            <p>Users log</p>
            </div>

        <div className="col-3">
             <a href="reglog"><img src={register} alt="" style={{}}/></a>
            <p>Register log</p>
            </div>
        

        <div className="col-3">
            <a href="testlog"><img src={ride} alt="" style={{}}/></a>
            <p>Testride Bookings</p>
            </div>
        </div>

        <div className="row" id="row2">
            <div className="col-4">   
            <a href="contactlog"><img src={contact} alt="" style={{}}/></a>
            <p>Contact log</p>
            </div>

            <div className="col-4">
            <a href="passlog"><img src={tickpass} alt="" style={{}}/></a>
            <p>Ticket sale</p>
            </div>

            <div className="col-4">
            <a href="quelog"><img src={message} alt="" style={{}}/></a>
            <p>message log</p>
            </div>
        </div>

    </div>
    </>
    );
}
export default Dashboard;