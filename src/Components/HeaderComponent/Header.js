import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App">
        <div className="myLogo">
          My Website
        </div>

        <nav >
          <ul className="list-inline">
            <li>
              <Link to="/Interests">Interests</Link>
            </li>
            <li>
              <Link to="/Coding4All">Coding4All</Link>
            </li>
            <li>
              <Link to="/MyProjects">MyProjects</Link>
            </li>
            <li>
              <Link to="/HomePage">Home</Link>
            </li>
          </ul>
        </nav>

        <div className="Banner"></div>
      </header>
    );
  }
}

export default Header;
