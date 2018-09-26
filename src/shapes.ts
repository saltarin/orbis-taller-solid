export class Circle {
  constructor(private radius: number) {
  }
  getRadius(): number{
    return this.radius;
  }
}

export class Square {
  constructor(private length: number) { 
  }
  getLength(): number{
    return this.length;
  }
}