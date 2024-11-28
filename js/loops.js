//for loop

for(let i = 1; i <= 10 ; i++){
  console.log("hello");
}

console.log("==========");

for(let i = 1; i < 10 ; i++){
  console.log(i);
}

console.log("==========");

let coding = ["JavaScript" , "Python" , "CPP"];

for(let i = 0; i < coding.length ; i++){
  console.log(coding[i]);
}

console.log("==========");

for(let i = 1; i <=5; i++){
  console.log(i);

  for (let j = 1; j <=3 ; j++) {
    console.log("Inner Loop " + j)
    
  }

}

//while loop

let conditionNum  = 0;

while(conditionNum <= 10){
  console.log(conditionNum);
  conditionNum++;
}

console.log("==========");

//do while loop

let dowhilecondition = 1;

do {
  console.log(dowhilecondition);
  dowhilecondition++;
} while (dowhilecondition <= 5);

console.log("==========");

// break 
let breaklist = 10

for (let index = 1; index <= 10; index++) {

  if( index == 5){
    break;
  }
  console.log(index);
  
}

//continue
console.log("==========");

for (let index = 1; index <= 10; index++) {

  if( index == 5){
    continue;
  }
  console.log(index);
  
}
