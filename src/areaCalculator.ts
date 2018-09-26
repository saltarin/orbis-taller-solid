import { Shape } from './shapes';

export class AreaCalculator {

  constructor(private shapes: Shape[]){
  }

  sumAreas(): number{
    let sum = 0;
    this.shapes.forEach( (shape) => sum += shape.area());
    return sum;
  }
}