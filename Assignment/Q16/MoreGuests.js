var InvitedGuest = ["Abdullah", " Selman ", " Sakhawat ", " Umair ", " Basit "];
var GuestWhoCantComeintheParty = "Ashir";
var InvitingNewGuest = "Abdullah";
var totalGuest = InvitedGuest.indexOf(GuestWhoCantComeintheParty);
if (totalGuest !== -1) {
    InvitedGuest[totalGuest] = InvitingNewGuest;
}
console.log("Good! we found a bigger party table");
// Adding more 5 Guest
InvitedGuest.push("Sohail", "Arif", "Ahmed", "Wasay", "Jamil");
console.log(GuestWhoCantComeintheParty + " Unfotunately Can't come in the party because have some emergency problem.");
console.log("------New Guest List-------");
InvitedGuest.forEach(function (NewGuestList) {
    console.log("Assala mo Alikum My Dear Friends ".concat(NewGuestList, ", you are cordially invited to Lunch and Dinner Please join us on Block A-North-Nazimabad Karachi on Saturday at 2:00 PM till 8:pm We look forward to your presence Thank you"));
});
