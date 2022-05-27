import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { TextInput, List } from 'react-native-paper';
import { styles } from './styles.jsx'

export const Autocomplete = ({ LoadData, data, icon, placeholder, minCharathers }) => {

    const [displayList, setdisplayList] = useState([])
    const [textinput, settextinput] = useState('')
    const [results, setresults] = useState(data);

    useEffect(() => setresults(data), [data])

    useEffect(async () => {

        if (textinput.length >= minCharathers)
            await LoadData(textinput.toLowerCase())
    }, [textinput])





    function textChange(e) {
        settextinput(e);
        if (e !== '')
            setdisplayList(results.filter(o => o.toUpperCase().includes(e.toUpperCase())).slice(0, 5))
        else
            setdisplayList([])
    }


    return (<>

        <View style={styles.background}>
            <View>
                <TextInput
                    theme={{ colors: { text: '#f0f0f0', background: '#1e1e1e', placeholder: '#f0f0f0' } }}
                    left={<TextInput.Icon
                        name="feature-search-outline" color={'white'} />}
                    placeholder={placeholder}
                    value={textinput}
                    onChangeText={(e) => textChange(e)} />
            </View>

            {displayList.map((o, i) => <List.Item key={i}
                title={o}
                onPress={() => { settextinput(o), setdisplayList([]) }}
                left={props => <List.Icon {...props} icon={icon} />}
            />)}
        </View>

    </>)
}

