/* setInterval(function () {
  let Now = new Date();
  console.log(Now.getHours() + ":" + Now.getMinutes() + ":" + Now.getSeconds());
}, 1000); */

/* let num1 = fs.readFileSync("Num 1.txt", "utf8");
let num2 = fs.readFileSync("Num 2.txt", "utf8");
console.log(parseInt(num1) + parseInt(num2)); */

/* let obj = {
  "file1.txt": "text1",
  "file2.txt": "text2",
  "file3.txt": "text3",
};
for (let File in obj) {
  fs.writeFileSync(File, obj[File]);
} */

/* setInterval(function () {
  let text = fs.readFileSync("readme.txt", "utf8");
  fs.writeFileSync("readme.txt", text + "!");
}, 5000); */

/* let text = fs.readFileSync("Num.txt", "utf8");
fs.writeFileSync("Num.txt", parseInt(text) + 1); */

/* let num1 = fs.readFileSync("Num 1.txt", "utf8");
let num2 = fs.readFileSync("Num 2.txt", "utf8");
let num3 = fs.readFileSync("Num 3.txt", "utf8");
let num = parseInt(num1) + parseInt(num2) + parseInt(num3);
fs.writeFileSync("Num.txt", num); */

/* try {
  let text = fs.readFileSync("readme.txt", "utf8");
  console.log(text);
} catch (err) {
  console.log("При чтении файла", err.path, "произошла ошибка:");
  if (err.errno == -2) {
    console.log("Не удалось найти файл");
    console.log("Код ошибки:", err.errno);
  } else {
    console.log("Неизвестная ошибка");
    console.log("Код ошибки:", err.errno);
  }
} */

/* if (err != null) {
  console.log(err);
} */

/* fs.readFile("Num.txt", "utf8", function (err, data) {
  console.log(parseInt(data) ** 2);
}); */

import fs from "fs";
fs.readFile("Num.txt", "utf8", function (err, data) {
  if (err != null) {
    console.log("Произошла ошибка:");
    console.log("Номер ошибки:", err.errno);
    console.log("Код ошибки:", err.code);
  }
  console.log(data);
});
