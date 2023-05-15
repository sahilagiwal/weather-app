import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/appbar/appbar.component";
import Home from "./pages/home/home.component";
import Weather from "./pages/weather/weather.component";
function App() {
  const [searchField, setSearchField] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [skip, setSkip] = useState(false);
  const [latlong, setLatLong] = useState("");
  const updatesearchf = (event) => {
    setSearchField(event.target.value);
  };
  //finding the user location via browser geolocation.
  const findGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const locastring = `${position.coords.latitude},${position.coords.longitude}`;
      setLatLong(locastring);
    });
  };
  useEffect(() => {
    if (skip != false) {
      findWeatherInfo();
    } else {
      setSkip(true);
    }
  }, [latlong]);
  //fecthing weather data based on lat and log or name of the place
  const findWeatherInfo = () => {
    let finddata = "";
    if (searchField) {
      finddata = searchField;
    } else {
      finddata = latlong;
    }
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=a78df8dfa46c4c12bc935703231505&q=${finddata}`
    )
      .then((response) => response.json())
      .then((Wdata) => setWeatherData(Wdata));
  };

  return (
    <div className="App">
      <NavBar
        inputdata={searchField}
        setInputData={updatesearchf}
        clickHandler={findWeatherInfo}
        locationFinder={findGeoLocation}
      />
      {Object.keys(weatherData).length > 0 ? (
        <Weather data={weatherData} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
