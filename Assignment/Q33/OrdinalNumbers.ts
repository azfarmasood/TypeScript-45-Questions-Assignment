function getOrdinalNumber(number: number): string {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = number % 100;
  
    return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,20];
  
  for (const numberwithordial of numbers) {
    const ordinalNumber = getOrdinalNumber(numberwithordial);
    console.log(ordinalNumber);
  }  