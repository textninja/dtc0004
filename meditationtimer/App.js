import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Meditation Timer"
          component={MeditateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MeditateScreen() {

  const timerTotal = 10*60;
  const [meditationStartTime, setMeditationStartTime] = useState(null);

  const [remaining, setRemaining] = useState(timerTotal);
  const displayTime = `${remaining/60|0}:${(remaining%60).toString().padStart(2, "0")}`;

  const [meditationFinished, setMeditationFinished] = useState(false);

  if (remaining == 0 && !meditationFinished) {
    setMeditationFinished(true);
    ding();
  }

  const isMeditating = meditationStartTime;

  useEffect(() => {
    let interval = setInterval(() => {
      const currentTime = performance.now();
      const elapsed = meditationStartTime
        ? (currentTime - meditationStartTime)/1000 | 0
        : 0;
      setRemaining(Math.max(timerTotal - elapsed, 0));  
    }, 100);

    return () => clearInterval(interval);
  })

  function startMeditating() {
    setMeditationFinished(false);
    setMeditationStartTime(performance.now());
  }

  function stopMeditating() {
    setMeditationStartTime(null);
  }

  function toggleMeditation() {
    if (isMeditating) {
      stopMeditating();
    } else {
      startMeditating();
      ding();
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{displayTime}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleMeditation}>
        <Text style={styles.buttonText}>{ isMeditating ? remaining > 0 ? "Stop" : "Clear" : "Start" }</Text>
      </TouchableOpacity>
    </View>
  );
}

async function ding() {
  const ding = await Audio.Sound.createAsync(
    require("./assets/ding.wav")
  );

  ding.sound.playAsync();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 300
  },

  bigText: {
    color: "#fff",
    fontSize: 64
  },

  button: { 
    padding: 10,
    backgroundColor: "#555",
    width: "40%",
    alignItems: "center",
    marginTop: 20
  },

  buttonText: {
    color: "#fff",
    fontSize: 24
  }
});
