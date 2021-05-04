enum Direction {
    FtoC = 'FtoC',
    CtoF = 'CtoF'
}

function convertTemp(temp: number, fromTo: Direction) {
    return Direction.FtoC === fromTo ?
        (temp - 32) * 5.0/9.0 :
        temp * 9.0 / 5.0 + 32;
}

console.log(convertTemp(78, Direction.FtoC));
console.log(convertTemp(27, Direction.CtoF));
// protected from call
// console.log(convertTemp(27, 21));
