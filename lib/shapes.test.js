const {Circle, Square, Triangle} = require("./shapes")
/* from Challenge 10 Requirements page */
// Circle Shape
describe('Circle', () => {
    test('Renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);
    });
  });

  // Square Shape
describe('Square', () => {
  test('Renders correctly', () => {
    const shape = new Square();
    var color =('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}" />`);
  });
});

// Triangle Shape
describe('Triangle', () => {
  test('Renders correctly', () => {
    const shape = new Triangle();
    var color =('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
  });
});