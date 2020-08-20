
const nanoTest = new (require('nano-test')).test();
const table = (require("./lib/table.js")).table;

let input = [
    ["testcolumA", "testcolumB", "testcolumC"], 
    ["A0", "B0", "C0"], 
    ["A1", "B1", "C1"], 
    ["A2", "B2", "C2"]
];


let output = [
    "┌──────────┬──────────┬──────────┐",
    "│\u001b[1mtestcolumA\u001b[0m│\u001b[1mtestcolumB\u001b[0m│\u001b[1mtestcolumC\u001b[0m│",
    "├──────────┼──────────┼──────────┤",
    "│    A0    │    B0    │    C0    │",
    "├──────────┼──────────┼──────────┤",
    "│    A1    │    B1    │    C1    │",
    "├──────────┼──────────┼──────────┤",
    "│    A2    │    B2    │    C2    │",
    "└──────────┴──────────┴──────────┘"
];

//for (let i of table(input))
//    console.log(i);


nanoTest.add(
    'table Test',
    {
        "function":table,
        "options":[
            input
        ]
    },
    "j==",
    output
);

   nanoTest.run();

