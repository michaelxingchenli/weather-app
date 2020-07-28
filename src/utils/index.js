import weatherApi from './../api/weatherApi'

export const weatherIcon = {
    sn: "wi-snow",
    sl: "wi-sleet",
    h: "wi-hail",
    t: "wi-thunderstorm",
    hr: "wi-sprinkle",
    lr: "wi-rain",
    s: "wi-showers",
    hc: "wi-cloudy",
    lc: "wi-cloud",
    c: "wi-day-sunny"
};

export const convertDate = (date) => {
    const d = new Date(date);
    const dateString = d.toString().split(" ");
    return `${dateString[0]}, ${dateString[2]} ${dateString[1]}`;
  };


  
export const getLocation = async() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    async function success(pos) {
      var crd = pos.coords;
      const response =  await weatherApi.latlongLocations(crd.latitude,crd.longitude); 
      localStorage.setItem("woeid", response[0].woeid);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }