//function is a block of code that performs the specific task
//fuction in JavaScript are reusable block of the code that can be called from anywhere in the program.

/* 

function fuctionName(){
  //code to be executed
}

 */

//declaration of function
function create(){
  //body of the function
  console.log("Hello, Goshitha");
}

//call the function
create();

//================================================================================

//Parameters and Arguments

function send(firstName, lastName){
  console.log("Hello, " + firstName + lastName);
}

send("goshitha ", "Premachandra");

//================================================================================

//Default Parameters

function sum1(x, y){
  console.log(x + y); // 10 + undefined
}

sum1(10);

function sum2(x, y = 0){
  console.log(x + y); // 10 + 0
}
sum2(10)
sum2(10, 30)

//================================================================================

//Function Return

function add(num1, num2){
  let total = num1 + num2;
  return total;
}

let total = add(10,20);
console.log(total);


function fn1(x){
  function fn2(y){
    return x * y;
  }
  return fn2;
}

let fnResult = fn1(3);
console.log(fnResult);

console.log(fnResult(2));

//================================================================================

//Callbacks function

//Pass the funtion to a fuction using parameter

function display(result){
  console.log(result);
}

function addNew(num1, num2, myCallback){
  let sum = num1 + num2;
  myCallback(sum);
}

addNew(10, 20, display);

//================================================================================

//Anonymous functions 
//Anonymous function in JavaScript, are functions that are not declared with a name.

let wirte = function(){
  console.log("Hello, World!");
}

wirte();

let sum = function(x,y){
  return x + y ;
}

let sumAnonymous = sum(10,20);
console.log(sumAnonymous);
console.log(sum(10,20));

//declared one function without any name
(
function(){
  console.log("Hello, World!");
}
)
//call function
();


setTimeout(
  function(){
  console.log("Time line");
}
,3000)


//================================================================================

//Recursive fuction
//Recursive fuction in JavaScript is a function that call itself.

/*

function myFunction(){
  myFunction();
}

myFunction() 

*/

function countDown(num){
  console.log(num);
  num--;
  if(num >= 0){
    countDown(num);
  }

}

countDown(10);