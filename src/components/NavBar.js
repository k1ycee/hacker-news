import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
      <nav className="nav-wrapper white">
          <div className="container">
              <a className="brand-logo left-align black-text">Hacker News</a>
              <ul className="right">
              <li><Link to="/" className="black-text">Home</Link></li>
              <li><Link to="/v0/newstories" className="black-text">New Stories</Link></li>
              <li><Link to="/v0/beststories" className="black-text">Best Stories</Link></li>
              </ul>
          </div>
      </nav>  
    )
}


export default NavBar 