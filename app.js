
/**
 * Module dependencies.
 */

var express = require('express')
  , notes = require('./routes/notes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Handle the root path 
app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
});

// Notes Model API Routes
app.get ('/api/v1/notes/search', notes.search);
app.post('/api/v1/notes/new'   , notes.saveNew);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
