interface Animal {
    name: string
}

class Dog implements Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): string {
        return 'Bow-wow!';
    }
}

class Fish implements Animal {
    name: string;


    constructor(name: string) {
        this.name = name;
    }

    dive(howDive: number): string {
        return `Yeap! Diving ${howDive} deep!`;
    }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
    if (pet instanceof Fish) {
        return 'Sorry! Fish can\'t talk'
    } else if (pet instanceof Dog) {
        return pet.sayHello();
    }
}

console.log(talkToPet(new Fish('Nemo')));
console.log(talkToPet(new Dog('Rex')));

// will not compile
// talkToPet({name: 'sdcsdc'})


