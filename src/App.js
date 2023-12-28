import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Timer from "./components/Timer";
import AsyncSetCount from "./components/AsyncSetCount";
import WeatherFetchApi from "./components/weather-app/WeatherFetchApi";
import Pagination from "./components/Pagination";

//  To convert rupee to dollars
function App() {
  return (
    <div className="App">
      {/* <CurrencyConverter />
      <Timer />
      <AsyncSetCount />
      <WeatherFetchApi /> */}
      <Pagination />
    </div>
  );
}

export default App;
