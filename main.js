const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

  // Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	  cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	  });
	} else {
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

	console.log(`Worker ${process.pid} started`);
}