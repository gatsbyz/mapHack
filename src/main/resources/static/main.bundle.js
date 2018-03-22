webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "main {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: column;\n\t        flex-flow: column;\n\theight: 100%;\n}\n\n.homePage {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n.homePage-image {\n\twidth: 600px;\n}\n\n.homePage-context {\n\twidth: 300px;\n}\n\n/* Active dropdown selections for Route Type - white */\n\nli.active a{ \n\tcolor: white;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-9 pt-3\">\n\t<router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__ = __webpack_require__("./node_modules/angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_index_index_component__ = __webpack_require__("./src/app/assets/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_index_gallery_gallery_component__ = __webpack_require__("./src/app/assets/index/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_sidebar_sidebar_component__ = __webpack_require__("./src/app/assets/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_home_home_component__ = __webpack_require__("./src/app/assets/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_mapIndex_mapIndex_component__ = __webpack_require__("./src/app/assets/mapIndex/mapIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_cheatNew_cheatNew_component__ = __webpack_require__("./src/app/assets/cheatNew/cheatNew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_cheatIndex_cheatIndex_component__ = __webpack_require__("./src/app/assets/cheatIndex/cheatIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_cheatEdit_cheatEdit_component__ = __webpack_require__("./src/app/assets/cheatEdit/cheatEdit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_cheatShow_cheatShow_component__ = __webpack_require__("./src/app/assets/cheatShow/cheatShow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cheat_service__ = __webpack_require__("./src/app/services/cheat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__assets_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__assets_index_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__assets_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__assets_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__assets_mapIndex_mapIndex_component__["a" /* MapIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_13__assets_cheatNew_cheatNew_component__["a" /* CheatNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__assets_cheatIndex_cheatIndex_component__["a" /* CheatIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_15__assets_cheatEdit_cheatEdit_component__["a" /* CheatEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__assets_cheatShow_cheatShow_component__["a" /* CheatShowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing__["b" /* routing */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* appRouterProviders */],
                [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
                [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* HashLocationStrategy */] }],
                __WEBPACK_IMPORTED_MODULE_18__services_cheat_service__["a" /* CheatService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_index_index_component__ = __webpack_require__("./src/app/assets/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_home_home_component__ = __webpack_require__("./src/app/assets/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mapIndex_mapIndex_component__ = __webpack_require__("./src/app/assets/mapIndex/mapIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_cheatNew_cheatNew_component__ = __webpack_require__("./src/app/assets/cheatNew/cheatNew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_cheatIndex_cheatIndex_component__ = __webpack_require__("./src/app/assets/cheatIndex/cheatIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_cheatEdit_cheatEdit_component__ = __webpack_require__("./src/app/assets/cheatEdit/cheatEdit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_cheatShow_cheatShow_component__ = __webpack_require__("./src/app/assets/cheatShow/cheatShow.component.ts");








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__assets_index_index_component__["a" /* IndexComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__assets_home_home_component__["a" /* HomeComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_3__assets_mapIndex_mapIndex_component__["a" /* MapIndexComponent */] },
    { path: 'cheatNew', component: __WEBPACK_IMPORTED_MODULE_4__assets_cheatNew_cheatNew_component__["a" /* CheatNewComponent */] },
    { path: 'cheatIndex', component: __WEBPACK_IMPORTED_MODULE_5__assets_cheatIndex_cheatIndex_component__["a" /* CheatIndexComponent */] },
    { path: 'cheatEdit', component: __WEBPACK_IMPORTED_MODULE_6__assets_cheatEdit_cheatEdit_component__["a" /* CheatEditComponent */] },
    { path: 'cheatShow', component: __WEBPACK_IMPORTED_MODULE_7__assets_cheatShow_cheatShow_component__["a" /* CheatShowComponent */] }
];
var appRouterProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/assets/cheatEdit/cheatEdit.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\n\theight: 600px;\n}\n\n#pac-input {\n\twidth: 300px;\n\theight: 29px;\n\tmargin-top: 10px;\n}\n\n.map-button {\n\tmargin: 10px;\n}\n\n.route-type div {\n\tdisplay: inline;\n}"

/***/ }),

