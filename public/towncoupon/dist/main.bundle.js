webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"color: gray\">\r\n<app-charttwo>\r\n</app-charttwo>\r\n<md-toolbar style=\"font-size: 40%\" color=\"primary\">\r\n    <span>v0.12</span>       \r\n    <md-icon class=\"example-icon\">favorite</md-icon>\r\n    <button id=\"admin\" name=\"admin\" md-raised-button (click)=\"adminTown($event)\">Admin</button>\r\n    <span class=\"example-spacer\"></span>\r\n    <button md-raised-button color=\"accent\">Add a Town</button>\r\n    <md-icon class=\"example-icon\">delete</md-icon>        \r\n</md-toolbar>\r\n         \r\n\r\n<span style=\"font-size: 40%\">&copy; 2017 Gracy girl enterprises</span> \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        console.log("app.components.ts, constructor, " + router);
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app.component:ngOnInit');
        console.log('this.router[0]', this.router);
        // this.router.routeReuseStrategy.shouldReuseRoute = function() {
        //   return false;
        // };
        // ( =>
        //   {
        //     console.log(`what the fuck is bob (${bob})`);
        //     return false;
        //   }
        // );
    };
    AppComponent.prototype.adminTown = function (event) {
        var elementId = event.currentTarget.id;
        //alert(`Admin(${elementId}) Town coming to a theater near you.`);
        this.getCoupon('Add an establishment. ');
    };
    AppComponent.prototype.getCoupon = function (id) {
        id = id + Date.now();
        console.log(':getCoupon', id);
        //let id = event.name;
        var link = ['/detail', id];
        //this.router.navigate(link);
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
        //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charttwo_charttwo_component__ = __webpack_require__("../../../../../src/app/charttwo/charttwo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__towndetail_towndetail_component__ = __webpack_require__("../../../../../src/app/towndetail/towndetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__townroutes_townroutes_routing_module__ = __webpack_require__("../../../../../src/app/townroutes/townroutes-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__charttwo_charttwo_component__["a" /* CharttwoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__towndetail_towndetail_component__["a" /* TowndetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_13__townroutes_townroutes_routing_module__["a" /* TownroutesRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__["SimpleTimer"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/charttwo/charttwo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charttwo/charttwo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:600px; font-size: 50%\"> \n<ngx-charts-tree-map\n[view]=\"view\"\n[scheme]=\"colorScheme\"\n[results]=\"single\"\n(select)=\"onSelect($event)\">\n</ngx-charts-tree-map>\n</div>\n<div>\n<!--\n<hr/>\n<a href=\"https://swimlane.gitbooks.io/ngx-charts/content/charts/tree-map.html\">\n  bobo\n</a>\n<a href=\"https://swimlane.github.io/ngx-charts/#/ngx-charts/tree-map\">\n  bobo\n</a>\n<br/>\n<a  [routerLink]=\"['/detail', 321]\">rlink</a>\n<nav>\n  <a routerLink=\"/detail\">detail</a>\n  <a routerLink=\"/detail/z444\">get coupon</a>    \n</nav>\n-->\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/charttwo/charttwo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharttwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__westfieldfood1__ = __webpack_require__("../../../../../src/app/charttwo/westfieldfood1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__westfieldfood__ = __webpack_require__("../../../../../src/app/charttwo/westfieldfood.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_town_service__ = __webpack_require__("../../../../../src/app/services/town.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_color_helper__ = __webpack_require__("../../../../../src/common/color.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //'./data';





var CharttwoComponent = (function () {
    function CharttwoComponent(townService, route, 
        //private location: Location,
        router, el) {
        this.townService = townService;
        this.route = route;
        this.router = router;
        this.count = 123;
        // options
        //showXAxis = true;
        //showYAxis = true;
        this.gradient = false;
        //showLegend = true;
        //showXAxisLabel = true;
        //xAxisLabel = 'Country';
        //showYAxisLabel = true;
        //yAxisLabel = 'Population';
        this.colorScheme = {
            //domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
            domain: [
                '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
            ]
        };
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__westfieldfood1__["a" /* single */] });
        Object.assign(this, { single2: __WEBPACK_IMPORTED_MODULE_2__westfieldfood__["a" /* single2 */] });
    }
    CharttwoComponent.prototype.setResturaunts = function (town, dest) {
        var _this = this;
        console.log("setResturaunts(" + town + ")");
        this.townService.searchTown(town).subscribe(function (res) {
            console.log("Resturaunts= ", res);
            //this.single = res; 
            _this.resturaunts = res;
        }, function (err) {
            alert("FM err = " + err);
            console.log(err);
        });
    };
    CharttwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.townService.searchTown('the towns').subscribe(function (res) {
            _this.single = res;
            _this.towns = res;
            _this.towns = _this.towns.map(function (item) { return item.name; });
        }, function (err) {
            alert("FM err = " + err);
            console.log(err);
        });
        var delta = 6000;
        this.timer = setInterval(function () {
            _this.onSelect(null);
            //console.log(`tick tock every ${delta}`);
        }, delta);
        // this.timer = setTimeout(() => 
        // {
        //   alert('this.onSelect(null)')
        //   console.log('ssssssssssss');
        // }, 500);
        //console.log('ngOnInit() ngOnInit() ngOnInit()');
    };
    // addToTowns(town) {
    //   console.log(`addToTowns(${town})`);
    // }
    CharttwoComponent.prototype.onSelect = function (event) {
        var _this = this;
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__westfieldfood1__["a" /* single */] });
        //this.single = this.single2;
        //Object.assign(this, {single2});
        //console.log(event, this.count);
        if (event != null) {
            if (this.towns.findIndex(function (item) { return (item == event.name); }) != -1) {
                this.setResturaunts(event.name, this.single);
            }
            this.getCoupon(event);
            return;
            //this.townService.getCoupon(event);
        }
        if (this.count % 2) {
            this.single[0].value = this.single[0].value + 1;
            var name = this.single[1].name;
            this.setColors('fire');
        }
        else {
            var wasCount_1 = this.count;
            this.townService.searchGit('mastronardi').subscribe(function (res) {
                //console.log("\t", event, this.count);
                _this.setColors('vivid');
                _this.single = _this.single2;
                //console.log("2 this.single= ", this.single);
                var name = _this.single[0].name + " ZZ";
                _this.single[0].value = _this.single[0].value + wasCount_1;
            }, function (err) {
                alert("FM err = " + err);
                console.log(err);
            });
        }
        this.count++;
    };
    CharttwoComponent.prototype.getCoupon = function (event) {
        console.log('getCoupon', event);
        this.setColors('night');
        var id = event.name;
        var link = ['/detail', id];
        //this.router.navigate(link);
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
        //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
    };
    CharttwoComponent.prototype.setColors = function (name) {
        this.colors = new __WEBPACK_IMPORTED_MODULE_4__common_color_helper__["a" /* ColorHelper */](name, null, null); // (scheme, 'ordinal', [], null);
        this.colorScheme = { domain: this.colors.colorDomain }; //scheme; //this.colors.colorDomain; // // scheme; //this.colors;
    };
    return CharttwoComponent;
}());
CharttwoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charttwo',
        template: __webpack_require__("../../../../../src/app/charttwo/charttwo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charttwo/charttwo.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[view]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], CharttwoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=charttwo.component.js.map

/***/ }),

