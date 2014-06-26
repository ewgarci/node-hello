var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));


app.get('/', function(req, res){
      res.send('Hello World');
});

app.listen(3000);
console.log('Server listening on port: 3000');
