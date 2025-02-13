import React, { cloneElement } from "react";
import './morebike.css'
import ronin from '../pages/otherimg/tvs ronin 1.png'
import mt15 from '../pages/otherimg/yamaha mt 15 v2.jpg'
import hunter from '../pages/otherimg/Hunter 350.jpg'
import meteor from '../pages/otherimg/Royal Enfield Super Meteor 650.jpg'
import jawa42 from '../pages/otherimg/Jawa 42.jpg'
import r15 from '../pages/otherimg/yamaha r15 v4.jpg'
import harley from '../pages/otherimg/The Harley-Davidson X440.jpg'
import interceptor from '../pages/otherimg/gt 650.jpg'
import dominor from '../pages/otherimg/Bajaj Dominar 400.jpg'
import kawasaki from '../pages/otherimg/Kawasaki Z900.jpg'
import bmw from '../pages/otherimg/BMW R1250GS 2.jpg'
import tiger from '../pages/otherimg/Triumph Tiger Explorer 1200.jpg'

function Bikelist(){
    return(
        <>
        <h1 className="motbike" >MOTORBIKES</h1>
    <div className="container" id="bikes" style={{border:"0px solid", marginTop:"150px", marginBottom:"-450px"}}>
        <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="ronin" style={{alignItems:"center",border:"0px solid"}}>
            <h1 >TVS Ronin</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={ronin} style={{width:"100%", mixBlendMode:"multiply"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   225.9 CC<br/>
                            Mileage -ARAI           :   42 kmpl<br/>
                            ABS Channel             :   Single Channel ABS<br/>
                            Transmission            :   5 Speed Manual<br/>
                            Kerb Weight             :   159 Kg<br/>
                            Fuel Tank Capacity      :   14 litres<br/>
                            Seat Height             :   795 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377; <del style={{color:"grey"}}> 1,60,000</del> 1,49,000 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="mt15" style={{alignItems:"center",border:"0px solid"}}>
                    <h1 >Yamaha MT 15 V2</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={mt15} style={{width:"75%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   155 CC<br/>
                            Mileage -ARAI           :   48 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   141 Kg<br/>
                            Fuel Tank Capacity      :   10 litres<br/>
                            Seat Height             :   810 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 1,49,000</del> 1,68,700 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>

                </div>


        <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="hunter" style={{alignItems:"center",border:"0px solid"}}>
            <h1>RE Hunter 350</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={hunter} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   349.34 CC<br/>
                            Mileage -ARAI           :   36 kmpl<br/>
                            ABS Channel             :   Single Channel ABS<br/>
                            Transmission            :   5 Speed Manual<br/>
                            Kerb Weight             :   177 Kg<br/>
                            Fuel Tank Capacity      :   13 litres<br/>
                            Seat Height             :   800 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377;<del style={{color:"grey"}}> 1,55,000</del> 1,49,900 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="meter650" style={{alignItems:"center",border:"0px solid"}}>
                    <h1>RE Meteor Super 650</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={meteor} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   648 CC<br/>
                            Mileage -ARAI           :   23.7 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   241 Kg<br/>
                            Fuel Tank Capacity      :   15.7 litres<br/>
                            Seat Height             :   740 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 3,92,540</del> 3,65,000 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>
                
                </div>

        <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="r15" style={{alignItems:"center",border:"0px solid"}}>
            <h1>yamaha r15 v4</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={r15} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   155 CC<br/>
                            Mileage -ARAI           :   51.4 kmpl<br/>
                            ABS Channel             :   Single Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   141 Kg<br/>
                            Fuel Tank Capacity      :   11 litres<br/>
                            Seat Height             :   815 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377;<del style={{color:"grey"}}> 2,05,150</del> 1,82,856 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="jawa42" style={{alignItems:"center",border:"0px solid"}}>
                    <h1>Jawa 42 Bobber</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={jawa42} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   334 CC<br/>
                            Mileage -ARAI           :   30 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Fuel Tank Capacity      :   14 litres<br/>
                            Seat Height             :   740 mm<br/>
                            Max Power               :   241 Kg<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 2,54,000</del> 2,27,650 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>
                
                </div>

        <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="harley" style={{alignItems:"center",border:"0px solid"}}>
            <h1>Harley - davison X440</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={harley} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   440 CC<br/>
                            Mileage -ARAI           :   35 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   190.5 Kg<br/>
                            Fuel Tank Capacity      :   13.5 litres<br/>
                            Seat Height             :   805 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377;<del style={{color:"grey"}}> 2,60,000</del> 2,39,900 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="interceptor" style={{alignItems:"center",border:"0px solid"}}>
                    <h1>Interceptor 650</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={interceptor} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   648 CC<br/>
                            Mileage -ARAI           :   25 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   211 Kg<br/>
                            Fuel Tank Capacity      :   12.5 litres<br/>
                            Seat Height             :   804 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 2,45,000</del> 2,27,650 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>
                
                </div>
                <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="dominor" style={{alignItems:"center",border:"0px solid"}}>
            <h1>Bajaj Dominor 400</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={dominor} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   373.3 CC<br/>
                            Mileage -ARAI           :   30 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   193 Kg<br/>
                            Fuel Tank Capacity      :   13 litres<br/>
                            Seat Height             :   800 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377;<del style={{color:"grey"}}> 2,50,300</del> 2,24,934 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="kawasaki" style={{alignItems:"center",border:"0px solid"}}>
                    <h1>Kawasaki z900</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={kawasaki} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   948 CC<br/>
                            Mileage -ARAI           :   15 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   212 Kg<br/>
                            Fuel Tank Capacity      :   17 litres<br/>
                            Seat Height             :   820 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 12,05,000</del> 11,67,160 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>
                
                </div>

                <div className="row " id="duobike" style={{border:"0px solid blue"}}>
            <div className="col-6" id="bmw" style={{alignItems:"center",border:"0px solid"}}>
            <h1>BMW R 1250GS</h1>
                <div className="row" id="left">
                    
                    <div className="col-6">
                        <img className="photo" src={bmw} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   1,254 CC<br/>
                            Mileage -ARAI           :   21 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   249 Kg<br/>
                            Fuel Tank Capacity      :   20 litres<br/>
                            Seat Height             :   850 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4> &#8377;<del style={{color:"grey"}}> 25,86,300</del> 25,75,420 <small style={{color:"red"}}>Check On Road Price</small> </h4> 
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                    </div>
                    </div>

    <div className="col-6" id="triumph" style={{alignItems:"center",border:"0px solid"}}>
                    <h1>Triumph Tiger 1200</h1>
                <div className="row" id="left">
                    <div className="col-6">
                        <img className="photo" src={tiger} style={{width:"100%"}}/>
                    </div>
                    <div className="col-6"> 
                        <p className="maintopic" style={{lineHeight:"45px", marginRight:"-120px", textAlign:"left"}}>
                            Engine Capacity         :   1,160 CC<br/>
                            Mileage -ARAI           :   18 kmpl<br/>
                            ABS Channel             :   Dual Channel ABS<br/>
                            Transmission            :   6 Speed Manual<br/>
                            Kerb Weight             :   245 Kg<br/>
                            Fuel Tank Capacity      :   20 litres<br/>
                            Seat Height             :   850 mm<br/>
                        </p>
                    </div>
                    </div>
                    <div className="price" style={{margin:"10px"}}>
                    <span style={{color:"gray"}}><small>Avg Showroom Price</small></span> <br/>
                    <h4 > &#8377;<del style={{color:"grey"}}> 24,56,000</del> 24,31,500 <small style={{color:"red"}}>Check On Road Price</small></h4>  
                    <button type="button" className="emi btn btn-outline-primary" style={{marginBottom:"20px"}}><a href="emioffer">Check EMI Offers</a></button>
                </div>
                </div>
                
                </div>
                
                </div>
    </>
);
}
export default Bikelist;