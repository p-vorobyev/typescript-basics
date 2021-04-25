function getFinalPrice(price: number, discount: number): number {
    return price - price/discount;
}

class Person {
    constructor(public name: string,
                public age: number) {
    }
}

function typeCondition(value: string | Person): void {
    if (typeof value === "string") {
        console.log(`String: ${value}.`)
    } else if (value instanceof Person) {
        console.log(`Person: name{${value.name}}, age{${value.age}] .`)
    } else {
        throw new Error("Incorrect type.")
    }
}

console.log(getFinalPrice(100, 10));
typeCondition("cd testString");
typeCondition(new Person("Pavel", 31));
// typeCondition(3);
