import React, { useState } from "react";
import './emioffer.css'
import offer from '../pages/otherimg/offers/no-cost-emi-payment.avif'
import fqa from '../pages/otherimg/offers/7879.jpg'
import { MdWarning } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Emioffer(){
    const[values,setValues]=useState({
        Name:'',
        Question:'',
        
      })
      const navigate= useNavigate();
      const handleSubmit=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/questions',values)
    .then(response=>{
      console.log(response);
      navigate('/emioffer')
    })
    .catch(err=>console.log(err))
      })
    const Success=(()=>{
        alert("Your Request is Successfully Received...")
    })
    return(
        <>
        <div className="emi-ad">
            <div className="emirow"></div>
        <h2 id="nocost">Take the first step <br/> towards your dreams <br/>with <b style={{color:"red",textShadow:"4px 4px black"}}>EMI</b>*. </h2>
        <img src={offer} alt=""/>
            <div className="row">
                <div className="col-3">
                    <p id="option"><b>0</b><br/> Down Payment</p>
                </div>

                <div className="col-3">
                    <p id="option"><b>0% </b><br/> processing fees</p>
                </div>

                <div className="col-3">
                    <p id="option"><b>1 </b>Year <br/> Pre-insurance</p>
                </div>
            </div>
        </div>

        <div className="container" id="emilayer2">
            <h2 id="title">How does the Process Works ??</h2>
            <p>What You pay = ((Final Price of the product) / (Tenure Chosen (no of Months)))</p> <br/>
            <p id="disclaimer" style={{border:"2px solid"}}><MdWarning style={{fontSize:"40px"}} /> <b> FOR EXAMPLE: </b>A product costs Rs. 1,59,000 net of all discounts 
            and the bank interest on a 3 month EMI for the same comes to Rs. 400.
                An instant discount of Rs. 300 will be given at the time of payment, so net value sent to your bank is Rs. 16,700.</p>
            <div className="process row">
            <p><b>WHAT IS EMI ? </b> <br/>
                        <small className="emi-stands">EMI stands for equated monthly installment, which is the monthly amount a borrower must pay their lender to repay a loan or debt, 
                            such as a home loan, car loan, or personal loan, within a stipulated time frame.1 The EMI is dependent on multiple factors, such as 
                            the principal borrowed, the rate of interest, the tenure of the loan, and the monthly/annual resting period. </small><br/>
                            </p>

                <div className="steps col-6">
                    
                    
                    <p id="steps">
                        <h3 className="maintitle">ADVANTAGES OF EMI </h3> <br/>
                        <ul>
                        <li><b className="texttitle">freedom to buy:</b>
                            <p><small className="text">  an emi option allows you to buy expensive items right off the shelf, even though 
                            you might not have the funds to pay for it at that very moment. for instance, 
                            if you're a salaried person, buying your dream home or car is easier with an emi 
                            option with your loan, as compared to a lump sum repayment.
                            </small> </p></li><br/>
                            
                            
                        <li><b className="texttitle">affordability:</b>
                            <p><small className="text"> 
                            be it expensive household items, a vehicle, gifts or even a house, emis 
                            can help you buy anything and everything. your lender divides the total 
                            amount in monthly instalments, and you pay it off in manageable chunks.
                            </small> </p></li>  <br/>  
                            
                            <li><b className="texttitle">easy on the wallet:</b>
                            <p><small className="text"> 
                            since the monthly payment is already known and distributed over the loan 
                            tenure, the emi option will not burn a hole in your pocket, therefore 
                            allowing you to make other investments and spend elsewhere too. 
                            </small> </p></li> <br/>

                            <li><b className="texttitle">plan payments with emi calculators:</b>
                            <p><small className="text">  
                            emi calculators available online will allow you to calculate your 
                            monthly outflow depending on the principal amount, interest rate charged, 
                            and time horizon. planning for other expenses and investments out of your 
                            income can be done easily.
                            </small> </p></li> <br/>

                            <li><b className="texttitle">leverage flexible emi options:</b>
                            <p><small className="text">
                            several banks and financial institutions now offer flexible emi schemes. 
                            here, the lender allows you to decide on the amount per emi or the payment 
                            duration, depending on your financial standing and income.  
                            </small> </p></li> <br/>

                            <li><b className="texttitle">no mediators:</b>
                            <p><small className="text">  
                            the emi is directly paid to the lender, and there is no involvement 
                            of multiple parties handling your payments.
                            </small> </p></li> 
                        </ul>
                    </p>
                </div>
                
                <div className="col-6">
                    <div className="table1">
                    <table className="monthtable">
                        <tr>
                            <th>Months</th> 
                            <th>Amount</th>   
                        </tr>

                        <tr>
                            <td>1'st Month</td>
                            <td><b style={{color:"blue"}}>9,500/-</b><i>(Need to pay)</i></td>
                        </tr>

                        <tr>
                            <td>2'nd Month</td>
                            <td>9,500 + 3,500 = <b style={{color:"red"}}>12,500/-</b><br/><i>(Increase 3,500/-  When Skip to pay))</i></td>
                        </tr>

                        <tr>
                            <td>n'th Month</td>
                            <td><i>Final Remaining Payment Closes <br/>(Dates and Months change according to customers)</i></td>
                        </tr>
                        

                    </table>
                    </div>
                    <div className="drawbacks">
                            <p>
                                <ol>
                                    <h3>Drawbacks of EMI </h3>
                                    <li className="text1">
                                        If interest rates rise, the borrower's monthly payments will increase, making it difficult to afford their loan repayments.
                                    </li>
                                    <li className="text1">
                                        If the borrower misses a payment, they may be charged late fees, which could add to the cost of their loan. 
                                    </li>
                                    <li className="text1">
                                        The borrower may be unable to pay off their loan early without incurring a penalty.
                                    </li>
                                </ol>
                            </p>
                        </div>
                </div>
            </div>
        </div>

        <div className="container-fluid" id="emilayer3" >
            <img src={fqa}  alt=""/>
            
            <div className="question">
                <p>
                   
                    <div className="lborder" >
                    <ol>
                        <span style={{fontFamily:"cursive", fontWeight:"bold"}}>Suggesting Few Customer Interaction that Which we think may related to you</span>
                        <li className="qa"><h4><b style={{color:"red"}}>Q :- I am an existing customer; can I apply for another loan?</b></h4>
                        <span style={{color:"darkblue"}}>A :- Yes. However, please note that the approval of your loan is subject
                             to your credit score and fulfilment of eligibility criteria for 
                             the product.
                        </span></li>

                        <li className="qa"><h4><b style={{color:"red"}}>Q :- Do I have the option of prepaying my loan?</b></h4>
                        <span style={{color:"darkblue"}}>A :- Yes, this can be done as per the foreclosure terms mentioned 
                            in your loan agreement.
                        </span></li>

                        <li className="qa"><h4><b style={{color:"red"}}>Q :- To avail a two-wheeler loan do I have to visit ?</b></h4>
                        <span style={{color:"darkblue"}}>A :- You need to visit Two-Wheeler Dealership and ask for a credit representative, 
                            we will be happy to assist you with your loan requirement. You may also visit 
                            our website or social media pages and provide your contact details, post which 
                            our representative will get in touch with you shortly.
                        </span></li>

                        <li className="qa"><h4><b style={{color:"red"}}>Q :- What all are the charges applicable on two-wheeler loan?</b></h4>
                        <span style={{color:"darkblue"}}>A :- <answe></answe>To ensure a smooth experience, we charge a nominal processing/ document 
                            fee and applicable stamp duty. You can get detailed information from our 
                            representatives at a TVS Credit Two Wheeler Dealership.
                        </span></li>
                    </ol>
                    
                    <div  className="newmessage" id="newmess" >
                        <form onSubmit={handleSubmit}>
                            <label className="ask ">Question :-</label><br/>
                            <input onChange={e=>setValues({...values,Name:e.target.value})} type="text" id="name" name="person" placeholder="Your Name"/>
                            <input onChange={e=>setValues({...values,Question:e.target.value})} type="text" name="message" placeholder="Type your Question"/>
                            <button onSubmit={handleSubmit} type="submit" className="btn btn-outline-success"><a onClick={Success}>Send</a></button>
                        </form>
                    </div>
                    </div>
                    
                </p>
            </div>
        </div>
        </>
    );

}
export default Emioffer;
