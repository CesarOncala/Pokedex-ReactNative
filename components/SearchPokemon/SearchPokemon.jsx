import React, { useContext, useEffect, useState } from 'react'
import { Autocomplete } from '../Autocomplete/Autocomplete'
import { getPokemonNames } from '../../services/PokemonDataService.jsx'
import { PokemonContext } from '../Contexts/PokemonContext.jsx'
import { Capitalize } from '../../Functions'


export const SearchPokemon = () => {

    const { updatePokemon } = useContext(PokemonContext)

    const [pokemonNames, setPokemonNames] = useState(['']);

    useEffect(async () => setPokemonNames((await getPokemonNames())?.map(o => Capitalize(o))), [])


    return (
        <Autocomplete 
        data={pokemonNames} 
        icon={'pokeball'} 
        LoadData={updatePokemon} 
        placeholder={'Search Pokémon'} 
        minCharathers={3}
        />
    )


}