import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaGithubSquare, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaTrophy, FaCircle } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi"; 
import { HiLanguage } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import Resume from '../../assets/RESUME.pdf';
import Cert from '../../assets/certificates-karun.pdf'
import { Link } from 'react-router-dom'
import { FaWpforms } from "react-icons/fa6";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [celebration, setCelebration] = useState(false);
  const [particles, setParticles] = useState([]);

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.getElementById("change").style.backgroundColor = "white";
      document.getElementById("change").style.color = "black";
      updateAnchorTags('black'); // Update anchor tags to black
    } else {
      document.getElementById("change").style.backgroundColor = "black";
      document.getElementById("change").style.color = "white";
      updateAnchorTags('white'); // Update anchor tags to white
    }
  }

  function updateAnchorTags(color) {
    const anchors = document.querySelectorAll('#change a');
    anchors.forEach((anchor) => {
      anchor.style.color = color;
    });
  }
  function updateText(color) {
    const anchors = document.querySelectorAll('#change .text');
    texts.forEach((text) => {
      text.style.color = color;
    });
  }

  function clr(){
    document.getElementById("change").style.backgroundColor = "black",
    document.getElementById("change").style.color = "orangered"
    updateAnchorTags('orangered'); // Update anchor tags to orangered
  }
  function clr1(){
    document.getElementById("change").style.backgroundColor = "orangered",
    document.getElementById("change").style.color = "black"
    updateAnchorTags('black'); // Update anchor tags to black
  }
  function clr2(){
    document.getElementById("change").style.backgroundColor = "black",
    document.getElementById("change").style.color = "green"
    updateAnchorTags('green'); // Update anchor tags to green
  }
  function handleCelebration() {
    setCelebration(true);
    setTimeout(() => {
      setCelebration(false);
    }, 5000);
  }

  useEffect(() => {
    if (celebration) {
      const newParticles = [];
      for (let i = 0; i < 100; i++) {
        newParticles.push(<div key={i} className="particle" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`
        }} />);
      }
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [celebration]);

  return (
    <>
      <div className='main' id='change'>
        <div className="socialmedia" id='change1'>
          <div className="first">
            <HiLanguage />
            <MdDarkMode onClick={handleDarkModeToggle}/>
          </div>
          <div className="second">
            <a href="https://www.facebook.com/profile.php?id=61561196073655"><FaFacebook className='iconsss'/></a>
            <a href="https://wa.lihttps://i.pinimg.com/originals/a7/c9/87/a7c98793edb93ab88138283785399af3.gifnk/zeor8v"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/immkarun"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/karun-kumar-jangid-628789280/"><FaLinkedin /></a>
          </div>
        </div>
        <div className="colors">
          <ul style={{backgroundColor:"white",width:"20px",padding:"5px 8px"}}>
            <li key={1}><FaCircle style={{color:"orangered"}} onClick={clr}/></li>
            <li key={2}><FaCircle style={{color:"orange"}} onClick={clr1}/></li>
            <li key={3}><FaCircle style={{color:"green"}} onClick={clr2}/></li>
          </ul>
        </div>
        <div className="container">
          <div className="text">
            <h1 style={{ userSelect: 'none' }}>KARUN KUMAR JANGID</h1>
            <p style={{ userSelect: 'none' }}>-- Web Developer--</p>
          </div>
          <div className="icons">
            <a href="https://github.com/karunjangid"><FaGithubSquare /></a>
            <a href={Resume}><PiNotebookFill /></a>
            <a href={Cert}><FaTrophy /></a>
            <Link to="/form"><FaWpforms /></Link>
          </div>
        </div>
        <button style={{padding:"10px 20px",userSelect:"none",cursor:"pointer"}} onClick={handleCelebration} className="btn-1">I'M IMPRESSED</button>
        {particles}
      </div>
    </>
  );
}

export default App;