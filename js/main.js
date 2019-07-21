const validInput = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let oldValue;
let newValue;
let id;
let thisSquare;
let thisRow;
let thisColumn;
let rowValues = [ ];
let columnValues = [ ];

init();


function init() {
  //checkRows();
  //checkColumns();

  let tdList = document.getElementsByTagName("td")
  for(let i = 0; i < tdList.length; i++) {
    if (tdList[i].innerText == ""){
      console.log(tdList[i].id + " contains no text");
      tdList[i].setAttribute("contenteditable", "true");
      tdList[i].className = "editable";
      tdList[i].addEventListener("click", tdClick);
      tdList[i].addEventListener("focusout", tdFocusOut);
    } else {
      tdList[i].setAttribute("contenteditable", "false");
      tdList[i].className = "read-only";
    }
  }
  console.log("initialized");
}
function tdClick(){
  id = this.id;
  console.log("clicked square: " + this.id);

  let array = id.split("");
  console.log(array);

  thisRow = array[0];
  thisColumn = array[2];
  console.log("row: " + thisRow);
  console.log("column: " + thisColumn);

  // save existing row values
  for (let i = 1; i <= 9; i++){
    let x = document.getElementById(thisRow + "-" + i);
    rowValues[i-1] = x.innerText;
    let y = document.getElementById(i + "-" + thisColumn);
    columnValues[i-1] = y.innerText;
  }
  console.log(rowValues);
  console.log(columnValues);

  oldValue = this.innerText;                      // save existing value
  console.log("old value: " + oldValue);

  this.innerText = "";                            // clear value
}
function tdFocusOut(){
  console.log("focus out " + this.id);

  newValue = this.innerText;                      // save new value
  console.log("new value: " + newValue);

  // check if all values in that row are unique
  for (let i = 0; i < 9; i++){
    if (newValue == rowValues[i] && newValue != ""){
      console.log("found duplicate value in the row");
      this.classList.add("red", "lighten-4");
      console.log(this);
    }
  }


  // check if all values in that column are unique
  for (let i = 0; i < 9; i++){
    if (newValue == columnValues[i] && newValue != ""){
      console.log("found duplicate value in the column");
    }
  }

}

function checkValid(sum) {
  if (sum == 45) {
    console.log("valid");
    return true;
  } else {
    console.log("invalid");
    return false;
  }
}

function checkRows() {
  checkRow1();
  checkRow2();
  checkRow3();
  checkRow4();
  checkRow5();
  checkRow6();
  checkRow7();
  checkRow8();
  checkRow9();
}
function checkRow1() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {

    let element = document.getElementById("1-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row1: " + sum);
  let valid = checkValid(sum);
}
function checkRow2() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("2-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row2: " + sum);
  let valid = checkValid(sum);
}
function checkRow3() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("3-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row3: " + sum);
  let valid = checkValid(sum);
}
function checkRow4() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("4-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row4: " + sum);
  let valid = checkValid(sum);
}
function checkRow5() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("5-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row5: " + sum);
  let valid = checkValid(sum);
}
function checkRow6() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("6-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row6: " + sum);
  let valid = checkValid(sum);
}
function checkRow7() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("7-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row7: " + sum);
  let valid = checkValid(sum);
}
function checkRow8() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("8-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row8: " + sum);
  let valid = checkValid(sum);
}
function checkRow9() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("9-" + i);
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of row9: " + sum);
  let valid = checkValid(sum);
}
function checkColumns() {
  checkColumn1();
  checkColumn2();
  checkColumn3();
  checkColumn4();
  checkColumn5();
  checkColumn6();
  checkColumn7();
  checkColumn8();
  checkColumn9();
}
function checkColumn1() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-1");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column1: " + sum);
  let valid = checkValid(sum);
}
function checkColumn2() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-2");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column2: " + sum);
  let valid = checkValid(sum);
}
function checkColumn3() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-3");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column3: " + sum);
  let valid = checkValid(sum);
}
function checkColumn4() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-4");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column4: " + sum);
  let valid = checkValid(sum);
}
function checkColumn5() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-5");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column5: " + sum);
  let valid = checkValid(sum);
}
function checkColumn6() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-6");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column6: " + sum);
  let valid = checkValid(sum);
}
function checkColumn7() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-7");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column7: " + sum);
  let valid = checkValid(sum);
}
function checkColumn8() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-8");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column8: " + sum);
  let valid = checkValid(sum);
}
function checkColumn9() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-9");
    let value = element.innerText;
    sum = sum + parseInt(value);
  }
  console.log("sum of column9: " + sum);
  let valid = checkValid(sum);
}
