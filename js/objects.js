//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

const ObjectName = {
  "key1": "value1", // this pairs are called properties
  "key2": "value2",
  "key3": "value3",
}

//data type of key always --> String

const person = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
}

console.log(typeof person);
console.log(person);

//How to access the properties of an object
//by using its key name

//by using dot notation
//objectname.key
console.log("First Name : " + person.firstName);
console.log("Last Name : " + person.lastName);
console.log("Age : " + person.age);


//by using bracket notation
//objectname["key"]
console.log("First Name : " + person["firstName"]);
console.log("Last Name : " + person["lastName"]);
console.log("Age : " + person["age"]);


const person2 = {
  "first Name" : "Goshitha",
  "lastName" : "Premachandra",
  "age" : 20,
}

//console.log("First Name : " + person2.first Name);  --> can not use dot notation
console.log("First Name : " + person2["first Name"]);



//How to update the properties of an object
const person3 = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
}

person3.firstName = "Mr. Goshitha";

console.log(person3.firstName);
console.log(person3["firstName"]);


//How add new properties in the object
const person4 = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
}

person4.company = "Shadow";
person4["color"] = "Red";

console.log(person4);


//How delete one properties from the object
const person5 = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
}

delete person5.age;
delete person5["lastName"];

console.log(person5);

//How to store one object in another object that is nested object
const person6 = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
  address: {
    street : "No. 12, 1st Cross",
    city : "Gampaha",
    country : "Sri Lanka",
    zipCode : "11870"
  }
}

console.log(person6);
console.log(person6.address.country);
console.log(person6["address"]["country"]);

//Add
person6.address.city = "Batagolla";

console.log(person6)

//how to check if a prperty exists in an object
//"prpertyName" in ObjectName
const person7 = {
  firstName : "Goshitha",
  lastName : "Premachandra",
  age : 20,
}

console.log("firstName" in person7);
console.log("address" in person7)

//access all properties
for(let prop in person7){
  console.log(prop);
}

//access all values of the properties
for(let prop in person7){
  console.log(person7[prop]);
}

//access both values and properties
for(let prop in person7){
  console.log(prop + " : "+person7[prop]);
}

//This was the example to create an object with object literal


//================================================================================


//How to create an object with the new key word

const person8 = new Object();

person8.firstName = "goshitha";
person8.lastName = "premachandra";
person8.age = 20;

console.log(person8);


const person9 = new Object({
  firstName : "goshitha",
  lastName : "premachandra",
  age : 20
})

console.log(person9);


//================================================================================

//JavaScript Object Methods

//JavaScript method is an object property that contains a function definition

const person10 = {
  firstName : "goshitha",
  lastName : "premachandra",
  greet: function greet1(){
    console.log("JavaScript Object Method - greet1");
  },
  
}

person10.greet();


function greet2(){
  console.log("JavaScript Object Method - greet2");
}

person10.greeting = greet2;
person10.greeting();   

console.log(person10)


const person11 = {
  firstName : "goshitha",
  lastName : "premachandra",
  greet3(){
    console.log("JavaScript Object Method - greet3");
  },
  
}

person11.greet3();


//this key word
//this keyword is used to access the other properties of an object within a method of same object.

const person12 = {
  firstName : "goshitha",
  lastName : "premachandra",
  greet4: function(){
    console.log("JavaScript Object Method - greet4 " + this.firstName);
  }
  
}

person12.greet4();


const person13 = {
  firstName : "goshitha",
  lastName : "premachandra",
  getfullName: function(){
    return this.firstName + " " + this.lastName 
  }
  
}

console.log(person13.getfullName());


console.log(this);
//If we use "this" keyword alone, or in side a function. Then it will refer to the Global object, that is "window" object.

//When we use "this" keyword in the "Event" then it will refer to the element that receive the event.

//"this" is a keyword, it is not a variable, so we can not change the value of "this".

//================================================================================

//JavaScript Constructor function

