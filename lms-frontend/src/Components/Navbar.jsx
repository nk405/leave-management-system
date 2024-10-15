import React from "react";
import { Link } from "react-router-dom";
import {FaPlus} from "react-icons/fa";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 shadow-sm">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Employee Leave Management System
        </Link> 
          <Link to={"/add"} className="btn btn-info">
            {" "}
             <FaPlus/> Add a Leave 
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
