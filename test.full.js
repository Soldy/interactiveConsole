
global.nanoTest   = new (require("nanoTest")).test();
const firstTest   = require("./test/first.js").firstTest;
const lineTests   = require("./test/line.js").lineTests;

process.stdout.write("\u001b[2J\u001b[0;0f");


firstTest();
lineTests();

global.nanoTest.run();
