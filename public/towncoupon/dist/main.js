(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-fill-remaining-space {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  button {\r\n  min-height: 23px !important;\r\n  min-width: 46px !important;\r\n  font-size: 10px !important;\r\n  line-height: 0px; \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar style=\"height:30px;\" color=\"primary\">\n               \n  <mat-icon class=\"example-icon\" (click)=\"adminAddStoreDetail('')\">favorite</mat-icon>\n  <a routerLink=\"/\">\n      <mat-icon class=\"example-icon\">home</mat-icon> \n  </a>\n\n  <button mat-button id=\"admin\" name=\"admin\" mat-raised-button color=\"accent\" (click)=\"adminTown($event)\">\n          T</button>\n\n  <button mat-button id=\"s1\" name=\"s1\" mat-primary (click)=\"sendMsg($event)\">\n              S1</button>      \n  <button mat-button id=\"s1\" name=\"s2\"  (click)=\"sendMsg($event)\">\n              S2</button> \n              \n  <span style=\"margin-left: 5px;\">{{town}} </span>\n\n  <span class=\"example-spacer\"></span>\n  <mat-icon class=\"material-icon\" (click)=\"adminAddStoreDetail('gridList')\">view_list</mat-icon>\n  <mat-icon class=\"material-icon\" (click)=\"adminAddStoreDetail('gridDashboard')\">dashboard</mat-icon>\n  <mat-icon class=\"material-icon\" (click)=\"adminSelectTown('')\">search</mat-icon>\n\n  <button mat-raised-button color=\"accent\" (click)=\"adminAddStoreDetail('addStore')\">\n      <i class=\"material-icons\">add_circle_outline</i>Store</button>        \n      \n</mat-toolbar>       \n<router-outlet></router-outlet>\n<span style=\"font-size: 40%\">v0.13 &copy; 2017 Gracy girl enterprises</span> \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_town_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/town.service */ "./src/app/services/town.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
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
    AppComponent.prototype.sendMsg = function (event) {
        // Send msg to ___.
        this.data.changeMessage22(event.currentTarget.name);
    };
    AppComponent.prototype.adminTown = function (event) {
        var elementId = event.currentTarget.id;
        this.getCoupon('Add an establishment. ');
    };
    AppComponent.prototype.adminSelectTown = function (idType) {
        console.log("adminSelectTown(" + idType + ")");
        var id = 'b' + Date.now();
        console.log(':adminAddSelectTown', id);
        var link = ['/charttwo', id];
        this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    };
    AppComponent.prototype.adminAddStoreDetail = function (id) {
        console.log("adminAddStoreDetail(" + id + ")");
        var link = ['/store', id];
        if (id === 'gridList') {
            id = this.town;
            link = ['/storeAsaGrid', id];
        }
        if (id === 'gridDashboard') {
            id = this.town;
            link = ['/storeAsaDashboard', id];
        }
        //console.log('adminAddStoreDetail');
        //let id = 'tbd_id';
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
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_town_service__WEBPACK_IMPORTED_MODULE_2__["TownService"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-simple-timer */ "./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_timer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _charttwo_charttwo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charttwo/charttwo.component */ "./src/app/charttwo/charttwo.component.ts");
/* harmony import */ var _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./towndetail/towndetail.component */ "./src/app/towndetail/towndetail.component.ts");
/* harmony import */ var _townroutes_townroutes_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./townroutes/townroutes-routing.module */ "./src/app/townroutes/townroutes-routing.module.ts");
/* harmony import */ var _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storedetail/storedetail.component */ "./src/app/storedetail/storedetail.component.ts");
/* harmony import */ var _storegrid_storegrid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./storegrid/storegrid.component */ "./src/app/storegrid/storegrid.component.ts");
/* harmony import */ var _bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bigdummy/bigdummy.component */ "./src/app/bigdummy/bigdummy.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/courses.service */ "./src/app/services/courses.service.ts");
/* harmony import */ var _tableex_tableex_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tableex/tableex.component */ "./src/app/tableex/tableex.component.ts");
/* harmony import */ var _storedashboard_storedashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./storedashboard/storedashboard.component */ "./src/app/storedashboard/storedashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _charttwo_charttwo_component__WEBPACK_IMPORTED_MODULE_11__["CharttwoComponent"],
                _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_12__["TowndetailComponent"],
                _bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_16__["BigdummyComponent"],
                _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_14__["StoredetailComponent"],
                _storegrid_storegrid_component__WEBPACK_IMPORTED_MODULE_15__["StoregridComponent"],
                _tableex_tableex_component__WEBPACK_IMPORTED_MODULE_19__["TableexComponent"],
                _storedashboard_storedashboard_component__WEBPACK_IMPORTED_MODULE_20__["StoredashboardComponent"],
            ],
            entryComponents: [_bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_16__["BigdummyComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                //MaterialModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _townroutes_townroutes_routing_module__WEBPACK_IMPORTED_MODULE_13__["TownroutesRoutingModule"]
            ],
            providers: [ng2_simple_timer__WEBPACK_IMPORTED_MODULE_7__["SimpleTimer"], _services_courses_service__WEBPACK_IMPORTED_MODULE_18__["CoursesService"], _services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bigdummy/bigdummy.component.css":
/*!*************************************************!*\
  !*** ./src/app/bigdummy/bigdummy.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.bigdummy{\r\n  \r\n    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\r\n    text-align: center;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    font-size: 1.4rem;\r\n    line-height: 2rem;\r\n    letter-spacing: 0.01rem;\r\n    color: #212121;\r\n    background-color: #f5f5f5;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-rendering: optimizeLegibility;\r\n    margin:20px;\r\n  }"

/***/ }),

/***/ "./src/app/bigdummy/bigdummy.component.html":
/*!**************************************************!*\
  !*** ./src/app/bigdummy/bigdummy.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  bigdummy works!\n  <i class=\"material-icons\">attach_money</i>\n  <i class=\"material-icons\">store</i>\n  <i class=\"material-icons\">home</i>\n  <i class=\"material-icons\">save</i>\n  <mat-icon class=\"example-icon\">delete</mat-icon>\n  <img src=\"https://i.pinimg.com/736x/69/c8/9a/69c89a7e9bae6bdfa31a0e38f13cb63d--sanford-and-son-lol-funny.jpg\"\n  alt=\"Smiley face\" height=\"42\" width=\"42\">\n</p>\n\n<div class=\"bigdummy\">\n<ngx-charts-advanced-pie-chart\n[view]=\"view\"\n[scheme]=\"colorScheme\"\n[results]=\"single\"\n\n(select)=\"onSelect($event)\">\n</ngx-charts-advanced-pie-chart>\n\n</div>"

/***/ }),

/***/ "./src/app/bigdummy/bigdummy.component.ts":
/*!************************************************!*\
  !*** ./src/app/bigdummy/bigdummy.component.ts ***!
  \************************************************/
/*! exports provided: BigdummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigdummyComponent", function() { return BigdummyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/bigdummy/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BigdummyComponent = /** @class */ (function () {
    function BigdummyComponent(data) {
        this.data = data;
        this.view = [480, 130]; //[700, 400];
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_2__["single"], multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    BigdummyComponent.prototype.ngOnInit = function () {
        console.log("bigdummy:ngOnInit() ", this.data.mySession);
        //console.log("bigdummy:ngOnInit() ", this.data.get('single2'));
    };
    BigdummyComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BigdummyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bigdummy',
            template: __webpack_require__(/*! ./bigdummy.component.html */ "./src/app/bigdummy/bigdummy.component.html"),
            styles: [__webpack_require__(/*! ./bigdummy.component.css */ "./src/app/bigdummy/bigdummy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BigdummyComponent);
    return BigdummyComponent;
}());



/***/ }),

/***/ "./src/app/bigdummy/data.ts":
/*!**********************************!*\
  !*** ./src/app/bigdummy/data.ts ***!
  \**********************************/
/*! exports provided: single, multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var single = [
    {
        "name": "iPad",
        "value": 894
    },
    {
        "name": "Laptop",
        "value": 500
    },
    {
        "name": "Phone",
        "value": 120
    }
];
var multi = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 73000
            },
            {
                "name": "2011",
                "value": 89000
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 78700
            },
            {
                "name": "2011",
                "value": 82700
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 50002
            },
            {
                "name": "2011",
                "value": 58000
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/charttwo/charttwo.component.css":
/*!*************************************************!*\
  !*** ./src/app/charttwo/charttwo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, div {\r\n    font-family: arvo, sans-serif;\r\n     height: 500px;\r\n    font-size: 50%;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/charttwo/charttwo.component.html":
/*!**************************************************!*\
  !*** ./src/app/charttwo/charttwo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div style=\"height:600px; font-size: 50%\"> \n-->\n <div> \n<ngx-charts-tree-map\n\n[scheme]=\"colorScheme\"\n[results]=\"single\"\n(select)=\"onSelect($event)\">\n</ngx-charts-tree-map>\n</div> \n<div>\n<!--\n<hr/>\n<a href=\"https://swimlane.gitbooks.io/ngx-charts/content/charts/tree-map.html\">\n  bobo\n</a>\n<a href=\"https://swimlane.github.io/ngx-charts/#/ngx-charts/tree-map\">\n  bobo\n</a>\n<br/>\n<a  [routerLink]=\"['/detail', 321]\">rlink</a>\n<nav>\n  <a routerLink=\"/detail\">detail</a>\n  <a routerLink=\"/detail/z444\">get coupon</a>    \n</nav>\n<router-outlet></router-outlet>\n-->\n\n</div>"

/***/ }),

/***/ "./src/app/charttwo/charttwo.component.ts":
/*!************************************************!*\
  !*** ./src/app/charttwo/charttwo.component.ts ***!
  \************************************************/
/*! exports provided: CharttwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharttwoComponent", function() { return CharttwoComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _westfieldfood1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./westfieldfood1 */ "./src/app/charttwo/westfieldfood1.ts");
/* harmony import */ var _westfieldfood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./westfieldfood */ "./src/app/charttwo/westfieldfood.ts");
/* harmony import */ var _services_town_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/town.service */ "./src/app/services/town.service.ts");
/* harmony import */ var _common_color_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/color.helper */ "./src/common/color.helper.ts");
/* harmony import */ var _utils_color_sets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/color-sets */ "./src/utils/color-sets.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../towndetail/towndetail.component */ "./src/app/towndetail/towndetail.component.ts");
/* harmony import */ var _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../storedetail/storedetail.component */ "./src/app/storedetail/storedetail.component.ts");
/* harmony import */ var _bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bigdummy/bigdummy.component */ "./src/app/bigdummy/bigdummy.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CharttwoComponent = /** @class */ (function () {
    function CharttwoComponent(data, townService, snackBar, route, router, el) {
        this.data = data;
        this.townService = townService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.count = 123;
        this.town = 'bbb';
        // options
        //view: any[] = [320, 568]; //[700, 1400]; // [width, height]
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
        console.log('charttwo:constructor');
        console.log("\t this.resturaunts= " + this.resturaunts);
        Object.assign(this, { single: _westfieldfood1__WEBPACK_IMPORTED_MODULE_2__["single"] });
        Object.assign(this, { single2: _westfieldfood__WEBPACK_IMPORTED_MODULE_3__["single2"] });
    }
    CharttwoComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy()');
        console.log("\t this.resturaunts= " + this.resturaunts);
        clearInterval(this.timer);
        // unsubscribe
        this.msg22$.unsubscribe();
        //this.data.currentMessage22.
    };
    CharttwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.data.currentMessage.subscribe(message => this.town = message+'uuu');
        console.log('charttwo:ngOnInit()');
        console.log("***this.data.mySession = " + JSON.stringify(this.data.mySession));
        //return;
        // FM begin
        this.msg22$ = this.data.currentMessage22.subscribe(function (message) {
            console.log("\* currentMessage22: " + message);
            if (message == 's1') {
                _this.s1();
            }
            if (message == 's2') {
                _this.s2();
            }
            //this.onSelect(null);
            //this.town = message
        });
        // FM end
        console.log("this.route.params=" + JSON.stringify(this.route.params));
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) { return _this.townService.searchTown(params.get('id')); }))
            .subscribe(function (res) {
            _this.single2 = res;
            _this.s2();
            _this.setColors('RANDOM');
            console.log('*\t** this.route.paramMap');
            //this.tellEveryoneAboutTown(('wtf')); 
        });
        this.townService.searchTown('the towns').subscribe(function (res) {
            _this.single = res;
            _this.towns = res;
            _this.towns = _this.towns.map(function (item) { return item.name; });
            _this.town = 'the towns';
            _this.data.mySession["single"] = _this.town;
            _this.tellEveryoneAboutTown('the towns');
            _this.s2();
        }, function (err) {
            alert("FM err = " + err);
            console.log(err);
        });
        var delta = 12000;
        this.timer = setInterval(function () {
            //this.onSelect(null);        
            (_this.count++ % 2) ? _this.s1() : _this.s2();
            //this.single2 = this.randomizeData(this.single2);
            //console.log(`tick tock every ${delta}`);
        }, delta);
        // this.timer = setTimeout(() => 
        // {
        //   alert('this.onSelect(null)')
        //   console.log('ssssssssssss');
        // }, 500);
        //console.log('ngOnInit() ngOnInit() ngOnInit()');
    };
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
            _this.data.mySession["single2"] = town;
            _this.s2();
            //console.log("resturaunts = ", this.single2)
            // fm new 9/11
            //this.single = this.single2;
            //
            //Object.assign(this, {single2}); 
        }, function (err) {
            alert("FM err = " + err);
            console.log(err);
        });
    };
    CharttwoComponent.prototype.s1 = function () {
        console.log("s1");
        Object.assign(this, { single: _westfieldfood1__WEBPACK_IMPORTED_MODULE_2__["single"] });
        //this.randomizeData(this.single);
        //this.single[0].value =  this.single[0].value+1;
        //this.single[0].name = this.single[0].name.toUpperCase();
        this.setColors('fire');
        //this.town='Westfield(default)';
        this.tellEveryoneAboutTown('Westfield');
        //this.count++;
    };
    CharttwoComponent.prototype.s2 = function () {
        console.log("s2");
        this.tellEveryoneAboutTown(this.town);
        var wasCount = this.count;
        this.setColors('vivid');
        this.single = this.single2;
        //this.single2 = this.randomizeData(this.single2);
        //this.single2[0].value =  this.single2[0].value+wasCount; 
        //this.count++;
    };
    CharttwoComponent.prototype.onSelect = function (event) {
        //Object.assign(this, {single});
        if (event != null) {
            var town = event.name;
            if (this.towns.findIndex(function (item) { return (item.toUpperCase() == event.name.toUpperCase()); }) != -1) {
                console.log("SET single for " + town);
                //this.town=town;
                this.setResturaunts(event.name, this.single);
                // fm new 9/11
                this.single = this.single2;
                Object.assign(this, { single2: _westfieldfood__WEBPACK_IMPORTED_MODULE_3__["single2"] });
                return;
            }
            this.getCoupon(event);
            return;
        }
        if (this.count++ % 2) {
            console.log("onSelect count(" + this.count + ")");
            // Object.assign(this, {single});
            //this.single[0].value =  this.single[0].value+1;
            this.setColors('fire');
            //this.town='Westfield(default)';
            this.tellEveryoneAboutTown('Westfield');
        }
        else {
            //console.log("\t ***** ***** ", event, this.count);
            console.log("onSelect count(" + this.count + ")");
            this.tellEveryoneAboutTown(this.town);
            var wasCount = this.count;
            this.setColors('vivid');
            this.single = this.single2;
            //console.log("2 this.single= ", this.single);
            //this.single[0].value =  this.single[0].value+wasCount; 
            // this.townService.searchGit('mastronardi').subscribe(      
            //     res => {            
            //       //console.log("\t", event, this.count);
            //       this.setColors('vivid');
            //       this.single = this.single2;  
            //       //console.log("2 this.single= ", this.single);
            //       //let name = `${this.single[0].name} ZZ`;    
            //       this.single[0].value =  this.single[0].value+wasCount;      
            //     },           
            //    err => {
            //      alert("FM err = " + err);
            //      console.log(err);
            //    }
            //   );    
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
        _bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_11__["BigdummyComponent"], { duration: 2000, });
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
    CharttwoComponent.prototype.randomizeData = function (src) {
        console.log('src ', src);
        //src.forEach(item => (item.value = item.value+1000) );
        //src = src.map((item, index) => ({name: item.name, value:  item.value+index%2}) );
        //src[3].name = src[3].name+'o-';
        //src = src;
        console.log('src ', src);
        return src;
    };
    CharttwoComponent.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    };
    CharttwoComponent.prototype.setColors = function (name) {
        if (name.toUpperCase() == 'RANDOM') {
            var iRand = this.getRandomIntInclusive(0, _utils_color_sets__WEBPACK_IMPORTED_MODULE_6__["colorSets"].length - 1);
            //console.log(iRand, colorSets[iRand].name);
            name = _utils_color_sets__WEBPACK_IMPORTED_MODULE_6__["colorSets"][iRand].name;
        }
        this.colors = new _common_color_helper__WEBPACK_IMPORTED_MODULE_5__["ColorHelper"](name, null, null); // (scheme, 'ordinal', [], null);
        this.colorScheme = { domain: this.colors.colorDomain }; //scheme; //this.colors.colorDomain; // // scheme; //this.colors;
    };
    CharttwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charttwo',
            template: __webpack_require__(/*! ./charttwo.component.html */ "./src/app/charttwo/charttwo.component.html"),
            styles: [__webpack_require__(/*! ./charttwo.component.css */ "./src/app/charttwo/charttwo.component.css")],
            providers: [_services_town_service__WEBPACK_IMPORTED_MODULE_4__["TownService"], _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_9__["TowndetailComponent"], _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_10__["StoredetailComponent"], _bigdummy_bigdummy_component__WEBPACK_IMPORTED_MODULE_11__["BigdummyComponent"]]
        })
        //@Directive({ selector: '[view]' })
        ,
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _services_town_service__WEBPACK_IMPORTED_MODULE_4__["TownService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CharttwoComponent);
    return CharttwoComponent;
}());



/***/ }),

/***/ "./src/app/charttwo/westfieldfood.ts":
/*!*******************************************!*\
  !*** ./src/app/charttwo/westfieldfood.ts ***!
  \*******************************************/
/*! exports provided: single2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single2", function() { return single2; });
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


/***/ }),

/***/ "./src/app/charttwo/westfieldfood1.ts":
/*!********************************************!*\
  !*** ./src/app/charttwo/westfieldfood1.ts ***!
  \********************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
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


/***/ }),

