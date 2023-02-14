// 1. Создайте классы наследников, чтобы в итоге дойти до тигра Проши.
// Выведите все данные Проши и покажите его способности с помощью методов.
// схема: https://miro.com/app/board/uXjVPMGiB5w=/?share_link_id=503318508362

class Animal {
    constructor(name, eyes) {
       this.name = name;       
       this.eyes = eyes;
       this.brain = 'brain';
       this.spine = 'spine';       
    }
    getName() {
       return (`The name of the animal is ${this.name}.`)
    }

    isBreath() {
        return true
    }

    isReproduse() {
        return true
    }

    canEat() {
       console.log(`This ${this.name} can eat`)
    }
 }

let animal1 = new Animal("tiger");
let animal2 = new Animal('salmon', "blue");

console.log(animal1.name);
console.log(animal1.getName())
animal1.eyes = "yellow"   
console.log(animal1.eyes); 
animal2.canEat()  
console.log("===========================================")

class Mammals extends Animal {
    constructor (name, eyes) {
        super (name, eyes)
        this.skin = 'fur'
        this.legs = 4
        this.lungs = 'lungs'
    }

   setSkin(skin) {
    this.skin = skin
    return this.skin
   }

   showBodyParts() {
    console.log(`${this.name} has ${this.legs} legs, ${this.skin}`)
   }

   breath() {
    console.log(`${this.name} breath with ${this.lungs}`)
   }

   feedKids() {
    console.log(`This animal feeds its kids milk`)
   }

   reproduseTupe() {
    return 'baby'
   }
}

let mammal1 = new Mammals('mammal', 'green')

console.log(mammal1.name);
console.log(mammal1.getName())
console.log(mammal1.eyes);
mammal1.canEat()
mammal1.showBodyParts()  
mammal1.breath()
mammal1.feedKids()
console.log("===========================================")


class Predators extends Mammals {
    constructor (name, eyes) {
        super (name, eyes)
        this.claws = 'claws'
        this.fungs = 'fungs'
    }

    canEat() {
        console.log(`The ${this.name} can eat meat`)
    }
}

let predators1 = new Predators('predator', 'green')

console.log(predators1.name);
console.log(predators1.getName())
console.log(predators1.eyes);
predators1.canEat()
predators1.showBodyParts()  

console.log("Class Cats===========================================")

class Cats extends Predators {
    constructor (name, eyes, nikName) {
        super (name, eyes) 
        this.nikName = nikName        
    }

    showBodyParts() {
        console.log(`${this.name} has ${this.legs} legs, ${this.skin} and sharp ${this.claws} and ${this.fungs}`)
    }

    moves() {
        console.log(`${this.name} moves softly`);
    }
}

let tiger = new Cats('tiger', 'green', 'Prosha')

console.log(tiger.name);
console.log(tiger.nikName);
console.log(tiger.getName())
console.log(tiger.eyes);
tiger.canEat()
tiger.showBodyParts()  
tiger.breath()
tiger.feedKids()
tiger.setSkin("red fur with black stripes")
console.log(tiger.skin)
tiger.moves()
console.log("===========================================")