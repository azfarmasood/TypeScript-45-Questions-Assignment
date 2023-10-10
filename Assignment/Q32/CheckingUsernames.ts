const currentusers: string[] = ["Ashir", "Jamil", "Bilal", "Hamza", "Abdillah", "Arif"];
const comingusers: string[] = ["Ashir", "Jamil", "Ali", "Sakhawat", "Selman", "Sulaiman"];

for (var i = 0; i <comingusers.length; i++ ){
    const username = comingusers[i];
    var taken=false;

    for (var l= 0; l < comingusers.length; l++){
        if(currentusers[l] === username){
            taken=true;
            break;
        }
    }
    if (taken) {
        console.log(`The username ${username} is already in used.`);
      } else {
        console.log(`This username ${username} is available.`);
      }
}