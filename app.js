var express = require('express'),
    app = express(),
     port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res, next){
    res.send('sanothei' + process.env.foo);
});

app.get('/books', function(req, res, next){
    res.send('da books');
});

app.listen(port, function(err){
    console.log('listening on port' + port);
    
});

