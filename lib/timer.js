

exports.timer = function () {
    this.text = "";
    this.stamp = 0;
    this.start = function (incoming) {
        this.text = incoming.toString();
        this.stamp = +new Date();
    };
    this.end = function () {
        return (
            this.textMaker.add(
                this.text + 
                " " + 
                (((+new Date())) - this.stamp).toString() + "ms", "time")
        );
    };
}

