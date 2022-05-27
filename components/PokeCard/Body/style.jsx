import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


      elementGroup: {
            marginBottom: 12,
            borderRadius: 15,
            backgroundColor: '#1e1e1e',
            padding: 7,
            borderColor: 'black',
            borderWidth: 3,
            flexGrow: 0.9,
            // alignItems:'center'
            textAlign:'center'
      },
      info_group: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexGrow: 1,
            alignSelf: 'stretch'
      },
      text: {
            color: '#f0f0f0',
            fontWeight: 'bold',
            textShadowRadius: 6,
            textShadowColor: 'black',
            paddingLeft: 0
      },
      value: {
            color: '#f0f0f0',
            marginLeft: 2,
            textShadowColor: 'black',
            textShadowRadius: 6,
      },

      stats1: {
            backgroundColor: 'rgb(34,165,34)',
            marginBottom: 7,
            borderRadius: 10,
    
      },
      stats2: {
            backgroundColor: 'rgb(173,40,62)',
            marginBottom: 7,
            borderRadius: 10,
      },
      stats3: {
            backgroundColor: 'rgb(100,107,122)',
            marginBottom: 7,
            borderRadius: 10,
      },
      stats4: {
            backgroundColor: 'rgb(16,70,185)',
            marginBottom: 7,
            borderRadius: 10,
      },
      stats5: {
            backgroundColor: 'rgb(94,63,180)',
            marginBottom: 7,
            borderRadius: 10,
      },
      stats6: {
            backgroundColor: 'rgb(21,114,131)',
            marginBottom: 7,
            borderRadius: 10,
      }
})