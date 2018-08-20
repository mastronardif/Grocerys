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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main-list></main-list>\n\n<!--\n<app-main-list></app-main-list>\n \n-->\n\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-list/main-list.component */ "./src/app/main-list/main-list.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/videos-list/videos-list.component */ "./src/app/components/videos-list/videos-list.component.ts");
/* harmony import */ var _components_videos_search_videos_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/videos-search/videos-search.component */ "./src/app/components/videos-search/videos-search.component.ts");
/* harmony import */ var _components_videos_playlist_videos_playlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/videos-playlist/videos-playlist.component */ "./src/app/components/videos-playlist/videos-playlist.component.ts");
/* harmony import */ var _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/video-player/video-player.component */ "./src/app/components/video-player/video-player.component.ts");
/* harmony import */ var _shared_pipes_video_likes_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/video-likes.pipe */ "./src/app/shared/pipes/video-likes.pipe.ts");
/* harmony import */ var _shared_pipes_video_views_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pipes/video-views.pipe */ "./src/app/shared/pipes/video-views.pipe.ts");
/* harmony import */ var _shared_pipes_video_duration_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pipes/video-duration.pipe */ "./src/app/shared/pipes/video-duration.pipe.ts");
/* harmony import */ var _shared_pipes_playlist_item_name_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/pipes/playlist-item-name.pipe */ "./src/app/shared/pipes/playlist-item-name.pipe.ts");
/* harmony import */ var _shared_pipes_now_playing_name_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pipes/now-playing-name.pipe */ "./src/app/shared/pipes/now-playing-name.pipe.ts");
/* harmony import */ var _shared_directives_lazy_scroll_lazy_scroll_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/directives/lazy-scroll/lazy-scroll.directive */ "./src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/playlist-store.service */ "./src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var _shared_services_playlist_sortby_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/services/playlist-sortby.service */ "./src/app/shared/services/playlist-sortby.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_browser_notification_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/browser-notification.service */ "./src/app/shared/services/browser-notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components









// pipes






