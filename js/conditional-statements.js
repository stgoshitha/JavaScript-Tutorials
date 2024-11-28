//Conditional Statements

//Conditional Statements are used to excute different action based on different conditon

// if statement
// if else statement
// else if statement

//================================================================================

// if statement

if(true){
  console.log("Condition is true");
}

if(false){
  console.log("Condition is false"); // not excute
}

let country = "SriLanka"

let Age = 20;

if(Age >=18 && country == "SriLanka"){
  console.log("You are eligible to vote");
}

//================================================================================

// if else statement

if(Age >=18){
  console.log("You are an adult.");
}
else{
  console.log("You are a child");
}

//================================================================================

// else if statement

if(Age >=18){
  console.log("You are an adult.");
}
else if(Age >= 16){
  console.log("You are a teenager");
}
else{
  console.log("You are a child");
}


//================================================================================

// switch statement
//The switch statement in JavaScript is condtional statement that is used to execute a block of code based on the value of an expression.


let value = 42; // Add --> 42, "Goshitha", true

switch(typeof value){
  case "number":
    console.log("Number");
    break;
  
  case "string":
    console.log("String");
    break;

  case "boolean":
    console.log("Boolean");
    break;

  default:
    console.log("Other");
    break;
  
}


let dayName = 3; // Add --> 1, 4, 5, 7

switch (dayName) {
  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  case 7:
    dayName = "Sunday";
    break;

  default:
    dayName = "Invalid Day";
    break;
}

console.log("The day is " + dayName);

//================================================================================

//Ternary Operator

// condition ? value_if_true : value_if_false

let myAge = 20;

let msg = (myAge >= 18) ? "You are an adult" : "You are a child";

console.log(msg)