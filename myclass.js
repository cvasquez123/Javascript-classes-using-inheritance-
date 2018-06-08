class Robot {
    constructor(name, power){
        this._power = power;
        this._name = name;
        this._army = 100;
    }
    get name() {
        return this._name;
    } 
    
    get power() {
        return this._power;
    }

     army() {
        console.log(`${this._name} has an army of ${this._army}`);
    }
     attack(hit) {
         this._army -= hit; 
         console.log(`Your army was attack, Now you have ${this._army}`);
     }

}

var kingRobot = new Robot("carlos", 100);
console.log(`${kingRobot.name} has a power level of ${kingRobot.power}`);
kingRobot.army();
kingRobot.attack(20);

class internRobot extends Robot {
    constructor(name,power,level) {
        super(name,power);
        this._level = level;
    }
    get level() {
        return this._level;
    }
}

var newintern = new internRobot('Bob',30,1);
console.log(newintern);
console.log(newintern.name);
console.log(newintern.level);
console.log(newintern.power);
newintern.army();
newintern.attack(50);

