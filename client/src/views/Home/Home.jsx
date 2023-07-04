
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { filterByStatus, getAllpokemon, getTypePokemon} from '../../redux/actions'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import SearchBar from '../../components/searchBar/SearchBar'
import Paginate from '../../components/paginate/Paginate'
// import { getTypePokemon } from '../../redux/actions'

export default function Home(props) {

  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.allPoke)
  const allType = useSelector((state) => state.allType)

  //Estados del paginado
  const [currentPage, setCurrentPage] = useState(1) //pagina actual y me setea esta 
  const [pokemonPerPage] = useState(12) // va a setear cuantos pokes quiero por pagina
//constantes del paginado donde asocio las pag con los pokes por pag
  const indexOfLastPokemon = currentPage * pokemonPerPage //12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage //0 
  const currentPokemon = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  // me va a ayudar al renderizado
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
//fin de paginado

  // ciclo que maneja todos los pokemon
  useEffect(() => {
    dispatch(getAllpokemon())
  }, [dispatch])

  //ciclo que busca por tipos
  useEffect(() => {
    dispatch(getTypePokemon())
  }, [dispatch])



  // const handlerFilterByTypes = (event)=>{
  //   dispatch(getTypePokemon(event.target.value))
  // }

  //permite volver a cargar todos los pokemons 
  function handlerClick(event) {
    event.preventDefault(); // para que no se recargue por defecto y asi no me rompa
    dispatch(getAllpokemon());
  }

  //filtro de los tipos
  function handlerFilterStatus(event) {
    dispatch(filterByStatus(event.target.value))
  }


  return (
    <div>

      <SearchBar />

      {/* <Link to='/create' style={{ textDecoration: "none" }}>Create Pokemon</Link> */}
      <button onClick={(event) => { handlerClick(event) }}>Reload Pokemon</button>{/* volver a cargar todos los pokemon */}


      {/* paginado */}
      <div>
        <Paginate
          pokemonPerPage={pokemonPerPage}
          allPokemons={allPokemons.length}
          paginate={paginate}
        />
      </div>

      <select className='order'>
        <option value='asc'>Ascendent</option>
        <option value='desc'>Descendent</option>
      </select>

      <div>

        <select className='types' onChange={(event) => handlerFilterStatus(event)} defaultValue='all'>
          <option value='all' disabled>Select By Types</option>
          {allType.length > 0 &&
            allType.map((pok) => (
              <option key={pok.id} value={pok.name}>
                {pok.name}
              </option>
            ))}
        </select>

        {/*
        
        como no se debe hacer
         <select className='types' 
      onChange={(e)=>handlerFilterStatus(e)} defaultValue='All'> 

      <option value='All' disabled>Select By Types</option>
      {
        allType?
        allType.map(pok =>(
          <option key={pok.id} value={pok.name}>{pok.name}</option>
        ))
        : null
      }
      </select> 
      
      
      En el componente Home, en la función getAllpokemon, el valor de allType estaba envuelto en un array adicional debido a [useSelector((state) => state.allType)]. Esto se modificó a useSelector((state) => state.allType) para obtener directamente el array de tipos sin la necesidad de un array adicional.

En el estado inicial del reducer, la propiedad allType estaba inicializada como un array que contenía otro array, lo cual no es necesario. Se modificó para que allType se inicialice como un array vacío: allType: [].

En el mapeo de los tipos en el select, se agregó una verificación para asegurarse de que allType tenga elementos antes de realizar el mapeo. Esto se hizo utilizando allType.length > 0. Si allType tiene elementos, se realizó el mapeo y se generaron las opciones del select correctamente. Esto evita errores en caso de que allType esté vacío o no se haya cargado correctamente.

Estos cambios se realizaron para corregir posibles errores y asegurar un funcionamiento correcto del mapeo de los tipos de Pokémon en el componente Home.
      
      */}

      </div>

      <select>
        <option value='all'>All Pokemon</option>
        <option value='api'>Pokemon Api</option>
        <option value='dataBase'>created Pokemon</option>
      </select>

      {/* renderizar cartas */}
      {currentPokemon?.map(pok => {
        return (
          <div key={pok.id}>

            <Card id={pok.id} name={pok.name} type={pok.type} image={pok.image} height={pok.height} weight={pok.weight} hp={pok.hp} attack={pok.attack} defense={pok.defense} speed={pok.speed} />

          </div>
        )
      })}


    </div>
  )
}