// Services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                //ReactiveFormsModule,
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"],
                _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_7__["MainListComponent"],
                _components_videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_11__["VideosListComponent"],
                _components_videos_search_videos_search_component__WEBPACK_IMPORTED_MODULE_12__["VideosSearchComponent"],
                _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_14__["VideoPlayerComponent"],
                _components_videos_playlist_videos_playlist_component__WEBPACK_IMPORTED_MODULE_13__["VideosPlaylistComponent"],
                // pipes
                _shared_pipes_playlist_item_name_pipe__WEBPACK_IMPORTED_MODULE_18__["PlaylistItemNamePipe"],
                _shared_pipes_video_likes_pipe__WEBPACK_IMPORTED_MODULE_15__["VideoLikesPipe"],
                _shared_pipes_video_views_pipe__WEBPACK_IMPORTED_MODULE_16__["VideoViewsPipe"],
                _shared_pipes_video_duration_pipe__WEBPACK_IMPORTED_MODULE_17__["VideoDurationPipe"],
                _shared_pipes_now_playing_name_pipe__WEBPACK_IMPORTED_MODULE_19__["NowPlayingNamePipe"],
                _shared_directives_lazy_scroll_lazy_scroll_directive__WEBPACK_IMPORTED_MODULE_20__["LazyScrollDirective"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_services_playlist_sortby_service__WEBPACK_IMPORTED_MODULE_23__["PlaylistSortbyService"],
                _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_22__["PlaylistStoreService"],
                _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_21__["YoutubePlayerService"],
                _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_24__["NotificationService"],
                _shared_services_browser_notification_service__WEBPACK_IMPORTED_MODULE_25__["BrowserNotificationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-navigation {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mdl-layout-title {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .mdl-layout-title>img {\r\n    height: 35px;\r\n  }\r\n  \r\n  .mdl-layout__header {\r\n    height: 64px;\r\n    background-color: rgb(79, 111, 144);\r\n  }\r\n  \r\n  .mdl-layout__content {\r\n    width: 95%;\r\n  }\r\n  \r\n  .mdl-layout__header-row {\r\n    padding: 0 40px 0 16px;\r\n  }\r\n  \r\n  .mdl-layout__drawer-button {\r\n    right: 0;\r\n    left: inherit;\r\n  }\r\n  \r\n  .blur-main-playlist-opened {\r\n    opacity: 0.4;\r\n    transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n    -ms-transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -o-transition: all 0.3s ease;\r\n  }\r\n  \r\n  .mdl-js-snackbar {\r\n    bottom: 0;\r\n    z-index: 999;\r\n    right: 0;\r\n    background-color: rgba(196, 48, 43, 0.85);\r\n  }\r\n  \r\n  @media (max-width: 850px) {\r\n    .mdl-layout-title>img {\r\n      height: 30px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1150px) {\r\n    .mdl-layout__content {\r\n      width: 100%;\r\n    }\r\n    .yt-player,\r\n    .ytp-cued-thumbnail-overlay {\r\n      width: 100px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <div class=\"mdl-layout-title\">\n          <img src=\"assets/logo.png\">\n        </div>\n        <nav class=\"mdl-navigation\">\n          <videos-search (videosUpdated)=\"handleSearchVideo($event)\" [loadingInProgress]=\"loadingInProgress\">\n          </videos-search>\n  \n      <!-- <input id=\"checkBox1\" type=\"checkbox\">b1\n      <input id=\"checkBox2\" type=\"checkbox\">b2\t\n      <input id=\"checkBox3\" type=\"checkbox\">b3 \n  \n      <label><input type=\"checkbox\" [checked]=\"checkbox2\" /> F2: </label>\n      -->\n      \n<!--       <div class=\"form-group\">\n        <span *ngFor=\"let option of options; index as i\">\n            <div *ngIf=\"i%3 == 0\">\n                \n            </div>\n           <label>\n              <input type=\"checkbox\"\n                    name=\"options\"\n                    [checked]=\"option.checked != 0\"\n  \n                    value=\"{{option.value}}\"\n                    (change)=\"updateCheckedOptions(option,i, $event.target.checked)\"/>\n              {{option.value}}\n          </label>\n        </span>  \n  \n    </div> -->\n  \n    <button id=\"lpl_tip\" (click)=\"lpl()\">lpl</button>\n    <div class=\"mdl-tooltip mdl-tooltip--bottom\" data-mdl-for=\"lpl_tip\">\n      Load Play List\n    </div>\n<!--       <button (click)=\"sort()\">sort</button>\n      \n      <button (click)=\"decorate()\">decorate</button> -->\n        </nav>\n  \n        <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button toggle-playlist-icon\" (click)=\"togglePlaylist()\">\n          <i class=\"material-icons\"></i>\n        </div>\n      </div>\n    </header>\n  \n     <videos-playlist [repeat]=\"repeat\" [shuffle]=\"shuffle\" [playlistToggle]=\"playlistToggle\" [playlistNames]=\"playlistNames\" [videoPlaylist]=\"videoPlaylist\">\n    </videos-playlist>\n  \n    <main class=\"mdl-layout__content\" LazyScroll (OnScrollMethod)=\"searchMore()\" ScrollDistance=\"3\">\n      <div class=\"page-content\" [ngClass]=\"{'blur-main-playlist-opened': playlistToggle}\">\n        <videos-list *ngIf=\"videoList.length\" class=\"mdl-grid\" (videoPlaylist)=\"checkAddToPlaylist($event)\" [videoList]=\"videoList\" [loadingInProgress]=\"loadingInProgress\">\n        </videos-list>\n        \n        <div class=\"loader\" *ngIf=\"!videoList.length\">\n          <div class=\"loading\"></div>\n        </div>\n  \n  \n      </div>\n    </main>\n  \n  </div>\n  \n  <video-player (closePlaylist)=\"closePlaylist()\" (importPlaylist)=\"importPlaylist($event)\" (exportPlaylist)=\"exportPlaylist()\" (clearPlaylist)=\"clearPlaylist()\" (playFirstInPlaylist)=\"playFirstInPlaylist()\" (repeatActive)=\"repeatActive($event)\" (shuffleActive)=\"shuffleActive($event)\"\n    (nextVideoEvent)=\"nextVideo()\" (prevVideoEvent)=\"prevVideo()\">\n  </video-player>\n  \n  <div id=\"demo-toast-example\" class=\"mdl-js-snackbar mdl-snackbar\">\n    <div class=\"mdl-snackbar__text\"></div>\n    <button class=\"mdl-snackbar__action\" type=\"button\"></button>\n  </div>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/youtube-api.service */ "./src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/playlist-store.service */ "./src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_playlist_sortby_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/playlist-sortby.service */ "./src/app/shared/services/playlist-sortby.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { YoutubeApiService } from '../shared/services/youtube-api.service';
//'./ services/youtube-api.service';





//import { Observable, observable } from 'rxjs';
var MainComponent = /** @class */ (function () {
    function MainComponent(checkBox1, youtubeService, youtubePlayer, playlistService, playlistSortbyService, notificationService) {
        this.checkBox1 = checkBox1;
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.playlistSortbyService = playlistSortbyService;
        this.notificationService = notificationService;
        this.videoList = [];
        this.videoPlaylist = [];
        this.loadingInProgress = false;
        this.playlistToggle = false;
        this.playlistNames = false;
        this.repeat = false;
        this.shuffle = false;
        this.pageLoadingFinished = false;
        this.checkbox2 = false;
        this.options = [
            { name: 'DIAttribute', value: 'AAA', checked: true },
            { name: 'DIAttribute', value: 'BBB', checked: false },
            { name: 'DIAttribute', value: 'CCC', checked: true },
            { name: 'DIAttribute', value: 'DDD', checked: true },
            { name: 'DIAttribute', value: 'EEE', checked: false },
            { name: 'DIAttribute', value: 'FFF', checked: true }
        ];
        this.videoPlaylist = this.playlistService.retrieveStorage().playlists;
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.playlistElement = document.getElementById('playlist');
        this.videos$ = this.youtubeService.searchVideos('The Doors');
        console.log("xxx= ", document.getElementsByClassName('mdl-cell custom-cell mdl-cell--2-col'));
        // wtf 8/4/18
        // this.youtubeService.getVideos('ass')
        //   .subscribe(response => this.videos = response);
        // wtf 8/4/18
        this.videos22$ = this.youtubeService.searchVideos22('The Who');
        this.youtubeService.searchVideos22('The Who')
            .subscribe(function (response) {
            _this.videoList = response.items;
            console.log(response);
        });
        //return;
        // this.videos$.subscribe(val => {
        //   console.log(`\n videos= ${val}`);
        //   console.log(val);
        //   //let bobo:Observable=val;
        //   this.videos= val.subscribe(res => {        
        //     this.videos=res;
        //     console.log('res.items=', res.items);
        //     this.videoList= res.items;
        //     //console.log('wtf=', this.wtf)     
        //   });
        // this.showVideos=true;      
        //});
    };
    MainComponent.prototype.playFirstInPlaylist = function () {
        if (this.videoPlaylist[0]) {
            this.playlistElement.scrollTop = 0;
            this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
        }
    };
    MainComponent.prototype.handleSearchVideo = function (videos) {
        //alert('handleSearchVideo');
        this.videoList = videos;
    };
    MainComponent.prototype.checkAddToPlaylist = function (video) {
        var _this = this;
        if (!this.videoPlaylist.some(function (e) { return e.id === video.id; })) {
            this.videoPlaylist.push(video);
            this.playlistService.addToPlaylist(video);
            var inPlaylist_1 = this.videoPlaylist.length - 1;
            setTimeout(function () {
                var topPos = document.getElementById(_this.videoPlaylist[inPlaylist_1].id).offsetTop;
                _this.playlistElement.scrollTop = topPos - 100;
            });
        }
    };
    MainComponent.prototype.repeatActive = function (val) {
        this.repeat = val;
        this.shuffle = false;
    };
    MainComponent.prototype.shuffleActive = function (val) {
        this.shuffle = val;
        this.repeat = false;
    };
    MainComponent.prototype.togglePlaylist = function () {
        var _this = this;
        this.playlistToggle = !this.playlistToggle;
        setTimeout(function () {
            _this.playlistNames = !_this.playlistNames;
        }, 200);
    };
    MainComponent.prototype.searchMore = function () {
        var _this = this;
        //alert('searchMore loadingInProgress ');
        console.log("this = ", this);
        if (this.loadingInProgress || this.pageLoadingFinished || this.videoList.length < 1) {
            return;
        }
        //alert('searchMore')
        this.loadingInProgress = true;
        this.youtubeService.searchNext()
            .then(function (data) {
            _this.loadingInProgress = false;
            if (data.length < 1 || data.status === 400) {
                setTimeout(function () {
                    _this.pageLoadingFinished = true;
                    setTimeout(function () {
                        _this.pageLoadingFinished = false;
                    }, 10000);
                });
                return;
            }
            data.forEach(function (val) {
                _this.videoList.push(val);
            });
        }).catch(function (error) {
            _this.loadingInProgress = false;
        });
    };
    MainComponent.prototype.nextVideo = function () {
        this.playPrevNext(true);
    };
    MainComponent.prototype.prevVideo = function () {
        this.playPrevNext(false);
    };
    MainComponent.prototype.playPrevNext = function (value) {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        // if-else hell
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.youtubePlayer.getShuffled(inPlaylist, this.videoPlaylist.length)];
                this.youtubePlayer.playVideo(shuffled.id, shuffled.snippet.title);
                this.playlistElement.scrollTop = document.getElementById(shuffled.id).offsetTop - 100;
            }
            else {
                if (value) {
                    if (this.videoPlaylist.length - 1 === inPlaylist) {
                        this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
                        this.playlistElement.scrollTop = 0;
                    }
                    else {
                        this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id, this.videoPlaylist[inPlaylist + 1].snippet.title);
                        this.playlistElement.scrollTop = topPos - 100;
                    }
                }
                else {
                    if (inPlaylist === 0) {
                        this.youtubePlayer.playVideo(this.videoPlaylist[this.videoPlaylist.length - 1].id, this.videoPlaylist[this.videoPlaylist.length - 1].snippet.title);
                        this.playlistElement.scrollTop = this.playlistElement.offsetHeight;
                    }
                    else {
                        this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist - 1].id, this.videoPlaylist[inPlaylist - 1].snippet.title);
                        this.playlistElement.scrollTop = topPos - 230;
                    }
                }
            }
        }
        else {
            this.playFirstInPlaylist();
        }
    };
    MainComponent.prototype.closePlaylist = function () {
        this.playlistToggle = false;
        this.playlistNames = false;
    };
    MainComponent.prototype.clearPlaylist = function () {
        this.videoPlaylist = [];
        this.playlistService.clearPlaylist();
        this.notificationService.showNotification('Playlist cleared.');
    };
    MainComponent.prototype.exportPlaylist = function () {
        if (this.videoPlaylist.length < 1) {
            this.notificationService.showNotification('Nothing to export.');
            return;
        }
        var data = JSON.stringify(this.videoPlaylist);
        var a = document.createElement('a');
        var file = new Blob([data], { type: 'text/json' });
        a.href = URL.createObjectURL(file);
        a.download = 'playlist.json';
        a.click();
        this.notificationService.showNotification('Playlist exported.');
    };
    MainComponent.prototype.importPlaylist = function (playlist) {
        this.videoPlaylist = playlist;
        this.playlistService.importPlaylist(this.videoPlaylist);
    };
    MainComponent.prototype.lpl = function () {
        if (this.videoPlaylist.length > 0) {
            this.videoList = this.videoPlaylist;
        }
    };
    MainComponent.prototype.decorate = function () {
        console.log('decorate() : void {');
        var list = document.getElementsByClassName('mdl-cell custom-cell mdl-cell--2-col');
        console.log(list[0].innerHTML);
        var decorators = '<td>' +
            '<br/>  <label><input id="checkBox" type="checkbox">AAA </label>' +
            '<br/> <input id="checkBox" type="checkbox">BBB' +
            '<br/> <input id="checkBox" type="checkbox">CCC' +
            '<br/> <input id="checkBox" type="checkbox">DDD' +
            '<br/> <input id="checkBox" type="checkbox">EEE' +
            '<br/> <input id="checkBox" type="checkbox">FFF' +
            '</td>';
        for (var idx = 0; idx < list.length; idx++) {
            //console.log(list[i].id); //second console output
            list[idx].innerHTML = list[idx].innerHTML.replace('</td>', decorators);
        }
        //list[0].innerHTML = list[0].innerHTML.replace('Fuck ','Fuck XXXXXXX');
        //list[0].innerHTML = list[0].innerHTML.replace('</td>', decorators);
        console.log("xxx= ", document.getElementsByClassName('mdl-cell custom-cell mdl-cell--2-col'));
        if (this.videoPlaylist.length > 0) {
            //this.videoList = this.videoPlaylist;
            //this. .document.body.classList.add('test');
        }
    };
    MainComponent.prototype.updateCheckedOptions = function (option, idx, ischecked) {
        console.log(option, idx, ischecked);
        this.options[idx].checked = ischecked;
    };
    MainComponent.prototype.wtf = function () {
        if (this.videoList.length > 2) {
            //swap
            //alert('wtf this.videoList.length= '  this.videoList.length);
            var temp = this.videoList[1];
            this.videoList[1] = this.videoList[0];
            this.videoList[0] = temp;
            //this.videoList = this.videoPlaylist;
            //this.videoList =[];
            //this.videosUpdated.emit([]);
            //console.log(this. input.nativeElement.value);
            var val = this.options[0].value;
            var check = this.options[1].checked;
            this.options.forEach(function (element) {
                console.log('di  option val = ', element); //, val, check );  
            });
            //let bbb = this.playlistSortbyService.test(this.videoList);
            //let current = this.youtubePlayer.getCurrentVideo();
            //alert(bbb);
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-list',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeApiService"],
            _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_2__["YoutubePlayerService"],
            _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistStoreService"],
            _shared_services_playlist_sortby_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistSortbyService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
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

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/components/video-player/video-player.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/video-player/video-player.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-player-block {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 50px;\r\n    bottom: 0;\r\n    background-color: rgba(79, 111, 144, 1);\r\n    z-index: 992;\r\n  }\r\n  \r\n  .player-containter {\r\n    transition: all 300ms ease-in-out;\r\n    width: 440px;\r\n    height: 250px;\r\n    position: fixed;\r\n    z-index: 992;\r\n    bottom: 16px;\r\n    left: 16px;\r\n    background-color: #000;\r\n    border: 3px solid rgba(79, 111, 144, 0.75);\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n  }\r\n  \r\n  .player-containter.minimized {\r\n    -webkit-transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n            transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n  }\r\n  \r\n  .player-containter.super-minimized {\r\n    -webkit-transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n            transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n  }\r\n  \r\n  .player-view-controls {\r\n    position: absolute;\r\n    color: white;\r\n    background-color: rgb(196, 48, 43);\r\n    top: -27px;\r\n    left: -3px;\r\n    font-size: 30px;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n  }\r\n  \r\n  .player-view-controls i {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .player-view-controls .minimize {\r\n    margin-left: -7px;\r\n  }\r\n  \r\n  .player-controls-block {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    color: #fff;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .mdl-button--icon.play {\r\n    width: 42px;\r\n    height: 42px;\r\n  }\r\n  \r\n  .mdl-button--icon.play i {\r\n    -webkit-transform: translate(-20px, -12px);\r\n            transform: translate(-20px, -12px);\r\n    font-size: 40px;\r\n  }\r\n  \r\n  .mdl-button--icon.prev {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n  \r\n  .mdl-button--icon.prev i {\r\n    -webkit-transform: translate(-15px, -12px);\r\n            transform: translate(-15px, -12px);\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .mdl-button--icon.next {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n  \r\n  .mdl-button--icon.next i {\r\n    -webkit-transform: translate(-14px, -12px);\r\n            transform: translate(-14px, -12px);\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .repeat-shuffle-block {\r\n    margin-left: 40px;\r\n    position: absolute;\r\n    top: 10px;\r\n  }\r\n  \r\n  .repeat-shuffle-block button.active {\r\n    background-color: rgba(196, 48, 43, 0.85);\r\n  }\r\n  \r\n  .mute-block {\r\n    margin-left: -80px;\r\n    position: absolute;\r\n    top: 10px;\r\n  }\r\n  \r\n  .mute-block button.active {\r\n    background-color: rgba(196, 48, 43, 0.85);\r\n  }\r\n  \r\n  .playlist-drop-button {\r\n    position: absolute;\r\n    color: #fff;\r\n    right: 12px;\r\n    top: 10px;\r\n  }\r\n  \r\n  .main-yt-player-block {\r\n    position: relative;\r\n    text-align: center;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .main-yt-player-block .material-icons {\r\n    position: absolute;\r\n    color: white;\r\n    font-size: 255px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n    display: none;\r\n    text-shadow: 2px 2px 2px #000;\r\n  }\r\n  \r\n  .main-yt-player-block:hover .material-icons {\r\n    display: block;\r\n  }\r\n  \r\n  .player-fullscreen {\r\n    bottom: 50px;\r\n    left: 0;\r\n    width: 95%;\r\n    height: calc(100% - 114px);\r\n    border: none;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .current-playing-text {\r\n    max-width: 320px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 10.5em;\r\n    top: 1.4em;\r\n    font-size: 12px;\r\n    text-align: left;\r\n    text-align: left;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .now-playing-label {\r\n    opacity: 0.75;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  @media (max-width: 850px) {\r\n    .player-containter {\r\n      bottom: 60px;\r\n    }\r\n    .current-playing-text {\r\n      display: none !important;\r\n    }\r\n    .player-controls-block {\r\n      left: 0;\r\n    }\r\n    .repeat-shuffle-block {\r\n      margin-left: 10px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1150px) {\r\n    .player-fullscreen {\r\n      bottom: 50px;\r\n      width: 100%;\r\n    }\r\n    .current-playing-text {\r\n      max-width: 160px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/video-player/video-player.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/video-player/video-player.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-player-block\">\n  <div class=\"player-controls-block\">\n    <div class=\"current-playing-text\" *ngIf=\"superMinPlayer\">\n      <span class=\"now-playing-label\">Now playing: </span>\n      <span>{{ currentVideoText | nowPlayingName }}</span>\n    </div>\n    <span class=\"mute-block\">\n\t\t\t<button id=\"fullscreen_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\"\n              [ngClass]=\"{'active': fullscreenActive}\" (click)=\"toggleFullscreen()\">\n\t\t\t\t<i class=\"material-icons\">fullscreen</i>\n\t\t\t</button>\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"fullscreen_tip\">\n\t\t\t\tFullscreen\n      </div>     \n\t\t</span>\n    <button id=\"prev_tip\" class=\"mdl-button mdl-js-button mdl-button--icon prev\" (click)=\"prevVideo()\">\n      <i class=\"material-icons\">skip_previous</i>\n    </button>\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"prev_tip\">\n      Previous\n    </div>\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('play')\" *ngIf=\"playingEvent === 'pause'\">\n      <i class=\"material-icons\">play_circle_filled</i>\n    </button>\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('pause')\" *ngIf=\"playingEvent === 'play'\">\n      <i class=\"material-icons\">pause_circle_filled</i>\n    </button>\n    <button id=\"next_tip\" class=\"mdl-button mdl-js-button mdl-button--icon next\" (click)=\"nextVideo()\">\n      <i class=\"material-icons\">skip_next</i>\n    </button>\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"next_tip\">\n      Next\n    </div>\n    <span class=\"repeat-shuffle-block\">\n      <button id=\"repeat_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': repeat}\"\n              (click)=\"toggleRepeat()\">\n\t\t\t\t<i class=\"material-icons\">repeat_one</i>\n\t\t\t</button>\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"repeat_tip\">\n\t\t\t\tRepeat one\n\t\t\t</div>\n      <button id=\"shuffle_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': shuffle}\"\n              (click)=\"toggleShuffle()\">\n\t\t\t\t<i class=\"material-icons\">shuffle</i>\n\t\t\t</button>\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"shuffle_tip\">\n\t\t\t\tShuffle\n\t\t\t</div>\n    </span>\n  </div>\n  <div class=\"player-containter\" [ngClass]=\"{'minimized': minPlayer, 'super-minimized': superMinPlayer, 'player-fullscreen': fullscreenActive}\">\n    <div class=\"player-view-controls\">\n      <i class=\"material-icons\" *ngIf=\"!minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_down</i>\n      <i class=\"material-icons arrow_drop_up\" *ngIf=\"minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_up</i>\n      <i class=\"material-icons minimize\" *ngIf=\"!superMinPlayer && !fullscreenActive\" (click)=\"minimizePlayer()\">remove</i>\n    </div>\n    <div class=\"main-yt-player-block\">\n      <i class=\"material-icons\" *ngIf=\"superMinPlayer\" (click)=\"minimizePlayer()\">zoom_out_map</i>\n      <div id=\"yt-player\"></div>\n    </div>\n  </div>\n\n  <button id=\"demo-menu-top-right\" class=\"mdl-button mdl-js-button mdl-button--icon playlist-drop-button\" (click)=\"openClosedPlaylist()\">\n    <i class=\"material-icons\">more_vert</i>\n  </button>\n\n  <ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu\" data-mdl-for=\"demo-menu-top-right\">\n    <li class=\"mdl-menu__item\" (click)=\"exportPlaylistAction()\">Export playlist</li>\n    <li class=\"mdl-menu__item\" (click)=\"importPlaylistAction()\">Import playlist</li>\n    <li class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\" (click)=\"clearPlaylistAction()\">Clear playlist</li>\n    <li class=\"mdl-menu__item\" (click)=\"toggleNotifications()\" [ngStyle]=\"{'color': !notifications ? 'rgb(186, 52, 54)': 'rgb(53, 132, 39)' }\">Notifications</li>\n  </ul>\n\n  <input id=\"import_button\" style=\"display: none;\" type=\"file\" name=\"file\" accept=\".json, .txt\" (change)=\"handleInputChange($event)\">\n</div>"

/***/ }),

/***/ "./src/app/components/video-player/video-player.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/video-player/video-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_browser_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/browser-notification.service */ "./src/app/shared/services/browser-notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(youtubePlayer, notificationService, browserNotification) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.browserNotification = browserNotification;
        this.minPlayer = true;
        this.superMinPlayer = false;
        this.playingEvent = 'pause';
        this.shuffle = false;
        this.repeat = false;
        this.fullscreenActive = false;
        this.currentVideoText = 'None';
        this.notifications = false;
        this.repeatActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shuffleActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextVideoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prevVideoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playFirstInPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.importPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.youtubePlayer.playPauseEvent.subscribe(function (event) { return _this.playingEvent = event; });
        this.youtubePlayer.currentVideoText.subscribe(function (event) { return _this.currentVideoText = event || 'None'; });
    }
    VideoPlayerComponent.prototype.ngAfterContentInit = function () {
        var doc = window.document;
        var playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        //playerApi.src = '//www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);
        this.youtubePlayer.createPlayer();
    };
    VideoPlayerComponent.prototype.toggleFullscreen = function () {
        this.minPlayer = false;
        this.superMinPlayer = false;
        this.fullscreenActive = !this.fullscreenActive;
        var width = this.fullscreenActive ? window.innerWidth - 70 : 440;
        var height = this.fullscreenActive ? window.innerHeight - 120 : 250;
        this.youtubePlayer.resizePlayer(width, height);
    };
    VideoPlayerComponent.prototype.playPause = function (event) {
        this.playingEvent = event;
        if (!this.youtubePlayer.getCurrentVideo()) {
            this.playFirstInPlaylist.emit();
            return;
        }
        event === 'pause' ? this.youtubePlayer.pausePlayingVideo() : this.youtubePlayer.playPausedVideo();
    };
    VideoPlayerComponent.prototype.nextVideo = function () {
        this.nextVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.prevVideo = function () {
        this.prevVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.togglePlayer = function () {
        this.minPlayer = !this.minPlayer;
        this.superMinPlayer = false;
    };
    VideoPlayerComponent.prototype.minimizePlayer = function () {
        this.superMinPlayer = !this.superMinPlayer;
    };
    VideoPlayerComponent.prototype.toggleRepeat = function () {
        this.repeat = !this.repeat;
        this.shuffle = false;
        this.repeatActive.emit(this.repeat);
    };
    VideoPlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
        this.repeat = false;
        this.shuffleActive.emit(this.shuffle);
    };
    VideoPlayerComponent.prototype.openClosedPlaylist = function () {
        this.closePlaylist.emit();
    };
    VideoPlayerComponent.prototype.clearPlaylistAction = function () {
        this.clearPlaylist.emit();
    };
    VideoPlayerComponent.prototype.exportPlaylistAction = function () {
        this.exportPlaylist.emit();
    };
    VideoPlayerComponent.prototype.importPlaylistAction = function () {
        var import_button = document.getElementById('import_button');
        import_button.click();
    };
    VideoPlayerComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file.name.split('.').pop() !== 'json') {
            this.notificationService.showNotification('File not supported.');
            return;
        }
        var reader = new FileReader();
        var me = this;
        reader.readAsText(file);
        reader.onload = function (ev) {
            var list;
            try {
                list = JSON.parse(ev.target['result']);
            }
            catch (exc) {
                list = null;
            }
            if (!list || list.length < 1) {
                me.notificationService.showNotification('Playlist not valid.');
                return;
            }
            me.importPlaylist.emit(list);
            me.notificationService.showNotification('Playlist imported.');
            document.getElementById('import_button')['value'] = '';
        };
    };
    VideoPlayerComponent.prototype.toggleNotifications = function () {
        var _this = this;
        this.notifications ?
            (this.notifications = false,
                this.browserNotification.disable()) :
            this.browserNotification.checkNotification().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.notifications = res === 'granted' ? true : (this.notificationService.showNotification('Browser notifications blocked.'),
                        false);
                    return [2 /*return*/];
                });
            }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "repeatActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "shuffleActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "nextVideoEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "prevVideoEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "playFirstInPlaylist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "clearPlaylist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "exportPlaylist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "importPlaylist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "closePlaylist", void 0);
    VideoPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-player',
            template: __webpack_require__(/*! ./video-player.component.html */ "./src/app/components/video-player/video-player.component.html"),
            styles: [__webpack_require__(/*! ./video-player.component.css */ "./src/app/components/video-player/video-player.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_1__["YoutubePlayerService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _shared_services_browser_notification_service__WEBPACK_IMPORTED_MODULE_3__["BrowserNotificationService"]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/videos-list/videos-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/videos-list/videos-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-progress {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 60px;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .loader-progress>.loading {\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .demo-card-square.mdl-card {\r\n    height: 210px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .custom-cell.mdl-cell--2-col {\r\n    width: calc(20% - 16px);\r\n  }\r\n  \r\n  .custom-cell {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .demo-card-square>.mdl-card__title {\r\n    color: #fff;\r\n  }\r\n  \r\n  .mdl-card__title {\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n    -ms-transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -o-transition: all 0.3s ease;\r\n  }\r\n  \r\n  .mdl-card--expand:hover {\r\n    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.3);\r\n    background-size: 130% !important;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mdl-card__supporting-text {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding: 6px 2px 2px 2px;\r\n    color: rgb(196, 48, 43);\r\n    text-align: right;\r\n    width: 97%;\r\n  }\r\n  \r\n  .mdl-card__supporting-text .material-icons {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .video-name-block {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 40px;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.45);\r\n  }\r\n  \r\n  .video-info-block {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 30px;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.45);\r\n  }\r\n  \r\n  .video-informations {\r\n    padding: 8px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .video-informations i {\r\n    font-size: 11px;\r\n  }\r\n  \r\n  .video-play-button {\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n  }\r\n  \r\n  .video-play-button i {\r\n    font-size: 50px;\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .mdl-card--expand:hover .video-play-button i {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .last-item {\r\n    margin-bottom: 45px;\r\n  }\r\n  \r\n  @media (max-width: 479px) {\r\n    .custom-cell.mdl-cell--2-col {\r\n      width: calc(100% - 16px);\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 839px) and (min-width: 480px) {\r\n    .custom-cell.mdl-cell--2-col {\r\n      width: calc(50% - 16px);\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/videos-list/videos-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/videos-list/videos-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell custom-cell mdl-cell--2-col\" id=\"{{i + video.id}}\" *ngFor=\"let video of videoList; let i = index;\" [ngClass]=\"{'last-item': i === videoList.length-1}\">\n<!--     <table border=\"1\">\n    <td> -->\n      <div class=\"demo-card-square mdl-card mdl-shadow--2dp\">\n      \n        <div class=\"mdl-card__title mdl-card--expand\" (click)=\"play(video)\" \n      [ngStyle]=\"{'background': '#000 url(' + video.snippet?.thumbnails.high.url + ') center center no-repeat', 'background-size': '125%'}\">\n          <div class=\"video-info-block\">\n            <div class=\"video-informations\">\n              <span style=\"float: left;\">\n                <i class=\"material-icons\">thumb_up</i>\n                {{ video.statistics?.likeCount | videoLikes }}\n              </span>\n              <span style=\"margin-left: 10px;\">\n                <i class=\"material-icons\">remove_red_eye</i>\n                {{ video.statistics?.viewCount | videoViews}}\n              </span>\n              <span style=\"margin-left: 10px; float: right;\">\n                <i class=\"material-icons\">access_time</i>\n                {{ video.contentDetails?.duration | videoDuration }}\n              </span>\n            </div>\n          </div>\n          <div class=\"video-name-block\">\n            <div class=\"video-informations\">\n              {{ video.snippet?.title | playlistItemName }}\n            </div>\n          </div>\n          <div class=\"video-play-button\">\n            <i class=\"material-icons\">play_circle_filled</i>\n          </div>\n        </div>\n        <div class=\"mdl-card__supporting-text\">\n          <i (click)=\"addToPlaylist(video)\" class=\"material-icons\">playlist_add</i>\n        <i> (*d1)</i>\n        </div>\n      <div>\n      </div>\n      \n    </div>\n    <!--</td>-->\n    <!--\n    <td>222\n        <span #tref>I am span</span>\n    <br/> <input id=\"checkBox\" type=\"checkbox\">b1\n    <br/> ...\n    <br/> <input id=\"checkBox\" type=\"checkbox\">b2\n    </td>\n    -->\n    <!--</table>-->\n    <div class=\"loader loader-progress\" *ngIf=\"loadingInProgress\">\n      <div class=\"loading\"></div>\n    "

/***/ }),

/***/ "./src/app/components/videos-list/videos-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/videos-list/videos-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: VideosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosListComponent", function() { return VideosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/youtube-api.service */ "./src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/playlist-store.service */ "./src/app/shared/services/playlist-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosListComponent = /** @class */ (function () {
    function VideosListComponent(youtubeService, youtubePlayer, playlistService) {
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.videoPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VideosListComponent.prototype.play = function (video) {
        this.youtubePlayer.playVideo(video.id, video.snippet.title);
        this.addToPlaylist(video);
    };
    VideosListComponent.prototype.addToPlaylist = function (video) {
        this.videoPlaylist.emit(video);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "loadingInProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoPlaylist", void 0);
    VideosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'videos-list',
            template: __webpack_require__(/*! ./videos-list.component.html */ "./src/app/components/videos-list/videos-list.component.html"),
            styles: [__webpack_require__(/*! ./videos-list.component.css */ "./src/app/components/videos-list/videos-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeApiService"],
            _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_2__["YoutubePlayerService"],
            _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistStoreService"]])
    ], VideosListComponent);
    return VideosListComponent;
}());



/***/ }),

/***/ "./src/app/components/videos-playlist/videos-playlist.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/videos-playlist/videos-playlist.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playlist {\r\n    height: calc(100% - 113px);\r\n    width: 5%;\r\n    max-width: 70px;\r\n    position: fixed;\r\n    top: 64px;\r\n    right: 0;\r\n    background-color: rgba(49, 68, 86, 1);\r\n    overflow-x: hidden;\r\n    transition: 0.1s;\r\n    box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, .14), -2px 3px 1px -2px rgba(0, 0, 0, .2), -2px 1px 5px 0 rgba(0, 0, 0, .12);\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .playlist.opened {\r\n    width: 25%;\r\n    max-width: 25%;\r\n    z-index: 993;\r\n    height: calc(100% - 114px);\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .playlist-thumbnail {\r\n    height: 55px;\r\n    width: 55px;\r\n    background: #000;\r\n    margin: 5px;\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n  \r\n  .playist-item.playing {\r\n    background: rgba(196, 48, 43, 0.95);\r\n  }\r\n  \r\n  .playist-item-empty {\r\n    color: #fff;\r\n  }\r\n  \r\n  .playist-item-empty .playlist-thumbnail {\r\n    text-align: center;\r\n  }\r\n  \r\n  .playist-item-empty i {\r\n    margin-top: 10px;\r\n    font-size: 35px;\r\n  }\r\n  \r\n  .playist-item:hover {\r\n    background: rgba(196, 48, 43, 0.5);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .playist-item:hover .delete-from-playlist {\r\n    display: block;\r\n  }\r\n  \r\n  .no-in-playlist {\r\n    color: #fff;\r\n    text-shadow: 2px 2px 2px #000;\r\n  }\r\n  \r\n  .video-duration {\r\n    color: #fff;\r\n    text-shadow: 2px 2px 2px #000;\r\n    position: absolute;\r\n    bottom: -4px;\r\n    left: 1px;\r\n    font-size: 9px;\r\n  }\r\n  \r\n  .opened-item-info {\r\n    display: inline-block;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    position: absolute;\r\n    left: 70px;\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .opened-item-info.closed {\r\n    display: none;\r\n  }\r\n  \r\n  .delete-from-playlist {\r\n    position: absolute;\r\n    display: none;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: #f44542;\r\n    background-color: rgba(0, 0, 0, 0.65);\r\n    font-size: 16px;\r\n  }\r\n  \r\n  @media (max-width: 1150px) {\r\n    .playlist {\r\n      width: 0;\r\n    }\r\n    .playlist.opened {\r\n      width: 40%;\r\n      max-width: 40%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 620px) {\r\n    .playlist.opened {\r\n      width: 70%;\r\n      max-width: 70%;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/videos-playlist/videos-playlist.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/videos-playlist/videos-playlist.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"playlist\" class=\"playlist\" [ngClass]=\"{'opened': playlistToggle}\">\n\n  <div *ngFor=\"let video of videoPlaylist; let i = index;\"\n       id=\"{{video.id}}\"\n       class=\"playist-item\"\n       (click)=\"play(video.id)\"\n       [ngClass]=\"{'playing': currentPlaying(video.id)}\">\n\n    <div class=\"playlist-thumbnail\"\n         [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.default.url + ') center center no-repeat', 'background-size': '100%'}\">\n      <span class=\"no-in-playlist\">{{ i + 1 }}</span>\n      <span class=\"video-duration\">{{ video.contentDetails.duration | videoDuration }}</span>\n      <i class=\"material-icons delete-from-playlist\" (click)=\"removeFromPlaylist(video)\">cancel</i>\n    </div>\n\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\n      {{ video.snippet.title | playlistItemName }}\n    </div>\n  </div>\n\n  <div class=\"playist-item-empty\" *ngIf=\"!videoPlaylist.length\">\n    <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000'}\">\n      <i class=\"material-icons\">block</i>\n    </div>\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\n      Playlist is empty\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/videos-playlist/videos-playlist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/videos-playlist/videos-playlist.component.ts ***!
  \*************************************************************************/
/*! exports provided: VideosPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPlaylistComponent", function() { return VideosPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/playlist-store.service */ "./src/app/shared/services/playlist-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosPlaylistComponent = /** @class */ (function () {
    function VideosPlaylistComponent(youtubePlayer, playlistService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.youtubePlayer.videoChangeEvent.subscribe(function (event) { return event ? _this.playNextVideo() : false; });
    }
    VideosPlaylistComponent.prototype.play = function (id) {
        var videoText = 'None';
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === id) {
                videoText = video.snippet.title;
            }
        });
        this.youtubePlayer.playVideo(id, videoText);
    };
    VideosPlaylistComponent.prototype.currentPlaying = function (id) {
        return this.youtubePlayer.getCurrentVideo() === id;
    };
    VideosPlaylistComponent.prototype.removeFromPlaylist = function (video) {
        this.videoPlaylist.splice(this.videoPlaylist.indexOf(video), 1);
        this.playlistService.removeFromPlaylist(video);
    };
    VideosPlaylistComponent.prototype.playNextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist;
        if (this.repeat) {
            this.play(current);
            return;
        }
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.youtubePlayer.getShuffled(inPlaylist, this.videoPlaylist.length)];
                this.youtubePlayer.playVideo(shuffled.id, shuffled.snippet.title);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id, this.videoPlaylist[inPlaylist + 1].snippet.title);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "videoPlaylist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistNames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "repeat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "shuffle", void 0);
    VideosPlaylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'videos-playlist',
            template: __webpack_require__(/*! ./videos-playlist.component.html */ "./src/app/components/videos-playlist/videos-playlist.component.html"),
            styles: [__webpack_require__(/*! ./videos-playlist.component.css */ "./src/app/components/videos-playlist/videos-playlist.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_1__["YoutubePlayerService"],
            _shared_services_playlist_store_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistStoreService"]])
    ], VideosPlaylistComponent);
    return VideosPlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/videos-search/videos-search.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/videos-search/videos-search.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-textfield--floating-label.is-focused>.mdl-textfield__label {\r\n    color: #fff;\r\n  }\r\n  \r\n  .mdl-textfield__input {\r\n    border-bottom: 1px solid rgba(255, 255, 255, .12);\r\n  }\r\n  \r\n  .mdl-textfield__label {\r\n    color: rgba(255, 255, 255, .26);\r\n  }\r\n  \r\n  .mdl-textfield__label:after {\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (max-width: 750px) {\r\n    .mdl-textfield {\r\n      width: 140px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/videos-search/videos-search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/videos-search/videos-search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch($event)\">\n  <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" formControlName=\"query\" type=\"text\" id=\"query\" autocomplete=\"off\">\n    <label class=\"mdl-textfield__label\" for=\"query\">Search</label>\n  </div>\n  <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n\t\t<i class=\"material-icons\">search</i>\n\t</button>\n</form>"

/***/ }),

