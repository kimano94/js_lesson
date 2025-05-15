TrCount = 5;
TdCount = 25;
Row_id = 1;
Col_id = 1;
let Mode = "Normal";

function NewTable() {
  //Создает таблицу
  let div = document.getElementById("Table_div");
  div.style.scrollbarWidth = "thin";
  let UI = document.getElementsByClassName("UI");
  let table = document.createElement("table");
  table.id = "Table";
  table.append(...AddTr(TrCount));
  div.append(table);

  //Показывает кнопки
  for (let UIElem of UI) {
    if (UIElem.hidden != 1) {
      UIElem.hidden = 1;
    } else if (UIElem.hidden != 0) {
      UIElem.hidden = 0;
    }
  }
}

function NewTr() {
  //Добавляет tr
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
  //Добавляет td
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
  //Добавляет tr
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
  //Добавляет td
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
  //Поиск по позиции
  let td = document.getElementsByTagName("td");
  for (let cell of td) {
    cell.style.backgroundColor = null;
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
  //Поиск по тексту
  let td = document.getElementsByTagName("td");
  let Text = document.getElementById("Text");
  for (let cell of td) {
    cell.style.backgroundColor = null;
  }
  for (cell of td) {
    if (cell.innerHTML == Text.value) {
      cell.style.backgroundColor = "#80888f";
    }
  }
}

function ChangeMode() {
  //Меняет режим
  let UI = document.getElementsByClassName("UI");
  let Search = document.getElementsByClassName("Search");
  let Text = document.getElementsByClassName("Text");
  if (Mode == "Normal") {
    //На инпут

    //Показывает и скрывает кнопки
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
    //На поиск по id

    //Показывает и скрывает кнопки
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
    //На поиск по тексту

    //Показывает и скрывает кнопки
    for (let UIElem of Search) {
      UIElem.hidden = 1;
    }
    for (let UIElem of Text) {
      UIElem.hidden = 0;
    }

    Mode = "Text";
    let td = document.getElementsByTagName("td");
    for (let cell of td) {
      cell.style.backgroundColor = null;
    }
  } else if (Mode == "Text") {
    //На обычный

    //Показывает и скрывает кнопки
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
      cell.style.backgrounTaColor = null;
    }
  }
}
function Save() {
  //Сохраняет таблицу
  let table = document.getElementById("Table");
  let div = document.getElementById("Save_div");

  let ps = document.getElementById("p");
  if (ps != null) {
    // Проверяет существование
    let result = table.outerHTML;
    result = result.replaceAll(
      '<td id="',
      '<td style="border:solid 1px black" id="'
    );
    result = result.replaceAll("&", "&amp;");
    result = result.replaceAll("<", "&lt;");
    result = result.replaceAll(">", "&gt;");
    ps.innerHTML = result;
  } else {
    let pe = document.createElement("p");
    let p = document.createElement("p");
    p.id = "p";
    div.append(pe);
    pe.innerHTML = "<strong>Скопируйте и вставьте в свой проект:<strong>";
    div.append(p);
    let result = table.outerHTML;
    result = result.replaceAll(
      '<td id="',
      '<td style="border:solid 1px black" id="'
    );
    result = result.replaceAll("&", "&amp;");
    result = result.replaceAll("<", "&lt;");
    result = result.replaceAll(">", "&gt;");
    p.innerHTML = result;
  }
}
