// Class Shape Parent Class of three child classes
class Shape {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
        console.log("This shape is now set to colour", `${this.color}`);
    }
    render() {
        console.log("Here is the shape you want");
    }
}

class Triangle extends Shape {
    render() {
        console.log("Triangle")
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}
  
  class Rectangle extends Shape {
    render() {
        console.log("Rectangle shape is now rendered");
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Triangle, Circle, Rectangle};