import axios from 'axios';
import { GET_ALL_POKEMON, GET_TYPE_POKEMON,  
    GET_NAME_POKEMON, FILTER_BY_TYPE,
    FILTER_CREATED, ORDER_BY_NAME, 
    ORDER_BY_ATTACK, DETAIL_POKEMON} from './action-types';

//todos los pokemon
export const getAllpokemon = ()=>{
    return async(dispatch)=>{
    const apiData = await axios(`http://localhost:3001/pokemons`)
    const allPoke = apiData.data
    dispatch({
        type: GET_ALL_POKEMON, payload: allPoke
    })
}
}
//todos los pokemon
export const getDetailPokemon = (id)=>{
    return async(dispatch)=>{
    const apiData = await axios(`http://localhost:3001/pokemons/${id}`)
    const allDetail = apiData.data
    dispatch({
        type: DETAIL_POKEMON, payload: allDetail
    })
}
}

//busqueda por nombres
export function getNamePokemon(name){
    return async(dispatch)=>{
        try{
    const dataName = await axios(`http://localhost:3001/pokemons/name?name=${name}`)
    const allDataName = dataName.data
    dispatch({
        type: GET_NAME_POKEMON, payload: [allDataName]
    })
    } catch (error){
        console.log(error)
    }
}
}


//traigo los tipos de Pokemon
export function getTypePokemon(){
    return async(dispatch)=>{
        const dataType = await axios('http://localhost:3001/types')
        const allType = dataType.data
        console.log(allType, 'hola soy tom');
         dispatch({
            type: GET_TYPE_POKEMON, payload: allType
        })
    }
}

// para crear el pokemon
export function postPokemon(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/pokemons', payload) // el payload se coloca acá porque es lo que va a recibir del front
        // console.log(response);
        return response;
    }
}

export function filterByTypes(payload){ //ojito si esta repetida
    return{
        type: FILTER_BY_TYPE,
        payload,
    }
}

//ordenamiento por origen
export function filterCreatedPoke(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}
export function orderByAttack(payload){
    return{
        type: ORDER_BY_ATTACK,
        payload
    }
 }
// export function orderOriginPoke(payload){
//     return{
//         type: ORDER_BY_ORIGIN_POKE,
//         payload
//     }
// }