/***/ "./src/app/assets/cheatEdit/cheatEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\">\n\n<div id=\"map\"></div>\n<button id=\"reset\" class=\"btn btn-default btn-sm map-button\" ng-click=\"$ctrl.clearOverlays()\">Reset Markers</button>\n\n<div id=\"cheat-new-page\">\n\t<form>\n\t\t<div id=\"floating-panel\">\n\t\t\t<div class=\"title\">Title:</div>\n\t\t\t<div class=\"route-type\">\n\t\t\t\t<div>Route Type:</div>\n\t\t\t\t<ss-multiselect-dropdown [options]=\"routeTypeData\" [texts]=\"routeTypeTexts\" [settings]=\"routeTypeSettings\" [(ngModel)]=\"routeTypeModel\" name=\"routeType\"></ss-multiselect-dropdown>\n\t\t\t</div>\n\t\t\t<textarea id=\"cheat-textarea\" rows=\"10\" cols=\"60\" ng-model=\"$ctrl.cheat.description\" placeholder=\"Write details about this hacked route.\">\n\t\t\t</textarea>\n\t\t\t<br>\n\t\t\t<button class=\"btn btn-default btn-sm\" ng-click=\"$ctrl.editCheat()\">Submit</button>\n\t\t</div>\n\t</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/assets/cheatEdit/cheatEdit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheatEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cheat_service__ = __webpack_require__("./src/app/services/cheat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheatEditComponent = /** @class */ (function () {
    function CheatEditComponent(cheatService, router, route) {
        var _this = this;
        this.cheatService = cheatService;
        this.router = router;
        this.route = route;
        this.map = null;
        this.cheat = null;
        this.routeTypeData = null;
        this.routeTypeModel = [];
        this.cheatMarkersArray = [];
        this.markersArray = [];
        this.sub = this.route.queryParamMap.subscribe(function (params) {
            _this.id = +params.get('id') || 0;
            _this.cheatService.getById(_this.id).subscribe(function (cheat) {
                console.log(cheat);
                _this.cheat = cheat;
                _this.initAutocomplete();
                _this.drawCheatEndPoints(cheat);
                _this.drawCheatPath(cheat);
                _this.fetchRouteType(cheat);
            }, function (err) {
                console.log(err);
                return _this.router.navigate(['map']);
            });
        });
    }
    CheatEditComponent.prototype.ngOnInit = function () {
        this.routeTypeModel = [];
        this.routeTypeSettings = {
            // enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.routeTypeTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.routeTypeData = [
            { id: 'DRIVING', name: 'Driving' },
            { id: 'WALKING', name: 'Walking' },
            { id: 'BICYCLING', name: 'Bicycling' },
            { id: 'TRANSIT', name: 'Transit' },
        ];
    };
    CheatEditComponent.prototype.fetchRouteType = function (cheat) {
        cheat.routeType.forEach(function (element, index) {
            this.routeTypeModel.push(element);
        }, this);
    };
    CheatEditComponent.prototype.initAutocomplete = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: this.cheat.startPointLat, lng: this.cheat.startPointLong },
            zoom: 18,
            mapTypeId: 'roadmap'
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var input2 = document.getElementById('reset');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);
    };
    CheatEditComponent.prototype.drawCheatPath = function (cheat) {
        var flightPath = new google.maps.Polyline({
            path: [{ lat: cheat.startPointLat, lng: cheat.startPointLong }, { lat: cheat.endPointLat, lng: cheat.endPointLong }],
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);
    };
    CheatEditComponent.prototype.drawCheatEndPoints = function (cheat) {
        var latLng1 = { lat: cheat.startPointLat, lng: cheat.startPointLong };
        var marker1 = new google.maps.Marker({
            position: latLng1,
            map: this.map,
        });
        this.cheatMarkersArray.push(marker1);
        var latLng2 = { lat: cheat.endPointLat, lng: cheat.endPointLong };
        var marker2 = new google.maps.Marker({
            position: latLng2,
            map: this.map,
        });
        this.cheatMarkersArray.push(marker2);
    };
    CheatEditComponent.prototype.clearOverlays = function () {
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    };
    CheatEditComponent.prototype.editCheat = function () {
        var _this = this;
        this.markersArray.forEach(function (element, index) {
            if (index === 0) {
                this.cheat.startPointLat = element.position.lat();
                this.cheat.startPointLong = element.position.lng();
                // vm.cheat.zipcode = element.address_components[-1].long_name
            }
            else {
                this.cheat.endPointLat = element.position.lat();
                this.cheat.endPointLong = element.position.lng();
            }
        });
        var routeType = '';
        this.routeTypeModel.forEach(function (element, index) {
            // route_type+=(index==0?'{':',')+element.id;
        });
        routeType += '}';
        this.cheat.routeType = routeType;
        this.cheatService
            .update(this.cheat).subscribe(function (cheat) {
            return _this.router.navigate(['cheatShow']);
        }, function (err) {
            console.log(err);
        });
    };
    CheatEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-cheatedit',
            template: __webpack_require__("./src/app/assets/cheatEdit/cheatEdit.component.html"),
            styles: [__webpack_require__("./src/app/assets/cheatEdit/cheatEdit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cheat_service__["a" /* CheatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CheatEditComponent);
    return CheatEditComponent;
}());



/***/ }),

/***/ "./src/app/assets/cheatIndex/cheatIndex.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assets/cheatIndex/cheatIndex.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assets/cheatIndex/cheatIndex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheatIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheatIndexComponent = /** @class */ (function () {
    function CheatIndexComponent() {
        this.cheats = [];
        this.currentUser = {};
    }
    CheatIndexComponent.prototype.ngOnInit = function () {
        //        cheatsService
        //            .getCheats($stateParams.id)
        //            .then(function(res){
        //                console.log(res);
        //                vm.cheats = res.data.cheats;
        //                vm.currentUser = res.data.currentUser;
        //                vm.userArray = res.data.user_array;
        //        });
    };
    CheatIndexComponent.prototype.deleteCheat = function (cheat) {
        //        var id = cheat.id
        //        cheatsService
        //            .deleteCheat(id)
        //            .then(function(res){
        //                console.log('Your cheat has been deleted')
        //                $window.location.reload();
        //            })
    };
    CheatIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cheatindex',
            template: __webpack_require__("./src/app/assets/cheatIndex/cheatIndex.component.html"),
            styles: [__webpack_require__("./src/app/assets/cheatIndex/cheatIndex.component.css")]
        })
    ], CheatIndexComponent);
    return CheatIndexComponent;
}());



/***/ }),

/***/ "./src/app/assets/cheatNew/cheatNew.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\n\theight: 600px;\n}\n\n.cheat-new-page {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\twidth: 500px;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\tpadding: 10px;\n\tmargin: 0;\n}\n\n.cheat-textarea {\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\tborder-color: #EEEEEE;\n\tborder-width: 2px;\n}\n\n.title {\n\tmargin-top: 2px;\n}\n\n.map-button {\n\tmargin: 10px;\n}\n\n.route-type div {\n\tdisplay: inline;\n}\n\n#pac-input {\n\twidth: 300px;\n\theight: 29px;\n\tmargin-top: 10px;\n}\n\nli.dropdown-item a {\n    color: white !important;\n}"

