import { AreaCalculator } from "./areaCalculator";

export class Formatter {

  constructor(private areaCalculator:AreaCalculator){
  }

  outPutConsole(): string{
    return `Suma de areas es: ${this.areaCalculator.sumAreas().toFixed(2)}`;
  }

  outPutHtml(): string{
    return `
    <html>
      <body>
        <div>
          <H1>La suma de areas es: ${this.areaCalculator.sumAreas().toFixed(2)}</H1>
        </div>
      </body>
    </html>`;
  }

  outPutJade():string {
    return `h1 La suma de areas es ${this.areaCalculator.sumAreas().toFixed(2)}`;
  }

  outPutJSON():string {
    return `
    {
      "suma": ${this.areaCalculator.sumAreas()}
    }`;
  }
}