"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectancle_1 = require("./Rectancle");
var myShape = new Shape_1.Shape(10, 20);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(20, 30, 50);
console.log(myCircle.getInfo());
var myResctangle = new Rectancle_1.Rectangle(10, 20, 40, 50);
console.log(myResctangle.getInfo());
var theSpapes = [];
theSpapes.push(myCircle);
theSpapes.push(myResctangle);
theSpapes.push(myShape);
console.log("Array OF Shapes...........");
for (var _i = 0, theSpapes_1 = theSpapes; _i < theSpapes_1.length; _i++) {
    var shape = theSpapes_1[_i];
    console.log(shape.getInfo());
}
