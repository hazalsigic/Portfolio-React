import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/contactForm';
import "./contact.css";

function Contact() {

  return (
    <div className='row mt-5 mb-5 mx-5'>
      <h1 style={{textAlign: 'center', marginBottom: "50px", marginTop: "30px"}}>Let's Connect!</h1>
      <div className='col-lg-6 mt-4'>
      <ul>
        <h3 style={{textAlign: 'center'}}>Contact Details</h3>
        <div className="list-items">
          <li>Email: <span>hazalsigic@gmail.com</span></li>
          <li>Linkedin:  <span><Link to="https://www.linkedin.com/in/hazal-sigic-215103191/" target="_blank">Hazal Sigic</Link></span></li>
          <li>Github:  <span><Link to="https://github.com/hazalsigic" target="_blank">hazalsigic</Link></span></li>
        </div>
      </ul>
      </div>
      <div className='col-lg-6 mt-4'>
      <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
