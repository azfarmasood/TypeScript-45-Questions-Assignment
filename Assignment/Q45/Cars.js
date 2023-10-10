function StoreCarInfo(Manufacturer, Model) {
    var keyValuePairs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keyValuePairs[_i - 2] = arguments[_i];
    }
    console.log("  ");
    var car = {
        Manufacturer: Manufacturer,
        Model: Model,
    };
    for (var i = 0; i < keyValuePairs.length; i++) {
        var _a = keyValuePairs[i], key = _a[0], value = _a[1];
        car[key] = value;
    }
    return car;
}
;
function StoreInfo(car) {
    for (var key in car) {
        console.log("".concat(key, ": ").concat(car[key]));
    }
}
var carInfo = StoreCarInfo("Toyota", "Corolla", ["ModelYear", 2023], ["Color", "Black"], ["Optional_Features", "Automatic door unlock system."]);
StoreInfo(carInfo);
console.log("  ");
