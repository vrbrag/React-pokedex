import React from 'react';
import Pokedex from './Pokedex'
import pokes from './pokelist'

function App() {
   return (
      <div className="App">
         <Pokedex pokes={pokes} />

      </div>
   )
}

export default App