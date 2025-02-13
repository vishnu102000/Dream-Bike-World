import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import images from '../pages/img/lino-C2SzUyg3PPQ-unsplash.jpg'
import images1 from '../pages/img/wp10529001-re-classic-350-2022-model-wallpapers.jpg'
import images2 from '../pages/img/drew-beamer-yM4tDP4_fC0-unsplash.jpg'
import images3 from '../pages/img/volkan-olmez-SvMlXH_eW6o-unsplash.jpg'
import images4 from '../pages/img/ambitious-studio-rick-barrett-eNhYc5e8A_g-unsplash.jpg'
import images5 from '../pages/img/ibrahim-mushan-sEIjI8ZJ4lY-unsplash.jpg'
import images6 from '../pages/img/mohiuddin-farooqui-NOH9pUOFNYU-unsplash.jpg'
import images7 from '../pages/img/gabriel-sanchez-jqlXLIj3aS8-unsplash.jpg'
import images8 from '../pages/img/duke.jpg'
import images9 from '../pages/img/indian-bikes-2022-wallpapers.jpg'
import images10 from '../pages/img/harley-davidson-eeTJKC_wz34-unsplash.jpg'
import actor1 from '../pages/otherimg/vin diesel 1.avif'
import actor2 from '../pages/otherimg/valentino rosie.jpg'
import actor3 from '../pages/otherimg/naga-catanaya.avif'
import video from '../pages/video/pexels-tom-fisk-12902841 (720p).mp4'
import video1 from '../pages/otherimg/Bike track stunts.mp4'
import { FaChevronCircleDown } from "react-icons/fa";




