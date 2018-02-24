//Declarations
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var join = require('path').join;
var port = 3000;
var JSON_DIR = join(__dirname, '/json/');

//App level Configurations
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,X-CSRF-TOKEN');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

/**
 * REST API calls
 */
app.get('/', function(request, response) {
  response.send("Welcome to Scrum-conference app REST API");
});

app.get('/testjson',function(req,res){
	var data = fs.readFileSync(JSON_DIR+'testjson.json','utf-8');
	res.json(JSON.parse(data));
})

app.listen(port,function(){
	console.log("App started at port number "+port);
})