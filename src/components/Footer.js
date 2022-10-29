import React from "react";

const Footer = () =>{
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        &copy; {currentYear} Pol Santos
      </footer>
    );
}

export default Footer;