/***/ "../../../../../src/app/charttwo/westfieldfood.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return single2; });
var single2 = [
    {
        "name": "*Advertise Here 908-858-0954",
        "value": 909858
    },
    {
        "name": "Ferraro's",
        "value": 894000
    },
    {
        "name": "Starbucks",
        "value": 740001
    },
    {
        "name": "Trader Joes",
        "value": 620002
    },
    {
        "name": "Fujiyama Mama",
        "value": 500001
    },
    {
        "name": "QDOBA",
        "value": 720000
    },
    {
        "name": "Theresa's",
        "value": 500000
    },
    {
        "name": "Cosimo's",
        "value": 720001
    },
    {
        "name": "Xocolatz",
        "value": 720001
    },
    {
        "name": "NY Korean BBQ",
        "value": 720001
    },
    {
        "name": "Nagoya Japanese",
        "value": 720001
    },
    {
        "name": "Inspiration Roll",
        "value": 720001
    },
    {
        "name": "Westfield Diner",
        "value": 720001
    },
    {
        "name": "Addams Tavern",
        "value": 720001
    },
    {
        "name": "Limani Seafood Gril",
        "value": 720001
    },
    {
        "name": "Manhattan Bagel",
        "value": 720001
    },
    {
        "name": "Roosterspin",
        "value": 720001
    },
    {
        "name": "Old Havana",
        "value": 720001
    },
    {
        "name": "Splash of Thai",
        "value": 720001
    },
    {
        "name": "Jade Garden Chinese",
        "value": 909858
    },
    {
        "name": "La Casa Italian",
        "value": 720001
    },
    {
        "name": "La Famiglia Sorrento",
        "value": 720001
    },
    {
        "name": "Publick House",
        "value": 720001
    },
    {
        "name": "Turning Point",
        "value": 720001
    },
    {
        "name": "Fuji Japanese & Asian Cuisine",
        "value": 720001
    },
    {
        "name": "Echo Tap & Grille",
        "value": 720001
    },
    {
        "name": "Five Guys",
        "value": 720001
    },
    {
        "name": "SUBWAY",
        "value": 720001
    },
    {
        "name": "Buona Pizza",
        "value": 720001
    },
    {
        "name": "Cold Stone Creamery",
        "value": 720001
    },
    {
        "name": "Hunan Wok III",
        "value": 909858
    },
    {
        "name": "Brick Oven",
        "value": 720001
    },
    {
        "name": "Chipotle",
        "value": 200010
    }
];
//# sourceMappingURL=westfieldfood.js.map

