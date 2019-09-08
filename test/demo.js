var consoleReq = require('./index.js');
var waittime = 10; // sec
var w = waittime * 1000;
var console = new consoleReq.console();


//console.writeInit();


console.printLn("var consoleReq = require('interactiveConsole');");
console.printLn("var console = new consoleReq.console();");

console.printLn('');
console.printLn(console.style('console.printLn(console.style("blinking red bold text", [{color:"red"},{effect:"blink"},{effect:"bold"}]));', [{color: "red"}, {effect: "blink"}, {effect: "bold"}]));

console.log("console.log('test');");
console.info("console.info('test');");
console.error("console.error('test');");
console.warn("console.warn('test');");

console.printLn('console.table([["testcolumA","testcolumB","testcolumC"],["A0","B0","C0"],["A1","B1","C1"],["A2","B2","C2"]]);');
console.table([["testcolumA", "testcolumB", "testcolumC"], ["A0", "B0", "C0"], ["A1", "B1", "C1"], ["A2", "B2", "C2"]]);

console.time("console.time('time');console.timeEnd();");
console.timeEnd();

console.printLn("console.graph([4,5,12,4,2,4,9,16,6,4,14,5,11,8,5,12,4,2,4,9,16,6,4,14,5,11,8,5,12,4,2,4,9,16,6,4,14,5,11,8,1]);");
console.graph([4, 5, 12, 4, 2, 4, 9, 16, 6, 4, 14, 5, 11, 8, 5, 12, 4, 2, 4, 9, 16, 6, 4, 14, 5, 11, 8, 5, 12, 4, 2, 4, 9, 16, 6, 4, 14, 5, 11, 8, 1]);

console.printLn('console.config.color=1; console.config.timeStamp=0; console.config.count=1; console.config.date=1; console.config.hostname=1;');
console.config.color = 1;
console.config.timeStamp = 0;
console.config.count = 1;
console.config.date = 1;
console.config.hostname = 1;
console.error("console.error('test');");
console.config.host = "testname";
console.printLn('console.config.host="testname";');
console.error("console.error('test');");



setTimeout(function () {
    console.clear();
    console.printLn("console json");
    if(console.detected.wonderfulOutput === 1) console.printLn("wonderful-output detected");
    console.printLn("console.log({func:function(){ console.log('test')},'players': [ { 'fname': 'joe', 'lname': 'smith', 'number': '34'} ,  { 'fname': 'jim', 'lname': 'Hoff', 'number': '12'}, { 'fname': 'jack', 'lname': 'jones', 'number': '84'}]});");
    console.log({func:function(){ console.log('test')},'players': [ { 'fname': 'joe', 'lname': 'smith', 'number': '34'} ,  { 'fname': 'jim', 'lname': 'Hoff', 'number': '12'}, { 'fname': 'jack', 'lname': 'jones', 'number': '84'}]});

}, w);
w += waittime * 1000;

setTimeout(function () {
    console.cacheRewrite();
    console.printLn("console.cacheRewrite();");
}, w);
w += waittime * 1000;
/*****
 * 
 * effects
 * 
 */


setTimeout(function () {
    console.clear();
    console.printLn("console.style effects");
    console.printLn(console.style("console.printLn(console.style('test',{effect:'bold'}))", {effect: 'bold'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'dim'}))", {effect: 'dim'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'italic'}))", {effect: 'italic'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'underline'}))", {effect: 'underline'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'blink'}))", {effect: 'blink'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'inverse'}))", {effect: 'inverse'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'hidden'}))", {effect: 'hidden'}));
    console.printLn(console.style("console.printLn(console.style('test',{effect:'strikethrough'}))", {effect: 'strikethrough'}));
    console.printLn("console.style effects with color");
    console.printLn(console.style("console.printLn(console.style('test',{color:'blue'',effect:'bold'}))", {color: "blue", effect: 'bold'}));

    console.printLn("multi effects with color");
    console.printLn(console.style("console.printLn(console.style('test',[{color:'cyan',effect:'bold'}, {effect:'underline'}, {effect:'blink'}]))", [{color: 'cyan', effect: 'bold'}, {effect: 'underline'}, {effect: 'blink'}]));

}, w);
w += waittime * 1000;


