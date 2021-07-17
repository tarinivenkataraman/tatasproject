import React, { useState, useEffect } from "react";
import "./Inserting.css";
import { db } from "./Firebase";

const Inserting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        college:college,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Registration Complete. Welcome On-board.");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setCollege("");
    setMessage("");
  };

  return (
    <form className="centered" onSubmit={handleSubmit} id="forming">
      <h1 className="firstp">Register Yourself</h1>
      <p className="secondp">To enroll yourself, fill out the form.</p>
      <hr className="mainhr"/>

      <label>Full Name</label>
      <br/>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<br/>
      <label>Email</label>
      <br/>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<br/>
<label>College</label>
<br/>
      <input
        placeholder="College Name"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
      />
      <br/>
      <label>Workspace Domain</label>
      <br/>
      <input
        placeholder="Development, Database Handling, First-hand Projects."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <br/>

      <button className="btn"
        type="submit"
       
      >
        Submit
      </button>
    </form>
  );
};

export default Inserting;