/***/ }),

/***/ "../../../../../src/app/charttwo/westfieldfood1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return single; });
var single = [
    {
        "name": "Advertise:908-858-0954",
        "value": 909858
    },
    {
        "name": "Ferraro's",
        "value": 909858
    },
    {
        "name": "Starbucks",
        "value": 909858
    },
    {
        "name": "Trader Joes",
        "value": 909858
    },
    {
        "name": "Fujiyama Mama",
        "value": 909858
    },
    {
        "name": "QDOBA",
        "value": 909858
    },
    {
        "name": "Theresa's",
        "value": 909858
    },
    {
        "name": "Cosimo's",
        "value": 909858
    },
    {
        "name": "Xocolatz",
        "value": 909858
    },
    {
        "name": "NY Korean BBQ",
        "value": 909858
    },
    {
        "name": "Nagoya Japanese",
        "value": 909858
    },
    {
        "name": "Inspiration Roll",
        "value": 909858
    },
    {
        "name": "Westfield Diner",
        "value": 909858
    },
    {
        "name": "Addams Tavern",
        "value": 909858
    },
    {
        "name": "Limani Seafood Gril",
        "value": 909858
    },
    {
        "name": "Manhattan Bagel",
        "value": 909858
    },
    {
        "name": "Roosterspin",
        "value": 909858
    },
    {
        "name": "Old Havana",
        "value": 909858
    },
    {
        "name": "Splash of Thai",
        "value": 909858
    },
    {
        "name": "Jade Garden Chinese",
        "value": 909858
    },
    {
        "name": "La Casa Italian",
        "value": 909858
    },
    {
        "name": "La Famiglia Sorrento",
        "value": 909858
    },
    {
        "name": "Publick House",
        "value": 909858
    },
    {
        "name": "Turning Point",
        "value": 909858
    },
    {
        "name": "Fuji Japanese & Asian Cuisine",
        "value": 909858
    },
    {
        "name": "Echo Tap & Grille",
        "value": 909858
    },
    {
        "name": "Five Guys",
        "value": 909858
    },
    {
        "name": "SUBWAY",
        "value": 909858
    },
    {
        "name": "Buona Pizza",
        "value": 909858
    },
    {
        "name": "Cold Stone Creamery",
        "value": 909858
    },
    {
        "name": "Hunan Wok III",
        "value": 909858
    },
    {
        "name": "Brick Oven",
        "value": 909858
    },
    {
        "name": "Chipotle",
        "value": 909858
    }
];
//# sourceMappingURL=westfieldfood1.js.map

/***/ }),

