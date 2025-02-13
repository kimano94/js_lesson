TrCount = 5;
TdCount = 25;
let Mode = "Normal";

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
  let input = document.getElementById("Col");
  let tr = document.getElementsByTagName("tr");
  TdCount += input.value;
  for (let row of tr) {
    row.append(...AddTd(input.value));
  }
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
  let bgColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
  body.style.backgroundColor = bgColor;
}

function ChangeMode() {
  let UI = document.getElementsByClassName("UI");
  for (let UIElem of UI) {
    UIElem.hidden = 1;
    if (UIElem.id == "Change_Mode") {
      UIElem.hidden = 0;
    }
  }
  if (Mode == "Normal") {
    Mode = "Value";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      let input = document.createElement("input");
      input.value = cell.innerHTML;
      cell.innerHTML = "";
      input.class = "Value";
      cell.append(input);
      input.hidden = 0;
    }
  } else if (Mode == "Value") {
    Mode = "Normal";
    let td = document.getElementsByTagName("td");
    let i = 0;
    for (let cell of td) {
      let input = document.getElementsByClassName("Value");
      cell.innerHTML = input.value;
      input[i].remove();
      i += 1;
    }
  }
}
