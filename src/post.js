import React, { useState } from "react";
import axios from "axios";
import './post.css';

function  Enter() {
  const [adid, setadid] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [phno, setphno] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = {
        adid: adid,
        name: name,
        address: address,
        dob: dob,
        gender: gender,
        phno: phno
    };
    axios
      .post("http://127.0.0.1:8080/post", details)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-box">
        <h4 className="heading">Enter new Details</h4>
      <div className="user-box">
    

        <input
          type="text"
          id="adid"
          value={adid}
          placeholder="Aadhar id"
          onChange={(event) => setadid(event.target.value)}
        />
      </div>
      <div className="user-box">
        
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
      </div>
      <div className="user-box">
       <input
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(event) => setaddress(event.target.value)}
        />
      </div>
      <div className="user-box">
        
        <input
          type="text"
          id="dob"
          placeholder="Date Of Birth"
          value={dob}
          
          onChange={(event) => setdob(event.target.value)}
        />
      </div>
      <div className="user-box">
        
        <input
          type="text"
          id="gender"
          placeholder="Gender"
          value={gender}
          onChange={(event) => setgender(event.target.value)}
        />
      </div>
      <div className="user-box">
    
        <input
          type="text"
          id="phno"
          placeholder="Phone Number"
          value={phno}
          onChange={(event) => setphno(event.target.value)}
        />
      </div>
      
      <button type="submit">submit</button>
    </form>
  );
}

export default Enter;