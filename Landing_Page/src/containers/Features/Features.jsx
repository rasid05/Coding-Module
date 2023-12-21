import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '1,000 real interview problems',
    text: 'Try solving problems in topics ranging from graphs, hash tables, trees, and linked lists.',
  },
  {
    title: '6 supported languages',
    text: 'We support Python, Java, C++, JavaScript, TypeScript, and Ruby.',
  },
  {
    title: 'Text and voice chat',
    text: 'Chat with others to help each other out or for some friendly competition.',
  },
  {
    title: 'Stay motivated',
    text: 'Earn virtual gems, unlock new levels, and keep your streak up as you master coding interviews.',
  },
];

const Features = () => (
  <div className="bit_features section__padding" id="features">
    <div className="bit_features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="bit_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
