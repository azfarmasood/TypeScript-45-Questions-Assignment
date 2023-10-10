var currentusers = ["Ashir", "Jamil", "Bilal", "Hamza", "Abdillah", "Arif"];
var comingusers = ["Ashir", "Jamil", "Ali", "Sakhawat", "Selman", "Sulaiman"];
for (var i = 0; i < comingusers.length; i++) {
    var username = comingusers[i];
    var taken = false;
    for (var l = 0; l < comingusers.length; l++) {
        if (currentusers[l] === username) {
            taken = true;
            break;
        }
    }
    if (taken) {
        console.log("The username ".concat(username, " is already in used."));
    }
    else {
        console.log("This username ".concat(username, " is available."));
    }
}
