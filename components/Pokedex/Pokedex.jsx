import React from 'react'
import PokeCard from '../PokeCard/PokeCard.jsx'
import { ScrollView, StyleSheet, View, } from 'react-native'
import { PokemonContextProvider } from '../Contexts/PokemonContext.jsx'
import { SearchPokemon } from '../SearchPokemon/SearchPokemon.jsx'



export const Pokedex = () => {

  return (
    <>
      <ScrollView>
        <View style={styles.background}>
          <PokemonContextProvider>
            <SearchPokemon />
            <PokeCard />
          </PokemonContextProvider>
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


