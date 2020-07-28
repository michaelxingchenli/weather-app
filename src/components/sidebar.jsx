import React from 'react';

import Search from './search';
import {convertDate, weatherIcon} from '../utils';
import './../css/sidebar.style.css';

const Sidebar = ({ 
    temp,
    unit,
    updateLocation,
    addWoeid,
    title, 
    the_temp,
    weather_state_name,
    weather_state_abbr,
    applicable_date}) => {   
        
    return (
        <div className="sidebar">         
            <Search addWoeid = {addWoeid}/>
            <button onClick={()=> updateLocation()} type="button" className="btn btn-secondary round float-md-right"><span className="material-icons">gps_fixed</span></button>
            <div className="cards pt-4">
                <h5 className="py-4">
                    <i className={`wi ${weatherIcon[weather_state_abbr]} display-1`}></i>
                </h5>
                <div className="temp">{temp(the_temp, unit)}</div>

                <h4 className="description">
                    {weather_state_name}
                </h4>

                <div className="date">Today <span>•</span> {convertDate(applicable_date)}</div>

                <div className="location">
                    <span className="material-icons">room</span>
                    {title}
                </div> 
            </div>
    </div>
    );
}



export default Sidebar;