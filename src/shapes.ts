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

export class Rectangle {
    constructor(private base: number, private height: number){}
    getBase(){
        return this.base;
    }
    getHeight(){
        return this.height;
    }
}