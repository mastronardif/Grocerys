var express = require("express");
var bodyp   = require('body-parser');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var pingController    = require('./controllers/ping-controller');

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyp.urlencoded({ extended: false }));
app.use(bodyp.json());

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/taxi",function(req,res){
  res.sendFile(path + "taxi.html");
});
router.get("/grocery",function(req,res){
  res.sendFile(path + "grocery.html");
});

router.get("/doggy",function(req,res){
  res.sendFile(path + "doggy.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

// for testing.!!!
//router.all ('/ping', bodyp.json(), pingController.ping);
//router.all ('/ping', bodyp.urlencoded(), pingController.ping);
router.all ('/ping', pingController.ping);
//app.all ('/ping',stormpath.loginRequired, pingController.ping);console.log(req.query);

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'), function() {
  console.log("Live at Port ", app.get('port'));
});