import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    evolutions: {
      display: 'flex',
      flexDirection: 'column-reverse',
      backgroundColor: '#1e1e1e',
      marginBottom: 12,
      marginTop: 8,
      marginRight: 2

    },
    base_evolution: {
      display: 'flex',
      borderColor: 'green',
      borderWidth: 2,
      flexDirection: 'column-reverse',
      backgroundColor: '#1e1e1e',
      marginBottom: 12,
      marginTop: 8
    },
    move: {
      backgroundColor: '#1e1e1e',
      borderColor: 'white',
      borderWidth: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      marginRight: 10,
      padding: 3,
      margin: 3
    },
    accordion: {
      backgroundColor: '#1e1e1e',
      color: 'white'
    },
    text: {
      color: '#f0f0f0',
      fontWeight: 'bold',
      textShadowRadius: 6,
      textShadowColor: 'black'
    },
    sprites_body: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingLeft: 0
    },

  })

