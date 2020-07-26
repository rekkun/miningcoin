const puppeteer = require('puppeteer');
function Work() {
    (async () => {
        await page.goto('http://gudproxyforme.epizy.com/index.html');
        console.log('OK')
    })
}
(async () => {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('http://gudproxyforme.epizy.com/index.html');
    console.log('OK')
    setInterval(Work,600000) 
})() 
