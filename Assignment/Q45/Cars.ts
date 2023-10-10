function StoreCarInfo(Manufacturer: string, Model: string, ...keyValuePairs: [string, string | number][]): any {
    console.log("  ")
    var car: any = {
        Manufacturer: Manufacturer,
        Model: Model,
      };

    

      for (var i = 0; i < keyValuePairs.length; i++) {
        var [key, value] = keyValuePairs[i];
        car[key] = value;
      }
      return car;
    };

    function StoreInfo(car: any) {
        for (var key in car) {
          console.log(`${key}: ${car[key]}`);
        }
      }
    
      var carInfo = StoreCarInfo("Toyota", "Corolla", ["ModelYear", 2023], ["Color", "Black"], ["Optional_Features", "Automatic door unlock system."]);

  StoreInfo(carInfo);

  console.log("  ")



