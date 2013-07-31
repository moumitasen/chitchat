var http = require('http'),
    express = require ('express'),
    path = require('path');

app = express();
app.set('views', __dirname + '/');
app.set('view engine', 'jade');
app.engine('.html', require('jade').__express);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){res.render('index')});

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sever is listening to port' + app.get('port'));
});	


