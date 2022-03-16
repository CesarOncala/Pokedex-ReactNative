import React, { useEffect, useState } from 'react'
import {  StyleSheet, View } from 'react-native'
import { TextInput, List } from 'react-native-paper';
import { Capitalize} from '../Functions.jsx';

const axios = require('axios');


export const Autocomplete = (props) => {

    const [results, setresults] = useState([]);
    const [displayList, setdisplayList] = useState([])
  

    useEffect(async () => {

        let getitems = async (url) => {
            return await axios.get(url)
        }

        let result = null;
        let aux = []
        do {

            if (result === null)
                result = await getitems("https://pokeapi.co/api/v2/pokemon")
            else
                result = await getitems(result.data.next)

            aux = [...aux, ...result.data.results
                .reduce((Ac, ac) => Ac.concat(ac.name), [])]

        } while (result.data.next != null);

        setresults(aux.map(o=> Capitalize(o)));
    }, [])


    function textChange(e) {
        props.settextinput(e);
        if(e!== '')
                setdisplayList(results.filter(o => o.toUpperCase().includes(e.toUpperCase())).slice(0,5))
        else
            setdisplayList([])
    }


    return (<>

    <View style={styles.background}>
        <View>
            <TextInput
                theme={{ colors: {text :'#f0f0f0', background:'#1e1e1e',placeholder :'#f0f0f0'} }}
            left={<TextInput.Icon 
                name="feature-search-outline" color={'white'} />}
                    placeholder="Search pokémon"
                    value={props.textinput}
                    
                    onChangeText={(e) => textChange(e)} />
        </View>
        
                {displayList.map((o, i) => <List.Item key={i}
                    title={o}
                    onPress={()=>{props.settextinput(o), setdisplayList([])}}
                    left={props => <List.Icon {...props} icon="pokeball" />}
                />)}
    </View>

    </>)
}

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#f0f0f0',
        position:'relative',
        marginTop:20
    },
    input:{
        backgroundColor: '#1e1e1e'
    }

})