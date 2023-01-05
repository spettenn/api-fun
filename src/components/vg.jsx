const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const scrapeHeadlines = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { timeout: 180000 });
      let bodyHTML = await page.evaluate(() => document.body.innerHTML);
      let $ = cheerio.load(bodyHTML);
      let article_headlines = $('article > div > a > div');
      let scraped_headlines = [];
      article_headlines.each((index, element) => {
        let title = $(element).find('h3').text();
        scraped_headlines.push({
          title: title,
        });
      });
      await browser.close();
      resolve(scraped_headlines);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { scrapeHeadlines };
