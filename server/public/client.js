$(document).ready(readyFunction);
//this var is globally declared
let calcObject = {};
let calcOperator = "";
let currentCalculation = {
    num1: "",
    operator: "",
    num2: ""
}

function readyFunction() {
    //stretch goals
    //need to get numbers to appear in input - and possibly change this in future so nothing can be put into it randomly

    // something like

    // on click 

    // field append number + operator + number2 
    // there has to be an operator in between each number. 

    // if a decimal is entered, it must be applied to the number it is closest to. 
    // a decimal cannot be entered if a number doesn't preceed it 
    //how do i just get a number up there? 

    //try that 

    //i think this prevetns default for all buttons? 
    $('button').on('click', function(event){
        event.preventDefault();
    })

    $('.numberButton').on('click', setNumbers);
    
  
    $(".operator").on("click", setOperator);

}//readyFunction

function setNumbers() {
    console.log('this.text', $(this).text());
    
if (currentCalculation.operator === ""){
    currentCalculation.num1 += $(this).text();
    
}
else {
    currentCalculation.num2 += $(this).text();
}
console.log('inside getnumber, here is currentcalcualtion', currentCalculation);

displayNumbers();
}

function setOperator() {
currentCalculation.operator = $(this).text();
    displayNumbers();
}

function displayNumbers()
 {
    $('#calculation_area').text(`${currentCalculation.num1} ${currentCalculation.operator} ${currentCalculation.num2}`);
 }
















//   //call clear funct
//   $("#clear").on("click", function(event) {
//     event.preventDefault();
//     clearInputs();
//   });
//   //call equal funct
//   $("#equals").on("click", function(event) {
//     event.preventDefault();
//     console.log("equals clicked");
//     //calculateFields is ajax push funct
//     calculateFields();
//   });

//   $(".operator").on("click", function(event) {
//     event.preventDefault();
//     //captures the id of the clicked
//     calcOperator = $(this).attr("id");
//   });
// }

// function clearInputs() {
//   //console.log('in clearInputs');
//   $("input").val("");
// }

// //clear the object after it is sent to server
// function clearObj() {
//   //console.log('inside clearObj');
//   calcObject = {};
// }

// function calculateFields() {
//   //console.log('in calculateFields funct, heres calcobj', calcObject); this func will send the POST ajax call to the server, it will also call the display answer funct -this will be a separate function that runs an AJAX GET request, it will also call the func that will display the list of past calculations, ex 4 x 13 = 12
//   let input1 = $("#firstInput").val();
//   let input2 = $("#secondInput").val();
//   //add inputs and operator into obj
//   calcObject.input1 = input1;
//   calcObject.input2 = input2;
//   calcObject.operator = calcOperator;
//   //call func to clear inputs before ajax post call
//   clearInputs();

//   $.ajax({
//     method: "POST",
//     url: "/calculate",
//     data: calcObject
//   })
//     .then(function(response) {
//       //resets calc object for next equation
//       clearObj();
//       //console.log("This is the calcObj after its been cleared in the then after POST,", calcObject);
//       //calls the ajax get request funct
//       getCalculations();
//     })
//     .catch(function(error) {
//       alert("This didn't work, here is where you erred!", error);
//     });
// }

// //this funct gets the calculations by making ajax call
// function getCalculations() {
//   //console.log('inside getCalculations');

//   $.ajax({
//     method: "GET",
//     url: "/calculate"
//   })
//     .then(function(response) {
//       //console.log('this is the response in the then funct after ajax:', response);

//       renderResults(response);
//     })
//     .catch(function(error) {
//       alert("You've Got an Error with your Ajax call! Here it is:", error);
//     });

//   function renderResults(response) {
//     // console.log('inside render results, here is response', response);
//     // //Reverse the array so the most recent problem at top
//     // response.reverse();
//     //make the most recent result the h2 text
//     $("#calculationResult").text(response[response.length-1].result);
//     let ul = $("#pastCalculationList");
//     ul.empty();
//     for (i of response) {
//       let li = $(
//         `<li>${i.input1} ${i.operator} ${i.input2} = ${i.result}</li>`
//       );
//       ul.append(li);
//     }
//   }
// }

///OLD NOTES I moved to the bottom of this file to make code clearer --
//do i create on click functs for add subtract multipl divide
//how do i capture this click?
//onclick of operator adds to value of 'chosenOperator' to that button
//and other operator buttons become unclickable
//but how do i store that operator value for use in an obj

//my thought is that an obj is created when equals is clicked
//like {
//operator: plus/minus/mulitplication/divison
//firstNumber
//secondNumber
//}

// function operatorEvaluator(calcOperator) {
// // console.log('this is inside the operator eval');
// //  console.log('THIS is this in the operatorEvaluator function');
//  calcObject.operator = calcOperator;
//     console.log('calcObject in operatorEvaluator func', calcObject);
// }
