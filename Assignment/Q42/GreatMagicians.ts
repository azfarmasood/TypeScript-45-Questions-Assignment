function GreatMagicians(magicians:string[]): void{

for (var i=0; i < magicians.length; i++){
    if (magicians[i].indexOf(" The Great ") === -1){
        magicians[i] = " The Great " + magicians[i];
    }else{
        console.log(`${magicians[i]}`);
    }
}
};

function MagiciansShow(magicians:string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
console.log("Magicians Names:")
const magicians:string[] = ["David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning"];
GreatMagicians(magicians);
MagiciansShow(magicians);

