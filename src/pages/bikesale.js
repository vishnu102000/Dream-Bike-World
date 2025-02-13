import React from "react";
import './bikesale.css'
import brand1 from '../pages/otherimg/Bike logo/Royal Enfield.png'
import brand2 from '../pages/otherimg/Bike logo/triumph.png'
import brand3 from '../pages/otherimg/Bike logo/Honda.png'
import brand4 from '../pages/otherimg/Bike logo/jawa.png'
import brand5 from '../pages/otherimg/Bike logo/Bajaj.png'
import brand6 from '../pages/otherimg/Bike logo/Yamaha.png'
import brand7 from '../pages/otherimg/Bike logo/Harley Davidson.png'
import brand8 from '../pages/otherimg/Bike logo/BMW.png'
import brand9 from '../pages/logo/ninja logo.png'
import images1 from '../pages/img/wp10529001-re-classic-350-2022-model-wallpapers.jpg'
import images2 from '../pages/img/drew-beamer-yM4tDP4_fC0-unsplash.jpg'
import images3 from '../pages/img/volkan-olmez-SvMlXH_eW6o-unsplash.jpg'
import images4 from '../pages/img/r15.jpg'
import images5 from '../pages/img/mt15.jpg'
import images6 from '../pages/img/meteor65.jpg'
import { FaChevronCircleDown } from "react-icons/fa";


function Bikesale(){
    return(
        <>
        <div className="container" id="contlayer">
        <h2><b style={{color:"blue"}}>Two Wheels</b> , <b style={{color:"red"}}>One Love</b></h2>
        <div class="card-group" id="sales">
          <div class="card" id="fronts" >
            <img id="frontimg"  src={images1} className="card-img-top" alt="..."  />
            <div class="card-body" >
              <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>R E CLASSIC 350</h5>
              <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none", color:"white"}}> Book Test Ride</a></button>
            </div>
          </div>
        <div class="card" id="fronts" >
          <img id="frontimg" src={images2} className="card-img-top2"  alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>TRIUMPH SILVER</h5>
              <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none", color:"white"}}>Book Test Ride</a></button>
            </div>
        </div>
        <div class="card" id="fronts" >
          <img id="frontimg" src={images3} className="card-img-top"  alt="..." />
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>HONDA CRAFTED VERSION</h5>
            <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none",color:"white"}}>Book Test Ride</a></button>
          </div>
        </div>
      </div>

      <div class="card-group" id="sales" style={{marginTop:"0px"}}>
        <div class="card" id="fronts" >
          <img id="frontimg"  src={images4} className="card-img-top" alt="..."  />
          <div class="card-body" >
            <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>YAMAHA R15</h5>
            <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none", color:"white"}}> Book Test Ride</a></button>
          </div>
        </div>
  
        <div class="card" id="fronts" >
          <img id="frontimg" src={images5} className="card-img-top"  alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>YAHAMA MT15</h5>
              <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none",color:"white"}}>Book Test Ride</a></button>
            </div>
        </div>

        <div class="card" id="fronts" >
          <img id="frontimg" src={images6} className="card-img-top"  alt="..." />
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>R E METEOR 350</h5>
            <button  className="book btn btn-outline-primary"><a href="ride" style={{textDecorationLine:"none",color:"white"}}>Book Test Ride</a></button>
          </div>
        </div>
  
      </div>
      </div>

      <div className="viewmore" >
        <button type="button" className="view btn btn-outline-light" id="" style={{marginBottom:"20px"}}><a href="bmore">View More <FaChevronCircleDown /></a></button>
      </div>
      
      <div className="container" id="contlayer1" style={{marginTop:"150px", marginBottom:"-550px"}}>
        <div className="mbrand"> 
          <h1 id="brands">Motorbike Brands</h1>
        </div> 
        <div class="card-group" >
          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand1} alt="ROYAL ENFIELD"/></a>
            </div>
          </div>
  

          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand2} alt="TRIUMPH" /></a>
            </div>
          </div>

          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand3} alt="HONDA" /></a>
            </div>
          </div>
        </div>

        <div class="card-group" >
          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand4} alt="JAWA"/></a>
            </div>
          </div>
  
          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand5} alt="BAJAJ" /></a>
            </div>
          </div>

          <div class="card" >
              <div class="card-body" >
              <a href="bmore"><img src={brand6} alt="YAMAHA" /></a>
            </div>
          </div>
        </div>

        <div class="card-group" style={{marginTop:"-50px"}}>
          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand7} alt="HARLEY DAVIDSON"/></a>
            </div>
          </div>

          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand8} alt="BMW" /></a>
            </div>
          </div>

          <div class="card" >
            <div class="card-body" >
              <a href="bmore"><img src={brand9} alt="NINJA" /></a>
            </div>
          </div>
        </div>
      </div>

       </>
    );
}
export default Bikesale;