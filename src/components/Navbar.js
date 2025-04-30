import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        iNoteBook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
              About
            </Link>
          </li>
        </ul>
        
        {/* Right-aligned buttons */}
        <div className="d-flex ms-auto">
          {!localStorage.getItem("token") ? (
            <>
              <Link className="btn btn-primary mx-1" to="/login">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
