var Fruite = "apple"
console.log("Is apple == 'apple' ? I predict True");
console.log(Fruite == 'apple');

console.log("Is apple == 'orange'I predict False");
console.log(Fruite == 'apple');

console.log("Is apple === 'red'? I predict True.");
console.log(Fruite === 'red');

console.log("Is apple === 'green'? I predict False.");
console.log(Fruite === 'green');

console.log("Is apple != 'juice'? I predict True.");
console.log(Fruite!= 'juice');

console.log("Is apple != 'banana'? I predict False.");
console.log(Fruite != 'banana');

console.log("Is apple !== 'taste'? I predict False.");
console.log(Fruite !== 'taste');

console.log("Is apple !== 'eat'? I predict True.");
console.log(Fruite !== 'eat');

console.log("Is apple < 'redshape'? I predict True.");
console.log(Fruite < 'redshape');

console.log("Is apple > 'tastelemon'? I predict False.");
console.log(Fruite > 'tastelemon');

// Tests using the lower case function

console.log("Tests using the lower case function")

console.log(`'Azfar'.toLowerCase() == 'Azfar'? I predict true.`);
console.log('Azfar'.toLowerCase() == 'Azfar');

console.log(`'Azfar'.toLowerCase() == 'Azfar'? I predict true.`);
console.log('Azfar'.toLowerCase() == 'Azfar');

console.log(`'Azfar'.toLowerCase() == 'Azfar'? I predict false.`);
console.log('Azfar'.toLowerCase() == 'Azfar');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(`5 == 5? I predict true.`);
console.log(5 == 5);

console.log(`10 > 5? I predict true.`);
console.log(10 > 5);

console.log(`5 < 10? I predict true.`);
console.log(5 < 10);

console.log(`10 >= 10? I predict true.`);
console.log(10 >= 10);

console.log(`5 <= 10? I predict true.`);
console.log(5 <= 10);

// Tests using "and" and "or" operators
console.log(`(5 > 3) && (10 < 20)? I predict true.`);
console.log((5 > 3) && (10 < 20));

console.log(`(5 > 10) || (10 < 20)? I predict true.`);
console.log((5 > 10) || (10 < 20));

//  Test whether an item is in a array
console.log(`Is 'apple' in the fruits array? I predict true.`);
var Fruites = ['apple', 'banana', 'orange'];
console.log(Fruites.indexOf('apple'));

console.log(`Is 'grape' in the fruits array? I predict false.`);
console.log(Fruites.indexOf('grape'));

// Test whether an item is not in a array

console.log(`Is 'apple' not in the fruits array? I predict false.`);
console.log(Fruites.indexOf('apple'));

console.log(`Is 'grape' not in the fruits array? I predict true.`);
console.log(Fruites.indexOf('grape'));