/***/ "./src/app/services/courses.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/courses.service.ts ***!
  \*********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesService = /** @class */ (function () {
    function CoursesService(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
    }
    CoursesService.prototype.findCourseById = function (courseId) {
        return this.http.get("/api/courses/" + courseId);
    };
    CoursesService.prototype.findAllCourses = function () {
        return this.http.get(this.path + '/api/courses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['payload']; }));
    };
    CoursesService.prototype.findAllCourseLessons = function (courseId) {
        return this.http.get(this.path + '/api/lessons', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('courseId', courseId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res["payload"]; }));
    };
    CoursesService.prototype.findLessons = function (courseId, filter, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get(this.path + '/api/lessons', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res["payload"]; }));
    };
    CoursesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.mySession = {}; // Contains session data.
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("-");
        this.currentMessage = this.messageSource.asObservable();
        this.messageSource22 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("-");
        this.currentMessage22 = this.messageSource22.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService.prototype.changeMessage22 = function (message) {
        this.messageSource22.next(message);
    };
    DataService.prototype.set = function (left, right) {
        this.mySession[left] = right;
    };
    DataService.prototype.get = function (left) {
        return this.mySession[left];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/lessons.datasource.ts":
/*!************************************************!*\
  !*** ./src/app/services/lessons.datasource.ts ***!
  \************************************************/
/*! exports provided: LessonsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsDataSource", function() { return LessonsDataSource; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");



var LessonsDataSource = /** @class */ (function () {
    function LessonsDataSource(coursesService) {
        this.coursesService = coursesService;
        this.lessonsSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    LessonsDataSource.prototype.loadLessons = function (courseId, filter, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.coursesService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (lessons) { return _this.lessonsSubject.next(lessons); });
    };
    LessonsDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    LessonsDataSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return LessonsDataSource;
}());



/***/ }),

/***/ "./src/app/services/town.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/town.service.ts ***!
  \******************************************/
/*! exports provided: TownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownService", function() { return TownService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var TownService = /** @class */ (function () {
    function TownService(http) {
        this.http = http;
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
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpointCocktailRandom;
        //const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";     
        //  const url = 'http://api.github.com/search/users?q=' + searchText;
        //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
        //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';
        //console.log('here', url);
        //return this.http.get(url).pipe(map(
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            var results = {}; //[];//[{name: "Fred", value: 123123}];
            var data = res.json();
            var coupon = _this.generateRandomCoupon();
            var items = [];
            if (res) {
                data.drinks.forEach(function (element) {
                    //res.drinks.forEach(element => {
                    //let val = element.id;
                    var val = element.idDrink.toString().substring(0, 6);
                    results = { coupon: coupon, name: element.strDrink, value: val, id: element.idDrink, thumb: element.strDrinkThumb };
                });
            }
            return results; //.slice(0, 21); //{lef:111, right: 222};//data;      
        }));
    };
    TownService.prototype.searchTown = function (searchText) {
        console.log("searchTown: ", searchText);
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/mylist";
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
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpointCocktailDrinks;
        //const url = 'http://api.github.com/search/users?q=' + searchText;    
        //const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
        //  const url = 'http://api.github.com/search/users?q=' + searchText;
        //const url = 'http://localhost:3000/pingcors?ass=wipe'; //http://localhost:4200/detail/11'; //'api/heroes';
        //const  url = 'http://date.jsontest.com/?service=ip'; //http://echo.jsontest.com/key/value/one/two';
        //console.log('here', url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            var results = []; //[{name: "Fred", value: 123123}];
            var data = res.json();
            //let items = [];
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
        }));
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
    TownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TownService);
    return TownService;
}());



/***/ }),

/***/ "./src/app/storedashboard/storedashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/storedashboard/storedashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n    background: lightblue;\r\n  }"

/***/ }),

/***/ "./src/app/storedashboard/storedashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/storedashboard/storedashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:600px; font-size: 50%\"> \n    \n    <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n      <mat-grid-tile\n          *ngFor=\"let tile of tiles\"\n          [colspan]=\"tile.cols\"\n          [rowspan]\t=\"tile.rows\"\n          [style.background]=\"tile.color\">\n    \n          <p>\n              {{tile.stuff}}\n          <button (click)=\"wtf('sss')\">Home <i class=\"material-icons\">home</i></button>\n          \n        {{tile.text}} <button> ass </button>\n        <a routerLink=\"/\">\n          <mat-icon class=\"example-icon\">Take me home.</mat-icon> \n      </a>\n       </p> \n      </mat-grid-tile>\n    </mat-grid-list>\n    \n    <mat-grid-list cols=\"2\" rowHeight=\"3:1\">\n        <mat-grid-tile>\n     \n         <textarea mdInput placeholder=\"numbers\" [(ngModel)]=\"strNums\">{{strNums}}</textarea>\n         \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div  style=\"width: 90%; height: 90%; background-color: aquamarine\">\n                    <app-bigdummy></app-bigdummy>\n            </div>\n            \n        </mat-grid-tile>\n        <mat-grid-tile>\n    <div style=\"width:90%;height:500px\">\n    <app-tableex></app-tableex>\n  </div>\n        </mat-grid-tile>\n    \n        <mat-grid-tile>4\n                \n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>"

/***/ }),

/***/ "./src/app/storedashboard/storedashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/storedashboard/storedashboard.component.ts ***!
  \************************************************************/
/*! exports provided: StoredashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredashboardComponent", function() { return StoredashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoredashboardComponent = /** @class */ (function () {
    function StoredashboardComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue', stuff: "XXX" },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.strNums = "wtf asdf ewr ";
        this.tiles1 = this.wtf();
        this.tilesJson = JSON.stringify(this.tiles1, null, 2);
    }
    StoredashboardComponent.prototype.ngOnInit = function () {
    };
    StoredashboardComponent.prototype.wtf = function () {
        return [{ "icon": "avatar:svg-1", "title": "Svg-1", "background": "red", "span": { "row": 2, "col": 2 } }, { "icon": "avatar:svg-2", "title": "Svg-2", "background": "green", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-3", "title": "Svg-3", "background": "darkBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-4", "title": "Svg-4", "background": "blue", "span": { "row": 1, "col": 2 } }, { "icon": "avatar:svg-5", "title": "Svg-5", "background": "yellow", "span": { "row": 2, "col": 2 } }, { "icon": "avatar:svg-6", "title": "Svg-6", "background": "pink", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-7", "title": "Svg-7", "background": "darkBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-8", "title": "Svg-8", "background": "purple", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-9", "title": "Svg-9", "background": "deepBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-10", "title": "Svg-10", "background": "lightPurple", "span": { "row": 1, "col": 1 }
            }, { "icon": "avatar:svg-11", "title": "Svg-11", "background": "yellow", "span": { "row": 1, "col": 1 } }];
    };
    StoredashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storedashboard',
            template: __webpack_require__(/*! ./storedashboard.component.html */ "./src/app/storedashboard/storedashboard.component.html"),
            styles: [__webpack_require__(/*! ./storedashboard.component.css */ "./src/app/storedashboard/storedashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoredashboardComponent);
    return StoredashboardComponent;
}());



/***/ }),

/***/ "./src/app/storedetail/data.ts":
/*!*************************************!*\
  !*** ./src/app/storedetail/data.ts ***!
  \*************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
var single = [
    {
        "name": "Food",
        "value": 89400
    },
    {
        "name": "Clothing",
        "value": 50000
    },
    {
        "name": "Other",
        "value": 72000
    }
];


/***/ }),

