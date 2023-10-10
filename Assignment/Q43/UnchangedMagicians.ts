function GreatMagicians(magicians: string[]): string[] {
  var greatMagicians: string[] = [];

  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }

  return greatMagicians;
}

function OriginalMagicians(magicians: string[]): void {
  const magiciansString: string = magicians.join(", ");
  console.log(magiciansString);
}


var originalMagicians: string[] = ["David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning"];
var modifiedMagicians: string[] = GreatMagicians([...originalMagicians]);
console.log("  ")
console.log("Original Magicians:");
OriginalMagicians(originalMagicians);
console.log("  ");
console.log("Great Magicians:");
OriginalMagicians(modifiedMagicians);
console.log("  ")
