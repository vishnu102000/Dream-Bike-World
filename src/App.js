
import './App.css';
import Footer from './pages/footer';
import Login from './pages/login';
import {Navbar, Nav } from "react-bootstrap";
import {Link, Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Contactus from './pages/contact';
import Testride from './pages/booktest';
import Tickets from './pages/bookticket';
import Service from './pages/service';
import About from './pages/about';
import Forgetpass from './pages/forgetpass';
import Bikelist from './pages/morebike';
import Emioffer from './pages/emioffer';
import Log1 from './pages/log1';
import Log2 from './pages/log2';
import Bikesale from './pages/bikesale';
import One from './pages/one';
import Home from './pages/home';
import { useState } from 'react';
import Dashboard from './dashboard';
import Adminlogin from './pages/Adlogin';
import images from './logo-no-background.png'
import User from './pages/User';
import Userlog from './pages/Userlog';
import Reglog from './pages/registerlog';
import Testlog from './pages/testridelog';
import Ticketlog from './pages/ticketlog';
import Contactlog from './pages/contactlog';
import QAlog from './pages/qa';



  const PrivateRoute = ({element, isAuthenticated})=>{
    return isAuthenticated ? element : <Navigate to="/admin" />
  };
  const App =()=>{
    const [isAuthenticated,setAuthenticated]= useState(false);

    const handleLogin =()=>{
      setAuthenticated(true);
    };

    const handleLogout=()=>{
      setAuthenticated(false)
    };

  return (
    <div className="App">

{/* <CNavbar/> */}

<Navbar className="navbar" expand="lg" variant="dark">
        <img style={{ width: "100px", height: "90px", marginLeft: "30px" }} src={images} alt='img' />

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "black" }} className="c" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: "black" }}>
          <Nav className="Nav-item" style={{ marginRight: "20px", textIndent: "0px", fontWeight: "bold" }}>
            <ul style={{justifyContent:"start"}}>
              <li>
                <Link to="/" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}><button className='btn btn-outline-light' style={{borderRadius:"100px"}}>HOME</button></Link>
              </li>
              <li>
              <Link to="abt" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}><button className='btn btn-outline-light' style={{borderRadius:"100px"}}>ABOUT</button></Link>
            </li>
            <li>
            <Link to="serv" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}><button className='btn btn-outline-light' style={{borderRadius:"100px"}}>SERVICE</button></Link>
            </li>
            <li>
            <Link to="cont" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}><button className='btn btn-outline-light' style={{borderRadius:"100px"}}>CONTACT</button></Link>
            </li>
            <li>
            <Link to="reg" style={{ color: "Red", marginLeft: "10px", textDecoration: "none" }}><button className='btn btn-outline-success' style={{borderRadius:"100px", color:"white"}}>REGISTER</button></Link>
            </li>
            <li>
              
              <Link to="user" style={{color:" white", marginLeft:"10px", textDecoration:"none"}}><button className='btn btn-outline-primary' style={{borderRadius:"100px", color:"white"}}>USER</button></Link>
              
            </li>
            <li>
            <Link to="dashboard" style={{color:"black",marginLeft:"10px",textDecoration:"none"}}><button className='btn btn-outline-light' style={{borderRadius:"100px"}}>DASHBOARD</button></Link>
            </li>
            
            
             <li>
            {isAuthenticated ? (
            <button className='btn btn-success' style={{borderRadius:"100px"}} onClick={handleLogout}>LOGOUT</button>
            ) : (
            <Link to="admin"style={{color:"white",marginLeft:"10px",textDecoration:"none"}}><button className='btn btn-outline-danger' style={{borderRadius:"100px", color:"white"}}> LOGIN</button></Link>
            )} 
          </li>
           
          </ul>
      
      <div className="search">
          
          <input type="text" className="sea" placeholder="Search Here" style={{marginLeft:"20px", borderRadius:"20px",}} />
          <button className="btn btn-outline-danger" type="button" id="sea">S e a r c h</button>
          
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 

      
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated}/>} />
      <Route path='reg' element={<Register/>}/>
      <Route path='cont' element={<Contactus/>}/>
      <Route path='ride' element={<Testride/>}/>
      <Route path='pass' element={<Tickets/>}/>
      <Route path='newpass' element={<Forgetpass/>} />
      <Route path='serv' element={<Service/>} />
      <Route path='abt' element={<About/>} />
      <Route path='bmore' element={<Bikelist/>} />
      <Route path='emioffer' element={<Emioffer/>} />
      <Route path='log1' element={<Log1/>} />
      <Route path='log2' element={<Log2/>} />
      <Route path='bikesale' element={<Bikesale/>} />
      <Route path='one' element={<One/>} />
      <Route path='admin' element={<Adminlogin onLogin={handleLogin} isAuthenticated={isAuthenticated}/>} />
      <Route path='dashboard' element={<PrivateRoute element={<Dashboard/>} isAuthenticated={isAuthenticated} />} />
      <Route path='user' element={<User/>} />
      <Route path='userlog' element={<Userlog/>} />
      <Route path='reglog' element={<Reglog/>} />
      <Route path='passlog' element={<Ticketlog/>} />
      <Route path='testlog' element={<Testlog/>} />
      <Route path='contactlog' element={<Contactlog/>} />
      <Route path='quelog' element={<QAlog/>} />
     </Routes>
      <Footer/>
    </div>
  );
  }
export default App;