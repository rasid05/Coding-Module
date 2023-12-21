import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="bit_header section__padding" id="home">
      <div className="bit_header-content">
        <h1 className="gradient_text">Let&apos;s learn how to code and build skills in &lt;programming&#47;&gt;</h1>
        {/* <p>Because learning to code might be the easiest way to change your career.</p> */}
        <p>Programming tools or software development tools are computer programs that software developers use to create,debug,maintain, or support other programs and applications.</p>
  
        <div className="bit_header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
  
        <div className="bit_header-content_people">
          <img src={people} />
          <p>1,600 people access a visit in last 24 hours</p>
        </div>
      </div>
  
      <div className="bit_header-image">
        <img src={ai} />
      </div>
    </div>
  );
  
  export default Header;
  