import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to reach out to us.</p>
      
      <div className="contact-info">
        <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Follow us on <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
