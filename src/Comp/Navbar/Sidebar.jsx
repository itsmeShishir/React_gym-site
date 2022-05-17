import React from 'react'
import { NavLink } from "react-router-dom"
function Sidebar() {
  return (
    <>
      {/* <!-- Navbar Start -->  */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <a href="" className="navbar-brand">
            <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
              Gymnast
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4 bg-secondary">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link ">
                About
              </NavLink>
              <NavLink to="/ourfeature" className="nav-item nav-link">
                Our Features
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  )
}

export default Sidebar
