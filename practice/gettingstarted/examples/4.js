import React, { useState } from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

const ScrollableApp = () => {

    const [arrayOfThings, _] = useState(
        Array.from(
            {length: 1000},
            (_, i) => (
                Math.random() > 0.9
                ? <Image source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                    width: 64,
                    height: 64
                  }} />
                : <Text key={`text-${i}`}>Endless text...</Text>
            )
        )
    );

    return (
        <View>
            <ScrollView>
                {
                    arrayOfThings
                }
            </ScrollView>
        </View>
    );

}

export default ScrollableApp; 
