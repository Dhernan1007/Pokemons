import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetailPokemon } from '../../redux/actions'
import style from './Detail.module.css'

export default function Detail() {

  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(getDetailPokemon(id))
  },[dispatch, id])

  const detailPokemon = useSelector((state)=>state.detailPokemon)

 // const det = detailPokemon.type.map(e => e)

  return (
    <div className={style.detailContainer}>
    <div className={style.detailInfo}>
      <h1>Id: {detailPokemon.id}</h1>
      <h1>Name: {detailPokemon.name}</h1>
      <h1>Height: {detailPokemon.height}</h1>
      <h1>Weight: {detailPokemon.weight}</h1>
      <h1>Hp: {detailPokemon.hp}</h1>
      <h1>Attack: {detailPokemon.attack}</h1>
      <h1>Defense: {detailPokemon.defense}</h1>
      <h1>Speed: {detailPokemon.speed}</h1>
      <h1>Type: {detailPokemon.type && detailPokemon.type.map(p => (p.charAt(0).toUpperCase() + p.slice(1))).join(' / ')}</h1>
      </div>
      <div className={style.detailImage}>
      <img src={detailPokemon.image} alt="" className="card-image" />
      <button>
        <Link to='/home' style={{ textDecoration: "none" }}>Home</Link>
      </button>
    </div>
    </div>
  )
}
