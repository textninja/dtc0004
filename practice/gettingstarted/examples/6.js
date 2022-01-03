import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * To get react navigation working:
 * 
 *   npm install @react-navigation/native @react-navigation/native-stack
 *   expo install react-native-screens react-native-safe-area-context
 *
 */

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Welcome" }}
                />
                <Stack.Screen
                    name="Meditate"
                    component={MeditationScreen}
                    options={{ title: "Take a deep breath" }}
                />                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeScreen = ({ navigation }) => (
    <View>
        <Button title="Start meditating" onPress={() => navigation.navigate("Meditate")} />
    </View>
);

const MeditationScreen = ({ navigation }) => (
    <View>
        <Button title="Go home" onPress={() => navigation.navigate("Home")} />
    </View>
);

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginLeft: 20
    }
});

export default App;
