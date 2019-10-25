
exports.graph = function (barData, startNumber) {
        startNumber = startNumber || 0;
        let bar = [
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
            graph = [],
            line = " \u25B2";
            minNumber = 0,
            maxNumber = 0,
            endNumber = 0,
            diffNumber = 0,
            outData = [],
            perNumber = 0,
            minus = 0;

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
        for (let i = startNumber; barData.length > i; i++) {
            if (parseFloat(barData[i]) > maxNumber)
                maxNumber = parseInt(barData[i]);
            if (minNumber > parseFloat(barData[i]))
                minNumber = parseInt(barData[i]);
        }
        minNumber--;
        diffNumber = maxNumber - minNumber;
        perNumber = diffNumber / 100;
        for (let i = startNumber; barData.length > i; i++) {
            outData.push((parseInt(barData[i]) - minNumber) / perNumber);
        }
        line = " \u25B2";
        for (let i = 0; 60 > i; i++) {
            line += " ";
        }
        graph.push(line+"  ");
        for (let i = 0; 14 > i; i++) {
            line = " \u2502";
            for (let iL = 0; 60 > iL; iL++) {
                minus = parseInt(outData[iL]) - ((14 - i) * 8);
                if (1 > minus)
                    minus = 0;
                if (minus > 7)
                    minus = 8;
                if (typeof outData[iL] === "undefined")
                    minus = 0;
                line += barb[minus];

            }
            graph.push(line+"  ");
        }
        line = " \u2514";
        for (let i = 0; 60 > i; i++) {
            line += "\u2500";
        }

        line += "\u25B6 ";
        graph.push(line)
        return graph;
    };
