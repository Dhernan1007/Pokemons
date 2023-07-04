import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
//import SearchBar from '../searchBar/SearchBar';

export default function NavBar() {
  return (
    <nav className={`${style.navbar}`}>
    <div className ={`${style.navbuttons}`}>
    <NavLink to = "/about" className = {`${style.navbarlink}`}>
      About
      </NavLink>
      <NavLink to = "/home" className ={`${style.navbarlink}`}>
        Home
      </NavLink>
    </div>
    </nav>
  )
}