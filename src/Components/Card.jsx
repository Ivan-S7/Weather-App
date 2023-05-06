import React from "react";
import Spinner from "./Spinner";

const Card=({ showData, loadingData, weather, forecast, showForecast })=>{
  
  // Para crear la fecha que tendremos en la tarjeta, arriba de la imagen.
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + '/' + month + '/' + year;

  // Este es el link inicial para el icono que devuelve la API
  var url = 'http://openweathermap.org/img/w/';

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  

  // inicializando variables para cambiar el formato de fechas de las predicciones.
  var forecastDate3 =''
  var forecastDate6 =''
  var forecastDate9 =''


  if(loadingData === true){
    return <Spinner/>
  }

  if(showData){
    var iconUrl = url + weather.weather[0].icon + '.png';

    
    

   
  }

  if(showForecast){
    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
     
    var description3 = forecast.list[1].weather[0].description;
    var description6 = forecast.list[2].weather[0].description;
    var description9 = forecast.list[3].weather[0].description;

    var temp3 = forecast.list[1].main.temp;
    var temp6 = forecast.list[2].main.temp;
    var temp9 = forecast.list[3].main.temp
    
  }

  return(
    <>
      <div className="mt-5">
        {
          showData === true ? (
            <div className="container container-card">
              <div className="card bg-dark text-light mx-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4 col-sm-12">
                    {/* imagen de pexels.com */}
                    <h3 className="card-title">{weather.name}</h3>
                    <p className="card-date">{date}</p>
                    <p className="card-temp" id="card-temp">{weather.main.temp}°C</p>
                    <p className="card-desc"><img src={iconUrl} alt="icon" /> {weather.weather[0].description}</p>
                    <img src="https://images.pexels.com/photos/15481505/pexels-photo-15481505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="City" className="img-fluid rounded-start img-city" />
                    
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mt-2 text-start">
                      <h5 className="card-text">Feels Like: {weather.main.feels_like}°C</h5>
                      <h5 className="card-text">Max. Temp.: {weather.main.temp_max}°C</h5>
                      <h5 className="card-text">Min. Temp: {weather.main.temp_min}°C</h5>
                      <h5 className="card-text">Humidity: {weather.main.humidity}%</h5>
                      <h5 className="card-text">Wind Speed: {weather.wind.speed} km/h</h5>
                    </div>

                    <hr/>

                    <div className="row  mt-4">
                      <div className="col-12 col-md-4 ">
                      <p>{forecastDate3}h</p>
                      <p className="description"><img src={iconUrl3} alt="icon"  />{description3}</p>
                      <p className="temp"> {temp3} °C</p>
                      </div>
                      <div className="col-12 col-md-4 ">
                      <p>{forecastDate6}h</p>
                      <p className="description"><img src={iconUrl6} alt="icon"  />{description6}</p>
                      <p className="temp"> {temp6} °C</p>
                      </div>
                      <div className="col-12 col-md-4 ">
                      <p>{forecastDate9}h</p>
                      <p className="description"><img src={iconUrl9} alt="icon"  />{description9}</p>
                      <p className="temp"> {temp9} °C</p>
                      </div>

                    </div>
                    

                  </div>

                </div>

              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-light"></h2>
            </div>
          )

        } 



      </div>


    </>
  )
}


export default Card;