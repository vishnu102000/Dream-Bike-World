import React from "react"
import './about.css'
import image from '../pages/otherimg/KAWASAKI.jpg'
import logo1 from '../pages/logo/royal enfield logo.png'
import logo2 from '../pages/logo/yamaha logo.png'
import logo3 from '../pages/logo/triumph logo.png'
import logo4 from '../pages/logo/ktm logo.png'
import logo5 from '../pages/logo/Kawasaki.png'
import logo6 from '../pages/logo/BMW.png'

function About(){
    return(
        <>
        <h2 className="about" style={{fontWeight:"bold", marginTop:"150px"}}>About</h2>
        <div className="Container" id="firstcont" style={{maxWidth:"1200px", margin:"auto", marginTop:"150px", marginBottom:"50px"}}>
            <div className="row" id="firstrow">
                <div className="col-6">
                    <img className="imag" src={image} style={{}}/>
                </div>
                <div className="col-6" id="par">
                    <p className="abouttext">People in the Motorbike Industry <b style={{color:"Gold"}}>Passionate Enthusiasts:</b> <br/>
                        Those involved in the motorbike industry are often passionate 
                        enthusiasts who have a deep love for motorcycles. 
                        This passion drives them to work in various roles, 
                        from engineers and designers to mechanics and salespeople.</p>
                </div>
            </div>
        </div>

        <div className="container-fluid" id="seccont" style={{maxWidth:"1500px", margin:"auto", marginTop:"150px", marginBottom:"50px", border:"1px solid white"}}>
            <div className="customer row" id="secondrow" style={{}}>
                <div className="col-4">
                    <h2>8+ Country</h2>
                </div>

                <div className="col-4">
                    <h2>14 Crore Customer</h2>
                </div>

                <div className="col-4">
                    <h2>World-Wide</h2>
                </div>
            </div>
        </div>

        <div className="container" id="partner">
            <h2 id="partnertext" >our partner</h2>
            <img src={logo1} style={{width:"150px"}}/>
            <img src={logo2} style={{width:"250px"}}/>
            <img src={logo3} style={{width:"250px"}}/>
            <img src={logo4} style={{width:"250px"}}/>
            <img src={logo5} style={{width:"250px"}}/>
            <img src={logo6} style={{width:"250px"}}/>
            
        </div>
        </>
        );

    
}
export default About;
