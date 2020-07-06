import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Lottie from 'lottie-react-native';

import animation from './animation.json';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, justifyContent: 'center'}}>
        Exemplo de animação com Lottie
      </Text>
      <Lottie
        resizeMode="contain"
        autoSize
        source={animation}
        autoPlay
        loop
        style={{width: 450}}
      />
    </SafeAreaView>
  );
}
