<<<<<<< HEAD

const consoleOld = require('console').Console;
const fs = require('fs');

"use strict"
=======
"use strict";

const consoleOld = require("console").Console;
const fs = require("fs");

>>>>>>> 0.99.0

exports.console = function () {
    this.howami = "interactiveConsole not ready";
    this.console = consoleOld;
    this.assert = consoleOld.assert;
    this.size = {
        column: process.stdout.columns,
        row: process.stdout.rows
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.count = consoleOld.count;
    this.check = function () {
        try {
            var wo = require("wonderful-output");
            that.libs.wonderfulOutput = new wo.json();
            that.detected.wonderfulOutput = 1;
        } catch (e) {
            that.detected.wonderfulOutput = 0;
        }
        that.howami = "interactiveConsole is fine";
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.debug = function (incoming, level) {
        if (typeof level === "undefined")
            level = 9;
        if (that.config.debugLevel >= level)
            that.log(incoming);
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.detected = {
        wonderfulOutput: 0
    };
    this.dir = consoleOld.dir;
    this.dirxml = consoleOld.dirxml;
    this.expection = consoleOld.expection;
    this.group = consoleOld.group;
    this.groupCollapsed = consoleOld.groupCollapsed;
    this.groupEnd = consoleOld.groupEnd;
    this.markTimeLine = consoleOld.markTimeLine;
    this.profile = consoleOld.profile;
    this.profileEnd = consoleOld.profileEnd;
    this.timeStamp = consoleOld.timeStamp;
    this.trace = consoleOld.trace;
    this.cacheCount = {};
    this.countNumber = 0;
<<<<<<< HEAD
=======
    this.bar={
        bars:{},
        init:function(inp){
            if(typeof inp.name === "undefined")
                return false;
            if(typeof inp.max === "undefined")
                inp.max = 10;
            if(typeof inp.lines === "undefined")
                inp.lines = {};
            that.bar.bars[inp.name]={
                size  : 10,
                max   : inp.max,
                lines : inp.lines
            };
        },
        addLine:function(inp){
            if(
                (typeof inp.bar === "undefined")||
                 (typeof that.bar.bars[inp.bar] === "undefined")||
                 (typeof inp.id  === "undefined")||
                 (typeof inp.title === "undefined")
            ) return false;
            if(
                (typeof inp.value === "undefined")||
                 (0 > inp.value)||
                 ((that.bar.bars[inp.bar].max !== "auto")&&
                 (inp.value > that.bar.bars[inp.bar].max))
            ) inp.value = 0;
            if(typeof inp.color    === "undefined")
                inp.color = "white";
            if(inp.title.toString().length+2 > that.bar.bars[inp.bar].size)
                that.bar.bars[inp.bar].size = inp.title.length+2;
            that.bar.bars[inp.bar].lines[inp.id] = {
                title:inp.title,
                color:inp.color,
                value:inp.value
            };
        },
        update:function(inp){
            if(
                (typeof that.bar.bars[inp.name] === "undefined")||
                 (typeof that.bar.bars[inp.name].lines === "undefined")
            )
                return false;
            for(let i in inp.update){
                if(typeof that.bar.bars[inp.name].lines[i] === "undefined")
                    continue;
                that.bar.bars[inp.name].lines[i].value = inp.update[i];
            }
            return true;
        },
        draw:function(bar){
            if(
                (typeof bar === "undefined")||
                 (typeof that.bar.bars[bar] === "undefined")
            )
                return false;
            let siz = that.bar.bars[bar].size,
                out = "",
                max = that.bar.bars[bar].max,
                lines = that.bar.bars[bar].lines;
            for (let i in lines){
                out += that.bar.title(siz,lines[i].title)+
                    "\u2502"+
                    that.bar.line(lines[i].color, lines[i].value, max)+
                    "\n";
            }
            that.print(out);
        },
        title:function(size,title){
            let spaces = size - title.toString().length-1,
                ot = "";
            for (let i = 0; spaces > i ; i++)
                ot += " ";
            return ot+title+" ";
        },
        line:function(color,size,max){
            let siz = Math.floor(size*(35/max)),
                ut = "";
            for (let i =1 ; 35>i;i++)
                if(i>siz)
                    ut +=" ";
                else
                    ut +="\u2588";
            return that.style(ut, [{color}]);
              
        }

    };
>>>>>>> 0.99.0
    this.history = {
        list: [],
        position: 0,
        add: function (list) {
<<<<<<< HEAD

            if (Object.prototype.toString.call(list) === '[object Array]') {
                that.history.list = [];
                for (var i = 0; list.length > i; i++)
                    if ((that.history.list.length < 1) || (list[i] !== that.history.list[that.history.list.length - 1]))
                        that.history.list.push(list[i]);
            } else if (typeof list === "string") {
                if ((that.history.list.length < 1) || (list !== that.history.list[that.history.list.length - 1]))
                    that.history.list.push(list);
=======
            if (Object.prototype.toString.call(list) === "[object Array]") {
                that.history.list = [];
                for (var i = 0; list.length > i; i++)
                    if (
                        (that.history.list.length < 1) ||
                        (list[i] !== that.history.list[that.history.list.length - 1])
                    ) that.history.list.push(list[i]);
            } else if (typeof list === "string") {
                if (
                    (that.history.list.length < 1) || 
                    (list !== that.history.list[that.history.list.length - 1])
                ) that.history.list.push(list);
>>>>>>> 0.99.0
            }
            that.history.position = that.history.list.length;
            return true;
        }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.icons = {
        log: "\u27e1",
        warn: "\u26a0",
        info: "\u2709",
        error: "\u26a1",
        time: "\u25f4"
<<<<<<< HEAD
    },
            this.writeStream = {
                write: function (haleluja) {
                    return false;
                }
            }
    this.writeInit = function () {
        this.writeStream = fs.createWriteStream(this.config.log.directory + this.config.log.fileName, {'flags': 'a'});
=======
    };
    this.writeStream = {
        write: function (input) {
            return input;
        }
    };
    this.writeInit = function () {
        this.writeStream = fs.createWriteStream(
            this.config.log.directory + this.config.log.fileName, {"flags": "a"}
        );
>>>>>>> 0.99.0
        this.config.log.write = 1;
    };
    this.config = {
        beep: 1,
        color: 0,
        count: 0,
        date: 0,
        dateFormat: "DMY", // DMY, MDY, YMD,
        format: "text", // text, json
        hostname: 0,
        host: "localhost",
        debugLevel: 9,
        icon: 0,
        limitation: "none", // none, safe, number, calculator
        limits: {
<<<<<<< HEAD
            safe: "QWERTYUIOOOOPASDFGHJKL\ZXCVBNM qwertyuiopasdfghjklzxcvbnm`1234567890_-+={[}]:;@'~#!" + '"' + "£$%^&*()æßðđŋħĸµn¢»«|\\/?><,.€½³²¹½¾¢|«»nµłĸŋđðßæ@łe¶ŧ←↓→øþ·̣|¬*",
=======
            safe: "QWERTYUIOOOOPASDFGHJKLZXCVBNM qwertyuiopasdfghjklzxcvbnm`1234567890_-+={[}]:;@'~#!\"£$%^&*()æßðđŋħĸµn¢»«|\\/?><,.€½³²¹½¾¢|«»nµłĸŋđðßæ@łe¶ŧ←↓→øþ·̣|¬*",
>>>>>>> 0.99.0
            number: "0123456789",
            calculator: "098764321=+-*/%"
        },
        log: {
            write: 0,
            fileName: "console.log",
            directory: ""
        },
        mode: "normal", // normal, password, hidden, yesNo
        slave: 0,
        styles: {
            count: {color: "white", effect: "italic"},
            timeStamp: {color: "white", effect: "dim"},
            date: {color: "white", effect: "dim"},
            log: {color: "grey", effect: "bold"},
            warn: {color: "yellow", effect: "bold"},
            info: {color: "green", effect: "bold"},
            error: {color: "red", effect: "bold"},
            time: {color: "blue", effect: "bold"},
            logTitle: {color: "grey", effect: "bold"},
            warnTitle: {color: "yellow", effect: "bold"},
            infoTitle: {color: "green", effect: "bold"},
            errorTitle: {color: "red", effect: "bold"},
            timeTitle: {color: "blue", effect: "bold"},
            logIcon: {color: "grey", effect: "bold"},
            warnIcon: {color: "yellow"},
            infoIcon: {color: "green"},
            errorIcon: {color: "red"},
            timeIcon: {color: "blue"}
        },
        title: 1,
        titleColor: 1,
        timeStamp: 1,
        wonderfulOutput: 1
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.styles = {
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.cache = [];
    this.cacheRewrite = function () {
        that.clear();
        for (var i = 0; that.cache.length > i; i++) {
            that.print(that.textMaker.re(that.cache[i].count,
<<<<<<< HEAD
                    that.cache[i].hostname,
                    that.cache[i].text,
                    that.cache[i].type,
                    that.cache[i].timeStamp) + "\n");
        }
        that.makePrompt();
    }
=======
                that.cache[i].hostname,
                that.cache[i].text,
                that.cache[i].type,
                that.cache[i].timeStamp) + "\n");
        }
        that.makePrompt();
    };
>>>>>>> 0.99.0
    this.cacheAdd = function (count, hostname, text, type, timeStamp) {
        that.cache.push({
            count: count,
            hostname: hostname,
            timeStamp: timeStamp,
            text: text,
            type: type
        });
<<<<<<< HEAD
    }
    this.style = function (text, styles) {
        var style = '\u001b[85';
        for (var i in styles)
            for (var s in styles[i])
                if ((typeof this.styles[s] !== "undefined") && (typeof this.styles[s][styles[i][s]] !== "undefined"))
                    style += ";" + this.styles[s][styles[i][s]].toString();
        for (var s in styles)
=======
    };
    this.style = function (text, styles) {
        let style = "\u001b[85";
        for (let i in styles)
            for (let s in styles[i])
                if ((typeof this.styles[s] !== "undefined") && (typeof this.styles[s][styles[i][s]] !== "undefined"))
                    style += ";" + this.styles[s][styles[i][s]].toString();
        for (let s in styles)
>>>>>>> 0.99.0
            if ((typeof this.styles[s] !== "undefined") && (typeof this.styles[s][styles[s]] !== "undefined"))
                style += ";" + this.styles[s][styles[s]].toString();
        var last = text.lastIndexOf("\u001b[0m");
        text = text.slice(0, last) + text.slice(last).replace("\u001b[0m", "\u001b[0m" + style + "m");
        return style + "m" + text + "\u001b[0m";
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.watchOn = 0;
    this.yes = function () {};
    this.no = function () {};
    this.clear = function () {
<<<<<<< HEAD
        process.stdout.write('\u001b[2J\u001b[0;0f');
    }
=======
        process.stdout.write("\u001b[2J\u001b[0;0f");
    };
>>>>>>> 0.99.0
    this.print = function (incoming) {
        if (typeof incoming === "undefined")
            return false;
        process.stdout.write(incoming.toString());
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.printError = function (incoming) {
        if (typeof incoming === "undefined")
            return false;
        process.stderr.write(incoming.toString());
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.printLn = function (incoming, type) {
        if (typeof incoming === "undefined")
            return false;
        if (typeof type === "undefined")
            type = "simple";
        if (that.config.slave === 1){
            type = "simple";
        }else if (this.watchOn === 1) {
            process.stdout.cursorTo(0);
            process.stdout.clearLine();
        }
        if (type === "simple")
            this.print(incoming.toString() + "\n");
        if (type === "error")
            this.printError(incoming.toString() + "\n");
        if (this.watchOn === 1)
            this.makePrompt();
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.titleText = {
        log: "log : ",
        warn: "warning : ",
        info: "info : ",
        error: "error : ",
        time: "time : "
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.textMaker = {
        timeStamp: function (stamp) {
            if (that.config.timeStamp === 1)
                return "[" + that.style((parseInt(stamp / 1000)).toString(), that.config.styles.timeStamp) + "]";
            return "";
        },
        date: function (stamp) {
            // DMY, MDY, YMD,
            var d = new Date(stamp);
            if (that.config.date === 1) {
                if (that.config.dateFormat === "YMD")
                    return"[" + that.style(d.getFullYear().toString() + "-" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
                if (that.config.dateFormat === "DMY")
                    return"[" + that.style(d.getDate().toString() + "-" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getFullYear().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
                if (that.config.dateFormat === "MDY")
                    return"[" + that.style((parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate().toString() + "-" + d.getFullYear().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
            }
            return "";
        },
        title: function (type) {
            var title;
            if (that.config.titleColor === 1)
                title = that.style(that.titleText[type], that.config.styles[type + "Title"]);
            if (that.config.title === 1)
                return title;
            return "";
        },
        icon: function (type) {
            if (that.config.icon === 1)
                return that.style(that.icons.log + " ", that.config.styles[type + "Icon"]);
            return "";
        },
        hostname: function (hostname) {
            if (that.config.hostname === 1)
                return that.style("=" + hostname + "= ", that.config.styles.hostname);
            return "";
        },
        json: function (text, type, stamp) {
            return JSON.stringify({count:that.textMaker.count(),hostname: that.config.hostname, timeStamp: stamp, type: type, text: text});
        },
        count: function () {
            if (that.config.count === 1)
                return that.style(that.countNumber.toString() + ". ", that.config.styles.count);
            return "";
        },
        text: function (type, text) {
            if (that.config.count === 1)
                return that.style(text.toString(), that.config.styles[type]);
            return text.toString();
        },
        formater: function (text) {
            if ((that.detected.wonderfulOutput === 1) && (that.config.wonderfulOutput === 1)) {
                if (typeof text === "object")
                    return that.libs.wonderfulOutput.json(text);
                return text;
            } else {
                if (typeof text === "object")
                    return JSON.stringify(text);
                return text;
            }
        },
        add: function (text, type) {
<<<<<<< HEAD
            var stamp = +new Date;
            that.countNumber++;
            var out = text;
=======
            let stamp = +new Date();
            that.countNumber++;
            let out = text;
>>>>>>> 0.99.0
            if (that.config.format === "text") {
                out = that.textMaker.formater(out);
                out = that.textMaker.text(type, out);
                out = that.textMaker.title(type) + out;
                out = that.textMaker.icon(type) + out;
                out = that.textMaker.timeStamp(stamp) + out;
                out = that.textMaker.date(stamp) + out;
                out = that.textMaker.hostname(that.config.host) + out;
                out = that.textMaker.count() + out;
            } else if (that.config.format === "json") {
                text=that.textMaker.json(text,type,stamp);
            }
            that.textMaker.file(that.countNumber.toString(), that.config.host, stamp, type, text);
            that.cacheAdd(that.countNumber, that.config.host, text, type, stamp);
            return out;
        },
        file: function (count, host, stamp, type, text) {
            if (that.config.log.write === 1) {
                that.writeStream.write(that.textMaker.json(text,type,stamp) + "\n");
            }
        },
        re: function (count, hostname, text, type, stamp) {
            if (that.config.format === "text") {
                text = that.textMaker.formater(text);
                text = that.textMaker.text(type, text);
                text = that.textMaker.title(type) + text;
                text = that.textMaker.icon(type) + text;
                text = that.textMaker.timeStamp(stamp) + text;
                text = that.textMaker.date(stamp) + text;
                text = that.textMaker.hostname(hostname) + text;
                text = that.textMaker.count(count) + text;
            } else if (that.config.format === "json") {
                text=that.textMaker.json(text,type,stamp);
            }
            return text;
        },
        incomming: function (hostname, text, type, stamp) {
            if (typeof stamp === "undefined")
<<<<<<< HEAD
                var stamp = (+new Date);
=======
                stamp = (+new Date());
>>>>>>> 0.99.0
            that.countNumber++;
            if (that.config.format === "text") {
                text = that.textMaker.formater(text);
                text = that.textMaker.text(type, text);
                text = that.textMaker.title(type) + text;
                text = that.textMaker.icon(type) + text;
                text = that.textMaker.timeStamp(stamp) + text;
                text = that.textMaker.date(stamp) + text;
                text = that.textMaker.hostname(hostname) + text;
                text = that.textMaker.count() + text;
            } else if (that.config.format === "json") {
                text=that.textMaker.json(text,type,stamp);
            }
            that.textMaker.file(that.countNumber.toString(), hostname, stamp, type, text);
            that.cacheAdd(that.countNumber, hostname, text, type, stamp);
            return text;
        }

<<<<<<< HEAD
    }
    this.log = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "log"));
    }
    this.error = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "error", "error"));
    }
    this.info = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "info"));
    }
=======
    };
    this.log = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "log"));
    };
    this.error = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "error", "error"));
    };
    this.info = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "info"));
    };
