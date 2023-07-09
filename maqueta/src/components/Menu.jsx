import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#">
            <FaHome className="menu-icon" />
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <FaInfoCircle className="menu-icon" />
            Acerca de
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <FaBriefcase className="menu-icon" />
            Servicios
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <FaEnvelope className="menu-icon" />
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
