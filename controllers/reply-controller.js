'use strict';
//var util = require('util');
//var session = require('client-sessions');
//var assert = require('assert');
var json2html = require('node-json2html');

var mg = global.config.get('Mg');
var admin = global.config.get('Admin');

var mailgun = require('mailgun-js')({apiKey: mg.api_key, domain: mg.domain});

module.exports.reply = function (req, res) {
    console.log("ping-controller.ping");
    console.log(req.params);
    //console.log(req);
    var data =  req.body;
    console.log(JSON.stringify(req.body) );
    
    
    //var transform = {"<>":"div","html":"${name} likes ${email}"};
    var transform = [{"<>":"p","html":[
    {"<>":"span","html":"	What you said: <br/> <br/>"},
    {"<>":"span","html":"	Name:  ${name}"},
    {"<>":"br","html":""},
    {"<>":"span","html":"Email: ${email}"},
    {"<>":"br","html":""},
    {"<>":"span","html":"Note: ${notes}"}
  ]}
   ,{"<>":"ul","html":[
      {"<>":"li","html":"${days}"}
    ]},
    
   {"<>":"span","html":" <br/> <br/>Someone will get back to you."},
   {"<>":"span","html":" <br/> <br/>Sincerely, <br/><br/> <hr/>Westfield Dog walkers"},
   {"<>":"span","html":" <br/> <br/>FM"},
        
  {"<>":"p","html":""}
]
  ;
    
    var html = json2html.transform(data,transform);
    console.log("html = ", html );
    
    // send email to _________ Fm, and User.
    // begin mailgun

    var to = admin.toAdmin;
var data = {
  from: admin.fromAdmin,
  to: to, //to: 'serobnic@mail.ru',
  subject: admin.subject,
  html: html //'Testing some Mailgun awesomness!'
  //text: html //'Testing some Mailgun awesomness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if (error) {
        console.log('error = ', error);
    }
    else {
        console.log(body);
    }
});
    // end mailgun
   
    var results = {'query': req.query, 'body':req.body};
    //res.json(results);
    res.send(html);
    //res.send('echo '+ JSON.stringify(req.query) + JSON.stringify(req.body));
};

//print out error messages
function printError(error){
  console.error(error.message);
};
