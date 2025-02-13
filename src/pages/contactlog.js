import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'


function Contactlog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/Messages')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <div className="data" >
            <h1>CONTACT LOG</h1>
            <table className="usertable">
                <thead>
                    
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>SUBJECT</th>
                        <th>MESSAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((b)=>{
                            return<tr key={b}>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.email}</td>
                                <td>{b.mobile}</td>
                                <td>{b.subject}</td>
                                <td>{b.message}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}


export default Contactlog;