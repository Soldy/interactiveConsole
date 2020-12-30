const style = (require('./style')).style;


const bar=function(){
    let bars = {};
    const init = function(inp){
        if(typeof inp.name === 'undefined')
            return false;
        if(typeof inp.max === 'undefined')
            inp.max = 10;
        if(typeof inp.lines === 'undefined')
            inp.lines = {};
        bars[inp.name]={
            size  : 10,
            max   : inp.max,
            lines : inp.lines
        };
    };
    const addLine = function(inp){
        if(
            (typeof inp.bar === 'undefined')||
                 (typeof bars[inp.bar] === 'undefined')||
                 (typeof inp.id  === 'undefined')||
                 (typeof inp.title === 'undefined')
        ) return false;
        if(
            (typeof inp.value === 'undefined')||
                 (0 > inp.value)||
                 ((bars[inp.bar].max !== 'auto')&&
                 (inp.value > bars[inp.bar].max))
        ) inp.value = 0;
        if(typeof inp.color    === 'undefined')
            inp.color = 'white';
        if(inp.title.toString().length+2 > bars[inp.bar].size)
            bars[inp.bar].size = inp.title.length+2;
        bars[inp.bar].lines[inp.id] = {
            title:inp.title,
            color:inp.color,
            value:inp.value
        };
    };
    const upDate = function(inp){
        if(
            (typeof bars[inp.name] === 'undefined')||
                 (typeof bars[inp.name].lines === 'undefined')
        )
            return false;
        for(let i in inp.update){
            if(typeof bars[inp.name].lines[i] === 'undefined')
                continue;
            bars[inp.name].lines[i].value = inp.update[i];
        }
        return true;
    };
    const draw = function(bar){
        if(
            (typeof bar === 'undefined')||
                 (typeof bars[bar] === 'undefined')
        )
            return false;
        let siz = bars[bar].size,
            out = '',
            max = bars[bar].max,
            lines = bars[bar].lines;
        for (let i in lines){
            out += title(siz,lines[i].title)+
                    '\u2502'+
                    line(lines[i].color, lines[i].value, max)+
                    '\n';
        }
        return (out);
    };
    const title = function(size,title){
        let spaces = size - title.toString().length-1,
            ot = '';
        for (let i = 0; spaces > i ; i++)
            ot += ' ';
        return ot+title+' ';
    };
    const line = function(color,size,max){
        let siz = Math.floor(size*(35/max)),
            ut = '';
        for (let i =1 ; 35>i;i++)
            if(i>siz)
                ut +=' ';
            else
                ut +='\u2588';
        return style(ut, [{color}]);
    };
};
