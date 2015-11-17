// Javascript part 2!

//sorting an array by the longest word

var strings = ["apu", "chief wiggum", "homer", "moleman"];

function compareStringsByLength(a, b) {
  if (a.length > b.length) {
    return -1;
  }
  else if (a.length < b.length) {
    return 1;
  }
  else 
  {
    return 0;
  }
}

function getLongestWord(arrayOfWord){
   
  return arrayOfWord.sort(compareStringsByLength);
  
}

console.log(getLongestWord(strings));

// sort people by longest names


var people = [
  { name: "steve stevens",
    email: "steve@gmail.com"
  },
  { name: "fred",
    email: "zzzzz@yahoo.ca"
  },
  { name: "gladyss",
    email: "gladsy@hotmail.com"
  }
]

function compareNamesByLength(a, b) {
  if (a.name.length > b.name.length) {
    return -1;
  }
  else if (a.name.length < b.name.length) {
    return 1;
  }
  else 
  {
    return 0;
  }
}

function getLongestName(arrayOfPeople){
   
  return arrayOfPeople.sort(compareNamesByLength);
  
}

console.log(getLongestName(people)); 

// sort people by email alphabetically

function getFirstEmail(arrayOfEmails) {
  return arrayOfEmails.sort(sortByEmail);
}

function sortByEmail(x,y) {
  if (x.email < y.email) {
    return -1;
  }
  else if (x.email > y.email) {
    return 1;
  }
  else
  {
    return 0;
  }
}


console.log(getFirstEmail(people)); 

//

/* function squareThisNumber(n) {
  return n * n;
}  */

var numbers = [1,2,3,4,5];
var squares = numbers.map(function squareThisNumber(n) {
  return n * n;
});

console.log(squares);

// squaring the "num" property of an object

var one = [
  {
    name: "rgsags",
    num: 4,
    color: "blue"
  },
  {
    name: "kagjsj",
    num: 8,
    color: "green",
  },
  {
    name: "dksafjs",
    num: 6,
    color: "red"
  }
]

var squareIt = one.map(function squaredObject(object) {
  return object.num * object.num
}) ;

console.log(squareIt);

//

var adder = operationMaker("add"); 
var sum = adder(5, 10); 

//var multiplier = operationMaker(“mult”); 
// var product = mult(5, 10)

function operationMaker(opp) {
  if (opp === "add") {
    return function(num1,num2) {
      return num1 + num2;
    }
  }
  else if(opp === "sub") {
    return function(num1,num2){
      return num1 - num2;
    }
  }
  else if(opp === "mult") {
    return function(num1,num2) {
      return num1 * num2;
    }
  }
  else if(opp === "div") {
    return function(num1,num2) {
      return num1 / num2;
    }
  }
};
  
var adder = operationMaker("add");
var sum = adder(5,10);

var subtract = operationMaker("sub");
var difference = subtract(10,5);

var multiply = operationMaker("mult");
var product = multiply(10,10);

var divide = operationMaker("div");
var divided = divide(50,5);

console.log(sum);
console.log(difference);
console.log(product);
console.log(divided);

// 