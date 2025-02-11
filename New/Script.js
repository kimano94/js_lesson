TrCount = 5;
TdCount = 25;

function NewTable() {
  let div = document.getElementById("Table_div");
  let UI = document.getElementsByClassName("UI");
  let table = document.createElement("table");
  table.id = "Table";
  table.append(...AddTr(TrCount));
  div.append(table);
  for (let UIElem of UI) {
    if (UIElem.hidden != 1) {
      UIElem.hidden = 1;
    } else if (UIElem.hidden != 0) {
      UIElem.hidden = 0;
    }
  }
}

function NewTr() {
  let table = document.getElementById("Table");
  let input = document.getElementById("Row");
  TrCount += input.value;
  table.append(...AddTr(input.value));
}
function NewTd() {
  let table = document.getElementById("Table");
  let input = document.getElementById("Col");
  let tr = document.getElementsByTagName("tr");
  TdCount += input.value;
  for (let row of tr) {
    row.append(...addTdCol(input.value));
    Vertical_id += 1;
  }
  table.append(...AddTr(input.value));
}

function AddTr(Count) {
  let result = [];
  for (let i = 0; i <= Count - 1; i++) {
    let tr = document.createElement("tr");
    tr.append(...AddTd(TdCount));
    result.push(tr);
  }
  return result;
}

function AddTd(Count) {
  let result = [];
  for (let i = 0; i <= Count - 1; i++) {
    let td = document.createElement("td");
    result.push(td);
  }
  return result;
}

function ChangeBg() {
  let body = document.getElementById("Body");
  let Red = Math.floor(Math.random() * 256).toString(16);
  let Green = Math.floor(Math.random() * 256).toString(16);
  let Blue = Math.floor(Math.random() * 256).toString(16);
  let bgColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
  body.style.backgroundColor = bgColor;
}
