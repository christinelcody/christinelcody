var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.post('*', bodyParser.json(),
        bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(function(req, res, next) {
var requestInfo= {
  method: req.method,
  path: req.path,
  query: req.query,
  body: req.body,
  params: req.params
}

console.log(requestInfo);
next();
});

//require('./routes')(app);//

app.listen(port, () => {
           console.log("UP and running on port "+port)
           })