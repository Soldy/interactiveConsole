
global.nanoTest   = new (require("nanoTest")).test();
const firstTest   = require("./test/first.js").firstTest;
const lineTests   = require("./test/line.js").lineTests;

firstTest();
lineTests();

global.nanoTest.run();

