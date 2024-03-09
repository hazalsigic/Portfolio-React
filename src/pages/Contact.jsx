import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/contactForm';

function Contact() {

  return (
    <div className='row'>
      <h1 style={{textAlign: 'center'}}>Let's Connect!</h1>
      <div className='col-lg-6'>
      <ul>
        <h3 style={{textAlign: 'center'}}>Contact Details</h3>
        <li>Email: hazalsigic@gmail.com</li>
        <li>Linkedin:  <Link to="https://www.linkedin.com/in/hazal-sigic-215103191/">Hazal Sigic</Link></li>
        <li>Github:  <Link to="https://github.com/hazalsigic">hazalsigic</Link></li>
      </ul>
      </div>
      <div className='col-lg-6'>
      <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
