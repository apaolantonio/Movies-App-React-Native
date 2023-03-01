import React from 'react';
import {Button, View, Animated} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          height: 150,
          width: 150,
          backgroundColor: 'blue',
          borderWidth: 10,
          borderColor: 'white',
          opacity,
        }}></Animated.View>

      <Button title="Fade In" onPress={() => fadeIn()} />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
};
