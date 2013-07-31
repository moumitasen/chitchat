var http = require('http'),
    express = require ('express');

app = express();
app.set('views', __dirname + '/');
app.set('view engine', 'jade');
app.engine('.html', require('jade').__express);

app.get('/', function(req, res){res.render('index')});
//app.get('/', function(req, res){res.send('hello')});

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sever is listening to port' + app.get('port'));
});	