/***/ "./src/app/components/videos-search/videos-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/videos-search/videos-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideosSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosSearchComponent", function() { return VideosSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/youtube-api.service */ "./src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/youtube-player.service */ "./src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosSearchComponent = /** @class */ (function () {
    function VideosSearchComponent(fb, youtubeService, youtubePlayer, notificationService) {
        this.fb = fb;
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.videosUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchForm = this.fb.group({
            query: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // this.youtubeService.searchVideos('autism dynamic intelligence DI')
        //   .then(data => {
        //     this.videosUpdated.emit(data);
        //   })
    }
    VideosSearchComponent.prototype.doSearch = function (event) {
        if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query)) {
            return;
        }
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        //alert('this.last_search= ' +  this.last_search);
        // this.youtubeService.searchVideos(this.last_search)
        //   .then(data => {
        //     if (data.length < 1) {
        //       this.notificationService.showNotification('No matches found.');
        //     }
        //     this.videosUpdated.emit(data);
        //   })
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "videosUpdated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "loadingInProgress", void 0);
    VideosSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'videos-search',
            template: __webpack_require__(/*! ./videos-search.component.html */ "./src/app/components/videos-search/videos-search.component.html"),
            styles: [__webpack_require__(/*! ./videos-search.component.css */ "./src/app/components/videos-search/videos-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeApiService"],
            _shared_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], VideosSearchComponent);
    return VideosSearchComponent;
}());



/***/ }),

