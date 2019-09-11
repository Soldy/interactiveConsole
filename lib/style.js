
exports.styless = function (text){
    return text.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}


exports.style =  function (text, styles) {
    let styler = function(type,style){
        if (
            (typeof styleMap[type] !== "undefined") && 
            (typeof styleMap[type][style] !== "undefined")
        ){
            return ";"+styleMap[type][style].toString();
        }else{
             if(type  === "color"){
                 let color = colorCheck(style);
                 if (style !== false)
                     return color;
             }else if(type  === "background"){
                 let background = backgroundCheck(style);
                 if (style !== false)
                     return background;
             }
        }
        return "";
    }
    let colorCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";38;5;"+color;
        return ";38:2:"+style+":104";
    }
    let backgroundCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";48;5;"+color;
        return ";48:2:"+style+":104";
    }
    let styleMap={
        color: {
             black: 30,
             red: 31,
             green: 32,
             yellow: 33,
             blue: 34,
             magenta: 35,
             cyan: 36,
             white: 37,
             gray: 90,
            grey: 90
        },
        background: {
             black: 40,
             red: 41,
             green: 42,
             yellow: 43,
             blue: 44,
             magenta: 45,
             cyan: 46,
             white: 47
        },
        effect: {
            bold: 1,
            dim: 2,
            italic: 3,
            underline: 4,
            blink: 5,
            inverse: 7,
            hidden: 8,
            strikethrough: 9,
        }
    };
    let style = "\u001b[85";
    for (let i in styles)
        for (let s in styles[i])
                  style += styler(s, styles[i][s]);
            
    for (let s in styles)
           style += styler(s, styles[s]);
              
    let last = text.lastIndexOf("\u001b[0m");
    text = text.slice(0, last)+text.slice(last).replace("\u001b[0m", "\u001b[0m"+style+"m");
    return style+"m"+text+"\u001b[0m";
};
