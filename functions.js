// Javascript part 2!

//sorting an array by the longest word

var strings = ["apu", "chief wiggum", "homer", "moleman"];


function getLongestWord(arrayOfWord){
   
  return arrayOfWord.sort(
    function (a,b) {
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
  });
  
}

console.log(getLongestWord(strings));