/***/ "./src/app/storedetail/storedetail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/storedetail/storedetail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    display:block;\r\n    width:90%;\r\n    padding:2em;\r\n    margin: 2em auto;\r\n    background:#CDCDAB;\r\n}\r\n\r\n.alert {\r\n    background: #491221;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n/**\r\n * Foundation for Sites by ZURB\r\n * Version 6.3.1\r\n * foundation.zurb.com\r\n * Licensed under MIT Open Source\r\n */\r\n\r\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\r\n\r\n/* Document\r\n       ========================================================================== */\r\n\r\n/**\r\n     * 1. Change the default font family in all browsers (opinionated).\r\n     * 2. Correct the line height in all browsers.\r\n     * 3. Prevent adjustments of font size after orientation changes in\r\n     *    IE on Windows Phone and in iOS.\r\n     */\r\n\r\nhtml {\r\n  font-family: sans-serif;\r\n  /* 1 */\r\n  line-height: 1.15;\r\n  /* 2 */\r\n  -ms-text-size-adjust: 100%;\r\n  /* 3 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 3 */ }\r\n\r\n/* Sections\r\n       ========================================================================== */\r\n\r\n/**\r\n     * Remove the margin in all browsers (opinionated).\r\n     */\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\n\r\narticle,\r\naside,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n  display: block; }\r\n\r\n/**\r\n     * Correct the font size and margin on `h1` elements within `section` and\r\n     * `article` contexts in Chrome, Firefox, and Safari.\r\n     */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0; }\r\n\r\n/* Grouping content\r\n       ========================================================================== */\r\n\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\n\r\nfigcaption,\r\nfigure {\r\n  display: block; }\r\n\r\n/**\r\n     * Add the correct margin in IE 8.\r\n     */\r\n\r\nfigure {\r\n  margin: 1em 40px; }\r\n\r\n/**\r\n     * 1. Add the correct box sizing in Firefox.\r\n     * 2. Show the overflow in Edge and IE.\r\n     */\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  /* 1 */\r\n  height: 0;\r\n  /* 1 */\r\n  overflow: visible;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Add the correct display in IE.\r\n     */\r\n\r\nmain {\r\n  display: block; }\r\n\r\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\r\n\r\npre {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */ }\r\n\r\n/* Links\r\n       ========================================================================== */\r\n\r\n/**\r\n     * 1. Remove the gray background on active links in IE 10.\r\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n     */\r\n\r\na {\r\n  background-color: transparent;\r\n  /* 1 */\r\n  -webkit-text-decoration-skip: objects;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Remove the outline on focused links when they are also active or hovered\r\n     * in all browsers (opinionated).\r\n     */\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0; }\r\n\r\n/* Text-level semantics\r\n       ========================================================================== */\r\n\r\n/**\r\n     * 1. Remove the bottom border in Firefox 39-.\r\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n     */\r\n\r\nabbr[title] {\r\n  border-bottom: none;\r\n  /* 1 */\r\n  text-decoration: underline;\r\n  /* 2 */\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n     */\r\n\r\nb,\r\nstrong {\r\n  font-weight: inherit; }\r\n\r\n/**\r\n     * Add the correct font weight in Chrome, Edge, and Safari.\r\n     */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder; }\r\n\r\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Add the correct font style in Android 4.3-.\r\n     */\r\n\r\ndfn {\r\n  font-style: italic; }\r\n\r\n/**\r\n     * Add the correct background and color in IE 9-.\r\n     */\r\n\r\nmark {\r\n  background-color: #ff0;\r\n  color: #000; }\r\n\r\n/**\r\n     * Add the correct font size in all browsers.\r\n     */\r\n\r\nsmall {\r\n  font-size: 80%; }\r\n\r\n/**\r\n     * Prevent `sub` and `sup` elements from affecting the line height in\r\n     * all browsers.\r\n     */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline; }\r\n\r\nsub {\r\n  bottom: -0.25em; }\r\n\r\nsup {\r\n  top: -0.5em; }\r\n\r\n/* Embedded content\r\n       ========================================================================== */\r\n\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\n\r\naudio,\r\nvideo {\r\n  display: inline-block; }\r\n\r\n/**\r\n     * Add the correct display in iOS 4-7.\r\n     */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0; }\r\n\r\n/**\r\n     * Remove the border on images inside links in IE 10-.\r\n     */\r\n\r\nimg {\r\n  border-style: none; }\r\n\r\n/**\r\n     * Hide the overflow in IE.\r\n     */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden; }\r\n\r\n/* Forms\r\n       ========================================================================== */\r\n\r\n/**\r\n     * 1. Change the font styles in all browsers (opinionated).\r\n     * 2. Remove the margin in Firefox and Safari.\r\n     */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: sans-serif;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  line-height: 1.15;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Show the overflow in IE.\r\n     */\r\n\r\nbutton {\r\n  overflow: visible; }\r\n\r\n/**\r\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n     * 1. Remove the inheritance of text transform in Firefox.\r\n     */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none; }\r\n\r\n/**\r\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n     *    controls in Android 4.\r\n     * 2. Correct the inability to style clickable types in iOS and Safari.\r\n     */\r\n\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  /* 2 */ }\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  /**\r\n       * Remove the inner border and padding in Firefox.\r\n       */\r\n  /**\r\n       * Restore the focus styles unset by the previous rule.\r\n       */ }\r\n\r\nbutton::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0; }\r\n\r\nbutton:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText; }\r\n\r\n/**\r\n     * Show the overflow in Edge.\r\n     */\r\n\r\ninput {\r\n  overflow: visible; }\r\n\r\n/**\r\n     * 1. Add the correct box sizing in IE 10-.\r\n     * 2. Remove the padding in IE 10-.\r\n     */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Correct the cursor style of increment and decrement buttons in Chrome.\r\n     */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto; }\r\n\r\n/**\r\n     * 1. Correct the odd appearance in Chrome and Safari.\r\n     * 2. Correct the outline style in Safari.\r\n     */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n  /**\r\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n       */ }\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none; }\r\n\r\n/**\r\n     * 1. Correct the inability to style clickable types in iOS and Safari.\r\n     * 2. Change font properties to `inherit` in Safari.\r\n     */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Change the border, margin, and padding in all browsers (opinionated).\r\n     */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em; }\r\n\r\n/**\r\n     * 1. Correct the text wrapping in Edge and IE.\r\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n     * 3. Remove the padding so developers are not caught out when they zero out\r\n     *    `fieldset` elements in all browsers.\r\n     */\r\n\r\nlegend {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  display: table;\r\n  /* 1 */\r\n  max-width: 100%;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 3 */\r\n  color: inherit;\r\n  /* 2 */\r\n  white-space: normal;\r\n  /* 1 */ }\r\n\r\n/**\r\n     * 1. Add the correct display in IE 9-.\r\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n     */\r\n\r\nprogress {\r\n  display: inline-block;\r\n  /* 1 */\r\n  vertical-align: baseline;\r\n  /* 2 */ }\r\n\r\n/**\r\n     * Remove the default vertical scrollbar in IE.\r\n     */\r\n\r\ntextarea {\r\n  overflow: auto; }\r\n\r\n/* Interactive\r\n       ========================================================================== */\r\n\r\n/*\r\n     * Add the correct display in Edge, IE, and Firefox.\r\n     */\r\n\r\ndetails {\r\n  display: block; }\r\n\r\n/*\r\n     * Add the correct display in all browsers.\r\n     */\r\n\r\nsummary {\r\n  display: list-item; }\r\n\r\n/*\r\n     * Add the correct display in IE 9-.\r\n     */\r\n\r\nmenu {\r\n  display: block; }\r\n\r\n/* Scripting\r\n       ========================================================================== */\r\n\r\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\r\n\r\ncanvas {\r\n  display: inline-block; }\r\n\r\n/**\r\n     * Add the correct display in IE.\r\n     */\r\n\r\ntemplate {\r\n  display: none; }\r\n\r\n/* Hidden\r\n       ========================================================================== */\r\n\r\n/**\r\n     * Add the correct display in IE 10-.\r\n     */\r\n\r\n[hidden] {\r\n  display: none; }\r\n\r\n.foundation-mq {\r\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit; }\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #fefefe;\r\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #0a0a0a;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale; }\r\n\r\nimg {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-width: 100%;\r\n  height: auto;\r\n  -ms-interpolation-mode: bicubic; }\r\n\r\ntextarea {\r\n  height: auto;\r\n  min-height: 50px;\r\n  border-radius: 0; }\r\n\r\nselect {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  border-radius: 0; }\r\n\r\n.map_canvas img,\r\n.map_canvas embed,\r\n.map_canvas object,\r\n.mqa-display img,\r\n.mqa-display embed,\r\n.mqa-display object {\r\n  max-width: none !important; }\r\n\r\nbutton {\r\n  padding: 0;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border: 0;\r\n  border-radius: 0;\r\n  background: transparent;\r\n  line-height: 1; }\r\n\r\n[data-whatinput='mouse'] button {\r\n    outline: 0; }\r\n\r\npre {\r\n  overflow: auto; }\r\n\r\n.is-visible {\r\n  display: block !important; }\r\n\r\n.is-hidden {\r\n  display: none !important; }\r\n\r\n.row {\r\n  max-width: 75rem;\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n\r\n.row::before, .row::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.row::after {\r\n    clear: both; }\r\n\r\n.row.collapse > .column, .row.collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n\r\n.row .row {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n      .row .row {\r\n        margin-right: -0.9375rem;\r\n        margin-left: -0.9375rem; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n      .row .row {\r\n        margin-right: -0.9375rem;\r\n        margin-left: -0.9375rem; } }\r\n\r\n.row .row.collapse {\r\n      margin-right: 0;\r\n      margin-left: 0; }\r\n\r\n.row.expanded {\r\n    max-width: none; }\r\n\r\n.row.expanded .row {\r\n      margin-right: auto;\r\n      margin-left: auto; }\r\n\r\n.row:not(.expanded) .row {\r\n    max-width: none; }\r\n\r\n.row.gutter-small > .column, .row.gutter-small > .columns {\r\n    padding-right: 0.625rem;\r\n    padding-left: 0.625rem; }\r\n\r\n.row.gutter-medium > .column, .row.gutter-medium > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n\r\n.column, .columns {\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .column, .columns {\r\n      padding-right: 0.9375rem;\r\n      padding-left: 0.9375rem; } }\r\n\r\n.column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\r\n    float: right; }\r\n\r\n.column.end:last-child:last-child, .end.columns:last-child:last-child {\r\n    float: left; }\r\n\r\n.column.row.row, .row.row.columns {\r\n  float: none; }\r\n\r\n.row .column.row.row, .row .row.row.columns {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.small-1 {\r\n  width: 8.33333%; }\r\n\r\n.small-push-1 {\r\n  position: relative;\r\n  left: 8.33333%; }\r\n\r\n.small-pull-1 {\r\n  position: relative;\r\n  left: -8.33333%; }\r\n\r\n.small-offset-0 {\r\n  margin-left: 0%; }\r\n\r\n.small-2 {\r\n  width: 16.66667%; }\r\n\r\n.small-push-2 {\r\n  position: relative;\r\n  left: 16.66667%; }\r\n\r\n.small-pull-2 {\r\n  position: relative;\r\n  left: -16.66667%; }\r\n\r\n.small-offset-1 {\r\n  margin-left: 8.33333%; }\r\n\r\n.small-3 {\r\n  width: 25%; }\r\n\r\n.small-push-3 {\r\n  position: relative;\r\n  left: 25%; }\r\n\r\n.small-pull-3 {\r\n  position: relative;\r\n  left: -25%; }\r\n\r\n.small-offset-2 {\r\n  margin-left: 16.66667%; }\r\n\r\n.small-4 {\r\n  width: 33.33333%; }\r\n\r\n.small-push-4 {\r\n  position: relative;\r\n  left: 33.33333%; }\r\n\r\n.small-pull-4 {\r\n  position: relative;\r\n  left: -33.33333%; }\r\n\r\n.small-offset-3 {\r\n  margin-left: 25%; }\r\n\r\n.small-5 {\r\n  width: 41.66667%; }\r\n\r\n.small-push-5 {\r\n  position: relative;\r\n  left: 41.66667%; }\r\n\r\n.small-pull-5 {\r\n  position: relative;\r\n  left: -41.66667%; }\r\n\r\n.small-offset-4 {\r\n  margin-left: 33.33333%; }\r\n\r\n.small-6 {\r\n  width: 50%; }\r\n\r\n.small-push-6 {\r\n  position: relative;\r\n  left: 50%; }\r\n\r\n.small-pull-6 {\r\n  position: relative;\r\n  left: -50%; }\r\n\r\n.small-offset-5 {\r\n  margin-left: 41.66667%; }\r\n\r\n.small-7 {\r\n  width: 58.33333%; }\r\n\r\n.small-push-7 {\r\n  position: relative;\r\n  left: 58.33333%; }\r\n\r\n.small-pull-7 {\r\n  position: relative;\r\n  left: -58.33333%; }\r\n\r\n.small-offset-6 {\r\n  margin-left: 50%; }\r\n\r\n.small-8 {\r\n  width: 66.66667%; }\r\n\r\n.small-push-8 {\r\n  position: relative;\r\n  left: 66.66667%; }\r\n\r\n.small-pull-8 {\r\n  position: relative;\r\n  left: -66.66667%; }\r\n\r\n.small-offset-7 {\r\n  margin-left: 58.33333%; }\r\n\r\n.small-9 {\r\n  width: 75%; }\r\n\r\n.small-push-9 {\r\n  position: relative;\r\n  left: 75%; }\r\n\r\n.small-pull-9 {\r\n  position: relative;\r\n  left: -75%; }\r\n\r\n.small-offset-8 {\r\n  margin-left: 66.66667%; }\r\n\r\n.small-10 {\r\n  width: 83.33333%; }\r\n\r\n.small-push-10 {\r\n  position: relative;\r\n  left: 83.33333%; }\r\n\r\n.small-pull-10 {\r\n  position: relative;\r\n  left: -83.33333%; }\r\n\r\n.small-offset-9 {\r\n  margin-left: 75%; }\r\n\r\n.small-11 {\r\n  width: 91.66667%; }\r\n\r\n.small-push-11 {\r\n  position: relative;\r\n  left: 91.66667%; }\r\n\r\n.small-pull-11 {\r\n  position: relative;\r\n  left: -91.66667%; }\r\n\r\n.small-offset-10 {\r\n  margin-left: 83.33333%; }\r\n\r\n.small-12 {\r\n  width: 100%; }\r\n\r\n.small-offset-11 {\r\n  margin-left: 91.66667%; }\r\n\r\n.small-up-1 > .column, .small-up-1 > .columns {\r\n  float: left;\r\n  width: 100%; }\r\n\r\n.small-up-1 > .column:nth-of-type(1n), .small-up-1 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-1 > .column:nth-of-type(1n+1), .small-up-1 > .columns:nth-of-type(1n+1) {\r\n    clear: both; }\r\n\r\n.small-up-1 > .column:last-child, .small-up-1 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-2 > .column, .small-up-2 > .columns {\r\n  float: left;\r\n  width: 50%; }\r\n\r\n.small-up-2 > .column:nth-of-type(1n), .small-up-2 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-2 > .column:nth-of-type(2n+1), .small-up-2 > .columns:nth-of-type(2n+1) {\r\n    clear: both; }\r\n\r\n.small-up-2 > .column:last-child, .small-up-2 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-3 > .column, .small-up-3 > .columns {\r\n  float: left;\r\n  width: 33.33333%; }\r\n\r\n.small-up-3 > .column:nth-of-type(1n), .small-up-3 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-3 > .column:nth-of-type(3n+1), .small-up-3 > .columns:nth-of-type(3n+1) {\r\n    clear: both; }\r\n\r\n.small-up-3 > .column:last-child, .small-up-3 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-4 > .column, .small-up-4 > .columns {\r\n  float: left;\r\n  width: 25%; }\r\n\r\n.small-up-4 > .column:nth-of-type(1n), .small-up-4 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-4 > .column:nth-of-type(4n+1), .small-up-4 > .columns:nth-of-type(4n+1) {\r\n    clear: both; }\r\n\r\n.small-up-4 > .column:last-child, .small-up-4 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-5 > .column, .small-up-5 > .columns {\r\n  float: left;\r\n  width: 20%; }\r\n\r\n.small-up-5 > .column:nth-of-type(1n), .small-up-5 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-5 > .column:nth-of-type(5n+1), .small-up-5 > .columns:nth-of-type(5n+1) {\r\n    clear: both; }\r\n\r\n.small-up-5 > .column:last-child, .small-up-5 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-6 > .column, .small-up-6 > .columns {\r\n  float: left;\r\n  width: 16.66667%; }\r\n\r\n.small-up-6 > .column:nth-of-type(1n), .small-up-6 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-6 > .column:nth-of-type(6n+1), .small-up-6 > .columns:nth-of-type(6n+1) {\r\n    clear: both; }\r\n\r\n.small-up-6 > .column:last-child, .small-up-6 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-7 > .column, .small-up-7 > .columns {\r\n  float: left;\r\n  width: 14.28571%; }\r\n\r\n.small-up-7 > .column:nth-of-type(1n), .small-up-7 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-7 > .column:nth-of-type(7n+1), .small-up-7 > .columns:nth-of-type(7n+1) {\r\n    clear: both; }\r\n\r\n.small-up-7 > .column:last-child, .small-up-7 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-up-8 > .column, .small-up-8 > .columns {\r\n  float: left;\r\n  width: 12.5%; }\r\n\r\n.small-up-8 > .column:nth-of-type(1n), .small-up-8 > .columns:nth-of-type(1n) {\r\n    clear: none; }\r\n\r\n.small-up-8 > .column:nth-of-type(8n+1), .small-up-8 > .columns:nth-of-type(8n+1) {\r\n    clear: both; }\r\n\r\n.small-up-8 > .column:last-child, .small-up-8 > .columns:last-child {\r\n    float: left; }\r\n\r\n.small-collapse > .column, .small-collapse > .columns {\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.small-collapse .row {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n.expanded.row .small-collapse.row {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n.small-uncollapse > .column, .small-uncollapse > .columns {\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem; }\r\n\r\n.small-centered {\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n\r\n.small-centered, .small-centered:last-child:not(:first-child) {\r\n    float: none;\r\n    clear: both; }\r\n\r\n.small-uncentered,\r\n.small-push-0,\r\n.small-pull-0 {\r\n  position: static;\r\n  float: left;\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .medium-1 {\r\n    width: 8.33333%; }\r\n  .medium-push-1 {\r\n    position: relative;\r\n    left: 8.33333%; }\r\n  .medium-pull-1 {\r\n    position: relative;\r\n    left: -8.33333%; }\r\n  .medium-offset-0 {\r\n    margin-left: 0%; }\r\n  .medium-2 {\r\n    width: 16.66667%; }\r\n  .medium-push-2 {\r\n    position: relative;\r\n    left: 16.66667%; }\r\n  .medium-pull-2 {\r\n    position: relative;\r\n    left: -16.66667%; }\r\n  .medium-offset-1 {\r\n    margin-left: 8.33333%; }\r\n  .medium-3 {\r\n    width: 25%; }\r\n  .medium-push-3 {\r\n    position: relative;\r\n    left: 25%; }\r\n  .medium-pull-3 {\r\n    position: relative;\r\n    left: -25%; }\r\n  .medium-offset-2 {\r\n    margin-left: 16.66667%; }\r\n  .medium-4 {\r\n    width: 33.33333%; }\r\n  .medium-push-4 {\r\n    position: relative;\r\n    left: 33.33333%; }\r\n  .medium-pull-4 {\r\n    position: relative;\r\n    left: -33.33333%; }\r\n  .medium-offset-3 {\r\n    margin-left: 25%; }\r\n  .medium-5 {\r\n    width: 41.66667%; }\r\n  .medium-push-5 {\r\n    position: relative;\r\n    left: 41.66667%; }\r\n  .medium-pull-5 {\r\n    position: relative;\r\n    left: -41.66667%; }\r\n  .medium-offset-4 {\r\n    margin-left: 33.33333%; }\r\n  .medium-6 {\r\n    width: 50%; }\r\n  .medium-push-6 {\r\n    position: relative;\r\n    left: 50%; }\r\n  .medium-pull-6 {\r\n    position: relative;\r\n    left: -50%; }\r\n  .medium-offset-5 {\r\n    margin-left: 41.66667%; }\r\n  .medium-7 {\r\n    width: 58.33333%; }\r\n  .medium-push-7 {\r\n    position: relative;\r\n    left: 58.33333%; }\r\n  .medium-pull-7 {\r\n    position: relative;\r\n    left: -58.33333%; }\r\n  .medium-offset-6 {\r\n    margin-left: 50%; }\r\n  .medium-8 {\r\n    width: 66.66667%; }\r\n  .medium-push-8 {\r\n    position: relative;\r\n    left: 66.66667%; }\r\n  .medium-pull-8 {\r\n    position: relative;\r\n    left: -66.66667%; }\r\n  .medium-offset-7 {\r\n    margin-left: 58.33333%; }\r\n  .medium-9 {\r\n    width: 75%; }\r\n  .medium-push-9 {\r\n    position: relative;\r\n    left: 75%; }\r\n  .medium-pull-9 {\r\n    position: relative;\r\n    left: -75%; }\r\n  .medium-offset-8 {\r\n    margin-left: 66.66667%; }\r\n  .medium-10 {\r\n    width: 83.33333%; }\r\n  .medium-push-10 {\r\n    position: relative;\r\n    left: 83.33333%; }\r\n  .medium-pull-10 {\r\n    position: relative;\r\n    left: -83.33333%; }\r\n  .medium-offset-9 {\r\n    margin-left: 75%; }\r\n  .medium-11 {\r\n    width: 91.66667%; }\r\n  .medium-push-11 {\r\n    position: relative;\r\n    left: 91.66667%; }\r\n  .medium-pull-11 {\r\n    position: relative;\r\n    left: -91.66667%; }\r\n  .medium-offset-10 {\r\n    margin-left: 83.33333%; }\r\n  .medium-12 {\r\n    width: 100%; }\r\n  .medium-offset-11 {\r\n    margin-left: 91.66667%; }\r\n  .medium-up-1 > .column, .medium-up-1 > .columns {\r\n    float: left;\r\n    width: 100%; }\r\n    .medium-up-1 > .column:nth-of-type(1n), .medium-up-1 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-1 > .column:nth-of-type(1n+1), .medium-up-1 > .columns:nth-of-type(1n+1) {\r\n      clear: both; }\r\n    .medium-up-1 > .column:last-child, .medium-up-1 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-2 > .column, .medium-up-2 > .columns {\r\n    float: left;\r\n    width: 50%; }\r\n    .medium-up-2 > .column:nth-of-type(1n), .medium-up-2 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-2 > .column:nth-of-type(2n+1), .medium-up-2 > .columns:nth-of-type(2n+1) {\r\n      clear: both; }\r\n    .medium-up-2 > .column:last-child, .medium-up-2 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-3 > .column, .medium-up-3 > .columns {\r\n    float: left;\r\n    width: 33.33333%; }\r\n    .medium-up-3 > .column:nth-of-type(1n), .medium-up-3 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-3 > .column:nth-of-type(3n+1), .medium-up-3 > .columns:nth-of-type(3n+1) {\r\n      clear: both; }\r\n    .medium-up-3 > .column:last-child, .medium-up-3 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-4 > .column, .medium-up-4 > .columns {\r\n    float: left;\r\n    width: 25%; }\r\n    .medium-up-4 > .column:nth-of-type(1n), .medium-up-4 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-4 > .column:nth-of-type(4n+1), .medium-up-4 > .columns:nth-of-type(4n+1) {\r\n      clear: both; }\r\n    .medium-up-4 > .column:last-child, .medium-up-4 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-5 > .column, .medium-up-5 > .columns {\r\n    float: left;\r\n    width: 20%; }\r\n    .medium-up-5 > .column:nth-of-type(1n), .medium-up-5 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-5 > .column:nth-of-type(5n+1), .medium-up-5 > .columns:nth-of-type(5n+1) {\r\n      clear: both; }\r\n    .medium-up-5 > .column:last-child, .medium-up-5 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-6 > .column, .medium-up-6 > .columns {\r\n    float: left;\r\n    width: 16.66667%; }\r\n    .medium-up-6 > .column:nth-of-type(1n), .medium-up-6 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-6 > .column:nth-of-type(6n+1), .medium-up-6 > .columns:nth-of-type(6n+1) {\r\n      clear: both; }\r\n    .medium-up-6 > .column:last-child, .medium-up-6 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-7 > .column, .medium-up-7 > .columns {\r\n    float: left;\r\n    width: 14.28571%; }\r\n    .medium-up-7 > .column:nth-of-type(1n), .medium-up-7 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-7 > .column:nth-of-type(7n+1), .medium-up-7 > .columns:nth-of-type(7n+1) {\r\n      clear: both; }\r\n    .medium-up-7 > .column:last-child, .medium-up-7 > .columns:last-child {\r\n      float: left; }\r\n  .medium-up-8 > .column, .medium-up-8 > .columns {\r\n    float: left;\r\n    width: 12.5%; }\r\n    .medium-up-8 > .column:nth-of-type(1n), .medium-up-8 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .medium-up-8 > .column:nth-of-type(8n+1), .medium-up-8 > .columns:nth-of-type(8n+1) {\r\n      clear: both; }\r\n    .medium-up-8 > .column:last-child, .medium-up-8 > .columns:last-child {\r\n      float: left; }\r\n  .medium-collapse > .column, .medium-collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n  .medium-collapse .row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .expanded.row .medium-collapse.row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n  .medium-centered {\r\n    margin-right: auto;\r\n    margin-left: auto; }\r\n    .medium-centered, .medium-centered:last-child:not(:first-child) {\r\n      float: none;\r\n      clear: both; }\r\n  .medium-uncentered,\r\n  .medium-push-0,\r\n  .medium-pull-0 {\r\n    position: static;\r\n    float: left;\r\n    margin-right: 0;\r\n    margin-left: 0; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .large-1 {\r\n    width: 8.33333%; }\r\n  .large-push-1 {\r\n    position: relative;\r\n    left: 8.33333%; }\r\n  .large-pull-1 {\r\n    position: relative;\r\n    left: -8.33333%; }\r\n  .large-offset-0 {\r\n    margin-left: 0%; }\r\n  .large-2 {\r\n    width: 16.66667%; }\r\n  .large-push-2 {\r\n    position: relative;\r\n    left: 16.66667%; }\r\n  .large-pull-2 {\r\n    position: relative;\r\n    left: -16.66667%; }\r\n  .large-offset-1 {\r\n    margin-left: 8.33333%; }\r\n  .large-3 {\r\n    width: 25%; }\r\n  .large-push-3 {\r\n    position: relative;\r\n    left: 25%; }\r\n  .large-pull-3 {\r\n    position: relative;\r\n    left: -25%; }\r\n  .large-offset-2 {\r\n    margin-left: 16.66667%; }\r\n  .large-4 {\r\n    width: 33.33333%; }\r\n  .large-push-4 {\r\n    position: relative;\r\n    left: 33.33333%; }\r\n  .large-pull-4 {\r\n    position: relative;\r\n    left: -33.33333%; }\r\n  .large-offset-3 {\r\n    margin-left: 25%; }\r\n  .large-5 {\r\n    width: 41.66667%; }\r\n  .large-push-5 {\r\n    position: relative;\r\n    left: 41.66667%; }\r\n  .large-pull-5 {\r\n    position: relative;\r\n    left: -41.66667%; }\r\n  .large-offset-4 {\r\n    margin-left: 33.33333%; }\r\n  .large-6 {\r\n    width: 50%; }\r\n  .large-push-6 {\r\n    position: relative;\r\n    left: 50%; }\r\n  .large-pull-6 {\r\n    position: relative;\r\n    left: -50%; }\r\n  .large-offset-5 {\r\n    margin-left: 41.66667%; }\r\n  .large-7 {\r\n    width: 58.33333%; }\r\n  .large-push-7 {\r\n    position: relative;\r\n    left: 58.33333%; }\r\n  .large-pull-7 {\r\n    position: relative;\r\n    left: -58.33333%; }\r\n  .large-offset-6 {\r\n    margin-left: 50%; }\r\n  .large-8 {\r\n    width: 66.66667%; }\r\n  .large-push-8 {\r\n    position: relative;\r\n    left: 66.66667%; }\r\n  .large-pull-8 {\r\n    position: relative;\r\n    left: -66.66667%; }\r\n  .large-offset-7 {\r\n    margin-left: 58.33333%; }\r\n  .large-9 {\r\n    width: 75%; }\r\n  .large-push-9 {\r\n    position: relative;\r\n    left: 75%; }\r\n  .large-pull-9 {\r\n    position: relative;\r\n    left: -75%; }\r\n  .large-offset-8 {\r\n    margin-left: 66.66667%; }\r\n  .large-10 {\r\n    width: 83.33333%; }\r\n  .large-push-10 {\r\n    position: relative;\r\n    left: 83.33333%; }\r\n  .large-pull-10 {\r\n    position: relative;\r\n    left: -83.33333%; }\r\n  .large-offset-9 {\r\n    margin-left: 75%; }\r\n  .large-11 {\r\n    width: 91.66667%; }\r\n  .large-push-11 {\r\n    position: relative;\r\n    left: 91.66667%; }\r\n  .large-pull-11 {\r\n    position: relative;\r\n    left: -91.66667%; }\r\n  .large-offset-10 {\r\n    margin-left: 83.33333%; }\r\n  .large-12 {\r\n    width: 100%; }\r\n  .large-offset-11 {\r\n    margin-left: 91.66667%; }\r\n  .large-up-1 > .column, .large-up-1 > .columns {\r\n    float: left;\r\n    width: 100%; }\r\n    .large-up-1 > .column:nth-of-type(1n), .large-up-1 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-1 > .column:nth-of-type(1n+1), .large-up-1 > .columns:nth-of-type(1n+1) {\r\n      clear: both; }\r\n    .large-up-1 > .column:last-child, .large-up-1 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-2 > .column, .large-up-2 > .columns {\r\n    float: left;\r\n    width: 50%; }\r\n    .large-up-2 > .column:nth-of-type(1n), .large-up-2 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-2 > .column:nth-of-type(2n+1), .large-up-2 > .columns:nth-of-type(2n+1) {\r\n      clear: both; }\r\n    .large-up-2 > .column:last-child, .large-up-2 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-3 > .column, .large-up-3 > .columns {\r\n    float: left;\r\n    width: 33.33333%; }\r\n    .large-up-3 > .column:nth-of-type(1n), .large-up-3 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-3 > .column:nth-of-type(3n+1), .large-up-3 > .columns:nth-of-type(3n+1) {\r\n      clear: both; }\r\n    .large-up-3 > .column:last-child, .large-up-3 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-4 > .column, .large-up-4 > .columns {\r\n    float: left;\r\n    width: 25%; }\r\n    .large-up-4 > .column:nth-of-type(1n), .large-up-4 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-4 > .column:nth-of-type(4n+1), .large-up-4 > .columns:nth-of-type(4n+1) {\r\n      clear: both; }\r\n    .large-up-4 > .column:last-child, .large-up-4 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-5 > .column, .large-up-5 > .columns {\r\n    float: left;\r\n    width: 20%; }\r\n    .large-up-5 > .column:nth-of-type(1n), .large-up-5 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-5 > .column:nth-of-type(5n+1), .large-up-5 > .columns:nth-of-type(5n+1) {\r\n      clear: both; }\r\n    .large-up-5 > .column:last-child, .large-up-5 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-6 > .column, .large-up-6 > .columns {\r\n    float: left;\r\n    width: 16.66667%; }\r\n    .large-up-6 > .column:nth-of-type(1n), .large-up-6 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-6 > .column:nth-of-type(6n+1), .large-up-6 > .columns:nth-of-type(6n+1) {\r\n      clear: both; }\r\n    .large-up-6 > .column:last-child, .large-up-6 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-7 > .column, .large-up-7 > .columns {\r\n    float: left;\r\n    width: 14.28571%; }\r\n    .large-up-7 > .column:nth-of-type(1n), .large-up-7 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-7 > .column:nth-of-type(7n+1), .large-up-7 > .columns:nth-of-type(7n+1) {\r\n      clear: both; }\r\n    .large-up-7 > .column:last-child, .large-up-7 > .columns:last-child {\r\n      float: left; }\r\n  .large-up-8 > .column, .large-up-8 > .columns {\r\n    float: left;\r\n    width: 12.5%; }\r\n    .large-up-8 > .column:nth-of-type(1n), .large-up-8 > .columns:nth-of-type(1n) {\r\n      clear: none; }\r\n    .large-up-8 > .column:nth-of-type(8n+1), .large-up-8 > .columns:nth-of-type(8n+1) {\r\n      clear: both; }\r\n    .large-up-8 > .column:last-child, .large-up-8 > .columns:last-child {\r\n      float: left; }\r\n  .large-collapse > .column, .large-collapse > .columns {\r\n    padding-right: 0;\r\n    padding-left: 0; }\r\n  .large-collapse .row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .expanded.row .large-collapse.row {\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n  .large-uncollapse > .column, .large-uncollapse > .columns {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem; }\r\n  .large-centered {\r\n    margin-right: auto;\r\n    margin-left: auto; }\r\n    .large-centered, .large-centered:last-child:not(:first-child) {\r\n      float: none;\r\n      clear: both; }\r\n  .large-uncentered,\r\n  .large-push-0,\r\n  .large-pull-0 {\r\n    position: static;\r\n    float: left;\r\n    margin-right: 0;\r\n    margin-left: 0; } }\r\n\r\n.column-block {\r\n  margin-bottom: 1.25rem; }\r\n\r\n.column-block > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .column-block {\r\n      margin-bottom: 1.875rem; }\r\n      .column-block > :last-child {\r\n        margin-bottom: 0; } }\r\n\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\np,\r\nblockquote,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n  font-size: inherit;\r\n  line-height: 1.6;\r\n  text-rendering: optimizeLegibility; }\r\n\r\nem,\r\ni {\r\n  font-style: italic;\r\n  line-height: inherit; }\r\n\r\nstrong,\r\nb {\r\n  font-weight: bold;\r\n  line-height: inherit; }\r\n\r\nsmall {\r\n  font-size: 80%;\r\n  line-height: inherit; }\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  color: inherit;\r\n  text-rendering: optimizeLegibility; }\r\n\r\nh1 small,\r\n  h2 small,\r\n  h3 small,\r\n  h4 small,\r\n  h5 small,\r\n  h6 small {\r\n    line-height: 0;\r\n    color: #cacaca; }\r\n\r\nh1 {\r\n  font-size: 1.5rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh2 {\r\n  font-size: 1.25rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh3 {\r\n  font-size: 1.1875rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh4 {\r\n  font-size: 1.125rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh5 {\r\n  font-size: 1.0625rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\nh6 {\r\n  font-size: 1rem;\r\n  line-height: 1.4;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  h1 {\r\n    font-size: 3rem; }\r\n  h2 {\r\n    font-size: 2.5rem; }\r\n  h3 {\r\n    font-size: 1.9375rem; }\r\n  h4 {\r\n    font-size: 1.5625rem; }\r\n  h5 {\r\n    font-size: 1.25rem; }\r\n  h6 {\r\n    font-size: 1rem; } }\r\n\r\na {\r\n  line-height: inherit;\r\n  color: #1779ba;\r\n  text-decoration: none;\r\n  cursor: pointer; }\r\n\r\na:hover, a:focus {\r\n    color: #1468a0; }\r\n\r\na img {\r\n    border: 0; }\r\n\r\nhr {\r\n  clear: both;\r\n  max-width: 75rem;\r\n  height: 0;\r\n  margin: 1.25rem auto;\r\n  border-top: 0;\r\n  border-right: 0;\r\n  border-bottom: 1px solid #cacaca;\r\n  border-left: 0; }\r\n\r\nul,\r\nol,\r\ndl {\r\n  margin-bottom: 1rem;\r\n  list-style-position: outside;\r\n  line-height: 1.6; }\r\n\r\nli {\r\n  font-size: inherit; }\r\n\r\nul {\r\n  margin-left: 1.25rem;\r\n  list-style-type: disc; }\r\n\r\nol {\r\n  margin-left: 1.25rem; }\r\n\r\nul ul, ol ul, ul ol, ol ol {\r\n  margin-left: 1.25rem;\r\n  margin-bottom: 0; }\r\n\r\ndl {\r\n  margin-bottom: 1rem; }\r\n\r\ndl dt {\r\n    margin-bottom: 0.3rem;\r\n    font-weight: bold; }\r\n\r\nblockquote {\r\n  margin: 0 0 1rem;\r\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\r\n  border-left: 1px solid #cacaca; }\r\n\r\nblockquote, blockquote p {\r\n    line-height: 1.6;\r\n    color: #8a8a8a; }\r\n\r\ncite {\r\n  display: block;\r\n  font-size: 0.8125rem;\r\n  color: #8a8a8a; }\r\n\r\ncite:before {\r\n    content: \"— \"; }\r\n\r\nabbr {\r\n  border-bottom: 1px dotted #0a0a0a;\r\n  color: #0a0a0a;\r\n  cursor: help; }\r\n\r\nfigure {\r\n  margin: 0; }\r\n\r\ncode {\r\n  padding: 0.125rem 0.3125rem 0.0625rem;\r\n  border: 1px solid #cacaca;\r\n  background-color: #e6e6e6;\r\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\r\n  font-weight: normal;\r\n  color: #0a0a0a; }\r\n\r\nkbd {\r\n  margin: 0;\r\n  padding: 0.125rem 0.25rem 0;\r\n  background-color: #e6e6e6;\r\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\r\n  color: #0a0a0a; }\r\n\r\n.subheader {\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: normal;\r\n  line-height: 1.4;\r\n  color: #8a8a8a; }\r\n\r\n.lead {\r\n  font-size: 125%;\r\n  line-height: 1.6; }\r\n\r\n.stat {\r\n  font-size: 2.5rem;\r\n  line-height: 1; }\r\n\r\np + .stat {\r\n    margin-top: -1rem; }\r\n\r\n.no-bullet {\r\n  margin-left: 0;\r\n  list-style: none; }\r\n\r\n.text-left {\r\n  text-align: left; }\r\n\r\n.text-right {\r\n  text-align: right; }\r\n\r\n.text-center {\r\n  text-align: center; }\r\n\r\n.text-justify {\r\n  text-align: justify; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .medium-text-left {\r\n    text-align: left; }\r\n  .medium-text-right {\r\n    text-align: right; }\r\n  .medium-text-center {\r\n    text-align: center; }\r\n  .medium-text-justify {\r\n    text-align: justify; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .large-text-left {\r\n    text-align: left; }\r\n  .large-text-right {\r\n    text-align: right; }\r\n  .large-text-center {\r\n    text-align: center; }\r\n  .large-text-justify {\r\n    text-align: justify; } }\r\n\r\n.show-for-print {\r\n  display: none !important; }\r\n\r\n@media print {\r\n  * {\r\n    background: transparent !important;\r\n    box-shadow: none !important;\r\n    color: black !important;\r\n    text-shadow: none !important; }\r\n  .show-for-print {\r\n    display: block !important; }\r\n  .hide-for-print {\r\n    display: none !important; }\r\n  table.show-for-print {\r\n    display: table !important; }\r\n  thead.show-for-print {\r\n    display: table-header-group !important; }\r\n  tbody.show-for-print {\r\n    display: table-row-group !important; }\r\n  tr.show-for-print {\r\n    display: table-row !important; }\r\n  td.show-for-print {\r\n    display: table-cell !important; }\r\n  th.show-for-print {\r\n    display: table-cell !important; }\r\n  a,\r\n  a:visited {\r\n    text-decoration: underline; }\r\n  a[href]:after {\r\n    content: \" (\" attr(href) \")\"; }\r\n  .ir a:after,\r\n  a[href^='javascript:']:after,\r\n  a[href^='#']:after {\r\n    content: ''; }\r\n  abbr[title]:after {\r\n    content: \" (\" attr(title) \")\"; }\r\n  pre,\r\n  blockquote {\r\n    border: 1px solid #8a8a8a;\r\n    page-break-inside: avoid; }\r\n  thead {\r\n    display: table-header-group; }\r\n  tr,\r\n  img {\r\n    page-break-inside: avoid; }\r\n  img {\r\n    max-width: 100% !important; }\r\n  @page {\r\n    margin: 0.5cm; }\r\n  p,\r\n  h2,\r\n  h3 {\r\n    orphans: 3;\r\n    widows: 3; }\r\n  h2,\r\n  h3 {\r\n    page-break-after: avoid; } }\r\n\r\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\r\ntextarea {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 2.4375rem;\r\n  margin: 0 0 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  color: #0a0a0a;\r\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none; }\r\n\r\n[type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\r\n  textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #8a8a8a;\r\n    background-color: #fefefe;\r\n    box-shadow: 0 0 5px #cacaca;\r\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n\r\ntextarea {\r\n  max-width: 100%; }\r\n\r\ntextarea[rows] {\r\n    height: auto; }\r\n\r\ninput::-webkit-input-placeholder,\r\ntextarea::-webkit-input-placeholder {\r\n  color: #cacaca; }\r\n\r\ninput:-ms-input-placeholder,\r\ntextarea:-ms-input-placeholder {\r\n  color: #cacaca; }\r\n\r\ninput::-ms-input-placeholder,\r\ntextarea::-ms-input-placeholder {\r\n  color: #cacaca; }\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  color: #cacaca; }\r\n\r\ninput:disabled, input[readonly],\r\ntextarea:disabled,\r\ntextarea[readonly] {\r\n  background-color: #e6e6e6;\r\n  cursor: not-allowed; }\r\n\r\n[type='submit'],\r\n[type='button'] {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border-radius: 0; }\r\n\r\ninput[type='search'] {\r\n  box-sizing: border-box; }\r\n\r\n[type='file'],\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  margin: 0 0 1rem; }\r\n\r\n[type='checkbox'] + label,\r\n[type='radio'] + label {\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n  margin-left: 0.5rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 0; }\r\n\r\n[type='checkbox'] + label[for],\r\n  [type='radio'] + label[for] {\r\n    cursor: pointer; }\r\n\r\nlabel > [type='checkbox'],\r\nlabel > [type='radio'] {\r\n  margin-right: 0.5rem; }\r\n\r\n[type='file'] {\r\n  width: 100%; }\r\n\r\nlabel {\r\n  display: block;\r\n  margin: 0;\r\n  font-size: 0.875rem;\r\n  font-weight: normal;\r\n  line-height: 1.8;\r\n  color: #0a0a0a; }\r\n\r\nlabel.middle {\r\n    margin: 0 0 1rem;\r\n    padding: 0.5625rem 0; }\r\n\r\n.help-text {\r\n  margin-top: -0.5rem;\r\n  font-size: 0.8125rem;\r\n  font-style: italic;\r\n  color: #0a0a0a; }\r\n\r\n.input-group {\r\n  display: table;\r\n  width: 100%;\r\n  margin-bottom: 1rem; }\r\n\r\n.input-group > :first-child {\r\n    border-radius: 0 0 0 0; }\r\n\r\n.input-group > :last-child > * {\r\n    border-radius: 0 0 0 0; }\r\n\r\n.input-group-label, .input-group-field, .input-group-button, .input-group-button a,\r\n.input-group-button input,\r\n.input-group-button button,\r\n.input-group-button label {\r\n  margin: 0;\r\n  white-space: nowrap;\r\n  display: table-cell;\r\n  vertical-align: middle; }\r\n\r\n.input-group-label {\r\n  padding: 0 1rem;\r\n  border: 1px solid #cacaca;\r\n  background: #e6e6e6;\r\n  color: #0a0a0a;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  width: 1%;\r\n  height: 100%; }\r\n\r\n.input-group-label:first-child {\r\n    border-right: 0; }\r\n\r\n.input-group-label:last-child {\r\n    border-left: 0; }\r\n\r\n.input-group-field {\r\n  border-radius: 0;\r\n  height: 2.5rem; }\r\n\r\n.input-group-button {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  text-align: center;\r\n  width: 1%;\r\n  height: 100%; }\r\n\r\n.input-group-button a,\r\n  .input-group-button input,\r\n  .input-group-button button,\r\n  .input-group-button label {\r\n    height: 2.5rem;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    font-size: 1rem; }\r\n\r\n.input-group .input-group-button {\r\n  display: table-cell; }\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0; }\r\n\r\nlegend {\r\n  max-width: 100%;\r\n  margin-bottom: 0.5rem; }\r\n\r\n.fieldset {\r\n  margin: 1.125rem 0;\r\n  padding: 1.25rem;\r\n  border: 1px solid #cacaca; }\r\n\r\n.fieldset legend {\r\n    margin: 0;\r\n    margin-left: -0.1875rem;\r\n    padding: 0 0.1875rem;\r\n    background: #fefefe; }\r\n\r\nselect {\r\n  height: 2.4375rem;\r\n  margin: 0 0 1rem;\r\n  padding: 0.5rem;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n  line-height: normal;\r\n  color: #0a0a0a;\r\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\r\n  background-origin: content-box;\r\n  background-position: right -1rem center;\r\n  background-repeat: no-repeat;\r\n  background-size: 9px 6px;\r\n  padding-right: 1.5rem;\r\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n\r\n@media screen and (min-width: 0\\0) {\r\n    select {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\r\n\r\nselect:focus {\r\n    outline: none;\r\n    border: 1px solid #8a8a8a;\r\n    background-color: #fefefe;\r\n    box-shadow: 0 0 5px #cacaca;\r\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\r\n\r\nselect:disabled {\r\n    background-color: #e6e6e6;\r\n    cursor: not-allowed; }\r\n\r\nselect::-ms-expand {\r\n    display: none; }\r\n\r\nselect[multiple] {\r\n    height: auto;\r\n    background-image: none; }\r\n\r\n.is-invalid-input:not(:focus) {\r\n  border-color: #cc4b37;\r\n  background-color: #f9ecea; }\r\n\r\n.is-invalid-input:not(:focus)::-webkit-input-placeholder {\r\n    color: #cc4b37; }\r\n\r\n.is-invalid-input:not(:focus):-ms-input-placeholder {\r\n    color: #cc4b37; }\r\n\r\n.is-invalid-input:not(:focus)::-ms-input-placeholder {\r\n    color: #cc4b37; }\r\n\r\n.is-invalid-input:not(:focus)::placeholder {\r\n    color: #cc4b37; }\r\n\r\n.is-invalid-label {\r\n  color: #cc4b37; }\r\n\r\n.form-error {\r\n  display: none;\r\n  margin-top: -0.5rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 0.75rem;\r\n  font-weight: bold;\r\n  color: #cc4b37; }\r\n\r\n.form-error.is-visible {\r\n    display: block; }\r\n\r\n.button {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin: 0 0 1rem 0;\r\n  padding: 0.85em 1em;\r\n  -webkit-appearance: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 0;\r\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\r\n  font-size: 0.9rem;\r\n  line-height: 1;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  background-color: #1779ba;\r\n  color: #fefefe; }\r\n\r\n[data-whatinput='mouse'] .button {\r\n    outline: 0; }\r\n\r\n.button:hover, .button:focus {\r\n    background-color: #14679e;\r\n    color: #fefefe; }\r\n\r\n.button.tiny {\r\n    font-size: 0.6rem; }\r\n\r\n.button.small {\r\n    font-size: 0.75rem; }\r\n\r\n.button.large {\r\n    font-size: 1.25rem; }\r\n\r\n.button.expanded {\r\n    display: block;\r\n    width: 100%;\r\n    margin-right: 0;\r\n    margin-left: 0; }\r\n\r\n.button.primary {\r\n    background-color: #1779ba;\r\n    color: #fefefe; }\r\n\r\n.button.primary:hover, .button.primary:focus {\r\n      background-color: #126195;\r\n      color: #fefefe; }\r\n\r\n.button.secondary {\r\n    background-color: #767676;\r\n    color: #fefefe; }\r\n\r\n.button.secondary:hover, .button.secondary:focus {\r\n      background-color: #5e5e5e;\r\n      color: #fefefe; }\r\n\r\n.button.success {\r\n    background-color: #3adb76;\r\n    color: #0a0a0a; }\r\n\r\n.button.success:hover, .button.success:focus {\r\n      background-color: #22bb5b;\r\n      color: #0a0a0a; }\r\n\r\n.button.warning {\r\n    background-color: #ffae00;\r\n    color: #0a0a0a; }\r\n\r\n.button.warning:hover, .button.warning:focus {\r\n      background-color: #cc8b00;\r\n      color: #0a0a0a; }\r\n\r\n.button.alert {\r\n    background-color: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.button.alert:hover, .button.alert:focus {\r\n      background-color: #a53b2a;\r\n      color: #fefefe; }\r\n\r\n.button.hollow {\r\n    border: 1px solid #1779ba;\r\n    color: #1779ba; }\r\n\r\n.button.hollow, .button.hollow:hover, .button.hollow:focus {\r\n      background-color: transparent; }\r\n\r\n.button.hollow:hover, .button.hollow:focus {\r\n      border-color: #0c3d5d;\r\n      color: #0c3d5d; }\r\n\r\n.button.hollow.primary {\r\n      border: 1px solid #1779ba;\r\n      color: #1779ba; }\r\n\r\n.button.hollow.primary:hover, .button.hollow.primary:focus {\r\n        border-color: #0c3d5d;\r\n        color: #0c3d5d; }\r\n\r\n.button.hollow.secondary {\r\n      border: 1px solid #767676;\r\n      color: #767676; }\r\n\r\n.button.hollow.secondary:hover, .button.hollow.secondary:focus {\r\n        border-color: #3b3b3b;\r\n        color: #3b3b3b; }\r\n\r\n.button.hollow.success {\r\n      border: 1px solid #3adb76;\r\n      color: #3adb76; }\r\n\r\n.button.hollow.success:hover, .button.hollow.success:focus {\r\n        border-color: #157539;\r\n        color: #157539; }\r\n\r\n.button.hollow.warning {\r\n      border: 1px solid #ffae00;\r\n      color: #ffae00; }\r\n\r\n.button.hollow.warning:hover, .button.hollow.warning:focus {\r\n        border-color: #805700;\r\n        color: #805700; }\r\n\r\n.button.hollow.alert {\r\n      border: 1px solid #cc4b37;\r\n      color: #cc4b37; }\r\n\r\n.button.hollow.alert:hover, .button.hollow.alert:focus {\r\n        border-color: #67251a;\r\n        color: #67251a; }\r\n\r\n.button.disabled, .button[disabled] {\r\n    opacity: 0.25;\r\n    cursor: not-allowed; }\r\n\r\n.button.disabled, .button.disabled:hover, .button.disabled:focus, .button[disabled], .button[disabled]:hover, .button[disabled]:focus {\r\n      background-color: #1779ba;\r\n      color: #fefefe; }\r\n\r\n.button.disabled.primary, .button[disabled].primary {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n\r\n.button.disabled.primary, .button.disabled.primary:hover, .button.disabled.primary:focus, .button[disabled].primary, .button[disabled].primary:hover, .button[disabled].primary:focus {\r\n        background-color: #1779ba;\r\n        color: #fefefe; }\r\n\r\n.button.disabled.secondary, .button[disabled].secondary {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n\r\n.button.disabled.secondary, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\r\n        background-color: #767676;\r\n        color: #fefefe; }\r\n\r\n.button.disabled.success, .button[disabled].success {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n\r\n.button.disabled.success, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success, .button[disabled].success:hover, .button[disabled].success:focus {\r\n        background-color: #3adb76;\r\n        color: #0a0a0a; }\r\n\r\n.button.disabled.warning, .button[disabled].warning {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n\r\n.button.disabled.warning, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning, .button[disabled].warning:hover, .button[disabled].warning:focus {\r\n        background-color: #ffae00;\r\n        color: #0a0a0a; }\r\n\r\n.button.disabled.alert, .button[disabled].alert {\r\n      opacity: 0.25;\r\n      cursor: not-allowed; }\r\n\r\n.button.disabled.alert, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert, .button[disabled].alert:hover, .button[disabled].alert:focus {\r\n        background-color: #cc4b37;\r\n        color: #fefefe; }\r\n\r\n.button.dropdown::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.4em;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #fefefe transparent transparent;\r\n    position: relative;\r\n    top: 0.4em;\r\n    display: inline-block;\r\n    float: right;\r\n    margin-left: 1em; }\r\n\r\n.button.arrow-only::after {\r\n    top: -0.1em;\r\n    float: none;\r\n    margin-left: 0; }\r\n\r\n.accordion {\r\n  margin-left: 0;\r\n  background: #fefefe;\r\n  list-style-type: none; }\r\n\r\n.accordion-item:first-child > :first-child {\r\n  border-radius: 0 0 0 0; }\r\n\r\n.accordion-item:last-child > :last-child {\r\n  border-radius: 0 0 0 0; }\r\n\r\n.accordion-title {\r\n  position: relative;\r\n  display: block;\r\n  padding: 1.25rem 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-bottom: 0;\r\n  font-size: 0.75rem;\r\n  line-height: 1;\r\n  color: #1779ba; }\r\n\r\n:last-child:not(.is-active) > .accordion-title {\r\n    border-bottom: 1px solid #e6e6e6;\r\n    border-radius: 0 0 0 0; }\r\n\r\n.accordion-title:hover, .accordion-title:focus {\r\n    background-color: #e6e6e6; }\r\n\r\n.accordion-title::before {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    margin-top: -0.5rem;\r\n    content: '+'; }\r\n\r\n.is-active > .accordion-title::before {\r\n    content: '\\2013'; }\r\n\r\n.accordion-content {\r\n  display: none;\r\n  padding: 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-bottom: 0;\r\n  background-color: #fefefe;\r\n  color: #0a0a0a; }\r\n\r\n:last-child > .accordion-content:last-child {\r\n    border-bottom: 1px solid #e6e6e6; }\r\n\r\n.is-accordion-submenu-parent > a {\r\n  position: relative; }\r\n\r\n.is-accordion-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -3px;\r\n    right: 1rem; }\r\n\r\n.is-accordion-submenu-parent[aria-expanded='true'] > a::after {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%; }\r\n\r\n.badge {\r\n  display: inline-block;\r\n  min-width: 2.1em;\r\n  padding: 0.3em;\r\n  border-radius: 50%;\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background: #1779ba;\r\n  color: #fefefe; }\r\n\r\n.badge.primary {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n\r\n.badge.secondary {\r\n    background: #767676;\r\n    color: #fefefe; }\r\n\r\n.badge.success {\r\n    background: #3adb76;\r\n    color: #0a0a0a; }\r\n\r\n.badge.warning {\r\n    background: #ffae00;\r\n    color: #0a0a0a; }\r\n\r\n.badge.alert {\r\n    background: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.breadcrumbs {\r\n  margin: 0 0 1rem 0;\r\n  list-style: none; }\r\n\r\n.breadcrumbs::before, .breadcrumbs::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.breadcrumbs::after {\r\n    clear: both; }\r\n\r\n.breadcrumbs li {\r\n    float: left;\r\n    font-size: 0.6875rem;\r\n    color: #0a0a0a;\r\n    cursor: default;\r\n    text-transform: uppercase; }\r\n\r\n.breadcrumbs li:not(:last-child)::after {\r\n      position: relative;\r\n      top: 1px;\r\n      margin: 0 0.75rem;\r\n      opacity: 1;\r\n      content: \"/\";\r\n      color: #cacaca; }\r\n\r\n.breadcrumbs a {\r\n    color: #1779ba; }\r\n\r\n.breadcrumbs a:hover {\r\n      text-decoration: underline; }\r\n\r\n.breadcrumbs .disabled {\r\n    color: #cacaca;\r\n    cursor: not-allowed; }\r\n\r\n.button-group {\r\n  margin-bottom: 1rem;\r\n  font-size: 0; }\r\n\r\n.button-group::before, .button-group::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.button-group::after {\r\n    clear: both; }\r\n\r\n.button-group .button {\r\n    margin: 0;\r\n    margin-right: 1px;\r\n    margin-bottom: 1px;\r\n    font-size: 0.9rem; }\r\n\r\n.button-group .button:last-child {\r\n      margin-right: 0; }\r\n\r\n.button-group.tiny .button {\r\n    font-size: 0.6rem; }\r\n\r\n.button-group.small .button {\r\n    font-size: 0.75rem; }\r\n\r\n.button-group.large .button {\r\n    font-size: 1.25rem; }\r\n\r\n.button-group.expanded {\r\n    margin-right: -1px; }\r\n\r\n.button-group.expanded::before, .button-group.expanded::after {\r\n      display: none; }\r\n\r\n.button-group.expanded .button:first-child:last-child {\r\n      width: 100%; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(2), .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button {\r\n      display: inline-block;\r\n      width: calc(50% - 1px);\r\n      margin-right: 1px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(2):last-child, .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(3), .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button {\r\n      display: inline-block;\r\n      width: calc(33.33333% - 1px);\r\n      margin-right: 1px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(3):last-child, .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(4), .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button {\r\n      display: inline-block;\r\n      width: calc(25% - 1px);\r\n      margin-right: 1px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(4):last-child, .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(5), .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button {\r\n      display: inline-block;\r\n      width: calc(20% - 1px);\r\n      margin-right: 1px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(5):last-child, .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(6), .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button {\r\n      display: inline-block;\r\n      width: calc(16.66667% - 1px);\r\n      margin-right: 1px; }\r\n\r\n.button-group.expanded .button:first-child:nth-last-child(6):last-child, .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button:last-child {\r\n        margin-right: -6px; }\r\n\r\n.button-group.primary .button {\r\n    background-color: #1779ba;\r\n    color: #fefefe; }\r\n\r\n.button-group.primary .button:hover, .button-group.primary .button:focus {\r\n      background-color: #126195;\r\n      color: #fefefe; }\r\n\r\n.button-group.secondary .button {\r\n    background-color: #767676;\r\n    color: #fefefe; }\r\n\r\n.button-group.secondary .button:hover, .button-group.secondary .button:focus {\r\n      background-color: #5e5e5e;\r\n      color: #fefefe; }\r\n\r\n.button-group.success .button {\r\n    background-color: #3adb76;\r\n    color: #0a0a0a; }\r\n\r\n.button-group.success .button:hover, .button-group.success .button:focus {\r\n      background-color: #22bb5b;\r\n      color: #0a0a0a; }\r\n\r\n.button-group.warning .button {\r\n    background-color: #ffae00;\r\n    color: #0a0a0a; }\r\n\r\n.button-group.warning .button:hover, .button-group.warning .button:focus {\r\n      background-color: #cc8b00;\r\n      color: #0a0a0a; }\r\n\r\n.button-group.alert .button {\r\n    background-color: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.button-group.alert .button:hover, .button-group.alert .button:focus {\r\n      background-color: #a53b2a;\r\n      color: #fefefe; }\r\n\r\n.button-group.stacked .button, .button-group.stacked-for-small .button, .button-group.stacked-for-medium .button {\r\n    width: 100%; }\r\n\r\n.button-group.stacked .button:last-child, .button-group.stacked-for-small .button:last-child, .button-group.stacked-for-medium .button:last-child {\r\n      margin-bottom: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .button-group.stacked-for-small .button {\r\n      width: auto;\r\n      margin-bottom: 0; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n    .button-group.stacked-for-medium .button {\r\n      width: auto;\r\n      margin-bottom: 0; } }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n    .button-group.stacked-for-small.expanded {\r\n      display: block; }\r\n      .button-group.stacked-for-small.expanded .button {\r\n        display: block;\r\n        margin-right: 0; } }\r\n\r\n.callout {\r\n  position: relative;\r\n  margin: 0 0 1rem 0;\r\n  padding: 1rem;\r\n  border: 1px solid rgba(10, 10, 10, 0.25);\r\n  border-radius: 0;\r\n  background-color: white;\r\n  color: #0a0a0a; }\r\n\r\n.callout > :first-child {\r\n    margin-top: 0; }\r\n\r\n.callout > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.callout.primary {\r\n    background-color: #d7ecfa;\r\n    color: #0a0a0a; }\r\n\r\n.callout.secondary {\r\n    background-color: #eaeaea;\r\n    color: #0a0a0a; }\r\n\r\n.callout.success {\r\n    background-color: #e1faea;\r\n    color: #0a0a0a; }\r\n\r\n.callout.warning {\r\n    background-color: #fff3d9;\r\n    color: #0a0a0a; }\r\n\r\n.callout.alert {\r\n    background-color: #f7e4e1;\r\n    color: #0a0a0a; }\r\n\r\n.callout.small {\r\n    padding-top: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 0.5rem; }\r\n\r\n.callout.large {\r\n    padding-top: 3rem;\r\n    padding-right: 3rem;\r\n    padding-bottom: 3rem;\r\n    padding-left: 3rem; }\r\n\r\n.card {\r\n  margin-bottom: 1rem;\r\n  border: 1px solid #e6e6e6;\r\n  border-radius: 0;\r\n  background: #fefefe;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  color: #0a0a0a; }\r\n\r\n.card > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.card-divider {\r\n  padding: 1rem;\r\n  background: #e6e6e6; }\r\n\r\n.card-divider > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.card-section {\r\n  padding: 1rem; }\r\n\r\n.card-section > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.close-button {\r\n  position: absolute;\r\n  color: #8a8a8a;\r\n  cursor: pointer; }\r\n\r\n[data-whatinput='mouse'] .close-button {\r\n    outline: 0; }\r\n\r\n.close-button:hover, .close-button:focus {\r\n    color: #0a0a0a; }\r\n\r\n.close-button.small {\r\n    right: 0.66rem;\r\n    top: 0.33em;\r\n    font-size: 1.5em;\r\n    line-height: 1; }\r\n\r\n.close-button, .close-button.medium {\r\n    right: 1rem;\r\n    top: 0.5rem;\r\n    font-size: 2em;\r\n    line-height: 1; }\r\n\r\n.menu {\r\n  margin: 0;\r\n  list-style-type: none; }\r\n\r\n.menu > li {\r\n    display: table-cell;\r\n    vertical-align: middle; }\r\n\r\n[data-whatinput='mouse'] .menu > li {\r\n      outline: 0; }\r\n\r\n.menu > li > a {\r\n    display: block;\r\n    padding: 0.7rem 1rem;\r\n    line-height: 1; }\r\n\r\n.menu input,\r\n  .menu select,\r\n  .menu a,\r\n  .menu button {\r\n    margin-bottom: 0; }\r\n\r\n.menu > li > a img,\r\n  .menu > li > a i,\r\n  .menu > li > a svg {\r\n    vertical-align: middle; }\r\n\r\n.menu > li > a img + span,\r\n    .menu > li > a i + span,\r\n    .menu > li > a svg + span {\r\n      vertical-align: middle; }\r\n\r\n.menu > li > a img,\r\n  .menu > li > a i,\r\n  .menu > li > a svg {\r\n    margin-right: 0.25rem;\r\n    display: inline-block; }\r\n\r\n.menu > li, .menu.horizontal > li {\r\n    display: table-cell; }\r\n\r\n.menu.expanded {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed; }\r\n\r\n.menu.expanded > li:first-child:last-child {\r\n      width: 100%; }\r\n\r\n.menu.vertical > li {\r\n    display: block; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .menu.medium-horizontal > li {\r\n      display: table-cell; }\r\n    .menu.medium-expanded {\r\n      display: table;\r\n      width: 100%;\r\n      table-layout: fixed; }\r\n      .menu.medium-expanded > li:first-child:last-child {\r\n        width: 100%; }\r\n    .menu.medium-vertical > li {\r\n      display: block; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n    .menu.large-horizontal > li {\r\n      display: table-cell; }\r\n    .menu.large-expanded {\r\n      display: table;\r\n      width: 100%;\r\n      table-layout: fixed; }\r\n      .menu.large-expanded > li:first-child:last-child {\r\n        width: 100%; }\r\n    .menu.large-vertical > li {\r\n      display: block; } }\r\n\r\n.menu.simple li {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    line-height: 1; }\r\n\r\n.menu.simple a {\r\n    padding: 0; }\r\n\r\n.menu.simple li {\r\n    margin-left: 0;\r\n    margin-right: 1rem; }\r\n\r\n.menu.simple.align-right li {\r\n    margin-right: 0;\r\n    margin-left: 1rem; }\r\n\r\n.menu.align-right::before, .menu.align-right::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.menu.align-right::after {\r\n    clear: both; }\r\n\r\n.menu.align-right > li {\r\n    float: right; }\r\n\r\n.menu.icon-top > li > a {\r\n    text-align: center; }\r\n\r\n.menu.icon-top > li > a img,\r\n    .menu.icon-top > li > a i,\r\n    .menu.icon-top > li > a svg {\r\n      display: block;\r\n      margin: 0 auto 0.25rem; }\r\n\r\n.menu.icon-top.vertical a > span {\r\n    margin: auto; }\r\n\r\n.menu.nested {\r\n    margin-left: 1rem; }\r\n\r\n.menu .active > a {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n\r\n.menu.menu-bordered li {\r\n    border: 1px solid #e6e6e6; }\r\n\r\n.menu.menu-bordered li:not(:first-child) {\r\n      border-top: 0; }\r\n\r\n.menu.menu-hover li:hover {\r\n    background-color: #e6e6e6; }\r\n\r\n.menu-text {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  padding: 0.7rem 1rem;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: inherit; }\r\n\r\n.menu-centered {\r\n  text-align: center; }\r\n\r\n.menu-centered > .menu {\r\n    display: inline-block;\r\n    vertical-align: top; }\r\n\r\n.no-js [data-responsive-menu] ul {\r\n  display: none; }\r\n\r\n.menu-icon {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 20px;\r\n  height: 16px;\r\n  cursor: pointer; }\r\n\r\n.menu-icon::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #fefefe;\r\n    box-shadow: 0 7px 0 #fefefe, 0 14px 0 #fefefe;\r\n    content: ''; }\r\n\r\n.menu-icon:hover::after {\r\n    background: #cacaca;\r\n    box-shadow: 0 7px 0 #cacaca, 0 14px 0 #cacaca; }\r\n\r\n.menu-icon.dark {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 20px;\r\n  height: 16px;\r\n  cursor: pointer; }\r\n\r\n.menu-icon.dark::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #0a0a0a;\r\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a;\r\n    content: ''; }\r\n\r\n.menu-icon.dark:hover::after {\r\n    background: #8a8a8a;\r\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\r\n\r\n.is-drilldown {\r\n  position: relative;\r\n  overflow: hidden; }\r\n\r\n.is-drilldown li {\r\n    display: block; }\r\n\r\n.is-drilldown.animate-height {\r\n    transition: height 0.5s; }\r\n\r\n.is-drilldown-submenu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100%;\r\n  z-index: -1;\r\n  width: 100%;\r\n  background: #fefefe;\r\n  transition: -webkit-transform 0.15s linear;\r\n  transition: transform 0.15s linear;\r\n  transition: transform 0.15s linear, -webkit-transform 0.15s linear; }\r\n\r\n.is-drilldown-submenu.is-active {\r\n    z-index: 1;\r\n    display: block;\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%); }\r\n\r\n.is-drilldown-submenu.is-closing {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%); }\r\n\r\n.drilldown-submenu-cover-previous {\r\n  min-height: 100%; }\r\n\r\n.is-drilldown-submenu-parent > a {\r\n  position: relative; }\r\n\r\n.is-drilldown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -6px;\r\n    right: 1rem; }\r\n\r\n.js-drilldown-back > a::before {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-left-width: 0;\r\n  border-right-style: solid;\r\n  border-color: transparent #1779ba transparent transparent;\r\n  border-left-width: 0;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 0.75rem;\r\n  border-left-width: 0; }\r\n\r\n.dropdown-pane {\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: block;\r\n  width: 300px;\r\n  padding: 1rem;\r\n  visibility: hidden;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  font-size: 1rem; }\r\n\r\n.dropdown-pane.is-open {\r\n    visibility: visible; }\r\n\r\n.dropdown-pane.tiny {\r\n  width: 100px; }\r\n\r\n.dropdown-pane.small {\r\n  width: 200px; }\r\n\r\n.dropdown-pane.large {\r\n  width: 400px; }\r\n\r\n.dropdown.menu > li.opens-left > .is-dropdown-submenu {\r\n  top: 100%;\r\n  right: 0;\r\n  left: auto; }\r\n\r\n.dropdown.menu > li.opens-right > .is-dropdown-submenu {\r\n  top: 100%;\r\n  right: auto;\r\n  left: 0; }\r\n\r\n.dropdown.menu > li.is-dropdown-submenu-parent > a {\r\n  position: relative;\r\n  padding-right: 1.5rem; }\r\n\r\n.dropdown.menu > li.is-dropdown-submenu-parent > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-bottom-width: 0;\r\n  border-top-style: solid;\r\n  border-color: #1779ba transparent transparent;\r\n  right: 5px;\r\n  margin-top: -3px; }\r\n\r\n[data-whatinput='mouse'] .dropdown.menu a {\r\n  outline: 0; }\r\n\r\n.no-js .dropdown.menu ul {\r\n  display: none; }\r\n\r\n.dropdown.menu.vertical > li .is-dropdown-submenu {\r\n  top: 0; }\r\n\r\n.dropdown.menu.vertical > li.opens-left > .is-dropdown-submenu {\r\n  right: 100%;\r\n  left: auto; }\r\n\r\n.dropdown.menu.vertical > li.opens-right > .is-dropdown-submenu {\r\n  right: auto;\r\n  left: 100%; }\r\n\r\n.dropdown.menu.vertical > li > a::after {\r\n  right: 14px; }\r\n\r\n.dropdown.menu.vertical > li.opens-left > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-left-width: 0;\r\n  border-right-style: solid;\r\n  border-color: transparent #1779ba transparent transparent; }\r\n\r\n.dropdown.menu.vertical > li.opens-right > a::after {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: inset 6px;\r\n  content: '';\r\n  border-right-width: 0;\r\n  border-left-style: solid;\r\n  border-color: transparent transparent transparent #1779ba; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .dropdown.menu.medium-horizontal > li.opens-left > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: 0;\r\n    left: auto; }\r\n  .dropdown.menu.medium-horizontal > li.opens-right > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: auto;\r\n    left: 0; }\r\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a {\r\n    position: relative;\r\n    padding-right: 1.5rem; }\r\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    right: 5px;\r\n    margin-top: -3px; }\r\n  .dropdown.menu.medium-vertical > li .is-dropdown-submenu {\r\n    top: 0; }\r\n  .dropdown.menu.medium-vertical > li.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n  .dropdown.menu.medium-vertical > li.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n  .dropdown.menu.medium-vertical > li > a::after {\r\n    right: 14px; }\r\n  .dropdown.menu.medium-vertical > li.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n  .dropdown.menu.medium-vertical > li.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .dropdown.menu.large-horizontal > li.opens-left > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: 0;\r\n    left: auto; }\r\n  .dropdown.menu.large-horizontal > li.opens-right > .is-dropdown-submenu {\r\n    top: 100%;\r\n    right: auto;\r\n    left: 0; }\r\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a {\r\n    position: relative;\r\n    padding-right: 1.5rem; }\r\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #1779ba transparent transparent;\r\n    right: 5px;\r\n    margin-top: -3px; }\r\n  .dropdown.menu.large-vertical > li .is-dropdown-submenu {\r\n    top: 0; }\r\n  .dropdown.menu.large-vertical > li.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n  .dropdown.menu.large-vertical > li.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n  .dropdown.menu.large-vertical > li > a::after {\r\n    right: 14px; }\r\n  .dropdown.menu.large-vertical > li.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n  .dropdown.menu.large-vertical > li.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; } }\r\n\r\n.dropdown.menu.align-right .is-dropdown-submenu.first-sub {\r\n  top: 100%;\r\n  right: 0;\r\n  left: auto; }\r\n\r\n.is-dropdown-menu.vertical {\r\n  width: 100px; }\r\n\r\n.is-dropdown-menu.vertical.align-right {\r\n    float: right; }\r\n\r\n.is-dropdown-submenu-parent {\r\n  position: relative; }\r\n\r\n.is-dropdown-submenu-parent a::after {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    margin-top: -6px; }\r\n\r\n.is-dropdown-submenu-parent.opens-inner > .is-dropdown-submenu {\r\n    top: 100%;\r\n    left: auto; }\r\n\r\n.is-dropdown-submenu-parent.opens-left > .is-dropdown-submenu {\r\n    right: 100%;\r\n    left: auto; }\r\n\r\n.is-dropdown-submenu-parent.opens-right > .is-dropdown-submenu {\r\n    right: auto;\r\n    left: 100%; }\r\n\r\n.is-dropdown-submenu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100%;\r\n  z-index: 1;\r\n  display: none;\r\n  min-width: 200px;\r\n  border: 1px solid #cacaca;\r\n  background: #fefefe; }\r\n\r\n.is-dropdown-submenu .is-dropdown-submenu-parent > a::after {\r\n    right: 14px; }\r\n\r\n.is-dropdown-submenu .is-dropdown-submenu-parent.opens-left > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #1779ba transparent transparent; }\r\n\r\n.is-dropdown-submenu .is-dropdown-submenu-parent.opens-right > a::after {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 6px;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #1779ba; }\r\n\r\n.is-dropdown-submenu .is-dropdown-submenu {\r\n    margin-top: -1px; }\r\n\r\n.is-dropdown-submenu > li {\r\n    width: 100%; }\r\n\r\n.is-dropdown-submenu.js-dropdown-active {\r\n    display: block; }\r\n\r\n.responsive-embed,\r\n.flex-video {\r\n  position: relative;\r\n  height: 0;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 75%;\r\n  overflow: hidden; }\r\n\r\n.responsive-embed iframe,\r\n  .responsive-embed object,\r\n  .responsive-embed embed,\r\n  .responsive-embed video,\r\n  .flex-video iframe,\r\n  .flex-video object,\r\n  .flex-video embed,\r\n  .flex-video video {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%; }\r\n\r\n.responsive-embed.widescreen,\r\n  .flex-video.widescreen {\r\n    padding-bottom: 56.25%; }\r\n\r\n.label {\r\n  display: inline-block;\r\n  padding: 0.33333rem 0.5rem;\r\n  border-radius: 0;\r\n  font-size: 0.8rem;\r\n  line-height: 1;\r\n  white-space: nowrap;\r\n  cursor: default;\r\n  background: #1779ba;\r\n  color: #fefefe; }\r\n\r\n.label.primary {\r\n    background: #1779ba;\r\n    color: #fefefe; }\r\n\r\n.label.secondary {\r\n    background: #767676;\r\n    color: #fefefe; }\r\n\r\n.label.success {\r\n    background: #3adb76;\r\n    color: #0a0a0a; }\r\n\r\n.label.warning {\r\n    background: #ffae00;\r\n    color: #0a0a0a; }\r\n\r\n.label.alert {\r\n    background: #cc4b37;\r\n    color: #fefefe; }\r\n\r\n.media-object {\r\n  display: block;\r\n  margin-bottom: 1rem; }\r\n\r\n.media-object img {\r\n    max-width: none; }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n    .media-object.stack-for-small .media-object-section {\r\n      padding: 0;\r\n      padding-bottom: 1rem;\r\n      display: block; }\r\n      .media-object.stack-for-small .media-object-section img {\r\n        width: 100%; } }\r\n\r\n.media-object-section {\r\n  display: table-cell;\r\n  vertical-align: top; }\r\n\r\n.media-object-section:first-child {\r\n    padding-right: 1rem; }\r\n\r\n.media-object-section:last-child:not(:nth-child(2)) {\r\n    padding-left: 1rem; }\r\n\r\n.media-object-section > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n.media-object-section.middle {\r\n    vertical-align: middle; }\r\n\r\n.media-object-section.bottom {\r\n    vertical-align: bottom; }\r\n\r\n.is-off-canvas-open {\r\n  overflow: hidden; }\r\n\r\n.js-off-canvas-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: opacity 0.5s ease, visibility 0.5s ease;\r\n  background: rgba(254, 254, 254, 0.25);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  overflow: hidden; }\r\n\r\n.js-off-canvas-overlay.is-visible {\r\n    opacity: 1;\r\n    visibility: visible; }\r\n\r\n.js-off-canvas-overlay.is-closable {\r\n    cursor: pointer; }\r\n\r\n.js-off-canvas-overlay.is-overlay-absolute {\r\n    position: absolute; }\r\n\r\n.js-off-canvas-overlay.is-overlay-fixed {\r\n    position: fixed; }\r\n\r\n.off-canvas-wrapper {\r\n  position: relative;\r\n  overflow: hidden; }\r\n\r\n.off-canvas {\r\n  position: fixed;\r\n  z-index: 1;\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background: #e6e6e6; }\r\n\r\n[data-whatinput='mouse'] .off-canvas {\r\n    outline: 0; }\r\n\r\n.off-canvas.is-transition-overlap {\r\n    z-index: 10; }\r\n\r\n.off-canvas.is-transition-overlap.is-open {\r\n      box-shadow: 0 0 10px rgba(10, 10, 10, 0.7); }\r\n\r\n.off-canvas.is-open {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0); }\r\n\r\n.off-canvas-absolute {\r\n  position: absolute;\r\n  z-index: 1;\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background: #e6e6e6; }\r\n\r\n[data-whatinput='mouse'] .off-canvas-absolute {\r\n    outline: 0; }\r\n\r\n.off-canvas-absolute.is-transition-overlap {\r\n    z-index: 10; }\r\n\r\n.off-canvas-absolute.is-transition-overlap.is-open {\r\n      box-shadow: 0 0 10px rgba(10, 10, 10, 0.7); }\r\n\r\n.off-canvas-absolute.is-open {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0); }\r\n\r\n.position-left {\r\n  top: 0;\r\n  left: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  -webkit-transform: translateX(-250px);\r\n          transform: translateX(-250px);\r\n  overflow-y: auto; }\r\n\r\n.position-left.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateX(250px);\r\n            transform: translateX(250px); }\r\n\r\n.position-left.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 1px;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n\r\n.position-left.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-right {\r\n  top: 0;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  -webkit-transform: translateX(250px);\r\n          transform: translateX(250px);\r\n  overflow-y: auto; }\r\n\r\n.position-right.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateX(-250px);\r\n            transform: translateX(-250px); }\r\n\r\n.position-right.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 1px;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n\r\n.position-right.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-top {\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 250px;\r\n  -webkit-transform: translateY(-250px);\r\n          transform: translateY(-250px);\r\n  overflow-x: auto; }\r\n\r\n.position-top.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateY(250px);\r\n            transform: translateY(250px); }\r\n\r\n.position-top.is-transition-push::after {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n\r\n.position-top.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.position-bottom {\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 250px;\r\n  -webkit-transform: translateY(250px);\r\n          transform: translateY(250px);\r\n  overflow-x: auto; }\r\n\r\n.position-bottom.is-open ~ .off-canvas-content {\r\n    -webkit-transform: translateY(-250px);\r\n            transform: translateY(-250px); }\r\n\r\n.position-bottom.is-transition-push::after {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\r\n    content: \" \"; }\r\n\r\n.position-bottom.is-transition-overlap.is-open ~ .off-canvas-content {\r\n    -webkit-transform: none;\r\n            transform: none; }\r\n\r\n.off-canvas-content {\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .position-left.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-left.reveal-for-medium ~ .off-canvas-content {\r\n      margin-left: 250px; }\r\n  .position-right.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-right.reveal-for-medium ~ .off-canvas-content {\r\n      margin-right: 250px; }\r\n  .position-top.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-top.reveal-for-medium ~ .off-canvas-content {\r\n      margin-top: 250px; }\r\n  .position-bottom.reveal-for-medium {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-bottom.reveal-for-medium ~ .off-canvas-content {\r\n      margin-bottom: 250px; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .position-left.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-left.reveal-for-large ~ .off-canvas-content {\r\n      margin-left: 250px; }\r\n  .position-right.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-right.reveal-for-large ~ .off-canvas-content {\r\n      margin-right: 250px; }\r\n  .position-top.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-top.reveal-for-large ~ .off-canvas-content {\r\n      margin-top: 250px; }\r\n  .position-bottom.reveal-for-large {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    z-index: 1; }\r\n    .position-bottom.reveal-for-large ~ .off-canvas-content {\r\n      margin-bottom: 250px; } }\r\n\r\n.orbit {\r\n  position: relative; }\r\n\r\n.orbit-container {\r\n  position: relative;\r\n  height: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  overflow: hidden; }\r\n\r\n.orbit-slide {\r\n  width: 100%; }\r\n\r\n.orbit-slide.no-motionui.is-active {\r\n    top: 0;\r\n    left: 0; }\r\n\r\n.orbit-figure {\r\n  margin: 0; }\r\n\r\n.orbit-image {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin: 0; }\r\n\r\n.orbit-caption {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  padding: 1rem;\r\n  background-color: rgba(10, 10, 10, 0.5);\r\n  color: #fefefe; }\r\n\r\n.orbit-previous, .orbit-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  z-index: 10;\r\n  padding: 1rem;\r\n  color: #fefefe; }\r\n\r\n[data-whatinput='mouse'] .orbit-previous, [data-whatinput='mouse'] .orbit-next {\r\n    outline: 0; }\r\n\r\n.orbit-previous:hover, .orbit-next:hover, .orbit-previous:active, .orbit-next:active, .orbit-previous:focus, .orbit-next:focus {\r\n    background-color: rgba(10, 10, 10, 0.5); }\r\n\r\n.orbit-previous {\r\n  left: 0; }\r\n\r\n.orbit-next {\r\n  left: auto;\r\n  right: 0; }\r\n\r\n.orbit-bullets {\r\n  position: relative;\r\n  margin-top: 0.8rem;\r\n  margin-bottom: 0.8rem;\r\n  text-align: center; }\r\n\r\n[data-whatinput='mouse'] .orbit-bullets {\r\n    outline: 0; }\r\n\r\n.orbit-bullets button {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    margin: 0.1rem;\r\n    border-radius: 50%;\r\n    background-color: #cacaca; }\r\n\r\n.orbit-bullets button:hover {\r\n      background-color: #8a8a8a; }\r\n\r\n.orbit-bullets button.is-active {\r\n      background-color: #8a8a8a; }\r\n\r\n.pagination {\r\n  margin-left: 0;\r\n  margin-bottom: 1rem; }\r\n\r\n.pagination::before, .pagination::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.pagination::after {\r\n    clear: both; }\r\n\r\n.pagination li {\r\n    margin-right: 0.0625rem;\r\n    border-radius: 0;\r\n    font-size: 0.875rem;\r\n    display: none; }\r\n\r\n.pagination li:last-child, .pagination li:first-child {\r\n      display: inline-block; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n      .pagination li {\r\n        display: inline-block; } }\r\n\r\n.pagination a,\r\n  .pagination button {\r\n    display: block;\r\n    padding: 0.1875rem 0.625rem;\r\n    border-radius: 0;\r\n    color: #0a0a0a; }\r\n\r\n.pagination a:hover,\r\n    .pagination button:hover {\r\n      background: #e6e6e6; }\r\n\r\n.pagination .current {\r\n    padding: 0.1875rem 0.625rem;\r\n    background: #1779ba;\r\n    color: #fefefe;\r\n    cursor: default; }\r\n\r\n.pagination .disabled {\r\n    padding: 0.1875rem 0.625rem;\r\n    color: #cacaca;\r\n    cursor: not-allowed; }\r\n\r\n.pagination .disabled:hover {\r\n      background: transparent; }\r\n\r\n.pagination .ellipsis::after {\r\n    padding: 0.1875rem 0.625rem;\r\n    content: '\\2026';\r\n    color: #0a0a0a; }\r\n\r\n.pagination-previous a::before,\r\n.pagination-previous.disabled::before {\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  content: '\\00ab'; }\r\n\r\n.pagination-next a::after,\r\n.pagination-next.disabled::after {\r\n  display: inline-block;\r\n  margin-left: 0.5rem;\r\n  content: '\\00bb'; }\r\n\r\n.progress {\r\n  height: 1rem;\r\n  margin-bottom: 1rem;\r\n  border-radius: 0;\r\n  background-color: #cacaca; }\r\n\r\n.progress.primary .progress-meter {\r\n    background-color: #1779ba; }\r\n\r\n.progress.secondary .progress-meter {\r\n    background-color: #767676; }\r\n\r\n.progress.success .progress-meter {\r\n    background-color: #3adb76; }\r\n\r\n.progress.warning .progress-meter {\r\n    background-color: #ffae00; }\r\n\r\n.progress.alert .progress-meter {\r\n    background-color: #cc4b37; }\r\n\r\n.progress-meter {\r\n  position: relative;\r\n  display: block;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: #1779ba; }\r\n\r\n.progress-meter-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n  font-weight: bold;\r\n  color: #fefefe;\r\n  white-space: nowrap; }\r\n\r\n.slider {\r\n  position: relative;\r\n  height: 0.5rem;\r\n  margin-top: 1.25rem;\r\n  margin-bottom: 2.25rem;\r\n  background-color: #e6e6e6;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  touch-action: none; }\r\n\r\n.slider-fill {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: 0.5rem;\r\n  background-color: #cacaca;\r\n  transition: all 0.2s ease-in-out; }\r\n\r\n.slider-fill.is-dragging {\r\n    transition: all 0s linear; }\r\n\r\n.slider-handle {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 1;\r\n  display: inline-block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  border-radius: 0;\r\n  background-color: #1779ba;\r\n  transition: all 0.2s ease-in-out;\r\n  touch-action: manipulation; }\r\n\r\n[data-whatinput='mouse'] .slider-handle {\r\n    outline: 0; }\r\n\r\n.slider-handle:hover {\r\n    background-color: #14679e; }\r\n\r\n.slider-handle.is-dragging {\r\n    transition: all 0s linear; }\r\n\r\n.slider.disabled,\r\n.slider[disabled] {\r\n  opacity: 0.25;\r\n  cursor: not-allowed; }\r\n\r\n.slider.vertical {\r\n  display: inline-block;\r\n  width: 0.5rem;\r\n  height: 12.5rem;\r\n  margin: 0 1.25rem;\r\n  -webkit-transform: scale(1, -1);\r\n          transform: scale(1, -1); }\r\n\r\n.slider.vertical .slider-fill {\r\n    top: 0;\r\n    width: 0.5rem;\r\n    max-height: 100%; }\r\n\r\n.slider.vertical .slider-handle {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 1.4rem;\r\n    height: 1.4rem;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%); }\r\n\r\n.sticky-container {\r\n  position: relative; }\r\n\r\n.sticky {\r\n  position: relative;\r\n  z-index: 0;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0); }\r\n\r\n.sticky.is-stuck {\r\n  position: fixed;\r\n  z-index: 5; }\r\n\r\n.sticky.is-stuck.is-at-top {\r\n    top: 0; }\r\n\r\n.sticky.is-stuck.is-at-bottom {\r\n    bottom: 0; }\r\n\r\n.sticky.is-anchored {\r\n  position: relative;\r\n  right: auto;\r\n  left: auto; }\r\n\r\n.sticky.is-anchored.is-at-bottom {\r\n    bottom: 0; }\r\n\r\nbody.is-reveal-open {\r\n  overflow: hidden; }\r\n\r\nhtml.is-reveal-open,\r\nhtml.is-reveal-open body {\r\n  min-height: 100%;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; }\r\n\r\n.reveal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1005;\r\n  display: none;\r\n  background-color: rgba(10, 10, 10, 0.45);\r\n  overflow-y: scroll; }\r\n\r\n.reveal {\r\n  z-index: 1006;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  display: none;\r\n  padding: 1rem;\r\n  border: 1px solid #cacaca;\r\n  border-radius: 0;\r\n  background-color: #fefefe;\r\n  position: relative;\r\n  top: 100px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  overflow-y: auto; }\r\n\r\n[data-whatinput='mouse'] .reveal {\r\n    outline: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal {\r\n      min-height: 0; } }\r\n\r\n.reveal .column, .reveal .columns,\r\n  .reveal .columns {\r\n    min-width: 0; }\r\n\r\n.reveal > :last-child {\r\n    margin-bottom: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal {\r\n      width: 600px;\r\n      max-width: 75rem; } }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal .reveal {\r\n      right: auto;\r\n      left: auto;\r\n      margin: 0 auto; } }\r\n\r\n.reveal.collapse {\r\n    padding: 0; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal.tiny {\r\n      width: 30%;\r\n      max-width: 75rem; } }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal.small {\r\n      width: 50%;\r\n      max-width: 75rem; } }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .reveal.large {\r\n      width: 90%;\r\n      max-width: 75rem; } }\r\n\r\n.reveal.full {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    max-width: none;\r\n    height: 100%;\r\n    height: 100vh;\r\n    min-height: 100vh;\r\n    margin-left: 0;\r\n    border: 0;\r\n    border-radius: 0; }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n    .reveal {\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      max-width: none;\r\n      height: 100%;\r\n      height: 100vh;\r\n      min-height: 100vh;\r\n      margin-left: 0;\r\n      border: 0;\r\n      border-radius: 0; } }\r\n\r\n.reveal.without-overlay {\r\n    position: fixed; }\r\n\r\n.switch {\r\n  height: 2rem;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  outline: 0;\r\n  font-size: 0.875rem;\r\n  font-weight: bold;\r\n  color: #fefefe;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; }\r\n\r\n.switch-input {\r\n  position: absolute;\r\n  margin-bottom: 0;\r\n  opacity: 0; }\r\n\r\n.switch-paddle {\r\n  position: relative;\r\n  display: block;\r\n  width: 4rem;\r\n  height: 2rem;\r\n  border-radius: 0;\r\n  background: #cacaca;\r\n  transition: all 0.25s ease-out;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  cursor: pointer; }\r\n\r\ninput + .switch-paddle {\r\n    margin: 0; }\r\n\r\n.switch-paddle::after {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    display: block;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n    border-radius: 0;\r\n    background: #fefefe;\r\n    transition: all 0.25s ease-out;\r\n    content: ''; }\r\n\r\ninput:checked ~ .switch-paddle {\r\n    background: #1779ba; }\r\n\r\ninput:checked ~ .switch-paddle::after {\r\n      left: 2.25rem; }\r\n\r\n[data-whatinput='mouse'] input:focus ~ .switch-paddle {\r\n    outline: 0; }\r\n\r\n.switch-active, .switch-inactive {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%); }\r\n\r\n.switch-active {\r\n  left: 8%;\r\n  display: none; }\r\n\r\ninput:checked + label > .switch-active {\r\n    display: block; }\r\n\r\n.switch-inactive {\r\n  right: 15%; }\r\n\r\ninput:checked + label > .switch-inactive {\r\n    display: none; }\r\n\r\n.switch.tiny {\r\n  height: 1.5rem; }\r\n\r\n.switch.tiny .switch-paddle {\r\n    width: 3rem;\r\n    height: 1.5rem;\r\n    font-size: 0.625rem; }\r\n\r\n.switch.tiny .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 1rem;\r\n    height: 1rem; }\r\n\r\n.switch.tiny input:checked ~ .switch-paddle::after {\r\n    left: 1.75rem; }\r\n\r\n.switch.small {\r\n  height: 1.75rem; }\r\n\r\n.switch.small .switch-paddle {\r\n    width: 3.5rem;\r\n    height: 1.75rem;\r\n    font-size: 0.75rem; }\r\n\r\n.switch.small .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 1.25rem;\r\n    height: 1.25rem; }\r\n\r\n.switch.small input:checked ~ .switch-paddle::after {\r\n    left: 2rem; }\r\n\r\n.switch.large {\r\n  height: 2.5rem; }\r\n\r\n.switch.large .switch-paddle {\r\n    width: 5rem;\r\n    height: 2.5rem;\r\n    font-size: 1rem; }\r\n\r\n.switch.large .switch-paddle::after {\r\n    top: 0.25rem;\r\n    left: 0.25rem;\r\n    width: 2rem;\r\n    height: 2rem; }\r\n\r\n.switch.large input:checked ~ .switch-paddle::after {\r\n    left: 2.75rem; }\r\n\r\ntable {\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  border-radius: 0; }\r\n\r\ntable thead,\r\n  table tbody,\r\n  table tfoot {\r\n    border: 1px solid #f1f1f1;\r\n    background-color: #fefefe; }\r\n\r\ntable caption {\r\n    padding: 0.5rem 0.625rem 0.625rem;\r\n    font-weight: bold; }\r\n\r\ntable thead {\r\n    background: #f8f8f8;\r\n    color: #0a0a0a; }\r\n\r\ntable tfoot {\r\n    background: #f1f1f1;\r\n    color: #0a0a0a; }\r\n\r\ntable thead tr,\r\n  table tfoot tr {\r\n    background: transparent; }\r\n\r\ntable thead th,\r\n  table thead td,\r\n  table tfoot th,\r\n  table tfoot td {\r\n    padding: 0.5rem 0.625rem 0.625rem;\r\n    font-weight: bold;\r\n    text-align: left; }\r\n\r\ntable tbody th,\r\n  table tbody td {\r\n    padding: 0.5rem 0.625rem 0.625rem; }\r\n\r\ntable tbody tr:nth-child(even) {\r\n    border-bottom: 0;\r\n    background-color: #f1f1f1; }\r\n\r\ntable.unstriped tbody {\r\n    background-color: #fefefe; }\r\n\r\ntable.unstriped tbody tr {\r\n      border-bottom: 0;\r\n      border-bottom: 1px solid #f1f1f1;\r\n      background-color: #fefefe; }\r\n\r\n@media screen and (max-width: 63.9375em) {\r\n  table.stack thead {\r\n    display: none; }\r\n  table.stack tfoot {\r\n    display: none; }\r\n  table.stack tr,\r\n  table.stack th,\r\n  table.stack td {\r\n    display: block; }\r\n  table.stack td {\r\n    border-top: 0; } }\r\n\r\ntable.scroll {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto; }\r\n\r\ntable.hover thead tr:hover {\r\n  background-color: #f3f3f3; }\r\n\r\ntable.hover tfoot tr:hover {\r\n  background-color: #ececec; }\r\n\r\ntable.hover tbody tr:hover {\r\n  background-color: #f9f9f9; }\r\n\r\ntable.hover:not(.unstriped) tr:nth-of-type(even):hover {\r\n  background-color: #ececec; }\r\n\r\n.table-scroll {\r\n  overflow-x: auto; }\r\n\r\n.table-scroll table {\r\n    width: auto; }\r\n\r\n.tabs {\r\n  margin: 0;\r\n  border: 1px solid #e6e6e6;\r\n  background: #fefefe;\r\n  list-style-type: none; }\r\n\r\n.tabs::before, .tabs::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.tabs::after {\r\n    clear: both; }\r\n\r\n.tabs.vertical > li {\r\n  display: block;\r\n  float: none;\r\n  width: auto; }\r\n\r\n.tabs.simple > li > a {\r\n  padding: 0; }\r\n\r\n.tabs.simple > li > a:hover {\r\n    background: transparent; }\r\n\r\n.tabs.primary {\r\n  background: #1779ba; }\r\n\r\n.tabs.primary > li > a {\r\n    color: #fefefe; }\r\n\r\n.tabs.primary > li > a:hover, .tabs.primary > li > a:focus {\r\n      background: #1673b1; }\r\n\r\n.tabs-title {\r\n  float: left; }\r\n\r\n.tabs-title > a {\r\n    display: block;\r\n    padding: 1.25rem 1.5rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1;\r\n    color: #1779ba; }\r\n\r\n.tabs-title > a:hover {\r\n      background: #fefefe;\r\n      color: #1468a0; }\r\n\r\n.tabs-title > a:focus, .tabs-title > a[aria-selected='true'] {\r\n      background: #e6e6e6;\r\n      color: #1779ba; }\r\n\r\n.tabs-content {\r\n  border: 1px solid #e6e6e6;\r\n  border-top: 0;\r\n  background: #fefefe;\r\n  color: #0a0a0a;\r\n  transition: all 0.5s ease; }\r\n\r\n.tabs-content.vertical {\r\n  border: 1px solid #e6e6e6;\r\n  border-left: 0; }\r\n\r\n.tabs-panel {\r\n  display: none;\r\n  padding: 1rem; }\r\n\r\n.tabs-panel[aria-hidden=\"false\"] {\r\n    display: block; }\r\n\r\n.thumbnail {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n  border: solid 4px #fefefe;\r\n  border-radius: 0;\r\n  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);\r\n  line-height: 0; }\r\n\r\na.thumbnail {\r\n  transition: box-shadow 200ms ease-out; }\r\n\r\na.thumbnail:hover, a.thumbnail:focus {\r\n    box-shadow: 0 0 6px 1px rgba(23, 121, 186, 0.5); }\r\n\r\na.thumbnail image {\r\n    box-shadow: none; }\r\n\r\n.title-bar {\r\n  padding: 0.5rem;\r\n  background: #0a0a0a;\r\n  color: #fefefe; }\r\n\r\n.title-bar::before, .title-bar::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.title-bar::after {\r\n    clear: both; }\r\n\r\n.title-bar .menu-icon {\r\n    margin-left: 0.25rem;\r\n    margin-right: 0.25rem; }\r\n\r\n.title-bar-left {\r\n  float: left; }\r\n\r\n.title-bar-right {\r\n  float: right;\r\n  text-align: right; }\r\n\r\n.title-bar-title {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  font-weight: bold; }\r\n\r\n.has-tip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: dotted 1px #8a8a8a;\r\n  font-weight: bold;\r\n  cursor: help; }\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  top: calc(100% + 0.6495rem);\r\n  z-index: 1200;\r\n  max-width: 10rem;\r\n  padding: 0.75rem;\r\n  border-radius: 0;\r\n  background-color: #0a0a0a;\r\n  font-size: 80%;\r\n  color: #fefefe; }\r\n\r\n.tooltip::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-top-width: 0;\r\n    border-bottom-style: solid;\r\n    border-color: transparent transparent #0a0a0a;\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%); }\r\n\r\n.tooltip.top::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-bottom-width: 0;\r\n    border-top-style: solid;\r\n    border-color: #0a0a0a transparent transparent;\r\n    top: 100%;\r\n    bottom: auto; }\r\n\r\n.tooltip.left::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-right-width: 0;\r\n    border-left-style: solid;\r\n    border-color: transparent transparent transparent #0a0a0a;\r\n    top: 50%;\r\n    bottom: auto;\r\n    left: 100%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); }\r\n\r\n.tooltip.right::before {\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border: inset 0.75rem;\r\n    content: '';\r\n    border-left-width: 0;\r\n    border-right-style: solid;\r\n    border-color: transparent #0a0a0a transparent transparent;\r\n    top: 50%;\r\n    right: 100%;\r\n    bottom: auto;\r\n    left: auto;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); }\r\n\r\n.top-bar {\r\n  padding: 0.5rem; }\r\n\r\n.top-bar::before, .top-bar::after {\r\n    display: table;\r\n    content: ' '; }\r\n\r\n.top-bar::after {\r\n    clear: both; }\r\n\r\n.top-bar,\r\n  .top-bar ul {\r\n    background-color: #e6e6e6; }\r\n\r\n.top-bar input {\r\n    max-width: 200px;\r\n    margin-right: 1rem; }\r\n\r\n.top-bar .input-group-field {\r\n    width: 100%;\r\n    margin-right: 0; }\r\n\r\n.top-bar input.button {\r\n    width: auto; }\r\n\r\n.top-bar .top-bar-left,\r\n  .top-bar .top-bar-right {\r\n    width: 100%; }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n    .top-bar .top-bar-left,\r\n    .top-bar .top-bar-right {\r\n      width: auto; } }\r\n\r\n@media screen and (max-width: 63.9375em) {\r\n    .top-bar.stacked-for-medium .top-bar-left,\r\n    .top-bar.stacked-for-medium .top-bar-right {\r\n      width: 100%; } }\r\n\r\n@media screen and (max-width: 74.9375em) {\r\n    .top-bar.stacked-for-large .top-bar-left,\r\n    .top-bar.stacked-for-large .top-bar-right {\r\n      width: 100%; } }\r\n\r\n.top-bar-title {\r\n  display: inline-block;\r\n  float: left;\r\n  padding: 0.5rem 1rem 0.5rem 0; }\r\n\r\n.top-bar-title .menu-icon {\r\n    bottom: 2px; }\r\n\r\n.top-bar-left {\r\n  float: left; }\r\n\r\n.top-bar-right {\r\n  float: right; }\r\n\r\n.hide {\r\n  display: none !important; }\r\n\r\n.invisible {\r\n  visibility: hidden; }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n  .hide-for-small-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 0em), screen and (min-width: 40em) {\r\n  .show-for-small-only {\r\n    display: none !important; } }\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .hide-for-medium {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 39.9375em) {\r\n  .show-for-medium {\r\n    display: none !important; } }\r\n\r\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\r\n  .hide-for-medium-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 39.9375em), screen and (min-width: 64em) {\r\n  .show-for-medium-only {\r\n    display: none !important; } }\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .hide-for-large {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 63.9375em) {\r\n  .show-for-large {\r\n    display: none !important; } }\r\n\r\n@media screen and (min-width: 64em) and (max-width: 74.9375em) {\r\n  .hide-for-large-only {\r\n    display: none !important; } }\r\n\r\n@media screen and (max-width: 63.9375em), screen and (min-width: 75em) {\r\n  .show-for-large-only {\r\n    display: none !important; } }\r\n\r\n.show-for-sr,\r\n.show-on-focus {\r\n  position: absolute !important;\r\n  width: 1px;\r\n  height: 1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0); }\r\n\r\n.show-on-focus:active, .show-on-focus:focus {\r\n  position: static !important;\r\n  width: auto;\r\n  height: auto;\r\n  overflow: visible;\r\n  clip: auto; }\r\n\r\n.show-for-landscape,\r\n.hide-for-portrait {\r\n  display: block !important; }\r\n\r\n@media screen and (orientation: landscape) {\r\n    .show-for-landscape,\r\n    .hide-for-portrait {\r\n      display: block !important; } }\r\n\r\n@media screen and (orientation: portrait) {\r\n    .show-for-landscape,\r\n    .hide-for-portrait {\r\n      display: none !important; } }\r\n\r\n.hide-for-landscape,\r\n.show-for-portrait {\r\n  display: none !important; }\r\n\r\n@media screen and (orientation: landscape) {\r\n    .hide-for-landscape,\r\n    .show-for-portrait {\r\n      display: none !important; } }\r\n\r\n@media screen and (orientation: portrait) {\r\n    .hide-for-landscape,\r\n    .show-for-portrait {\r\n      display: block !important; } }\r\n\r\n.float-left {\r\n  float: left !important; }\r\n\r\n.float-right {\r\n  float: right !important; }\r\n\r\n.float-center {\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n\r\n.clearfix::before, .clearfix::after {\r\n  display: table;\r\n  content: ' '; }\r\n\r\n.clearfix::after {\r\n  clear: both; }\r\n\r\n/*# sourceMappingURL=foundation.css.map */"

