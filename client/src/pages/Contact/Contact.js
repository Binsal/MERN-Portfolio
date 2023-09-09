import React from "react";
import "./Contact.css";
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
const Contact = () => {

  //handle submit button

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="contactimg.jpg"
                      alt="ocontact"
                      className="image"
                    />  
                    </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/saloni-bindal/">
                        <BsLinkedin color="blue" size={30} className="ms-2"/>
                        </a>
                        <a href="https://github.com/Binsal">
                        <BsGithub color="black" size={30} className="ms-2"/>
                        </a>
                      </h6>
                    </div>
                       <div className="row px-3 mb-4">
                          <div className="line"/>
                            <small className="or text-center">OR</small>
                            <div className="line"/>
                       </div>
                       <form action ="https://formspree.io/f/mnqkvybv" method ="POST" className="contact-inputs" >
                       <div className="row px-3">
                            <input type="text"
                             name="name" 
                             placeholder="Enter your Name"
                             autoComplete="off"
                             required
                            className="mb-3"
                           />    
                        </div>
                        <div className="row px-3">
                            <input type="email"
                             name="email" 
                             placeholder="Enter your Email Address"
                             autoComplete="off"
                             required
                            className="mb-3"
                           />    
                        </div>
                        <div className="row px-3">
                            <input type="text"
                             name="msg" 
                             placeholder="Write your message"
                             autoComplete="off"
                             required
                            className="mb-3"
                           />    
                        </div>
                        <div className="row px-3">
                            <button className="button" type="submit" >SEND MESSAGE</button>
                        </div>
                        </form>
                   </div>
                </div>
                </Rotate>
              </div>
           </div>
        </div>
     </div>
    </>
  );
};

export default Contact;