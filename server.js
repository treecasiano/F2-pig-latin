var express = require ( 'express' );
var app = express();
var path = require( 'path' );
var bodyparser = require("body-parser");
var translator = require('./lib/translator');
var farfallinofier = require ('./lib/farfallino');
var port = process.env.PORT || 3000;

app.use( express.static( path.join(__dirname, 'app')) );
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.post( '/translate', function( req, res) {
  var input = req.body.text;
  var output = translator( input );
  res.json( { piglatin: output } );
});

app.post( '/farfallino', function( req, res) {
  var input = req.body.text;
  var output = farfallinofier( input );
  res.json( { farfallino: output } );
});

app.listen(port, function() {
  console.log('app started on port ', port);
});
