var express = require("express");
var bodyp   = require('body-parser');
var app = express();
var router = express.Router();
var xFrameOptions = require('x-frame-options');
var frameguard = require('frameguard');
var formidable = require('formidable');
var fs = require('fs');
var gpath = require('path');


var path = __dirname + '/views/';
var pathUploads = __dirname + '/uploads/';
global.config = require('config');

var replyController = require('./controllers/reply-controller');
var pingController = require('./controllers/ping-controller');
var townController = require('./controllers/town-controller');

//angular-material-course
var lessonController = require('./controllers/angular-material-course/search-lessons.route');
var courseController = require('./controllers/angular-material-course/get-courses.route');

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

app.use(allowCrossDomain); 

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
app.use(express.static(__dirname + '/uploads'));
// router.use(function (req,res,next) {
  // console.log("\t /" + req.method);
  // next();
// });

// router.get("/", function(req,res){
	// console.log(path + "doggy22.html");
	// //res.send('asdf ffffff');
	// //res.sendFile(path + "doggy22.html");
	// res.sendFile(pathUploads + "indexdoggy.html");
// });

// fm begin
// Upload route.
app.post('/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        var old_path = files.files.path,
            file_size = files.files.size,
            file_ext = files.files.name.split('.').pop(),
            index = old_path.lastIndexOf('\\') + 1,
            //file_name = old_path.substr(index),
            file_name = files.files.name,
            //new_path = gpath.join(process.env.PWD, '/uploads/', file_name + '.' + file_ext);
            new_path = gpath.join(process.env.PWD, '/uploads/', file_name);

console.log("\t *** FM begin files = \n", files, "\nEND");

console.log("FM begin fields = \n", fields);
//console.log(req.param('days'));

//console.log("FM begin files = \n", files);
console.log("FM begin new_path = \n", new_path);

        fs.readFile(old_path, function(err, data) {
            //fs.writeFile(new_path, data, function(err) {
            {	
            	//console.log('data = \n', data);

                //fs.unlink(old_path, function(err) {
                    if (err) {
                        res.status(500);
                        res.json({'err 500 success': false});
                    } else {
                        //res.status(200);
                        //res.json({'200 success': true});

                       	// mail db.
                       	req.fields = fields;
                       	req.data = data;
                        replyController.mailStore(req, res);
                    }
                //});
            }
            //});
        });
    });
});
// fm end


// router.get("/town/mylist/:id",function(req,res){
// 	 var id = req.params.id;
// 	console.log(`/town/mylist/ id(${id})`);

// 	if ('cors' == 'cors') {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');  
//         res.header("Access-Control-Allow-Headers", "Content-Type");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     }
   
// 	// select by id
//   res.sendFile(path + "metuchen.json");
// });

router.get("/mylist",function(req,res){
  res.sendFile(path + "thelist.html");
});

router.get("/taxi",function(req,res){
  res.sendFile(path + "taxi.html");
});
router.get("/grocery",function(req,res){
  res.sendFile(path + "grocery.html");
});

router.get("/doggy",function(req,res){
	//res.send ("asdf afff");
  res.sendFile(path + "doggy22.html");
});
router.get("/doggy00",function(req,res){
	//res.send("doggy.html");
  res.sendFile(path + "doggy.html");
});

router.get("/sb",function(req,res){
  res.sendFile(pathUploads + "indexdoggy.html");
});

router.get("/mycors",function(req,res){
    res.sendFile(path + "mycors.html");
});

router.get("/mycanvas",function(req,res){
    res.sendFile(path + "mycanvas.html");
});

router.get("/upload",function(req,res){
    res.sendFile(path + "upload.html");
});
router.get("/camera",function(req,res){
    res.sendFile(path + "camera.html");
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
//router.get ('/town/mylist/:id', townController.townlist);
router.get ('/town/mylist/:id', function(req,res){
  townController.townlist(path, req, res);
});

// from angular coruse begin
router.get('/town/api/courses',     courseController.getAllCourses);
router.get('/town/api/courses/:id', courseController.getCourseById);
router.get('/town/api/lessons',     lessonController.searchLessons);

router.all ('/pingcors', pingController.pingcors);
router.all ('/ping', pingController.ping);
router.all ('/mysubmit', replyController.reply);
router.all ('/mailstore/mysubmit', replyController.mailStore);
router.all ('/tellafriend/mysubmit', replyController.replyTellAFriend);


//app.route('/api/courses').get(getAllCourses);
//app.route('/api/courses/:id').get(getCourseById);
//app.route('/api/lessons').get(searchLessons);
// from angular coruse end

router.get("/tellafriend",function(req,res){
  res.sendFile(path + "tellafriend.html");
});


router.get ('/pingjp', pingController.pingjp);
//app.all ('/ping',stormpath.loginRequired, pingController.ping);console.log(req.query);

app.use("/",router);

app.use("*",function(req,res){
   res.sendFile(path + "404.html");
});

app.listen(app.get('port'), function() {
  console.log("Live at Port ", app.get('port'));
});