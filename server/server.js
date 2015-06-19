var fs = require('fs')
	,express = require('express')
	,bodyParser = require('body-parser');
var IR = require('../lib/interfaceregistry')
	,interfaceregistry = new IR();
	
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/register.html', function(req, res) {
    fs.readFile('../public/register.html', function(err, page) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page);
        res.end();
    });
});
app.get('/registryschema.html', function(req, res) {
    fs.readFile('../schema/registryschema.html', function(err, page) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page);
        res.end();
    });
});

app.post('/register', function(req, res) {
  //res.send('You sent the URL "' + req.body.schema + '".');
  interfaceregistry.register(req.body.schema, function (response){
  	if(response) {res.send('Your component "' + req.body.schema + '" was registered.');}
  	else  {res.send('There was a problem with the component registration.');}
  });
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080');
})


