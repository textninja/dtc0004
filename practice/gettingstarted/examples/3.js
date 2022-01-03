import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Translator = () => {
    const [text, setText] = useState('');

    return (
        <View style={style.container}>
            <Text>Translate some text!</Text>

            <TextInput
                style={ style.input }
                onChangeText={ t => setText(t) }
                defaultValue=""
            />

            <Text>
                { translate(text) }
            </Text>
        </View>
    );
};


function translate(text) {
    return text.replace(/\w+/g, text => {
        let t = [...text].reverse();
        let ft = t.shift();
        return [...t, ft, "ay"].join``;
    });
}

const style = {
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        marginBottom: 10,
        padding: 5
    }
};

export default Translator;
