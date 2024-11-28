//================================================================================
//Variable
// var | let | const

// var - Can be reassigned and redeclared. befor ES6. Scope:Function-scoped.
// let - Can be reassigned but not redeclared. after ES6. Scope: Block-scoped.
// const - Cannot be reassigned or redeclared. Scope: Block-scoped

var x = 30;
var x = 20;

let y = 30;
//let y = 20; - error

var firstName = "Goshitha";
var firstname = "Nimal";

//================================================================================
//example for Block-scoped.
let outsideif = 10;

if(x>5){
  let insideif = 20;
  console.log(insideif);
}

console.log(outsideif)
//console.log(insideif); error - insideif is not defined

//================================================================================

const number = 4;
console.log(number);
//number = 5; error - cannot reassign a constant variable.

//================================================================================

//Scope

//Global Scope 
 var x = "hello, Goshitha";
 function example(){
  console.log(x + " - inside the fuction");
 }

 example();
 console.log(x + " - outside the fuction");


 //function Scope
 function example2(){
  var fs = "hello, Goshitha";
  console.log(fs);
 }

 example2();
 //console.log(fs); error - fs is not defined

 //Block Scope 
 //Block of the code is a group of statement that are enclosed in curly braces({})

 function example3(){
  if(true){
      let bv = "hello, block";
      console.log(bv);
    }
    //console.log(bv); error - fs is not defined
 }
 example3();
//console.log(bv); error - fs is not defined