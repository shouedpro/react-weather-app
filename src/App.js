import "./App.css";
import SearchWeather from "./SearchWeather";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <SearchWeather defaultCity="London" />
      <WeatherForecast />
    </div>
  );
}

export default App;
