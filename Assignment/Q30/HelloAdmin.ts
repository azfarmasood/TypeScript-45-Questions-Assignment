const names: string[] = ["Admin", "Selman", "Abdullah", "Umar", "Azfar", "Ali"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Admin') {
      console.log("Hello Admin, would you like to see a status report today?");
    }else {
        console.log("Hello " + names[i] + ", Good to see you back");
    }
}