/***/ "./src/app/main-list/main-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-list/main-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-list/main-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-list/main-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-list works!\n</p>\n\n<div *ngIf=\"show\"> \n    Hello {{users}}!\n  </div>\n\n<table *ngIf=\"show\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Description</th>\n      <th>Category</th>\n    </tr>\n  </thead>\n  <tbody>\n     <tr *ngFor=\"let user of users.results\">\n      <td>{{ user.id }}\n      </td>\n      <td>{{ user.description }}</td>\n      <td>{{ user.category }}</td>\n    </tr> \n  </tbody>\n</table>\n<div>users= {{users}}</div> \n\n<div *ngIf=\"showVideos\"> \n    <!--videos = <span>{{videos.items | json : 12}}</span>-->\n\n    <table *ngIf=\"showVideos\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Description</th>\n            <th>Category</th>\n          </tr>\n        </thead>\n        <tbody>\n           <tr *ngFor=\"let video of videos.items\">\n            <td>{{ video.snippet.channelId }}\n                <div class=\"mat-card__title mat-card--expand\" (click)=\"alert('play(video)')\" \n                [ngStyle]=\"{'background': '#000 url(' + video.snippet?.thumbnails.high.url + ') center center no-repeat', 'background-size': '125%'}\">\n                </div>\n\n\n\n\n            </td>\n            <td>\n              \n                <div>\n                    \n\n                    <span style=\"float: left;\">\n                      <i>thumb_up</i>\n                      {{ video.statistics?.likeCount  }}\n                    </span>\n                    <span style=\"margin-left: 10px;\">\n                      <i >remove_red_eye</i>\n                      {{ video.statistics?.viewCount }}\n                    </span>\n                    <span style=\"margin-left: 10px; float: right;\">\n                      <i >access_time</i>\n                      {{ video.contentDetails?.duration  }}\n                    </span>\n                  </div>\n\n            </td>\n            <td>\n\n              {{ video.snippet.thumbnails.high.url }}<br/>\n              <div>\n                  <img [attr.src]=\"video.snippet.thumbnails.high.url\" width=\"80\" height=\"70\"  />\n              </div>\n              \n            \n            </td>\n          </tr> \n        </tbody>\n      </table>\n  </div>"

