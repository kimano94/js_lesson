import fs from "fs";

function FileSave() {
  let data = fs.readFileSync("root/index.html", "utf8");
  data = data.split('<p id="p">');
  data = data[1].split("</p>");
  fs.writeFileSync("root/table.html", data[0]);
}
