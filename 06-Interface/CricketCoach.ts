import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): String {
        return "Doing Cricket Practice";
    }
}