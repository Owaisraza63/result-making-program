


var resultContainer = document.querySelector("#result-container");
resultContainer.style.display = "none"


function createResult(){


resultContainer.style.display = "inline"

var total = 500;
var grade ;
var userName = document.querySelector("#userName").value;
var rollNumber = +document.querySelector("#Roll-Number").value;
var mark1 = +document.querySelector("#E-marks").value;
var mark2 = +document.querySelector("#U-marks").value;
var mark3 = +document.querySelector("#M-marks").value;
var mark4 = +document.querySelector("#I-marks").value;
var mark5 = +document.querySelector("#C-marks").value;
var obtaintSubjectMarks = mark1 + mark2 + mark3 + mark4 + mark5;

var obtaintPrecentage = (obtaintSubjectMarks / total)*100;

var totalMarks = document.querySelector("#total-marks");
var Precentage = document.querySelector("#Precentage");
var usergGrade = document.querySelector("#grade");
var resultUserName = document.querySelector("#r-user-name")
var resultRollNum = document.querySelector("#r-roll-num")

resultUserName.innerHTML = userName
resultRollNum.innerHTML = rollNumber
totalMarks.innerHTML = obtaintSubjectMarks
Precentage.innerHTML = obtaintPrecentage.toFixed() + "%"

if(obtaintPrecentage >= 90){
    grade = "A+"
    usergGrade.style.backgroundColor = "green"
    Precentage.style.backgroundColor = "green"
} else if(obtaintPrecentage >= 80){
    grade = "A"
} else if(obtaintPrecentage >= 65){
    grade = "B"
} else if (obtaintPrecentage >= 50){
    grade = "C"
} else {
    grade = "Fail"
    usergGrade.style.backgroundColor = "red"
    Precentage.style.backgroundColor = "red"
}
usergGrade.innerHTML = grade



}