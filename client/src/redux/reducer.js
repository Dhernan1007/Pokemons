import {
    GET_ALL_POKEMON, GET_TYPE_POKEMON, GET_NAME_POKEMON,
    FILTER_BY_TYPE, FILTER_CREATED, ORDER_BY_NAME,
    ORDER_BY_ATTACK, POST_POKEMON, DETAIL_POKEMON
} from "./action-types"

const initialState = {
    allPoke: [],
    allType: [],
    allPokemon: [],
    detailPokemon: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPoke: payload,
                allPokemon: payload
            }
        case GET_NAME_POKEMON:
            return {
                ...state,
                allPoke: payload
            }
        case GET_TYPE_POKEMON:
            return {
                ...state,
                allType: payload
            }

        case FILTER_BY_TYPE:
            const allPokemons = state.allPokemon
            const statusFiltered = payload === 'all' ? allPokemons : allPokemons.filter(pokemon => pokemon.type.includes(payload.toLowerCase()))
            console.log(payload);
            return {
                ...state,
                allPoke: statusFiltered,
            }
        case FILTER_CREATED:
            const createAllPokemons = state.allPokemon
            const createdFilter = payload === "dataBase" ? createAllPokemons.filter(e => e.createdInDb) : createAllPokemons.filter(e => !e.createdInDb)
            return {
                ...state,
                allPoke: payload === "all" ? state.allPokemon : createdFilter
            }
        case ORDER_BY_NAME:
            let sortedArr = payload === 'asc' ? state.allPoke.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0;
            }) :
                state.allPoke.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                })
            return {
                ...state,
                allPoke: sortedArr
            }

        case ORDER_BY_ATTACK:
            let sortedAttack = payload === 'asc' ? state.allPoke.sort(function (a, b) {
                if (a.attack > b.attack) {
                    return 1
                }
                if (b.attack > a.attack) {
                    return -1
                }
                return 0;
            }) :
                state.allPoke.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return -1
                    }
                    if (b.attack > a.attack) {
                        return 1
                    }
                })
            return {
                ...state,
                allPoke: sortedAttack
            }
        case POST_POKEMON:
            return {
                ...state,
            }
        case DETAIL_POKEMON:
            return {
                ...state,
                detailPokemon: payload
            }


        default: return {
            ...state
        }
    }
}

export default reducer;