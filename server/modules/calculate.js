let calculationsArr = [];

function calculateProblem(numbersObj) {
  //numbersObj is the posted obj from the ajax call
  let el = numbersObj;
  let result = 0;
  if (el.operator === "+") {
    result = Number(el.num1) + Number(el.num2);
    el.operator = "+";
  }
  if (el.operator === "-") {
    result = Number(el.num1) - Number(el.num2);
    el.operator = "-";
  }
  if (el.operator === "*") {
    result = Number(el.num1) * Number(el.num2);
    el.operator = "*";
  }
  if (el.operator === "/") {
    result = Number(el.num1) / Number(el.num2);
    el.operator = "/";
  }

  numbersObj.result = result;
  calculationsArr.push(numbersObj);
}

//Removed this deleteArr func cuz it wasn't working as expected

//These deleteArr() function is not deleting the array in the backend. I also tried setting calculationsArr to an empty array
// function deleteArr() {
//  calculationsArr = [];

//   //calculationsArr.slice(0, calculationsArr.length-1);
// }

module.exports = {
  calculationsArr: calculationsArr,
  calculateProblem: calculateProblem
  // deleteArr: deleteArr
};
