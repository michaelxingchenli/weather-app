import React, {useState} from 'react';
import './../css/search.style.css';
import weatherApi from './../api/weatherApi'

const Search = ({addWoeid}) => {
  const [active, setActive] = useState(false);    
  const [cities, setCities] = useState([]);

  async function searchLocation(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const response = await weatherApi.queryLocations(city);
    //debug cities list
    //console.log(response);
    setCities(response);
  }
  
  function handleClick(woeid) {
    if (woeid) {
      addWoeid(woeid);
    }
  }

  return (
    <div className="container">  
        <button type="button" className="btn btn-secondary float-md-left" onClick={() => setActive(true)}>Search for places</button>
        <div className={`searchbar ${active ? "active" : "" }`}>
            <div onClick={() => setActive(false)} className="menu-close">
                <span className="material-icons">close</span>
            </div>
            <form className="form-inline" onSubmit={searchLocation}>
              <input className="form-control mr-sm-2" type="search" name="city" placeholder="search location" aria-label="Search" autoComplete="off" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <ul className="list-group">
              {cities.map(
                (city) => (
                  <li key={city.woeid} className="list-group-item" onClick={() => handleClick(city.woeid)}>{city.title}<span className="material-icons">keyboard_arrow_right</span></li>)
              )}             
            </ul>
        </div>
    </div>
  );
};

export default Search
