var InvitedGuest = ["Abdullah", " Selman ", " Sakhawat ", " Umair ", " Basit ", "Sohail", "Arif", "Ahmed", "Wasay", "Jamil"];
console.log("Unfortunately the new dinner tabel won't arrive in the time.");
console.log("Sorry we have only space for 2 persons because the new party table won't arrive at that time so we can only invite 2 persons only Thank you");
while (InvitedGuest.length > 2) {
    var DonthaveSpaceForOtherGuest = InvitedGuest.pop();
    console.log("Sorry, ".concat(DonthaveSpaceForOtherGuest, ", I can't invite you"));
}
console.log("--------New Guest List-----------");
InvitedGuest.forEach(function (NewGuestList) {
    console.log("Assala mo Alikum My Dear Friends ".concat(NewGuestList, ",You are still invited Thank you."));
});
InvitedGuest.length = 0;
console.log("Final List");
console.log(InvitedGuest);
