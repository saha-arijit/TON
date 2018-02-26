var  express = require ('express');
var path = require('path');
var conf = require ('./conf.js');
var app = express();
var bodyParser = require('body-parser');
var opn =require('opn');
var fileUpload  =    require('express-fileupload');
var     fs =require('fs');
var shell = require('shelljs');
var exec  =    require('child_process').exec;


var port = Number(conf.web.port);
app.listen (port,function () {
    console.log('server running on http://localhost:'+port)

});
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// serving static files using express

app.use(express.static(__dirname + '/www'));
console.log(__dirname,"__dirname");


// Setting here what we want to show from www folder
// app.set('views',__dirname + '/www/app/views');
app.set('www',__dirname + '/www/app/views');

// setting the view engine to html


app.engine('html',require('ejs').renderFile);

app.set('viewEngine','html');


var WebRoutes = require("./routes/ui-routes.js");
var webRoutes = new WebRoutes(app,opn,fileUpload, shell,exec);
webRoutes.init();
