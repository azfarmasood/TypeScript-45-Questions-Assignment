var names = ["Admin", "Selman", "Abdullah", "Umar", "Azfar", "Ali"];
for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Admin') {
        console.log("Hello Admin, would you like to see a status report today?");
    }
    else {
        console.log("Hello " + names[i] + ", Good to see you back");
    }
}
