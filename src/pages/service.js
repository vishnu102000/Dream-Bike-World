import React from "react";
import './service.css'

function Service(){
    return(
        <>
        <div>
            <h1 className="sertitle" >Our Services</h1>

        <div className="card-group" id="work" style={{maxWidth:"1400px", margin:"auto"}}>
            <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                <div className="card-body" id="layer1" style={{margin:"20px"}} >
                    <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Bike repair And <br/> Maintanence Service</h5>
                    <hr/>
                    <p class="card-text" >The core service of a bike service centre 
                    would be to provide repair and maintenance services for bicycles 
                    of all kinds. This could include everything from basic tune-ups 
                    to more advanced repairs such as brake adjustments, wheel truing, 
                    and drivetrain overhauls.</p>
                </div>
            </div>

             <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                <div className="card-body" id="layer2" style={{margin:"20px"}}>
                    <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Bike Fitting And <br/> Customization</h5>
                    <hr/>
                    <p className="card-text">Another popular service that a bike service 
                    centre could offer is bike fitting and customization. This could 
                    include adjusting the bike to fit the rider's body and 
                    preferences, installing new components such as handlebars, saddles, 
                    and pedals, and even building custom bikes from scratch.</p>
                </div>
            </div>

            <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                    <div className="card-body" id="layer3" style={{margin:"20px"}}>
                        <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Rental <br/> Servicce</h5>
                        <hr/>
                        <p className="card-text">Many people are interested in trying out 
                        different types of bikes before committing to a purchase. 
                        Offering rental services for road bikes, mountain bikes, 
                        and other types of bicycles could be a lucrative business 
                        idea for a bike service centre.</p>
                    </div>
            </div>

            <div className="card-group" id="work" style={{maxWidth:"1400px", margin:"auto", marginTop:"200px", marginBottom:"-400px"}}>
            <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                    <div className="card-body" id="layer4" style={{margin:"20px"}}>
                        <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Bike Accessories And <br/> Parts</h5>
                        <hr/>
                        <p className="card-text"> A bike service centre could also sell a range
                         of bike accessories and parts such as helmets, lights, locks, 
                         and water bottles. This could be a good way to supplement income 
                         from repair services.</p>
                    </div>
            </div>

            <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                    <div className="card-body" id="layer5" style={{margin:"20px"}}>
                        <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Mobile Bike <br/> Service</h5>
                        <hr/>
                        <p className="card-text">In addition to a brick-and-mortar location, 
                        a bike service centre could also offer mobile repair services. 
                        This would involve traveling to the customer's location to provide 
                        repair and maintenance services.</p>
                    </div>
            </div>

            <div className="card" id="ideas" style={{marginLeft:"40px",marginRight:"40px"}}>
                    <div className="card-body" id="layer6" style={{margin:"20px"}}>
                        <h5 className="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Bike Tours And <br/> Events</h5>
                        <hr/>
                        <p className="card-text">Organizing bike tours and events such as charity 
                        rides, group rides, and races could be another way to attract customers 
                        and build a community around the bike service centre.</p>
                    </div>
            </div>
            </div>
        </div>
     </div>

        </>
    );
}
export default Service;