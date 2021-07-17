import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import './Contact.css';
const Contact=()=>{
    return(
        <div id="maincons">
            

            <center>
                    <p className="parts">Join us at:</p>
                    <p className="paras"><FaFacebook/>&emsp;<FaLinkedin/>&emsp;<FaTwitterSquare/>&emsp;<FaWhatsappSquare/></p>
                    <p>Or Call Us At:</p>
                    <p><b>+111-245647643, +111-43566557847, +111-64642564764</b></p>
            </center>
            <br/>
            <div className="parttwo">
                <h1>Get inspired Weekly by Signing into our Weekly Newsletter</h1>
                <p className="enters">Enter Your Email:</p>
                <input type="email" placeholder="abc@gmail.com" className="inputs"></input>
                <button id="buttn">Sign Up</button>
            </div>
            <a href="#home" className="goback"><FaStepBackward/></a>
            <center className="copyright">Copyright By Tarini, 2021</center>
        </div>
    )
}
export default Contact;