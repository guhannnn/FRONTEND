// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './put.css';
// function UpdateDetails() {
//   const [data, setData] = useState({
//     adid: '',
//     name: '',
//     address: '',
//     dob: '',
//     gender: '',
//     phno: ''
//   });

//   const handleChange = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.put('http://localhost:8080/update', data).then((res) => {
//       console.log(res.data);
//       setData({  adid: '',
//       name: '',
//       address: '',
//       dob: '',
//       gender: '',
//       phno: '' });
//     });
//   };

//   return (
//     <div className="row">
//       <h1>Update Register</h1>
//       <form onSubmit={handleSubmit} className="login-box">
//         <div className="user-box">
//         <label>
//           adid:
//           <input type="text" name="adid" value={data.adid} onChange={handleChange} />
//         </label>
//         </div>
//         <div className="user-box">
//         <label>
//           name:
//           <input type="text" name="name" value={data.name} onChange={handleChange} />
//         </label>
//         </div>
//         <div className="user-box">
//         <label>
//           address:
//           <input type="text" name="address" value={data.address} onChange={handleChange} />
//         </label>
//         </div>
//         <div className="user-box">
//         <label>
//           dob:
//           <input type="text" name="dob" value={data.dob} onChange={handleChange} />
//         </label>
//         </div>
//         <div className="user-box">
//         <label>
//           gender:
//           <input type="text" name="gender" value={data.gender} onChange={handleChange} />
//         </label>
//         </div>
//         <div className="user-box">
//         <label>
//           phno:
//           <input type="text" name="phno" value={data.phno} onChange={handleChange} />
//         </label>
//         </div>
       
//         <button type="submit">Change</button>
//         {/* <input type="submit"/> */}
//       </form>
//     </div>
//   );
// }

// export default UpdateDetails;





import React, { useState } from "react";
import axios from "axios";
import './post.css';

function  UpdateDetails() {
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
      .put("http://localhost:8080/update", details)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-box">
        <h4 className="heading">Update details</h4>
      <div className="user-box">
        {/* <label htmlFor="adid">Adid:</label> */}

        <input
          type="text"
          id="adid"
          value={adid}
          placeholder="Aadhar id"
          onChange={(event) => setadid(event.target.value)}
        />
      </div>
      <div className="user-box">
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
      </div>
      <div className="user-box">
        {/* <label htmlFor="address">Address:</label> */}
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(event) => setaddress(event.target.value)}
        />
      </div>
      <div className="user-box">
        {/* <label htmlFor="dob">DOB:</label> */}
        <input
          type="text"
          id="dob"
          placeholder="Date Of Birth"
          value={dob}
          onChange={(event) => setdob(event.target.value)}
        />
      </div>
      <div className="user-box">
        {/* <label htmlFor="gender">Gender:</label> */}
        <input
          type="text"
          id="gender"
          placeholder="Gender"
          value={gender}
          onChange={(event) => setgender(event.target.value)}
        />
      </div>
      <div className="user-box">
        {/* <label htmlFor="phno">Phno:</label> */}
        <input
          type="text"
          id="phno"
          placeholder="Phone Number"
          value={phno}
          onChange={(event) => setphno(event.target.value)}
        />
      </div>
      
      <input type="submit"/>
    </form>
  );
}

export default UpdateDetails;