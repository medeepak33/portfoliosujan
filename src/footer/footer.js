import React from "react";
import "./footer.css";

const Footer = () => {
  const email = "sujanpokhrelofc@gmail.com";
 

  const handleContactNow = () => {
    if (email) {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    }
  };


  return (
    <div className="footer">
      <div className="greet">
        <p>Contact Me To Hire As A<br />Developer</p>
      </div> 

      <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRzBxxtzlMqsLbDqBsqnjgvtwgHJfffFhhVnXffsRCcgcmSFFsWpTqMfZVwbrmGBtLgGnjWV" className="hireButton" onClick={handleContactNow}>Contact Now</a>

      
    </div>
  );
};

export default Footer;
