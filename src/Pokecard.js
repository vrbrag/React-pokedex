import React from 'react'
import './Pokecard.css'

const POKE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard({ id, name, type, exp }) {
   let imgSrc = POKE_IMG + `${id}.png`
   return (
      <div className="Pokecard">
         <div className="Pokecard-name">{name}</div>
         <img className="Pokecard-img" src={imgSrc} alt=""></img>
         <div className="Pokecard-data">Type: {type}</div>
         <div className="Pokecard-data">EXP: {exp}</div>
      </div >
   )
}

export default Pokecard