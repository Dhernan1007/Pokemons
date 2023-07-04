import React, { useState } from 'react';
import {getNamePokemon} from '../../redux/actions'
import { useDispatch } from 'react-redux';


export default function SearchBar() {
const dispatch = useDispatch()
const [name, setName] = useState('')

function handleInputChange(event){
  event.preventDefault()
  setName(event.target.value)
  // console.log(name);
}
function handleSubmit(event){
  event.preventDefault()
  dispatch(getNamePokemon(name))
}

  return (
    <div>
      <input
        type ="text"
        placeholder='Search Pokemon'
        onChange={(e)=>handleInputChange(e)}
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