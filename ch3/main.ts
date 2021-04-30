class Person {
    constructor(public firstName: string, public lastName: string, private age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    protected sayHello() : string {
        return `My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`
    }
}

class Employee extends Person {
    constructor(firstName: string, lastName: string, age: number, public department: string) {
        super(firstName, lastName, age);
        this.department = department;
    }

    employeeHello(): string {
        return this.sayHello();
    }
}

const  empl = new Employee('Pavel', 'Vorobyev', 100, 'Super-Department.');

console.log(empl.employeeHello());
