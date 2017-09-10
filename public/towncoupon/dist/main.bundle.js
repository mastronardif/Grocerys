webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
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
exports.push([module.i, ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\nbutton {\r\n  min-height: 23px !important;\r\n  min-width: 46px !important;\r\n  font-size: 10px !important;\r\n  line-height: 0px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"color: gray\">\r\n\r\n<md-toolbar style=\"font-size: 40%\" color=\"primary\">\r\n         \r\n    <span style=\"font-size: 170%\">{{town}} </span>\r\n\r\n    <md-icon class=\"example-icon\" (click)=\"adminAddStoreDetail()\">favorite</md-icon>\r\n    <a routerLink=\"/\">\r\n        <md-icon class=\"example-icon\">home</md-icon> \r\n    </a>\r\n\r\n    <button md-button id=\"admin\" name=\"admin\" md-raised-button (click)=\"adminTown($event)\">\r\n            T</button>\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <md-icon class=\"material-icon\" (click)=\"adminSelectTown()\">search</md-icon>\r\n\r\n    <button md-raised-button color=\"accent\" (click)=\"adminAddStoreDetail()\">\r\n        <i class=\"material-icons\">add_circle_outline</i>Store</button>        \r\n</md-toolbar>       \r\n<router-outlet></router-outlet>\r\n<span style=\"font-size: 40%\">v0.13 &copy; 2017 Gracy girl enterprises</span> \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_town_service__ = __webpack_require__("../../../../../src/app/services/town.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
    function AppComponent(data, router) {
        this.data = data;
        this.router = router;
        this.town = "tbd";
        console.log("app.components.ts, constructor, " + router);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app.component:ngOnInit');
        console.log('this.router[0]', this.router);
        this.data.currentMessage.subscribe(function (message) {
            //console.log("SUBscribed. A new TOWN has been loaded: "+message);
            _this.town = message;
        });
    };
    AppComponent.prototype.adminTown = function (event) {
        var elementId = event.currentTarget.id;
        this.getCoupon('Add an establishment. ');
    };
    AppComponent.prototype.adminSelectTown = function () {
        var id = 'b' + Date.now();
        console.log(':adminAddSelectTown', id);
        var link = ['/charttwo', id];
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    };
    AppComponent.prototype.adminAddStoreDetail = function () {
        console.log('adminAddStoreDetail');
        var id = 'tbd_id';
        var link = ['/store', id];
        //this.router.navigate(link);
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
        //this.router.navigate(['/store', 'tbd']);
        // gotoDetail(): void {
        //   this.router.navigate(['/detail', this.selectedHero.id]);
        // }
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
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_town_service__["a" /* TownService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storedetail_storedetail_component__ = __webpack_require__("../../../../../src/app/storedetail/storedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bigdummy_bigdummy_component__ = __webpack_require__("../../../../../src/app/bigdummy/bigdummy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_12__towndetail_towndetail_component__["a" /* TowndetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__storedetail_storedetail_component__["a" /* StoredetailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__bigdummy_bigdummy_component__["a" /* BigdummyComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_15__bigdummy_bigdummy_component__["a" /* BigdummyComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_13__townroutes_townroutes_routing_module__["a" /* TownroutesRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__["SimpleTimer"], __WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bigdummy/bigdummy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bigdummy/bigdummy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bigdummy works!\n  <i class=\"material-icons\">attach_money</i>\n  <i class=\"material-icons\">store</i>\n  <i class=\"material-icons\">home</i>\n  <i class=\"material-icons\">save</i>\n  <md-icon class=\"example-icon\">delete</md-icon>\n  <img src=\"https://i.pinimg.com/736x/69/c8/9a/69c89a7e9bae6bdfa31a0e38f13cb63d--sanford-and-son-lol-funny.jpg\"\n  alt=\"Smiley face\" height=\"42\" width=\"42\">\n</p>"

/***/ }),

/***/ "../../../../../src/app/bigdummy/bigdummy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigdummyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigdummyComponent = (function () {
    function BigdummyComponent() {
    }
    BigdummyComponent.prototype.ngOnInit = function () {
    };
    return BigdummyComponent;
}());
BigdummyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bigdummy',
        template: __webpack_require__("../../../../../src/app/bigdummy/bigdummy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bigdummy/bigdummy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BigdummyComponent);

//# sourceMappingURL=bigdummy.component.js.map

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

module.exports = "<div style=\"height:600px; font-size: 50%\"> \n<ngx-charts-tree-map\n[view]=\"view\"\n[scheme]=\"colorScheme\"\n[results]=\"single\"\n(select)=\"onSelect($event)\">\n</ngx-charts-tree-map>\n</div>\n<div>\n<!--\n<hr/>\n<a href=\"https://swimlane.gitbooks.io/ngx-charts/content/charts/tree-map.html\">\n  bobo\n</a>\n<a href=\"https://swimlane.github.io/ngx-charts/#/ngx-charts/tree-map\">\n  bobo\n</a>\n<br/>\n<a  [routerLink]=\"['/detail', 321]\">rlink</a>\n<nav>\n  <a routerLink=\"/detail\">detail</a>\n  <a routerLink=\"/detail/z444\">get coupon</a>    \n</nav>\n<router-outlet></router-outlet>\n-->\n\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_color_sets__ = __webpack_require__("../../../../../src/utils/color-sets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__towndetail_towndetail_component__ = __webpack_require__("../../../../../src/app/towndetail/towndetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storedetail_storedetail_component__ = __webpack_require__("../../../../../src/app/storedetail/storedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bigdummy_bigdummy_component__ = __webpack_require__("../../../../../src/app/bigdummy/bigdummy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CharttwoComponent = (function () {
    function CharttwoComponent(data, townService, snackBar, route, router, el) {
        this.data = data;
        this.townService = townService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.count = 123;
        this.town = 'bbb';
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
    CharttwoComponent.prototype.tellEveryoneAboutTown = function (town) {
        //console.log(`tellEveryoneAboutTown(${town})`);
        this.data.changeMessage(town);
    };
    CharttwoComponent.prototype.setResturaunts = function (town, dest) {
        var _this = this;
        //console.log(`setResturaunts(${town})`);
        this.townService.searchTown(town).subscribe(function (res) {
            //this.single = res; 
            _this.resturaunts = res;
            _this.single2 = res;
            _this.town = town;
            //console.log("resturaunts = ", this.single2)
        }, function (err) {
            alert("FM err = " + err);
            console.log(err);
        });
    };
    CharttwoComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy()');
        clearInterval(this.timer);
    };
    CharttwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.data.currentMessage.subscribe(message => this.town = message+'uuu');
        console.log('charttwo:ngOnInit()');
        this.route.paramMap
            .switchMap(function (params) { return _this.townService.searchTown(params.get('id')); })
            .subscribe(function (res) { _this.single2 = res; _this.setColors('RANDOM'); });
        this.townService.searchTown('the towns').subscribe(function (res) {
            _this.single = res;
            _this.towns = res;
            _this.towns = _this.towns.map(function (item) { return item.name; });
            _this.town = 'the towns';
            _this.tellEveryoneAboutTown('the towns');
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
    CharttwoComponent.prototype.onSelect = function (event) {
        //Object.assign(this, {single});
        var _this = this;
        if (event != null) {
            var town = event.name;
            if (this.towns.findIndex(function (item) { return (item == event.name); }) != -1) {
                console.log("SET single for " + town);
                //this.town=town;
                this.setResturaunts(event.name, this.single);
            }
            this.getCoupon(event);
            return;
            //this.townService.getCoupon(event);
        }
        if (this.count % 2) {
            Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__westfieldfood1__["a" /* single */] });
            this.single[0].value = this.single[0].value + 1;
            var name = this.single[1].name;
            this.setColors('fire');
            //this.town='Westfield(default)';
            this.tellEveryoneAboutTown('Westfield');
        }
        else {
            //console.log("\t ***** ***** ", event, this.count);
            this.tellEveryoneAboutTown(this.town);
            var wasCount_1 = this.count;
            this.townService.searchGit('mastronardi').subscribe(function (res) {
                //console.log("\t", event, this.count);
                _this.setColors('vivid');
                _this.single = _this.single2;
                //console.log("2 this.single= ", this.single);
                //let name = `${this.single[0].name} ZZ`;    
                _this.single[0].value = _this.single[0].value + wasCount_1;
            }, function (err) {
                alert("FM err = " + err);
                console.log(err);
            });
        }
        this.count++;
    };
    CharttwoComponent.prototype.openSnackBar = function (name) {
        //this.snackBar.openFromComponent(PizzaPartyComponent, {
        this.snackBar.open("getting your coupon for " + name, 'Close', { duration: 1000 });
        //this.snackBar.openFromComponent(CharttwoComponent, {
        //duration: 1500,
        //});
    };
    CharttwoComponent.prototype.openSnackBar2 = function (name) {
        //console.log('openSnackBar2');
        //this.snackBar.openFromComponent(PizzaPartyComponent, {
        //this.snackBar.open(`getting your coupon for ${name}`, 'Close', { duration: 1000 });
        //import { TowndetailComponent }  from '../towndetail/towndetail.component';
        this.snackBar.openFromComponent(
        //CharttwoComponent,
        //StoredetailComponent,
        //TowndetailComponent,
        __WEBPACK_IMPORTED_MODULE_10__bigdummy_bigdummy_component__["a" /* BigdummyComponent */], { duration: 1000, });
    };
    CharttwoComponent.prototype.getCoupon = function (event) {
        var name = event.name;
        var b908 = (-1 != name.indexOf('0954')) &&
            (-1 != name.indexOf('0954'));
        if (event.name != 'Publick House') {
            if (b908) {
                this.openSnackBar2(event.name);
            }
            else {
                this.openSnackBar(event.name);
            }
            return;
        }
        //console.log('getCoupon', event);
        this.setColors('night');
        var id = event.name;
        var link = ['/detail', id];
        //this.router.navigate(link);
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
        //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
    };
    CharttwoComponent.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    };
    CharttwoComponent.prototype.setColors = function (name) {
        if (name.toUpperCase() == 'RANDOM') {
            var iRand = this.getRandomIntInclusive(0, __WEBPACK_IMPORTED_MODULE_5__utils_color_sets__["a" /* colorSets */].length - 1);
            //console.log(iRand, colorSets[iRand].name);
            name = __WEBPACK_IMPORTED_MODULE_5__utils_color_sets__["a" /* colorSets */][iRand].name;
        }
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
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */], __WEBPACK_IMPORTED_MODULE_8__towndetail_towndetail_component__["a" /* TowndetailComponent */], __WEBPACK_IMPORTED_MODULE_9__storedetail_storedetail_component__["a" /* StoredetailComponent */], __WEBPACK_IMPORTED_MODULE_10__bigdummy_bigdummy_component__["a" /* BigdummyComponent */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[view]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_town_service__["a" /* TownService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], CharttwoComponent);

var _a, _b, _c, _d, _e, _f;
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

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("-");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

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
                    //results.push({ name: element.name, value: val });
                    results.push({ name: element.name, value: element.value });
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
        //console.log("searchGit: ", searchText);
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

/***/ "../../../../../src/app/storedetail/storedetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\r\n    display:block;\r\n    width:90%;\r\n    padding:2em;\r\n    margin: 2em auto;\r\n    background:#CDCDAB;\r\n}\r\n\r\n.alert {\r\n    background: #491221;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n/**\r\n * Foundation for Sites by ZURB\r\n * Version 6.3.1\r\n * foundation.zurb.com\r\n * Licensed under MIT Open Source\r\n */\r\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\r\n/* Document\r\n       ========================================================================== */\r\n/**\r\n     * 1. Change the default font family in all browsers (opinionated).\r\n     * 2. Correct the line height in all browsers.\r\n     * 3. Prevent adjustments of font size after orientation changes in\r\n     *    IE on Windows Phone and in iOS.\r\n     */\r\nhtml {\r\n  font-family: sans-serif;\r\n  /* 1 */\r\n  line-height: 1.15;\r\n  /* 2 */\r\n  -ms-text-size-adjust: 100%;\r\n  /* 3 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 3 */ }\r\n\r\n/* Sections\r\n       ========================================================================== */\r\n/**\r\n     * Remove the margin in all browsers (opinionated).\r\n     */\r\nbody {\r\n  margin: 0; }\r\n\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\narticle,\r\naside,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n  display: block; }\r\n\r\n/**\r\n     * Correct the font size and margin on `h1` elements within `section` and\r\n     * `article` contexts in Chrome, Firefox, and Safari.\r\n     */\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0; }\r\n\r\n/* Grouping content\r\n       ========================================================================== */\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\nfigcaption,\r\nfigure {\r\n  display: block; }\r\n\r\n/**\r\n     * Add the correct margin in IE 8.\r\n     */\r\nfigure {\r\n  margin: 1em 40px; }\r\n\r\n/**\r\n     * 1. Add the correct box sizing in Firefox.\r\n     * 2. Show the overflow in Edge and IE.\r\n     */\r\nhr {\r\n  box-sizing: content-box;\r\n  /* 1 */\r\n  height: 0;\r\n  /* 1 */\r\n  overflow: visible;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Add the correct display in IE.\r\n     */\r\nmain {\r\n  display: block; }\r\n\r\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\r\npre {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */ }\r\n\r\n/* Links\r\n       ========================================================================== */\r\n/**\r\n     * 1. Remove the gray background on active links in IE 10.\r\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n     */\r\na {\r\n  background-color: transparent;\r\n  /* 1 */\r\n  -webkit-text-decoration-skip: objects;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Remove the outline on focused links when they are also active or hovered\r\n     * in all browsers (opinionated).\r\n     */\r\na:active,\r\na:hover {\r\n  outline-width: 0; }\r\n\r\n/* Text-level semantics\r\n       ========================================================================== */\r\n/**\r\n     * 1. Remove the bottom border in Firefox 39-.\r\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n     */\r\nabbr[title] {\r\n  border-bottom: none;\r\n  /* 1 */\r\n  text-decoration: underline;\r\n  /* 2 */\r\n  text-decoration: underline dotted;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n     */\r\nb,\r\nstrong {\r\n  font-weight: inherit; }\r\n\r\n/**\r\n     * Add the correct font weight in Chrome, Edge, and Safari.\r\n     */\r\nb,\r\nstrong {\r\n  font-weight: bolder; }\r\n\r\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Add the correct font style in Android 4.3-.\r\n     */\r\ndfn {\r\n  font-style: italic; }\r\n\r\n/**\r\n     * Add the correct background and color in IE 9-.\r\n     */\r\nmark {\r\n  background-color: #ff0;\r\n  color: #000; }\r\n\r\n/**\r\n     * Add the correct font size in all browsers.\r\n     */\r\nsmall {\r\n  font-size: 80%; }\r\n\r\n/**\r\n     * Prevent `sub` and `sup` elements from affecting the line height in\r\n     * all browsers.\r\n     */\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline; }\r\n\r\nsub {\r\n  bottom: -0.25em; }\r\n\r\nsup {\r\n  top: -0.5em; }\r\n\r\n/* Embedded content\r\n       ========================================================================== */\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\naudio,\r\nvideo {\r\n  display: inline-block; }\r\n\r\n/**\r\n     * Add the correct display in iOS 4-7.\r\n     */\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0; }\r\n\r\n/**\r\n     * Remove the border on images inside links in IE 10-.\r\n     */\r\nimg {\r\n  border-style: none; }\r\n\r\n/**\r\n     * Hide the overflow in IE.\r\n     */\r\nsvg:not(:root) {\r\n  overflow: hidden; }\r\n\r\n/* Forms\r\n       ========================================================================== */\r\n/**\r\n     * 1. Change the font styles in all browsers (opinionated).\r\n     * 2. Remove the margin in Firefox and Safari.\r\n     */\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: sans-serif;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  line-height: 1.15;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Show the overflow in IE.\r\n     */\r\nbutton {\r\n  overflow: visible; }\r\n\r\n/**\r\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n     * 1. Remove the inheritance of text transform in Firefox.\r\n     */\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none; }\r\n\r\n/**\r\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n     *    controls in Android 4.\r\n     * 2. Correct the inability to style clickable types in iOS and Safari.\r\n     */\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  /* 2 */ }\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  /**\r\n       * Remove the inner border and padding in Firefox.\r\n       */\r\n  /**\r\n       * Restore the focus styles unset by the previous rule.\r\n       */ }\r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0; }\r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText; }\r\n\r\n/**\r\n     * Show the overflow in Edge.\r\n     */\r\ninput {\r\n  overflow: visible; }\r\n\r\n/**\r\n     * 1. Add the correct box sizing in IE 10-.\r\n     * 2. Remove the padding in IE 10-.\r\n     */\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Correct the cursor style of increment and decrement buttons in Chrome.\r\n     */\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto; }\r\n\r\n/**\r\n     * 1. Correct the odd appearance in Chrome and Safari.\r\n     * 2. Correct the outline style in Safari.\r\n     */\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n  /**\r\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n       */ }\r\n  [type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none; }\r\n\r\n/**\r\n     * 1. Correct the inability to style clickable types in iOS and Safari.\r\n     * 2. Change font properties to `inherit` in Safari.\r\n     */\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Change the border, margin, and padding in all browsers (opinionated).\r\n     */\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em; }\r\n\r\n/**\r\n     * 1. Correct the text wrapping in Edge and IE.\r\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n     * 3. Remove the padding so developers are not caught out when they zero out\r\n     *    `fieldset` elements in all browsers.\r\n     */\r\nlegend {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  display: table;\r\n  /* 1 */\r\n  max-width: 100%;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 3 */\r\n  color: inherit;\r\n  /* 2 */\r\n  white-space: normal;\r\n  /* 1 */ }\r\n\r\n/**\r\n     * 1. Add the correct display in IE 9-.\r\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n     */\r\nprogress {\r\n  display: inline-block;\r\n  /* 1 */\r\n  vertical-align: baseline;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Remove the default vertical scrollbar in IE.\r\n     */\r\ntextarea {\r\n  overflow: auto; }\r\n\r\n/* Interactive\r\n       ========================================================================== */\r\n/*\r\n     * Add the correct display in Edge, IE, and Firefox.\r\n     */\r\ndetails {\r\n  display: block; }\r\n\r\n/*\r\n     * Add the correct display in all browsers.\r\n     */\r\nsummary {\r\n  display: list-item; }\r\n\r\n/*\r\n     * Add the correct display in IE 9-.\r\n     */\r\nmenu {\r\n  display: block; }\r\n\r\n/* Scripting\r\n       ========================================================================== */\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\ncanvas {\r\n  display: inline-block; }\r\n\r\n/**\r\n     * Add the correct display in IE.\r\n     */\r\ntemplate {\r\n  display: none; }\r\n\r\n/* Hidden\r\n       ========================================================================== */\r\n/**\r\n     * Add the correct display in IE 10-.\r\n     */\r\n[hidden] {\r\n  display: none; }\r\n\r\n.foundation-mq {\r\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit; }\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #fefefe;\r\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #0a0a0a;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale; }\r\n\r\nimg {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-width: 100%;\r\n  height: auto;\r\n  -ms-interpolation-mode: bicubic; }\r\n\r\ntextarea {\r\n  height: auto;\r\n  min-height: 50px;\r\n  border-radius: 0; }\r\n\r\nselect {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  border-radius: 0; }\r\n\r\n.map_canvas img,\r\n.map_canvas embed,\r\n.map_canvas object,\r\n.mqa-display img,\r\n.mqa-display embed,\r\n.mqa-display object {\r\n  max-width: none !important; }\r\n\r\nbutton {\r\n  padding: 0;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border: 0;\r\n  border-radius: 0;\r\n  background: transparent;\r\n  line-height: 1; }\r\n  [data-whatinput='mouse'] button {\r\n    outline: 0; }\r\n\r\npre {\r\n  overflow: auto; }\r\n\r\n.is-visible {\r\n  display: block !important; }\r\n\r\n.is-hidden {\r\n  display: none !important; }\r\n\r\n.row {\r\n  max-width: 75rem;\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n  .row::before, .row::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .row::after {\r\n    clear: both; }\r\n  .row.collapse > .column, .row.collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n  .row .row {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem; }\r\n    @media print, screen and (min-width: 40em) {\r\n      .row .row {\r\n        margin-right: -0.9375rem;\r\n        margin-left: -0.9375rem; } }\r\n    @media print, screen and (min-width: 64em) {\r\n      .row .row {\r\n        margin-right: -0.9375rem;\r\n        margin-left: -0.9375rem; } }\r\n    .row .row.collapse {\r\n      margin-right: 0;\r\n      margin-left: 0; }\r\n  .row.expanded {\r\n    max-width: none; }\r\n    .row.expanded .row {\r\n      margin-right: auto;\r\n      margin-left: auto; }\r\n  .row:not(.expanded) .row {\r\n    max-width: none; }\r\n  .row.gutter-small > .column, .row.gutter-small > .columns {\r\n    padding-right: 0.625rem;\r\n    padding-left: 0.625rem; }\r\n  .row.gutter-medium > .column, .row.gutter-medium > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n\r\n.column, .columns {\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .column, .columns {\r\n      padding-right: 0.9375rem;\r\n      padding-left: 0.9375rem; } }\r\n  .column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\r\n    float: right; }\r\n  .column.end:last-child:last-child, .end.columns:last-child:last-child {\r\n    float: left; }\r\n\r\n.column.row.row, .row.row.columns {\r\n  float: none; }\r\n\r\n.row .column.row.row, .row .row.row.columns {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.small-1 {\r\n  width: 8.33333%; }\r\n\r\n.small-push-1 {\r\n  position: relative;\r\n  left: 8.33333%; }\r\n\r\n.small-pull-1 {\r\n  position: relative;\r\n  left: -8.33333%; }\r\n\r\n.small-offset-0 {\r\n  margin-left: 0%; }\r\n\r\n.small-2 {\r\n  width: 16.66667%; }\r\n\r\n.small-push-2 {\r\n  position: relative;\r\n  left: 16.66667%; }\r\n\r\n.small-pull-2 {\r\n  position: relative;\r\n  left: -16.66667%; }\r\n\r\n.small-offset-1 {\r\n  margin-left: 8.33333%; }\r\n\r\n.small-3 {\r\n  width: 25%; }\r\n\r\n.small-push-3 {\r\n  position: relative;\r\n  left: 25%; }\r\n\r\n.small-pull-3 {\r\n  position: relative;\r\n  left: -25%; }\r\n\r\n.small-offset-2 {\r\n  margin-left: 16.66667%; }\r\n\r\n.small-4 {\r\n  width: 33.33333%; }\r\n\r\n.small-push-4 {\r\n  position: relative;\r\n  left: 33.33333%; }\r\n\r\n.small-pull-4 {\r\n  position: relative;\r\n  left: -33.33333%; }\r\n\r\n.small-offset-3 {\r\n  margin-left: 25%; }\r\n\r\n.small-5 {\r\n  width: 41.66667%; }\r\n\r\n.small-push-5 {\r\n  position: relative;\r\n  left: 41.66667%; }\r\n\r\n.small-pull-5 {\r\n  position: relative;\r\n  left: -41.66667%; }\r\n\r\n.small-offset-4 {\r\n  margin-left: 33.33333%; }\r\n\r\n.small-6 {\r\n  width: 50%; }\r\n\r\n.small-push-6 {\r\n  position: relative;\r\n  left: 50%; }\r\n\r\n.small-pull-6 {\r\n  position: relative;\r\n  left: -50%; }\r\n\r\n.small-offset-5 {\r\n  margin-left: 41.66667%; }\r\n\r\n.small-7 {\r\n  width: 58.33333%; }\r\n\r\n.small-push-7 {\r\n  position: relative;\r\n  left: 58.33333%; }\r\n\r\n.small-pull-7 {\r\n  position: relative;\r\n  left: -58.33333%; }\r\n\r\n.small-offset-6 {\r\n  margin-left: 50%; }\r\n\r\n.small-8 {\r\n  width: 66.66667%; }\r\n\r\n.small-push-8 {\r\n  position: relative;\r\n  left: 66.66667%; }\r\n\r\n.small-pull-8 {\r\n  position: relative;\r\n  left: -66.66667%; }\r\n\r\n.small-offset-7 {\r\n  margin-left: 58.33333%; }\r\n\r\n.small-9 {\r\n  width: 75%; }\r\n\r\n.small-push-9 {\r\n  position: relative;\r\n  left: 75%; }\r\n\r\n.small-pull-9 {\r\n  position: relative;\r\n  left: -75%; }\r\n\r\n.small-offset-8 {\r\n  margin-left: 66.66667%; }\r\n\r\n.small-10 {\r\n  width: 83.33333%; }\r\n\r\n.small-push-10 {\r\n  position: relative;\r\n  left: 83.33333%; }\r\n\r\n.small-pull-10 {\r\n  position: relative;\r\n  left: -83.33333%; }\r\n\r\n.small-offset-9 {\r\n  margin-left: 75%; }\r\n\r\n.small-11 {\r\n  width: 91.66667%; }\r\n\r\n.small-push-11 {\r\n  position: relative;\r\n  left: 91.66667%; }\r\n\r\n.small-pull-11 {\r\n  position: relative;\r\n  left: -91.66667%; }\r\n\r\n.small-offset-10 {\r\n  margin-left: 83.33333%; }\r\n\r\n.small-12 {\r\n  width: 100%; }\r\n\r\n.small-offset-11 {\r\n  margin-left: 91.66667%; }\r\n\r\n.small-up-1 > .column, .small-up-1 > .columns {\r\n  float: left;\r\n  width: 100%; }\r\n  .small-up-1 > .column:nth-of-type(1n), .small-up-1 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-1 > .column:nth-of-type(1n+1), .small-up-1 > .columns:nth-of-type(1n+1) {\r\n    clear: both; }\r\n  .small-up-1 > .column:last-child, .small-up-1 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-2 > .column, .small-up-2 > .columns {\r\n  float: left;\r\n  width: 50%; }\r\n  .small-up-2 > .column:nth-of-type(1n), .small-up-2 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-2 > .column:nth-of-type(2n+1), .small-up-2 > .columns:nth-of-type(2n+1) {\r\n    clear: both; }\r\n  .small-up-2 > .column:last-child, .small-up-2 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-3 > .column, .small-up-3 > .columns {\r\n  float: left;\r\n  width: 33.33333%; }\r\n  .small-up-3 > .column:nth-of-type(1n), .small-up-3 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-3 > .column:nth-of-type(3n+1), .small-up-3 > .columns:nth-of-type(3n+1) {\r\n    clear: both; }\r\n  .small-up-3 > .column:last-child, .small-up-3 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-4 > .column, .small-up-4 > .columns {\r\n  float: left;\r\n  width: 25%; }\r\n  .small-up-4 > .column:nth-of-type(1n), .small-up-4 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-4 > .column:nth-of-type(4n+1), .small-up-4 > .columns:nth-of-type(4n+1) {\r\n    clear: both; }\r\n  .small-up-4 > .column:last-child, .small-up-4 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-5 > .column, .small-up-5 > .columns {\r\n  float: left;\r\n  width: 20%; }\r\n  .small-up-5 > .column:nth-of-type(1n), .small-up-5 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-5 > .column:nth-of-type(5n+1), .small-up-5 > .columns:nth-of-type(5n+1) {\r\n    clear: both; }\r\n  .small-up-5 > .column:last-child, .small-up-5 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-6 > .column, .small-up-6 > .columns {\r\n  float: left;\r\n  width: 16.66667%; }\r\n  .small-up-6 > .column:nth-of-type(1n), .small-up-6 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-6 > .column:nth-of-type(6n+1), .small-up-6 > .columns:nth-of-type(6n+1) {\r\n    clear: both; }\r\n  .small-up-6 > .column:last-child, .small-up-6 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-7 > .column, .small-up-7 > .columns {\r\n  float: left;\r\n  width: 14.28571%; }\r\n  .small-up-7 > .column:nth-of-type(1n), .small-up-7 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-7 > .column:nth-of-type(7n+1), .small-up-7 > .columns:nth-of-type(7n+1) {\r\n    clear: both; }\r\n  .small-up-7 > .column:last-child, .small-up-7 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-8 > .column, .small-up-8 > .columns {\r\n  float: left;\r\n  width: 12.5%; }\r\n  .small-up-8 > .column:nth-of-type(1n), .small-up-8 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n  .small-up-8 > .column:nth-of-type(8n+1), .small-up-8 > .columns:nth-of-type(8n+1) {\r\n    clear: both; }\r\n  .small-up-8 > .column:last-child, .small-up-8 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-collapse > .column, .small-collapse > .columns {\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.small-collapse .row {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n.expanded.row .small-collapse.row {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n.small-uncollapse > .column, .small-uncollapse > .columns {\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem; }\r\n\r\n.small-centered {\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n  .small-centered, .small-centered:last-child:not(:first-child) {\r\n    float: none;\r\n    clear: both; }\r\n\r\n.small-uncentered,\r\n.small-push-0,\r\n.small-pull-0 {\r\n  position: static;\r\n  float: left;\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .medium-1 {\r\n    width: 8.33333%; }\r\n  .medium-push-1 {\r\n    position: relative;\r\n    left: 8.33333%; }\r\n  .medium-pull-1 {\r\n    position: relative;\r\n    left: -8.33333%; }\r\n  .medium-offset-0 {\r\n    margin-left: 0%; }\r\n  .medium-2 {\r\n    width: 16.66667%; }\r\n  .medium-push-2 {\r\n    position: relative;\r\n    left: 16.66667%; }\r\n  .medium-pull-2 {\r\n    position: relative;\r\n    left: -16.66667%; }\r\n  .medium-offset-1 {\r\n    margin-left: 8.33333%; }\r\n  .medium-3 {\r\n    width: 25%; }\r\n  .medium-push-3 {\r\n    position: relative;\r\n    left: 25%; }\r\n  .medium-pull-3 {\r\n    position: relative;\r\n    left: -25%; }\r\n  .medium-offset-2 {\r\n    margin-left: 16.66667%; }\r\n  .medium-4 {\r\n    width: 33.33333%; }\r\n  .medium-push-4 {\r\n    position: relative;\r\n    left: 33.33333%; }\r\n  .medium-pull-4 {\r\n    position: relative;\r\n    left: -33.33333%; }\r\n  .medium-offset-3 {\r\n    margin-left: 25%; }\r\n  .medium-5 {\r\n    width: 41.66667%; }\r\n  .medium-push-5 {\r\n    position: relative;\r\n    left: 41.66667%; }\r\n  .medium-pull-5 {\r\n    position: relative;\r\n    left: -41.66667%; }\r\n  .medium-offset-4 {\r\n    margin-left: 33.33333%; }\r\n  .medium-6 {\r\n    width: 50%; }\r\n  .medium-push-6 {\r\n    position: relative;\r\n    left: 50%; }\r\n  .medium-pull-6 {\r\n    position: relative;\r\n    left: -50%; }\r\n  .medium-offset-5 {\r\n    margin-left: 41.66667%; }\r\n  .medium-7 {\r\n    width: 58.33333%; }\r\n  .medium-push-7 {\r\n    position: relative;\r\n    left: 58.33333%; }\r\n  .medium-pull-7 {\r\n    position: relative;\r\n    left: -58.33333%; }\r\n  .medium-offset-6 {\r\n    margin-left: 50%; }\r\n  .medium-8 {\r\n    width: 66.66667%; }\r\n  .medium-push-8 {\r\n    position: relative;\r\n    left: 66.66667%; }\r\n  .medium-pull-8 {\r\n    position: relative;\r\n    left: -66.66667%; }\r\n  .medium-offset-7 {\r\n    margin-left: 58.33333%; }\r\n  .medium-9 {\r\n    width: 75%; }\r\n  .medium-push-9 {\r\n    position: relative;\r\n    left: 75%; }\r\n  .medium-pull-9 {\r\n    position: relative;\r\n    left: -75%; }\r\n  .medium-offset-8 {\r\n    margin-left: 66.66667%; }\r\n  .medium-10 {\r\n    width: 83.33333%; }\r\n  .medium-push-10 {\r\n    position: relative;\r\n    left: 83.33333%; }\r\n  .medium-pull-10 {\r\n    position: relative;\r\n    left: -83.33333%; }\r\n  .medium-offset-9 {\r\n    margin-left: 75%; }\r\n  .medium-11 {\r\n    width: 91.66667%; }\r\n  .medium-push-11 {\r\n    position: relative;\r\n    left: 91.66667%; }\r\n  .medium-pull-11 {\r\n    position: relative;\r\n    left: -91.66667%; }\r\n  .medium-offset-10 {\r\n    margin-left: 83.33333%; }\r\n  .medium-12 {\r\n    width: 100%; }\r\n  .medium-offset-11 {\r\n    margin-left: 91.66667%; }\r\n  .medium-up-1 > .column, .medium-up-1 > .columns {\r\n    float: left;\r\n    width: 100%; }\r\n    .medium-up-1 > .column:nth-of-type(1n), .medium-up-1 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-1 > .column:nth-of-type(1n+1), .medium-up-1 > .columns:nth-of-type(1n+1) {\r\n      clear: both; }\r\n    .medium-up-1 > .column:last-child, .medium-up-1 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-2 > .column, .medium-up-2 > .columns {\r\n    float: left;\r\n    width: 50%; }\r\n    .medium-up-2 > .column:nth-of-type(1n), .medium-up-2 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-2 > .column:nth-of-type(2n+1), .medium-up-2 > .columns:nth-of-type(2n+1) {\r\n      clear: both; }\r\n    .medium-up-2 > .column:last-child, .medium-up-2 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-3 > .column, .medium-up-3 > .columns {\r\n    float: left;\r\n    width: 33.33333%; }\r\n    .medium-up-3 > .column:nth-of-type(1n), .medium-up-3 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-3 > .column:nth-of-type(3n+1), .medium-up-3 > .columns:nth-of-type(3n+1) {\r\n      clear: both; }\r\n    .medium-up-3 > .column:last-child, .medium-up-3 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-4 > .column, .medium-up-4 > .columns {\r\n    float: left;\r\n    width: 25%; }\r\n    .medium-up-4 > .column:nth-of-type(1n), .medium-up-4 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-4 > .column:nth-of-type(4n+1), .medium-up-4 > .columns:nth-of-type(4n+1) {\r\n      clear: both; }\r\n    .medium-up-4 > .column:last-child, .medium-up-4 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-5 > .column, .medium-up-5 > .columns {\r\n    float: left;\r\n    width: 20%; }\r\n    .medium-up-5 > .column:nth-of-type(1n), .medium-up-5 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-5 > .column:nth-of-type(5n+1), .medium-up-5 > .columns:nth-of-type(5n+1) {\r\n      clear: both; }\r\n    .medium-up-5 > .column:last-child, .medium-up-5 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-6 > .column, .medium-up-6 > .columns {\r\n    float: left;\r\n    width: 16.66667%; }\r\n    .medium-up-6 > .column:nth-of-type(1n), .medium-up-6 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-6 > .column:nth-of-type(6n+1), .medium-up-6 > .columns:nth-of-type(6n+1) {\r\n      clear: both; }\r\n    .medium-up-6 > .column:last-child, .medium-up-6 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-7 > .column, .medium-up-7 > .columns {\r\n    float: left;\r\n    width: 14.28571%; }\r\n    .medium-up-7 > .column:nth-of-type(1n), .medium-up-7 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-7 > .column:nth-of-type(7n+1), .medium-up-7 > .columns:nth-of-type(7n+1) {\r\n      clear: both; }\r\n    .medium-up-7 > .column:last-child, .medium-up-7 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-8 > .column, .medium-up-8 > .columns {\r\n    float: left;\r\n    width: 12.5%; }\r\n    .medium-up-8 > .column:nth-of-type(1n), .medium-up-8 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-8 > .column:nth-of-type(8n+1), .medium-up-8 > .columns:nth-of-type(8n+1) {\r\n      clear: both; }\r\n    .medium-up-8 > .column:last-child, .medium-up-8 > .columns:last-child {\r\n      float: left; }\r\n  .medium-collapse > .column, .medium-collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n  .medium-collapse .row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .expanded.row .medium-collapse.row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n  .medium-centered {\r\n    margin-right: auto;\r\n    margin-left: auto; }\r\n    .medium-centered, .medium-centered:last-child:not(:first-child) {\r\n      float: none;\r\n      clear: both; }\r\n  .medium-uncentered,\r\n  .medium-push-0,\r\n  .medium-pull-0 {\r\n    position: static;\r\n    float: left;\r\n    margin-right: 0;\r\n    margin-left: 0; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .large-1 {\r\n    width: 8.33333%; }\r\n  .large-push-1 {\r\n    position: relative;\r\n    left: 8.33333%; }\r\n  .large-pull-1 {\r\n    position: relative;\r\n    left: -8.33333%; }\r\n  .large-offset-0 {\r\n    margin-left: 0%; }\r\n  .large-2 {\r\n    width: 16.66667%; }\r\n  .large-push-2 {\r\n    position: relative;\r\n    left: 16.66667%; }\r\n  .large-pull-2 {\r\n    position: relative;\r\n    left: -16.66667%; }\r\n  .large-offset-1 {\r\n    margin-left: 8.33333%; }\r\n  .large-3 {\r\n    width: 25%; }\r\n  .large-push-3 {\r\n    position: relative;\r\n    left: 25%; }\r\n  .large-pull-3 {\r\n    position: relative;\r\n    left: -25%; }\r\n  .large-offset-2 {\r\n    margin-left: 16.66667%; }\r\n  .large-4 {\r\n    width: 33.33333%; }\r\n  .large-push-4 {\r\n    position: relative;\r\n    left: 33.33333%; }\r\n  .large-pull-4 {\r\n    position: relative;\r\n    left: -33.33333%; }\r\n  .large-offset-3 {\r\n    margin-left: 25%; }\r\n  .large-5 {\r\n    width: 41.66667%; }\r\n  .large-push-5 {\r\n    position: relative;\r\n    left: 41.66667%; }\r\n  .large-pull-5 {\r\n    position: relative;\r\n    left: -41.66667%; }\r\n  .large-offset-4 {\r\n    margin-left: 33.33333%; }\r\n  .large-6 {\r\n    width: 50%; }\r\n  .large-push-6 {\r\n    position: relative;\r\n    left: 50%; }\r\n  .large-pull-6 {\r\n    position: relative;\r\n    left: -50%; }\r\n  .large-offset-5 {\r\n    margin-left: 41.66667%; }\r\n  .large-7 {\r\n    width: 58.33333%; }\r\n  .large-push-7 {\r\n    position: relative;\r\n    left: 58.33333%; }\r\n  .large-pull-7 {\r\n    position: relative;\r\n    left: -58.33333%; }\r\n  .large-offset-6 {\r\n    margin-left: 50%; }\r\n  .large-8 {\r\n    width: 66.66667%; }\r\n  .large-push-8 {\r\n    position: relative;\r\n    left: 66.66667%; }\r\n  .large-pull-8 {\r\n    position: relative;\r\n    left: -66.66667%; }\r\n  .large-offset-7 {\r\n    margin-left: 58.33333%; }\r\n  .large-9 {\r\n    width: 75%; }\r\n  .large-push-9 {\r\n    position: relative;\r\n    left: 75%; }\r\n  .large-pull-9 {\r\n    position: relative;\r\n    left: -75%; }\r\n  .large-offset-8 {\r\n    margin-left: 66.66667%; }\r\n  .large-10 {\r\n    width: 83.33333%; }\r\n  .large-push-10 {\r\n    position: relative;\r\n    left: 83.33333%; }\r\n  .large-pull-10 {\r\n    position: relative;\r\n    left: -83.33333%; }\r\n  .large-offset-9 {\r\n    margin-left: 75%; }\r\n  .large-11 {\r\n    width: 91.66667%; }\r\n  .large-push-11 {\r\n    position: relative;\r\n    left: 91.66667%; }\r\n  .large-pull-11 {\r\n    position: relative;\r\n    left: -91.66667%; }\r\n  .large-offset-10 {\r\n    margin-left: 83.33333%; }\r\n  .large-12 {\r\n    width: 100%; }\r\n  .large-offset-11 {\r\n    margin-left: 91.66667%; }\r\n  .large-up-1 > .column, .large-up-1 > .columns {\r\n    float: left;\r\n    width: 100%; }\r\n    .large-up-1 > .column:nth-of-type(1n), .large-up-1 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-1 > .column:nth-of-type(1n+1), .large-up-1 > .columns:nth-of-type(1n+1) {\r\n      clear: both; }\r\n    .large-up-1 > .column:last-child, .large-up-1 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-2 > .column, .large-up-2 > .columns {\r\n    float: left;\r\n    width: 50%; }\r\n    .large-up-2 > .column:nth-of-type(1n), .large-up-2 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-2 > .column:nth-of-type(2n+1), .large-up-2 > .columns:nth-of-type(2n+1) {\r\n      clear: both; }\r\n    .large-up-2 > .column:last-child, .large-up-2 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-3 > .column, .large-up-3 > .columns {\r\n    float: left;\r\n    width: 33.33333%; }\r\n    .large-up-3 > .column:nth-of-type(1n), .large-up-3 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-3 > .column:nth-of-type(3n+1), .large-up-3 > .columns:nth-of-type(3n+1) {\r\n      clear: both; }\r\n    .large-up-3 > .column:last-child, .large-up-3 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-4 > .column, .large-up-4 > .columns {\r\n    float: left;\r\n    width: 25%; }\r\n    .large-up-4 > .column:nth-of-type(1n), .large-up-4 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-4 > .column:nth-of-type(4n+1), .large-up-4 > .columns:nth-of-type(4n+1) {\r\n      clear: both; }\r\n    .large-up-4 > .column:last-child, .large-up-4 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-5 > .column, .large-up-5 > .columns {\r\n    float: left;\r\n    width: 20%; }\r\n    .large-up-5 > .column:nth-of-type(1n), .large-up-5 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-5 > .column:nth-of-type(5n+1), .large-up-5 > .columns:nth-of-type(5n+1) {\r\n      clear: both; }\r\n    .large-up-5 > .column:last-child, .large-up-5 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-6 > .column, .large-up-6 > .columns {\r\n    float: left;\r\n    width: 16.66667%; }\r\n    .large-up-6 > .column:nth-of-type(1n), .large-up-6 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-6 > .column:nth-of-type(6n+1), .large-up-6 > .columns:nth-of-type(6n+1) {\r\n      clear: both; }\r\n    .large-up-6 > .column:last-child, .large-up-6 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-7 > .column, .large-up-7 > .columns {\r\n    float: left;\r\n    width: 14.28571%; }\r\n    .large-up-7 > .column:nth-of-type(1n), .large-up-7 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-7 > .column:nth-of-type(7n+1), .large-up-7 > .columns:nth-of-type(7n+1) {\r\n      clear: both; }\r\n    .large-up-7 > .column:last-child, .large-up-7 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-8 > .column, .large-up-8 > .columns {\r\n    float: left;\r\n    width: 12.5%; }\r\n    .large-up-8 > .column:nth-of-type(1n), .large-up-8 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-8 > .column:nth-of-type(8n+1), .large-up-8 > .columns:nth-of-type(8n+1) {\r\n      clear: both; }\r\n    .large-up-8 > .column:last-child, .large-up-8 > .columns:last-child {\r\n      float: left; }\r\n  .large-collapse > .column, .large-collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n  .large-collapse .row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .expanded.row .large-collapse.row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .large-uncollapse > .column, .large-uncollapse > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n  .large-centered {\r\n    margin-right: auto;\r\n    margin-left: auto; }\r\n    .large-centered, .large-centered:last-child:not(:first-child) {\r\n      float: none;\r\n      clear: both; }\r\n  .large-uncentered,\r\n  .large-push-0,\r\n  .large-pull-0 {\r\n    position: static;\r\n    float: left;\r\n    margin-right: 0;\r\n    margin-left: 0; } }\r\n\r\n.column-block {\r\n  margin-bottom: 1.25rem; }\r\n  .column-block > :last-child {\r\n    margin-bottom: 0; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .column-block {\r\n      margin-bottom: 1.875rem; }\r\n      .column-block > :last-child {\r\n        margin-bottom: 0; } }\r\n\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\np,\r\nblockquote,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n  font-size: inherit;\r\n  line-height: 1.6;\r\n  text-rendering: optimizeLegibility; }\r\n\r\nem,\r\ni {\r\n  font-style: italic;\r\n  line-height: inherit; }\r\n\r\nstrong,\r\nb {\r\n  font-weight: bold;\r\n  line-height: inherit; }\r\n\r\nsmall {\r\n  font-size: 80%;\r\n  line-height: inherit; }\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  color: inherit;\r\n  text-rendering: optimizeLegibility; }\r\n  h1 small,\r\n  h2 small,\r\n  h3 small,\r\n  h4 small,\r\n  h5 small,\r\n  h6 small {\r\n    line-height: 0;\r\n    color: #cacaca; }\r\n\r\nh1 {\r\n  font-size: 1.5rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh2 {\r\n  font-size: 1.25rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh3 {\r\n  font-size: 1.1875rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh4 {\r\n  font-size: 1.125rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh5 {\r\n  font-size: 1.0625rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh6 {\r\n  font-size: 1rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  h1 {\r\n    font-size: 3rem; }\r\n  h2 {\r\n    font-size: 2.5rem; }\r\n  h3 {\r\n    font-size: 1.9375rem; }\r\n  h4 {\r\n    font-size: 1.5625rem; }\r\n  h5 {\r\n    font-size: 1.25rem; }\r\n  h6 {\r\n    font-size: 1rem; } }\r\n\r\na {\r\n  line-height: inherit;\r\n  color: #1779ba;\r\n  text-decoration: none;\r\n  cursor: pointer; }\r\n  a:hover, a:focus {\r\n    color: #1468a0; }\r\n  a img {\r\n    border: 0; }\r\n\r\nhr {\r\n  clear: both;\r\n  max-width: 75rem;\r\n  height: 0;\r\n  margin: 1.25rem auto;\r\n  border-top: 0;\r\n  border-right: 0;\r\n  border-bottom: 1px solid #cacaca;\r\n  border-left: 0; }\r\n\r\nul,\r\nol,\r\ndl {\r\n  margin-bottom: 1rem;\r\n  list-style-position: outside;\r\n  line-height: 1.6; }\r\n\r\nli {\r\n  font-size: inherit; }\r\n\r\nul {\r\n  margin-left: 1.25rem;\r\n  list-style-type: disc; }\r\n\r\nol {\r\n  margin-left: 1.25rem; }\r\n\r\nul ul, ol ul, ul ol, ol ol {\r\n  margin-left: 1.25rem;\r\n  margin-bottom: 0; }\r\n\r\ndl {\r\n  margin-bottom: 1rem; }\r\n  dl dt {\r\n    margin-bottom: 0.3rem;\r\n    font-weight: bold; }\r\n\r\nblockquote {\r\n  margin: 0 0 1rem;\r\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\r\n  border-left: 1px solid #cacaca; }\r\n  blockquote, blockquote p {\r\n    line-height: 1.6;\r\n    color: #8a8a8a; }\r\n\r\ncite {\r\n  display: block;\r\n  font-size: 0.8125rem;\r\n  color: #8a8a8a; }\r\n  cite:before {\r\n    content: \"\\2014   \"; }\r\n\r\nabbr {\r\n  border-bottom: 1px dotted #0a0a0a;\r\n  color: #0a0a0a;\r\n  cursor: help; }\r\n\r\nfigure {\r\n  margin: 0; }\r\n\r\ncode {\r\n  padding: 0.125rem 0.3125rem 0.0625rem;\r\n  border: 1px solid #cacaca;\r\n  background-color: #e6e6e6;\r\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\r\n  font-weight: normal;\r\n  color: #0a0a0a; }\r\n\r\nkbd {\r\n  margin: 0;\r\n  padding: 0.125rem 0.25rem 0;\r\n  background-color: #e6e6e6;\r\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\r\n  color: #0a0a0a; }\r\n\r\n.subheader {\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: normal;\r\n  line-height: 1.4;\r\n  color: #8a8a8a; }\r\n\r\n.lead {\r\n  font-size: 125%;\r\n  line-height: 1.6; }\r\n\r\n.stat {\r\n  font-size: 2.5rem;\r\n  line-height: 1; }\r\n  p + .stat {\r\n    margin-top: -1rem; }\r\n\r\n.no-bullet {\r\n  margin-left: 0;\r\n  list-style: none; }\r\n\r\n.text-left {\r\n  text-align: left; }\r\n\r\n.text-right {\r\n  text-align: right; }\r\n\r\n.text-center {\r\n  text-align: center; }\r\n\r\n.text-justify {\r\n  text-align: justify; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .medium-text-left {\r\n    text-align: left; }\r\n  .medium-text-right {\r\n    text-align: right; }\r\n  .medium-text-center {\r\n    text-align: center; }\r\n  .medium-text-justify {\r\n    text-align: justify; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .large-text-left {\r\n    text-align: left; }\r\n  .large-text-right {\r\n    text-align: right; }\r\n  .large-text-center {\r\n    text-align: center; }\r\n  .large-text-justify {\r\n    text-align: justify; } }\r\n\r\n.show-for-print {\r\n  display: none !important; }\r\n\r\n@media print {\r\n  * {\r\n    background: transparent !important;\r\n    box-shadow: none !important;\r\n    color: black !important;\r\n    text-shadow: none !important; }\r\n  .show-for-print {\r\n    display: block !important; }\r\n  .hide-for-print {\r\n    display: none !important; }\r\n  table.show-for-print {\r\n    display: table !important; }\r\n  thead.show-for-print {\r\n    display: table-header-group !important; }\r\n  tbody.show-for-print {\r\n    display: table-row-group !important; }\r\n  tr.show-for-print {\r\n    display: table-row !important; }\r\n  td.show-for-print {\r\n    display: table-cell !important; }\r\n  th.show-for-print {\r\n    display: table-cell !important; }\r\n  a,\r\n  a:visited {\r\n    text-decoration: underline; }\r\n  a[href]:after {\r\n    content: \" (\" attr(href) \")\"; }\r\n  .ir a:after,\r\n  a[href^='javascript:']:after,\r\n  a[href^='#']:after {\r\n    content: ''; }\r\n  abbr[title]:after {\r\n    content: \" (\" attr(title) \")\"; }\r\n  pre,\r\n  blockquote {\r\n    border: 1px solid #8a8a8a;\r\n    page-break-inside: avoid; }\r\n  thead {\r\n    display: table-header-group; }\r\n  tr,\r\n  img {\r\n    page-break-inside: avoid; }\r\n  img {\r\n    max-width: 100% !important; }\r\n  @page {\r\n    margin: 0.5cm; }\r\n  p,\r\n  h2,\r\n  h3 {\r\n    orphans: 3;\r\n    widows: 3; }\r\n  h2,\r\n  h3 {\r\n    page-break-after: avoid; } }\r\n\r\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\r\ntextarea {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 2.4375rem;\r\n  margin: 0 0 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  color: #0a0a0a;\r\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none; }\r\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\r\n  textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #8a8a8a;\r\n    background-color: #fefefe;\r\n    box-shadow: 0 0 5px #cacaca;\r\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n\r\ntextarea {\r\n  max-width: 100%; }\r\n  textarea[rows] {\r\n    height: auto; }\r\n\r\ninput::-webkit-input-placeholder,\r\ntextarea::-webkit-input-placeholder {\r\n  color: #cacaca; }\r\n\r\ninput:-ms-input-placeholder,\r\ntextarea:-ms-input-placeholder {\r\n  color: #cacaca; }\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  color: #cacaca; }\r\n\r\ninput:disabled, input[readonly],\r\ntextarea:disabled,\r\ntextarea[readonly] {\r\n  background-color: #e6e6e6;\r\n  cursor: not-allowed; }\r\n\r\n[type='submit'],\r\n[type='button'] {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border-radius: 0; }\r\n\r\ninput[type='search'] {\r\n  box-sizing: border-box; }\r\n\r\n[type='file'],\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  margin: 0 0 1rem; }\r\n\r\n[type='checkbox'] + label,\r\n[type='radio'] + label {\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n  margin-left: 0.5rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 0; }\r\n  [type='checkbox'] + label[for],\r\n  [type='radio'] + label[for] {\r\n    cursor: pointer; }\r\n\r\nlabel > [type='checkbox'],\r\nlabel > [type='radio'] {\r\n  margin-right: 0.5rem; }\r\n\r\n[type='file'] {\r\n  width: 100%; }\r\n\r\nlabel {\r\n  display: block;\r\n  margin: 0;\r\n  font-size: 0.875rem;\r\n  font-weight: normal;\r\n  line-height: 1.8;\r\n  color: #0a0a0a; }\r\n  label.middle {\r\n    margin: 0 0 1rem;\r\n    padding: 0.5625rem 0; }\r\n\r\n.help-text {\r\n  margin-top: -0.5rem;\r\n  font-size: 0.8125rem;\r\n  font-style: italic;\r\n  color: #0a0a0a; }\r\n\r\n.input-group {\r\n  display: table;\r\n  width: 100%;\r\n  margin-bottom: 1rem; }\r\n  .input-group > :first-child {\r\n    border-radius: 0 0 0 0; }\r\n  .input-group > :last-child > * {\r\n    border-radius: 0 0 0 0; }\r\n\r\n.input-group-label, .input-group-field, .input-group-button, .input-group-button a,\r\n.input-group-button input,\r\n.input-group-button button,\r\n.input-group-button label {\r\n  margin: 0;\r\n  white-space: nowrap;\r\n  display: table-cell;\r\n  vertical-align: middle; }\r\n\r\n.input-group-label {\r\n  padding: 0 1rem;\r\n  border: 1px solid #cacaca;\r\n  background: #e6e6e6;\r\n  color: #0a0a0a;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  width: 1%;\r\n  height: 100%; }\r\n  .input-group-label:first-child {\r\n    border-right: 0; }\r\n  .input-group-label:last-child {\r\n    border-left: 0; }\r\n\r\n.input-group-field {\r\n  border-radius: 0;\r\n  height: 2.5rem; }\r\n\r\n.input-group-button {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  text-align: center;\r\n  width: 1%;\r\n  height: 100%; }\r\n  .input-group-button a,\r\n  .input-group-button input,\r\n  .input-group-button button,\r\n  .input-group-button label {\r\n    height: 2.5rem;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    font-size: 1rem; }\r\n\r\n.input-group .input-group-button {\r\n  display: table-cell; }\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0; }\r\n\r\nlegend {\r\n  max-width: 100%;\r\n  margin-bottom: 0.5rem; }\r\n\r\n.fieldset {\r\n  margin: 1.125rem 0;\r\n  padding: 1.25rem;\r\n  border: 1px solid #cacaca; }\r\n  .fieldset legend {\r\n    margin: 0;\r\n    margin-left: -0.1875rem;\r\n    padding: 0 0.1875rem;\r\n    background: #fefefe; }\r\n\r\nselect {\r\n  height: 2.4375rem;\r\n  margin: 0 0 1rem;\r\n  padding: 0.5rem;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n  line-height: normal;\r\n  color: #0a0a0a;\r\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\r\n  background-origin: content-box;\r\n  background-position: right -1rem center;\r\n  background-repeat: no-repeat;\r\n  background-size: 9px 6px;\r\n  padding-right: 1.5rem;\r\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n  @media screen and (min-width: 0\\0) {\r\n    select {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\r\n  select:focus {\r\n    outline: none;\r\n    border: 1px solid #8a8a8a;\r\n    background-color: #fefefe;\r\n    box-shadow: 0 0 5px #cacaca;\r\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n  select:disabled {\r\n    background-color: #e6e6e6;\r\n    cursor: not-allowed; }\r\n  select::-ms-expand {\r\n    display: none; }\r\n  select[multiple] {\r\n    height: auto;\r\n    background-image: none; }\r\n\r\n.is-invalid-input:not(:focus) {\r\n  border-color: #cc4b37;\r\n  background-color: #f9ecea; }\r\n  .is-invalid-input:not(:focus)::-webkit-input-placeholder {\r\n    color: #cc4b37; }\r\n  .is-invalid-input:not(:focus):-ms-input-placeholder {\r\n    color: #cc4b37; }\r\n  .is-invalid-input:not(:focus)::placeholder {\r\n    color: #cc4b37; }\r\n\r\n.is-invalid-label {\r\n  color: #cc4b37; }\r\n\r\n.form-error {\r\n  display: none;\r\n  margin-top: -0.5rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 0.75rem;\r\n  font-weight: bold;\r\n  color: #cc4b37; }\r\n  .form-error.is-visible {\r\n    display: block; }\r\n\r\n.button {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin: 0 0 1rem 0;\r\n  padding: 0.85em 1em;\r\n  -webkit-appearance: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 0;\r\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\r\n  font-size: 0.9rem;\r\n  line-height: 1;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  background-color: #1779ba;\r\n  color: #fefefe; }\r\n  [data-whatinput='mouse'] .button {\r\n    outline: 0; }\r\n  .button:hover, .button:focus {\r\n    background-color: #14679e;\r\n    color: #fefefe; }\r\n  .button.tiny {\r\n    font-size: 0.6rem; }\r\n  .button.small {\r\n    font-size: 0.75rem; }\r\n  .button.large {\r\n    font-size: 1.25rem; }\r\n  .button.expanded {\r\n    display: block;\r\n    width: 100%;\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .button.primary {\r\n    background-color: #1779ba;\r\n    color: #fefefe; }\r\n    .button.primary:hover, .button.primary:focus {\r\n      background-color: #126195;\r\n      color: #fefefe; }\r\n  .button.secondary {\r\n    background-color: #767676;\r\n    color: #fefefe; }\r\n    .button.secondary:hover, .button.secondary:focus {\r\n      background-color: #5e5e5e;\r\n      color: #fefefe; }\r\n  .button.success {\r\n    background-color: #3adb76;\r\n    color: #0a0a0a; }\r\n    .button.success:hover, .button.success:focus {\r\n      background-color: #22bb5b;\r\n      color: #0a0a0a; }\r\n  .button.warning {\r\n    background-color: #ffae00;\r\n    color: #0a0a0a; }\r\n    .button.warning:hover, .button.warning:focus {\r\n      background-color: #cc8b00;\r\n      color: #0a0a0a; }\r\n  .button.alert {\r\n    background-color: #cc4b37;\r\n    color: #fefefe; }\r\n    .button.alert:hover, .button.alert:focus {\r\n      background-color: #a53b2a;\r\n      color: #fefefe; }\r\n  .button.hollow {\r\n    border: 1px solid #1779ba;\r\n    color: #1779ba; }\r\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\r\n      background-color: transparent; }\r\n    .button.hollow:hover, .button.hollow:focus {\r\n      border-color: #0c3d5d;\r\n      color: #0c3d5d; }\r\n    .button.hollow.primary {\r\n      border: 1px solid #1779ba;\r\n      color: #1779ba; }\r\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\r\n        border-color: #0c3d5d;\r\n        color: #0c3d5d; }\r\n    .button.hollow.secondary {\r\n      border: 1px solid #767676;\r\n      color: #767676; }\r\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\r\n        border-color: #3b3b3b;\r\n        color: #3b3b3b; }\r\n    .button.hollow.success {\r\n      border: 1px solid #3adb76;\r\n      color: #3adb76; }\r\n      .button.hollow.success:hover, .button.hollow.success:focus {\r\n        border-color: #157539;\r\n        color: #157539; }\r\n    .button.hollow.warning {\r\n      border: 1px solid #ffae00;\r\n      color: #ffae00; }\r\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\r\n        border-color: #805700;\r\n        color: #805700; }\r\n    .button.hollow.alert {\r\n      border: 1px solid #cc4b37;\r\n      color: #cc4b37; }\r\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\r\n        border-color: #67251a;\r\n        color: #67251a; }\r\n  .button.disabled, .button[disabled] {\r\n    opacity: 0.25;\r\n    cursor: not-allowed; }\r\n    .button.disabled, .button.disabled:hover, .button.disabled:focus, .button[disabled], .button[disabled]:hover, .button[disabled]:focus {\r\n      background-color: #1779ba;\r\n      color: #fefefe; }\r\n    .button.disabled.primary, .button[disabled].primary {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n      .button.disabled.primary, .button.disabled.primary:hover, .button.disabled.primary:focus, .button[disabled].primary, .button[disabled].primary:hover, .button[disabled].primary:focus {\r\n        background-color: #1779ba;\r\n        color: #fefefe; }\r\n    .button.disabled.secondary, .button[disabled].secondary {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n      .button.disabled.secondary, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\r\n        background-color: #767676;\r\n        color: #fefefe; }\r\n    .button.disabled.success, .button[disabled].success {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n      .button.disabled.success, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success, .button[disabled].success:hover, .button[disabled].success:focus {\r\n        background-color: #3adb76;\r\n        color: #0a0a0a; }\r\n    .button.disabled.warning, .button[disabled].warning {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n      .button.disabled.warning, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning, .button[disabled].warning:hover, .button[disabled].warning:focus {\r\n        background-color: #ffae00;\r\n        color: #0a0a0a; }\r\n    .button.disabled.alert, .button[disabled].alert {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n      .button.disabled.alert, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert, .button[disabled].alert:hover, .button[disabled].alert:focus {\r\n        background-color: #cc4b37;\r\n        color: #fefefe; }\r\n  .button.dropdown::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.4em;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #fefefe transparent transparent;\r\n    position: relative;\r\n    top: 0.4em;\r\n    display: inline-block;\r\n    float: right;\r\n    margin-left: 1em; }\r\n  .button.arrow-only::after {\r\n    top: -0.1em;\r\n    float: none;\r\n    margin-left: 0; }\r\n\r\n.accordion {\r\n  margin-left: 0;\r\n  background: #fefefe;\r\n  list-style-type: none; }\r\n\r\n.accordion-item:first-child > :first-child {\r\n  border-radius: 0 0 0 0; }\r\n\r\n.accordion-item:last-child > :last-child {\r\n  border-radius: 0 0 0 0; }\r\n\r\n.accordion-title {\r\n  position: relative;\r\n  display: block;\r\n  padding: 1.25rem 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-bottom: 0;\r\n  font-size: 0.75rem;\r\n  line-height: 1;\r\n  color: #1779ba; }\r\n  :last-child:not(.is-active) > .accordion-title {\r\n    border-bottom: 1px solid #e6e6e6;\r\n    border-radius: 0 0 0 0; }\r\n  .accordion-title:hover, .accordion-title:focus {\r\n    background-color: #e6e6e6; }\r\n  .accordion-title::before {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    margin-top: -0.5rem;\r\n    content: '+'; }\r\n  .is-active > .accordion-title::before {\r\n    content: '\\2013'; }\r\n\r\n.accordion-content {\r\n  display: none;\r\n  padding: 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-bottom: 0;\r\n  background-color: #fefefe;\r\n  color: #0a0a0a; }\r\n  :last-child > .accordion-content:last-child {\r\n    border-bottom: 1px solid #e6e6e6; }\r\n\r\n.is-accordion-submenu-parent > a {\r\n  position: relative; }\r\n  .is-accordion-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -3px;\r\n    right: 1rem; }\r\n\r\n.is-accordion-submenu-parent[aria-expanded='true'] > a::after {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%; }\r\n\r\n.badge {\r\n  display: inline-block;\r\n  min-width: 2.1em;\r\n  padding: 0.3em;\r\n  border-radius: 50%;\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background: #1779ba;\r\n  color: #fefefe; }\r\n  .badge.primary {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n  .badge.secondary {\r\n    background: #767676;\r\n    color: #fefefe; }\r\n  .badge.success {\r\n    background: #3adb76;\r\n    color: #0a0a0a; }\r\n  .badge.warning {\r\n    background: #ffae00;\r\n    color: #0a0a0a; }\r\n  .badge.alert {\r\n    background: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.breadcrumbs {\r\n  margin: 0 0 1rem 0;\r\n  list-style: none; }\r\n  .breadcrumbs::before, .breadcrumbs::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .breadcrumbs::after {\r\n    clear: both; }\r\n  .breadcrumbs li {\r\n    float: left;\r\n    font-size: 0.6875rem;\r\n    color: #0a0a0a;\r\n    cursor: default;\r\n    text-transform: uppercase; }\r\n    .breadcrumbs li:not(:last-child)::after {\r\n      position: relative;\r\n      top: 1px;\r\n      margin: 0 0.75rem;\r\n      opacity: 1;\r\n      content: \"/\";\r\n      color: #cacaca; }\r\n  .breadcrumbs a {\r\n    color: #1779ba; }\r\n    .breadcrumbs a:hover {\r\n      text-decoration: underline; }\r\n  .breadcrumbs .disabled {\r\n    color: #cacaca;\r\n    cursor: not-allowed; }\r\n\r\n.button-group {\r\n  margin-bottom: 1rem;\r\n  font-size: 0; }\r\n  .button-group::before, .button-group::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .button-group::after {\r\n    clear: both; }\r\n  .button-group .button {\r\n    margin: 0;\r\n    margin-right: 1px;\r\n    margin-bottom: 1px;\r\n    font-size: 0.9rem; }\r\n    .button-group .button:last-child {\r\n      margin-right: 0; }\r\n  .button-group.tiny .button {\r\n    font-size: 0.6rem; }\r\n  .button-group.small .button {\r\n    font-size: 0.75rem; }\r\n  .button-group.large .button {\r\n    font-size: 1.25rem; }\r\n  .button-group.expanded {\r\n    margin-right: -1px; }\r\n    .button-group.expanded::before, .button-group.expanded::after {\r\n      display: none; }\r\n    .button-group.expanded .button:first-child:last-child {\r\n      width: 100%; }\r\n    .button-group.expanded .button:first-child:nth-last-child(2), .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button {\r\n      display: inline-block;\r\n      width: calc(50% - 1px);\r\n      margin-right: 1px; }\r\n      .button-group.expanded .button:first-child:nth-last-child(2):last-child, .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n    .button-group.expanded .button:first-child:nth-last-child(3), .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button {\r\n      display: inline-block;\r\n      width: calc(33.33333% - 1px);\r\n      margin-right: 1px; }\r\n      .button-group.expanded .button:first-child:nth-last-child(3):last-child, .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n    .button-group.expanded .button:first-child:nth-last-child(4), .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button {\r\n      display: inline-block;\r\n      width: calc(25% - 1px);\r\n      margin-right: 1px; }\r\n      .button-group.expanded .button:first-child:nth-last-child(4):last-child, .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n    .button-group.expanded .button:first-child:nth-last-child(5), .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button {\r\n      display: inline-block;\r\n      width: calc(20% - 1px);\r\n      margin-right: 1px; }\r\n      .button-group.expanded .button:first-child:nth-last-child(5):last-child, .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n    .button-group.expanded .button:first-child:nth-last-child(6), .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button {\r\n      display: inline-block;\r\n      width: calc(16.66667% - 1px);\r\n      margin-right: 1px; }\r\n      .button-group.expanded .button:first-child:nth-last-child(6):last-child, .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n  .button-group.primary .button {\r\n    background-color: #1779ba;\r\n    color: #fefefe; }\r\n    .button-group.primary .button:hover, .button-group.primary .button:focus {\r\n      background-color: #126195;\r\n      color: #fefefe; }\r\n  .button-group.secondary .button {\r\n    background-color: #767676;\r\n    color: #fefefe; }\r\n    .button-group.secondary .button:hover, .button-group.secondary .button:focus {\r\n      background-color: #5e5e5e;\r\n      color: #fefefe; }\r\n  .button-group.success .button {\r\n    background-color: #3adb76;\r\n    color: #0a0a0a; }\r\n    .button-group.success .button:hover, .button-group.success .button:focus {\r\n      background-color: #22bb5b;\r\n      color: #0a0a0a; }\r\n  .button-group.warning .button {\r\n    background-color: #ffae00;\r\n    color: #0a0a0a; }\r\n    .button-group.warning .button:hover, .button-group.warning .button:focus {\r\n      background-color: #cc8b00;\r\n      color: #0a0a0a; }\r\n  .button-group.alert .button {\r\n    background-color: #cc4b37;\r\n    color: #fefefe; }\r\n    .button-group.alert .button:hover, .button-group.alert .button:focus {\r\n      background-color: #a53b2a;\r\n      color: #fefefe; }\r\n  .button-group.stacked .button, .button-group.stacked-for-small .button, .button-group.stacked-for-medium .button {\r\n    width: 100%; }\r\n    .button-group.stacked .button:last-child, .button-group.stacked-for-small .button:last-child, .button-group.stacked-for-medium .button:last-child {\r\n      margin-bottom: 0; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .button-group.stacked-for-small .button {\r\n      width: auto;\r\n      margin-bottom: 0; } }\r\n  @media print, screen and (min-width: 64em) {\r\n    .button-group.stacked-for-medium .button {\r\n      width: auto;\r\n      margin-bottom: 0; } }\r\n  @media screen and (max-width: 39.9375em) {\r\n    .button-group.stacked-for-small.expanded {\r\n      display: block; }\r\n      .button-group.stacked-for-small.expanded .button {\r\n        display: block;\r\n        margin-right: 0; } }\r\n\r\n.callout {\r\n  position: relative;\r\n  margin: 0 0 1rem 0;\r\n  padding: 1rem;\r\n  border: 1px solid rgba(10, 10, 10, 0.25);\r\n  border-radius: 0;\r\n  background-color: white;\r\n  color: #0a0a0a; }\r\n  .callout > :first-child {\r\n    margin-top: 0; }\r\n  .callout > :last-child {\r\n    margin-bottom: 0; }\r\n  .callout.primary {\r\n    background-color: #d7ecfa;\r\n    color: #0a0a0a; }\r\n  .callout.secondary {\r\n    background-color: #eaeaea;\r\n    color: #0a0a0a; }\r\n  .callout.success {\r\n    background-color: #e1faea;\r\n    color: #0a0a0a; }\r\n  .callout.warning {\r\n    background-color: #fff3d9;\r\n    color: #0a0a0a; }\r\n  .callout.alert {\r\n    background-color: #f7e4e1;\r\n    color: #0a0a0a; }\r\n  .callout.small {\r\n    padding-top: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 0.5rem; }\r\n  .callout.large {\r\n    padding-top: 3rem;\r\n    padding-right: 3rem;\r\n    padding-bottom: 3rem;\r\n    padding-left: 3rem; }\r\n\r\n.card {\r\n  margin-bottom: 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-radius: 0;\r\n  background: #fefefe;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  color: #0a0a0a; }\r\n  .card > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.card-divider {\r\n  padding: 1rem;\r\n  background: #e6e6e6; }\r\n  .card-divider > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.card-section {\r\n  padding: 1rem; }\r\n  .card-section > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.close-button {\r\n  position: absolute;\r\n  color: #8a8a8a;\r\n  cursor: pointer; }\r\n  [data-whatinput='mouse'] .close-button {\r\n    outline: 0; }\r\n  .close-button:hover, .close-button:focus {\r\n    color: #0a0a0a; }\r\n  .close-button.small {\r\n    right: 0.66rem;\r\n    top: 0.33em;\r\n    font-size: 1.5em;\r\n    line-height: 1; }\r\n  .close-button, .close-button.medium {\r\n    right: 1rem;\r\n    top: 0.5rem;\r\n    font-size: 2em;\r\n    line-height: 1; }\r\n\r\n.menu {\r\n  margin: 0;\r\n  list-style-type: none; }\r\n  .menu > li {\r\n    display: table-cell;\r\n    vertical-align: middle; }\r\n    [data-whatinput='mouse'] .menu > li {\r\n      outline: 0; }\r\n  .menu > li > a {\r\n    display: block;\r\n    padding: 0.7rem 1rem;\r\n    line-height: 1; }\r\n  .menu input,\r\n  .menu select,\r\n  .menu a,\r\n  .menu button {\r\n    margin-bottom: 0; }\r\n  .menu > li > a img,\r\n  .menu > li > a i,\r\n  .menu > li > a svg {\r\n    vertical-align: middle; }\r\n    .menu > li > a img + span,\r\n    .menu > li > a i + span,\r\n    .menu > li > a svg + span {\r\n      vertical-align: middle; }\r\n  .menu > li > a img,\r\n  .menu > li > a i,\r\n  .menu > li > a svg {\r\n    margin-right: 0.25rem;\r\n    display: inline-block; }\r\n  .menu > li, .menu.horizontal > li {\r\n    display: table-cell; }\r\n  .menu.expanded {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed; }\r\n    .menu.expanded > li:first-child:last-child {\r\n      width: 100%; }\r\n  .menu.vertical > li {\r\n    display: block; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .menu.medium-horizontal > li {\r\n      display: table-cell; }\r\n    .menu.medium-expanded {\r\n      display: table;\r\n      width: 100%;\r\n      table-layout: fixed; }\r\n      .menu.medium-expanded > li:first-child:last-child {\r\n        width: 100%; }\r\n    .menu.medium-vertical > li {\r\n      display: block; } }\r\n  @media print, screen and (min-width: 64em) {\r\n    .menu.large-horizontal > li {\r\n      display: table-cell; }\r\n    .menu.large-expanded {\r\n      display: table;\r\n      width: 100%;\r\n      table-layout: fixed; }\r\n      .menu.large-expanded > li:first-child:last-child {\r\n        width: 100%; }\r\n    .menu.large-vertical > li {\r\n      display: block; } }\r\n  .menu.simple li {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    line-height: 1; }\r\n  .menu.simple a {\r\n    padding: 0; }\r\n  .menu.simple li {\r\n    margin-left: 0;\r\n    margin-right: 1rem; }\r\n  .menu.simple.align-right li {\r\n    margin-right: 0;\r\n    margin-left: 1rem; }\r\n  .menu.align-right::before, .menu.align-right::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .menu.align-right::after {\r\n    clear: both; }\r\n  .menu.align-right > li {\r\n    float: right; }\r\n  .menu.icon-top > li > a {\r\n    text-align: center; }\r\n    .menu.icon-top > li > a img,\r\n    .menu.icon-top > li > a i,\r\n    .menu.icon-top > li > a svg {\r\n      display: block;\r\n      margin: 0 auto 0.25rem; }\r\n  .menu.icon-top.vertical a > span {\r\n    margin: auto; }\r\n  .menu.nested {\r\n    margin-left: 1rem; }\r\n  .menu .active > a {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n  .menu.menu-bordered li {\r\n    border: 1px solid #e6e6e6; }\r\n    .menu.menu-bordered li:not(:first-child) {\r\n      border-top: 0; }\r\n  .menu.menu-hover li:hover {\r\n    background-color: #e6e6e6; }\r\n\r\n.menu-text {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  padding: 0.7rem 1rem;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: inherit; }\r\n\r\n.menu-centered {\r\n  text-align: center; }\r\n  .menu-centered > .menu {\r\n    display: inline-block;\r\n    vertical-align: top; }\r\n\r\n.no-js [data-responsive-menu] ul {\r\n  display: none; }\r\n\r\n.menu-icon {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 20px;\r\n  height: 16px;\r\n  cursor: pointer; }\r\n  .menu-icon::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #fefefe;\r\n    box-shadow: 0 7px 0 #fefefe, 0 14px 0 #fefefe;\r\n    content: ''; }\r\n  .menu-icon:hover::after {\r\n    background: #cacaca;\r\n    box-shadow: 0 7px 0 #cacaca, 0 14px 0 #cacaca; }\r\n\r\n.menu-icon.dark {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 20px;\r\n  height: 16px;\r\n  cursor: pointer; }\r\n  .menu-icon.dark::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #0a0a0a;\r\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a;\r\n    content: ''; }\r\n  .menu-icon.dark:hover::after {\r\n    background: #8a8a8a;\r\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\r\n\r\n.is-drilldown {\r\n  position: relative;\r\n  overflow: hidden; }\r\n  .is-drilldown li {\r\n    display: block; }\r\n  .is-drilldown.animate-height {\r\n    transition: height 0.5s; }\r\n\r\n.is-drilldown-submenu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100%;\r\n  z-index: -1;\r\n  width: 100%;\r\n  background: #fefefe;\r\n  transition: -webkit-transform 0.15s linear;\r\n  transition: transform 0.15s linear;\r\n  transition: transform 0.15s linear, -webkit-transform 0.15s linear; }\r\n  .is-drilldown-submenu.is-active {\r\n    z-index: 1;\r\n    display: block;\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%); }\r\n  .is-drilldown-submenu.is-closing {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%); }\r\n\r\n.drilldown-submenu-cover-previous {\r\n  min-height: 100%; }\r\n\r\n.is-drilldown-submenu-parent > a {\r\n  position: relative; }\r\n  .is-drilldown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -6px;\r\n    right: 1rem; }\r\n\r\n.js-drilldown-back > a::before {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-left-width: 0;\r\n  border-right-style: solid;\r\n  border-color: transparent #1779ba transparent transparent;\r\n  border-left-width: 0;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 0.75rem;\r\n  border-left-width: 0; }\r\n\r\n.dropdown-pane {\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: block;\r\n  width: 300px;\r\n  padding: 1rem;\r\n  visibility: hidden;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  font-size: 1rem; }\r\n  .dropdown-pane.is-open {\r\n    visibility: visible; }\r\n\r\n.dropdown-pane.tiny {\r\n  width: 100px; }\r\n\r\n.dropdown-pane.small {\r\n  width: 200px; }\r\n\r\n.dropdown-pane.large {\r\n  width: 400px; }\r\n\r\n.dropdown.menu > li.opens-left > .is-dropdown-submenu {\r\n  top: 100%;\r\n  right: 0;\r\n  left: auto; }\r\n\r\n.dropdown.menu > li.opens-right > .is-dropdown-submenu {\r\n  top: 100%;\r\n  right: auto;\r\n  left: 0; }\r\n\r\n.dropdown.menu > li.is-dropdown-submenu-parent > a {\r\n  position: relative;\r\n  padding-right: 1.5rem; }\r\n\r\n.dropdown.menu > li.is-dropdown-submenu-parent > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-bottom-width: 0;\r\n  border-top-style: solid;\r\n  border-color: #1779ba transparent transparent;\r\n  right: 5px;\r\n  margin-top: -3px; }\r\n\r\n[data-whatinput='mouse'] .dropdown.menu a {\r\n  outline: 0; }\r\n\r\n.no-js .dropdown.menu ul {\r\n  display: none; }\r\n\r\n.dropdown.menu.vertical > li .is-dropdown-submenu {\r\n  top: 0; }\r\n\r\n.dropdown.menu.vertical > li.opens-left > .is-dropdown-submenu {\r\n  right: 100%;\r\n  left: auto; }\r\n\r\n.dropdown.menu.vertical > li.opens-right > .is-dropdown-submenu {\r\n  right: auto;\r\n  left: 100%; }\r\n\r\n.dropdown.menu.vertical > li > a::after {\r\n  right: 14px; }\r\n\r\n.dropdown.menu.vertical > li.opens-left > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-left-width: 0;\r\n  border-right-style: solid;\r\n  border-color: transparent #1779ba transparent transparent; }\r\n\r\n.dropdown.menu.vertical > li.opens-right > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-right-width: 0;\r\n  border-left-style: solid;\r\n  border-color: transparent transparent transparent #1779ba; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .dropdown.menu.medium-horizontal > li.opens-left > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: 0;\r\n    left: auto; }\r\n  .dropdown.menu.medium-horizontal > li.opens-right > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: auto;\r\n    left: 0; }\r\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a {\r\n    position: relative;\r\n    padding-right: 1.5rem; }\r\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    right: 5px;\r\n    margin-top: -3px; }\r\n  .dropdown.menu.medium-vertical > li .is-dropdown-submenu {\r\n    top: 0; }\r\n  .dropdown.menu.medium-vertical > li.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n  .dropdown.menu.medium-vertical > li.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n  .dropdown.menu.medium-vertical > li > a::after {\r\n    right: 14px; }\r\n  .dropdown.menu.medium-vertical > li.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n  .dropdown.menu.medium-vertical > li.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .dropdown.menu.large-horizontal > li.opens-left > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: 0;\r\n    left: auto; }\r\n  .dropdown.menu.large-horizontal > li.opens-right > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: auto;\r\n    left: 0; }\r\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a {\r\n    position: relative;\r\n    padding-right: 1.5rem; }\r\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    right: 5px;\r\n    margin-top: -3px; }\r\n  .dropdown.menu.large-vertical > li .is-dropdown-submenu {\r\n    top: 0; }\r\n  .dropdown.menu.large-vertical > li.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n  .dropdown.menu.large-vertical > li.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n  .dropdown.menu.large-vertical > li > a::after {\r\n    right: 14px; }\r\n  .dropdown.menu.large-vertical > li.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n  .dropdown.menu.large-vertical > li.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; } }\r\n\r\n.dropdown.menu.align-right .is-dropdown-submenu.first-sub {\r\n  top: 100%;\r\n  right: 0;\r\n  left: auto; }\r\n\r\n.is-dropdown-menu.vertical {\r\n  width: 100px; }\r\n  .is-dropdown-menu.vertical.align-right {\r\n    float: right; }\r\n\r\n.is-dropdown-submenu-parent {\r\n  position: relative; }\r\n  .is-dropdown-submenu-parent a::after {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    margin-top: -6px; }\r\n  .is-dropdown-submenu-parent.opens-inner > .is-dropdown-submenu {\r\n    top: 100%;\r\n    left: auto; }\r\n  .is-dropdown-submenu-parent.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n  .is-dropdown-submenu-parent.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n\r\n.is-dropdown-submenu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100%;\r\n  z-index: 1;\r\n  display: none;\r\n  min-width: 200px;\r\n  border: 1px solid #cacaca;\r\n  background: #fefefe; }\r\n  .is-dropdown-submenu .is-dropdown-submenu-parent > a::after {\r\n    right: 14px; }\r\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; }\r\n  .is-dropdown-submenu .is-dropdown-submenu {\r\n    margin-top: -1px; }\r\n  .is-dropdown-submenu > li {\r\n    width: 100%; }\r\n  .is-dropdown-submenu.js-dropdown-active {\r\n    display: block; }\r\n\r\n.responsive-embed,\r\n.flex-video {\r\n  position: relative;\r\n  height: 0;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 75%;\r\n  overflow: hidden; }\r\n  .responsive-embed iframe,\r\n  .responsive-embed object,\r\n  .responsive-embed embed,\r\n  .responsive-embed video,\r\n  .flex-video iframe,\r\n  .flex-video object,\r\n  .flex-video embed,\r\n  .flex-video video {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%; }\r\n  .responsive-embed.widescreen,\r\n  .flex-video.widescreen {\r\n    padding-bottom: 56.25%; }\r\n\r\n.label {\r\n  display: inline-block;\r\n  padding: 0.33333rem 0.5rem;\r\n  border-radius: 0;\r\n  font-size: 0.8rem;\r\n  line-height: 1;\r\n  white-space: nowrap;\r\n  cursor: default;\r\n  background: #1779ba;\r\n  color: #fefefe; }\r\n  .label.primary {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n  .label.secondary {\r\n    background: #767676;\r\n    color: #fefefe; }\r\n  .label.success {\r\n    background: #3adb76;\r\n    color: #0a0a0a; }\r\n  .label.warning {\r\n    background: #ffae00;\r\n    color: #0a0a0a; }\r\n  .label.alert {\r\n    background: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.media-object {\r\n  display: block;\r\n  margin-bottom: 1rem; }\r\n  .media-object img {\r\n    max-width: none; }\r\n  @media screen and (max-width: 39.9375em) {\r\n    .media-object.stack-for-small .media-object-section {\r\n      padding: 0;\r\n      padding-bottom: 1rem;\r\n      display: block; }\r\n      .media-object.stack-for-small .media-object-section img {\r\n        width: 100%; } }\r\n\r\n.media-object-section {\r\n  display: table-cell;\r\n  vertical-align: top; }\r\n  .media-object-section:first-child {\r\n    padding-right: 1rem; }\r\n  .media-object-section:last-child:not(:nth-child(2)) {\r\n    padding-left: 1rem; }\r\n  .media-object-section > :last-child {\r\n    margin-bottom: 0; }\r\n  .media-object-section.middle {\r\n    vertical-align: middle; }\r\n  .media-object-section.bottom {\r\n    vertical-align: bottom; }\r\n\r\n.is-off-canvas-open {\r\n  overflow: hidden; }\r\n\r\n.js-off-canvas-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: opacity 0.5s ease, visibility 0.5s ease;\r\n  background: rgba(254, 254, 254, 0.25);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  overflow: hidden; }\r\n  .js-off-canvas-overlay.is-visible {\r\n    opacity: 1;\r\n    visibility: visible; }\r\n  .js-off-canvas-overlay.is-closable {\r\n    cursor: pointer; }\r\n  .js-off-canvas-overlay.is-overlay-absolute {\r\n    position: absolute; }\r\n  .js-off-canvas-overlay.is-overlay-fixed {\r\n    position: fixed; }\r\n\r\n.off-canvas-wrapper {\r\n  position: relative;\r\n  overflow: hidden; }\r\n\r\n.off-canvas {\r\n  position: fixed;\r\n  z-index: 1;\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background: #e6e6e6; }\r\n  [data-whatinput='mouse'] .off-canvas {\r\n    outline: 0; }\r\n  .off-canvas.is-transition-overlap {\r\n    z-index: 10; }\r\n    .off-canvas.is-transition-overlap.is-open {\r\n      box-shadow: 0 0 10px rgba(10, 10, 10, 0.7); }\r\n  .off-canvas.is-open {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0); }\r\n\r\n.off-canvas-absolute {\r\n  position: absolute;\r\n  z-index: 1;\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background: #e6e6e6; }\r\n  [data-whatinput='mouse'] .off-canvas-absolute {\r\n    outline: 0; }\r\n  .off-canvas-absolute.is-transition-overlap {\r\n    z-index: 10; }\r\n    .off-canvas-absolute.is-transition-overlap.is-open {\r\n      box-shadow: 0 0 10px rgba(10, 10, 10, 0.7); }\r\n  .off-canvas-absolute.is-open {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0); }\r\n\r\n.position-left {\r\n  top: 0;\r\n  left: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  -webkit-transform: translateX(-250px);\r\n          transform: translateX(-250px);\r\n  overflow-y: auto; }\r\n  .position-left.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateX(250px);\r\n            transform: translateX(250px); }\r\n  .position-left.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 1px;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n  .position-left.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-right {\r\n  top: 0;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  -webkit-transform: translateX(250px);\r\n          transform: translateX(250px);\r\n  overflow-y: auto; }\r\n  .position-right.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateX(-250px);\r\n            transform: translateX(-250px); }\r\n  .position-right.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 1px;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n  .position-right.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-top {\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 250px;\r\n  -webkit-transform: translateY(-250px);\r\n          transform: translateY(-250px);\r\n  overflow-x: auto; }\r\n  .position-top.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateY(250px);\r\n            transform: translateY(250px); }\r\n  .position-top.is-transition-push::after {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n  .position-top.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-bottom {\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 250px;\r\n  -webkit-transform: translateY(250px);\r\n          transform: translateY(250px);\r\n  overflow-x: auto; }\r\n  .position-bottom.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateY(-250px);\r\n            transform: translateY(-250px); }\r\n  .position-bottom.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n  .position-bottom.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.off-canvas-content {\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .position-left.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-left.reveal-for-medium ~ .off-canvas-content {\r\n      margin-left: 250px; }\r\n  .position-right.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-right.reveal-for-medium ~ .off-canvas-content {\r\n      margin-right: 250px; }\r\n  .position-top.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-top.reveal-for-medium ~ .off-canvas-content {\r\n      margin-top: 250px; }\r\n  .position-bottom.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-bottom.reveal-for-medium ~ .off-canvas-content {\r\n      margin-bottom: 250px; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .position-left.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-left.reveal-for-large ~ .off-canvas-content {\r\n      margin-left: 250px; }\r\n  .position-right.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-right.reveal-for-large ~ .off-canvas-content {\r\n      margin-right: 250px; }\r\n  .position-top.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-top.reveal-for-large ~ .off-canvas-content {\r\n      margin-top: 250px; }\r\n  .position-bottom.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-bottom.reveal-for-large ~ .off-canvas-content {\r\n      margin-bottom: 250px; } }\r\n\r\n.orbit {\r\n  position: relative; }\r\n\r\n.orbit-container {\r\n  position: relative;\r\n  height: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  overflow: hidden; }\r\n\r\n.orbit-slide {\r\n  width: 100%; }\r\n  .orbit-slide.no-motionui.is-active {\r\n    top: 0;\r\n    left: 0; }\r\n\r\n.orbit-figure {\r\n  margin: 0; }\r\n\r\n.orbit-image {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin: 0; }\r\n\r\n.orbit-caption {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  padding: 1rem;\r\n  background-color: rgba(10, 10, 10, 0.5);\r\n  color: #fefefe; }\r\n\r\n.orbit-previous, .orbit-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  z-index: 10;\r\n  padding: 1rem;\r\n  color: #fefefe; }\r\n  [data-whatinput='mouse'] .orbit-previous, [data-whatinput='mouse'] .orbit-next {\r\n    outline: 0; }\r\n  .orbit-previous:hover, .orbit-next:hover, .orbit-previous:active, .orbit-next:active, .orbit-previous:focus, .orbit-next:focus {\r\n    background-color: rgba(10, 10, 10, 0.5); }\r\n\r\n.orbit-previous {\r\n  left: 0; }\r\n\r\n.orbit-next {\r\n  left: auto;\r\n  right: 0; }\r\n\r\n.orbit-bullets {\r\n  position: relative;\r\n  margin-top: 0.8rem;\r\n  margin-bottom: 0.8rem;\r\n  text-align: center; }\r\n  [data-whatinput='mouse'] .orbit-bullets {\r\n    outline: 0; }\r\n  .orbit-bullets button {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    margin: 0.1rem;\r\n    border-radius: 50%;\r\n    background-color: #cacaca; }\r\n    .orbit-bullets button:hover {\r\n      background-color: #8a8a8a; }\r\n    .orbit-bullets button.is-active {\r\n      background-color: #8a8a8a; }\r\n\r\n.pagination {\r\n  margin-left: 0;\r\n  margin-bottom: 1rem; }\r\n  .pagination::before, .pagination::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .pagination::after {\r\n    clear: both; }\r\n  .pagination li {\r\n    margin-right: 0.0625rem;\r\n    border-radius: 0;\r\n    font-size: 0.875rem;\r\n    display: none; }\r\n    .pagination li:last-child, .pagination li:first-child {\r\n      display: inline-block; }\r\n    @media print, screen and (min-width: 40em) {\r\n      .pagination li {\r\n        display: inline-block; } }\r\n  .pagination a,\r\n  .pagination button {\r\n    display: block;\r\n    padding: 0.1875rem 0.625rem;\r\n    border-radius: 0;\r\n    color: #0a0a0a; }\r\n    .pagination a:hover,\r\n    .pagination button:hover {\r\n      background: #e6e6e6; }\r\n  .pagination .current {\r\n    padding: 0.1875rem 0.625rem;\r\n    background: #1779ba;\r\n    color: #fefefe;\r\n    cursor: default; }\r\n  .pagination .disabled {\r\n    padding: 0.1875rem 0.625rem;\r\n    color: #cacaca;\r\n    cursor: not-allowed; }\r\n    .pagination .disabled:hover {\r\n      background: transparent; }\r\n  .pagination .ellipsis::after {\r\n    padding: 0.1875rem 0.625rem;\r\n    content: '\\2026';\r\n    color: #0a0a0a; }\r\n\r\n.pagination-previous a::before,\r\n.pagination-previous.disabled::before {\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  content: '\\AB'; }\r\n\r\n.pagination-next a::after,\r\n.pagination-next.disabled::after {\r\n  display: inline-block;\r\n  margin-left: 0.5rem;\r\n  content: '\\BB'; }\r\n\r\n.progress {\r\n  height: 1rem;\r\n  margin-bottom: 1rem;\r\n  border-radius: 0;\r\n  background-color: #cacaca; }\r\n  .progress.primary .progress-meter {\r\n    background-color: #1779ba; }\r\n  .progress.secondary .progress-meter {\r\n    background-color: #767676; }\r\n  .progress.success .progress-meter {\r\n    background-color: #3adb76; }\r\n  .progress.warning .progress-meter {\r\n    background-color: #ffae00; }\r\n  .progress.alert .progress-meter {\r\n    background-color: #cc4b37; }\r\n\r\n.progress-meter {\r\n  position: relative;\r\n  display: block;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: #1779ba; }\r\n\r\n.progress-meter-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n  font-weight: bold;\r\n  color: #fefefe;\r\n  white-space: nowrap; }\r\n\r\n.slider {\r\n  position: relative;\r\n  height: 0.5rem;\r\n  margin-top: 1.25rem;\r\n  margin-bottom: 2.25rem;\r\n  background-color: #e6e6e6;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  -ms-touch-action: none;\r\n      touch-action: none; }\r\n\r\n.slider-fill {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: 0.5rem;\r\n  background-color: #cacaca;\r\n  transition: all 0.2s ease-in-out; }\r\n  .slider-fill.is-dragging {\r\n    transition: all 0s linear; }\r\n\r\n.slider-handle {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 1;\r\n  display: inline-block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  border-radius: 0;\r\n  background-color: #1779ba;\r\n  transition: all 0.2s ease-in-out;\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation; }\r\n  [data-whatinput='mouse'] .slider-handle {\r\n    outline: 0; }\r\n  .slider-handle:hover {\r\n    background-color: #14679e; }\r\n  .slider-handle.is-dragging {\r\n    transition: all 0s linear; }\r\n\r\n.slider.disabled,\r\n.slider[disabled] {\r\n  opacity: 0.25;\r\n  cursor: not-allowed; }\r\n\r\n.slider.vertical {\r\n  display: inline-block;\r\n  width: 0.5rem;\r\n  height: 12.5rem;\r\n  margin: 0 1.25rem;\r\n  -webkit-transform: scale(1, -1);\r\n          transform: scale(1, -1); }\r\n  .slider.vertical .slider-fill {\r\n    top: 0;\r\n    width: 0.5rem;\r\n    max-height: 100%; }\r\n  .slider.vertical .slider-handle {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 1.4rem;\r\n    height: 1.4rem;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%); }\r\n\r\n.sticky-container {\r\n  position: relative; }\r\n\r\n.sticky {\r\n  position: relative;\r\n  z-index: 0;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0); }\r\n\r\n.sticky.is-stuck {\r\n  position: fixed;\r\n  z-index: 5; }\r\n  .sticky.is-stuck.is-at-top {\r\n    top: 0; }\r\n  .sticky.is-stuck.is-at-bottom {\r\n    bottom: 0; }\r\n\r\n.sticky.is-anchored {\r\n  position: relative;\r\n  right: auto;\r\n  left: auto; }\r\n  .sticky.is-anchored.is-at-bottom {\r\n    bottom: 0; }\r\n\r\nbody.is-reveal-open {\r\n  overflow: hidden; }\r\n\r\nhtml.is-reveal-open,\r\nhtml.is-reveal-open body {\r\n  min-height: 100%;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; }\r\n\r\n.reveal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1005;\r\n  display: none;\r\n  background-color: rgba(10, 10, 10, 0.45);\r\n  overflow-y: scroll; }\r\n\r\n.reveal {\r\n  z-index: 1006;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  display: none;\r\n  padding: 1rem;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  position: relative;\r\n  top: 100px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  overflow-y: auto; }\r\n  [data-whatinput='mouse'] .reveal {\r\n    outline: 0; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal {\r\n      min-height: 0; } }\r\n  .reveal .column, .reveal .columns,\r\n  .reveal .columns {\r\n    min-width: 0; }\r\n  .reveal > :last-child {\r\n    margin-bottom: 0; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal {\r\n      width: 600px;\r\n      max-width: 75rem; } }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal .reveal {\r\n      right: auto;\r\n      left: auto;\r\n      margin: 0 auto; } }\r\n  .reveal.collapse {\r\n    padding: 0; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal.tiny {\r\n      width: 30%;\r\n      max-width: 75rem; } }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal.small {\r\n      width: 50%;\r\n      max-width: 75rem; } }\r\n  @media print, screen and (min-width: 40em) {\r\n    .reveal.large {\r\n      width: 90%;\r\n      max-width: 75rem; } }\r\n  .reveal.full {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    max-width: none;\r\n    height: 100%;\r\n    height: 100vh;\r\n    min-height: 100vh;\r\n    margin-left: 0;\r\n    border: 0;\r\n    border-radius: 0; }\r\n  @media screen and (max-width: 39.9375em) {\r\n    .reveal {\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      max-width: none;\r\n      height: 100%;\r\n      height: 100vh;\r\n      min-height: 100vh;\r\n      margin-left: 0;\r\n      border: 0;\r\n      border-radius: 0; } }\r\n  .reveal.without-overlay {\r\n    position: fixed; }\r\n\r\n.switch {\r\n  height: 2rem;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  outline: 0;\r\n  font-size: 0.875rem;\r\n  font-weight: bold;\r\n  color: #fefefe;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; }\r\n\r\n.switch-input {\r\n  position: absolute;\r\n  margin-bottom: 0;\r\n  opacity: 0; }\r\n\r\n.switch-paddle {\r\n  position: relative;\r\n  display: block;\r\n  width: 4rem;\r\n  height: 2rem;\r\n  border-radius: 0;\r\n  background: #cacaca;\r\n  transition: all 0.25s ease-out;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  cursor: pointer; }\r\n  input + .switch-paddle {\r\n    margin: 0; }\r\n  .switch-paddle::after {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    display: block;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n    border-radius: 0;\r\n    background: #fefefe;\r\n    transition: all 0.25s ease-out;\r\n    content: ''; }\r\n  input:checked ~ .switch-paddle {\r\n    background: #1779ba; }\r\n    input:checked ~ .switch-paddle::after {\r\n      left: 2.25rem; }\r\n  [data-whatinput='mouse'] input:focus ~ .switch-paddle {\r\n    outline: 0; }\r\n\r\n.switch-active, .switch-inactive {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%); }\r\n\r\n.switch-active {\r\n  left: 8%;\r\n  display: none; }\r\n  input:checked + label > .switch-active {\r\n    display: block; }\r\n\r\n.switch-inactive {\r\n  right: 15%; }\r\n  input:checked + label > .switch-inactive {\r\n    display: none; }\r\n\r\n.switch.tiny {\r\n  height: 1.5rem; }\r\n  .switch.tiny .switch-paddle {\r\n    width: 3rem;\r\n    height: 1.5rem;\r\n    font-size: 0.625rem; }\r\n  .switch.tiny .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 1rem;\r\n    height: 1rem; }\r\n  .switch.tiny input:checked ~ .switch-paddle::after {\r\n    left: 1.75rem; }\r\n\r\n.switch.small {\r\n  height: 1.75rem; }\r\n  .switch.small .switch-paddle {\r\n    width: 3.5rem;\r\n    height: 1.75rem;\r\n    font-size: 0.75rem; }\r\n  .switch.small .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 1.25rem;\r\n    height: 1.25rem; }\r\n  .switch.small input:checked ~ .switch-paddle::after {\r\n    left: 2rem; }\r\n\r\n.switch.large {\r\n  height: 2.5rem; }\r\n  .switch.large .switch-paddle {\r\n    width: 5rem;\r\n    height: 2.5rem;\r\n    font-size: 1rem; }\r\n  .switch.large .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 2rem;\r\n    height: 2rem; }\r\n  .switch.large input:checked ~ .switch-paddle::after {\r\n    left: 2.75rem; }\r\n\r\ntable {\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  border-radius: 0; }\r\n  table thead,\r\n  table tbody,\r\n  table tfoot {\r\n    border: 1px solid #f1f1f1;\r\n    background-color: #fefefe; }\r\n  table caption {\r\n    padding: 0.5rem 0.625rem 0.625rem;\r\n    font-weight: bold; }\r\n  table thead {\r\n    background: #f8f8f8;\r\n    color: #0a0a0a; }\r\n  table tfoot {\r\n    background: #f1f1f1;\r\n    color: #0a0a0a; }\r\n  table thead tr,\r\n  table tfoot tr {\r\n    background: transparent; }\r\n  table thead th,\r\n  table thead td,\r\n  table tfoot th,\r\n  table tfoot td {\r\n    padding: 0.5rem 0.625rem 0.625rem;\r\n    font-weight: bold;\r\n    text-align: left; }\r\n  table tbody th,\r\n  table tbody td {\r\n    padding: 0.5rem 0.625rem 0.625rem; }\r\n  table tbody tr:nth-child(even) {\r\n    border-bottom: 0;\r\n    background-color: #f1f1f1; }\r\n  table.unstriped tbody {\r\n    background-color: #fefefe; }\r\n    table.unstriped tbody tr {\r\n      border-bottom: 0;\r\n      border-bottom: 1px solid #f1f1f1;\r\n      background-color: #fefefe; }\r\n\r\n@media screen and (max-width: 63.9375em) {\r\n  table.stack thead {\r\n    display: none; }\r\n  table.stack tfoot {\r\n    display: none; }\r\n  table.stack tr,\r\n  table.stack th,\r\n  table.stack td {\r\n    display: block; }\r\n  table.stack td {\r\n    border-top: 0; } }\r\n\r\ntable.scroll {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto; }\r\n\r\ntable.hover thead tr:hover {\r\n  background-color: #f3f3f3; }\r\n\r\ntable.hover tfoot tr:hover {\r\n  background-color: #ececec; }\r\n\r\ntable.hover tbody tr:hover {\r\n  background-color: #f9f9f9; }\r\n\r\ntable.hover:not(.unstriped) tr:nth-of-type(even):hover {\r\n  background-color: #ececec; }\r\n\r\n.table-scroll {\r\n  overflow-x: auto; }\r\n  .table-scroll table {\r\n    width: auto; }\r\n\r\n.tabs {\r\n  margin: 0;\r\n  border: 1px solid #e6e6e6;\r\n  background: #fefefe;\r\n  list-style-type: none; }\r\n  .tabs::before, .tabs::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .tabs::after {\r\n    clear: both; }\r\n\r\n.tabs.vertical > li {\r\n  display: block;\r\n  float: none;\r\n  width: auto; }\r\n\r\n.tabs.simple > li > a {\r\n  padding: 0; }\r\n  .tabs.simple > li > a:hover {\r\n    background: transparent; }\r\n\r\n.tabs.primary {\r\n  background: #1779ba; }\r\n  .tabs.primary > li > a {\r\n    color: #fefefe; }\r\n    .tabs.primary > li > a:hover, .tabs.primary > li > a:focus {\r\n      background: #1673b1; }\r\n\r\n.tabs-title {\r\n  float: left; }\r\n  .tabs-title > a {\r\n    display: block;\r\n    padding: 1.25rem 1.5rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1;\r\n    color: #1779ba; }\r\n    .tabs-title > a:hover {\r\n      background: #fefefe;\r\n      color: #1468a0; }\r\n    .tabs-title > a:focus, .tabs-title > a[aria-selected='true'] {\r\n      background: #e6e6e6;\r\n      color: #1779ba; }\r\n\r\n.tabs-content {\r\n  border: 1px solid #e6e6e6;\r\n  border-top: 0;\r\n  background: #fefefe;\r\n  color: #0a0a0a;\r\n  transition: all 0.5s ease; }\r\n\r\n.tabs-content.vertical {\r\n  border: 1px solid #e6e6e6;\r\n  border-left: 0; }\r\n\r\n.tabs-panel {\r\n  display: none;\r\n  padding: 1rem; }\r\n  .tabs-panel[aria-hidden=\"false\"] {\r\n    display: block; }\r\n\r\n.thumbnail {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n  border: solid 4px #fefefe;\r\n  border-radius: 0;\r\n  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);\r\n  line-height: 0; }\r\n\r\na.thumbnail {\r\n  transition: box-shadow 200ms ease-out; }\r\n  a.thumbnail:hover, a.thumbnail:focus {\r\n    box-shadow: 0 0 6px 1px rgba(23, 121, 186, 0.5); }\r\n  a.thumbnail image {\r\n    box-shadow: none; }\r\n\r\n.title-bar {\r\n  padding: 0.5rem;\r\n  background: #0a0a0a;\r\n  color: #fefefe; }\r\n  .title-bar::before, .title-bar::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .title-bar::after {\r\n    clear: both; }\r\n  .title-bar .menu-icon {\r\n    margin-left: 0.25rem;\r\n    margin-right: 0.25rem; }\r\n\r\n.title-bar-left {\r\n  float: left; }\r\n\r\n.title-bar-right {\r\n  float: right;\r\n  text-align: right; }\r\n\r\n.title-bar-title {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  font-weight: bold; }\r\n\r\n.has-tip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: dotted 1px #8a8a8a;\r\n  font-weight: bold;\r\n  cursor: help; }\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  top: calc(100% + 0.6495rem);\r\n  z-index: 1200;\r\n  max-width: 10rem;\r\n  padding: 0.75rem;\r\n  border-radius: 0;\r\n  background-color: #0a0a0a;\r\n  font-size: 80%;\r\n  color: #fefefe; }\r\n  .tooltip::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-top-width: 0;\r\n    border-bottom-style: solid;\r\n    border-color: transparent transparent #0a0a0a;\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%); }\r\n  .tooltip.top::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #0a0a0a transparent transparent;\r\n    top: 100%;\r\n    bottom: auto; }\r\n  .tooltip.left::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #0a0a0a;\r\n    top: 50%;\r\n    bottom: auto;\r\n    left: 100%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); }\r\n  .tooltip.right::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #0a0a0a transparent transparent;\r\n    top: 50%;\r\n    right: 100%;\r\n    bottom: auto;\r\n    left: auto;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); }\r\n\r\n.top-bar {\r\n  padding: 0.5rem; }\r\n  .top-bar::before, .top-bar::after {\r\n    display: table;\r\n    content: ' '; }\r\n  .top-bar::after {\r\n    clear: both; }\r\n  .top-bar,\r\n  .top-bar ul {\r\n    background-color: #e6e6e6; }\r\n  .top-bar input {\r\n    max-width: 200px;\r\n    margin-right: 1rem; }\r\n  .top-bar .input-group-field {\r\n    width: 100%;\r\n    margin-right: 0; }\r\n  .top-bar input.button {\r\n    width: auto; }\r\n  .top-bar .top-bar-left,\r\n  .top-bar .top-bar-right {\r\n    width: 100%; }\r\n  @media print, screen and (min-width: 40em) {\r\n    .top-bar .top-bar-left,\r\n    .top-bar .top-bar-right {\r\n      width: auto; } }\r\n  @media screen and (max-width: 63.9375em) {\r\n    .top-bar.stacked-for-medium .top-bar-left,\r\n    .top-bar.stacked-for-medium .top-bar-right {\r\n      width: 100%; } }\r\n  @media screen and (max-width: 74.9375em) {\r\n    .top-bar.stacked-for-large .top-bar-left,\r\n    .top-bar.stacked-for-large .top-bar-right {\r\n      width: 100%; } }\r\n\r\n.top-bar-title {\r\n  display: inline-block;\r\n  float: left;\r\n  padding: 0.5rem 1rem 0.5rem 0; }\r\n  .top-bar-title .menu-icon {\r\n    bottom: 2px; }\r\n\r\n.top-bar-left {\r\n  float: left; }\r\n\r\n.top-bar-right {\r\n  float: right; }\r\n\r\n.hide {\r\n  display: none !important; }\r\n\r\n.invisible {\r\n  visibility: hidden; }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n  .hide-for-small-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 0em), screen and (min-width: 40em) {\r\n  .show-for-small-only {\r\n    display: none !important; } }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .hide-for-medium {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n  .show-for-medium {\r\n    display: none !important; } }\r\n\r\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\r\n  .hide-for-medium-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 39.9375em), screen and (min-width: 64em) {\r\n  .show-for-medium-only {\r\n    display: none !important; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .hide-for-large {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 63.9375em) {\r\n  .show-for-large {\r\n    display: none !important; } }\r\n\r\n@media screen and (min-width: 64em) and (max-width: 74.9375em) {\r\n  .hide-for-large-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 63.9375em), screen and (min-width: 75em) {\r\n  .show-for-large-only {\r\n    display: none !important; } }\r\n\r\n.show-for-sr,\r\n.show-on-focus {\r\n  position: absolute !important;\r\n  width: 1px;\r\n  height: 1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0); }\r\n\r\n.show-on-focus:active, .show-on-focus:focus {\r\n  position: static !important;\r\n  width: auto;\r\n  height: auto;\r\n  overflow: visible;\r\n  clip: auto; }\r\n\r\n.show-for-landscape,\r\n.hide-for-portrait {\r\n  display: block !important; }\r\n  @media screen and (orientation: landscape) {\r\n    .show-for-landscape,\r\n    .hide-for-portrait {\r\n      display: block !important; } }\r\n  @media screen and (orientation: portrait) {\r\n    .show-for-landscape,\r\n    .hide-for-portrait {\r\n      display: none !important; } }\r\n\r\n.hide-for-landscape,\r\n.show-for-portrait {\r\n  display: none !important; }\r\n  @media screen and (orientation: landscape) {\r\n    .hide-for-landscape,\r\n    .show-for-portrait {\r\n      display: none !important; } }\r\n  @media screen and (orientation: portrait) {\r\n    .hide-for-landscape,\r\n    .show-for-portrait {\r\n      display: block !important; } }\r\n\r\n.float-left {\r\n  float: left !important; }\r\n\r\n.float-right {\r\n  float: right !important; }\r\n\r\n.float-center {\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n\r\n.clearfix::before, .clearfix::after {\r\n  display: table;\r\n  content: ' '; }\r\n\r\n.clearfix::after {\r\n  clear: both; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storedetail/storedetail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"!name; else forminfo\">\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\n      <div class=\"form-container\">\n        <div class=\"row columns\">\n          <h1>Store Details </h1>\n          <p>\n              This is where you add a store and its \n              details and its coupons. \n              <br/>\n              <!--\n              <label>Secret\n                  <input type=\"text\" formControlName=\"secret\">\n              </label>\n            -->\n            <a routerLink=\"/\">\n              <md-icon class=\"example-icon\">home</md-icon> \n          </a>\n              <button (click)=\"goHome()\">Home <i class=\"material-icons\">home</i></button>\n              <button (click)=\"save()\">Save  <i class=\"material-icons\">save</i></button>\n            </p>\n  \n          <label>Name\n            <input type=\"text\" formControlName=\"name\">\n          </label>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">{{ titleAlert }}</div>\n  \n          <label>Description\n              <textarea formControlName=\"description\"></textarea>\n          </label>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['description'].valid \n            && rForm.controls['description'].touched\">\n            You must specify a description that's between 30 and 500 characters.\n          </div>\n\n          <label for=\"validate\">Minimum of 3 Characters</label>\n          <input type=\"checkbox\" name=\"validate\" formControlName=\"validate\" value=\"1\"> On\n\n          <label>Store Code\n              <input type=\"text\" formControlName=\"storecode\">\n            </label>\n            <div class=\"alert\" *ngIf=\"!rForm.controls['storecode'].valid \n               && rForm.controls['storecode'].touched\">{{ titleAlert }}\n            </div>\n  <br/>\n  <label>Coupon\n      <textarea formControlName=\"coupon\"></textarea>\n  </label>\n  <div class=\"alert\" *ngIf=\"!rForm.controls['coupon'].valid \n    && rForm.controls['coupon'].touched\">\n    You must specify a description that's between 30 and 500 characters.\n  </div>\n          <input type=\"submit\" class=\"button expanded\" value=\"Submit Form\" [disabled]=\"!rForm.valid\">\n        </div>\n      </div>\n      \n    </form>\n  </div>\n  \n  <ng-template #forminfo>\n    <div class=\"form-container\">\n      <div class=\"row columns\">\n          <h1>{{ name }}</h1>\n  \n          <p>{{ description }}</p>\n      </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/storedetail/storedetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoredetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Location } from '@angular/common';


var StoredetailComponent = (function () {
    function StoredetailComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.description = '';
        this.name = '';
        this.storecode = "";
        this.coupon = "";
        //secret:string = '';
        this.titleAlert = 'This field is required';
        this.rForm = fb.group({
            'storecode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'coupon': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(500)])],
            'validate': ''
        });
    }
    StoredetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('name').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                _this.rForm.get('name').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required);
            }
            _this.rForm.get('name').updateValueAndValidity();
        });
    };
    StoredetailComponent.prototype.addPost = function (post) {
        this.description = post.description;
        this.name = post.name;
        console.log(post);
    };
    StoredetailComponent.prototype.goHome = function () {
        //this.location.back();
        //let home = ['/'];
        //this.router.navigateByUrl("/charttwo");
        this.router.navigateByUrl('/');
        //this.router.navigate(home, { replaceUrl: false, skipLocationChange: true });    
    };
    return StoredetailComponent;
}());
StoredetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-storedetail',
        template: __webpack_require__("../../../../../src/app/storedetail/storedetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/storedetail/storedetail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], StoredetailComponent);

var _a, _b;
//# sourceMappingURL=storedetail.component.js.map

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
        styles: [__webpack_require__("../../../../../src/app/towndetail/towndetail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_town_service__["a" /* TownService */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storedetail_storedetail_component__ = __webpack_require__("../../../../../src/app/storedetail/storedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charttwo_charttwo_component__ = __webpack_require__("../../../../../src/app/charttwo/charttwo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    //{ path: '', redirectTo: '/detail', pathMatch: 'full' },
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/charttwo', pathMatch: 'full' },
    { path: 'charttwo', component: __WEBPACK_IMPORTED_MODULE_4__charttwo_charttwo_component__["a" /* CharttwoComponent */] },
    { path: 'charttwo/:id', component: __WEBPACK_IMPORTED_MODULE_4__charttwo_charttwo_component__["a" /* CharttwoComponent */] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_2__towndetail_towndetail_component__["a" /* TowndetailComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__towndetail_towndetail_component__["a" /* TowndetailComponent */] },
    { path: 'store/:id', component: __WEBPACK_IMPORTED_MODULE_3__storedetail_storedetail_component__["a" /* StoredetailComponent */] },
    //{ path: '**', component: CharttwoComponent }
    { path: '**', redirectTo: '/charttwo', pathMatch: 'full' },
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