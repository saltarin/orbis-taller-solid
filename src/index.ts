import { AreaCalculator } from './areaCalculator';
import { Circle, Square } from './shapes';
//import { Formatter } from './formatter';

const shapes = [
  new Circle(5),
  new Square(2),
  new Circle(3),
]

const areas = new AreaCalculator(shapes);

console.log( 'console:\n',areas.outPutConsole() );
















/*

//const formatter = new Formatter(areas);
console.log( 'HTML:\n', areas.outPutHtml() );
console.log( 'jade:\n', areas.outPutJade() );
console.log( 'JSON:\n', areas.outPutJSON() );

*/