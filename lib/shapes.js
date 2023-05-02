// Class Shape Parent Class of three child classes
class Shape {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        console.log("Here is the shape you want");
    }
}


class Triangle extends Shape {
    render() {
        console.log(`This is the shape that you want with ${this.color}.`);
    }
}

module.exports(Shape, Triangle);