import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'


function Userlog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/user')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <div className="data" >
            <h1>USER LOG</h1>
            <table className="usertable">
                <thead>
                    
                    <tr>
                        <th>ID</th>
                        <th>FULL NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((b)=>{
                            return<tr key={b}>
                                <td>{b.id}</td>
                                <td>{b.fullname}</td>
                                <td>{b.email}</td>
                                <td>{b.password}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}


export default Userlog;