/***/ }),

/***/ "./src/app/assets/cheatNew/cheatNew.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n\n<div [(hidden)]=\"!showMap\">\n\t<input id=\"pac-input\" class=\"form-control\"\n\t\ttype=\"text\" placeholder=\"Search Box\">\n\n\t<button id=\"reset\" class=\"btn btn-light map-button\"\n\t\t(click)=\"clearOverlays()\">Reset Markers</button>\n\n\t<div class=\"cheat-new-page\">\n\t\t<form (ngSubmit)=\"saveCheat()\">\n\t\t\t<div id=\"floating-panel\">\n\t\t\t\t<div class=\"title\">Title:</div>\n\t\t\t\t<div class=\"route-type\">\n\t\t\t\t\t<div>Route Type:</div>\n\t\t\t\t\t<ss-multiselect-dropdown [options]=\"routeTypeData\"\n\t\t\t\t\t\t[texts]=\"routeTypeTexts\" [settings]=\"routeTypeSettings\"\n\t\t\t\t\t\t[(ngModel)]=\"routeTypeModel\" name=\"routeType\"></ss-multiselect-dropdown>\n\t\t\t\t</div>\n\t\t\t\t<textarea [(ngModel)]=\"description\" class=\"cheat-textarea\" rows=\"10\"\n\t\t\t\t\tcols=\"60\" placeholder=\"Write details about this hacked route.\"\n\t\t\t\t\tname=\"description\"></textarea>\n\t\t\t\t<br>\n\t\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"saveCheat()\">Submit</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/assets/cheatNew/cheatNew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheatNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cheat_service__ = __webpack_require__("./src/app/services/cheat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheatNewComponent = /** @class */ (function () {
    function CheatNewComponent(cheatService, router, fb, ref) {
        this.cheatService = cheatService;
        this.router = router;
        this.fb = fb;
        this.ref = ref;
        this.cheat = {
            description: '',
            routeType: []
        };
        this.coordinates = [];
        this.markersArray = [];
        this.showMap = true;
    }
    CheatNewComponent.prototype.ngOnInit = function () {
        this.initAutocomplete();
        this.routeTypeModel = [];
        this.routeTypeSettings = {
            checkedStyle: 'glyphicon',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.routeTypeTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.routeTypeData = [
            { id: 'DRIVING', name: 'Driving' },
            { id: 'WALKING', name: 'Walking' },
            { id: 'BICYCLING', name: 'Bicycling' },
            { id: 'TRANSIT', name: 'Transit' },
        ];
    };
    CheatNewComponent.prototype.initAutocomplete = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            // center: {lat: 40.730610, lng: -73.935242},
            zoom: 13,
            mapTypeId: 'roadmap'
        });
        var _this = this;
        //    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
        //      // do something only the first time the map is loaded
        //      _this.showMap = true;
        //      console.log('gatsby');
        //      _this.ref.detectChanges();
        //    });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(initialLocation);
            });
        }
        map.addListener('click', function (e) {
            _this.placeMarker(e.latLng, map);
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var input2 = document.getElementById('reset');
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input2);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log('Returned place contains no geometry');
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    };
    CheatNewComponent.prototype.placeMarker = function (latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        this.markersArray.push(marker);
        // map.panTo(latLng);
    };
    CheatNewComponent.prototype.clearOverlays = function () {
        console.log(this.routeTypeModel);
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    };
    CheatNewComponent.prototype.saveCheat = function () {
        var _this = this;
        this.markersArray.forEach(function (element, index) {
            this.coordinates.push({
                latitude: element.position.lat(),
                longitude: element.position.lng(),
                orderNumber: index
            });
        }, this);
        this.routeTypeModel.forEach(function (element, index) {
            this.cheat.routeType.push(element); // {'description' : element.id}
        }, this);
        this.cheat.description = this.description;
        var cheat = this.cheatService.create(this.cheat);
        var data = { cheat: this.cheat, coordinates: this.coordinates };
        this.cheatService.save(data).subscribe(function (res) {
            console.log(res);
            var navigationExtras = {
                queryParams: { id: res.id },
                fragment: 'anchor'
            };
            _this.router.navigate(['/cheatShow'], navigationExtras);
        }, function (err) {
            alert(err);
            return _this.router.navigate(['/map']);
        });
    };
    CheatNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-cheatnew',
            template: __webpack_require__("./src/app/assets/cheatNew/cheatNew.component.html"),
            styles: [__webpack_require__("./src/app/assets/cheatNew/cheatNew.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cheat_service__["a" /* CheatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */]])
    ], CheatNewComponent);
    return CheatNewComponent;
}());



/***/ }),

/***/ "./src/app/assets/cheatShow/cheatShow.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\n\theight: 600px;\n}\n\n.map-button {\n\tmargin: 10px;\n}"

/***/ }),

/***/ "./src/app/assets/cheatShow/cheatShow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n<button id=\"reset\" class=\"btn btn-lite map-button\" routerLink=\"/cheatEdit\" [queryParams]=\"{id:cheat?cheat.id:0}\">Edit</button>\n\n<div class=\"cheat-wrap\">\n\t<div class=\"route-type\">\n\t\t<div>Route Type:</div>\n\t\t<div> {{cheat?cheat.routeType:''}} </div>\n\t</div>\n\t<p> {{cheat?cheat.description:''}} </p>\n</div>"

