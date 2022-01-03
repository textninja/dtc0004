import React from 'react';
const { useState } = React;
import { StyleSheet, Text, TextInput, View } from 'react-native';

const defaultName = "Joe";

const reallyBigText = {
  fontSize: 40
};


const bigText = {
  fontSize: 20
}

const App = () => {

  const [name, setName] = useState(defaultName);

  const displayName = name ? name : "friend";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={reallyBigText}>Hello, {displayName}!</Text>

      <Text style={{...bigText, marginTop: 40, marginBottom: 20}}>Try changing your name.</Text>
      <TextInput
        style={{...bigText, borderColor: "black", borderWidth: 1, padding: 10, width: 200 }}
        defaultValue={defaultName}
        onChangeText={(text) => setName(text)} />
    </View>
  );
}

export default App;
