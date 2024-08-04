"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("../02_typescripts/Customer");
var MyCustomer = new Customer_1.Customer("Srv", "Sgh");
console.log("Hello ".concat(MyCustomer.firstName, " ").concat(MyCustomer.lastName));