/***/ }),

/***/ "./src/app/assets/cheatShow/cheatShow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheatShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cheat_service__ = __webpack_require__("./src/app/services/cheat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheatShowComponent = /** @class */ (function () {
    function CheatShowComponent(cheatService, router, route) {
        var _this = this;
        this.cheatService = cheatService;
        this.router = router;
        this.route = route;
        this.map = null;
        this.cheatMarkersArray = [];
        this.sub = this.route.queryParamMap.subscribe(function (params) {
            _this.id = +params.get('id') || 0;
            _this.cheatService.getById(_this.id).subscribe(function (cheat) {
                console.log(cheat);
                _this.cheat = cheat;
                _this.initAutocomplete(cheat);
                _this.drawCheatEndPoints(cheat);
                _this.drawCheatPath(cheat);
            }, function (err) {
                console.log(err);
                return _this.router.navigate(['map']);
            });
        });
    }
    CheatShowComponent.prototype.ngOnInit = function () {
    };
    CheatShowComponent.prototype.initAutocomplete = function (cheat) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(cheat.coordinate[0].latitude, cheat.coordinate[0].longitude),
            zoom: 18,
            mapTypeId: 'roadmap'
        });
        var input = document.getElementById('reset');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
    };
    CheatShowComponent.prototype.drawCheatPath = function (cheat) {
        var path = [];
        cheat.coordinate.forEach(function (val, i) {
            path.push(new google.maps.LatLng(val.latitude, val.longitude));
        });
        var flightPath = new google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);
    };
    CheatShowComponent.prototype.drawCheatEndPoints = function (cheat) {
        var latLng;
        var marker;
        cheat.coordinate.forEach(function (val, i) {
            latLng = new google.maps.LatLng(val.latitude, val.longitude);
            marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
            });
            this.cheatMarkersArray.push(marker);
        }, this);
    };
    CheatShowComponent.prototype.editCheat = function () {
        this.router.navigateByUrl('/cheatedit');
    };
    CheatShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-cheatshow',
            template: __webpack_require__("./src/app/assets/cheatShow/cheatShow.component.html"),
            styles: [__webpack_require__("./src/app/assets/cheatShow/cheatShow.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cheat_service__["a" /* CheatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CheatShowComponent);
    return CheatShowComponent;
}());



/***/ }),

/***/ "./src/app/assets/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".pet-info {\n\tdisplay: inline;\n}\n\n.card-header button {\n\ttext-decoration: none;\n}\n\n.card {\n\tborder-radius: 0;\n}"

/***/ }),

/***/ "./src/app/assets/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homePage\">\n\n\t<div class=\"homePage-image\">\n\t\t<img src=\"http://i.imgur.com/9Ep8fsR.png\" style=\"width:100%\">\n\t</div>\n\t<div class=\"homePage-context px-3\">\n\t\t<p>\n\t\t\tWe hack the traffic by providing map cheats (aka shortcuts) unknown to the commercial map applications, to help drivers arrive to the destinations faster.\n\t\t</p>\n\t\t<p>\n\t\t\tOur mission is to map out all possible routes on the street to make your trip easier and more enjoyable than ever.\n\t\t</p>\n\t\t<button routerLink=\"/map\" class=\"btn btn-light\">Start Cheating on streets!</button>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/assets/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var birthday = new Date('11/18/2014');
        var birthday_cookee = new Date('07/15/2017');
        var birthday_pepe = new Date('11/17/2009');
        var ageInMs = this.calcAgeInMs(birthday);
        this.age = this.convertMsToAge(ageInMs);
        this.age_cookee = this.convertMsToAge(this.calcAgeInMs(birthday_cookee));
        this.age_pepe = this.convertMsToAge(this.calcAgeInMs(birthday_pepe));
    };
    HomeComponent.prototype.calcAgeInMs = function (birthday) {
        var today = new Date();
        return today.getTime() - birthday.getTime();
    };
    HomeComponent.prototype.convertMsToAge = function (ageInMs) {
        var y, d, h, m, s;
        s = Math.floor(ageInMs / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        y = Math.floor(d / 365);
        return { y: y, d: d, h: h, m: m, s: s };
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/assets/home/home.component.html"),
            styles: [__webpack_require__("./src/app/assets/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/assets/index/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel img {\n\twidth: 40em;\n\theight: 30em;\n}"

/***/ }),

/***/ "./src/app/assets/index/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\n  <ng-template ngbSlide>\n    <img src=\"https://01iajxoiw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/cute.jpg\" alt=\"Labmaraner\">\n    <div class=\"carousel-caption\">\n      <h3>Labmaraner</h3>\n      <p>Gatsby!</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img src=\"http://cdn3-www.dogtime.com/assets/uploads/gallery/miniature-schnauzer-dogs-and-puppies/miniature-schnauzer-dogs-puppies-2.jpg\" alt=\"Mini Schanuzer\">\n    <div class=\"carousel-caption\">\n      <h3>Mini Schnauzer</h3>\n      <p>Cookee!</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img src=\"http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/Chow-Chow.jpg\" alt=\"Chow chow\">\n    <div class=\"carousel-caption\">\n      <h3>Chow Chow</h3>\n      <p>Chinese motherfuckers!</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n"

/***/ }),

/***/ "./src/app/assets/index/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(config) {
        config.interval = 10000;
        // config.wrap = false;
        config.keyboard = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/assets/index/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/assets/index/gallery/gallery.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/assets/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ".topbar {\n\tpadding: .5em;\n}\n\n.main-block {\n\tpadding: .5em;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.client-block {\n\tpadding: .5em;\n}\n"

