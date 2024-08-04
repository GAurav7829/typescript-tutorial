"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var coach = new CricketCoach_1.CricketCoach();
console.log(coach.getDailyWorkout());
var golfCOach = new GolfCoach_1.GolfCoach();
console.log(golfCOach.getDailyWorkout());
console.log("Array of Coaches........");
var coaches = [];
coaches.push(coach);
coaches.push(golfCOach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var c = coaches_1[_i];
    console.log(c.getDailyWorkout());
}
