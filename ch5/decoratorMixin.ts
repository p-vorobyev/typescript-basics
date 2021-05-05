type constructorMixin = {new (...args: any[]): {}};

function useSalutation(salut: string) {
    return function <T extends constructorMixin> (target: T) {
        return class extends target {
            name: string;
            private message = `Hello ` + salut;

            constructor(...arg: any[]) {
                super();
                this.name = arg[0];
            }

            sayHello() {
                console.log(`${this.message}` + ` ${this.name}`);
            }
        }
    }
}

@useSalutation('master')
class Greeter {
    constructor(private name: string) {
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    };
}

const greet: Greeter = new Greeter('Pavel');
greet.sayHello();

console.log('-------------------------------')

function logTrade(target, key, descriptor) {
    const originalCode = descriptor.value; // get original code of method
    // add changes and call original method code
    descriptor.value = function () {
        console.log(`Invoked ${key} with parameters:\n`, arguments);
        return originalCode.apply(this, arguments);
    }

    return descriptor; // return changed method
}

class Trade {
    @logTrade
    placeOrder(stockName: string, quantity: number, operation: string, traderID): void {
        console.log('Original method code.')
    }
}

const trade = new Trade();
trade.placeOrder('IBM', 100, 'Buy', '123');
