var express = require('express');
var morgan = require('morgan');
var os=require('os');

var app = express();
app.use(morgan('dev'));

var addr = "None";
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('Local address: '+add);
    addr = add;
});

app.get('/', function(req, res){
      res.send('Hello World from : ' + addr);
});

app.listen(process.env.PORT || 3000);
console.log('Server listening on port: ' + (process.env.PORT || 3000));

