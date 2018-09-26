import { AreaCalculator } from './areaCalculator';
import { Circle, Square } from './shapes';

const shapes = [
  new Circle(1),
  new Square(2),
  new Circle(3),
  new Square(4)
]

const calculator = new AreaCalculator(shapes);

console.log( calculator.sumAreas() );