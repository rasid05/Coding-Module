import React from 'react';
import bitLogo from '../../assets/coding-language.png';
import './footer.css';

const Footer = () => (
  <div className="bit_footer section__padding">
    <div className="bit_footer-heading">
      <h1 className="gradient__text">Do you want to develop your skills in coding</h1>
    </div>

    <div className="bit_footer-btn">
      <p>Let's Go</p>
    </div>

    <div className="bit_footer-links">
      <div className="bit_footer-links_logo">
        <img src={bitLogo} alt="bitlogo" />
        <p>Noobies coder group work, <br /> All Rights Reserved</p>
      </div>
      <div className="bit_footer-links_div">
        <h4>Links</h4>
        <p>GitHub</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="bit_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bit_footer-links_div">
        <h4>Get in touch</h4>
        <p>Cutm, Main building Room no. 13</p>
        <p>9337856351</p>
        <p>anandsinghtechie@gmail.com</p>
      </div>
    </div>

    <div className="bit_footer-copyright">
      <p>@2022 Bitwise. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
