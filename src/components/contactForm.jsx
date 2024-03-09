import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
        <h3 style={{textAlign: 'center'}}>Contact form</h3>
      <div style={{marginLeft: '30px'}} className="form-group col-sm-12 col-md-6 col-lg-6 mx-sm-3 mb-2">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group ol-sm-12 col-md-6 col-lg-6 mx-sm-3 mb-2">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group ol-sm-12 col-md-6 col-lg-6 mx-sm-3 mb-2">
        <textarea
          placeholder="Your message"
          name="message"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
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