/***/ "../../../../../src/app/services/town.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TownService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Book = (function () {
    function Book() {
    }
    return Book;
}());
var TownService = (function () {
    function TownService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.jsonApi = 'http://jsonplaceholder.typicode.com/posts';
        this.hero = {
            "Data": [
                {
                    "name": "foo",
                    "value": 112312
                },
                {
                    "name": "Bar",
                    "value": 122221
                }
            ]
        };
    }
    TownService.prototype.generateRandomCoupon = function () {
        var coupon;
        var discount;
        var max;
        var min;
        max = 50;
        min = 10;
        discount = Math.floor(Math.random() * (max - min + 1)) + min;
        ; //12%;
        coupon = discount + "% discount.  Expires in 1 hour.";
        var rCoupon = { msg: coupon };
        return rCoupon;
    };
    TownService.prototype.getCoupon = function (searchText) {
        var _this = this;
        console.log("twon.service:getCoupon: ", searchText);
        //searchText= "15300";
        //const url = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + searchText;
        //const url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpointCocktailRandom;
        //const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";     
        //  const url = 'http://api.github.com/search/users?q=' + searchText;
        //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
        //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';
        //console.log('here', url);
        return this.http.get(url).map(function (res) {
            var results = {}; //[];//[{name: "Fred", value: 123123}];
            var data = res.json();
            var coupon = _this.generateRandomCoupon();
            var items = [];
            if (res) {
                //data.items.forEach(element => {
                data.drinks.forEach(function (element) {
                    //let val = element.id;
                    var val = element.idDrink.toString().substring(0, 6);
                    results = { coupon: coupon, name: element.strDrink, value: val, id: element.idDrink, thumb: element.strDrinkThumb };
                });
            }
            return results; //.slice(0, 21); //{lef:111, right: 222};//data;      
        });
    };
    TownService.prototype.searchTown = function (searchText) {
        console.log("searchTown: ", searchText);
        var path = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpoint + "/mylist";
        var url = path + "/" + searchText;
        return this.http.get(url).map(function (res) {
            var results = [];
            var data = res.json();
            var items = [];
            if (res) {
                data.forEach(function (element) {
                    var val = element.value.toString().substring(0, 6);
                    results.push({ name: element.name, value: val });
                });
            }
            return results.slice(0, 21);
        });
    };
    TownService.prototype.searchGitPromise = function (searchText) {
        var _this = this;
        var hero = {
            "Hero": [
                {
                    "name": "foo",
                    "value": 112312
                },
                {
                    "name": "foo",
                    "value": 122221
                }
            ]
        };
        //let hero = {"value": 121212, "name":"wtf"};// as Hero;
        //HEROES.push(hero);
        //HEROES.push({id: idd, name: name});
        var url = this.jsonApi;
        return this.http
            .post(url, hero)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (res) { return _this.handleErrorPromise; });
    };
    // public searchGitObservable2(searchText: string): Observable<any> {
    //   const url = this.jsonApi;
    //   return this.http.post(url, this.hero).map(
    //     res => {
    //       let results = [];
    //       results = res.json().Data;
    //       console.log('results = ', results);
    //       return results.slice(0, 21); //{lef:111, right: 222};//data;      
    //     });
    // }
    TownService.prototype.searchGit = function (searchText) {
        //const searchText = 'js';
        console.log("searchGit: ", searchText);
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpointCocktailDrinks;
        //const url = 'http://api.github.com/search/users?q=' + searchText;    
        //const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
        //  const url = 'http://api.github.com/search/users?q=' + searchText;
        //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
        //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';
        //console.log('here', url);
        return this.http.get(url).map(function (res) {
            var results = []; //[{name: "Fred", value: 123123}];
            var data = res.json();
            var items = [];
            if (res) {
                //data.items.forEach(element => {
                data.drinks.forEach(function (element) {
                    //let val = element.id;
                    var val = element.idDrink.toString().substring(0, 6);
                    results.push({ name: element.strDrink, value: val });
                });
            }
            //console.log(data);
            //console.log(`data =  ${JSON.stringify(data)}`);
            return results.slice(0, 21); //{lef:111, right: 222};//data;      
        });
    };
    // public search(term: string) {
    //   let url = 'http://date.jsontest.com';//'http://localhost:3000/pingcors?left=right'; //'http://localhost:3000/ping?ass=ffff';//'http://localhost:4200/dashboard';
    //   this.httpClient.get(url).subscribe(data => {
    //     console.log('data = ', data);
    //     this.results = data; //JSON.stringify(data, null, '');
    //     console.log('results = ', this.results);
    //   });
    // }
    TownService.prototype.handleErrorPromise = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        alert("wtf2 error: " + JSON.stringify(error));
        return Promise.reject(error.message || error);
    };
    return TownService;
}());
TownService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], TownService);

