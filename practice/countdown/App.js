import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Countdown"
          component={CountdownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CountdownScreen(props) {

  const [time, setTime] = useState(10*60);
  const [isMeditating, setMeditating] = useState(false);
  const startMeditating = () => { setTime(t => t-1); setMeditating(true); };
  const stopMeditating = () => { setMeditating(false); setTime(10*60); };
  
  const displayTime = (time/60|0) + ":" + (time%60).toString().padStart(2, "0");

  const countdownTimer = useEffect(() => {
    const i = setInterval(() => isMeditating ? setTime(time => time-1) : null, 1000);
    return () => clearInterval(i); 
  });

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{displayTime}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => isMeditating ? stopMeditating() : startMeditating()}>
          <Text>{isMeditating ? "Stop" : "Start"} meditating</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 48
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10
  }
});
