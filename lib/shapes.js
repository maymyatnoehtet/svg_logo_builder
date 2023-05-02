// Class Shape Parent Class of three child classes
class Shape {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error("I haven't implemented render method yet.");
    }
}


class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> `;
    }
}

module.exports(Shape, Triangle);