/***/ }),

/***/ "./src/app/storedetail/storedetail.component.html":
/*!********************************************************!*\
  !*** ./src/app/storedetail/storedetail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"!name; else forminfo\">\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\n      <div class=\"form-container\">\n        <div class=\"row columns\">\n          <h1>Store Details </h1>\n          <p>\n              This is where you add a store and its \n              details and its coupons TBD. \n              <br/>\n              <!--\n              <label>Secret\n                  <input type=\"text\" formControlName=\"secret\">\n              </label>\n            -->\n            <a routerLink=\"/\">\n              <mat-icon class=\"example-icon\">home</mat-icon> \n          </a>\n              <button (click)=\"goHome()\">Home <i class=\"material-icons\">home</i></button>\n              <button (click)=\"save()\">Save  <i class=\"material-icons\">save</i></button>\n            </p>\n  \n          <label>Name\n            <input type=\"text\" formControlName=\"name\">\n          </label>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">{{ titleAlert }}</div>\n  \n          <label>Description\n              <textarea formControlName=\"description\"></textarea>\n          </label>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['description'].valid \n            && rForm.controls['description'].touched\">\n            You must specify a description that's between 30 and 500 characters.\n          </div>\n\n          <label for=\"validate\">Minimum of 3 Characters</label>\n          <input type=\"checkbox\" name=\"validate\" formControlName=\"validate\" value=\"1\"> On\n\n          <label>Store Code\n              <input type=\"text\" formControlName=\"storecode\">\n            </label>\n            <div class=\"alert\" *ngIf=\"!rForm.controls['storecode'].valid \n               && rForm.controls['storecode'].touched\">{{ titleAlert }}\n            </div>\n  <br/>\n  <label>Coupon\n      <textarea formControlName=\"coupon\"></textarea>\n  </label>\n  <div class=\"alert\" *ngIf=\"!rForm.controls['coupon'].valid \n    && rForm.controls['coupon'].touched\">\n    You must specify a description that's between 30 and 500 characters.\n  </div>\n          <input type=\"submit\" class=\"button expanded\" value=\"Submit Form\" [disabled]=\"!rForm.valid\">\n        </div>\n      </div>\n      \n    </form>\n  </div>\n  \n  <ng-template #forminfo>\n    <div class=\"form-container\">\n      <div class=\"row columns\">\n          <h1>{{ name }}</h1>\n  \n          <p>{{ description }}</p>\n      </div>\n    </div>\n\n    <ngx-charts-gauge\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [min]=\"0\"\n    [max]=\"100\"\n    [angleSpan]=\"240\"\n    [startAngle]=\"-120\"\n    [units]=\"'alerts'\"\n    [bigSegments]=\"10\"\n    [smallSegments]=\"5\"\n    (select)=\"onSelect($event)\">\n  </ngx-charts-gauge>\n  \n  </ng-template>\n"

/***/ }),

