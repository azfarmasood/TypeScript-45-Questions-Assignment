var MyFavouritePlacesetoVisit = ["Dubai", "America", "NewYourk", "Turkey", "Canada."]

console.log("\nOriginal Order.");
console.log(MyFavouritePlacesetoVisit);

console.log("\nAlphabetical Order (without modifying the original list).");
console.log([MyFavouritePlacesetoVisit].sort);


console.log("\nStill in original order:");
console.log(MyFavouritePlacesetoVisit);

console.log("\nReverse alphabetical order (without modifying the original list):");
console.log([MyFavouritePlacesetoVisit].sort().reverse());

console.log("\nStill in original order:");
console.log(MyFavouritePlacesetoVisit);

console.log("\nReversed order:");
MyFavouritePlacesetoVisit.reverse();
console.log(MyFavouritePlacesetoVisit);

console.log("\nReversed order again (back to original):");
MyFavouritePlacesetoVisit.reverse();
console.log(MyFavouritePlacesetoVisit);

console.log("\nSorted in alphabetical order:");
MyFavouritePlacesetoVisit.sort();
console.log(MyFavouritePlacesetoVisit);

console.log("\nSorted in reverse alphabetical order:");
MyFavouritePlacesetoVisit.sort().reverse();
console.log(MyFavouritePlacesetoVisit);