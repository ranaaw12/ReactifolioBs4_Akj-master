import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import "./my-navbar.styles.css";
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';


const MyNavbar = () => {


  const [shows, setttShow] = useState(false);
  const [shows2, settt2Show] = useState(false);

  return (
    <>
    <div>
      <Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Aim</Nav.Link>
              <Nav.Link href="#experience">Experince</Nav.Link>
              <Nav.Link href="#projects">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="" onClick={() => setttShow(true)}>LogIn</Nav.Link>
              <Nav.Link href="" onClick={() => settt2Show(true)}>Signup</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>

<Modal
        show={shows}
        onHide={() => setttShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title" className="loginHeading">
            Al-Maktab Study Point
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
   


          
          
          
    <div className="container">
           
       <div id="login" className="registrationform custom-form-fields">
                                    <h3>Login</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <form>
                                            
                                        <div className="form-group">
                                             <input type="text" className="form-control" placeholder="Username"  required/>
                                             <span><i className="fa fa-user"></i></span>
                                        </div>
                                        
                                        <div className="form-group">
                                             <input type="password" className="form-control" placeholder="Password"  required/>
                                             <span><i className="fa fa-lock"></i></span>
                                        </div>
                                        
                                        <div className="checkbox">
                                             <label><input type="checkbox"/> Remember me</label>
                                        </div>
                                        
                                        <button className="btn btn-orange btn-block">Login</button>
                                    </form>
                                    
                  <div className="other-links">
                  
                  <a className="simple-link" href="">Forgot Password ?</a>
            </div>

     </div>

            </div>



        </Modal.Body>
      </Modal>


      <Modal
        show={shows2}
        onHide={() => settt2Show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title" className="loginHeading">
            Al-Maktab Study Point
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
        
    <div className="container">
                  
   <div class="custom-form custom-form-fields registrationform">
                                    <h3>Registration</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <form>
                                            
                                        <div class="form-group">
                                             <input type="text" class="form-control" placeholder="Username"  required/>
                                             <span><i class="fa fa-user"></i></span>
                                        </div>
        
                                        <div class="form-group">
                                             <input type="email" class="form-control" placeholder="Email"  required/>
                                             <span><i class="fa fa-envelope"></i></span>
                                        </div>
                                        
                                        <div class="form-group">
                                             <input type="password" class="form-control" placeholder="Password"  required/>
                                             <span><i class="fa fa-lock"></i></span>
                                        </div>
        
                                        <div class="form-group">
                                             <input type="password" class="form-control" placeholder="Confirm Password"  required/>
                                             <span><i class="fa fa-lock"></i></span>
                                        </div>
                                        
                                        <button class="btn btn-orange btn-block">Register</button>
                                    </form>
                                    
                                    
                                </div>
                                




                 
                           
                         
  
  
  



            </div>



        </Modal.Body>
      </Modal>









</>

  );
};

export default MyNavbar;
