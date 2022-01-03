import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Audio } from 'expo-av';

async function playSound() {
  const ding = await Audio.Sound.createAsync(
    require('./assets/ding.wav')
  );

  await ding.sound.playAsync();
}

export default function App() {
  return (
    <View style={{ backgroundColor: "#000", padding: 50, flex: 1, justifyContent: "center" }}>
      <TouchableHighlight style={styles.button} onPress={playSound}>
        <Text style={{ color: "#fff" }}>Play a sound</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "#0088cc",
    alignContent: "center",
    display: "flex",
    alignItems: "center",
  }
})
