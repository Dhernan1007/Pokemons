import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetailPokemon } from '../../redux/actions'

export default function Detail() {

  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(getDetailPokemon(id))
  },[dispatch, id])

  const detailPokemon = useSelector((state)=>state.detailPokemon)

 // const det = detailPokemon.type.map(e => e)

  function typePok(p){
    return (p.charAt(0).toUpperCase() + p.slice(1))
  }

  return (
    <div>
    <div>
      <h1>Id: {detailPokemon.id}</h1>
      <h1>Name: {detailPokemon.name}</h1>
      <h1>Height: {detailPokemon.height}</h1>
      <h1>Weight: {detailPokemon.weight}</h1>
      <h1>Hp: {detailPokemon.hp}</h1>
      <h1>Attack: {detailPokemon.attack}</h1>
      <h1>Defense: {detailPokemon.defense}</h1>
      <h1>Speed: {detailPokemon.speed}</h1>
      <h1>Type: {detailPokemon.type && detailPokemon.type.map(e => typePok(e)).join(' / ')}</h1>
      </div>
      <div>
      <img src={detailPokemon.image} alt="" className="card-image" />
    </div>
    <div>
      <button>
        <Link to='/home' style={{ textDecoration: "none" }}>Home</Link>
      </button>
    </div>
    </div>
  )
}
