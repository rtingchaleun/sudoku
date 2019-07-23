const validInput = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const solution = [
  1, 3, 2,    8, 7, 4,    9, 6, 5,
  9, 8, 4,    3, 6, 5,    7, 2, 1,
  7, 5, 6,    1, 9, 2,    3, 4, 8,

  8, 1, 7,    9, 2, 6,    4, 5, 3,
  4, 9, 5,    7, 3, 1,    6, 8, 2,
  2, 6, 3,    5, 4, 8,    1, 7, 9,

  3, 2, 9,    6, 8, 7,    5, 1, 4,
  5, 7, 8,    4, 1, 3,    2, 9, 6,
  6, 4, 1,    2, 5, 9,    8, 3, 7
];


let inputList = document.getElementsByTagName("input")
let oldValue;
let newValue;

let thisId;
let thisClass;
let thisSquare;
let thisRow;
let thisColumn;
let thisSection;

let rowValues = [ ];
let columnValues = [ ];
let sectionValues = [ ];

let completeSquares;
let incompleteSquares;


init();


function init() {
  //checkRows();
  //checkColumns();

  //console.log(solution);
  //console.log(inputList);
  for(let i = 0; i < inputList.length; i++) {
    inputList[i].setAttribute("maxlength", "1");
    inputList[i].addEventListener("click", inputClick);
    inputList[i].addEventListener("focusout", inputFocusOut);

    if (inputList[i].value == ""){
      //console.log(inputList[i].id + " contains no text");
      inputList[i].classList.add("editable");
    } else {
      inputList[i].setAttribute("readonly", "true");
      inputList[i].classList.add("read-only");
    }
  }

  let btn = document.getElementById("btn-solve");
  btn.addEventListener("click", showSolution);

  updateCounter();
  console.log("initialized");
}
function inputClick(){
  // clear light blue highlighting
  for (let i = 0; i < inputList.length; i++){
    element = inputList[i];
    element.classList.remove("light-blue", "lighten-3")
  }

  console.log(" ");
  thisId = this.id;
  thisClass = this.className;
  console.log("clicked square: #" + thisId + " ." + thisClass);

  thisSquare = this;
  console.log("this square: " + thisSquare);

  let array = thisId.split("");
  thisRow = array[0];
  thisColumn = array[2];
  console.log("row: " + thisRow);
  console.log("column: " + thisColumn);

  // save existing section values
  if (thisSquare.classList.contains("s1")) {
    thisSection = "s1";
    let count = 0;
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
    console.log(sectionValues);
  } else if (thisSquare.classList.contains("s2")) {
    thisSection = "s2";
    let count = 0;
    for (let i = 1; i <= 3; i++) {
      for (let j = 4; j <= 6; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
    console.log(sectionValues);
  } else if (thisSquare.classList.contains("s3")) {
    thisSection = "s3";
    let count = 0;
    for (let i = 1; i <= 3; i++) {
      for (let j = 7; j <= 9; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s4")) {
    thisSection = "s4";
    let count = 0;
    for (let i = 4; i <= 6; i++) {
      for (let j = 1; j <= 3; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s5")) {
    thisSection = "s5";
    let count = 0;
    for (let i = 4; i <= 6; i++) {
      for (let j = 4; j <= 6; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s6")) {
    thisSection = "s6";
    let count = 0;
    for (let i = 4; i <= 6; i++) {
      for (let j = 7; j <= 9; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s7")) {
    thisSection = "s7";
    let count = 0;
    for (let i = 7; i <= 9; i++) {
      for (let j = 1; j <= 3; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s8")) {
    thisSection = "s8";
    let count = 0;
    for (let i = 7; i <= 9; i++) {
      for (let j = 4; j <= 6; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }  else if (thisSquare.classList.contains("s9")) {
    thisSection = "s9";
    let count = 0;
    for (let i = 7; i <= 9; i++) {
      for (let j = 7; j <= 9; j++) {
        let element = document.getElementById(i + "-" + j)
        sectionValues[count] = element.value;
        count++;
      }
    }
  }
  console.log(sectionValues);

  // save existing row values
  for (let i = 1; i <= 9; i++){
    let x = document.getElementById(thisRow + "-" + i);
    rowValues[i-1] = x.value;
  }
  console.log(rowValues);

  // save existing column values
  for (let i = 1; i <= 9; i++){
    let y = document.getElementById(i + "-" + thisColumn);
    columnValues[i-1] = y.value;
  }
  console.log(columnValues);

  if (thisSquare.classList.contains("editable")){
    this.select();                              // auto select existing text
    oldValue = this.value;                      // save existing value
    console.log("old value: " + oldValue);
  }

  // highlight all matching numbers
  if (this.value >= 1 && this.value <= 9){
    let selectedNum = this.value;
    console.log("highlighting all " + selectedNum + "s");
    for (let i = 1; i <=9; i++){
      for (let j = 1; j <=9; j++){
        let element = document.getElementById(i + "-" + j);
        let num = element.value;
        if (selectedNum == num){
          element.classList.add("light-blue", "lighten-3");
        }
      }
    }
  }

}


function inputFocusOut(){
  console.log(" ");
  console.log("focus out " + this.id);
  console.log(rowValues);

  //remove highlighting
  thisSquare.classList.remove("red", "lighten-4");
  thisSquare.classList.remove("light-blue", "lighten-3");

  newValue = this.value;                      // save new value
  console.log("old value: " + oldValue);
  console.log("new value: " + newValue);


  // validate new value
  if (thisSquare.classList.contains("editable") && newValue != oldValue){
    // check if all values in that row are unique
    for (let i = 0; i < 9; i++){
      console.log("does " + newValue + " match " + rowValues[i] + "?");

      if (newValue == rowValues[i] && newValue != ""){
        console.log("found duplicate value in the row");
        this.classList.add("red", "lighten-4");
        break
      }
    }
    // check if all values in that column are unique
    for (let i = 0; i < 9; i++){
      if (newValue == columnValues[i] && newValue != ""){
        console.log("found duplicate value in the column");
        this.classList.add("red", "lighten-4");
        break
      }
    }
    // check if all values in that section are unique
    for (let i = 0; i < 9; i++){
      if (newValue == sectionValues[i] && newValue != ""){
        console.log("found duplicate value in the section");
        this.classList.add("red", "lighten-4");
        break
      }
    }
  }
  updateCounter();
}

function updateCounter(){
  let counter1 = 9;
  let counter2 = 9;
  let counter3 = 9;
  let counter4 = 9;
  let counter5 = 9;
  let counter6 = 9;
  let counter7 = 9;
  let counter8 = 9;
  let counter9 = 9;

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let element = document.getElementById(i + "-" + j);
      console.log(element.value);
      if (element.value == 1){
        counter1--;
      } else if (element.value == 2){
        counter2--;
      } else if (element.value == 3){
        counter3--;
      } else if (element.value == 4){
        counter4--
      } else if (element.value == 5){
        counter5--;
      } else if (element.value == 6){
        counter6--;
      } else if (element.value == 7){
        counter7--;
      } else if (element.value == 8){
        counter8--;
      } else if (element.value == 9){
        counter9--;
      }
    }
  }

  //display counter
  let display = document.getElementById("counter-1");
  display.innerText = counter1;
  display = document.getElementById("counter-2");
  display.innerText = counter2;
  display = document.getElementById("counter-3");
  display.innerText = counter3;
  display = document.getElementById("counter-4");
  display.innerText = counter4;
  display = document.getElementById("counter-5");
  display.innerText = counter5;
  display = document.getElementById("counter-6");
  display.innerText = counter6;
  display = document.getElementById("counter-7");
  display.innerText = counter7;
  display = document.getElementById("counter-8");
  display.innerText = counter8;
  display = document.getElementById("counter-9");
  display.innerText = counter9;

  console.log("counter updated");
}

function showSolution(){
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("1-" + i);
      thisSquare.value = solution[i - 1];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("2-" + i);
      thisSquare.value = solution[i + 8];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("3-" + i);
      thisSquare.value = solution[i + 17];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("4-" + i);
      thisSquare.value = solution[i + 26];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("5-" + i);
      thisSquare.value = solution[i + 35];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("6-" + i);
      thisSquare.value = solution[i + 44];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("7-" + i);
      thisSquare.value = solution[i + 53];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("8-" + i);
      thisSquare.value = solution[i + 62];
    }
    for (let i = 1; i <= 9; i++){      // count from 0 to 8
      let thisSquare = document.getElementById("9-" + i);
      thisSquare.value = solution[i + 71];
    }
    updateCounter();
    console.log("showing solution");
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
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row1: " + sum);
  let valid = checkValid(sum);
}
function checkRow2() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("2-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row2: " + sum);
  let valid = checkValid(sum);
}
function checkRow3() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("3-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row3: " + sum);
  let valid = checkValid(sum);
}
function checkRow4() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("4-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row4: " + sum);
  let valid = checkValid(sum);
}
function checkRow5() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("5-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row5: " + sum);
  let valid = checkValid(sum);
}
function checkRow6() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("6-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row6: " + sum);
  let valid = checkValid(sum);
}
function checkRow7() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("7-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row7: " + sum);
  let valid = checkValid(sum);
}
function checkRow8() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("8-" + i);
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of row8: " + sum);
  let valid = checkValid(sum);
}
function checkRow9() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById("9-" + i);
    let value = element.value;
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
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column1: " + sum);
  let valid = checkValid(sum);
}
function checkColumn2() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-2");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column2: " + sum);
  let valid = checkValid(sum);
}
function checkColumn3() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-3");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column3: " + sum);
  let valid = checkValid(sum);
}
function checkColumn4() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-4");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column4: " + sum);
  let valid = checkValid(sum);
}
function checkColumn5() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-5");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column5: " + sum);
  let valid = checkValid(sum);
}
function checkColumn6() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-6");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column6: " + sum);
  let valid = checkValid(sum);
}
function checkColumn7() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-7");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column7: " + sum);
  let valid = checkValid(sum);
}
function checkColumn8() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-8");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column8: " + sum);
  let valid = checkValid(sum);
}
function checkColumn9() {
  let sum = 0;
  for ( let i = 1; i <= 9; i++ ) {
    let element = document.getElementById(i + "-9");
    let value = element.value;
    sum = sum + parseInt(value);
  }
  console.log("sum of column9: " + sum);
  let valid = checkValid(sum);
}
