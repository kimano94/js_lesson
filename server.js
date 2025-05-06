import http from "http";
import fs from "fs";

function getMimeType(path) {
  let mimes = {
    html: "text/html",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    json: "application/json",
    js: "application/javascript",
    mjs: "application/javascript",
    css: "text/css",
    ico: "image/x-icon",
    ttf: "font/ttf",
  };

  let exts = Object.keys(mimes);
  let extReg = new RegExp("\\.(" + exts.join("|") + ")$");

  let ext = path.match(extReg)[1];

  if (ext) {
    return mimes[ext];
  } else {
    return "text/plain";
  }
}

http
  .createServer(async (request, response) => {
    if (request.url == "/") {
      request.url = "/index.html";
    }
    let text;
    let status;
    let path = "root" + request.url;
    console.log(path);
    try {
      status = 200;
      text = await fs.promises.readFile(path, "utf8");
    } catch (err) {
      status = 404;
      text = await fs.promises.readFile("root/404.html", "utf8");
    }
    response.writeHead(status, {
      "Content-Type": getMimeType(path),
    });
    response.write(text);
    response.end();
  })
  .listen(3000);
