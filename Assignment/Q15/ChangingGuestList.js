var InvitedGuest = ["Ashir", " Selman ", " Sakhawat ", " Umair ", " Basit ."];
var GuestWhoCantComeintheParty = "Ashir";
var InvitingNewGuest = "Abdullah";
console.log("--------New Guest List:---------");
console.log("".concat(GuestWhoCantComeintheParty, " Unfotunately Can't come in the party because have some emergency problem."));
var invitingNewGuest = "Abdullah";
InvitedGuest[InvitedGuest.indexOf(GuestWhoCantComeintheParty)] = invitingNewGuest;
InvitedGuest.forEach(function (updatedguest) {
    console.log("Assala mo Alikum My Dear Friends ".concat(updatedguest, ", you are cordially invited to Lunch and Dinner Please join us on Block A-North-Nazimabad Karachi on Saturday at 2:00 PM till 8:pm We look forward to your presence Thank you."));
});
