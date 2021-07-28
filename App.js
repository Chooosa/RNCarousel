/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SafeAreaView } from 'react-native';

import StartScreen from './src/screens/StartScreen/start.screen'


const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StartScreen />
    </SafeAreaView>
  );
};


export default App;