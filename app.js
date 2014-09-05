var express = require('express');
var morgan = require('morgan');
var os=require('os');

var app = express();
app.use(morgan('dev'));

var interfaces = os.networkInterfaces();
var addresses = [];
for (k in interfaces) {
    for (k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family == 'IPv4' && !address.internal) {
            addresses.push(address.address)
        }
    }
}

app.get('/', function(req, res){
        var date = new Date();
        res.send(date + ': Hello World from ' + addresses[0]);
});

app.listen(process.env.PORT || 3000);
console.log('Local address: '+addresses[0]);
console.log('Server listening on port: ' + (process.env.PORT || 3000));