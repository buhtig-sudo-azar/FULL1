import axios from "axios";
import * as cheerio from "cheerio";
import { useState, useEffect } from "react";

function App() {
  const [tractors, setTractors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://th89jf-3000.csb.app/api/tractors"
        );
        setTractors(response.data); // Сохраняем данные в состоянии
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Список тракторов</h1>
      {tractors.length > 0 ? ( // Проверяем, есть ли данные
        tractors.map((tractor) => (
          <div key={tractor.model}>
            <h2>{tractor.model}</h2>
            <p>Производитель: {tractor.manufacturer}</p>
            <p>Мощность: {tractor.power} л.с.</p>
            <p>{tractor.description}</p>
            {/* <img src={tractor.image} alt={tractor.model} /> */}
          </div>
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default App;
