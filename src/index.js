var abc = require("http")

abc.createServer(function(req,res){
    res.write("hello node js");
    res.end();
    console.log("dobi mansi");
}).listen(4040);