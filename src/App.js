import React, { useEffect, useState } from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import Detail from './components/main';
import weatherApi from './api/weatherApi'
import {getLocation} from './utils/index'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(null);
  const [woeid, setWoeid] = useState(null);
  const [unit, setUnit] = useState("C");
  const [weather, setWeather] = useState({});
  const [forcast, setForcast] = useState([]);
 
  useEffect(() => {
    initLocation();
  }, [woeid]);

  useEffect(() => {
    if(woeid) {      
      getWeather(woeid);
    }
  }, [woeid, loading]);

  const temp = (temp, unit) => {
    if (unit === "C") {
        return (
          <>{Math.round(temp)} <span>&deg;C</span></>
        )
    } else if (unit === "F") {
        return (  
          <>{Math.round(+(temp * 9) / 5 + 32)} <span>&deg;F</span></>
        )
    }
} 

  function addWoeid(id) {
    if (id) {
      setLoading(true);
      setWoeid(id);
      setLocation(id);
    }
  }

  function initLocation () {
    setLoading(true);
    if(woeid === null) {
      if (localStorage.getItem("woeid") === null) {
        getLocation();
      }

      setWoeid(localStorage.getItem("woeid"));
    }
  }

  function updateLocation () {
    getLocation();
    setWoeid(localStorage.getItem("woeid"));
  }

  function setLocation (woeid) {
    localStorage.setItem("woeid", woeid);
  }

  async function getWeather (woeid) {
    const response = await weatherApi.weather(woeid);
    setTitle(response.title);
    setWeather(response.consolidated_weather[0]);
    setForcast(response.consolidated_weather);  
    
    //debug weather 
    //console.log('getWeather', woeid);
    //console.log(title);
    //console.log(weather);
    //console.log(forcast);
    setLoading(false);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <Sidebar temp={temp} unit={unit} updateLocation={updateLocation} addWoeid={addWoeid} title={title} {...weather} />
        </div>

        <div className="col-md-8">
          <Detail temp={temp} setUnit={setUnit} unit={unit} today={weather} forcast= {forcast} />
        </div>
      </div>
    </div>
  );
}

export default App;
