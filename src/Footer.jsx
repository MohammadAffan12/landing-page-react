import React from 'react'
import './App.css';
  
function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div id="about">
          <h3>About Us</h3>
          <p>We are a premium retailer of the latest sportswear collections, bringing you the best from top brands.</p>
        </div>
        {<div id="socials">
          <h3>Follow Us</h3>
          <h4>facebook</h4>
          <h4>instagram</h4>
          
        </div> }
        <div id="contact">
          <h3>Contact Us</h3>
          <p>Email: support@nike.com</p>
          <p>Phone: </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
