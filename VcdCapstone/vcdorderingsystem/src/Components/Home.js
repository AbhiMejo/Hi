
import React from "react";
import { Link } from "react-router-dom"; 
import './HomeStyle.css'

export default function Home() {
    return (
      <div className="home-container">
        <div className="background-image"></div>
        <div className="content">
          <h1>Welcome to VCD System</h1>
          <div className="button-container">
            <Link to="/admin" className="button admin-button">
              Admin
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login" className="button user-button">
              User
            </Link>
          </div>
        </div>
      </div>
    );
  }
 