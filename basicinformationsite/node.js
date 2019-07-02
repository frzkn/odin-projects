const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
	console.log(req.url)
	switch(req.url) {
		case '/':
			fs.readFile('./pages/index.html', (err, data) => {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(data)
				console.log('something')
				res.end()
			})
			break
		case '/about':
			fs.readFile('./pages/about.html', (err, data) => {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(data)
				res.end()
			})
			break
		case '/contact-me':
			fs.readFile('./pages/contact-me.html', (err, data) => {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(data)
				res.end()
			})
			break
		default:
			fs.readFile('./pages/404.html', (err, data) => {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(data)
				res.end()
			})
			break
	}
}).listen(5000)

