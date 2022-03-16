import React, { useState } from 'react'
import PokeCard from './PokeCard/PokeCard.jsx'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Autocomplete } from './Autocomplete'
import { getPokemon } from '../services/PokemonDataService.jsx'

export const Pokedex = () => {


  const [pokemon, setPokemon] = React.useState(undefined);
  const [textinput, settextinput] = useState('')

  async function updatePokemon(q) {
    setPokemon((await getPokemon(q)))
  }

  React.useEffect(() => updatePokemon(25), [])


  React.useEffect(() => {

    if (textinput.length >= 3)
    updatePokemon(textinput.toLowerCase())
  }, [textinput])


  return (
    <>
      <ScrollView>
        <View style={styles.background}>
          <Autocomplete settextinput={settextinput} textinput={textinput} />
          <PokeCard pokemon={pokemon} />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  background: {
    backgroundColor: '#1e1e1e',
    position: 'relative'
  }
})


