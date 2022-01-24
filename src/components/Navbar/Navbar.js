import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>  
        <ul className="nav">
            <li><NavLink to="/"><i className="fa fa-search"></i>Todas</NavLink></li>
            <li><NavLink to="/news"><i className="fa fa-newspaper-o"></i>Notícias</NavLink></li>
            <li><NavLink to="/images"><i className="fa fa-picture-o"></i>Imagens</NavLink></li>
            <li><NavLink to="/videos"><i className="fa fa-play"></i>Vídeos</NavLink></li>
        </ul>
    </>
  );
}


