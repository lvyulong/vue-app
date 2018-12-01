var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Api = require('./routes/apis/api');
var test = require('./routes/test');

app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api',Api);
app.use('/test',test);
app.use('/app',express.static('static'));

var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log(`Server is running at port:${port}`);
});
