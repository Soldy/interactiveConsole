
global.nanoTest   = new (require("nanoTest")).test();
const firstTest   = require("./test/first.js").firstTest;
const lineTests   = require("./test/line.js").lineTests;
const tableTest   = require("./test/table.js").tableTest;
const graphTest   = require("./test/graph.js").graphTest;
//const stringTest   = require("./test/string.js").stringTest;

process.stdout.write("\u001b[2J\u001b[0;0f");


firstTest();
lineTests();
graphTest();
tableTest();

global.nanoTest.run();