var _a, _b;
//# sourceMappingURL=town.service.js.map

/***/ }),

/***/ "../../../../../src/app/towndetail/towndetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-div\r\n{\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 330px;\r\n  height: 100px;\r\n  background-color: #ccc;\r\n  border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/towndetail/towndetail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"param\">\n        <div class=\"center-div\" style=\"border: solid; width: 300px; height: 200px\" >\n            <p>\n               {{discount}}<br/>\n        \n                <img src={{imagePath}} width=\"50\" height=\"50\"/>\n                <span style=\"color:red;\">{{param}}</span><br/>\n        \n                <!--<button (click)=\"subscribeTimer0()\">{{timer0button}}  1 sec timer</button>\n                -->\n                \n                \n                <button (click)=\"reserveCoupon()\" md-button>claim coupon</button>\n                <span style=\"font-size: 55%;\">{{timerCounter0}} </span>\n                <button (click)=\"reserveCoupon()\" md-button>never mind</button> \n                <!--\n                <span style=\"font-size: 13%;\">{{results}} results!</span>  \n                -->\n        \n            </p>\n        </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/towndetail/towndetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TowndetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_town_service__ = __webpack_require__("../../../../../src/app/services/town.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TowndetailComponent = (function () {
    function TowndetailComponent(st, townService, route, location) {
        this.st = st;
        this.townService = townService;
        this.route = route;
        this.location = location;
        this.timerCounter0 = 0;
        this.timerStopAt = 200;
        this.timerTickSize = .001;
        this.timer0button = 'Subscribe';
    }
    TowndetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("\t **** towndetail.component.ts:ngOnInit");
        // this.route.params.subscribe(params => {
        //   // each time the search data is change you'll get this running
        //   //Do what ever you need to refresh your search page
        //   console.log('*** New route params for towndetail.component ', this.route);
        // });
        //this.bShowCoupon= false;
        this.st.newTimer('1sec', this.timerTickSize);
        //this.subscribeTimer0();
        //FM research this.  It looks like it calls the route at init time.
        // Alex ?
        this.route.paramMap
            .switchMap(function (params) { return (_this.param = params.get('id'),
            console.log("this.param = " + _this.param),
            _this.townService.getCoupon(String(+params.get('id')))); })
            .subscribe(function (res) {
            console.log("** this.param = " + _this.param);
            console.log("towndetail.component.ts this.route.paramMap", res);
            _this.result = res;
            _this.results = JSON.stringify(res);
            _this.imagePath = res.thumb;
            _this.discount = res.coupon.msg;
            if (_this.param) {
                _this.startTimer0();
            }
        });
    };
    TowndetailComponent.prototype.delAllTimer = function () {
        this.st.delTimer('1sec');
        //this.st.delTimer('5sec');		
    };
    TowndetailComponent.prototype.startTimer0 = function () {
        this.timerCounter0 = 0;
        this.subscribeTimer();
        //this.subscribeTimer0();
    };
    TowndetailComponent.prototype.stopTimer0 = function () {
        this.param = "";
        this.timerCounter0 = 0;
        this.unsubscribeTimer();
    };
    TowndetailComponent.prototype.unsubscribeTimer = function () {
        if (this.timer0Id) {
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            console.log('timer 0 Unsubscribed.');
        }
    };
    TowndetailComponent.prototype.subscribeTimer = function () {
        var _this = this;
        if (!this.timer0Id) {
            this.timer0Id = this.st.subscribe('1sec', function () { return _this.timer0callback(); });
            console.log('timer 0 Subscribed.');
        }
    };
    // REMOVEME__subscribeTimer0() {
    // 	if (this.timer0Id) {
    // 		// Unsubscribe if timer Id is defined
    // 		this.st.unsubscribe(this.timer0Id);
    // 		this.timer0Id = undefined;
    // 		//this.timer0button = 'Subscribe';
    // 		console.log('timer 0 Unsubscribed.');
    // 	} else {
    // 		// Subscribe if timer Id is undefined
    // 		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
    // 		//this.timer0button = 'Unsubscribe XXXX';
    // 		console.log('timer 0 Subscribed.');
    // 	}
    // 	console.log(this.st.getSubscription());
    // }
    TowndetailComponent.prototype.timer0callback = function () {
        this.timerCounter0++;
        //console.log(`counter ${this.timerCounter0}`);
        // stop at __
        if (this.timerCounter0 > this.timerStopAt) {
            if (this.timer0Id) {
                this.stopTimer0();
                // Unsubscribe if timer Id is defined
                //this.st.unsubscribe(this.timer0Id);
            }
        }
    };
    TowndetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TowndetailComponent.prototype.reserveCoupon = function () {
        this.stopTimer0();
        this.param = "";
    };
    TowndetailComponent.prototype.closeCoupon = function () {
        this.stopTimer0();
        this.param = "";
    };
    return TowndetailComponent;
}());
TowndetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-towndetail',
        template: __webpack_require__("../../../../../src/app/towndetail/towndetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/towndetail/towndetail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__["SimpleTimer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__["SimpleTimer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_town_service__["a" /* TownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_town_service__["a" /* TownService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object])
], TowndetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=towndetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/townroutes/townroutes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TownroutesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__towndetail_towndetail_component__ = __webpack_require__("../../../../../src/app/towndetail/towndetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    //{ path: '', redirectTo: '/detail', pathMatch: 'full' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_2__towndetail_towndetail_component__["a" /* TowndetailComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__towndetail_towndetail_component__["a" /* TowndetailComponent */] }
    //,{ path: '**', component: CharttwoComponent }
];
var TownroutesRoutingModule = (function () {
    function TownroutesRoutingModule() {
    }
    return TownroutesRoutingModule;
}());
TownroutesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], TownroutesRoutingModule);

