import fetch from "node-fetch";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tractors, setTractors] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(
        "https://agdeveloper.trimble.com/api/v1/ReferenceData/Countries",
      );
      const data = await response.json();
      console.log(data);
      setTractors(data); // Сохраняем данные в состояние
    }

    getCountries();
  }, []); // Пустой массив зависимостей, чтобы useEffect сработал только один раз
  return <>{JSON.stringify(tractors)}</>;
}

export default App;