/***/ }),

/***/ "./src/app/main-list/main-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-list/main-list.component.ts ***!
  \**************************************************/
/*! exports provided: MainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListComponent", function() { return MainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/youtube-api.service */ "./src/app/shared/services/youtube-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainListComponent = /** @class */ (function () {
    function MainListComponent(youtubeService) {
        this.youtubeService = youtubeService;
        //protected users$: Observable<ICourse[]>;
        this.videoList = [];
        this.show = false;
        this.showVideos = false;
    }
    MainListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.youtubeService.getUsers();
        this.videos$ = this.youtubeService.searchVideos('The Doors');
        this.videos$.subscribe(function (val) {
            console.log("\n videos= " + val);
            console.log(val);
            // this.videos= val.subscribe(res => {        
            //   this.videos=res;
            //   console.log('res.items=', res.items);
            //   //console.log('wtf=', this.wtf)      
            // });
            // this.showVideos=true;
        });
        this.users$.subscribe(function (val) {
            console.log("\n FFFFF= " + val);
            console.log(val);
            _this.users = val;
            _this.show = true;
        });
    };
    MainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appmain-list',
            template: __webpack_require__(/*! ./main-list.component.html */ "./src/app/main-list/main-list.component.html"),
            styles: [__webpack_require__(/*! ./main-list.component.css */ "./src/app/main-list/main-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_youtube_api_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeApiService"]])
    ], MainListComponent);
    return MainListComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: YOUTUBE_API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_API_KEY", function() { return YOUTUBE_API_KEY; });
