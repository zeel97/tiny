module.exports = function() {

  function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
  };

  function print(string) {
    return console.log(string);
  }

}
  