function Home(){
  const msg =(()=>{
    alert("Please Login")
  })
    return(
        <>
        <img src={images} style={{width:"100%"}}/>
        <div className="container-fluid" id="fluid">         
        <div className="title">
            
        <h1 id="fline" style={{fontWeight:"bolder"}}>Stop Dreaming</h1><h1 id="sline" style={{fontWeight:"bolder"}}>Start riding</h1>

        </div>
        
</div>
        <br/><br/><br/><br/>

            <div className="title">
                <h1 id="topic" style={{ marginBottom:"80px",backgroundAttachment:"fixed"}}>Currently on Sale</h1>
            </div>

  <div class="card-group" id="sale" style={{maxWidth:"1500px", margin:"auto"}}>
  <div class="card" id="front" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg"  src={images1} class="card-img-top" alt="..."  style={{height:"280px",borderRadius:"100px 0 0 0"}}/>
    <div class="card-body" >
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>R E Classic 350</h5>
      <p class="card-text">“Made Like A <br/> Gun”</p>
      <button onClick={msg} className="book btn btn-outline-danger"><a href="log1" style={{textDecorationLine:"none", color:"white"}}> Book Test Ride</a></button>
    </div>
  </div>
  <div class="card" id="front" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg" src={images2} class="card-img-top"  alt="..."/>
    <div class="card-body">
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Triumph Silver</h5>
      <p class="card-text">“For The Ride – <br/>Go Your Own Way.”</p>
      <button onClick={msg} className="book btn btn-outline-danger"><a href="log1" style={{textDecorationLine:"none", color:"white"}}>Book Test Ride</a></button>
    </div>
  </div>
  <div class="card" id="front" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg" src={images3} class="card-img-top"  alt="..."style={{borderRadius:"0 100px  0 0"}}/>
    <div class="card-body">
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Honda Crafted version</h5>
      <p class="card-text">"Your Highness Is <br/>Arriving Soon".</p>
      <button onClick={msg} className="book btn btn-outline-danger"><a href="log1" style={{textDecorationLine:"none",color:"white"}}>Book Test Ride</a></button>
    </div>
  </div>
  </div>
  
  <div className="viewmore" >
    <button type="button" className="view btn btn-outline-light" id="" style={{marginBottom:"20px"}}><a href="bmore">View More <FaChevronCircleDown /></a></button>
  </div>

  <div className="title">
                <h1 id="topic" style={{marginTop:"10%", marginBottom:"40px"}}>Upcominng Event</h1>
            </div>

        <div class="card-group" id="sale" style={{maxWidth:"1200px", margin:"auto", marginTop:"20px"}}>
  <div class="card" style={{marginLeft:"40px",marginRight:"40px"}}>
  <div  className="carousel slide" data-bs-ride="carousel" id="show" style={{maxWidth:"650px",margin:"auto"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#show" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#show" data-bs-slide-to="1"></button>
          
          
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images4} alt="BMW" className="d-block" style={{width: "100%",borderRadius:"100px 0 0 0"}}/>

          </div>

          <div className="carousel-item ">
            <img src={images5} alt="Stunt" className="d-block" style={{width: "100%",borderRadius:"100px 0 0 0"}}/>
          </div>

          
  </div>
            <div class="card-body">
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Bike Show Fest</h5>
      <p class="card-text" style={{color:"black"}}><small>Most Expensive Bike Showroom <br/> Scheduled on : <b style={{fontWeight:"bolder", color:"green", fontSize:"18px"}}>05 March 2024 </b>
      <br/> @Thrissur Swaraja Round ,<br/> Near Vadakkunadan Temple <br/> Thrissur District<br/> 
      <b style={{color:"red",fontSize:"30px", fontFamily:"b"}}>Entry Pass on Sale</b> </small>
      </p>
      <button onClick={msg} className="book btn btn-outline-info" style={{marginBottom:"30px"}}><a href="log2" style={{textDecorationLine:"none"}}>Book Now</a></button>
    </div>
  </div>
  </div>

  <div class="card" style={{marginLeft:"40px",marginRight:"40px"}}>
  <div  className="carousel slide" data-bs-ride="carousel" id="shows" style={{maxWidth:"650px",margin:"auto"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#shows" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#shows" data-bs-slide-to="1"></button>
          
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images6} alt="BMW" className="d-block" style={{width: "100%",borderRadius:"0 100px  0 0"}}/>

            
          </div>

          <div className="carousel-item ">
            <img src={images7} alt="ducati" className="d-block" style={{width: "100%",borderRadius:"0 100px  0 0"}}/>
          </div>

          
  </div>
            <div class="card-body">
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Stunts & Track Event</h5>
      <p class="card-text" style={{color:"black"}}><small>Professional Riders Exculsive show<br/> 
      Scheduled on : <b style={{fontWeight:"bolder", color:"green", fontSize:"18px"}}>15 April 2024 </b> <br/>
      @SpeedWay Thrissur , <br/>SH69 - Peramangalam Road , <br/>Thrissur District
      <br/><b style={{color:"red",fontSize:"30px", fontFamily:"b"}}>Entry Pass on Sale </b></small></p>
      <button onClick={msg} className="book btn btn-outline-info" style={{marginBottom:"30px"}}><a href="log2" style={{textDecorationLine:"none"}}> Book Now</a></button>
    </div>
  </div>
  </div>
  </div>
  

  <div className="title">
                <h1 id="topic" style={{marginTop:"10%", marginBottom:"40px"}}>Special Launch Event</h1>
                <p style={{color:"black", fontWeight:"bold"}}>Vyas Group of Company Proudly Present the New Launch of Bikes Varients in India.
                </p>
            </div>

            <div>
  <div class="card-group" id="sale" style={{maxWidth:"1200px", margin:"auto"}}>
  <div class="card" style={{marginLeft:"40px",marginRight:"40px",boxShadow:"none",border:"0px"}}>
    <img src={images8} class="card-img-top" alt="..." style={{height:"280px",borderRadius:"100px 0 0 0"}}/>
    <div class="card-body" >
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>KTM 1290 Super Duke Racer</h5>
      <p class="card-text">Preview Show Pass will be Distributing Soon</p>
      <button className="booking btn btn-outline-light" style={{fontSize:"20px",cursor:"wait"}}>Launching Soon</button>
    </div>
  </div>

  <div class="card" style={{marginLeft:"40px",marginRight:"40px",boxShadow:"none",border:"0px"}}>
    <img src={images9} class="card-img-top" alt="..." style={{height:"280px",borderRadius:"0 100px  0 0"}}/>
    <div class="card-body" >
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Tank Machine's INDIAN </h5>
      <p class="card-text">Preview Show Pass will be Distributing Soon</p>
      <button className="booking btn btn-outline-light"style={{fontSize:"20px",cursor:"wait"}}>Launching Soon</button>
    </div>
  </div>
  </div> <br/>


  <div class="card-group" id="sale" style={{maxWidth:"680px", margin:"auto", marginTop:"20px"}}>
  <div class="card" style={{marginLeft:"40px",marginRight:"40px",boxShadow:"none",border:"0px"}}>
    <img src={images10} class="card-img-top" alt="..." style={{borderRadius:"100px 100px 0 0"}}/>
    <div class="card-body">
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}>Harley Davison EV</h5>
      <p class="card-text">Preview Show Pass will be Distributing Soon</p>
      <button className="booking btn btn-outline-light" style={{fontSize:"20px",cursor:"wait"}}>Launching Soon</button>
    </div>
  </div>
  </div>
  </div>

  

  <div className="word" style={{marginTop:"150px"}}>
    <h2 className="people words">PEOPLE'S WORD'S</h2>
  </div>
  <div class="card-group" id="motto" style={{maxWidth:"1500px", margin:"auto"}}>
  <div class="card" id="star" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg"  src={actor1} class="card-img-top" alt="..."  style={{}}/>
    <div class="card-body" style={{backgroundColor:"navy"}} >
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}></h5>
      <p class="card-text" style={{color:"yellow"}}>“It wasn’t until I went to college and I got the first motorcycle that I understood the thrill of speed.” <br/> – <b style={{fontWeight:"bolder",color:"red"}}>Vin Diesel</b> </p>
    </div>
  </div>
  
  <div class="card" id="star" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg" src={actor2} class="card-img-top"  alt="..."/>
    <div class="card-body" style={{backgroundColor:"navy"}}>
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}></h5>
      <p class="card-text" style={{color:"yellow"}}>“Riding a powerful motorcycle is an art. It is a thing that you do because you feel something inside.” <br/> – <b style={{fontWeight:"bolder",color:"red"}}>Valentino Rossi</b>
</p>
    </div>
  </div>

  <div class="card" id="star" style={{marginLeft:"40px",marginRight:"40px"}}>
    <img id="frontimg" src={actor3} class="card-img-top"  alt="..."/>
    <div class="card-body" style={{backgroundColor:"navy"}}>
      <h5 class="card-title" style={{fontWeight:"bold",letterSpacing:"3px"}}></h5>
      <p class="card-text" style={{color:"yellow"}}>“I love taking my bike for a spin during my free time.” <br/> – <b style={{fontWeight:"bolder",color:"red"}}>Naga Chaitanya</b>
</p>
    </div>
  </div>
  </div>

  <div className="announce">
  <p class="card-text " id="benelli" style={{color:"blue",fontSize:"20px", marginTop:"50px", marginBottom:"-250px"}}><b style={{color:"red"}}>UPDATES :<br/> </b><i style={{fontWeight:"bold"}}> ** Benelli to relaunch in India with Mahavir Group **</i></p>

  </div>

  <div className="videofile" style={{marginTop:"400px",marginBottom:"-550px"}}>
    <h1>Previous Events</h1>
    <video src={video}  autoPlay loop muted/>
    <video src={video1} width={"600px"} height={"300px"} autoPlay loop muted/>  
  </div>

        </>   
    );
}
export default Home;