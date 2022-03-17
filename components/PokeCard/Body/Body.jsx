import React from 'react';
import { Text, View } from 'react-native';
import { Capitalize } from '../../../Functions.jsx';
import { styles } from './style.jsx'
import translate from 'translate-google-api'

const Body = (props) => {


      const [description, setdescription] = React.useState('');


      async function getTranslate(text, lang) {
            return await translate(text, { to: lang }).then(o => o)
      }

      React.useEffect(async () => {
           setdescription(await getTranslate(props.pokemon?.general?.description,'en') +
            '\n\n' + await getTranslate(props.pokemon?.general?.description,'pt'))
      }, [props])


      return (<View style={styles.info_group}>

            <View style={styles.elementGroup}>
                  <Text style={[styles.value, { textAlign: 'justify' }]}>
                        {description}
                  </Text>
            </View>


            <View style={styles.elementGroup}>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Types: </Text>
                        {props.pokemon?.types}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Habilities: </Text>
                        {props.pokemon?.abilities}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Lengendary: </Text>
                        {props.pokemon?.general?.lengendary.toString()}
                  </Text>
                  <Text style={styles.value}>
                        <Text style={styles.text}>Mythical: </Text>
                        {props.pokemon?.general?.mythical.toString()}
                  </Text>

                  <Text style={styles.value}>
                        <Text style={styles.text}>Shape: </Text>
                        {props.pokemon?.general?.shape}
                  </Text>



                  <Text style={styles.value}> <Text style={styles.text}>Height: </Text>  {props.pokemon?.height}
                  </Text>
                  <Text style={styles.value}> <Text style={styles.text}>Weight: </Text>  {props.pokemon?.weight}
                  </Text>

            </View>



            <View style={styles.elementGroup}>
                  {props.pokemon?.stats.map((o, i) =>
                        <Text key={i} style={styles.value}>
                              <Text style={styles.text}>  {Capitalize(o.stat)} : </Text>
                              {o.base_stat}
                        </Text>)}
            </View>
      </View>)
}

export default Body;



