//Create instances of classes 'Gladiator', 'Arena':
class Gladiator {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
}

class Arena {
    constructor(name){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];
    }
    addGladiator(gladiators){
        if (this.gladiators.length <2){
            this.gladiators.push(gladiators)
        } else{console.log("Two at a time. Go away.")
        }
    }
    fight(){
        const player1 = this.gladiators[0];
        const player2 = this.gladiators[1];
        if (this.gladiators.length === 2) {
            if (player1.weapon === 'Trident' && player2.weapon === 'Spear') {
                this.gladiators.pop();
                console.log(`${player1.name} eviscerates ${player2.name}`);
            } else if (player1.weapon === 'Trident' && player2.weapon == 'Club') {
                this.gladiators.shift();
                console.log(`${player2.name} decapitates ${player1.name}`);
            } else {
                this.gladiators = [];
                console.log(`This isn't soccer -- everyone dies`)
            }
            if (player1.weapon === 'Spear' && player2.weapon === 'Club') {
                this.gladiators.pop();
                console.log(`${player1.name} eviscerates ${player2.name}`);
            } else if (player1.weapon === 'Spear' && player2.weapon == 'Trident') {
                this.gladiators.shift();
                console.log(`${player2.name} decapitates ${player1.name}`);
            } else {
                this.gladiators = [];
                console.log(`This isn't soccer -- everyone dies`)
            }
            if (player1.weapon === 'Club' && player2.weapon === 'Trident') {
                this.gladiators.pop();
                console.log(`${player1.name} eviscerates ${player2.name}`);
            } else if (player1.weapon === 'Club' && player2.weapon == 'Spear') {
                this.gladiators.shift();
                console.log(`${player2.name} decapitates ${player1.name}`);
            } else {
                this.gladiators = [];
                console.log(`This isn't soccer -- everyone dies`)
            }
        }

    }
}


//Konsole Loggins
console.log("hwy to the danger zone");

//Once defined, you should be able to do the following...
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"

//Create an Arena class that meets the following criteria...
//An arena has a name
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum

//The name should be capitalized
const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis

//An arena can have gladiators
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []

//You can add a gladiator to the arena
const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]

//The arena should never have more than 2 gladiators in it at a time
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Club");
const andronicus = new Gladiator("Andronicus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2

/*If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.
Winning conditions:
Trident beats Spear
Spear beats Club
Club beats Trident
If the two gladiators have the same weapon, they are both eliminated.*/
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]
