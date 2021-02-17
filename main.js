//function Work() {
//	(async () => {
//		await page.goto('http://gudproxyforme.epizy.com/index.html');
//		console.log('OK')
//	})
//}
const { Cluster } = require('puppeteer-cluster');
 
(async () => {
	function Work() {
	(async () => {
		await page.goto('http://gudproxyforme.epizy.com/index.html');
		console.log('OK')
	})
}
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_BROWSER,
    maxConcurrency: 8,
  });
 
  await cluster.task(async ({ page, data: url }) => {
	await page.goto('http://gudproxyforme.epizy.com/index.html');
	console.log('OK')
	setInterval(Work,600000) 
  });
})();
