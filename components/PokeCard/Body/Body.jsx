import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Capitalize } from '../../../Functions.jsx';
import { styles } from './style.jsx'
import translate from 'translate-google-api'
import { PokemonContext } from '../../Contexts/PokemonContext.jsx';

const Body = () => {


      const [description, setdescription] = React.useState('');
      const { pokemon } = useContext(PokemonContext)

      async function getTranslate(text, lang) {
            // try {
            //       return await translate(text, { to: lang }).then(o => o)
            // } catch (error) {
            //       return ''
            // }
            return ''
      }

      React.useEffect(async () => {
            setdescription(await getTranslate(pokemon?.general?.description, 'en') +
                  '\n\n' + await getTranslate(pokemon?.general?.description, 'pt'))
      }, [pokemon])


      return (<View style={styles.info_group}>

            <View style={styles.elementGroup}>
                  {pokemon?.stats.map((o, i) =>
                        <Text key={i} style={[styles.value, styles[`stats${i + 1}`]]}>
                              <Text style={styles.text}>  {Capitalize(o.stat)} : </Text>
                              {o.base_stat}
                        </Text>)}
            </View>


            <View style={styles.elementGroup}>

                  <Text style={styles.value}>
                        <View style={[styles.text, styles.types]}>Types: </View>
                        {pokemon?.types?.split(',')?.
                        map((o, i) =><Text 
                        style={[styles.type,styles[o.trim()]]}
                        key={i}
                        >{o}</Text>)}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Habilities: </Text>
                        {pokemon?.abilities}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Lengendary: </Text>
                        {pokemon?.general?.lengendary.toString()}
                  </Text>
                  <Text style={styles.value}>
                        <Text style={styles.text}>Mythical: </Text>
                        {pokemon?.general?.mythical.toString()}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Shape: </Text>
                        {pokemon?.general?.shape}
                  </Text>



                  <Text style={styles.value}> <Text style={styles.text}>Height: </Text>  {pokemon?.height}
                  </Text>
                  <Text style={styles.value}> <Text style={styles.text}>Weight: </Text>  {pokemon?.weight}
                  </Text>

                  {
                        pokemon?.helditems !== '' && <Text style={styles.value}> <Text style={styles.text}>Held Items: </Text>  {pokemon?.helditems}
                        </Text>

                  }

            </View>



            <View style={styles.elementGroup}>
                  <Text style={[styles.value, { textAlign: 'justify' }]}>
                        {description}
                  </Text>
            </View>


      </View>)
}

export default Body;



