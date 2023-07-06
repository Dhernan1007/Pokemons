import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
//import SearchBar from '../searchBar/SearchBar';

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <header className={style.container}>
      <NavLink to = "/home">
          <img className={style.imgPoke} src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' alt='Logo Pokedex'/>
      </NavLink>
      </header>
    <div className ={style.navbuttons}>
    <NavLink to = "/about" className = {style.navbarlink}>
      About
      </NavLink>
      
    </div>
    </nav>
  )
}