import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import Footer from './Footer/Footer.jsx'



const PokeCard = () => {
  return (
    <View>
      <Card style={styles.layout}>
        <Header />
        <Card.Content>
          <Body />
          <Footer />
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

