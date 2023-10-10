function GreatMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        if (magicians[i].indexOf(" The Great ") === -1) {
            magicians[i] = " The Great " + magicians[i];
        }
        else {
            console.log("".concat(magicians[i]));
        }
    }
}
;
function MagiciansShow(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
console.log("Magicians Names:");
var magicians = ["David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning"];
GreatMagicians(magicians);
MagiciansShow(magicians);
