function Sandwich(items) {
  console.log("Bread: ", items[0]);

  if (items.length > 1) {
    console.log("Ingredients: ", items.slice(1).join(", "));
  } else {
    console.log("No additional ingredients.");
  }


}
console.log("  ")
console.log("Sandwich Order:")
Sandwich(["Brown Bread", "Chicken", "Chadder Cheese", "Tomato","cucumber", "Mayonnaise"]);
console.log("  ")

