/* 
Data types
  *Primitive data type
    -String
    -Number
    -Boolean
    -Null
    -Undefined
    -BigInt
    -Symol
  *Reference data type
    -Object
    -Array
    -Function
*/

// Primitive data type
//================================================================================

//String Data types
// In JavaScrip, A string is a sequence of zero or more characters.
//A String start and end with either a single quote('') or a double quote("")
//Java String are for storing and Manipulating text.

let myfirstName = "Goshitha"; // double quote
let mylastName = 'Premachandra'; // single quote

//================================================================================

//Number Data Type
//In JavaScript, a number is a numeric value. It can be a integer or a decimal

let num = 100;
let decimalNum = 10.45;
console.log(num);
console.log(decimalNum);
console.log(typeof num)


let stringnum = '10';
console.log(stringnum); // Output: 10
console.log(typeof stringnum)


//================================================================================

//Boolean Data Type
//The boolean type has two values : true or false

let isCorrect = true;
let isIncorrect = false;

console.log(isCorrect);
console.log(isIncorrect);

//Boolean values can be used in conditional statements.
if (isCorrect) {
  console.log("This is correct");
}else{
  console.log("This is incorrect");
}

//Boolean values can be converted to numbers using the Boolean() function
console.log(Boolean(isCorrect)); // Output: true
console.log(Boolean(isIncorrect)); // Output: false


let condition  = 20<10;
console.log(condition); // Output: false
console.log(typeof condition);


//================================================================================

//Null Data Type
//In JavaScript, null is a special value that represents empty or unkown value

let nullnumber = null;
console.log(nullnumber);
console.log(typeof nullnumber);//The typeof operator returns 'object' for null, which is incorrect. This is a known issue

//JavaScript defines that null is equal to undefined
console.log(null == undefined); 
// Output: true


//================================================================================

//Undefined Data type
//If a variable is declared but the value is not assigned, then the value of that variable will be undefined

let age;
console.log(age);
console.log(typeof age);

let assignedAge = 30;
console.log(assignedAge);
console.log(typeof assignedAge);

//================================================================================




//Refernce Data Type 

//================================================================================

//Object
//Objects is a collections of properties.
//Each property is a key-value pair.

let person1  = {};
console.log(person1);
console.log(typeof person1);


let person2 = {
  firstName : 'Goshitha',
  lastName : 'Premachandra',
  age : 25,
}
console.log(person2);

//================================================================================

//Array Data Type
//Array are a type of Object that stores collection of values

let array = [];
console.log(array);
console.log(typeof array);

let addvalueArray = [1,2,3,4,5,6,7,8,9,0];
console.log(addvalueArray);
console.log(typeof addvalueArray);


//================================================================================

//Function Data type
//Function is a type of obeject that can be use to execute code

//defined the function
function massage(){
  //implement the function
  console.log('Hello World');
}

massage(); //call the function


//================================================================================

