import { Circle, Square } from './shapes';

export class AreaCalculator {

  constructor(private shapes: (Circle|Square)[]){
  }

  sumAreas(): number{
    let sum = 0;
    this.shapes.forEach( (shape) => {
      if(shape instanceof Square){
        sum += shape.getLength() * shape.getLength();
      }
      else{
        sum += shape.getRadius() * shape.getRadius() * Math.PI;
      }
    });
    return sum;
  }

  outPutConsole(): string{
    return `Suma de areas es: ${this.sumAreas()}`;
  }











  /*
  outPutHtml(): string{
    return `
    <html>
      <body>
        <div>
          <H1>La suma de areas es: ${this.sumAreas()}</H1>
        </div>
      </body>
    </html>`;
  }

  outPutJSON():string {
    return `
    {
      "suma": ${this.sumAreas()}
    }`;
  }

  outPutJade():string {
    return `h1 La suma de areas es ${this.sumAreas()}`;
  }
  */
}