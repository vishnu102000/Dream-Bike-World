import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'


function Reglog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/register')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <div className="data">
                <h1 style={{}}>REGISTER LOG</h1>
            <table className="usertable" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>MOBILE</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>NEW PASSWORD</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((b)=>{
                            return<tr key={b}>
                                <td>{b.id}</td>
                                <td>{b.fname}</td>
                                <td>{b.lname}</td>
                                <td>{b.mobile}</td>
                                <td>{b.email}</td>
                                <td>{b.password}</td>
                                <td>{b.newpass}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}


export default Reglog;