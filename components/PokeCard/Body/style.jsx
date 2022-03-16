import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({


    elementGroup: {
          marginBottom: 12,
          borderRadius: 15,
          backgroundColor: '#1e1e1e',
          alignItems: 'flex-start',
          padding: 7,
          borderColor: 'black',
          borderWidth: 3,
          flexGrow: 0.9
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
})