/***/ }),

/***/ "./src/app/assets/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-block\">\n\t<app-gallery></app-gallery>\n\n\t<div class=\"client-block\"></div>\n</div>\n\n<h2>\n\t<a [routerLink]=\"['home']\">Go To Homepage</a>\n</h2>"

/***/ }),

/***/ "./src/app/assets/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.title = 'MAP HACK';
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/assets/index/index.component.html"),
            styles: [__webpack_require__("./src/app/assets/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/assets/mapIndex/mapIndex.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\n\theight: 600px;\n}\n/* Optional: Makes the sample page fill the window. */\n.destination-wrap {\n\tbackground-color: none;\n\tdisplay: block;\n\tmax-width: 100%;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t/*justify-content: flex-end;*/\n\tmargin: 15px;\n}\n#from {\n\twidth: 300px;\n}\n#to {\n\twidth: 300px;\n}\n.form-wrap {\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\tmargin: 0 auto;\n}\n.form-control {\n\tdisplay: inline;\n}\n#pac-input {\n\twidth: 300px;\n\theight: 29px;\n\tmargin-top: 10px;\n}\n#add-cheat {\n\tmargin: 10px;\n}\n#get-direction {\n\tmargin-right: 4px;\n}\n.button:hover {\n\tbackground-color: gray;\n\tcolor: white;\n}\n.cheat {\n\tmargin-left: 15px;\n}\n.info-wrap {\n\tmargin: 0 0 15px 15px;\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmax-width: 40%;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n.path {\n\theight: 29px;\n\tmargin-right: 4px;\n\tmargin-left: 4px;\n}\n#add-cheat .feather {\n  margin-right: 8px;\n  color: #999;\n}\n.map-button {\n\tmargin: 10px;\n}"

/***/ }),

/***/ "./src/app/assets/mapIndex/mapIndex.component.html":
/***/ (function(module, exports) {

module.exports = "<div [(hidden)]=\"!showMap\">\n\t<input id=\"pac-input\" class=\"form-control\" type=\"text\"\n\t\tplaceholder=\"Search Box\">\n\n\t<form novalidate [formGroup]=\"directionForm\" (ngSubmit)=\"submitData(directionForm)\">\n\n\t\t<div class=\"destination-wrap\">\n\t\t\t<ss-multiselect-dropdown [options]=\"routeTypeData\"\n\t\t\t\t[texts]=\"routeTypeTexts\" [settings]=\"routeTypeSettings\"\n\t\t\t\t[(ngModel)]=\"routeTypeModel\" formControlName=\"routeType\">\n\t\t\t</ss-multiselect-dropdown>\n\t\t\t<div class=\"form-wrap\">\n\t\t\t\t<!--<label class=\"labels\" for=\"from\">From:</label>-->\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"from\"\n\t\t\t\t\tformControlName=\"from\" required=\"required\" placeholder=\"From\"\n\t\t\t\t\tsize=\"30\"\n\t\t\t\t\t[ngClass]=\"{'is-invalid': directionForm.controls.from.invalid && (directionForm.controls.from.dirty || directionForm.controls.from.touched),\n\t\t\t\t\t\t\t'is-valid': directionForm.controls.from.valid && (directionForm.controls.from.dirty || directionForm.controls.from.touched) }\">\n\t\t\t\t<button id=\"from-link\" class=\"btn btn-light\">\n\t\t\t\t\t<i class=\"fa fa-location-arrow fa-lg feather\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<img class=\"path\" src=\"http://i.imgur.com/NhQ6NQu.png\">\n\t\t\t<div class=\"form-wrap\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"to\" formControlName=\"to\"\n\t\t\t\t\trequired=\"required\" placeholder=\"To\" size=\"30\"\n\t\t\t\t\t[ngClass]=\"{'is-invalid': directionForm.controls.to.invalid && (directionForm.controls.to.dirty || directionForm.controls.to.touched),\n\t\t\t\t\t\t\t'is-valid': directionForm.controls.to.valid && (directionForm.controls.to.dirty || directionForm.controls.to.touched) }\">\n\t\t\t\t<button id=\"to-link\" class=\"btn btn-light\">\n\t\t\t\t\t<i class=\"fa fa-location-arrow fa-lg feather\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<div class=\"form-wrap\">\n\t\t\t\t<input id=\"get-direction\" class=\"btn btn-light\" type=\"submit\"\n\t\t\t\t\tvalue=\"Get Direction\" /> <input class=\"btn btn-light\" type=\"reset\"\n\t\t\t\t\tvalue=\"Reset\">\n\t\t\t</div>\n\t\t\t<div class=\"info-wrap\">\n\t\t\t\t<div class=\"info-data\">\n\t\t\t\t\tOriginal Travel:&nbsp;<span id=\"origTime\"></span>&nbsp;(<span\n\t\t\t\t\t\tid=\"origDist\"></span>)\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info-data\">\n\t\t\t\t\tHacked Travel:&nbsp;<span id=\"hackTime\"></span>&nbsp;(<span\n\t\t\t\t\t\tid=\"hackDist\"></span>)\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n\t<button routerLink=\"/cheatNew\" id=\"add-cheat\"\n\t\tclass=\"btn btn-light map-button\">\n\t\t<i class=\"fa fa-plus fa-lg feather\" aria-hidden=\"true\"></i>Add A Cheat\n\t</button>\n</div>\n\n<div id=\"map\"></div>"

/***/ }),

