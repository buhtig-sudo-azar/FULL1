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
        if (searchTerm.length >= 2) {
          // Если введено две или больше букв, ищем по первым двум
          const twoLetters = searchTerm.substring(0, 2).toLowerCase(); // Получаем первые две буквы
          return countryNameLower.startsWith(twoLetters);
        } else {
          // Если введена только одна буква, ищем по первой букве
          const firstLetter = searchTerm[0].toLowerCase();
          return countryNameLower.startsWith(firstLetter);
        }
      })
    : [];

  let contentToRender;
  if (!searchTerm) {
    contentToRender = <h3>Начните вводить название страны...</h3>;
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
      </div>
    );
  } else {
    contentToRender = <p>No countries match your filter</p>;
  }
  return (
    <>
      <span>
        find countries:{" "}
        <input value={searchTerm} onChange={searchHandlerCountry} />
      </span>
      {contentToRender}
    </>
  );
}

export default App;
