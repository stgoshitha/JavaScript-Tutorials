//JavaScript class

/* 
class ClassName { 
  constructor(){

  }
}
  
function Person(name, age){
  this.name = name;
  this.age = age;
}

const person1 = new Person("Goshitha" , 25);
console.log(person1);

*/

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Goshitha", 32);
const person2 = new Person("Ruchini", 21);
console.log(person1);
console.log(person2);

 //================================================================================

//JavaScript class methods

//We can add any nummber of methods in JavaScript class

class Person1{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    return "Hello, " + this.name;
  }
  changeName(newName){
    this.name = newName;
  }
}

const person3 = new Person1("Amal", 34);
console.log(person3);
console.log(person3.greet());

person3.changeName("Evin");
console.log(person3.name);


 //================================================================================

//Getters and Setters in JavaScript

//Getters and setters are special methods in JavaScript that allow you to control how properties are accessed and modifued.

//They are defined using get and set keywords



//Getter methods

//A getter is a methods that is called when a property accessed. It can be used to do thing like validate the value of the property or convert in to a different format.

class Person2{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  get greet(){
    return "Hello, " + this.name;
  }
  
}

const person4 = new Person2("Goshitha-get",28);
console.log(person4.greet);

//Setter methods

//A setter is a method that is called when a property is modified. It can be used to do things like update the value of the property or perform somee other action.

class Person3{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  set changeName(newName){
    this.name = newName;
  }
}

const person5 = new Person3("Goshitha",28);
console.log(person5.name);

person5.changeName = "Goshitha-set";
console.log(person5.name);


//We can use same method name as getter and setter

class Person4{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  get personName(){
    return "hello, " + this.name
  }
  set personName(newName){
    this.name = newName;
  }
}

const person6 = new Person4("Goshitha - before change",28);

//get person name
console.log(person6.personName);

//update person name
person6.personName = "Goshitha2002 - after change";
console.log(person6.name);


 //================================================================================

 //JavaScript class expressions

// class expression pprovides you an alternative way to define a new class

//It is similar to a function expression, but it uses the class keyword instead of the function keyword.

//Class expression can be named or unnamed

//If they are named, the name can be used to refer to class later
//If they are unnamed, they can only be referred by the variable that they are assigned to.

let PersonExpression = class{
  constructor(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}

const person7 = new PersonExpression("Roven");
console.log(person7.getName());

 //================================================================================

 //JavaScript class Inheritance

 //JavaScript class Inheritance allow you to create new class on the basis of already existing class.

 //Using class inheritance, a clss can inherit all properties and methods of another class

 //Inheritance is useful feature that allow the code reusablility. To create a class inheritance, we  use extends keyword.


class Person5{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("Hello, my name is " + this.name);
  }
}

class Student extends Person5{
  
}

const student1 = new Student("Peter");
console.log(student1.name);
student1.greet();

 //================================================================================

 //JavaScript Supper Method

 //The supper() method used inside a child class donetes its parent class

 class Person6{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("Hello, my name is " + this.name);
  }
}

class StudentNew extends Person6{
  constructor(name){
    super(name); //pass the value to parent class
  }
  
}

const student2 = new StudentNew("Peter");
console.log(student1.name);
student1.greet();

 //================================================================================

 //Methods or Property Overrinding

//If the parent class and child class has the same method or property name. In this case, when we will call the method or property of an Object of the child class, It will override the method or property of the parent class.This is known as method overriding or shadowing method.

class Person7{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("Hello, my name is " + this.name);
  }
}

class Student3 extends Person7{
  greet(){
    console.log("Hello, my name is " + this.name + " and I am a student");
  }
}

const student3 = new Student3("Roven");
student3.greet();

//================================================================================

//JavaScript Static methods

//Static methods are bound to a class, not the instances of that class. You can not call a static method on an object, It can be called only on the class.

class Person8{
  constructor(name){
    this.name = name;
  }
  static greet() {
    console.log("Hello...!");
  }
}

const person8 =  new Person8();

//person8.greet(); -- error
Person8.greet();


//If you want to use the object's properties inside the static method, then you can pass the Object as a parameter.

class Person9{
  constructor(name){
    this.name = name;
  }
  static greet(object) {
    console.log("Hello, my name is " + object.name);
  }
}

const person9 = new Person9("Ruchini");
Person9.greet(person9);


//================================================================================

//JavaScript Private Method

//Private method are accessible only within the class. It means we can not call the private methods outside of that class.

//By default, methods of a class are public.

//To make the methods private, we need to start the method name with hash(#).

class Person10{
  constructor(fName,lName){
    this.firstName = fName;
    this.lastName = lName;
  }
  #fullName() {
    return "Hello, my full name is " + this.firstName + " " + this.lastName;
  }
  display(){
    console.log(this.#fullName());
  }
}

const person10 = new Person10("Goshitha","Premachandra");

// person10.fullName(); -- error
person10.display();

//================================================================================

//JavaScript Static Private Method

class Person11{
  constructor(fName,lName){
    this.firstName = fName;
    this.lastName = lName;
  }
  static #fullName(object){
    return "Hello, my full name is " + object.firstName + " " + object.lastName ;
  }
  display(){
    console.log(Person11.#fullName(this));
  }
}

const person11 = new Person11("Ruchini","Premachandra");
person11.display();