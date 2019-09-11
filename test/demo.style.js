const style = require('.lib/style.js').style;



console.log(
    style(
        "console.printLn(console.style('test',{effect:'bold'}))", 
        {effect: 'bold'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'dim'}))", 
        {effect: 'dim'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'italic'}))", 
        {effect: 'italic'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'underline'}))", 
        {effect: 'underline'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'blink'}))", 
        {effect: 'blink'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'inverse'}))", 
        {effect: 'inverse'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{effect:'hidden'}))", 
        {effect: 'hidden'}
    )
);
console.log(
     style(
         "console.printLn(console.style('test',{effect:'strikethrough'}))", 
         {effect: 'strikethrough'}
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{color:'blue'',effect:'bold'}))", 
        {
            color: "blue", 
            effect: 'bold'
        }
    )
);

console.log(
    style(
        "console.printLn(console.style('test',[{color:'cyan',effect:'bold'}, {effect:'underline'}, {effect:'blink'}]))", 
        [
            {
                color: 'cyan', 
                effect: 'bold'
            }, {
                effect: 'underline'
            }, {
                effect: 'blink'
            }
        ]
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{color:'250:7:150',effect:'bold'}))", 
        {
            color: "250:7:150", 
            effect: 'bold'
        }
    )
);
console.log(
    style(
        "console.printLn(console.style('test',{color:'65',background:165,effect:'bold'}))", 
        {
            color: "65",
            background: "165",
            effect: 'bold'
        }
    )
);


