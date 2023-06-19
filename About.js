import React from "react";
// import { BsNewspaper } from "react-icons/bs";
import backgroundVideo from './video.mp4';
import './About.css'; // Import custom CSS for styling


function About() {
  return (
    <div className="about">
      {/* <h1>About</h1>
      <BsNewspaper className="page-icon" /> */}
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="about-text">
        <p className="centered smaller">
          Our mission is to empower you with the knowledge and tools necessary to navigate the ever-evolving landscape of cyber threats. Through our curated manual, we offer practical insights and recommendations to create a secure work environment and mitigate potential risks. From physical and network security measures to data protection and device security, we cover all aspects of digital security. By implementing our recommended practices, you can safeguard your organization against unauthorized access and potential breaches.
        </p>
        <p className="centered smaller">
          We emphasize the importance of training, compliance with regulations, and continuous monitoring and evaluation. Our goal is to equip you with the skills and awareness needed to stay vigilant and respond effectively to security incidents. Join us in creating a culture of digital security. Explore our manual, adopt our best practices, and contribute to the protection of your organization's digital assets and data. Stay informed, stay secure! [Organization Name] Team
        </p>
      </div>
      <div className="footer-text">
      © 2023 CyberHunter. All rights reserved.
      </div>
    </div>
  );
}

export default About;
