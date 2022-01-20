
var userName = prompt("Please enter your name hardworker!");
var Gender = prompt("Wlecome to our website "+userName+" ,Please enter your gender (M,F):"); //should be male or female
var Age = prompt("Please enter your age:");

if (Age<=0)
{
    alert ("You must be kidding! you can't be that young !");
}

var confirmation = confirm("Do you want to skip our Welcoming message "+userName+" ?");

var gender = Gender.toUpperCase(); 

if (confirmation == false)
{
    switch (gender)
    {
    case "M": 
        alert("Welcome to our To Do List website Mr. "+userName+",\nWe hope you a great and managed time!");
        break;

    case "F":
        alert("Welcome to our To Do List website Ms. "+userName+" ,\nWe hope you a great and managed time!");
        break; 

    default: 

        alert("Welcome to our To Do List website "+userName+" ,\nWe hope you a great and managed time!");
         break; 
    }
}


