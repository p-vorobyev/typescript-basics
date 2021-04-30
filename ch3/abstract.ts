abstract class AbstractPerson {

    //this condition forces call this constructor in child
    protected constructor(public name: string) {}

    greet(): string {
        return `Hi, my name is ${this.name}`;
    }

    abstract whoAmI(): string;
}

class Human extends AbstractPerson {

    constructor(name: string) {
        super(name);
    }

    whoAmI(): string {
        return "I'm human!";
    }
}

class Alien extends AbstractPerson {

    constructor(name: string) {
        super(name);
    }

    whoAmI(): string {
        return "I'm an alien!";
    }

}

function personInfo(person: AbstractPerson): void {
    console.log(person.greet() + '. ' + person.whoAmI());
}

const persons: AbstractPerson[] = [new Alien('Wally'), new Human('Vasia')];

persons.forEach(p => personInfo(p));
