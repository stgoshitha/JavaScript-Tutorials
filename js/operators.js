//Operators in JavaScript are symbols
//That are used to perform operations and operands

//Operands are the values and variables
//Operations specify what action to perform on the operands

10 + 20;

//10 and 20 - operands
// Addition(+) - Operation


//Arithmetic Operators
//Assignment Operators
//Comparisin Operators
//Logical Operators
//String Operators


//================================================================================

//Arithmetic Operators

//Arithmetic operators are used to perform mathematical operations on operands.

let sum = 10 + 20 //Addition
let sub = 30 - 4 //Subtraction
let mul = 5 * 6 //Multiplication
let div = 10 / 2 //Division
let mod = 10 % 3 //Modulus (Remainder)
let exp = 2 ** 3 //Exponentiation (2x2x2)

console.log(sum , sub, mul, div, mod, exp);

/*
(Order of Operation)

let result = 2 + 3 * 4
console.log(result) // Output: 14

first ==> () 
Secound ==> (*) and (/) --> have the same priority
Third ==> (+) and (-) --> have the same priority

*/

let result = 2 + 3 * 4;
console.log(result);


//================================================================================

//Assignment Operators
//Assignment operators are used to assign a value to a variable.

let assign = 5;
console.log(assign);

 assign += 3;
 console.log(assign);

 assign -= 3
 console.log(assign);

 assign *= 2;
 console.log(assign);     

 assign /= 2;
 console.log(assign);

 assign %= 3;
 console.log(assign);

//assign value is 2
 assign **= 3;  //(2x2x2)
 console.log(assign);

 while(assign <= 100){
  console.log(assign);
  assign += 2;
 }

 //Increment and Decrement operators
 //Increment and decrement operators are used to increase or decrease the value of a variable by 1.

 let increment = 5;
 console.log(increment++); // 5
 console.log(increment ); // 6
 console.log(++increment); //7

 let decrement = 5;
 console.log(decrement--);// 5
 console.log(decrement );//4
 console.log(--decrement);//3

//================================================================================

//Comparisin Operators
//Comparison operators are used to compare two values and give back boolean value(true or false)

//Comparison operators are useful in decision-making and loop programs in JavaScript

/*

< (less than)
> (Greater than)
<= (less than or equal)
>= (greater than or equal)

== (equal check)
!= (not equal check)(flipped value of equal check)

=== (strict equality checks) (check the Data type)
!= (strict inequality check) 

*/

let a = 5;
let b = 10;

console.log("1 - " + (a < b));
console.log("2 - " + (a > b));
console.log("3 - " + (a <= b));
console.log("4 - " + (a >= b));

console.log("5 - " + (a == b));
console.log("6 - " + (a != b));

console.log("7 - " + (a === b));
console.log("8 - " + (a !== b));

a = '5';
b = 5

console.log("9 - " + (a == b));
console.log("10 - " + (a === b));
console.log("11 - " + (a !== b));


//================================================================================

//Logical Operators
//Logical operators are used to combine multiple conditions in a single condition
//They are used in decision-making and loop programs in JavaScript

/*

AND (&&)
OR (||)
NOT (!)

*/

/*
Logical AND 

Evaluates operands are return true only if if all are true;

*/


let logigAnd1 = 5;
let logigAnd2 = 10;

console.log("=========");
console.log(logigAnd1 > 0 && logigAnd2 > 0); //true && true --> true
console.log(logigAnd1 > 0 && logigAnd2 < 0); //true && false --> false
console.log(logigAnd1 < 0 && logigAnd2 > 0); //false && true --> false
console.log(logigAnd1 < 0 && logigAnd2 < 0); //false && false --> false
console.log("=========");


/*
Logical OR 

Evaluates operands are return true only if if one of the multiple operands is true;

*/

let logigOR1 = 5;
let logigOR2 = 10;

console.log(logigOR1 > 0 || logigOR2 > 0); //true && true --> true
console.log(logigOR1 > 0 || logigOR2 < 0); //true && false --> true
console.log(logigOR1 < 0 || logigOR2 > 0); //false && true --> true
console.log(logigOR1 < 0 || logigOR2 < 0); //false && false --> false
console.log("=========");

/*
Logical NOT 

Converts operator to boolean and return flipped value

*/

let logigNOT1 = true;
let logigNOT2 = false;


console.log(!logigNOT1);
console.log(!logigNOT2);
console.log("=========");


//================================================================================

//String Operators

//In JavaScript, you can also use the + operator to concatenate(join) two or more string

console.log("Hello " + "World");

let string1 = "this is a ";
let string2 = "one line";

console.log(string1 + string2); //this is a one line

string1 += 'example';
console.log(string1); //this is a example

//================================================================================

/*Operator Precedence and Operator Associativity

Operator Associativity in JavaScript define the order in which operators of the same Precedence are evaluated  

Left-to-Right ==> Operators are evaluated from left to  right
Right-to-Left ==> Operators are evaluated from right to  left

ex: 4 - 5 -6


13 ==> Exponetiation                    ==> Right-to-Left **
12 ==> Mutipication, Divition, Modulus  ==> Left-to-Right
11 ==> Addition, Subtraction            ==> Left-to-Right
10 ==> Left Shift, Right Shift          ==> Left-to-Right
8  ==> Equality Operators               ==> Left-to-Right
7  ==> Bitwise AND                      ==> Left-to-Right
6  ==> Bitwise XOR                      ==> Left-to-Right
5  ==> Bitwise OR                       ==> Left-to-Right
2  ==> Conditional Operator             ==> Left-to-Right
2  ==> Assignment Operators             ==> Right-to-Left **
1  ==> Comma                            ==> Left-to-Right


*/

                //---------->
let lefttoRight = 10 - 3 - 2; // Left-to-Right Associativity
console.log(lefttoRight); // 5

               // <----------
let rightToLeft = 2 ** 3 ** 2; //Right-to-Left Associativity
console.log(rightToLeft); // 512

