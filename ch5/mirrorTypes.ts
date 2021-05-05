interface Person {
    name: string;
    age: number;
}

const worker: Person = {name: 'Jane', age: 23};

function doWork(person: Readonly<Person>) {
    // error compile
    // person.name = 'Vasia';
}


function filterBy<T, P extends keyof T>(property: P, value: T[P], array: T[]) {
    return array.filter(item => item[property] === value);
}

const workers: Person[] = [worker, {name: 'Mary', age: 30}]

console.log(filterBy('age', 23, workers));
// compile error
// console.log(filterBy('age', '23', workers));

const partWorker: Partial<Person> = {age: 25};
const reqWorker: Required<Person> = {name: 'Tom', age: 25};
