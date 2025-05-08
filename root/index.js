TrCount = 5;
TdCount = 25;
Row_id = 1;
Col_id = 1;
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
  let number = input.value;
  if (number == 0) {
    number = 1;
  }
  TrCount += number;
  table.append(...AddTr(number));
}
function NewTd() {
  let input = document.getElementById("Col");
  let tr = document.getElementsByTagName("tr");
  let Old_id = Col_id;
  let number = input.value;
  if (number == 0) {
    number = 1;
  }
  TdCount += number;
  for (let row of tr) {
    Col_id = Old_id;
    row.append(...AddTd(number));
  }
}

function AddTr(Count) {
  let result = [];
  for (let i = 0; i <= Count - 1; i++) {
    let tr = document.createElement("tr");
    tr.id = Row_id;
    Row_id += 1;
    Col_id = 1;
    tr.append(...AddTd(TdCount));
    result.push(tr);
  }
  return result;
}

function AddTd(Count) {
  let result = [];
  for (let i = 0; i <= Count - 1; i++) {
    let td = document.createElement("td");
    td.id = Col_id;
    Col_id += 1;
    result.push(td);
  }
  return result;
}

function Search() {
  let td = document.getElementsByTagName("td");
  for (let cell of td) {
    cell.style.backgroundColor = "#202428";
  }
  let Ver = document.getElementById("Tr");
  let Hor = document.getElementById("Td");
  let table = document.getElementById("Table");
  for (tr of table.children) {
    if (tr.id == Ver.value) {
      for (td of tr.children) {
        if (td.id == Hor.value) {
          td.style.backgroundColor = "#80888f";
        }
      }
    }
  }
}
function Text() {
  let td = document.getElementsByTagName("td");
  let Text = document.getElementById("Text");
  for (let cell of td) {
    cell.style.backgroundColor = "#202428";
  }
  for (cell of td) {
    if (cell.innerHTML == Text.value) {
      cell.style.backgroundColor = "#80888f";
    }
  }
}

function ChangeMode() {
  let UI = document.getElementsByClassName("UI");
  let Search = document.getElementsByClassName("Search");
  let Text = document.getElementsByClassName("Text");
  if (Mode == "Normal") {
    for (let UIElem of UI) {
      UIElem.hidden = 1;
      if (UIElem.id == "Change_Mode" || UIElem.id == "Save") {
        UIElem.hidden = 0;
      }
    }
    Mode = "Value";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      let input = document.createElement("input");
      input.value = cell.innerHTML;
      cell.innerHTML = "";
      input.id = "Value";
      cell.append(input);
    }
  } else if (Mode == "Value") {
    for (let UIElem of Search) {
      UIElem.hidden = 0;
    }
    Mode = "Search";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      let input = document.getElementById("Value");
      cell.innerHTML = input.value;
      input.remove();
    }
  } else if (Mode == "Search") {
    for (let UIElem of Search) {
      UIElem.hidden = 1;
    }
    for (let UIElem of Text) {
      UIElem.hidden = 0;
    }
    Mode = "Text";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      cell.style.backgroundColor = "#202428";
    }
  } else if (Mode == "Text") {
    for (let UIElem of UI) {
      UIElem.hidden = 0;
      if (UIElem.id == "Table_Button") {
        UIElem.hidden = 1;
      }
    }
    for (let UIElem of Text) {
      UIElem.hidden = 1;
    }
    Mode = "Normal";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      cell.style.backgroundColor = "#202428";
    }
  }
}
function Save() {
  let table = document.getElementById("Table");
  let div = document.getElementById("Save");
  let p = document.createElement("p");
  p.innerHTML = table.outerHTML;
  div.append(p);
}
