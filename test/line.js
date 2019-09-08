
const lineBuffer = new (require("../lib/line.js")).buffer();


exports.lineTests=function(){
    global.nanoTest.add(
        "buffer create",
        {
            "function":lineBuffer.create,
            "options":[]
        },
        "==",
        0
    );
    global.nanoTest.add(
        "buffer setScreen",
        {
            "function":lineBuffer.setScreen,
            "options":[12,4]
        },
        "==",
       true 
    );
    global.nanoTest.add(
        "buffer add",
        {
            "function":lineBuffer.add,
            "options":[0, "Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n "]
        },
        "==",
        true
    );
    global.nanoTest.add(
        "buffer getAll",
        {
            "function":lineBuffer.getAll,
            "options":[0]
        },
        "==",
        "Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n "
    );
    global.nanoTest.add(
        "buffer getScreen",
        {
            "function":lineBuffer.getScreen,
            "options":[0]
        },
        "j==",
        [
            "Lorem ipsum",
            "dolor sit",
            "amet,  ",
            "consectetur"
        ]
    );
    global.nanoTest.add(
        "buffer add",
        {
            "function":lineBuffer.add,
            "options":[0, "Sed ut erat nunc. Aliquam erat volutpat. Mauris sed neque egestas, laoreet ante nec, consectetur leo. Vestibulum vel feugiat nisl. Pellentesque quis gravida neque. Sed id diam eget metus semper euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vehicula congue tortor nec pellentesque. Nam auctor eleifend lacus, sit amet bibendum odio ornare tristique. \n"]
        },
        "==",
        true
    );
    global.nanoTest.add(
        "buffer getAll",
        {
            "function":lineBuffer.getAll,
            "options":[0]
        },
        "==",
        "Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. \n "+
        "Sed ut erat nunc. Aliquam erat volutpat. Mauris sed neque egestas, "+
        "laoreet ante nec, consectetur leo. Vestibulum vel feugiat nisl. "+
        "Pellentesque quis gravida neque. Sed id diam eget metus semper "+
        "euismod. Orci varius natoque penatibus et magnis dis parturient "+
        "montes, nascetur ridiculus mus. Suspendisse vehicula congue tortor "+
        "nec pellentesque. Nam auctor eleifend lacus, sit amet bibendum odio "+
        "ornare tristique. \n"
    );
    global.nanoTest.add(
        "buffer add",
        {
            "function":lineBuffer.clear,
            "options":[0]
        },
        "==",
        true
    );
    global.nanoTest.add(
        "buffer getAll",
        {
            "function":lineBuffer.getAll,
            "options":[0]
        },
        "==",
        ""
    );
    global.nanoTest.add(
        "buffer add",
        {
            "function":lineBuffer.del,
            "options":[0]
        },
        "==",
        true
    );
    global.nanoTest.add(
        "buffer getAll",
        {
            "function":lineBuffer.getAll,
            "options":[0]
        },
        "==",
        false
    );
};




