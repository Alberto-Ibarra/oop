
class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('my name is', this.name);
        return this
    }
    showStats(){
        console.log('health:', this.health);
        console.log('speed:', this.speed);
        console.log('strength:', this.strength);
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10
        this.health = 200
        this.speed = 10
        this.strength = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log(this.name, ": Wisdom has been spoken!");
        return this
    }
}

const sensei1 = new Sensei("Master Bob")
const ninja1 = new Ninja("Albert");
console.log(sensei1);
console.log(ninja1);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();
sensei1.speakWisdom()