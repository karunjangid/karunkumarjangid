import { useState, useEffect } from "react";
import './Form.css'
import { FaCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Multiple() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${formData.name} , Your response recorderd succesfully`);
    setFormData({ name: "", email: "", message: "" }); // clear form data
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", message: "" }); // clear form data
  };

  function clr() {
    document.getElementById("newchange").style.backgroundColor = "orangered",
    document.getElementById("newchange").style.color = "white";
  }
  function clr1() {
    document.getElementById("newchange").style.backgroundColor = "pink",
    document.getElementById("newchange").style.color = "rgb(194, 96, 112)";
  }
  function clr2() {
    document.getElementById("newchange").style.backgroundColor = "purple",
    document.getElementById("newchange").style.color = "white";
  }

  function updateButtons(color) {
    const buttons = document.querySelectorAll('#change button');
    buttons.forEach((buttons) => {
      buttons.style.color = color;
    });
  }

  return (
    <>
      <div className="mainofform">
        <div className="navv">
          <div className="clrpl">
            <FaCircle style={{ color: "red" }} onClick={clr} />
            <FaCircle style={{ color: "pink" }} onClick={clr1} />
            <FaCircle style={{ color: "purple" }} onClick={clr2} />
          </div>
          <div className="servi">
            <Link to="/home" style={{textDecoration:"none",userSelect:"none"}}>X</Link>
          </div>
        </div>
        <div className="secondmain" id="newchange">
          <div className="head">
            <h1 style={{ fontSize: "40px", width: "10px", margin: "40px", marginTop: "100px" }} className="newg1">CONTACT US</h1>
            <p style={{ display: "flex", gap: '5px', margin: "40px", color: "black" }}><MdEmail style={{ position: "relative", top: "3px" }} />jangidkind@gmail.com</p>
          </div>
          <form>
            <div className="name">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{ height: "30px", width: "30vh", backgroundColor: "transparent", borderBottom: "3px solid black" }} />
            </div>
            <div className="emaill">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" style={{ height: "30px", width: "30vh", backgroundColor: "transparent", borderBottom: "3px solid black" }} />
            </div>
            <div className="messe">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="What you want to ask?" style={{ height: "30px", width: "30vh", backgroundColor: "transparent", borderBottom: "3px solid black" }} />
            </div>
            <div className="buttons">
              <button type="submit" onClick={handleSubmit} className="dare">Send</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}