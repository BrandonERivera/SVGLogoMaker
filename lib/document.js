const shape = require('./shape.js');
const color = require('./color.js');
const letters = require('./letters.js');
function createDocument(logo) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shape} cx="150" cy="100" r="80" fill="${color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${letters}</text>

</svg>
  `;
}

module.exports = { createDocument };
