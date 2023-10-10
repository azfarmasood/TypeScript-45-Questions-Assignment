function Magicians(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
var magicianNames = ["(David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning)"];
var output = "Names of Magicians: ";
for (var i = 0; i < magicianNames.length; i++) {
    output += magicianNames[i] + "";
    if (i < magicianNames.length - 1) {
        output += ", ";
    }
}
console.log(output);
