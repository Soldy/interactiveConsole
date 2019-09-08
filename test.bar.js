var consoleReq = require('./index.js');
var waittime = 10; // sec
var w = waittime * 1000;
var console = new consoleReq.console();

console.bar.init({
   'name':'testbar',
   'max' : 40
})
console.bar.addLine({
    'bar'   : 'testbar',
    'id'    : '1',
    'title'  : 'test bar blue',
    'color' : 'blue'
    }
);
console.bar.addLine({
    'bar'   : 'testbar',
    'id'    : '2',
    'title' : 'test bar green',
    'color' : 'green'
    }
);
console.bar.addLine({
    'bar'   : 'testbar',
    'id'    : '3',
    'title' : 'test bar red',
    'color' : 'red'
    }
);
console.cursor.hide();

var randomBarI = 0;
function randomBar(){
    console.bar.update({
        'name'   : 'testbar',
        'update' : {
            '1' : Math.floor(Math.random()*40),
            '2' : Math.floor(Math.random()*40),
            '3' : Math.floor(Math.random()*40)
        }});
    console.cursor.up(3);
    console.bar.draw('testbar');
    randomBarI++;
    if(randomBarI > 2000){
        console.cursor.show();
        process.exit(1);
    }
    setTimeout(function(){
       randomBar();
    },10)
}
console.print("\n\n\n\n\n\n");
randomBar();
