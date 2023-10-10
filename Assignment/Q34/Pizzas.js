console.log("\n");
console.log("Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.");
var pizza = ["Cheez Pizza", "Mushroom Pizza", "Spicy Pizza."];
var output = "I like ";
for (var i_1 = 0; i_1 < pizza.length; i_1++) {
    output += pizza[i_1] + "";
    if (i_1 < pizza.length - 1) {
        output += ", ";
    }
}
console.log(output);
console.log("\n");
console.log("Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!");
var pizzas = ["Cheez", "Mushroom", "Spicy"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I love ".concat(pizzas[i], " pizza."));
}
