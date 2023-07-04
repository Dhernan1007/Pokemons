import React, { useState } from 'react';
import {getNamePokemon} from '../../redux/actions'
import { useDispatch } from 'react-redux';


export default function SearchBar() {
const dispatch = useDispatch()
const [name, setName] = useState('')


//guarda en mi estado local lo que paso por input
function handleInputChange(event){
  event.preventDefault()
  setName(event.target.value)
  // console.log(name);
}

/*name va a ser mi estado local --> voy a ir guardando lo 
que está tipeando el usuario en mi estado local name */
function handleSubmit(event){
  event.preventDefault()
  dispatch(getNamePokemon(name))
  setName('') /* --> devuelve el input en blanco luego de la busqueda */
}

  return (
    <div>
      <input
        type ="text"
        placeholder='Search Pokemon'
        onChange={(e)=>handleInputChange(e)}
        value = {name} /* --> asocia el estado al input para luego modificarlo (en este caso lo hago para devolver el input en blanco luego)  */
      />
      <button type='submit' onClick={(e)=>handleSubmit(e)} />
    </div>
  );
};



// const currentvideogames = allvideogames.slice(indexOfFirstvideogames, indexOfLastvideogames)
// const handleButton = (event) => {
//         event.preventDefault()
//         if (name.trim() === "") {
//             // El campo de entrada está vacío, no se realiza la búsqueda
//             return;
//           }
//          dispatch(searchByName(name))
//         .then(() => {returnToFirstPage()})
//     }