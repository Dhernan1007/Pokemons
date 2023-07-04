import { GET_ALL_POKEMON, GET_TYPE_POKEMON, GET_NAME_POKEMON, FILTER_BY_STATUS} from "./action-types"

const initialState ={
    allPoke: [],
    allType: [],
    allPokemon: []
}

const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPoke: payload, 
                allPokemon: payload
            } 
        case GET_NAME_POKEMON:
            return{
                ...state,
                allPoke: payload
            }
        case GET_TYPE_POKEMON:
            return {
                ...state,
                allType: payload
            }
        case FILTER_BY_STATUS:
            const allPokemons = state.allPokemon
            const statusFiltered = payload === 'all' ? allPokemons : allPokemons?.filter(elem =>elem.type === payload)
            return{
                ...state,
                allPoke: statusFiltered,
                
            }

        default: return{
            ...state
        }
    }
}

export default reducer;

