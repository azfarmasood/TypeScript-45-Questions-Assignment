var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function GreatMagicians(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
function OriginalMagicians(magicians) {
    var magiciansString = magicians.join(", ");
    console.log(magiciansString);
}
var originalMagicians = ["David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning"];
var modifiedMagicians = GreatMagicians(__spreadArray([], originalMagicians, true));
console.log("  ");
console.log("Original Magicians:");
OriginalMagicians(originalMagicians);
console.log("  ");
console.log("Great Magicians:");
OriginalMagicians(modifiedMagicians);
console.log("  ");
