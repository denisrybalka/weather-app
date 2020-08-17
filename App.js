import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay'

import Header from './src/screens/Header.js';
import Main from './src/screens/Main.js';
import Info from './src/screens/Info.js';
import Weather from './src/screens/Weather.js';

class App extends React.Component {

  state = {
    isLoading: false,
    cityList: [],
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
        icon: null,
      },
      daily: [],
    }
  }


  componentDidMount() {
    this.getWeather("Киев");
  }

  addNewCity = (city) => {
    this.setState((state) => {
      return {
        ...state,
        cityList: [...state.cityList, city],
      }
    })
  }

  getWeather = async(name) => {
    this.setState({ isLoading:true })
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=metric&appid=f937e142b7a3df602830e9a106d4df09`)
    .then(data => data.json())
      .then(results => {
        this.setState((state) => {
          let newArray = [...state.cityList];
          if (!state.cityList.filter(el => el.name === name).length > 0) {
            newArray = [...state.cityList, {
                name: results.name,
                temp: Math.ceil(results.main.temp),
                temp_max: Math.ceil(results.main.temp_max),
                temp_min: Math.ceil(results.main.temp_min),
                id: results.dt,
              }]
          }
          return {
            ...state,
            cityList: newArray,
            weather: {
              id: results.dt, 
              lat: results.coord.lat,
              lon: results.coord.lon,
              main: {
                name: results.name,
                weather: results.weather[0].description,
                temp: Math.ceil(results.main.temp),
                humidity: results.main.humidity,
                pressure: results.main.pressure,
                temp_max: Math.ceil(results.main.temp_max),
                temp_min: Math.ceil(results.main.temp_min),
                wind: results.wind.speed,
                icon: results.weather[0].icon,
              }
            }
          }
        })
        this.setState({ isLoading:false })
      })

    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.weather.lat}&lon=${this.state.weather.lon}&lang=ru&units=metric&exclude=hourly,minutely&appid=f937e142b7a3df602830e9a106d4df09`)
      .then(data => data.json())
      .then(results => {
        const newWeather = results.daily.map(el => {
          return {
            temp: Math.ceil(el.temp.max),
            description: el.weather[0].description,
            icon: el.weather[0].icon,
            id: el.dt,
          }
        })
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
    const { weather, cityList, isLoading } = this.state;
    const { main, daily } = this.state.weather;
    const { addNewCity, getWeather } = this;

    return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor='transparent'/>

        <View>
          <Header
            weather={weather}
            addNewCity={addNewCity}
            cityList={cityList}
            getWeather={getWeather}
          />
          <Main weather={main}/>
          <Info weather={main}/>
          <Weather weather={daily}/>
        </View>

        <Spinner
          visible={isLoading}
          textContent={'Получение данных о погоде...'}
          textStyle={{ color: 'white', fontSize: 16 }}
          animation='fade'
        />

    </ScrollView>
    )
  }
};

export default App;