/***/ "./src/app/storedetail/storedetail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/storedetail/storedetail.component.ts ***!
  \******************************************************/
/*! exports provided: StoredetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredetailComponent", function() { return StoredetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/app/storedetail/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Location } from '@angular/common';



var StoredetailComponent = /** @class */ (function () {
    function StoredetailComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.view = [700, 400];
        this.description = '';
        this.name = '';
        this.storecode = "";
        this.coupon = "";
        //secret:string = '';
        this.titleAlert = 'This field is required';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C']
        };
        this.data = _data__WEBPACK_IMPORTED_MODULE_3__["single"];
        this.rForm = fb.group({
            'storecode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'coupon': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)])],
            'validate': ''
        });
    }
    StoredetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                _this.rForm.get('name').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            }
            _this.rForm.get('name').updateValueAndValidity();
        });
    };
    StoredetailComponent.prototype.onSelect = function (event) {
        console.log(event);
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
    StoredetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storedetail',
            template: __webpack_require__(/*! ./storedetail.component.html */ "./src/app/storedetail/storedetail.component.html"),
            styles: [__webpack_require__(/*! ./storedetail.component.css */ "./src/app/storedetail/storedetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], StoredetailComponent);
    return StoredetailComponent;
}());



/***/ }),

/***/ "./src/app/storegrid/storegrid.component.css":
/*!***************************************************!*\
  !*** ./src/app/storegrid/storegrid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n    background: lightblue;\r\n  }"

/***/ }),

