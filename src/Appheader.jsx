import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

const Appheader = () => {
  return (
    <Navbar expand="lg"className="header">
      <div className="container">
        <div className="navbar">
        <div className="brand"><Navbar.Brand href="" className="logo"><h1>LUMIA</h1></Navbar.Brand></div>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav1" style={{ maxHeight: '100px' }} navbarScroll>
           <div className="list"> <ul>
           <li> <a href="">Home        </a></li>
           <li> <a href="">About       </a></li>
           <li> <a href="">Services    </a></li>
           <li> <a href="">Portfolio   </a></li>
           <li> <a href="">Testimonials</a></li>
           <li> <a href="">Drop Down   </a></li>
           <li> <a href="">Contact     </a></li>
            </ul></div>
          
        <div className="icon">
          <a href=""><Twitter size={20} /></a>
          <a href=""><Facebook size={20} /></a>
          <a href=""><Instagram size={20} /></a>
          <a href=""><Linkedin size={20} /></a>
        </div>
        </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbarScroll" />
       
        </div>
      </div>
    </Navbar>
  );
};

export default Appheader;
