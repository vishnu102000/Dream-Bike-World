import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'


function Ticketlog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/visitors')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <div className="data">
                <h1 style={{}}>TICKETS LOG</h1>
            <table className="usertable" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MOBILE</th>
                        <th>EMAIL</th>
                        <th>BIKE SHOW</th>
                        <th>STUNT SHOW</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((b)=>{
                            return<tr key={b}>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.age}</td>
                                <td>{b.mobile}</td>
                                <td>{b.email}</td>
                                <td>{b.Bikeshow}</td>
                                <td>{b.Stuntshow}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}


export default Ticketlog;