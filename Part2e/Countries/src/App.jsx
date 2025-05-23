import { useState, useEffect } from "react";
import "./App.css";
import * as countriesServ from "../services/countriesService";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countriesServ.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const searchHandlerCountry = (event) => {
    setSearchTerm(event.target.value);
  };
  const buttonHandlerShow = (country) => {
    setSelectedCountry(country);
  };

  const countriesToShow = searchTerm
    ? countries.filter((country) => {
        const countryNameLower = country.name.common.toLowerCase();
        return countryNameLower.includes(searchTerm.toLowerCase());
      })
    : [];

  return (
    <div style={{ margin: "3%" }}>
      <span>
        find countries:{" "}
        <input value={searchTerm} onChange={searchHandlerCountry} />
      </span>

      {countriesToShow.length > 10 ? (
        <h5>Too many matches, specify another filter!</h5>
      ) : (
        <ul>
          {countriesToShow.map((country) => (
            <div key={country.cca3}>
              <li>
                {country.name.common}{" "}
                <button onClick={() => buttonHandlerShow(country)}>show</button>
              </li>
            </div>
          ))}
        </ul>
      )}

      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area} km²</p>
          <img
            src={selectedCountry.flags.png}
            alt={`Flag of ${selectedCountry.name.common}`}
          />
        </div>
      )}
    </div>
  );
}

export default App;
