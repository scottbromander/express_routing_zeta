var express = require('express');
var app = express();
var path = require('path');
var nameList = require('./modules/nameList');

app.set('port', (process.env.PORT || 5000));

app.get("/kittyFooFoo", function(request, response){
    response.send(nameList);
});

app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";

    response.sendFile(path.join(__dirname, "./public/", file));
    //"/public/index.html"
});

app.listen(app.get("port"));