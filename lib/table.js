exports.table = function (tableDataJson) {
    let u = {
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
    };
    let calculateTable = function(tableData) {
        let sizeCol = 0,
            sizeDat = [],
            colNum = 0;
        for (let i = 0; tableData.length > i; i++)
            if (tableData[i].length > colNum)
                colNum = tableData[i].length;

        for (let ic = 0; colNum > ic; ic++) {
            sizeDat[ic] = 0;
            for (var il = 0; tableData.length > il; il++) {
                if (typeof tableData[il][ic] !== "undefined")
                    if (tableData[il][ic].length > sizeDat[ic])
                        sizeDat[ic] = tableData[il][ic].length;
            }
        }
        return  sizeDat;
    }
    let tableTop = function (tableSize) {
        let out = "";
        out += u.a1;
        for (let ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c1;
            for (let il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.a2;
        return out;
    }
    let tableCenter = function (tableSize) {
        var out = "";
        out += u.c4;
        for (let ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c2;
            for (let il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.c5;
        return out;
    }

    let tableButton = function(tableSize) {
        var out = "";
        out += u.a3;
        for (let ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c3;
            for (let il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.a4;
        return out;
    }

    let tableDataLine = function (tableData, tableSize) {
        let out = "",
            BEfore = 0;
        out += u.b2;
        for (let ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.b2;
            if (typeof tableData[ic] !== "undefined") {
                before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                for (let ila = 0; before > ila; ila++)
                    out += " ";
                out += tableData[ic];
                for (let ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++)
                    out += " ";
            } else {
                for (var il = 0; tableSize[ic] > il; il++)
                    out += " ";
            }
        }
        out += u.b2;
        return out;
    }

    let  tableTitle = function (tableData, tableSize) {
        let out = "",
            before = 0;
        out += u.b2;
        for (let ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.b2;
            if (typeof tableData[ic] !== "undefined") {
                before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                for (let ila = 0; before > ila; ila++)
                    out += " ";
                out += "\u001b[1m" + tableData[ic] + "\u001b[0m";
                for (let ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++) {
                    out += " ";
                }
            } else {
                for (let il = 0; tableSize[ic] > il; il++) {
                    out += " ";
                }
            }
        }
        out += u.b2;
        return out;
    }

    let tableSize = calculateTable(tableDataJson),
        out = [];
    out.push(tableTop(tableSize));
    for (let i = 0; tableDataJson.length > i; i++) {
        if (i > 0) {
            out.push(tableCenter(tableSize));
            out.push(tableDataLine(tableDataJson[i], tableSize));
        } else {
            out.push(tableTitle(tableDataJson[i], tableSize));
        }
    }
    out.push(tableButton(tableSize));
    return out;
};


