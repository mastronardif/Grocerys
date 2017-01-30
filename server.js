var express = require("express");
var bodyp   = require('body-parser');
var app = express();
var router = express.Router();
var xFrameOptions = require('x-frame-options');
var frameguard = require('frameguard');

var path = __dirname + '/views/';
global.config = require('config');
var replyController = require('./controllers/reply-controller');
var pingController = require('./controllers/ping-controller');

console.log(__dirname);

//app.use(xFrameOptions());
// Allow from a specific host:
// app.use(frameguard({
  // action: 'allow-from',
  // domain: 'http://localhost'
// }))

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost");
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
}

//app.use(allowCrossDomain); 

// app.all('*', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');  
    // res.header("Access-Control-Allow-Headers", "Content-Type");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
  // });


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

router.get("/mycors",function(req,res){
    res.sendFile(path + "mycors.html");
});

router.get("/gmail",function(req,res){
    //res.get('X-Frame-Options') // === 'Deny' 
    //middleware = xFrameOptions(headerValue = 'Allow')
    res.sendFile(path + "gmail.html");
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
router.all ('/pingcors', pingController.pingcors);
router.all ('/ping', pingController.ping);
router.get ('/pingjp', pingController.pingjp);
//app.all ('/ping',stormpath.loginRequired, pingController.ping);console.log(req.query);

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'), function() {
  console.log("Live at Port ", app.get('port'));
});