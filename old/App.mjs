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
} else {
  <Code>
} */

/* fs.readFile("Num.txt", "utf8", function (err, data) {
  console.log(parseInt(data) ** 2);
}); */

/* fs.readFile("Num.txt", "utf8", function (err, data) {
  if (err != null) {
    console.log("Произошла ошибка:");
    console.log("Номер ошибки:", err.errno);
    console.log("Код ошибки:", err.code);
  }
  console.log(data);
}); */

/* for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    fs.writeFile(i + ".txt", i, function (err) {
      if (err != null) {
        console.log(err);
      }
    });
  }
} */

/* fs.readFile("readme1.txt", "utf8", function (err, data1) {
  if (err != null) {
    console.log(err);
  } else {
    fs.readFile("readme2.txt", "utf8", function (err, data2) {
      if (err != null) {
        console.log(err);
      } else {
        fs.readFile("readme3.txt", "utf8", function (err, data3) {
          if (err != null) {
            console.log(err);
          } else {
            console.log(parseInt(data1) + parseInt(data2) + parseInt(data3));
          }
        });
      }
    });
  }
}); */

/* fs.readFile("readme1.txt", "utf8", function (err, data1) {
  if (err != null) {
    console.log(err);
  } else {
    fs.readFile("readme2.txt", "utf8", function (err, data2) {
      if (err != null) {
        console.log(err);
      } else {
        fs.readFile("readme3.txt", "utf8", function (err, data3) {
          if (err != null) {
            console.log(err);
          } else {
            fs.writeFile(
              "readme.txt",
              parseInt(data1) + parseInt(data2) + parseInt(data3),
              function (err) {
                if (err != null) {
                  console.log(err);
                }
              }
            );
          }
        });
      }
    });
  }
}); */

/* fs.readFile("readme1.txt", "utf8", (err, data1) => {
  if (err != null) {
    console.log(err);
  } else {
    fs.readFile("readme2.txt", "utf8", (err, data2) => {
      if (err != null) {
        console.log(err);
      } else {
        fs.writeFile("readme.txt", parseInt(data1) + parseInt(data2), (err) => {
          if (err != null) {
            console.log(err);
          }
        });
      }
    });
  }
}); */

/* fs.promises.readFile("readme.txt", "utf8").then((data) => {
  let result = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    result += parseInt(data[i]);
  }
  console.log(result);
}); */

/* function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
async function func() {
  try {
    let names = ["1.txt", "2.txt"];
    let data = [];

    for (let name of names) {
      await fs.promises.writeFile(name, getRandomInt(100));
      data.push(await fs.promises.readFile(name, "utf-8"));
    }

    let result = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      result += parseInt(data[i]);
    }

    await fs.promises.writeFile("readme.txt", result);
  } catch (err) {
    console.log("Произошла ошибка:");
    console.log("Номер ошибки:", err.errno);
    console.log("Код ошибки:", err.code);
    console.log(err);
  }
}

func(); */

import fs from "fs";
let path = "dir1/dir2/readme.txt";
fs.promises.readFile(path, "utf8").then((data) => {
  console.log(data);
});
