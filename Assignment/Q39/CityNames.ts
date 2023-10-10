function cityin_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }

  const Locations = cityin_country("Karachi", "Pakistan");
console.log(Locations);