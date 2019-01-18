const logger = require('./logger');

const lowerCase = (string) => {
  return lowerCase(string)
}

const tiny = (string) => {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
}

module.exports = {
  logger,
  lowerCase,
  tiny
}

  
