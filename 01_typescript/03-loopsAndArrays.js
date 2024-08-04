for (var i = 0; i < 5; i++) {
    console.log(i);
}
var reviews = [1, 2, 3, 4, 5];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
//average
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
console.log("Average: ".concat(total / reviews.length));
var sports = ["Cricket", "Golf", "Tennis"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    if (sport == "Golf")
        console.log(sport + "<<Favorite");
    else
        console.log(sport);
}
var sports2 = ["Cricket", "Golf", "Tennis"];
sports2.push("Baseball");
sports2.push("Football");
for (var _b = 0, sports2_1 = sports2; _b < sports2_1.length; _b++) {
    var sport = sports2_1[_b];
    if (sport == "Golf")
        console.log(sport + "<<Favorite");
    else
        console.log(sport);
}
