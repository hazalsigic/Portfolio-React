import React, { useState } from "react";


const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
  }

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form action=""
      onSubmit={handleSubmit}
      style={{marginLeft: '30px'}} 
    >
        <h3 style={{textAlign: 'center'}}>Contact form</h3>
      <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-2 mt-5">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group ol-sm-12 col-md-12 col-lg-12 mb-2">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group ol-sm-12 col-md-12 col-lg-12 mb-2">
        <textarea
          placeholder="Your message"
          name="message"
          className="form-control"
          required
        />
      </div>
      <div className="form-group text-center">
        <button
          className="btn btn-dark mb-2"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;