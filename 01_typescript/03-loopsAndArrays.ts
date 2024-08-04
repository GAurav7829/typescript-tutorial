for (let i = 0; i < 5; i++) {
  console.log(i);
}

let reviews: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
}

//average
let total = 0;
for (let i = 0; i < reviews.length; i++) {
  total += reviews[i];
}

console.log(`Average: ${total / reviews.length}`);

let sports: string[] = ["Cricket", "Golf", "Tennis"];
for (let sport of sports) {
  console.log(sport);
}

for (let sport of sports) {
  if (sport == "Golf") console.log(sport + "<<Favorite");
  else console.log(sport);
}

let sports2: string[] = ["Cricket", "Golf", "Tennis"];
sports2.push("Baseball");
sports2.push("Football");

for (let sport of sports2) {
    if (sport == "Golf") console.log(sport + "<<Favorite");
    else console.log(sport);
  }