>>>>>>> 0.99.0
    this.timeText = "";
    this.timeStamp = 0;
    this.time = function (incoming) {
        this.timeText = incoming.toString();
        this.timeStamp = +new Date();
<<<<<<< HEAD
    }
    this.timeEnd = function () {
        this.printLn(this.textMaker.add(this.timeText + " " + (((+new Date())) - this.timeStamp).toString() + "ms", "time"));
    }
    this.warn = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "warn"));
    }
=======
    };
    this.timeEnd = function () {
        this.printLn(this.textMaker.add(this.timeText + " " + (((+new Date())) - this.timeStamp).toString() + "ms", "time"));
    };
    this.warn = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "warn"));
    };
>>>>>>> 0.99.0
    this.table = function (tableData) {
        var u = {
            a1: "\u250C",
            c1: "\u252c",
            b1: "\u2500",
            a2: "\u2510",
            a3: "\u2514",
            a4: "\u2518",
            c2: "\u253c",
            c3: "\u2534",
            c4: "\u251c",
            c5: "\u2524",
            b2: "\u2502"
<<<<<<< HEAD
        }

        function calculateTable(tableData) {
            var sizeCol = 0,
                    sizeDat = [],
                    colNum = 0;
            for (var i = 0; tableData.length > i; i++)
                if (tableData[i].length > colNum)
                    colNum = tableData[i].length;

            for (var ic = 0; colNum > ic; ic++) {
=======
        };

        function calculateTable(tableData) {
            let sizeCol = 0,
                sizeDat = [],
                colNum = 0;
            for (let i = 0; tableData.length > i; i++)
                if (tableData[i].length > colNum)
                    colNum = tableData[i].length;

            for (let ic = 0; colNum > ic; ic++) {
>>>>>>> 0.99.0
                sizeDat[ic] = 0;
                for (var il = 0; tableData.length > il; il++) {
                    if (typeof tableData[il][ic] !== "undefined")
                        if (tableData[il][ic].length > sizeDat[ic])
                            sizeDat[ic] = tableData[il][ic].length;
                }
            }
            return  sizeDat;
        }
        function tableTop(tableSize) {
            var out = "";
            out += u.a1;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c1;
                for (var il = 0; tableSize[ic] > il; il++)
                    out += u.b1;
            }
            out += u.a2;
            return out;
        }
<<<<<<< HEAD

        function tableCenter(tableSize) {
            var out = "";
            out += u.c4;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c2;
                for (var il = 0; tableSize[ic] > il; il++)
=======
        function tableCenter(tableSize) {
            var out = "";
            out += u.c4;
            for (let ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c2;
                for (let il = 0; tableSize[ic] > il; il++)
>>>>>>> 0.99.0
                    out += u.b1;
            }
            out += u.c5;
            return out;
        }

        function tableButton(tableSize) {
            var out = "";
            out += u.a3;
<<<<<<< HEAD
            for (var ic = 0; tableSize.length > ic; ic++) {
=======
            for (let ic = 0; tableSize.length > ic; ic++) {
>>>>>>> 0.99.0
                if (ic > 0)
                    out += u.c3;
                for (var il = 0; tableSize[ic] > il; il++)
                    out += u.b1;
            }
            out += u.a4;
            return out;
        }

        function tableDataLine(tableData, tableSize) {
            var out = "",
<<<<<<< HEAD
                    before = 0;
            out += u.b2;
            for (var ic = 0; tableSize.length > ic; ic++) {
=======
                before = 0;
            out += u.b2;
            for (let ic = 0; tableSize.length > ic; ic++) {
>>>>>>> 0.99.0
                if (ic > 0)
                    out += u.b2;
                if (typeof tableData[ic] !== "undefined") {
                    before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                    for (var ila = 0; before > ila; ila++)
                        out += " ";
                    out += tableData[ic];
                    for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++)
                        out += " ";
                } else {
                    for (var il = 0; tableSize[ic] > il; il++)
                        out += " ";
                }
            }
            out += u.b2;
            return out;
        }

        function tableTitle(tableData, tableSize) {
            var out = "",
<<<<<<< HEAD
                    before = 0;
            out += u.b2;
            for (var ic = 0; tableSize.length > ic; ic++) {
=======
                before = 0;
            out += u.b2;
            for (let ic = 0; tableSize.length > ic; ic++) {
>>>>>>> 0.99.0
                if (ic > 0)
                    out += u.b2;
                if (typeof tableData[ic] !== "undefined") {
                    before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                    for (var ila = 0; before > ila; ila++)
                        out += " ";
<<<<<<< HEAD
                    out += '\u001b[1m' + tableData[ic] + '\u001b[0m';
=======
                    out += "\u001b[1m" + tableData[ic] + "\u001b[0m";
>>>>>>> 0.99.0
                    for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++) {
                        out += " ";
                    }
                } else {
                    for (var il = 0; tableSize[ic] > il; il++) {
                        out += " ";
                    }
                }
            }
            out += u.b2;
            return out;
        }


        var tableSize = calculateTable(tableData),
<<<<<<< HEAD
                out = "";
        out += tableTop(tableSize) + "\n";
        for (var i = 0; tableData.length > i; i++) {
=======
            out = "";
        out += tableTop(tableSize) + "\n";
        for (let i = 0; tableData.length > i; i++) {
>>>>>>> 0.99.0
            if (i > 0) {
                out += tableCenter(tableSize) + "\n";
                out += tableDataLine(tableData[i], tableSize) + "\n";
            } else {
                out += tableTitle(tableData[i], tableSize) + "\n";
            }
        }
        out += tableButton(tableSize) + "\n";
        process.stdout.write(out);
<<<<<<< HEAD
    }
    this.graph = function (barData, startNumber) {
        startNumber = startNumber || 0;
        var bar = [
            " ",
            "\u2581",
            "\u2583",
            "\u2584",
            "\u2585",
            "\u2586",
            "\u2587",
            "\u2588",
        ],
                barb = [
                    " ",
                    "\u2581",
                    "\u2582",
                    "\u2583",
                    "\u2584",
                    "\u2585",
                    "\u2586",
                    "\u2587",
                    "\u2588",
                ],
                graph = "",
                minNumber = 0,
                maxNumber = 0,
                endNumber = 0,
                startNumber = 0,
                diffNumber = 0,
                outData = [],
                perNumber = 0,
                minus = 0;
=======
    };
    this.graph = function (barData, startNumber) {
        startNumber = startNumber || 0;
        var bar = [
                " ",
                "\u2581",
                "\u2583",
                "\u2584",
                "\u2585",
                "\u2586",
                "\u2587",
                "\u2588",
            ],
            barb = [
                " ",
                "\u2581",
                "\u2582",
                "\u2583",
                "\u2584",
                "\u2585",
                "\u2586",
                "\u2587",
                "\u2588",
            ],
            graph = "",
            minNumber = 0,
            maxNumber = 0,
            endNumber = 0,
            diffNumber = 0,
            outData = [],
            perNumber = 0,
            minus = 0;
>>>>>>> 0.99.0

        if (barData.length === 0)
            return [];

        if (startNumber > barData.length) {
            startNumber = 0;
        }
        if (60 > barData.length - 1) {
            startNumber = 0;
        }
        if (60 > ((barData.length - 1) - startNumber)) {
            startNumber = ((barData.length - 1) - 60);
            endNumber = barData.length;
        } else {
            endNumber = startNumber + 60;
        }
        if (0 > startNumber) {
            startNumber = 0;
        }
        maxNumber = parseInt(barData[0]);
        minNumber = parseInt(barData[0]);
<<<<<<< HEAD
        for (var i = startNumber; barData.length > i; i++) {
=======
        for (let i = startNumber; barData.length > i; i++) {
>>>>>>> 0.99.0
            if (parseFloat(barData[i]) > maxNumber)
                maxNumber = parseInt(barData[i]);
            if (minNumber > parseFloat(barData[i]))
                minNumber = parseInt(barData[i]);
        }
        minNumber--;
        diffNumber = maxNumber - minNumber;
        perNumber = diffNumber / 100;
<<<<<<< HEAD
        for (var i = startNumber; barData.length > i; i++) {
            outData.push((parseInt(barData[i]) - minNumber) / perNumber);
        }
        graph = "\n\u25B2 \n";
        for (var i = 0; 14 > i; i++) {
            graph += "\u2502";
            for (var iL = 0; 60 > iL; iL++) {
                minus = parseInt(outData[iL]) - ((14 - i) * 8)
=======
        for (let i = startNumber; barData.length > i; i++) {
            outData.push((parseInt(barData[i]) - minNumber) / perNumber);
        }
        graph = "\n\u25B2 \n";
        for (let i = 0; 14 > i; i++) {
            graph += "\u2502";
            for (let iL = 0; 60 > iL; iL++) {
                minus = parseInt(outData[iL]) - ((14 - i) * 8);
>>>>>>> 0.99.0
                if (1 > minus)
                    minus = 0;
                if (minus > 7)
                    minus = 8;
                if (typeof outData[iL] === "undefined")
                    minus = 0;
                graph += barb[minus];

            }
            graph += "\n";
        }
        graph += "\u2514";
<<<<<<< HEAD
        for (var i = 0; 60 > i; i++) {
=======
        for (let i = 0; 60 > i; i++) {
>>>>>>> 0.99.0
            graph += "\u2500";
        }

        graph += "\u25B6" + "\n";
        process.stdout.write(graph);
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0

    this.exit = function () {
        that.makePrompt();
        that.config.mode = "yesNo";
        process.stdout.write("\n");
        this.print(" Are you sure you want to exit? (y\\n)");
        process.stdout.write("\n");
        that.yes = function () {
            process.exit();
        };
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.cursorPosition = 0;
    this.cursorText = "nodeConsole_> ";

    this.on = function (incomming) {
        return false;
<<<<<<< HEAD
    }
    this.line = {
        last: "",
        text: "",
    }
=======
    };
    this.line = {
        last: "",
        text: "",
    };
>>>>>>> 0.99.0
    this.cursor = {
        up: function (line) {
            process.stdout.write("\u001b[" + line + "A");
        },
        down: function (line) {
            process.stdout.write("\u001b[" + line + "B");
        },
        left: function (left) {
            process.stdout.write("\u001b[" + left + "D");
        },
        right: function (right) {
            process.stdout.write("\u001b[" + right + "C");
<<<<<<< HEAD
        }
    }
=======
        },
        hide: function (){
            process.stdout.write("\x1B[?25l");
        },
        show: function (){
            process.stdout.write("\x1B[?25h");
        }
    };
>>>>>>> 0.99.0
    this.newLine = function () {
        process.stdout.write("\n");
        that.cursorPosition = 0;
        that.line.text = "";
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.makePrompt = function () {
        if(that.config.slave===1) return false;
        process.stdout.write("\n");
        process.stdout.clearLine();
        process.stdout.write(that.command.watch());
        that.cursor.up(1);
        process.stdout.cursorTo(0);
        process.stdout.clearLine();
        if (this.config.mode === "hidden") {
            process.stdout.write(that.cursorText);
            return true;
        } else if (this.config.mode === "password") {
            process.stdout.write(that.cursorText + (function () {
                var out = "";
                for (var ri = 0; that.line.text.length > ri; ri++)
                    out += "*";
                return out;
            })());
        } else {
            process.stdout.write(that.cursorText + this.line.text);
        }
        process.stdout.cursorTo(this.cursorPosition + this.cursorText.length);
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.password = {
        on: function (password) {
            return false;
        },
        last: "none",
        inAction: 0,
        action: function (fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.password.inAction = action;
            that.password.last = that.config.limitation;
            that.config.limitation = "password";
        },
        doAction: function () {
<<<<<<< HEAD
            that.password.on(that.line.text)
=======
            that.password.on(that.line.text);
>>>>>>> 0.99.0
            that.password.inAction--;
            if (that.password.inAction === 0)
                that.config.limitation = that.password.last;
        }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.number = {
        on: function (number) {
            return false;
        },
        last: "none",
        inAction: 0,
        action: function (fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.number.inAction = action;
            that.number.last = that.config.limitation;
            that.config.limitation = "number";
        },
        doAction: function () {
<<<<<<< HEAD
            that.number.on(that.line.text)
=======
            that.number.on(that.line.text);
>>>>>>> 0.99.0
            that.number.inAction--;
            if (that.number.inAction === 0)
                that.config.limitation = that.number.last;
        }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.calculator = {
        on: function (calculator) {
            return false;
        },
        last: "none",
        inAction: 0,
        action: function (fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.calculator.inAction = action;
            that.calculator.last = that.config.limitation;
            that.calculator.limitation = "calculator";
        },
        doAction: function () {
<<<<<<< HEAD
            that.calcularor.on(that.line.text)
=======
            that.calcularor.on(that.line.text);
>>>>>>> 0.99.0
            that.calculator.inAction--;
            if (that.calculator.inAction === 0)
                that.config.limitation = that.calculator.last;
        }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.direct = {
        on: function (direct) {
            return false;
        },
        last: "none",
        inAction: 0,
        action: function (fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.direct.inAction = action;
            that.direct.last = that.config.limitation;
            that.direct.limitation = "direct";
        },
        doAction: function (key) {
<<<<<<< HEAD
            that.direct.on(key)
=======
            that.direct.on(key);
>>>>>>> 0.99.0
            that.direct.inAction--;
            if (that.direct.inAction === 0)
                that.config.limitation = that.direct.last;
        }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    this.command = {
        container: {
            helper: {},
            commands: {}
        },
        getCommands: function () {
            return JSON.stringify({
<<<<<<< HEAD
                 hostname: hostname,
                 timeStamp: stamp,
                 command:'getCommands',
                 response:that.command.container.commands,
                 type: system
=======
                //hostname: hostname,
                //timeStamp: stamp,
                command:"getCommands",
                response:that.command.container.commands,
                //type: system
>>>>>>> 0.99.0
            });
        },
        on: function (commandArray) {
            return false;
        },
        commander: function (command) {
            if (that.command.systemCommands(command)===true) return false;
            if(that.config.slave===1) return false;
            var commandArray = that.command.separator(command);
            for (var i = 0; commandArray.length > i; i++) {
                that.command.on(commandArray[i]);
                if (typeof that.command.container.commands[commandArray[i][0]] !== "undefined") {
                    that.printLn(that.command.container.commands[commandArray[i][0]](commandArray[i]));
                }
            }
        },
        separator: function (command) {
<<<<<<< HEAD
            command = command.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
=======
            command = command.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");
>>>>>>> 0.99.0
            var commands = [];
            var commandi = 0;
            var commandit = 0;
            var mod = 0;
            var modSelector = "";
            for (var i = 0; command.length > i; i++) {
                if (typeof commands[commandi] === "undefined")
                    commands[commandi] = [];
                if (typeof commands[commandi][commandit] === "undefined")
                    commands[commandi][commandit] = "";
                if (mod === 0) {
                    if (command.charAt(i) === ";") {
                        commandi++;
                        commandit = 0;
<<<<<<< HEAD
                    } else if (command.charAt(i) === '\\') {
=======
                    } else if (command.charAt(i) === "\\") {
>>>>>>> 0.99.0
                        mod = 2;
                    } else if (command.charAt(i) === "'") {
                        mod = 1;
                        modSelector = "'";
<<<<<<< HEAD
                    } else if (command.charAt(i) === '"') {
                        mod = 1;
                        modSelector = '"';
                    } else if ((command.charAt(i) === ' ') || (command.charAt(i) === "\t")) {
                        if ((i > 0) && (command.charAt(i - 1) !== " ") && (command.charAt(i - 1) !== "\t") && (command.charAt(i - 1) !== ";") && (command.charAt(i - 1) !== "'") && (command.charAt(i - 1) !== '"'))
=======
                    } else if (command.charAt(i) === "\"") {
                        mod = 1;
                        modSelector = "\"";
                    } else if ((command.charAt(i) === " ") || (command.charAt(i) === "\t")) {
                        if ((i > 0) && (command.charAt(i - 1) !== " ") && (command.charAt(i - 1) !== "\t") && (command.charAt(i - 1) !== ";") && (command.charAt(i - 1) !== "'") && (command.charAt(i - 1) !== "\""))
>>>>>>> 0.99.0
                            commandit++;
                    } else {
                        commands[commandi][commandit] += command.charAt(i);
                    }
                } else if (mod === 1) {
                    if (command.charAt(i) === modSelector) {
                        mod = 0;
                    } else {
                        commands[commandi][commandit] += command.charAt(i);
                    }
                } else if (mod === 2) {
                    commands[commandi][commandit] += command.charAt(i);
                    mod = 0;
                }
            }
            return commands;
        },
        looking: function (input) {
            var separated = that.command.separator(input),
<<<<<<< HEAD
                    tags = that.command.container.helper,
                    out = [];
=======
                tags = that.command.container.helper,
                out = [];
>>>>>>> 0.99.0
            separated = separated[separated.length - 1];
            if (typeof separated === "undefined")
                return false;
            for (var i = 0; separated.length > i; i++) {
                if (i !== separated.length - 1) {
                    if (typeof tags[separated[i]] === "undefined")
                        return false;
                    tags = tags[separated[i]];
                } else {
                    out = that.command.filter(tags, separated[i]);
                }
            }
            return out;
        },
        filter: function (tags, separated) {
<<<<<<< HEAD
            var out = [];
            if (separated === "") {
                for (var I in tags)
                    out.push(I);
            } else {
                for (var I in tags)
=======
            let out = [];
            if (separated === "") {
                for (let I in tags)
                    out.push(I);
            } else {
                for (let I in tags)
>>>>>>> 0.99.0
                    if (I.indexOf(separated) == 0)
                        out.push(I);
            }
            return out;
        },
        add: function (command, functio, help) {


<<<<<<< HEAD
            if (Object.prototype.toString.call(command) === '[object Array]') {
=======
            if (Object.prototype.toString.call(command) === "[object Array]") {
>>>>>>> 0.99.0
                for (var i = 0; command.length > i; i++)
                    that.command.addOne(command[i], functio, help);
            } else if (typeof command === "string") {
                that.command.addOne(command, functio, help);
            }
        },
        addOne: function (command, functio, help) {
            if (typeof that.command.container.commands[command] !== "undefined")
                return false;
            that.command.container.commands[command] = functio;
            if (typeof help === "undefined")
                help = {};
            that.command.container.helper[command] = help;
        },
        make: function (input) {
            var out = "",
<<<<<<< HEAD
                    elementsNumber = 0;
            for (var i in input) {
                if (elementsNumber < 6)
                    out += input[i] + ' ';
=======
                elementsNumber = 0;
            for (var i in input) {
                if (elementsNumber < 6)
                    out += input[i] + " ";
>>>>>>> 0.99.0
            }
            return out;
        },
        watch: function () {
            if (that.line.text === "")
                return "";
            return that.command.make(that.command.looking(that.line.text));
        },
        systemCommands : function(command){
<<<<<<< HEAD
            try{
                var dataJson = JSON.parse(command);
            }catch(e){
                return false;
            }
            if(typeof dataJson.command === "undefined") return false; 
            if (dataJson.command === "getCommands") that.printLn(JSON.stringify(that.command.getCommands()));
            if (dataJson.command === "goToSlave") that.config.slave=1;
        }
    }
=======
            let dataJson;
            try{
                dataJson = JSON.parse(command);
            }catch(e){
                return false;
            }
            command = dataJson.command;
            if(typeof command === "undefined")
                return false; 
            if (command === "getCommands")
                that.printLn(JSON.stringify(that.command.getCommands()));
            if (command === "goToSlave")
                that.config.slave=1;
        }
    };
>>>>>>> 0.99.0
    this.watch = function () {
        that.watchOn = 1;
        process.stdin.setRawMode(true);
        process.stdin.resume();
<<<<<<< HEAD
        process.stdin.setEncoding('utf8');
        that.makePrompt();
        process.stdin.on('data', function (key) {
            if (that.config.mode === "yesNo") {
                if ((key === 'y') || (key === 'j') || (key === 'i')) {
=======
        process.stdin.setEncoding("utf8");
        that.makePrompt();
        process.stdin.on("data", function (key) {
            if (that.config.mode === "yesNo") {
                if ((key === "y") || (key === "j") || (key === "i")) {
>>>>>>> 0.99.0
                    that.newLine();
                    that.yes();
                    that.yes = function () {};
                    that.config.mode = "normal";
                    that.makePrompt();
                } else {
                    that.newLine();
                    that.no();
                    that.no = function () {};
                    that.config.mode = "normal";
                    process.stdout.write("\n");
                    that.makePrompt();
                }
            } else {
<<<<<<< HEAD
                if (key === '\u0003') {
=======
                if (key === "\u0003") {
>>>>>>> 0.99.0
                    that.exit();
                } else if ((that.config.limitation === "direct")) {
                    if (that.direct.inAction === 0) {
                        that.on(key);
                    } else {
                        that.direct.doAction(key);
                    }
<<<<<<< HEAD
                } else if (key === '\u000D') {
=======
                } else if (key === "\u000D") {
>>>>>>> 0.99.0
                    if (that.line.text.length > 0) {
                        if (["q", "quit", "e", "exit"].indexOf(that.line.text) > -1) {
                            that.exit();
                        } else {
                            process.stdout.write("\n");
                            if ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number")) {
                                that.history.add(that.line.text);
                                that.on(that.line.text);
                                that.command.commander(that.line.text);
                            }
                            if ((that.config.limitation === "password") || (that.config.limitation === "calculator") || (that.config.limitation === "number")) {
                                if (that[that.config.limitation].inAction === 0) {
                                    that.on(that.line.text);
                                } else {
                                    that[that.config.limitation].doAction();
                                }
                            }
                            that.line.text = "";
                            that.line.last = "";
                            that.cursorPosition = 0;
                            that.makePrompt();
                        }
                    }
<<<<<<< HEAD
                } else if ((key === '\u0008') || (key.charCodeAt(0) === 127)) {
=======
                } else if ((key === "\u0008") || (key.charCodeAt(0) === 127)) {
>>>>>>> 0.99.0
                    if (that.cursorPosition > 0) {
                        that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition - 1)) + that.line.text.substr(parseInt(that.cursorPosition), that.line.text.length);
                        that.cursorPosition--;
                        that.makePrompt();
                    }
<<<<<<< HEAD
                } else if ((key === '\u001b[3~')) {
=======
                } else if ((key === "\u001b[3~")) {
>>>>>>> 0.99.0
                    if (that.line.text.length > that.cursorPosition) {
                        that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition)) + that.line.text.substr(parseInt(that.cursorPosition + 1), that.line.text.length);
                        that.makePrompt();
                    }
<<<<<<< HEAD
                } else if ((key === '\u001b[A') && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
=======
                } else if ((key === "\u001b[A") && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
>>>>>>> 0.99.0
                    if (that.history.position > 0) {
                        that.history.position--;
                        that.line.text = that.history.list[that.history.position];
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    }
<<<<<<< HEAD
                } else if ((key === '\u001b[B') && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
=======
                } else if ((key === "\u001b[B") && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
>>>>>>> 0.99.0
                    if (that.history.list.length > that.history.position + 1) {
                        that.history.position++;
                        that.line.text = that.history.list[that.history.position];
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    } else if (that.history.list.length === that.history.position + 1) {
                        that.history.position++;
                        that.line.text = that.line.last;
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    }

<<<<<<< HEAD
                } else if (((key === '\u001b[C') || (key == '\u001B\u005B\u0043')) && (that.config.limitation !== "password")) {
                    if (that.line.text.length > that.cursorPosition)
                        that.cursorPosition++;
                    that.makePrompt();
                } else if (((key === '\u001b[D') || (key == '\u001B\u005B\u0044')) && (that.config.limitation !== "password")) {
=======
                } else if (((key === "\u001b[C") || (key == "\u001B\u005B\u0043")) && (that.config.limitation !== "password")) {
                    if (that.line.text.length > that.cursorPosition)
                        that.cursorPosition++;
                    that.makePrompt();
                } else if (((key === "\u001b[D") || (key == "\u001B\u005B\u0044")) && (that.config.limitation !== "password")) {
>>>>>>> 0.99.0
                    if (that.cursorPosition > 0)
                        that.cursorPosition--;
                    that.makePrompt();
                } else {
                    if ((that.config.limitation === "none") ||
                            ((that.config.limitation === "safe") && (that.config.limits.safe.indexOf(key.toString()) > -1)) ||
                            ((that.config.limitation === "number") && (that.config.limits.number.indexOf(key.toString()) > -1)) ||
                            ((that.config.limitation === "calculator") && (that.config.limits.calculator.indexOf(key.toString()) > -1))
<<<<<<< HEAD
                            ) {
=======
                    ) {
>>>>>>> 0.99.0
                        if (that.line.text.length > 0) {
                            that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition)) + key.toString() + that.line.text.substr(parseInt(that.cursorPosition), that.line.text.length);
                        } else {
                            that.line.text = key.toString();
                        }
                        that.line.last = that.line.text;
                        that.cursorPosition++;
                        that.makePrompt();
                    }
                }
            }
        });
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 0.99.0
    var that = this;
    this.check();
};





