//warriors





function warrior(name,gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.random()*100;
    this.fight = function() {
        console.log(name + " rushes to the arena with a " + this.weapon);
    };
    this.faceoff = function(opponent) {
        if (this.power < opponent.power) {
            console.log(this.name + " has been defeated by " + opponent.name)
        }
        else {
            console.log(opponent.name + " defeated " + this.name + ". For shame!" )
        }
    };
     // this.talk = function() {
    //     alert( this.name + " say meeow!" )
    // }
};

var warrior1 = new warrior("steve","male");
var warrior2 = new warrior("alf","male");
var warrior3 = new warrior("barbara walters","female");
var warrior4 = new warrior("hillary clinton","female");
var warrior5 = new warrior("george clooney","male");
var warrior6 = new warrior("henry kissinger","male")

console.log(warrior1.faceoff(warrior4));
