import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Adhardetails() {
 
    const [details, setdetails] = useState([]);
 
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/getvalues')
            .then(response => {
                setdetails(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div className='table'>
            <h1>Details</h1>
            <table className='padding-table-columns'>
                <thead>
                    <tr>
                        <th>adid</th>
                        <th>name</th>
                        <th>address</th>
                        <th>dob</th>
                        <th>gender</th>
                        <th>phno</th>
                       

                    </tr>
                </thead>
                <tbody>
                    {details.map(details => (
                        <tr key={details.adid}>
                            <td>{details.adid}</td>
                            <td>{details.name}</td>
                            <td>{details.address}</td>
                            <td>{details.dob}</td>
                            <td>{details.gender}</td>
                            <td>{details.phno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default Adhardetails;