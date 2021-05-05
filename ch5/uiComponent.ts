function UiComponent(html: string) {
    console.log(`The decorator received ${html}\n`)

    return function (target: Function) {
        console.log(`Create UI component from \n ${target}`)
    }
}

@UiComponent(`<h1>Hello Shopper!</h1>`)
class Shopper {
    constructor(private name: string) {
    }
}
