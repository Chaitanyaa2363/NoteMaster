import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Note-Master
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem('token') ? (
              <button onClick={handleLogout} className="btn btn-primary">
                Log out
              </button>
            ) : (
              <form className="d-flex">
                <Link className="btn btn-primary mx-2" to="/login" role="button">
                  Log in
                </Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">
                  Sign up
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
