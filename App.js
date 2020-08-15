import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Image, StatusBar, View, Modal, Button} from "react-native";

import Header from './src/screens/Header.js';
import Main from './src/screens/Main.js';
import Info from './src/screens/Info.js';
import Weather from './src/screens/Weather.js';
import CityManage from './src/screens/CityManage.js';

import Constants from 'expo-constants'

class App extends React.Component {

  state = {
    weather: {
      lat: null,
      lon: null,
      main: {
        name: null,
        weather: null,
        temp: null,
        humidity: null,
        pressure: null,
        temp: null,
        temp_max: null,
        temp_min: null,
        wind: null,
      },
      daily: [],
    },
  }

  componentDidMount() {
    this.getWeather();
  }

  async getWeather() {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&lang=ru&units=metric&appid=f937e142b7a3df602830e9a106d4df09')
    .then(data => data.json())
      .then(results => {
        console.log(results)
        this.setState({
          weather: {
            lat: results.coord.lat,
            lon: results.coord.lon,
            main: {
              name: results.name,
              weather: results.weather[0].description,
              temp: results.main,
              humidity: results.main.humidity,
              pressure: results.main.pressure,
              temp: results.main.temp,
              temp_max: results.main.temp_max,
              temp_min: results.main.temp_min,
              wind: results.wind.speed,
            }
          }
        })
      })

    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.weather.lat}&lon=${this.state.weather.lon}&lang=ru&units=metric&exclude=minutely,hourly&appid=f937e142b7a3df602830e9a106d4df09`)
      .then(data => data.json())
      .then(results => {
        console.log(results)
        const newWeather = results.daily.map(el => {
          return {
            temp: Math.ceil(el.temp.max),
            description: el.weather[0].description,
            icon: el.weather[0].icon,
            id: el.dt,
          }
        })
        console.log(newWeather)
        this.setState(({weather}) => {
            return {
              weather: {
                ...weather,
                daily: newWeather,
              },
            }
          })
      })
  }

  render() {
    return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent'/>
      <View>
        <Header weather={this.state.weather}/>
        <Main weather={this.state.weather}/>
        <Info weather={this.state.weather.main}/>
        <Weather weather={this.state.weather.daily}/>
      </View>
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