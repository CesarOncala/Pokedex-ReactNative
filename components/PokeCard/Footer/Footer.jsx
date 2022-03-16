import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper'
import { Capitalize } from '../../../Functions.jsx';
import { styles } from './styles.jsx'
import { getPokemon } from '../../../services/PokemonDataService.jsx'

const Footer = (props) => {


  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  const [move, setMove] = React.useState(false);
  const handlePressMove = () => setMove(!move);

  const [evo, setEvo] = React.useState(false);
  const handlePressEvo = () => setEvo(!evo);



  const [game, setgame] = React.useState(false);
  const handlePressgame = () => setgame(!game);

  const [pokemon, setPokemon] = React.useState(props.pokemon);

  React.useEffect(() => setPokemon(props.pokemon), [props])



  return (
    <View>

      <List.Accordion
        title="Evolutions"
        left={props => <List.Icon {...props} icon="pokeball" />}
        expanded={evo}
        onPress={handlePressEvo}
        theme={{ colors: { text: 'white' } }}
        style={styles.accordion}
      >

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 0,
          alignItems: 'center',
          backgroundColor: '#1e1e1e',
          justifyContent: 'center'
        }}>

          <ScrollView horizontal={true}>
            {pokemon?.evolutions.evolutions[0].map((o, i) => {
              return <TouchableOpacity
                key={i}
                onPress={async () => {
                  props.fatherState
                    (await getPokemon(o))
                }}
                style={[pokemon.name != o ? styles.evolutions : styles.base_evolution]}
              >
                <Text style={styles.text}> {Capitalize(o)} </Text>
                <Image
                  style={{ width: 100, height: 100, marginBottom: 5 }}
                  source={{ uri: pokemon.evolutions.evolutions[1][i] }} />

              </TouchableOpacity>
            })}
          </ScrollView>
        </View>


      </List.Accordion>

      <List.Accordion
        title='Sprites'
        theme={{ colors: { text: 'white' } }}
        style={styles.accordion}
        left={props => <List.Icon {...props} icon="pokeball" />}
        expanded={expanded}
        onPress={handlePress}>
        <View style={styles.sprites_body}>
          {pokemon?.sprites.map((o, i) =>
            <Image key={i} style={{ width: 250, height: 250, marginRight: 3 }} source={{ uri: o }}
            />)}
        </View>
      </List.Accordion>

      <List.Accordion
        title="Moves"
        theme={{ colors: { text: 'white' } }}
        style={styles.accordion}
        left={props => <List.Icon {...props} icon="pokeball" />}
        expanded={move}
        onPress={handlePressMove}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexGrow: 1
        }}>
          {pokemon?.moves.map((o, i) => <Text key={i} style={styles.move}> {o} </Text>)}
        </View>
      </List.Accordion>

      <List.Accordion
        title="Games"
        theme={{ colors: { text: 'white' } }}
        style={styles.accordion}
        left={props => <List.Icon {...props} icon="pokeball" />}
        expanded={game}
        onPress={handlePressgame}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexGrow: 1
        }}>
          {pokemon?.games.map((o, i) => <Text key={i} style={styles.move}> {o} </Text>)}
        </View>
      </List.Accordion>

    </View>
  )

}

export default Footer;
