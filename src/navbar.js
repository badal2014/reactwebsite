import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    

      render() {
        return (
            <nav className="mainNavBar navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" >WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="./#"> Home </Link></li>
      <li><Link to="./Game"> Game </Link></li>
      <li><Link to="./practicePage"> Practice</Link></li>
      <li><Link to="./timer">Timer</Link></li>
      {/* <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li> */}
    </ul>
  </div>
</nav>
        );
      }
}
export default Navbar;  