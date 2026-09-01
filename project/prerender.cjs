const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // We assume the preview server is running on 4173 or 4174. 
  // Let's just start a static server for dist.
  const express = require('express');
  const app = express();
  app.use(express.static('dist'));
  const server = app.listen(9999);
  
  console.log('Navigating to http://localhost:9999...');
  await page.goto('http://localhost:9999', { waitUntil: 'networkidle0' });
  
  const rootHtml = await page.evaluate(() => {
    return document.getElementById('root').innerHTML;
  });
  
  let indexHtml = fs.readFileSync('dist/index.html', 'utf-8');
  indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
  // Remove the initial-loader if it was there
  indexHtml = indexHtml.replace(/<div id="initial-loader">[\s\S]*?<\/div>/, '');
  
  fs.writeFileSync('dist/index.html', indexHtml);
  
  await browser.close();
  server.close();
  console.log('Prerender successful!');
}

run().catch(console.error);
