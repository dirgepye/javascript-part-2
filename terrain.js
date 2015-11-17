//terrain!

function tile(x,y) {
    this.x = x;
    this.y = y;
    this.height = Math.random() * 3;
    var stuff = ['Grass', 'rocks', 'water'];
    this.types = stuff[Math.floor(Math.random()*stuff.length)];
    var bnf = ['burning','normal','frozen'];
    this.condition = bnf[Math.floor(Math.random()*bnf.length)];
    //methods
    this.freeze = function() {
        if (this.condition === 'burning') {
            this.condition = 'normal';
            return this.condition;
        }
        else if (this.condition === 'normal') {
            this.condition = 'frozen';
            return this.condition;
        }
        else {
            return this.height +1;
        }
    }
    
    
    this.burn = function() {
        if (this.condition === 'frozen') {
            this.condition = 'normal';
            return this.condition;
        }
        else if (this.condition === 'normal') {
            this.condition = 'burning';
            return this.condition;
        }
        
        else {
            return this.height -1;
        }
        
    }
};


    
    
//     tile.prototype = {
//   freeze: function(){
//       if(this.condition === "burning"){
//           return this.condition === "normal"
   
//       }
//   }
// };




var tile1 = new tile(132,4214);

console.log(tile1);

console.log(tile1.freeze());

console.log(tile1);