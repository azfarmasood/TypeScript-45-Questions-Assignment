function getOrdinalNumber(number) {
    var suffixes = ["th", "st", "nd", "rd"];
    var remainder = number % 100;
    return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var numberwithordial = numbers_1[_i];
    var ordinalNumber = getOrdinalNumber(numberwithordial);
    console.log(ordinalNumber);
}
