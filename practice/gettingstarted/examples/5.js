import React, { useState } from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const names = "Liam Olivia Noah Emma Oliver Ava Elijah Charlotte William Sophia James Amelia Benjamin Isabella Lucas Mia Henry Evelyn Alexander Harper"
    .split(" ");

const firstLetters = [...names.reduce((letters, name) => {
    letters.add(name[0]);
    return letters;
}, new Set)].sort();

const sections = firstLetters.map(letter => (
    {
        title: letter,
        data: names.filter(n => n[0] == letter)
    }
));

const App = () => {
    return (
        <View>
            <SectionList
                style={{marginTop: 40}}
                sections={sections}
                renderItem={({item}) => <Text style={style.listItem}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={style.listSectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};


const style = StyleSheet.create({
    listItem: {
        padding: 10,
        fontSize: 18,
        height: 44
    },

    listSectionHeader: {
        fontSize: 18,
        paddingLeft: 10,
        backgroundColor: "#ddd"
    }
})

export default App;
