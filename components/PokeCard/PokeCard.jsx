import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import Footer from './Footer/Footer.jsx'


const PokeCard = (props) => {

  const [pokemon, setpokemon] = useState(props.pokemon)

  useEffect(async () => {
    setpokemon(props.pokemon);
  }, [props.pokemon])


  return (
    <View>
      <Card style={styles.layout}>
        <Header pokemon={pokemon} />
        <Card.Content>
          <Body pokemon={pokemon} />
          <Footer fatherState={setpokemon} pokemon={pokemon} />
        </Card.Content>
      </Card>
    </View>
  )
}


export default PokeCard;


const styles = StyleSheet.create({

  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
})

