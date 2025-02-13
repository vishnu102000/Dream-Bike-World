import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




import images from '../images/png/logo-black.png'
function Footer(){
    return(
        <>
    <div className="footer expand-lg footer-success" id="footer" style={{marginTop:"700px"}}>
      <img id="img" style={{ textAlign:"left"}} src={images}
        alt=""/>
    
    <div className="mail " >
        <h5 id='mail' style={{color:"white"}}>Mail us</h5>
        <span style={{color:"gray",textDecoration:"none"}}><sm>www.Streetriderworld.com</sm></span>
    </div>

    <div className="cont " id="cont">
        <h5 id="phone" style={{color:"white"}}>Contact us</h5>
        <span id="number" style={{color:"gray",textDecoration:"none"}}><sm><a href="+91-82367 65349">+91-94441 51022</a></sm></span>
    </div> 
    

      <div className='footernavbar' id='footerlist'>
        
        <ul className='navbar-nav'>
            <li className='Navbar-item'>
                <Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link>
            </li>

            <li className='Navbar-item'>
                <Link to="abt" style={{textDecoration:"none", color:"white"}}>About</Link>
            </li>

            <li className='Navbar-item'>
                <Link to="serv" style={{textDecoration:"none", color:"white"}}>Service</Link>
            </li>

            <li className='Navbar-item'>
                <Link to="cont" style={{textDecoration:"none", color:"white"}}>Contact</Link>
            </li>

            <li className='Navbar-item'>
                <Link to="reg" style={{textDecoration:"none", color:"white"}}>Register</Link>
            </li>

            <li className='Navbar-item'>
                <Link to="log" style={{textDecoration:"none", color:"white"}}>Login</Link>
            </li>
            <br/>
            <form className='search'>
            <input type='text' className='searchspace' placeholder='Search Here'/>
            <button type='button' className='searchbar'>Search</button>
            </form>
            
        </ul>
        
    
        
      </div>

      
    </div>
    
    <div className="copyright expand-lg">

        <div className="container" id="socialplatform" style={{marginTop:"20px" ,marginBottom:"20px"}}>
        <div className="footer row" id="arrange">
        <div className="col-3" style={{textAlign:"center", color:"blue"}}>
        <FaFacebook id="socialmedia" />
        <a href="https://www.facebook.com/" id="link" style={{ fontFamily:"times new roman",color:"skyblue",paddingTop:"50px"}}>Facebook</a>
        </div>

        <div className="col-3" style={{textAlign:"center", color:"white"}}>
        <FaXTwitter id="socialmedia" />
        <a href="https://twitter.com/?lang=en" style={{fontFamily:"times new roman",color:"skyblue"}}>Twitter</a>
        </div>

        <div className="col-3" style={{textAlign:"center", color:"white"}}>
        <FaGithub id="socialmedia" />
        <a href="https://github.com/vishnu102000" style={{fontFamily:"times new roman",color:"skyblue"}}>Github</a>
        </div>

        <div className="social media col-3" style={{textAlign:"center", color:"red"}}>
        <FaInstagram id="socialmedia" />
        <a href="https://www.instagram.com/v_ish_nu.mk/" style={{ fontFamily:"times new roman",color:"skyblue"}}>Instagram</a>
        </div>
        </div>
        </div>
        <p style={{color:"grey", fontFamily:"monospace", textAlign:"center", margin:"10px"}}><sm>CopyRights &copy; 2023 - All Rights Reserved <a href="www" style={{fontSize:"18px"}}>Vishnu</a></sm></p>
  </div>
  
    
  </>
    )
}
export default Footer;