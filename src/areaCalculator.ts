import { Circle, Square } from './shapes';

export class AreaCalculator {

  constructor(private shapes: (Circle|Square)[]){
  }

  sumAreas(): number{
    let sum = 0;
    this.shapes.forEach( (shape) => {
      if(shape instanceof Circle){
        const circle = (shape as Circle);
        sum += circle.getRadius() * circle.getRadius() * Math.PI;
      }
      else{
        const square = (shape as Square);
        sum += square.getLength() * square.getLength();
      }
    });
    return sum;
  }

  outPutString(){
      return `La suma es: ${this.sumAreas()}`;
  }
}