console.log("\n")
console.log("Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.")
const pizza: string[] = ["Cheez Pizza", "Mushroom Pizza", "Spicy Pizza."];
var output = "I like "

for (let i = 0; i < pizza.length; i++) {
    output += pizza[i] + "";

    if (i < pizza.length - 1) {
        output += ", ";
      }
    }

    console.log(output);
    console.log("\n")
    console.log("Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!")

    const pizzas: string[] = ["Cheez", "Mushroom", "Spicy"];

    for (var i = 0; i < pizzas.length; i++) {
        console.log(`I love ${pizzas[i]} pizza.`);
      }
      
      


