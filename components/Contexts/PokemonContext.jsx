import React, { createContext,useEffect } from 'react'
import { getPokemon } from '../../services/PokemonDataService.jsx'

const PokemonContext = createContext({});


const PokemonContextProvider = (props) => {

    const [pokemon, setPokemon] = React.useState(undefined);
    async function updatePokemon(q) {
        setPokemon((await getPokemon(q)))
    }

    useEffect(() => updatePokemon(468), [])

  
    return (
        <PokemonContext.Provider value={{ pokemon,updatePokemon }}>
            {props.children}
        </PokemonContext.Provider>
    )

}

export { PokemonContext, PokemonContextProvider };