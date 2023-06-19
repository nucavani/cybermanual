import React from 'react';
import './styles.css';
import videoSource from './assets/video.mp4';
import Navbar from './components/Navbar';

import Footer from '../components/Footer';
import './components/Footer.css'; // Import the Footer CSS file

function App() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-element">
        <source src={videoSource} type="video/mp4" />
      </video>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
   