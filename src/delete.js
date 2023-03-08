import React, { useState } from 'react';
import axios from 'axios';

const DeleteDetail = () => {
  const [adid, Setadid] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/proj/${adid}`,DeleteDetail)
      .then(response => {
        alert('Deleted successfully!');
        Setadid('');
         
      })
      .catch(error => {
        alert('Failed');
        console.error(error);
      });
  };

  return (
    <div>
      <form className='login-box'>
      <h4 className="heading">Delete</h4>
        <div className='user-box'>
          {/* <label htmlFor="adid">adid:</label> */}
          <input
            type="number"
            id="adid"
            value={adid}
            placeholder="Aadhar Number"
            onChange={event => Setadid(event.target.value)}
          />
        </div><br></br>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};
export default DeleteDetail;
