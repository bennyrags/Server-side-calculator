$(document).ready(readyFunction);
//this var is globally declared
let calcOperator = "";
let currentCalculation = {
  num1: "",
  operator: "",
  num2: ""
};

function readyFunction() {
  getCalculations();
  $("button").on("click", function(event) {
    event.preventDefault();
  });

  $(".numberButton").on("click", setNumbers);
  $(".operator").on("click", setOperator);
  $("#clear").on("click", clearAll);
  $("#equals").on("click", calculateFields);

} //readyFunction

function setNumbers() {
  console.log("this.text", $(this).text());

  if (currentCalculation.operator === "") {
    currentCalculation.num1 += $(this).text();
  } else {
    currentCalculation.num2 += $(this).text();
  }
  console.log(
    "inside getnumber, here is currentcalcualtion",
    currentCalculation
  );

  displayNumbers();
}//end setNumbers

function setOperator() {
  currentCalculation.operator = $(this).text();
  displayNumbers();
}//end setOperator

function displayNumbers() {
  $("#calculation_area").text(
    `${currentCalculation.num1} ${currentCalculation.operator} ${
      currentCalculation.num2
    }`
  );
}//end displayNumbers

function clearAll() {
  $("#calculation_area").text("");
  currentCalculation.operator = "";
  currentCalculation.num1 = "";
  currentCalculation.num2 = "";
}//end clearAll

function calculateFields() {
//   //console.log('in calculateFields funct, heres calcobj', calcObject); 
$('#calculation_area').text("");
 $.ajax({
 method: "POST",
url: "/calculate",
data: currentCalculation
  })
    .then(function(response) {
      clearAll();
      getCalculations();
    })
    .catch(function(error) {
      alert("This didn't work, here is where you erred!", error);
    });
}

function getCalculations() {
  
  $.ajax({
    method: "GET",
    url: "/calculate"
  })
    .then(function(response) {
      renderResults(response);
    })
    .catch(function(error) {
      alert("You've Got an Error with your Ajax call! Here it is:", error);
    });
}
  function renderResults(response) {
    let ul = $("#pastCalculationList");
    ul.empty();
    for (i of response) {
      let li = $(
        `<li>${i.num1} ${i.operator} ${i.num2} = ${i.result}</li>`
      );
      ul.append(li);
    }
  }