/***/ "./src/app/assets/mapIndex/mapIndex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cheat_service__ = __webpack_require__("./src/app/services/cheat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapIndexComponent = /** @class */ (function () {
    function MapIndexComponent(cheatService, router, formbuilder, ref) {
        this.cheatService = cheatService;
        this.router = router;
        this.formbuilder = formbuilder;
        this.ref = ref;
        this.map = null;
        this.cheats = [];
        this.currentUser = {};
        this.userArray = [];
        this.mark = null;
        this.closestMarker = null;
        this.index = 0;
        this.cheatMarkersArray = [];
        this.cheatLatLng = [];
        this.eol = null;
        this.polyline = null;
        this.poly2 = null;
        this.startLocation = null;
        this.endLocation = null;
        this.origTime = 0;
        this.origDist = 0;
        this.hackTime = 0;
        this.hackDist = 0;
        this.showMap = true;
        this.directionForm = formbuilder.group({
            routeType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            from: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            to: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    }
    MapIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cheatService
            .getAll()
            .subscribe(function (cheats) {
            console.log(cheats);
            _this.cheats = cheats;
            // this.currentUser = res.data.currentUser;
            // this.userArray = res.data.user_array;
            _this.initAutocomplete();
            _this.drawCheats(cheats);
        });
        this.routeTypeModel = [];
        this.routeTypeSettings = {
            checkedStyle: 'glyphicon',
            buttonClasses: 'btn btn-default btn-block',
            displayAllSelectedText: true,
            selectionLimit: 1,
            autoUnselect: true
        };
        // Text configuration
        this.routeTypeTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.routeTypeData = [
            { id: 'DRIVING', name: 'Driving' },
            { id: 'WALKING', name: 'Walking' },
            { id: 'BICYCLING', name: 'Bicycling' },
            { id: 'TRANSIT', name: 'Transit' },
        ];
        if (typeof navigator.geolocation === 'undefined') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').text('Your browser doesn\'t support the Geolocation API');
            return;
        }
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#from-link, #to-link').click(function (event) {
            event.preventDefault();
            var addressId = this.id.substring(0, this.id.indexOf('-'));
            navigator.geolocation.getCurrentPosition(function (position) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'location': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('#' + addressId).val(results[0].formatted_address);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').append('Unable to retrieve your address<br />');
                    }
                });
            }, function (positionError) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').append('Error: ' + positionError.message + '<br />');
            }, {
                enableHighAccuracy: true,
                timeout: 10 * 1000 // 10 seconds
            });
        });
    };
    MapIndexComponent.prototype.submitData = function (directionForm) {
        if (this.directionForm.controls.from.valid &&
            this.directionForm.controls.to.valid &&
            this.directionForm.controls.routeType.valid) {
            this.calculateRoute(__WEBPACK_IMPORTED_MODULE_4_jquery__('#from').val(), __WEBPACK_IMPORTED_MODULE_4_jquery__('#to').val());
        }
        else {
        }
    };
    MapIndexComponent.prototype.deleteCheat = function (cheat) {
        this.cheatService
            .deleteById(cheat.id)
            .subscribe(function (cheats) {
            console.log('Your cheat has been deleted');
        });
    };
    MapIndexComponent.prototype.drawCheatRoute = function (directionsService, from, to, selectedMode) {
        this.drawFromToCheat(directionsService, from, selectedMode);
        this.drawCheatToDestination(directionsService, to, selectedMode);
        this.drawCheatPath(this.cheats[this.index]);
    };
    MapIndexComponent.prototype.drawFromToCheat = function (directionsService, from, selectedMode) {
        var directionsRequest = {
            origin: from,
            destination: new google.maps.LatLng(this.closestMarker.position.lat(), this.closestMarker.position.lng()),
            travelMode: google.maps.TravelMode[selectedMode],
            unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                var rendererOptions = {
                    polylineOptions: { strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3, zIndex: -1 },
                    suppressMarkers: true,
                    directions: response,
                    map: this.map
                };
                var point = response.routes[0].legs[0];
                this.hackTime += point.duration.value;
                this.hackDist += point.distance.value;
                var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
                directionsDisplay.setDirections(response);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').append('Unable to retrieve your route<br />');
            }
        });
    };
    MapIndexComponent.prototype.drawCheatToDestination = function (directionsService, to, selectedMode) {
        var directionsRequest = {
            origin: new google.maps.LatLng(this.cheatLatLng[this.index].lat, this.cheatLatLng[this.index].lng),
            destination: to,
            travelMode: google.maps.TravelMode[selectedMode],
            unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                var rendererOptions = {
                    polylineOptions: { strokeColor: '#ff0000', strokeOpacity: 1.0, strokeWeight: 3, zIndex: -1 },
                    suppressMarkers: true,
                    directions: response,
                    map: this.map,
                };
                var point = response.routes[0].legs[0];
                this.hackTime += point.duration.value;
                this.hackDist += point.distance.value;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#hackTime').html(Math.round(this.hackTime / 60) + ' mins');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#hackDist').html(Math.round(this.hackDist / 100) / 10 + ' km');
                var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
                directionsDisplay.setDirections(response);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').append('Unable to retrieve your route<br />');
            }
        });
    };
    MapIndexComponent.prototype.drawCheatPath = function (cheat) {
        var path = [];
        cheat.coordinate.forEach(function (val, i) {
            path.push(new google.maps.LatLng(val.latitude, val.longitude));
        });
        var flightPath = new google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            setMap: this.map
        });
        // flightPath.setMap(this.map);
    };
    MapIndexComponent.prototype.calculateRoute = function (from, to) {
        var geocoder = new google.maps.Geocoder();
        var _this = this;
        geocoder.geocode({ 'address': from }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                // document.getElementById('mode').addEventListener('change', function() {
                //     calculateAndDisplayRoute(directionsService, directionsDisplay);
                // });
                var selectedMode = _this.routeTypeModel[0];
                _this.find_closest_marker(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                var directionsService = new google.maps.DirectionsService();
                _this.drawOriginalRoute(directionsService, from, to, selectedMode);
                // _this.drawCheatRoute(directionsService, from, to, selectedMode);
            }
            else {
                alert('Something is wrong ' + status);
            }
        });
    };
    MapIndexComponent.prototype.drawOriginalRoute = function (directionsService, from, to, selectedMode) {
        var directionsRequest = {
            origin: from,
            destination: to,
            travelMode: google.maps.TravelMode[selectedMode],
            unitSystem: google.maps.UnitSystem.METRIC
        };
        var _this = this;
        directionsService.route(directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                var rendererOptions = {
                    map: _this.map,
                    zIndex: 1
                };
                var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
                directionsDisplay.setDirections(response);
                var bounds = new google.maps.LatLngBounds();
                var route = response.routes[0];
                _this.startLocation = new Object();
                _this.endLocation = new Object();
                // For each route, display summary information.
                var path = response.routes[0].overview_path;
                var legs = response.routes[0].legs;
                _this.polyline = new google.maps.Polyline({
                    path: [],
                    strokeColor: '#FF0000',
                    // strokeWeight: 5,
                    strokeOpacity: 0,
                    // zIndex: 2,
                    setMap: _this.map
                });
                for (var i = 0; i < legs.length; i++) {
                    if (i === 0) {
                        _this.startLocation.latlng = legs[i].start_location;
                        _this.startLocation.address = legs[i].start_address;
                        // marker = google.maps.Marker({map:map,position: startLocation.latlng});
                        // const marker = _this.createMarker(legs[i].start_location, 'start', legs[i].start_address, 'green');
                    }
                    _this.endLocation.latlng = legs[i].end_location;
                    _this.endLocation.address = legs[i].end_address;
                    var steps = legs[i].steps;
                    for (var j = 0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (var k = 0; k < nextSegment.length; k++) {
                            _this.polyline.getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }
                // _this.polyline.setMap(_this.map);
                _this.map.fitBounds(bounds);
                var point = response.routes[0].legs[0];
                _this.origTime = point.duration.text;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#origTime').html(point.duration.text);
                _this.origDist = point.distance.text;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#origDist').html(point.distance.text);
                console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                //        createMarker(endLocation.latlng,'end',endLocation.address,'red');
                // map.setZoom(18);
                // _this.startAnimation();
                // new google.maps.DirectionsRenderer({
                //     map: map,
                //     directions: response
                // });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error').append('Unable to retrieve your route<br />');
            }
        });
    };
    MapIndexComponent.prototype.drawCheats = function (cheats) {
        var latLng;
        var icon;
        cheats.forEach(function (cheat, index) {
            latLng = new google.maps.LatLng(cheat.coordinate[0].latitude, cheat.coordinate[0].longitude);
            icon = {
                url: 'http://i.imgur.com/ba7xhjE.png?2',
                scaledSize: new google.maps.Size(20, 20)
            };
            var marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                icon: icon
            });
            var _this = this;
            marker.addListener('click', function () {
                // infowindow.open(this.map, marker);
                _this.clickHack(cheat.id);
            });
            this.cheatMarkersArray.push(marker);
            this.cheatLatLng.push(latLng);
        }, this);
    };
    MapIndexComponent.prototype.clickHack = function (id) {
        var navigationExtras = {
            queryParams: { id: id },
            fragment: 'anchor'
        };
        this.router.navigate(['/cheatShow'], navigationExtras);
    };
    MapIndexComponent.prototype.rad = function (x) {
        return x * Math.PI / 180;
    };
    MapIndexComponent.prototype.find_closest_marker = function (latLng) {
        var lat = latLng.lat;
        var lng = latLng.lng;
        var R = 6371; // radius of earth in km
        var distances = [];
        var closest = -1;
        for (var i = 0; i < this.cheatMarkersArray.length; i++) {
            var mlat = this.cheatMarkersArray[i].position.lat();
            var mlng = this.cheatMarkersArray[i].position.lng();
            var dLat = this.rad(mlat - lat);
            var dLong = this.rad(mlng - lng);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.rad(lat)) * Math.cos(this.rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            distances[i] = d;
            if (closest === -1 || d < distances[closest]) {
                closest = i;
            }
        }
        this.index = closest;
        this.closestMarker = this.cheatMarkersArray[closest];
    };
    MapIndexComponent.prototype.initAutocomplete = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            // center: new google.maps.LatLng(40.730610, -73.935242),
            zoom: 18,
            mapTypeId: 'roadmap'
        });
        var _this = this;
        //        google.maps.event.addListenerOnce(this.map, 'tilesloaded', function() {
        //          // do something only the first time the map is loaded
        //          _this.showMap = true;
        //          console.log('gatsby');
        //          _this.ref.detectChanges();
        //        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(initialLocation);
            });
        }
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        this.map.addListener('bounds_changed', function () {
            //      searchBox.setBounds(this.map.getBounds());
        });
        var fromInput = document.getElementById('from');
        var fromBox = new google.maps.places.SearchBox(fromInput);
        this.map.addListener('bounds_changed', function () {
            //      fromBox.setBounds(this.map.getBounds());
        });
        var toInput = document.getElementById('to');
        var toBox = new google.maps.places.SearchBox(toInput);
        this.map.addListener('bounds_changed', function () {
            //      toBox.setBounds(this.map.getBounds());
        });
        var cheatInput = document.getElementById('add-cheat');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(cheatInput);
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                // marker.setMap(_this.map);
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log('Returned place contains no geometry');
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: this.map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            }, this);
            _this.map.fitBounds(bounds);
        });
    };
    MapIndexComponent.prototype.createMarker = function (latlng, label, html) {
        var contentString = '<b>' + label + '</b><br>' + html;
        this.mark = new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: label,
        });
        return this.mark;
    };
    MapIndexComponent.prototype.startAnimation = function () {
        this.eol = this.polyline.Distance();
        this.map.setCenter(this.polyline.getPath().getAt(0));
        // poly2 = new google.maps.Polyline({path: [polyline.getPath().getAt(0)], strokeColor:'#0000FF', strokeWeight:3});
        var _this = this;
        setTimeout(function () {
            _this.animate(50);
        }, 1000); // Allow time for the initial map display
    };
    MapIndexComponent.prototype.animate = function (d) {
        var _this = this;
        if (d > this.eol) {
            this.map.panTo(this.endLocation.latlng);
            this.mark.setPosition(this.endLocation.latlng);
            return;
        }
        var p = this.polyline.GetPointAtDistance(d);
        // map.panTo(p);
        this.mark.setPosition(p);
        // updatePoly(d);
        setTimeout(function () {
            _this.animate(d + 50);
        }, 100);
    };
    MapIndexComponent.prototype.updatePoly = function (d) {
        // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
        if (this.poly2.getPath().getLength() > 20) {
            this.poly2 = new google.maps.Polyline([this.polyline.getPath().getAt(1 - 1)]);
            // map.addOverlay(poly2)
        }
        if (this.polyline.GetIndexAtDistance(d) < 1 + 2) {
            if (this.poly2.getPath().getLength() > 1) {
                this.poly2.getPath().removeAt(this.poly2.getPath().getLength() - 1);
            }
            this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.polyline.GetPointAtDistance(d));
        }
        else {
            this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.endLocation.latlng);
        }
    };
    MapIndexComponent.prototype.onChange = function () {
        console.log(this.routeTypeModel);
    };
    MapIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-mapindex',
            template: __webpack_require__("./src/app/assets/mapIndex/mapIndex.component.html"),
            styles: [__webpack_require__("./src/app/assets/mapIndex/mapIndex.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cheat_service__["a" /* CheatService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */]])
    ], MapIndexComponent);
    return MapIndexComponent;
}());



