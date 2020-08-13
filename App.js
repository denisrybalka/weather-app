import React, { useState } from "react";
import {Text, StyleSheet, ScrollView, Image, StatusBar} from "react-native";

import Header from './src/screens/Header.js';
import Main from './src/screens/Main.js';
import Info from './src/screens/Info.js';
import Weather from './src/screens/Weather.js';

import Constants from 'expo-constants'

class App extends React.Component {
  render() {
    return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor='#BFF0A8' barStyle='light-content'/>
      <Header/>
      <Main/>
      <Info/>
      <Weather/>
    </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;