/***/ "./src/app/storegrid/storegrid.component.html":
/*!****************************************************!*\
  !*** ./src/app/storegrid/storegrid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<div style=\"height:600px; font-size: 50%\"> \n <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n\n      <p>\n          {{tile.stuff}}\n      <button (click)=\"wtf('sss')\">Home <i class=\"material-icons\">home</i></button>\n      \n    {{tile.text}} <button> ass </button>\n    <a routerLink=\"/\">\n      <mat-icon class=\"example-icon\">Take me home.</mat-icon> \n  </a>\n   </p> \n  </mat-grid-tile>\n</mat-grid-list> \n\n<mat-grid-list cols=\"2\" rowHeight=\"3:1\">\n    <mat-grid-tile>\n    <button (click)=\"randomize(strNums)\">Randomize</button>        \n     <textarea mdInput placeholder=\"numbers\" [(ngModel)]=\"strNums\">{{strNums}}</textarea>\n     \n    </mat-grid-tile>\n    <mat-grid-tile>Randomized <br/>\n        <p>\n        {{nums}}\n        </p>\n    </mat-grid-tile>\n    <mat-grid-tile>3\n--- table ----\n    </mat-grid-tile>\n\n    <mat-grid-tile>4\n            \n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n-->\n\n<div style=\"background-color: pink\">\n        <app-tableex></app-tableex>\n</div>"

/***/ }),

