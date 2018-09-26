import { AreaCalculator } from './areaCalculator';
import { Circle, Square } from './shapes';
import { AreaFormatter } from './formatter';

const shapes = [
  new Circle(1),
  new Square(2),
  new Circle(3),
  new Square(4)
]

const calculator = new AreaCalculator(shapes);
const formatter = new AreaFormatter(calculator);

console.log( 'string\n', formatter.outPutString() );
console.log( 'html\n', formatter.outPutHTML() );
console.log( 'pug\n', formatter.outPutPug() );
console.log( 'JSON\n', formatter.outPutJSON() );