import React, { useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const names = "Liam Olivia Noah Emma Oliver Ava Elijah Charlotte William Sophia James Amelia Benjamin Isabella Lucas Mia Henry Evelyn Alexander Harper"
    .split(" ")
    .map(i => ({ key: i }));

const App = () => {
    const [people, _] = useState(names);

    return <FlatList
        data={names}
        renderItem={({item}) => <Text style={style.flatListItem}>{item.key}</Text>}
    />
};


const style = StyleSheet.create({
    flatListItem: {
        padding: 20,
        fontSize: 20,
        textAlign: "center"
    }
})

export default App;
