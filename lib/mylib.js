// mylib.js
"use strict";

   
    var MyLib = function () {};
    
    MyLib.prototype.log = function () {
        console.log('myLib!');
    };
        
    
module.exports = new MyLib();