/***/ "./src/app/storegrid/storegrid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/storegrid/storegrid.component.ts ***!
  \**************************************************/
/*! exports provided: StoregridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoregridComponent", function() { return StoregridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoregridComponent = /** @class */ (function () {
    //bobo = console.log("FFFFFFFFFFFF ", this.tiles1);
    function StoregridComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue', stuff: "XXX" },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.tiles00 = this.buildGridModel({
            icon: "avatar:svg-",
            title: "Svg-",
            background: ""
        });
        this.strNums = "wtf asdf ewr ";
        this.tiles1 = this.wtf();
        this.tilesJson = JSON.stringify(this.tiles1, null, 2);
        console.log('StoregridComponent:constructor');
        //console.log(this.tiles);
    }
    StoregridComponent.prototype.ngOnInit = function () {
    };
    StoregridComponent.prototype.buildGridModel = function (tileTmpl) {
        var it2, results = [];
        //console.log(` copy = ${JSON.stringify(it)}`);
        for (var j = 0; j < 11; j++) {
            var it = Object.assign({}, tileTmpl);
            //it = angular.extend({},tileTmpl);
            it.icon = it.icon + (j + 1);
            it.title = it.title + (j + 1);
            it.span = { row: 1, col: 1 };
            switch (j + 1) {
                case 1:
                    it.background = "red";
                    it.span.row = it.span.col = 2;
                    break;
                case 2:
                    it.background = "green";
                    break;
                case 3:
                    it.background = "darkBlue";
                    break;
                case 4:
                    it.background = "blue";
                    it.span.col = 2;
                    break;
                case 5:
                    it.background = "yellow";
                    it.span.row = it.span.col = 2;
                    break;
                case 6:
                    it.background = "pink";
                    break;
                case 7:
                    it.background = "darkBlue";
                    break;
                case 8:
                    it.background = "purple";
                    break;
                case 9:
                    it.background = "deepBlue";
                    break;
                case 10:
                    it.background = "lightPurple";
                    break;
                case 11:
                    it.background = "yellow";
                    break;
            }
            //console.log(it);
            results.push(it);
        }
        //console.log('results = ', results);
        return results;
    };
    StoregridComponent.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    StoregridComponent.prototype.randomize = function (nums) {
        console.log("nums = " + nums);
        //this.nums = [2,3,5, 7];
        //this.nums = this.strNums;
        var numbers = this.strNums.split(' ');
        console.log("numbers = " + numbers);
        this.shuffle(numbers);
        console.log("shuffle numbers = " + numbers);
        this.nums = numbers;
    };
    StoregridComponent.prototype.wtf = function () {
        return [{ "icon": "avatar:svg-1", "title": "Svg-1", "background": "red", "span": { "row": 2, "col": 2 } }, { "icon": "avatar:svg-2", "title": "Svg-2", "background": "green", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-3", "title": "Svg-3", "background": "darkBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-4", "title": "Svg-4", "background": "blue", "span": { "row": 1, "col": 2 } }, { "icon": "avatar:svg-5", "title": "Svg-5", "background": "yellow", "span": { "row": 2, "col": 2 } }, { "icon": "avatar:svg-6", "title": "Svg-6", "background": "pink", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-7", "title": "Svg-7", "background": "darkBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-8", "title": "Svg-8", "background": "purple", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-9", "title": "Svg-9", "background": "deepBlue", "span": { "row": 1, "col": 1 } }, { "icon": "avatar:svg-10", "title": "Svg-10", "background": "lightPurple", "span": { "row": 1, "col": 1 }
            }, { "icon": "avatar:svg-11", "title": "Svg-11", "background": "yellow", "span": { "row": 1, "col": 1 } }];
    };
    StoregridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storegrid',
            template: __webpack_require__(/*! ./storegrid.component.html */ "./src/app/storegrid/storegrid.component.html"),
            styles: [__webpack_require__(/*! ./storegrid.component.css */ "./src/app/storegrid/storegrid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoregridComponent);
    return StoregridComponent;
}());



