// With user name:
console.log("No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.")
const names = ['baby', 'toddler', 'kid', 'teenager', 'adult', 'elder']; 

if (names.length === 6) {
  console.log("We need to find some users!");
} else {
  for (var empty of names) {
    if (empty === '') {
    } else {
    }
  }
}



// Without names:
console.log("If the list is empty, print the message We need to find some users!")
const Names = []; 

if (Names.length === 0) {
  console.log("We need to find some users!");
} else {
  for (var withempty of Names) {
    if (withempty === '') {
    } else {
    }
  }
}

// Usernames have been removed
console.log("Remove all of the usernames from your array, and make sure the correct message is printed.")
const UserNames = ['baby', 'toddler', 'kid', 'teenager', 'adult', 'elder'];

if (UserNames.length === 0){
}else {
    var Usernames = [];
    console.log("Usernames have been removed ")
}