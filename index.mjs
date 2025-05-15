// const http = require("http");
// const fs = require("fs");
import http from "http"
import fs from "fs"
http.createServer(async (request, response) => {
	let a = 'index.html';
	let b = 'page' + request.url + 'content.html';
	let c = 'page' + request.url + 'title.html';
	let layout  = await fs.promises.readFile(a, 'utf8');
	let content = await fs.promises.readFile(b, 'utf8');
	let title   = await fs.promises.readFile(c, 'utf8');
	
	layout = layout.replace(/\{% get content %\}/, content);
	layout = layout.replace(/\{% get title %\}/,   title);
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(layout);
	response.end();
}).listen(3000, function() { console.log("Сервер запущен по адресу http://localhost:3000")});