//# sourceMappingURL=townroutes-routing.module.js.map

/***/ }),

/***/ "../../../../../src/common/color.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("../../../../d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color_sets__ = __webpack_require__("../../../../../src/utils/color-sets.ts");



var ColorHelper = (function () {
    function ColorHelper(scheme, type, domain, customColors) {
        if (typeof (scheme) === 'string') {
            scheme = __WEBPACK_IMPORTED_MODULE_2__utils_color_sets__["a" /* colorSets */].find(function (cs) {
                return cs.name === scheme;
            });
        }
        this.colorDomain = scheme.domain;
        this.scaleType = type;
        this.domain = domain;
        this.customColors = customColors;
        this.scale = this.generateColorScheme(scheme, type, this.domain);
    }
    ColorHelper.prototype.generateColorScheme = function (scheme, type, domain) {
        if (typeof (scheme) === 'string') {
            scheme = __WEBPACK_IMPORTED_MODULE_2__utils_color_sets__["a" /* colorSets */].find(function (cs) {
                return cs.name === scheme;
            });
        }
        var colorScale;
        if (type === 'quantile') {
            colorScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleQuantile"])()
                .range(scheme.domain)
                .domain(domain);
        }
        else if (type === 'ordinal') {
            colorScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleOrdinal"])()
                .range(scheme.domain)
                .domain(domain);
        }
        else if (type === 'linear') {
            // linear schemes must have at least 2 colors
            var colorDomain = scheme.domain.slice();
            if (colorDomain.length === 1) {
                colorDomain.push(colorDomain[0]);
                this.colorDomain = colorDomain;
            }
            var points = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(0, 1, 1.0 / colorDomain.length);
            colorScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
                .domain(points)
                .range(colorDomain);
        }
        return colorScale;
    };
    ColorHelper.prototype.getColor = function (value) {
        if (this.scaleType === 'linear') {
            var valueScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
                .domain(this.domain)
                .range([0, 1]);
            return (this.scale(valueScale(value)));
        }
        else {
            var formattedValue_1 = value.toString();
            var found = void 0; // todo type customColors
            if (this.customColors && this.customColors.length > 0) {
                found = this.customColors.find(function (mapping) {
                    return mapping.name.toLowerCase() === formattedValue_1.toLowerCase();
                });
            }
            if (found) {
                return found.value;
            }
            else {
                return this.scale(value);
            }
        }
    };
    ColorHelper.prototype.getLinearGradientStops = function (value, start) {
        if (start === undefined) {
            start = this.domain[0];
        }
        var valueScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
            .domain(this.domain)
            .range([0, 1]);
        var colorValueScale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleBand"])()
            .domain(this.colorDomain)
            .range([0, 1]);
        var endColor = this.getColor(value);
        // generate the stops
        var startVal = valueScale(start);
        var startColor = this.getColor(start);
        var endVal = valueScale(value);
        var i = 1;
        var currentVal = startVal;
        var stops = [];
        stops.push({
            color: startColor,
            offset: startVal,
            originalOffset: startVal,
            opacity: 1
        });
        while (currentVal < endVal && i < this.colorDomain.length) {
            var color = this.colorDomain[i];
            var offset = colorValueScale(color);
            if (offset <= startVal) {
                i++;
                continue;
            }
            if (offset.toFixed(4) >= (endVal - colorValueScale.bandwidth()).toFixed(4)) {
                break;
            }
            stops.push({
                color: color,
                offset: offset,
                opacity: 1
            });
            currentVal = offset;
            i++;
        }
        if (stops[stops.length - 1].offset < 100) {
            stops.push({
                color: endColor,
                offset: endVal,
                opacity: 1
            });
        }
        if (endVal === startVal) {
            stops[0].offset = 0;
            stops[1].offset = 100;
        }
        else {
            // normalize the offsets into percentages
            if (stops[stops.length - 1].offset !== 100) {
                for (var _i = 0, stops_1 = stops; _i < stops_1.length; _i++) {
                    var s = stops_1[_i];
                    s.offset = ((s.offset - startVal) / (endVal - startVal)) * 100;
                }
            }
        }
        return stops;
    };
    return ColorHelper;
}());

