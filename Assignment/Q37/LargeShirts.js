function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it will be printed on typescript \"").concat(message, "\""));
}
make_shirt("xl");
make_shirt("lg");
make_shirt("med");
