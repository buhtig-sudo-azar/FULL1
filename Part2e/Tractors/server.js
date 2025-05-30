import express from 'express';
import axios from 'axios';
import cors from 'cors';
import puppeteer from 'puppeteer';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/tractordata', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.tractordata.com/lawn-tractors/tractor-brands/johndeere/johndeere-lawn-tractors.html');
    await page.waitForSelector('img[src^="https://www.tractordata.com/ltphotos/"]'); // Ждем загрузки изображений
    const html = await page.content();
    await browser.close();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});