import { useState, useEffect } from "react";
import "./App.css";
import * as countriesServ from "../services/countriesService";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    countriesServ.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []); // <-- С ПУСТЫМ массивом зависимостей

  const searchHandlerCountry = (event) => {
    setSearchTerm(event.target.value);
  };

  const countriesToShow = searchTerm
    ? countries.filter((country) => {
        const countryNameLower = country.name.common.toLowerCase();
        return countryNameLower.includes(searchTerm.toLowerCase());
      })
    : [];

  let contentToRender;
  if (!searchTerm) {
    contentToRender = <h3>Начните вводить название страны...</h3>;
  } else if (countriesToShow.length == 1) {
    const onlyCountry = countriesToShow[0];
    const languages = onlyCountry.languages;
    const langValues = Object.values(languages);
    contentToRender = (
      <div>
        <h2>{onlyCountry.name.common}</h2>
        <p>Столица: {onlyCountry.capital}</p>
        <p>Площадь: {onlyCountry.area} км²</p>
        Языки:{" "}
        {langValues.map((language, index) => (
          <span key={index}>
            {language}
            {index < langValues.length - 1 ? ", " : ""}
          </span>
        ))}
        ,<br />
        <div
          style={{
            display: "flex", // Добавляем display: "flex"
            alignItems: "center", // Выравнивание по вертикали
            justifyContent: "center", // Выравнивание по горизонтали

            width: "500px",
            height: "300px",
          }}
        >
          <img
            src={onlyCountry.flags.png}
            alt={`Flag of ${onlyCountry.name.common}`}
            style={{
              background: "#808080",
              margin: "10px 10px 10px 10px",
            }}
          />
        </div>
      </div>
    );
  } else if (countriesToShow.length > 10) {
    contentToRender = <h5>Too many matches, specify another filter!</h5>;
  } else if (countriesToShow.length < 10 && countriesToShow.length > 0) {
    contentToRender = (
      <ul>
        {countriesToShow.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else {
    contentToRender = <p>No countries match your filter</p>;
  }
  return (
    <div style={{ margin: "3%" }}>
      <span>
        find countries:{" "}
        <input value={searchTerm} onChange={searchHandlerCountry} />
      </span>
      {contentToRender}
    </div>
  );
}

export default App;
