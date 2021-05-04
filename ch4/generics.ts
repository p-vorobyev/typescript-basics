class Person {
    constructor(private name: string) {
    }
}

class Employee extends Person {
    constructor(name: string,
                private description?: string) {
        super(name);
    }
}

class Animal {
    breed = '';
}

const personsArray: Array<Person> = [];

personsArray.push(new Person('First'));
personsArray.push(new Employee('Second', 'HR'));
personsArray.push(new Employee('Third'));
// error
// personsArray.push(new Animal());

interface Comparator<T> {
    compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
    constructor(private width: number, private length: number) {
    }

    compareTo(value: Rectangle): number {
        const diff = (this.length * this.width) - (value.length * value.width);

        return diff == 0 ? 0 : diff > 0 ? 1 : -1;
    }
}


const rect1: Rectangle = new Rectangle(2, 3);
const rect2: Rectangle = new Rectangle(2, 3);
const rect3: Rectangle = new Rectangle(3, 3);

function result(value: number): string | undefined {
    switch (value) {
        case 0: return 'Equals';
        case 1: return 'Bigger';
        case -1: return 'Smaller';
        case undefined: return undefined;
    }
}

console.log(result(rect1.compareTo(rect2)));
console.log(result(rect2.compareTo(rect1)));
console.log(result(rect2.compareTo(rect3)));
console.log(result(rect3.compareTo(rect1)));

console.log('-----------------------------')

class Pair<K,V> {
    constructor(private _key: K, private _value: V) {}

    get key(): K {
        return this._key;
    }

    get value(): V {
        return this._value;
    }
}

function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
    return pair1.key == pair2.key && pair1.value == pair2.value;
}

const p1: Pair<number, string> = new Pair(1, 'Apple');
const p2 = new Pair(2, 'Mango');
console.log(compare<number, string>(p1, p2));

const p3 = new Pair('second', 'Mango');
const p4 = new Pair('second', 'Mango');
console.log(compare(p3, p4));
