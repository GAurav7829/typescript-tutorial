import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): String {
        return "Doing Golf Practice";
    }
}