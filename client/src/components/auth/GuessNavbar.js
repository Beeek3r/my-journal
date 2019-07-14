import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const GuessNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-theme-1">
      <img src={Logo} width="130" height="27" className="d-inline-block align-top" alt="" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className=" nav-link text-light" to="/login">
            Login
          </Link>
          <Link className=" nav-link text-light" to="/register">
            Register
          </Link>
          <Link className=" nav-link text-light" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GuessNavbar
