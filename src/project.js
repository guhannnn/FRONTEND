import React, { Component } from 'react'
import a from './image/create.png';
import b from './image/get.png';
import c from './image/update.png';
import d from './image/delete.png';
import { Link } from 'react-router-dom';
 function Main(){
        return (
            
            <div className='j'><h1>AADHAR DETAILS</h1>
                      <div className="container">

                        <div className="card">
                          <div className="content">
                        
                            <div className="imgBx">
                              <img src={a} alt=''/>
                            </div>
                            <div className="contentBx">
                              
                            </div>
                          </div>
                          <ul className="sci">
                            <Link to='/post'>
                            <li>
                              CREATE
                            </li></Link>
                          </ul>
                        </div>
                        <div className="card">
                          <div className="content">
                            <div className="imgBx">
                              <img src={b}alt=''/>
                            </div>
                            <div className="contentBx">
                             
                            </div>
                          </div>
                          <ul className="sci">
                            <Link to='/get'>
                            <li>
                              GET DETAILS
                            </li></Link>
                    
                          </ul>
                        </div>
                        <div className="card">
                          <div className="content">
                            <div className="imgBx">
                              <img src={c}alt=''/>
                            </div>
                            <div className="contentBx">
                             
                            </div>
                          </div>
                          <ul className="sci">
                            <Link to='/put'><li>
                              UPDATE
                            </li></Link>
                           
                          </ul>
                        </div>
                        <div className="card">
                          <div className="content">
                            <div className="imgBx">
                              <img src={d} alt=''/>
                            </div>
                            <div className="contentBx">
                             
                            </div>
                          </div>
                          <ul className="sci">
                            <Link to='/delete'><li>
                              DELETE
                            </li></Link>
                           
                          </ul>
                        </div>
                      </div>
                      </div>
                   
                  );
                }
              
export default Main;