//In JavaScript, a constructor function is used to create objects

//Constructor function is similar a a regular function but it is good practice to capitalize the first later of your constructor function.

function Person14(){
  this.firstName = "goshitha";
  this.lastName = "premachandra";
}

//A constructor function should be called only with "new" operator

//We can use "new" operator to create an object form a constructor function.

const person14 = new Person14();
const person15 = new Person14();

console.log(person14);
console.log(person15);



function Person15(fn,ln){
  this.firstName = fn;
  this.lastName = ln;
}

const person16 = new Person15("Goshitha","Premachandra");
const person17 = new Person15("Ruchini","Tharushika");

console.log(person16);
console.log(person17);

person16.age = 20;
console.log(person16);

//add a method in person17 object
person17.greet = function(){
  console.log("Hello - person17 - greet");
}

person17.greet();


function Person16(fn,ln){
  this.firstName = fn,
  this.lastName = ln,
  this.getFullName = function(){
    return this.firstName + " " + this.lastName;
  }
}

const person18 = new Person16("Goshitha","Premachandra");
const person19 = new Person16("Ruchini","Tharushika");

console.log(person18.getFullName());
console.log(person19.getFullName());


//================================================================================

//JavaScript Object Prototype

//In JavaScript, every function and object has its own property called prototype.

const person20 = {
  name: "Goshitha"
}

console.log(person20);

//A prototype itself is also another object. So, the prototyr has its own prototype. This creates a prototype chain.


//We can use the prototype to add properties and methods to a constructor funxtion and objects inherit the properties and methods from prototype.


function Person17(fn,ln){
  this.firstName = fn,
  this.lastName = ln
}

//Add property to constructor using prototype
Person17.prototype.gender = "Male";

const person21 = new Person17("Goshitha", "Premachandra");

console.log(person21);

//Add method to constructor using prototype
 Person17.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
 }

 const person22 = new Person17("Goshitha","Premachandra")

 console.log(person22);
 console.log(person22.getFullName());


 //Changing prototype value

 function Person18(){
  this.name = "Goshitha Premachandra"
 }

 Person18.prototype.age = 25;
 const person23 = new Person18();

 Person18.prototype = {age : 52}
 const person24 = new Person18();

 console.log(person23.age);
 console.log(person24.age);

 //If a property value is changed, then all the new objects will have the changed property value
 //All the previously created objects will have the previous value.

 Person18.prototype.age = 25;
 Person18.prototype = {age : 58}
 const person25 = new Person18();
 const person26 = new Person18();

 console.log(person25.age);
 console.log(person26.age);

 //================================================================================
//Object destructuring

//Object destructuring in JavaScript is a feature that allows you to extract the properties of and oject into variables

//This can be usefull for assigning the properties of an Object to variable in single statement.

const person27 = {
  firstName : "Goshitha",
  lastName : "Premachandra"
}

// let {property1: variable1 , property2 : variable2} = object;

let {firstName : fname , lastName: lname} = person27;
console.log(fname);
console.log(lname);

let {firstName, lastName, age} = person27;
console.log(firstName);
console.log(lastName);
console.log(age);



const person28 = {
  newfirstName : "Goshitha",
  newlastName : "Premachandra"
}

//age has default value
let {newfirstName, newlastName, newage=18} = person28;
console.log(newfirstName);
console.log(newlastName);
console.log(newage);

const person29 = {
  newfirstName29 : "Goshitha",
  newlastName29 : "Premachandra",
  newage29 : 32
}

//age has default value but ignore
let {newfirstName29, newlastName29, newage29=18} = person29;
console.log(newfirstName29);
console.log(newlastName29);
console.log(newage29);


 //================================================================================

 //Object Literal Syntax Extensions in ES6

 let firstName_person30 = "Goshitha";
 let lastName_person30 = "Premachandra";

 const person30 = {
  firstName_person30,
  lastName_person30
 }

 console.log(person30);




 
 

