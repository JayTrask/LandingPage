import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import HeaderForm from "./components/HeaderForm"
import Header from "./components/Header"
import BackgroundForm from "./components/BackgroundForm"
import Background from "./components/Background"
import Landing from "./components/Landing"

const API_KEY = "18abacb270172187ac2b3bdc8dbf1a02";
var landingNumber = Math.floor(Math.random()*5)+1

class App extends React.Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,

    headerImage: undefined,
    BackgroundImage: undefined,

    //Landing view while this is true; one entered this is set to false to reveal the rest of the application. #TODO
    landing: true,
    landingImage: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

  }

  landingImages = {
    one: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    two: "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    three: "https://images.pexels.com/photos/6832/waterfall-beauty-lets-explore-lets-get-lost.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    four: "https://images.pexels.com/photos/62627/niagara-cases-water-waterfall-62627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    five: "https://images.pexels.com/photos/1533060/pexels-photo-1533060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }

  enterSite = async (e) => {
    e.preventDefault();
    
    this.setState({
      landing: false
    })
    
  }
  getImage = async (e) => {
    e.preventDefault();

    const image = e.target.elements.headerImage.value;
    if(image){
      this.setState({
        headerImage: image
      })
    }
  }

    getBGImage = async (e) => {
    e.preventDefault();

    const image = e.target.elements.headerImage.value;
    if(image){
      this.setState({
        BackgroundImage: image
      })
    }
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
        <Landing 
          landingImage={this.state.landingImage}
          landing={this.state.landing}
          temperature={this.state.temperature}
          BackgroundImage={this.state.BackgroundImage}
          headerImage={this.state.headerImage}
          enterSite={this.enterSite}
          getWeather={this.getWeather}
          getImage={this.getImage}
          getBGImage={this.getBGImage}
          />

        {!this.state.landing && <Titles /> }
        {!this.state.landing && <Weather 
        city = {this.state.city}
        country = {this.state.country}
        temperature = {this.state.temperature}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}

        /> }
        { !this.state.landing && <Header Image = {this.state.headerImage}/> } 
        { !this.state.landing && <Background Image = {this.state.BackgroundImage}/> }
      </div>
      );
  }
};

export default App;

