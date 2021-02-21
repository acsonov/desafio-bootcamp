import React from 'react';
//import { Link} from 'react-router-dom';
import './styles.scss';


const Navbar = () => (
    <nav className = "row bg-primary main-nav">
        <div className = "col-2">
      <a href="/" className="nav-logo-text">
        <h4>Desafio BootCamp</h4>
        </a>
        </div>
    </nav>
);

export default Navbar;