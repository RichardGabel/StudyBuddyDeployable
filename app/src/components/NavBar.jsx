import React from "react";
import { useNavigate } from "react-router-dom";
import connection from "../backend"; // Axios instance

function NavBar() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Redirect to the backend login route
      window.location.href = "https://studybuddydeployable.onrender.com/auth/login";
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  const handleSignup = () => {
    window.location.href = "https://studybuddydeployable.onrender.com/auth/login"; // Redirect to backend signup (same as login for now)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upload">
                Upload PDF
              </a>
            </li>
          </ul>
          <div className="ms-auto">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;