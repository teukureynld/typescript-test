class Divided {
    constructor(x,y) {
        this.x = x;
        this.y = y;

        return x*y;
    }
}

function perkalian() {
    const kalikanValues = new Divided(5,5);

    return kalikanValues;
}

console.log(perkalian())