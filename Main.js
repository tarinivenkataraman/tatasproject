import React from 'react';
import './Main.css';
import './Inserting';
import './About';

const Main=()=>{
    return(
        <div className='Total' id="home">
            <marquee behavior="slide" direction="left">Welcome to Our Official Portal. This Portal helps you in staying updated about all our incoming project and internship oppurtunities. We provide a varied field of interning oppurtunities, to know about us click on About Us. </marquee>
            <center className="Midele">
                <p >Gain Access to the Portal here:</p>
                <a className="assert" href="#forming" target="">Insert into the Table</a>
            </center>
        </div>
    )
}
export default Main;