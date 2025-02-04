let tdCount = 20
let Mode = "Normal"
let Vertical_id = 1
let Horisontal_id = 1
function NewTable() {
    let button_table = document.getElementById("Table_Button")
    let button_row = document.getElementById("Row_Button")
    let input_row = document.getElementById("Row_input")
    let button_col = document.getElementById("Col_Button")
    let input_col = document.getElementById("Col_input")
    let change_mode = document.getElementById("Change_Mode")
    let button_remove = document.getElementById("Table_Button_Remove")
    let div = document.createElement("div")
    div.id = "Table_div"
    let table = document.createElement("table")
    table.id = "Table"
    document.body.prepend(div)
    div.prepend(table)
    table.append(...addRow(5))
    button_table.hidden = 1
    button_row.hidden = 0
    input_row.hidden = 0
    button_col.hidden = 0
    input_col.hidden = 0
    change_mode.hidden = 0
    button_remove.hidden = 0
}

function NewRow() {
    let table = document.getElementById("Table")
    let input = document.getElementById("Row_input")
    table.append(...addRow(input.value))
}
function NewCol() {
    let tr = document.getElementsByTagName("tr")
    let input = document.getElementById("Col_input")
    tdCount += parseInt(input.value)
    Vertical_id = 1
    for(let row of tr) {
        row.append(...addTdCol(input.value));
        Vertical_id += 1
    }
}
function addTdCol(count) {
    let result = [];
    for(let i = 0; i <= count - 1; i++) {
        let td = document.createElement("td")
        td.id = Vertical_id + "; " + Horisontal_id
        Horisontal_id += 1
        result.push(td);
    }
    return result;
}
function addRow(count) {
    let result = [];
    for(let i = 0; i <= count - 1; i++) {
        let tr = document.createElement("tr")
        tr.append(...addTdRow())
        Vertical_id += 1
        Horisontal_id = 1
        result.push(tr);
}
return result;
    }
function addTdRow() {
    let result = [];
    for(let i = 0; i <= tdCount - 1; i++) {
        let td = document.createElement("td")
        td.id = Vertical_id + "; " + Horisontal_id
        Horisontal_id += 1
        result.push(td);
    }
    return result;
}

function ChangeMode() {
    let button_row = document.getElementById("Row_Button")
    let input_row = document.getElementById("Row_input")
    let button_col = document.getElementById("Col_Button")
    let input_col = document.getElementById("Col_input")
    let button_remove = document.getElementById("Table_Button_Remove")
    if(Mode == "Normal") {
        Mode = "Value"
        button_row.hidden = 1
        input_row.hidden = 1
        button_col.hidden = 1
        input_col.hidden = 1
        button_remove.hidden = 1
        let td = document.getElementsByTagName("td")
        for(let cell of td) {
            let input = document.createElement("input")
            input.maxLength = "12"
            input.value = cell.innerHTML
            cell.innerHTML = ""
            input.id = "Value_Mode"
            cell.append(input);
            input.hidden = 0
    }
    } else if(Mode == "Value") {
        Mode = "Normal"
        button_row.hidden = 0
        input_row.hidden = 0
        button_col.hidden = 0
        input_col.hidden = 0
        button_remove.hidden = 0
        let td = document.getElementsByTagName("td")
        for(let cell of td) {
            let input = document.getElementById("Value_Mode")
            cell.innerHTML = input.value
            input.remove()
        }
    }
}

function RemoveTable() {
    let button_table = document.getElementById("Table_Button")
    let button_row = document.getElementById("Row_Button")
    let input_row = document.getElementById("Row_input")
    let button_col = document.getElementById("Col_Button")
    let input_col = document.getElementById("Col_input")
    let change_mode = document.getElementById("Change_Mode")
    let button_remove = document.getElementById("Table_Button_Remove")
    let table = document.getElementById("Table")
    table.remove()
    button_table.hidden = 0
    button_row.hidden = 1
    input_row.hidden = 1
    button_col.hidden = 1
    input_col.hidden = 1
    change_mode.hidden = 1
    button_remove.hidden = 1
}

function Check() {

}

let timer = setInterval(Check, 100)