/***/ }),

/***/ "./src/app/assets/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n          box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 8px;\n  color: #999;\n}\n\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}"

/***/ }),

/***/ "./src/app/assets/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-3 d-none d-md-block bg-light sidebar\">\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"map\">\n          <i class=\"fa fa-map fa-lg feather\" aria-hidden=\"true\"></i>\n          View Map <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"cheatNew\">\n          <i class=\"fa fa-plus fa-lg feather\" aria-hidden=\"true\"></i>\n          Add A Cheat <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-street-view fa-lg feather\" aria-hidden=\"true\"></i>\n          Feed <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n    </ul>\n\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n      <span>Account</span>\n<!--       <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>\n      </a> -->\n    </h6>\n    \n    <ul class=\"nav flex-column mb-2\">\n    \t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-cogs fa-lg feather\" aria-hidden=\"true\"></i>\n          Settings\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/assets/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.navbarCollapsed = true;
        this.appName = 'Good Bark';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/assets/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/assets/sidebar/sidebar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/models/cheat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cheat; });
var Cheat = /** @class */ (function () {
    function Cheat(cheatInfo) {
        this.id = cheatInfo.id;
        this.description = cheatInfo.description;
        this.routeType = cheatInfo.routeType;
        this.coordinate = cheatInfo.coordinate;
        this.createdAt = cheatInfo.createdAt;
        this.updatedAt = cheatInfo.updatedAt;
    }
    Cheat.prototype.convertDate = function (dateJava) {
        var date = new Date();
        console.log(dateJava);
        return date;
    };
    return Cheat;
}());



