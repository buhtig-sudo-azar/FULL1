import { useState, useEffect } from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';

function App() {
  const [tractors, setTractors] = useState([]);
  const [tractorImages, setTractorImages] = useState([]);

  useEffect(() => {
    async function parseTractorData() {
      try {
        // ИЗМЕНИ ЭТОТ URL НА URL ТВОЕГО ПРОКСИ-СЕРВЕРА
        const response = await axios.get('https://d7f4923d-561c-49fb-9b18-8918ac8ba1dc-00-pvj3jn32njmu.sisko.replit.dev:3000/api/tractordata');
        const html = response.data;
        const $ = cheerio.load(html);
        const images = $('img[src^="https://www.tractordata.com/ltphotos/"]');
        const imageUrls = images.map((i, el) => $(el).attr('src')).get();
        setTractorImages(imageUrls);
        console.log(html); // Посмотри сюда! Что здесь выводится?
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    parseTractorData();
  }, []);

  return (
    <div>
      {tractorImages.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Tractor ${index}`} />
      ))}
    </div>
  );
}

export default App;