import axios from 'axios';
import { GET_ALL_POKEMON, GET_TYPE_POKEMON,  GET_NAME_POKEMON, FILTER_BY_STATUS, FILTER_CREATED} from './action-types';

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

export function getTypePokemon(){
    return async(dispatch)=>{
        const dataType = await axios('http://localhost:3001/types')
        const allType = dataType.data.types
        console.log(allType, 'hola soy tom');
        dispatch({
            type: GET_TYPE_POKEMON, payload: allType
        })
    }
}

export function filterByStatus(payload){
    return{
        type: FILTER_BY_STATUS,
        payload,
    }
}


export function filterCreatedPoke(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}