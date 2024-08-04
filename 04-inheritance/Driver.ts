import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectancle";

let myShape = new Shape(10,20);
console.log(myShape.getInfo());

let myCircle = new Circle(20,30,50);
console.log(myCircle.getInfo());

let myResctangle = new Rectangle(10,20,40,50);
console.log(myResctangle.getInfo());

let theSpapes: Shape[] = [];
theSpapes.push(myCircle);
theSpapes.push(myResctangle);
theSpapes.push(myShape);

console.log("Array OF Shapes........... ")
for(let shape of theSpapes){
    console.log(shape.getInfo());
}