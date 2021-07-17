import React from 'react';
import './Heading.css';
import './About';
import {FaPhoneAlt} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaRegPaperPlane} from "react-icons/fa";
import {FaBuilding} from "react-icons/fa";
const Heading =() => {
    return (
        <div className="initialdiv">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
                <a className="navbar-brand" href="#" style={{color:'#486AAE'}}>TATA PARIKSHAN<FaBuilding/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active nav-item">
                            <a className="nav-link" href="#" style={{color:'#486AAE'}}>
                                <FaUser />Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#abouts" style={{color:'#486AAE'}}>
                                <FaRegPaperPlane/>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#maincons" style={{color:'#486AAE'}}>
                                <FaPhoneAlt/>Contact Us</a>
                        </li>
                       
                    </ul>

                </div>
            </nav>
        </div>
    )
}
export default Heading;