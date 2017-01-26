'use strict';
//var util = require('util');
//var session = require('client-sessions');
//var assert = require('assert');
var json2html = require('node-json2html');

module.exports.ping = function (req, res) {
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
   {"<>":"span","html":" <br/> <br/>Sincerely, "},
   {"<>":"span","html":" <br/> <br/>FM"},
        
  {"<>":"p","html":""}
]
  ;
    
    var html = json2html.transform(data,transform);
    console.log("html = ", html );
    
    
    var results = {'query': req.query, 'body':req.body};
    //res.json(results);
    res.send(html);
    //res.send('echo '+ JSON.stringify(req.query) + JSON.stringify(req.body));
};

//print out error messages
function printError(error){
  console.error(error.message);
};
