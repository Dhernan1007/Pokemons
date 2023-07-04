// import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { postPokemon, getTypePokemon } from '../../redux/actions';
// import { useDispatch, useSelector } from 'react-redux';
// import img1 from '../../img/digimon-survive-recruit.jpg';
// import img2 from '../../img/guilmon.jpeg';
// import img3 from '../../img/terriermon.jpeg';

// // Validaciones
// function validate(input) {
//   const errors = {};

//   if (!input.name) {
//     errors.name = 'El nombre no puede estar vacío';
//   }

//   if (input.name.length < 3 || input.name.length > 12) {
//     errors.name = 'El nombre debe contener de 3 a 12 letras';
//   }

//   if (
//     isNaN(input.hp) ||
//     isNaN(input.attack) ||
//     isNaN(input.defense) ||
//     isNaN(input.speed) ||
//     isNaN(input.height) ||
//     isNaN(input.weight)
//   ) {
//     errors.hp = 'Este campo solo admite valores numericos';
//     errors.attack = 'Este campo solo admite valores numericos';
//     errors.defense = 'Este campo solo admite valores numericos';
//     errors.speed = 'Este campo solo admite valores numericos';
//     errors.height = 'Este campo solo admite valores numericos';
//     errors.weight = 'Este campo solo admite valores numericos';
//   }

//   if (
//     input.hp > 999 ||
//     input.attack > 999 ||
//     input.defense > 999 ||
//     input.speed > 999 ||
//     input.height > 999 ||
//     input.weight > 999
//   ) {
//     errors.hp = 'Este campo solo admite valores hasta 999';
//     errors.attack = 'Este campo solo admite valores hasta 999';
//     errors.defense = 'Este campo solo admite valores hasta 999';
//     errors.speed = 'Este campo solo admite valores hasta 999';
//     errors.height = 'Este campo solo admite valores hasta 999';
//     errors.weight = 'Este campo solo admite valores hasta 999';
//   }

//   if (input.type.length === 0) {
//     errors.type = 'Debes elegir al menos un tipo';
//   }
//   return errors;
// }

// const Form = () => {
//   const dispatch = useDispatch();
//   const typesPokes = useSelector((state) => state.allType);
//   const history = useHistory();

//   // Validaciones
//   const [errors, setErrors] = useState({});

//   const [initialFormState] = useState({
//     name: '',
//     hp: '',
//     attack: '',
//     defense: '',
//     speed: '',
//     height: '',
//     weight: '',
//     type: [],
//     createdInDb: true,
//   });

//   const [input, setInput] = useState({ ...initialFormState });

//   useEffect(() => {
//     dispatch(getTypePokemon());
//   }, [dispatch]);

//   const handleInputChange = ({ target }) => {
//     const { name, value } = target;
//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { errors, ...sinErrors } = initialFormState;
//     const result = validate(sinErrors);
//     setInput({
//       ...input,
//       errors: result,
//     });

//     if (Object.keys(result).length) {
//       console.log('Formulario válido');
//     }
//     dispatch(postPokemon(input));
//     setInput({ ...initialFormState });
//     history.push('/home');
//   };

//   return (
//     <div>
//       <Link to="/home">
//         <button>Back</button>
//       </Link>
//       <h1>Crear un nuevo Pokémon</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={input.name}
//             placeholder="Nombre"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.name && <p>{errors.name}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="hp"
//             value={input.hp}
//             placeholder="HP"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.hp && <p>{errors.hp}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="attack"
//             value={input.attack}
//             placeholder="Ataque"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.attack && <p>{errors.attack}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="defense"
//             value={input.defense}
//             placeholder="Defensa"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.defense && <p>{errors.defense}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="speed"
//             value={input.speed}
//             placeholder="Velocidad"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.speed && <p>{errors.speed}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="height"
//             value={input.height}
//             placeholder="Altura"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.height && <p>{errors.height}</p>}
//         </div>
//         <div>
//           <input
//             type="number"
//             name="weight"
//             value={input.weight}
//             placeholder="Peso"
//             onChange={handleInputChange}
//             required
//           />
//           {errors.weight && <p>{errors.weight}</p>}
//         </div>
//         <div>
//           <select
//             className="types"
//             value={input.type}
//             onChange={handleInputChange}
//             name="type"
//             required
//           >
//             <option value="">Select By Types</option>
//             {typesPokes &&
//               typesPokes.map((pok) => (
//                 <option key={pok.id} value={pok.name}>
//                   {pok.name}
//                 </option>
//               ))}
//           </select>
//           {errors.type && <p>{errors.type}</p>}
//         </div>
//         <button type="submit">Crear</button>
//       </form>
//       <img src={img1} alt="img" width="200px" height="auto" />
//       <img src={img2} alt="img" width="200px" height="auto" />
//       <img src={img3} alt="img" width="200px" height="auto" />
//     </div>
//   );
// };

// export default Form;

