import React from "react";
import backgroundVideo from './video.mp4';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content-container">
        <h1>Welcome to cybersecurity training</h1>
        <div className="text-center">
          <video autoPlay loop muted id='video'>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="button-container">
            <Button variant="primary">Click Me</Button>
            <Button variant="primary">Click Me</Button>
          </div>
          <Footer />
        </div>
      </div>
      <div className="footer-text">
      © 2023 CyberHunter. All rights reserved.
      </div>
    </div>
  );
}

export default Home;
