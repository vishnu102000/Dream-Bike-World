import React, { useEffect, useState } from "react";
import axios from "axios";
import './logs.css'

function QAlog(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/questions')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <div className="data" >
            <h1>QUESTIONS</h1>
            <table className="usertable">
                <thead>
                    
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>QUESTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((b)=>{
                            return<tr key={b}>
                                <td>{b.id}</td>
                                <td>{b.Name}</td>
                                <td>{b.Question}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}


export default QAlog;