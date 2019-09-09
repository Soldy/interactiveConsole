
global.nanoTest   = new (require("nanoTest")).test();
const firstTest   = require("./test/first.js").firstTest;
const lineTests   = require("./test/line.js").lineTests;
const tableTest   = require("./test/table.js").tableTest;

process.stdout.write("\u001b[2J\u001b[0;0f");


firstTest();
lineTests();
tableTest();

global.nanoTest.run();