//# sourceMappingURL=color.helper.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: 'https://johndog.herokuapp.com/town',
    apiEndpointCocktailRandom: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    apiEndpointCocktailDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/utils/color-sets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorSets; });
var colorSets = [
    {
        name: 'vivid',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514'
        ]
    },
    {
        name: 'natural',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
        ]
    },
    {
        name: 'cool',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
        ]
    },
    {
        name: 'fire',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#ff3d00', '#bf360c', '#ff8f00', '#ff6f00', '#ff5722', '#e65100', '#ffca28', '#ffab00'
        ]
    },
    {
        name: 'solar',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'
        ]
    },
    {
        name: 'air',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'
        ]
    },
    {
        name: 'aqua',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'
        ]
    },
    {
        name: 'flame',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#A10A28', '#D3342D', '#EF6D49', '#FAAD67', '#FDDE90', '#DBED91', '#A9D770', '#6CBA67', '#2C9653', '#146738'
        ]
    },
    {
        name: 'ocean',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#1D68FB', '#33C0FC', '#4AFFFE', '#AFFFFF', '#FFFC63', '#FDBD2D', '#FC8A25', '#FA4F1E', '#FA141B', '#BA38D1'
        ]
    },
    {
        name: 'forest',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#55C22D', '#C1F33D', '#3CC099', '#AFFFFF', '#8CFC9D', '#76CFFA', '#BA60FB', '#EE6490', '#C42A1C', '#FC9F32'
        ]
    },
    {
        name: 'horizon',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2597FB', '#65EBFD', '#99FDD0', '#FCEE4B', '#FEFCFA', '#FDD6E3', '#FCB1A8', '#EF6F7B', '#CB96E8', '#EFDEE0'
        ]
    },
    {
        name: 'neons',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FF3333', '#FF33FF', '#CC33FF', '#0000FF', '#33CCFF', '#33FFFF', '#33FF66', '#CCFF33', '#FFCC00', '#FF6600'
        ]
    },
    {
        name: 'picnic',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
        ]
    },
    {
        name: 'night',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2B1B5A', '#501356', '#183356', '#28203F', '#391B3C', '#1E2B3C', '#120634',
            '#2D0432', '#051932', '#453080', '#75267D', '#2C507D', '#4B3880', '#752F7D', '#35547D'
        ]
    },
    {
        name: 'nightLights',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#4e31a5', '#9c25a7', '#3065ab', '#57468b', '#904497', '#46648b',
            '#32118d', '#a00fb3', '#1052a2', '#6e51bd', '#b63cc3', '#6c97cb', '#8671c1', '#b455be', '#7496c3'
        ]
    }
];
//# sourceMappingURL=color-sets.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map