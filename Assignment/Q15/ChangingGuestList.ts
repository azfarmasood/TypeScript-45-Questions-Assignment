


var InvitedGuest: string[] = ["Ashir", " Selman ", " Sakhawat ", " Umair ", " Basit ."];
const GuestWhoCantComeintheParty: string = "Ashir"; 
const InvitingNewGuest: string = "Abdullah"; 

console.log("--------New Guest List:---------")
console.log(`${GuestWhoCantComeintheParty} Unfotunately Can't come in the party because have some emergency problem.`);


const invitingNewGuest: string = "Abdullah";
InvitedGuest[InvitedGuest.indexOf(GuestWhoCantComeintheParty)] = invitingNewGuest;


InvitedGuest.forEach((updatedguest: string) => {
  console.log(`Assala mo Alikum My Dear Friends ${updatedguest}, you are cordially invited to Lunch and Dinner Please join us on Block A-North-Nazimabad Karachi on Saturday at 2:00 PM till 8:pm We look forward to your presence Thank you.`);
});