var YOUTUBE_API_KEY = 'AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY';


/***/ }),

/***/ "./src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts ***!
  \************************************************************************/
/*! exports provided: LazyScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyScrollDirective", function() { return LazyScrollDirective; });
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

var LazyScrollDirective = /** @class */ (function () {
    function LazyScrollDirective(element) {
        this.element = element;
        this.OnScrollMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    LazyScrollDirective.prototype.onScroll = function () {
        this._count++;
        if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
            this.OnScrollMethod.emit(null);
        }
        else {
            if (this._count % this.scrollTrigger === 0) {
                this.OnScrollMethod.emit(null);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ScrollDistance'),
        __metadata("design:type", Number)
    ], LazyScrollDirective.prototype, "scrollTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LazyScrollDirective.prototype, "OnScrollMethod", void 0);
    LazyScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[LazyScroll]',
            host: {
                '(scroll)': 'onScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LazyScrollDirective);
    return LazyScrollDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/now-playing-name.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/now-playing-name.pipe.ts ***!
  \*******************************************************/
/*! exports provided: NowPlayingNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingNamePipe", function() { return NowPlayingNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NowPlayingNamePipe = /** @class */ (function () {
    function NowPlayingNamePipe() {
    }
    NowPlayingNamePipe.prototype.transform = function (value, args) {
        var dots = ' ...';
        if (value.length > 56) {
            value = value.substring(0, 51) + dots;
        }
        return value;
    };
    NowPlayingNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'nowPlayingName'
        })
    ], NowPlayingNamePipe);
    return NowPlayingNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/playlist-item-name.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/playlist-item-name.pipe.ts ***!
  \*********************************************************/
/*! exports provided: PlaylistItemNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistItemNamePipe", function() { return PlaylistItemNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaylistItemNamePipe = /** @class */ (function () {
    function PlaylistItemNamePipe() {
    }
    PlaylistItemNamePipe.prototype.transform = function (value, args) {
        var dots = '...';
        if (value.length > 65) {
            value = value.substring(0, 62) + dots;
        }
        return value;
    };
    PlaylistItemNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'playlistItemName'
        })
    ], PlaylistItemNamePipe);
    return PlaylistItemNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/video-duration.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/video-duration.pipe.ts ***!
  \*****************************************************/
/*! exports provided: VideoDurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDurationPipe", function() { return VideoDurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoDurationPipe = /** @class */ (function () {
    function VideoDurationPipe() {
    }
    VideoDurationPipe.prototype.transform = function (value, args) {
        var time = value;
        if (!time) {
            return '...';
        }
        return ['PT', 'H', 'M', 'S'].reduce(function (prev, cur, i, arr) {
            var now = prev.rest.split(cur);
            if (cur !== 'PT' && cur !== 'H' && !prev.rest.match(cur)) {
                prev.new.push('00');
            }
            if (now.length === 1) {
                return prev;
            }
            prev.new.push(now[0]);
            return {
                rest: now[1].replace(cur, ''),
                new: prev.new
            };
        }, { rest: time, new: [] })
            .new.filter(function (_time) { return _time !== ''; })
            .map(function (_time) { return _time.length === 1 ? "0" + _time : _time; })
            .join(':');
    };
    VideoDurationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'videoDuration'
        })
    ], VideoDurationPipe);
    return VideoDurationPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/video-likes.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/video-likes.pipe.ts ***!
  \**************************************************/
