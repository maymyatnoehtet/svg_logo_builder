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

class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}
  
  class Square extends Shape {
    render() {
        console.log("Rectangle shape is now rendered");
        return `<rect x="50" y="50" height="200" width="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        console.log("Triangle")
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Circle, Square, Triangle};