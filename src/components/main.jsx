 import React from 'react';
 import {weatherIcon, convertDate} from '../utils'

 import './../css/main.style.css'

 const Detail = ({temp, setUnit, unit, today, forcast}) => {
  return (
    <div className="container main">
      <div className="control-group" role="temp-control-group">
        <button onClick={()=>setUnit("C")} type="button" className="btn btn-secondary round float-md-right">
          <span className="material-icons">&deg;C</span>
        </button>
        <button onClick={()=>setUnit("F")} type="button" className="btn btn-secondary round float-md-right">
          <span className="material-icons">&deg;F</span>
        </button>
      </div>
      <div className="card-deck text-center">
      {forcast.map(
          (weather, i) =>
            i > 0 && (
              <div key={i} className="card md-2 text-white">                
                <div className="date">{convertDate(weather.applicable_date)}</div>
                <i className={`wi ${weatherIcon[weather.weather_state_abbr]} display-4`}></i>
                <span className="temp">{temp(weather.min_temp, unit)}    {temp(weather.max_temp, unit)}</span>
              </div>
            )
        )
      }
      </div>
      <div className="details">
        <h3>Today’s Hightlights</h3>
        <div className="row row-cols-1 row-cols-md-2 text-center">
          <div className="card mb-4 text-white">
            <h4>Wind status</h4>
            <div className="wind">{Math.round(today.wind_speed)}<span class="unit">mph</span></div>
            <div className="direction"><span className="material-icons circle">navigation</span>{today.wind_direction_compass}</div>
          </div>
          <div className="card mb-4 text-white">
            <h4>Humidity</h4>
            <div className="humidity">{today.humidity} %</div>
          </div>
          <div className="card mb-4 text-white">
            <h4>Visibility</h4>
            <div className="visibility">{Math.round(today.visibility)} miles</div>
          </div>
          <div className="card mb-4 text-white">
            <h4>Air Pressure</h4>
            <div className="air-pressure">{today.air_pressure} mb</div>
          </div>
        </div>
      </div>
    </div>
  )

 }


 export default Detail;