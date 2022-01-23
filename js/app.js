//function of task 06 
function askAgain (answer1) {
    let answerUpper =answer1.toUpperCase();
    while (answerUpper != "YES" && answerUpper != "NO" && answerUpper != "Y" && answerUpper != "N") {
        answer1 = prompt("Please answer with Yes/Y or No/N");
        answerUpper= answer1.toUpperCase ();
    }
    return answer1;
}

//Task 05 code
var userName = prompt("Please enter your name hardworker!");
var Gender = prompt("Wlecome to our website " + userName + " ,Please enter your gender (male,female):");
//should be male or female
var gender = Gender.toUpperCase();

if (gender != "FEMALE")
    while (gender != "MALE") {
        if (gender == "FEMALE")
            break;

        var Gender = prompt("Please enter your gender (male,female):");
        var gender = Gender.toUpperCase();
    }
var Age = prompt("Please enter your age:");

if (Age <= 0) {
    alert("You must be kidding! you can't be that young !");
}

var confirmation = confirm("Do you want to skip our Welcoming message " + userName + " ?");



if (confirmation == false) {
    switch (gender) {
        case "MALE":
            alert("Welcome to our To Do List website Mr. " + userName + ",\nWe hope you a great and managed time!");
            break;

        case "FEMALE":
            alert("Welcome to our To Do List website Ms. " + userName + " ,\nWe hope you a great and managed time!");
            break;

        default:

            alert("Welcome to our To Do List website " + userName + " ,\nWe hope you a great and managed time!");
            break;
    }
}
// task 06 code 
let answers = [];

//first question 
let answer = prompt("Do you consider yourself a happy person?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));

//second question

answer = prompt("Ever thought about giving yourself a treat lately?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));

//Third question
answer = prompt("I recommend you to give yourself you favourite treat everywhile.\n Are you happy now?\n Please answer with Yes/Y or No/N");
answers.push(askAgain(answer));

console.log(answers)
