var express = require ( 'express' );
var app = express();
var path = require( 'path' );
var bodyparser = require("body-parser");
var translator = require('./lib/translator');
var port = process.env.PORT || 3000;

app.use( express.static( path.join(__dirname, 'app')) );
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.post( '/translate', function( req, res) {
  var input = req.body.text;
  var output = translator( input );
  res.json( { piglatin: output } );
});

app.listen(port, function() {
  console.log('app started on port ', port);
});
