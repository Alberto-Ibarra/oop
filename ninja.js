
class Ninja{
    constructor(name, health=100){
        this.name = name;
        this.health = health;
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
const ninja1 = new Ninja("Albert");
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();