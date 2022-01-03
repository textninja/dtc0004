import React from 'react';
const { useState } = React;
import { StyleSheet, Text, TextInput, View } from 'react-native';


const Cat = () => {
  return (
    <View>
        <Text>This is a cat.</Text>
    </View>
  );
}

const CatCafe = ({ cats=10 }) => {
  return (
    <View>
      <Text>Welcome to the cat cafe!</Text>

      <View style={{ marginTop: 10 }}>
      {
        Array(cats).fill(0).map(c => <Cat/>)
      }
      </View>
    </View>
  );
}

const App = () => {

  return (
    <View style={{flex: 1, justifyContent: "center", marginLeft: 20 }}>
      <CatCafe cats={5} />
    </View>
  );

};

export default App;
