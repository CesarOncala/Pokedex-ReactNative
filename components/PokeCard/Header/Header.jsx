import React, { useContext } from 'react'
import { Card, Avatar, RadioButton, Checkbox } from 'react-native-paper'
import { Text, Image, View } from 'react-native'
import { styles } from './styles.jsx';
import { PokemonContext } from '../../Contexts/PokemonContext.jsx'

const Header = () => {

  const LeftContent = props => <Avatar.Icon onTouchStart={() => alert('César Henrique Alves Oncala \nEu vou vencer! 😄')} style={{ backgroundColor: 'black' }} {...props} />
  const [checked, setChecked] = React.useState(0);
  const [checkBox, setCheckBox] = React.useState(!true);
  const { pokemon } = useContext(PokemonContext)

  function Favorite() {
    setCheckBox(!checkBox);
  }



  return (
    <>
      <Card.Title title={pokemon?.name.toUpperCase()}
        subtitle={pokemon?.general.genus}
        titleStyle={styles.value}
        subtitleStyle={styles.value}
        right={() =>
          <Text style={{
            fontSize: 25,
            borderRadius: 5,
            marginRight: 12,
            backgroundColor: 'grey'
            , color: 'white'
          }}> #{pokemon?.general.order} </Text>
        }
        left={() => LeftContent({ icon: 'pokeball', size: 40, color: 'white' })}
      />

      <View style={{ display: 'flex', alignItems: 'flex-start', marginTop: 3, marginLeft: 18 }}>
        <Text style={styles.value}>Mark as Favorite</Text>
        <Checkbox
          status={checkBox ? 'checked' : 'indeterminate'}
          uncheckedColor={'grey'}
          onPress={Favorite} />
      </View>


      <Image style={styles.sprite} source={{ uri: pokemon?.sprite[checked] }} />

      <View style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>

        <View style={styles.radioBtn}>
          <Text style={styles.value}> Normal </Text>
          <RadioButton
            theme={{ colors: { text: 'white' } }}
            value={0}
            status={checked === 0 ? 'checked' : 'unchecked'}
            onPress={() => setChecked(0)}
          />
        </View>

        <View style={styles.radioBtn}>
          <Text style={styles.value} for='shiny'> Shiny </Text>
          <RadioButton
            theme={{ colors: { text: 'white' } }}
            id='shiny'
            value={1}
            status={checked === 1 ? 'checked' : 'unchecked'}
            onPress={() => setChecked(1)}
          />
        </View>
      </View>
    </>
  )
}


export default Header;