/***/ }),

/***/ "./src/app/services/cheat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_cheat__ = __webpack_require__("./src/app/models/cheat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CheatService = /** @class */ (function () {
    function CheatService(http) {
        this.http = http;
    }
    // Uses the Cheat model to create a new Cheat
    CheatService.prototype.create = function (cheatInfo) {
        return new __WEBPACK_IMPORTED_MODULE_0__models_cheat__["a" /* Cheat */](cheatInfo);
    };
    CheatService.prototype.save = function (cheat) {
        return this.http
            .post('api/cheat', JSON.stringify(cheat), httpOptions).map(function (res) { return new __WEBPACK_IMPORTED_MODULE_0__models_cheat__["a" /* Cheat */](res); });
    };
    CheatService.prototype.update = function (cheat) {
        return this.http
            .put('api/cheat/' + cheat.id, JSON.stringify(cheat), httpOptions).map(function (res) { return new __WEBPACK_IMPORTED_MODULE_0__models_cheat__["a" /* Cheat */](res); });
    };
    CheatService.prototype.getById = function (id) {
        return this.http.get('api/cheat/' + id).map(function (res) { return new __WEBPACK_IMPORTED_MODULE_0__models_cheat__["a" /* Cheat */](res); });
    };
    CheatService.prototype.getAll = function () {
        return this.http.get('api/cheat');
    };
    CheatService.prototype.deleteById = function (id) {
        return this.http.delete('api/cheat/' + id);
    };
    CheatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CheatService);
    return CheatService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map