import { AreaCalculator } from "./areaCalculator";

export class AreaFormatter {

    constructor(private calculator: AreaCalculator){}

    outPutString(){
        return `La suma es: ${this.calculator.sumAreas()}`;
    }
  
    outPutHTML(){
      return `
      <html>
          <body>
              <h1>La suma de areas es: ${this.calculator.sumAreas()}</h1>
          </body>
      </html>`;
    }
  
    outPutPug(){
        return `h1 La suma de areas es: ${this.calculator.sumAreas()}`;
    }
  
    outPutJSON(){
      return `
      {
          "suma": ${this.calculator.sumAreas()}
      }`;
    }
}