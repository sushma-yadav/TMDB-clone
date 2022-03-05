import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
        <img src={logo}/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Popular</a></li>
                <li><a className="dropdown-item" href="#">Now playing</a></li>
                <li><a className="dropdown-item" href="#">Up coming</a></li>
                <li><a className="dropdown-item" href="#">Top Rated</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/tvshows" className="nav-link">TV Shows</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Popular</a></li>
                <li><a className="dropdown-item" href="#">Airing Today</a></li>
                <li><a className="dropdown-item" href="#">On TV</a></li>
                <li><a className="dropdown-item" href="#">Top Rated</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/people" className="nav-link">People</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Popular People</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Discussions</a></li>
                <li><a className="dropdown-item" href="#">Leaderboard</a></li>
                <li><a className="dropdown-item" href="#">support</a></li>
                <li><a className="dropdown-item" href="#">API</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <i class="fas fa-plus"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn">EN</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <i class="fas fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
