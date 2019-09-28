

const stringer = new (require("../lib/string.js")).stringer();


exports.stringerTests=function(){
    global.nanoTest.add(
        "string formater simple size",
        {
            "function":stringer.out,
            "options":[
                "tt",
                "10"
            ]
        },
        "==",
        "    tt    "
    );
    global.nanoTest.add(
        "string formater over size",
        {
            "function":stringer.out,
            "options":[
                "tttttttttttttttt",
                "10"
            ]
        },
        "==",
        "ttttttt..."
    );
    global.nanoTest.add(
        "string formater 2 size center",
        {
            "function":stringer.out,
            "options":[
                "tt",
                "10",
                "|"
            ]
        },
        "==",
        "    tt    "
    );
    global.nanoTest.add(
        "string formater 2 size left",
        {
            "function":stringer.out,
            "options":[
                "tt",
                "10",
                "<"
            ]
        },
        "==",
        "tt        "
    );
    global.nanoTest.add(
        "string formater 2 size right",
        {
            "function":stringer.out,
            "options":[
                "tt",
                "10",
                ">"
            ]
        },
        "==",
        "        tt"
    );
}
