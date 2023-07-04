import React from 'react';
import styles from './paginate.module.css'; // Importar el módulo de estilos

export default function Paginate({ pokemonPerPage, allPokemons, paginate, activePage }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className={styles.paginate}> {/* Utilizar la clase CSS desde el módulo */}
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div className={styles.number} key={number}>
              <p onClick={() => paginate(number)} className={number === activePage ? styles.active : ''}>
                {number}
              </p>
            </div>
          ))}
      </ul>
    </nav>
  );
}