const fs = require("fs");

let a = document.getElementById("file").value
fs.readFile(a, (_, data))