/***/ }),

/***/ "./src/app/tableex/tableex.component.css":
/*!***********************************************!*\
  !*** ./src/app/tableex/tableex.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.example-header {\r\n    min-height: 64px;\r\n    display: flex;\r\n    align-items: baseline;\r\n    padding: 8px 24px 0;\r\n    font-size: 20px;\r\n    justify-content: space-between;\r\n  }\r\n.example-h2 {\r\n    margin: 10px;\r\n  }\r\n.example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n.example-margin {\r\n    margin: 10px;\r\n  }\r\n.mat-slider-horizontal {\r\n    width: 300px;\r\n  }\r\n.mat-slider-vertical {\r\n    height: 300px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    flex-grow: 1;\r\n    margin-left: 32px;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\nbutton {\r\n  min-height: 13px !important;\r\n  min-width: 3px !important;\r\n  font-size: 10px !important;\r\n  line-height: 0px; \r\n}"

/***/ }),

/***/ "./src/app/tableex/tableex.component.html":
/*!************************************************!*\
  !*** ./src/app/tableex/tableex.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <div class=\"example-header\">\n        \n      <mat-form-field floatPlaceholder=\"never\">\n        Tics:\n        <mat-slider class=\"example-margin\" \n         [max]=\"slider.max\" [min]=\"slider.min\"  \n        [step]=\"slider.step\" [value]=\"slider.value\" [vertical]=\"slider.vertical\" \n        [thumbLabel]=\"slider.thumbLabel\"        \n        tickInterval=\"1\"\n        (input)=\"updateValueImme($event)\" (change)=\"updateValue($event)\"          \n        >\n        </mat-slider>\n        <input matInput #filter placeholder=\"Filter users\">\n      </mat-form-field>\n    </div>\n  \n    \n    <mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\"\n    matSort matSortActive=\"seqNo\" matSortDirection=\"asc\" matSortDisableClear>\n\n<ng-container matColumnDef=\"seqNo\">\n\n <mat-header-cell *matHeaderCellDef mat-sort-header>#</mat-header-cell>\n\n <mat-cell *matCellDef=\"let lesson\">{{lesson.seqNo}}</mat-cell>\n\n</ng-container>\n\n<ng-container matColumnDef=\"description\">\n\n <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>\n\n <mat-cell class=\"description-cell\"\n           *matCellDef=\"let lesson\">{{lesson.description}}</mat-cell>\n\n</ng-container>\n\n<ng-container matColumnDef=\"duration\">\n\n <mat-header-cell *matHeaderCellDef>Duration</mat-header-cell>\n\n <mat-cell class=\"duration-cell\"\n           *matCellDef=\"let lesson\">{{lesson.duration}}</mat-cell>\n\n</ng-container>\n\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n</mat-table>\n  </div>\n  "

/***/ }),

/***/ "./src/app/tableex/tableex.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tableex/tableex.component.ts ***!
  \**********************************************/
/*! exports provided: TableexComponent, ExampleDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableexComponent", function() { return TableexComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lessons_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lessons.datasource */ "./src/app/services/lessons.datasource.ts");
/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/courses.service */ "./src/app/services/courses.service.ts");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-timer */ "./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm5/add/operator/startWith.js");
/* harmony import */ var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/merge */ "./node_modules/rxjs-compat/_esm5/add/observable/merge.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { DataSource } from '@angular/cdk/collections';

//import { TownService } from '../services/town.service';





//import { map, take } from 'rxjs/operators';
//import { of } from 'rxjs/observable/of';




var TableexComponent = /** @class */ (function () {
    function TableexComponent(st, coursesService) {
        this.st = st;
        this.coursesService = coursesService;
        this.displayedColumns = ["seqNo", "description", "duration"];
        // timer stuff
        this.sttv = {
            st: null,
            timerCounter0: 0,
            timerStopAt: 100,
            timerTickSize: 0.5,
            timer0Id: null,
            timerName: '1sec'
        };
        this.timerCounter0 = 0;
        this.timerStopAt = 100;
        this.timerName = '1sec';
        this.slider = {
            autoTicks: false,
            disabled: false,
            //invert: false,
            max: 2,
            min: .1,
            showTicks: true,
            step: 0.1,
            thumbLabel: true,
            value: this.sttv.timerTickSize,
            vertical: false
        };
        this.sttv.st = st;
        console.log("\t ** tableex.component.ts:constructor, " + JSON.stringify(this.sttv));
    }
    TableexComponent.prototype.ngOnInit = function () {
        console.log("\t ** tableex.component:ngOnInit timerName= " + this.timerName + ", sttv= " + JSON.stringify(this.sttv));
        //this.course = this.route.snapshot.data["course"];
        this.dataSource = new _services_lessons_datasource__WEBPACK_IMPORTED_MODULE_2__["LessonsDataSource"](this.coursesService);
        this.dataSource.loadLessons(1, '', 'asc', 0, 3);
        // Simulate real time with a dummy timmer.
        // this.st.newTimer(this.timerName, this.sttv.timerTickSize);
        // if (true) {
        //   this.startTimer0();
        // }
    };
    TableexComponent.prototype.ngOnDestroy = function () {
        //console.log(`\t ** tableex.component:ngOnDestroy, this.st.delTimer(${this.timerName}), sttv= ${JSON.stringify(this.sttv)}`);
        this.st.delTimer(this.timerName);
    };
    TableexComponent.prototype.resetTimer = function () {
        //debugger;
        this.stopTimer0();
        this.sttv.timerTickSize = this.slider.value;
        this.st.delTimer(this.timerName);
        this.st.newTimer(this.timerName, this.sttv.timerTickSize);
        this.startTimer0();
    };
    TableexComponent.prototype.startTimer0 = function () {
        this.timerCounter0 = 0;
        this.subscribeTimer();
        //this.subscribeTimer0();
    };
    TableexComponent.prototype.stopTimer0 = function () {
        //this.param= "";
        this.timerCounter0 = 0;
        this.unsubscribeTimer();
    };
    TableexComponent.prototype.unsubscribeTimer = function () {
        if (this.timer0Id) {
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            console.log('timer 0 Unsubscribed.');
        }
    };
    TableexComponent.prototype.subscribeTimer = function () {
        var _this = this;
        if (!this.timer0Id) {
            this.timer0Id = this.st.subscribe('1sec', function () { return _this.timer0callback(); });
            console.log('timer 0 Subscribed.');
        }
    };
    TableexComponent.prototype.timer0callback = function () {
        this.timerCounter0++;
        console.log("counter " + this.timerCounter0);
        console.timeEnd("answer time");
        this.simulateDataChange();
        // stop at __
        if (this.timerCounter0 > this.timerStopAt) {
            if (this.timer0Id) {
                this.stopTimer0();
                // Unsubscribe if timer Id is defined
                //this.st.unsubscribe(this.timer0Id);
            }
        }
        console.time("answer time");
    };
    //
    TableexComponent.prototype.simulateDataChange = function () {
        var i = 5;
        var idx = Math.floor(Math.random() * i);
        console.log("idx= " + idx);
        //this.exampleDatabase.data[idx].progress = this.timerCounter0.toString(); // idx.toString();
    };
    TableexComponent.prototype.myEvent = function (event) {
        console.log("id= ", event.currentTarget.id);
        var id = event.currentTarget.id;
        //console.log("exampleDatabase.data= ", this.exampleDatabase.data);
        if (id === '1') {
            this.timerCounter0 = 0;
            //this.exampleDatabase.data[0].progress = '87';
            console.log("this.slider.value= " + this.slider.value);
            if (!this.timer0Id) {
                //this.st.unsubscribe(this.timer0Id);
                //this.timer0Id = undefined;
                this.startTimer0();
            }
        }
    };
    // slider begin
    TableexComponent.prototype.updateValueImme = function (event) {
        console.log("This is emitted as the thumb slides", event);
    };
    TableexComponent.prototype.updateValue = function (event) {
        console.log("updateValue: event= ", event);
        this.slider.value = event.value.toFixed(1); //replace(/\.(\d\d)\d?$/, '.$1');
        //    console.log(`* 2 * this.slider.value= ${this.slider.value}`);
        console.log("** updateValue: " + this.sttv.timerTickSize + " , " + this.slider.value);
        // {
        //   //this.st.getTimer().
        //   this.resetTimer(this.slider.value);
        //   this.sttv.timerTickSize = this.slider.value;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TableexComponent.prototype, "filter", void 0);
    TableexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tableex',
            template: __webpack_require__(/*! ./tableex.component.html */ "./src/app/tableex/tableex.component.html"),
            styles: [__webpack_require__(/*! ./tableex.component.css */ "./src/app/tableex/tableex.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__["SimpleTimer"],
            _services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"]])
    ], TableexComponent);
    return TableexComponent;
}());

//
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
        //   event.preventDefault();
        //   let target = event.target || event.srcElement || event.currentTarget;
        //   console.log(target);
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // });
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        //console.log(copiedData);
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
// export class ExampleDataSource extends DataSource<any> {
// _filterChange = new BehaviorSubject('');
// get filter(): string { return this._filterChange.value; }
// set filter(filter: string) { this._filterChange.next(filter); }
// constructor(private _exampleDatabase: ExampleDatabase) {
//   super();
// }
// /** Connect function called by the table to retrieve one stream containing the data to render. */
// connect(): Observable<UserData[]> {
//   const displayDataChanges = [
//     this._exampleDatabase.dataChange,
//     this._filterChange,
//   ];
//   return observableMerge(...displayDataChanges).pipe(map(() => {
//     return this._exampleDatabase.data.slice().filter((item: UserData) => {
//       let searchStr = (item.name + item.color).toLowerCase();
//       return searchStr.indexOf(this.filter.toLowerCase()) != -1;
//     });
//   }));
// }
// disconnect() {}
// }


/***/ }),

/***/ "./src/app/towndetail/towndetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/towndetail/towndetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-div\r\n{\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 330px;\r\n  height: 100px;\r\n  background-color: #ccc;\r\n  border-radius: 3px;\r\n}"

/***/ }),

/***/ "./src/app/towndetail/towndetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/towndetail/towndetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"param\">\n        <div class=\"center-div\" style=\"border: solid; width: 300px; height: 200px\" >\n            <p>\n               {{discount}}<br/>\n        \n                <img src={{imagePath}} width=\"50\" height=\"50\"/>\n                <span style=\"color:red;\">{{param}}</span><br/>\n        \n                <!--<button (click)=\"subscribeTimer0()\">{{timer0button}}  1 sec timer</button>\n                -->\n                \n                \n                <button (click)=\"reserveCoupon()\" mat-button>claim coupon</button>\n                <span style=\"font-size: 55%;\">{{timerCounter0}} </span>\n                <button (click)=\"reserveCoupon()\" mat-button>never mind</button> \n                <!--\n                <span style=\"font-size: 13%;\">{{results}} results!</span>  \n                -->\n        \n            </p>\n        </div>\n        </div>"

/***/ }),

/***/ "./src/app/towndetail/towndetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/towndetail/towndetail.component.ts ***!
  \****************************************************/
/*! exports provided: TowndetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TowndetailComponent", function() { return TowndetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-timer */ "./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_town_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/town.service */ "./src/app/services/town.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TowndetailComponent = /** @class */ (function () {
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
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) { return (_this.param = params.get('id'),
            console.log("this.param = " + _this.param),
            _this.townService.getCoupon(String(+params.get('id')))); }))
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
    TowndetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-towndetail',
            template: __webpack_require__(/*! ./towndetail.component.html */ "./src/app/towndetail/towndetail.component.html"),
            styles: [__webpack_require__(/*! ./towndetail.component.css */ "./src/app/towndetail/towndetail.component.css")],
            providers: [_services_town_service__WEBPACK_IMPORTED_MODULE_5__["TownService"]]
        }),
        __metadata("design:paramtypes", [ng2_simple_timer__WEBPACK_IMPORTED_MODULE_4__["SimpleTimer"],
            _services_town_service__WEBPACK_IMPORTED_MODULE_5__["TownService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], TowndetailComponent);
    return TowndetailComponent;
}());



/***/ }),

/***/ "./src/app/townroutes/townroutes-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/townroutes/townroutes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TownroutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownroutesRoutingModule", function() { return TownroutesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../towndetail/towndetail.component */ "./src/app/towndetail/towndetail.component.ts");
/* harmony import */ var _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storedetail/storedetail.component */ "./src/app/storedetail/storedetail.component.ts");
/* harmony import */ var _storegrid_storegrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storegrid/storegrid.component */ "./src/app/storegrid/storegrid.component.ts");
/* harmony import */ var _storedashboard_storedashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storedashboard/storedashboard.component */ "./src/app/storedashboard/storedashboard.component.ts");
/* harmony import */ var _charttwo_charttwo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../charttwo/charttwo.component */ "./src/app/charttwo/charttwo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    //{ path: '', redirectTo: '/detail', pathMatch: 'full' },
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/charttwo', pathMatch: 'full' },
    { path: 'charttwo', component: _charttwo_charttwo_component__WEBPACK_IMPORTED_MODULE_6__["CharttwoComponent"] },
    { path: 'charttwo/:id', component: _charttwo_charttwo_component__WEBPACK_IMPORTED_MODULE_6__["CharttwoComponent"] },
    { path: 'detail', component: _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_2__["TowndetailComponent"] },
    { path: 'detail/:id', component: _towndetail_towndetail_component__WEBPACK_IMPORTED_MODULE_2__["TowndetailComponent"] },
    { path: 'store/:id', component: _storedetail_storedetail_component__WEBPACK_IMPORTED_MODULE_3__["StoredetailComponent"] },
    { path: 'storeAsaGrid/:id', component: _storegrid_storegrid_component__WEBPACK_IMPORTED_MODULE_4__["StoregridComponent"] },
    { path: 'storeAsaDashboard/:id', component: _storedashboard_storedashboard_component__WEBPACK_IMPORTED_MODULE_5__["StoredashboardComponent"] },
    //{ path: '**', component: CharttwoComponent }
    { path: '**', redirectTo: '/charttwo', pathMatch: 'full' },
];
var TownroutesRoutingModule = /** @class */ (function () {
    function TownroutesRoutingModule() {
    }
    TownroutesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TownroutesRoutingModule);
    return TownroutesRoutingModule;
}());



/***/ }),

/***/ "./src/common/color.helper.ts":
/*!************************************!*\
  !*** ./src/common/color.helper.ts ***!
  \************************************/
/*! exports provided: ColorHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorHelper", function() { return ColorHelper; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var _utils_color_sets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color-sets */ "./src/utils/color-sets.ts");



var ColorHelper = /** @class */ (function () {
    function ColorHelper(scheme, type, domain, customColors) {
        if (typeof (scheme) === 'string') {
            scheme = _utils_color_sets__WEBPACK_IMPORTED_MODULE_2__["colorSets"].find(function (cs) {
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
            scheme = _utils_color_sets__WEBPACK_IMPORTED_MODULE_2__["colorSets"].find(function (cs) {
                return cs.name === scheme;
            });
        }
        var colorScale;
        if (type === 'quantile') {
            colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleQuantile"])()
                .range(scheme.domain)
                .domain(domain);
        }
        else if (type === 'ordinal') {
            colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"])()
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
            var points = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(0, 1, 1.0 / colorDomain.length);
            colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])()
                .domain(points)
                .range(colorDomain);
        }
        return colorScale;
    };
    ColorHelper.prototype.getColor = function (value) {
        if (this.scaleType === 'linear') {
            var valueScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])()
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
        var valueScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])()
            .domain(this.domain)
            .range([0, 1]);
        var colorValueScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])()
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



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //apiEndpoint: 'http://192.168.1.9:3000/town'
    apiEndpoint: 'http://localhost:3000/town',
    //apiEndpoint: 'https://johndog.herokuapp.com/town',
    apiEndpointCocktailRandom: 'http://www.thecocktaildb.com/api/json/v1/1/random.php',
    apiEndpointCocktailDrinks: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utils/color-sets.ts":
/*!*********************************!*\
  !*** ./src/utils/color-sets.ts ***!
  \*********************************/
/*! exports provided: colorSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorSets", function() { return colorSets; });
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


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\FxM\Dev\ng246\townpon\townpon60\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map