export interface Shape {
    area(): number;
}

export class Circle implements Shape{
  constructor(private radius: number) {
  }
  getRadius(): number{
    return this.radius;
  }
  area(){
    return this.getRadius() * this.getRadius() * Math.PI
  }
}

export class Square implements Shape{
  constructor(private length: number) { 
  }
  getLength(): number{
    return this.length;
  }
  area(){
    return this.getLength() * this.getLength();
  }
}

export class Rectangle implements Shape{
    constructor(private base: number, private height: number){}
    getBase(){
        return this.base;
    }
    getHeight(){
        return this.height;
    }
    area(){
        return this.getBase() * this.getHeight() / 2;
    }
}