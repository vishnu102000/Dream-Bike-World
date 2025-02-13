import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'



function Testlog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/Customer')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <div className="data" >
            <h1>RIDE LOG</h1>
            <table className="usertable">
                <thead>
                    
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MOBILE</th>
                        <th>EMAIL</th>
                        <th>RE</th>
                        <th>TRIUMPH</th>
                        <th>HONDA</th>
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
                                <td>{b.Re}</td>
                                <td>{b.Triumph}</td>
                                <td>{b.Honda}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}


export default Testlog;