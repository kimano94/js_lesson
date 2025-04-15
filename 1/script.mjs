// import { write } from "fs";
import http from "http"
import fs from "fs"
// import { createGzip } from 'zlib';
// let readableStream  = fs.createReadStream('1.txt', 'utf8');
// let writeableStream = fs.createWriteStream("243.txt")
// readableStream.pipe(createGzip()).pipe(writeableStream);
http.createServer(async(request, response) => {
	if (request.url != '/favicon.ico') {
		let text;
		if (request.url == '/page1') {
			text = "1";
		}
		else if (request.url == '/page2') {
			text = '2';

		}
		else if (request.url == '/page3') {
			text = await fs.promises.readFile('example.html', 'utf8');
		} else {
			text = 'page not found';
		}
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000/")});