/*****
 * 
 * colors
 * 
 */


setTimeout(function () {
    console.clear();
    console.printLn("console.style colors");
    console.printLn(console.style("console.printLn(console.style('test',{background:'white',color:'black'}))", {background: 'white', color: "black"}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'black',color:'white'}))", {background: 'black', color: "white"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'red'}))", {color: "red"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'green'}))", {color: "green"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'yelow'}))", {color: "yellow"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'blue'}))", {color: "blue"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'magenta'}))", {color: "magenta"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'cyan'}))", {color: "cyan"}));
    console.printLn(console.style("console.printLn(console.style('test',{color:'grey'}))", {color: "grey"}));
    console.printLn("console.style background");
    console.printLn(console.style("console.printLn(console.style('test',{background:'red'}))", {background: 'red'}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'green'}))", {background: 'green'}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'yellow'}))", {background: 'yellow'}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'blue'}))", {background: 'blue'}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'magenta'}))", {background: 'magenta'}));
    console.printLn(console.style("console.printLn(console.style('test',{background:'cyan'}))", {background: 'cyan'}));
}, w);
w += waittime * 1000;


setTimeout(function () {
    console.clear();
    console.printLn("console.style colors with multiple rules");
    console.printLn(console.style("console.printLn(console.style('test'+"+console.style("console.style('test',{background:'black',color:'white'})",{background:'black',color:'white'})+"+'test',{background:'white',color:'black'}))", {background: 'white', color: "black"}));
    console.printLn(console.style("console.printLn(console.style('test'+"+console.style("console.style('test',{background:'white',color:'black'})",{background:'white',color:'black'})+"+'test',{background:'black',color:'white'}))", {background: 'black', color: "white"}));
    console.printLn(console.style("console.printLn(console.style('test'+"+console.style("console.style('test',{color: 'blue'})",{color: 'blue'})+"+'test',{color:'blue'}))", {color: "red"}));
    console.printLn(console.style("console.printLn(console.style('test'+"+console.style("console.style('test',{color: 'red'})",{color: 'red'})+"+'test',{color:'blue'}))", {color: "blue"}));
}, w);
w += waittime * 1000;

/*************************************************************
 
 input test
 
 */
setTimeout(function () {
    console.printLn('console.cursorText = "simple input $";');
    console.cursorText = "simple input $ ";
    console.printLn('console.watch();');
    console.watch();
}, w);
w += waittime * 1000;


setTimeout(function () {
    console.printLn('console.cursorText = safe input $";');
    console.cursorText = "safe input $ ";
    console.printLn('console.watch();');
    console.config.limitation = "safe";
    console.printLn('console.config.limitation = "safe"');
}, w);
w += waittime * 1000;

setTimeout(function () {
    console.printLn('console.cursorText = number input $";');
    console.cursorText = "number input $ ";
    console.printLn('console.watch();');
    console.config.limitation = "number";
    console.printLn('console.config.limitation = "number"');
}, w);
w += waittime * 1000;

setTimeout(function () {
    console.printLn('console.cursorText = calculator input $";');
    console.cursorText = "calculator  input $ ";
    console.printLn('console.watch();');
    console.config.limitation = "calculator";
    console.printLn('console.config.limitation = "calculator"');
}, w);
w += waittime * 1000;


setTimeout(function () {
    console.printLn('console.cursorText = password input $";');
    console.cursorText = "password input $ ";
    console.printLn('console.watch();');
    console.config.limitation = "none";
    console.config.mode = "password";
    console.printLn('console.config.mode = "password"');
}, w);
w += waittime * 1000;


setTimeout(function () {
    console.printLn('console.cursorText = hidden input $";');
    console.cursorText = "hidden input $ ";
    console.printLn('console.watch();');
    console.config.limitation = "none";
    console.config.mode = "hidden";
    console.printLn('console.config.mode = "hidden"');
}, w);
w += waittime * 1000;


setTimeout(function () {
    console.print("\n");
    process.exit();
}, w);
w += waittime * 1000;



