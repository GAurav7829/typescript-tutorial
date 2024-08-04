import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let coach = new CricketCoach();
console.log(coach.getDailyWorkout());

let golfCOach = new GolfCoach();
console.log(golfCOach.getDailyWorkout());

console.log("Array of Coaches........");
let coaches:Coach[] = [];
coaches.push(coach);
coaches.push(golfCOach);


for(let c of coaches){
    console.log(c.getDailyWorkout());
}