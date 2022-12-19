import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = ({ pokes }) => (
   <div className="Pokedex">
      <h3 className="Pokedex-title">Pokedex</h3>
      <div className="Pokedex-card">
         {pokes.map(p => (
            <Pokecard
               key={p.id}
               id={p.id}
               name={p.name}
               type={p.type}
               exp={p.base_experience} />
         ))}
      </div>
   </div>
)

export default Pokedex