/*! exports provided: VideoLikesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoLikesPipe", function() { return VideoLikesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoLikesPipe = /** @class */ (function () {
    function VideoLikesPipe() {
    }
    VideoLikesPipe.prototype.transform = function (value, args) {
        return parseInt(value, 10).toLocaleString('en');
    };
    VideoLikesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'videoLikes'
        })
    ], VideoLikesPipe);
    return VideoLikesPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/video-views.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/video-views.pipe.ts ***!
  \**************************************************/
/*! exports provided: VideoViewsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewsPipe", function() { return VideoViewsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoViewsPipe = /** @class */ (function () {
    function VideoViewsPipe() {
    }
    VideoViewsPipe.prototype.transform = function (value, args) {
        return parseInt(value, 10).toLocaleString('en');
    };
    VideoViewsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'videoViews'
        })
    ], VideoViewsPipe);
    return VideoViewsPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/browser-notification.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/browser-notification.service.ts ***!
  \*****************************************************************/
/*! exports provided: BrowserNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserNotificationService", function() { return BrowserNotificationService; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var _window = window;
var BrowserNotificationService = /** @class */ (function () {
    function BrowserNotificationService() {
        this.enabled = false;
        this.notifSupported = window.Notification && Notification.permission !== 'denied' ? true : false;
    }
    BrowserNotificationService.prototype.checkNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.enabled) {
                    return [2 /*return*/, Notification.requestPermission(function (result) {
                            return result === 'granted' ? (_this.enabled = true) : false;
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    BrowserNotificationService.prototype.disable = function () {
        this.enabled = false;
    };
    BrowserNotificationService.prototype.show = function (name) {
        if (!this.notifSupported || !this.enabled) {
            return;
        }
        Notification.requestPermission(function (status) {
            var n = new Notification('Now playing', {
                body: name,
                icon: 'assets/logo_git.png'
            });
        });
    };
    BrowserNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BrowserNotificationService);
    return BrowserNotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
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

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.timeoutDuration = 3500;
    }
    NotificationService.prototype.showNotification = function (message) {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: message,
            timeout: this.timeoutDuration
        };
        notification['MaterialSnackbar'].showSnackbar(data);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/playlist-sortby.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/playlist-sortby.service.ts ***!
  \************************************************************/
/*! exports provided: PlaylistSortbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistSortbyService", function() { return PlaylistSortbyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaylistSortbyService = /** @class */ (function () {
    function PlaylistSortbyService(notificationService) {
        this.notificationService = notificationService;
        this.ngxYTPlayer = 'ngx_yt_player';
        this.playlists_template = {
            'playlists': []
        };
    }
    PlaylistSortbyService.prototype.init = function () {
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(this.playlists_template));
    };
    PlaylistSortbyService.prototype.test = function (videoList) {
        //alert(videoList[0]);
        console.log(videoList[0]);
        videoList.forEach(function (video, index) {
            console.log(video.id, video.snippet.title);
            // if (video.id === current) {
            //     ;inPlaylist = index;
            // }
        });
        this.exportSortlist(videoList);
        return "this is a test from sort service";
    };
    PlaylistSortbyService.prototype.exportSortlist = function (videoList) {
        if (videoList.length < 1) {
            this.notificationService.showNotification('Nothing to export.');
            return;
        }
        var data = JSON.stringify(videoList);
        var a = document.createElement('a');
        var file = new Blob([data], { type: 'text/json' });
        a.href = URL.createObjectURL(file);
        a.download = 'sortedlist.json';
        a.click();
        this.notificationService.showNotification('Playlist exported.');
    };
    PlaylistSortbyService.prototype.retrieveStorage = function () {
        var storedPlaylist = this.parse();
        if (!storedPlaylist) {
            this.init();
            storedPlaylist = this.parse();
        }
        return storedPlaylist;
    };
    PlaylistSortbyService.prototype.addToPlaylist = function (video) {
        var store = this.parse();
        store.playlists.push(video);
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistSortbyService.prototype.removeFromPlaylist = function (video) {
        var store = this.parse();
        store.playlists = store.playlists.filter(function (item) { return item.id !== video.id; });
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistSortbyService.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxYTPlayer));
    };
    PlaylistSortbyService.prototype.clearPlaylist = function () {
        this.init();
    };
    PlaylistSortbyService.prototype.importPlaylist = function (videos) {
        var store = this.parse();
        store.playlists = videos;
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistSortbyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], PlaylistSortbyService);
    return PlaylistSortbyService;
}());



/***/ }),

/***/ "./src/app/shared/services/playlist-store.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/playlist-store.service.ts ***!
  \***********************************************************/
