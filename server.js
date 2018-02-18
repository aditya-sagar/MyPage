var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

app = express();


// Templates
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', function(req, res){
	res.render('home');
});

app.listen(3000, function(){
	console.log("Node server started on port 3000");
});