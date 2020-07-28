const cors = `https://cors-anywhere.herokuapp.com/`
const api_url = `https://www.metaweather.com/api`;

const weatherApi = {    
    queryLocations: async(location) => {
        const callback = await fetch(`${cors}${api_url}/location/search/?query=${location}`);
        const response = await callback.json();
        //console.log(response);
        return response;
    },
    latlongLocations: async(lat, long) => {
        const callback = await fetch(`${cors}${api_url}/location/search/?lattlong=${lat},${long}`);
        const response = await callback.json();
        return response;
    },
    weather: async(woeid) => {
        const callback = await fetch(`${cors}${api_url}/location/${woeid}`);
        const response = await callback.json();
        return response;
    }
}

export default weatherApi;