/*! exports provided: PlaylistStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistStoreService", function() { return PlaylistStoreService; });
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

var PlaylistStoreService = /** @class */ (function () {
    function PlaylistStoreService() {
        this.ngxYTPlayer = 'ngx_yt_player';
        this.playlists_template = {
            'playlists': []
        };
    }
    PlaylistStoreService.prototype.init = function () {
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(this.playlists_template));
    };
    PlaylistStoreService.prototype.retrieveStorage = function () {
        var storedPlaylist = this.parse();
        if (!storedPlaylist) {
            this.init();
            storedPlaylist = this.parse();
        }
        return storedPlaylist;
    };
    PlaylistStoreService.prototype.addToPlaylist = function (video) {
        var store = this.parse();
        store.playlists.push(video);
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.removeFromPlaylist = function (video) {
        var store = this.parse();
        store.playlists = store.playlists.filter(function (item) { return item.id !== video.id; });
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxYTPlayer));
    };
    PlaylistStoreService.prototype.clearPlaylist = function () {
        this.init();
    };
    PlaylistStoreService.prototype.importPlaylist = function (videos) {
        var store = this.parse();
        store.playlists = videos;
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PlaylistStoreService);
    return PlaylistStoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/youtube-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/youtube-api.service.ts ***!
  \********************************************************/
/*! exports provided: YoutubeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeApiService", function() { return YoutubeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import { NotificationService } from './notification.service';

//import { UrlResolver } from "../../../../node_modules/@angular/compiler";
var YoutubeApiService = /** @class */ (function () {
    function YoutubeApiService(http) {
        this.http = http;
        this.path = 'http://localhost:3000/town';
        this.base_url = 'https://www.googleapis.com/youtube/v3/';
        this.max_results = 50;
    }
    YoutubeApiService.prototype.getUsers = function () {
        return this
            .http
            .get(this.path + "/api/courses")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // search22
    YoutubeApiService.prototype.searchVideos22 = function (query) {
        var url = this.base_url + 'search?q=' + query + '&maxResults=' + this.max_results +
            '&type=video&part=snippet,id&key=' + _constants__WEBPACK_IMPORTED_MODULE_3__["YOUTUBE_API_KEY"] + '&videoEmbeddable=true';
        console.log("searchVideos: url=" + url);
        return this
            .http
            .get(url);
        /*
        .pipe(
          map(response => {
            let jsonRes = response;
            //console.log(jsonRes);
            let res = jsonRes['items'];
            this.lastQuery = query;
            this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            
            let ids = [];
            res.forEach((item) => {
              ids.push(item.id.videoId);
              });

              console.log(ids);
              console.log(`ids= ${ids}`);
              return this.getVideos(ids);
          })
      );
      */
    };
    YoutubeApiService.prototype.searchVideos = function (query) {
        var _this = this;
        var url = this.base_url + 'search?q=' + query + '&maxResults=' + this.max_results +
            '&type=video&part=snippet,id&key=' + _constants__WEBPACK_IMPORTED_MODULE_3__["YOUTUBE_API_KEY"] + '&videoEmbeddable=true';
        console.log("searchVideos: url=" + url);
        return this
            .http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var jsonRes = response;
            //console.log(jsonRes);  
            var res = jsonRes['items'];
            _this.lastQuery = query;
            _this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            var ids = [];
            res.forEach(function (item) {
                ids.push(item.id.videoId);
            });
            console.log(ids);
            console.log("ids= " + ids);
            return _this.getVideos(ids);
        }));
    };
    //   searchVideos(query: string): Promise<any> {
    //     const url = this.base_url + 'search?q=' + query + '&maxResults=' + this.max_results +
    //       '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true';
    // 	  //url= "https://www.youtube.com/user/mastronardif/videos";
    // 	  //alert ('url='+ url);
    //     return this.http.get(url)
    //       .map(response => {
    //         let jsonRes = response.json();
    // 		//console.log(jsonRes);
    //         let res = jsonRes['items'];
    //         this.lastQuery = query;
    //         this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
    //         let ids = [];
    //         res.forEach((item) => {
    //           ids.push(item.id.videoId);
    //         });
    //         return this.getVideos(ids);
    //       })
    //       .toPromise()
    //       .catch(this.handleError)
    //   }
    //   searchNext(): Promise<any> {
    //     const url = this.base_url + 'search?q=' + this.lastQuery + '&pageToken=' + this.nextToken +
    //       '&maxResults=' + this.max_results + '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true';
    //     return this.http.get(url)
    //       .map(response => {
    //         let jsonRes = response.json();
    //         let res = jsonRes['items'];
    //         this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
    //         let ids = [];
    //         res.forEach((item) => {
    //           ids.push(item.id.videoId);
    //         });
    //         return this.getVideos(ids);
    //       })
    //       .toPromise()
    //       .catch(this.handleError)
    //   }
    YoutubeApiService.prototype.searchNext = function () {
        return null;
    };
    YoutubeApiService.prototype.getVideos = function (ids) {
        var url = this.base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + this.max_results +
            '&type=video&part=snippet,contentDetails,statistics&key=' + _constants__WEBPACK_IMPORTED_MODULE_3__["YOUTUBE_API_KEY"];
        console.log("url= " + url);
        return this
            .http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) { return results; })
        //   {
        //   let jsonRes = results;
        //   let res = jsonRes['items'];
        //   console.log(`jsonRes['items']= ${jsonRes['items']}`);
        //   //return res;
        // }
        );
        //)
    };
    YoutubeApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YoutubeApiService);
    return YoutubeApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/youtube-player.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/youtube-player.service.ts ***!
  \***********************************************************/
/*! exports provided: YoutubePlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return YoutubePlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _browser_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser-notification.service */ "./src/app/shared/services/browser-notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Observable } from 'rxjs/Observable';


var _window = window;
var YoutubePlayerService = /** @class */ (function () {
    function YoutubePlayerService(notificationService, browserNotification) {
        this.notificationService = notificationService;
        this.browserNotification = browserNotification;
        this.videoChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.playPauseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.currentVideoText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    YoutubePlayerService.prototype.createPlayer = function () {
        var _this = this;
        var interval = setInterval(function () {
            if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
                _this.yt_player = new _window.YT.Player('yt-player', {
                    width: '440',
                    height: '250',
                    playerVars: {
                        iv_load_policy: '3',
                        rel: '0'
                    },
                    events: {
                        onStateChange: function (ev) {
                            _this.onPlayerStateChange(ev);
                        }
                    }
                });
                clearInterval(interval);
            }
        }, 100);
    };
    YoutubePlayerService.prototype.onPlayerStateChange = function (event) {
        var state = event.data;
        switch (state) {
            case 0:
                this.videoChangeEvent.emit(true);
                this.playPauseEvent.emit('pause');
                break;
            case 1:
                this.playPauseEvent.emit('play');
                break;
            case 2:
                this.playPauseEvent.emit('pause');
                break;
        }
    };
    YoutubePlayerService.prototype.playVideo = function (videoId, videoText) {
        if (!this.yt_player) {
            this.notificationService.showNotification('Player not ready.');
            return;
        }
        this.yt_player.loadVideoById(videoId);
        this.currentVideoId = videoId;
        this.currentVideoText.emit(videoText);
        this.browserNotification.show(videoText);
    };
    YoutubePlayerService.prototype.pausePlayingVideo = function () {
        this.yt_player.pauseVideo();
    };
    YoutubePlayerService.prototype.playPausedVideo = function () {
        this.yt_player.playVideo();
    };
    YoutubePlayerService.prototype.getCurrentVideo = function () {
        return this.currentVideoId;
    };
    YoutubePlayerService.prototype.resizePlayer = function (width, height) {
        this.yt_player.setSize(width, height);
    };
    YoutubePlayerService.prototype.getShuffled = function (index, max) {
        if (max < 2) {
            return;
        }
        var i = Math.floor(Math.random() * max);
        return i !== index ? i : this.getShuffled(index, max);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], YoutubePlayerService.prototype, "videoChangeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], YoutubePlayerService.prototype, "playPauseEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], YoutubePlayerService.prototype, "currentVideoText", void 0);
    YoutubePlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"],
            _browser_notification_service__WEBPACK_IMPORTED_MODULE_2__["BrowserNotificationService"]])
    ], YoutubePlayerService);
    return YoutubePlayerService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\FxM\Dev\ng246\divideos\divideos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map