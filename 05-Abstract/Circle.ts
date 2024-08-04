import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(private _radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
}
