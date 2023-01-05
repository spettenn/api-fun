
/* const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
let scraped_headlines = [];
(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try {
		await page.goto('https://www.vg.no/', { timeout: 180000 });
		let bodyHTML = await page.evaluate(() => document.body.innerHTML);
		let $ = cheerio.load(bodyHTML);
		let article_headlines = $(' article > div > a > div ');
		article_headlines.each((index, element) => {
			title = $(element).find('h3').text();
			scraped_headlines.push({
				title: title,
			});
		});
	} catch (err) {
		console.log(err);
	}
	await browser.close();
	console.log(scraped_headlines);
})();
 */
import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

const MyComponent = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      try {
        await page.goto('https://www.vg.no/', { timeout: 180000 });
        let bodyHTML = await page.evaluate(() => document.body.innerHTML);
        let $ = cheerio.load(bodyHTML);
        let article_headlines = $('article > div > a > div');
        let scraped_headlines = [];
        article_headlines.each((index, element) => {
          title = $(element).find('h3').text();
          scraped_headlines.push({
            title: title,
          });
        });
        setData(scraped_headlines);
      } catch (err) {
        console.log(err);
      }
      await browser.close();
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};

export default MyComponent;
