import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "18abacb270172187ac2b3bdc8dbf1a02";

class App extends React.Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api_call.json();

    if(city  && country ){
      console.log(data);
    
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else{
        this.setState({
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the Values."
        });
      }
    }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
        city = {this.state.city}
        country = {this.state.country}
        temperature = {this.state.temperature}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}

        />
      </div>
      );
  }
};

export default App;

