const http = require("http");
const fs = require("fs");
  
http.createServer(async (request, response) => {
    if(request.url == "/Deepik"){
           
          let body = "";   // буфер для получаемых данных
         // получаем данные из запроса в буфер
          for await (const chunk of request) {
            body += chunk;
          }
        // для параметра name
        let userName = "";
        // для параметра age
        let userAge = 0;
        // разбиваем запрос на параметры по символу &
        const params = body.split("&");
        // проходим по всем параметрам и определяем их значения
        for(param of params){
            // разбиваем каждый параметр на имя и значение
            const [paramName, paramValue] = param.split("=");
            if(paramName === "username") userName = paramValue;
            if(paramName === "userage") userAge = paramValue;
        }
        if(userAge>=14){
            data = ""
            fs.writeFile("Deepik.html", data)
            response.end(data)
            fs.readFile()
        response.end(`Your name: ${userName}  Your Age: ${userAge}`);
        }else{
            fs.readFile("1.html", (_, data) => response.end(data));
        }
    }
    else if(request.url == "/registration"){
        fs.readFile("index.html", (_, data) => response.end(data));
    }
}).listen(4000, ()=>console.log("Сервер запущен по адресу http://localhost:4000/registration"));