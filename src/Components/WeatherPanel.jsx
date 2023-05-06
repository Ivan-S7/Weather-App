import React from "react";
import { useState } from "react";
import Form from './Form'
import Card from "./Card";


const Weatherpanel = () =>{
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
  // minuto 25:00

  // key: 794d1002cc18c0645b56834f4787b7bd

  // Esta es la url de la api para obtener el clima actual
  // &lang=en -----> esta parte final de la API es para la seleccion del idioma (en este caso, inglés) 
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=794d1002cc18c0645b56834f4787b7bd&lang=en'
  let cityUrl ='&q='
  let units = '&units=metric'


  // Esta parte es para obtener la prediccion del clima. Es el mismo url que el anterior, pero cambiando la palabra 'weather' por 'forecast'.
  

  let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=794d1002cc18c0645b56834f4787b7bd&lang=en'

  // ---------------------------------Variables de estado a utilizar----------------------------------
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('')
  const[showForecast, setShowForecast] = useState(false);

  // A continuación creamos la funcion donde completaremos el url de la api a consultar, y consumiremos dicha API. La funcion toma como parametro la localizacion a consultar
  const getLocation =async(loc) =>{
    // Este setLoading es para mostrar el spiner en pantalla mientras aun no tenemos los datos.
    setLoading(true);
    setLocation(loc)

    // Acá completamos la url de la API
    urlWeather = urlWeather + cityUrl + loc + units;

    // Consumimos la API del clima actual
    await fetch(urlWeather)
      .then((response) =>{
        if(!response.ok){
          throw {response}
        } return response.json();
    }) .then((weatherData) => {
      setWeather(weatherData)
      console.log(weather)

      setLoading(false);
      setShow(true)
    })

      

      .catch((error)=>{
        console.log(error);
        setLoading(false)
        setShow(false)
      })


    // Consumimos la API de la prediccion (forecast)
    urlForecast = urlForecast + cityUrl + loc + units ;

    await fetch(urlForecast)
      .then((response) =>{
        if(!response.ok){
          throw {response}
        } return response.json();
    }) .then((forecastData) => {
      setForecast(forecastData)
      console.log(forecast)
      setShowForecast(true);


      setLoading(false);
      setShow(true)
    })

      

      .catch(error =>{
        console.log(error);
        setLoading(false);
        setShow(false);
    });
      
  }
    
  return(
    <>
      <h5 className="description-1  animate__animated animate__fadeInDown">Access current weather data for any location on Earth including over 200,000 cities</h5>

      <Form 
      newLocation = {getLocation}  
      />

      <Card
      showData = {show}
      loadingData =  {loading}
      weather = {weather}
      showForecast = {showForecast}
      forecast = {forecast}
      />

    
    
    </>
  )
}

export default Weatherpanel;