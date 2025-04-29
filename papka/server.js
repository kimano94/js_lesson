const http = require("http")
const fs = require("fs");
const { url } = require("inspector");
http.createServer(async (request, response) => {
    if( request.url == "/user"){

          let body = ""
          for await (const chunk of request) {
            body += chunk;
          }
          let username = ""
          let userage = 0
          const params = body.split("&")
          for(param of params){
            const [paramName, paramValue] = param.split("=");
            if (paramName==="username") username = paramValue;
            if (paramName==="userage") userage= paramValue;
            
          }
        response.end("Вы успешно зарегистрировались на Deepik", utf-8)
        }
        else{
            fs.readFile("index.html", (_, data) => response.end(data));
        }
}).listen(5000, ()=>console.log("Сервер запущен по адресу http://localhost:5000"));