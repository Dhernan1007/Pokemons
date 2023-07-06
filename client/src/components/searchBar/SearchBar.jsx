import React, { useState } from 'react';
import { getNamePokemon } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import style from './searchBar.module.css'


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  // Guarda en mi estado local lo que se escribió en el input
  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNamePokemon(name));
    setName('');
  }

  return (
    <div>
      <div className={style.searchInput}>
      <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
      </div>
    </div>
  );
}
