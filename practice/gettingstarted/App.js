import React from 'react';
const { useState } = React;
import {
  Text, Button, View,
  StyleSheet
} from 'react-native';

const Cat = () => {
    let [isHungry, setHungry] = useState(Math.random()>0.5);

    return (
      <View>
        <Text>I am a cat. I am { isHungry ? "hungry." : "not hungry." }</Text>
        <Button
          disabled={!isHungry}
          onPress={() => setHungry(false)}
          title="Feed me!" />
      </View>
    );
};


const App = () => (
  <View style={{ flex: 1, marginTop: 60, marginLeft: 20 }}>
    <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to the cat cafe!</Text>
    {
      Array.from({ length: 5 }, () => <Cat/>)
    }
  </View>
);



export default App;
