
exports.firstTest=function(){
    global.nanoTest.add(
       "hello test",
       {
           "function":(a)=>{return a;},
           "options":['1']
       },
       "==",
       '1'
    );
};

