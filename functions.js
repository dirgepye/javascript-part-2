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