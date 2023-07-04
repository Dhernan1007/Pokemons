import React from 'react'
import {useSelector } from 'react-redux'
import Card from '../card/Card'

export default function Cards(props){ 
    const pokemons = useSelector(state => state.allPoke)
    // console.log(pokemons);
    return <div>
{
        pokemons.map((pokemon)=>{
        return(
        <Card
            key = {pokemon.id}
            id = <label>Id: {pokemon.id}</label>
            name = <label>Name: {pokemon.name}</label> 
            height = <label>Height: {pokemon.height}</label>
            weight = <label>Weight: {pokemon.weight}</label>
            hp = <label>Hp: {pokemon.hp}</label>
            attack = <label>Attack: {pokemon.attack}</label>
            defense = <label>Defense: {pokemon.defense}</label> 
            speed = <label>Speed: {pokemon.speed}</label>
            type =<label>Type: {pokemon.type}</label>
            image = {pokemon.image}
        />
        )
    })}
</div>
}
