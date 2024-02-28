import { useState } from "react";

export function Cities() {
  const [cities, setCities] = useState<string[]>([]);
  const [cityToCheck, setCityToCheck] = useState<string>("");
  const [isCityPresent, setIsCityPresent] = useState<boolean>(false);

  function initalizeCityDataBase() {
    setCities(["Vienna", "San Juan", "New York", "Tokyo"]);
  }

  function clearCityDataBase() {
    setCities([]);
  }

  function isCity(inputCity: string) {
    const lowerCaseCity = inputCity.toLowerCase();

    return cities.some((city) => city.toLowerCase() === lowerCaseCity);
  }

  function handleCityCheck() {
    setIsCityPresent(isCity(cityToCheck));
  }

  return (
    <div>
      <h3>Cities</h3>
      <button onClick={initalizeCityDataBase}>Create Cities</button>
      <button onClick={clearCityDataBase}>Clear cities</button>

      <ul>
        {cities?.map((city, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <strong>CITY:</strong> <span>{city}</span>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={cityToCheck}
          onChange={(e) => setCityToCheck(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleCityCheck}>Check City</button>
        {isCityPresent ? <p>City is present!</p> : <p>City is not present.</p>}
      </div>
    </div>
  );
}
