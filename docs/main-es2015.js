(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_analyze_card_analyze_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/analyze-card/analyze-card.component */ "./src/app/components/analyze-card/analyze-card.component.ts");
/* harmony import */ var _components_analyze_input_analyze_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analyze-input/analyze-input.component */ "./src/app/components/analyze-input/analyze-input.component.ts");
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/how-it-works/how-it-works.component */ "./src/app/components/how-it-works/how-it-works.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");







class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "main"], [1, "banner-body"], [1, "analyze-section"], [1, "how-it-works-section"], [1, "footer-section"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-analyze-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-analyze-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-how-it-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _components_analyze_card_analyze_card_component__WEBPACK_IMPORTED_MODULE_2__["AnalyzeCardComponent"], _components_analyze_input_analyze_input_component__WEBPACK_IMPORTED_MODULE_3__["AnalyzeInputComponent"], _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__["HowItWorksComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".main[_ngcontent-%COMP%]   .banner-body[_ngcontent-%COMP%] {\n  background: #2a0694;\n  background: linear-gradient(90deg, #2a0694 5%, #0461f1 96%);\n}\n.main[_ngcontent-%COMP%]   .analyze-section[_ngcontent-%COMP%] {\n  background-color: #eef1f6;\n}\n.main[_ngcontent-%COMP%]   .how-it-works-section[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n.main[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 1.5rem 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFwcGxpY2F0aW9uc1xcdmliZW9zeXMtYXNzaWdubWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLDJEQUFBO0FDQUo7QURHRTtFQUNJLHlCQUFBO0FDRE47QURJRTtFQUNFLGlCQUFBO0FDRko7QURLRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0Usb0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAuYmFubmVyLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQyLCA2LCAxNDgpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQyLCA2LCAxNDgsIDEpIDUlLCByZ2JhKDQsIDk3LCAyNDEsIDEpIDk2JSk7XHJcbiAgfVxyXG5cclxuICAuYW5hbHl6ZS1zZWN0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcclxuICB9XHJcblxyXG4gIC5ob3ctaXQtd29ya3Mtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgJj4qIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xyXG4gIH1cclxufVxyXG4iLCIubWFpbiAuYmFubmVyLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMmEwNjk0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyYTA2OTQgNSUsICMwNDYxZjEgOTYlKTtcbn1cbi5tYWluIC5hbmFseXplLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xufVxuLm1haW4gLmhvdy1pdC13b3Jrcy1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG59XG4ubWFpbiAuZm9vdGVyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwO1xufVxuLm1haW4gPiAqIHtcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/how-it-works/how-it-works.component */ "./src/app/components/how-it-works/how-it-works.component.ts");
/* harmony import */ var _components_analyze_card_analyze_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/analyze-card/analyze-card.component */ "./src/app/components/analyze-card/analyze-card.component.ts");
/* harmony import */ var _components_analyze_input_analyze_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/analyze-input/analyze-input.component */ "./src/app/components/analyze-input/analyze-input.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_6__["HowItWorksComponent"],
        _components_analyze_card_analyze_card_component__WEBPACK_IMPORTED_MODULE_7__["AnalyzeCardComponent"],
        _components_analyze_input_analyze_input_component__WEBPACK_IMPORTED_MODULE_8__["AnalyzeInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_6__["HowItWorksComponent"],
                    _components_analyze_card_analyze_card_component__WEBPACK_IMPORTED_MODULE_7__["AnalyzeCardComponent"],
                    _components_analyze_input_analyze_input_component__WEBPACK_IMPORTED_MODULE_8__["AnalyzeInputComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/analyze-card/analyze-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/analyze-card/analyze-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnalyzeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeCardComponent", function() { return AnalyzeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnalyzeCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalyzeCardComponent.ɵfac = function AnalyzeCardComponent_Factory(t) { return new (t || AnalyzeCardComponent)(); };
AnalyzeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyzeCardComponent, selectors: [["app-analyze-card"]], decls: 29, vars: 0, consts: [[1, "analyze-card-container"], [1, "analyze-sections"], [1, "section"], [1, "section-logo"], [1, "section-header"], [1, "section-content"], [1, "analyze-card-footer"], [1, "analyze-card-footer-head"], [1, "analyze-card-footer-content"], ["href", "#"]], template: function AnalyzeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cross device experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Don't worry about multiple resolutions or mobile devices, Pilo automatically loads the best image for each device. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Automatice Responsive Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We learn from your html and deliver pixel perfect images, they don't only load faster but they'll look better. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CDN Deliver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " With worldwide reach, our CDN provides low latency and faster download times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Super easy to integrate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Copy and paste one code in the html and you're done! You don't need to change anything on your backend or how you store your images. Read our docs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".analyze-card-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #fff;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0px 0px 1px 1px #ddd;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-sections[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3rem;\n  gap: 0.5rem;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  background: orange;\n  border-radius: 50%;\n  margin-bottom: 15px;\n  background: #ffa60f;\n  background: linear-gradient(0deg, #ffa60f 0%, #fb5425 100%);\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n}\n.analyze-card-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-card-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 2rem;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-card-footer[_ngcontent-%COMP%]   span.analyze-card-footer-head[_ngcontent-%COMP%] {\n  color: #2c489c;\n  font-weight: 700;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-card-footer[_ngcontent-%COMP%]   span.analyze-card-footer-content[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.analyze-card-container[_ngcontent-%COMP%]   .analyze-card-footer[_ngcontent-%COMP%]   span.analyze-card-footer-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFseXplLWNhcmQvRDpcXEFwcGxpY2F0aW9uc1xcdmliZW9zeXMtYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYW5hbHl6ZS1jYXJkXFxhbmFseXplLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHl6ZS1jYXJkL2FuYWx5emUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURFTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtBQ0FSO0FER007RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDRFI7QURJTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDRlI7QURPRTtFQUNFLG1CQUFBO0FDTEo7QURRRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNOSjtBRFFJO0VBQ0UsV0FBQTtBQ05OO0FEUU07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNQUjtBRFNRO0VBQ0UscUJBQUE7QUNQViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHl6ZS1jYXJkL2FuYWx5emUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmFseXplLWNhcmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNkZGQ7XHJcblxyXG4gIC5hbmFseXplLXNlY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAuc2VjdGlvbi1sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE2NiwgMTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMTY2LCAxNSwgMSkgMCUsIHJnYmEoMjUxLCA4NCwgMzcsIDEpIDEwMCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmFuYWx5emUtY2FyZC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICYuYW5hbHl6ZS1jYXJkLWZvb3Rlci1oZWFkIHtcclxuICAgICAgICBjb2xvcjogIzJjNDg5YztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFuYWx5emUtY2FyZC1mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFuYWx5emUtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAjZGRkO1xufVxuLmFuYWx5emUtY2FyZC1jb250YWluZXIgLmFuYWx5emUtc2VjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5hbmFseXplLWNhcmQtY29udGFpbmVyIC5hbmFseXplLXNlY3Rpb25zIC5zZWN0aW9uIC5zZWN0aW9uLWxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmYTYwZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmE2MGYgMCUsICNmYjU0MjUgMTAwJSk7XG59XG4uYW5hbHl6ZS1jYXJkLWNvbnRhaW5lciAuYW5hbHl6ZS1zZWN0aW9ucyAuc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFuYWx5emUtY2FyZC1jb250YWluZXIgLmFuYWx5emUtc2VjdGlvbnMgLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYW5hbHl6ZS1jYXJkLWNvbnRhaW5lciBociB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYW5hbHl6ZS1jYXJkLWNvbnRhaW5lciAuYW5hbHl6ZS1jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBnYXA6IDJyZW07XG59XG4uYW5hbHl6ZS1jYXJkLWNvbnRhaW5lciAuYW5hbHl6ZS1jYXJkLWZvb3RlciBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYW5hbHl6ZS1jYXJkLWNvbnRhaW5lciAuYW5hbHl6ZS1jYXJkLWZvb3RlciBzcGFuLmFuYWx5emUtY2FyZC1mb290ZXItaGVhZCB7XG4gIGNvbG9yOiAjMmM0ODljO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFuYWx5emUtY2FyZC1jb250YWluZXIgLmFuYWx5emUtY2FyZC1mb290ZXIgc3Bhbi5hbmFseXplLWNhcmQtZm9vdGVyLWNvbnRlbnQge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFuYWx5emUtY2FyZC1jb250YWluZXIgLmFuYWx5emUtY2FyZC1mb290ZXIgc3Bhbi5hbmFseXplLWNhcmQtZm9vdGVyLWNvbnRlbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyzeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analyze-card',
                templateUrl: './analyze-card.component.html',
                styleUrls: ['./analyze-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/analyze-input/analyze-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/analyze-input/analyze-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnalyzeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeInputComponent", function() { return AnalyzeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnalyzeInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalyzeInputComponent.ɵfac = function AnalyzeInputComponent_Factory(t) { return new (t || AnalyzeInputComponent)(); };
AnalyzeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyzeInputComponent, selectors: [["app-analyze-input"]], decls: 15, vars: 0, consts: [[1, "analyze-input-container"], [1, "analyze-image"], [1, "analyze-input-content"], [1, "analyze-input-content-header"], [1, "analyze-input-content-text"], [1, "analyze-input"], [1, "input-header"], [1, "analyze-input-box"], [1, "input-box"], ["type", "text", "placeholder", "http://yoursite.com"]], template: function AnalyzeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Improve your conversions and metrics using Pilo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Piio automatically understands the context of your users and provide the best possible experience for them. Forget about resizing or optimizing images for mobile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Analyze your Website Images for Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Analyze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".analyze-input-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60% auto;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-image[_ngcontent-%COMP%] {\n  background-image: url('analyze.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 450px;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input-content-header[_ngcontent-%COMP%] {\n  color: #1748d3;\n  margin-bottom: 2rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input-content-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 2rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input[_ngcontent-%COMP%]   .input-header[_ngcontent-%COMP%] {\n  color: #1a2031;\n  margin-bottom: 1rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input[_ngcontent-%COMP%]   .analyze-input-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input[_ngcontent-%COMP%]   .analyze-input-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 1rem 0 0 1rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input[_ngcontent-%COMP%]   .analyze-input-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: calc(100% - 1.4rem);\n  border: none;\n  font-size: 18px;\n  padding: 0.35rem;\n  border-radius: 1rem 0 0 1rem;\n}\n.analyze-input-container[_ngcontent-%COMP%]   .analyze-input-content[_ngcontent-%COMP%]   .analyze-input[_ngcontent-%COMP%]   .analyze-input-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #006bff;\n  color: #fff;\n  border: none;\n  border-radius: 1rem;\n  padding: 0 1.5rem;\n  margin-left: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFseXplLWlucHV0L0Q6XFxBcHBsaWNhdGlvbnNcXHZpYmVvc3lzLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFuYWx5emUtaW5wdXRcXGFuYWx5emUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHl6ZS1pbnB1dC9hbmFseXplLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FDQ0Y7QURDRTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURFSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0FOO0FER0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRE47QURLTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0hSO0FETU07RUFDRSxhQUFBO0FDSlI7QURNUTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNKVjtBRE1VO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNKWjtBRFFRO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05WIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbmFseXplLWlucHV0L2FuYWx5emUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbHl6ZS1pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgYXV0bztcclxuXHJcbiAgLmFuYWx5emUtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hbmFseXplLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFuYWx5emUtaW5wdXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgIC5hbmFseXplLWlucHV0LWNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgY29sb3I6ICMxNzQ4ZDM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFuYWx5emUtaW5wdXQtY29udGVudC10ZXh0IHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYW5hbHl6ZS1pbnB1dCB7XHJcbiAgICAgIC5pbnB1dC1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMWEyMDMxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbmFseXplLWlucHV0LWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmlucHV0LWJveCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDAgMXJlbTtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjRyZW0pO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjM1cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtIDAgMCAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZiZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFuYWx5emUtaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgYXV0bztcbn1cbi5hbmFseXplLWlucHV0LWNvbnRhaW5lciAuYW5hbHl6ZS1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW5hbHl6ZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuLmFuYWx5emUtaW5wdXQtY29udGFpbmVyIC5hbmFseXplLWlucHV0LWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmFuYWx5emUtaW5wdXQtY29udGFpbmVyIC5hbmFseXplLWlucHV0LWNvbnRlbnQgLmFuYWx5emUtaW5wdXQtY29udGVudC1oZWFkZXIge1xuICBjb2xvcjogIzE3NDhkMztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5hbmFseXplLWlucHV0LWNvbnRhaW5lciAuYW5hbHl6ZS1pbnB1dC1jb250ZW50IC5hbmFseXplLWlucHV0LWNvbnRlbnQtdGV4dCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYW5hbHl6ZS1pbnB1dC1jb250YWluZXIgLmFuYWx5emUtaW5wdXQtY29udGVudCAuYW5hbHl6ZS1pbnB1dCAuaW5wdXQtaGVhZGVyIHtcbiAgY29sb3I6ICMxYTIwMzE7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYW5hbHl6ZS1pbnB1dC1jb250YWluZXIgLmFuYWx5emUtaW5wdXQtY29udGVudCAuYW5hbHl6ZS1pbnB1dCAuYW5hbHl6ZS1pbnB1dC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFuYWx5emUtaW5wdXQtY29udGFpbmVyIC5hbmFseXplLWlucHV0LWNvbnRlbnQgLmFuYWx5emUtaW5wdXQgLmFuYWx5emUtaW5wdXQtYm94IC5pbnB1dC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDAgMCAxcmVtO1xufVxuLmFuYWx5emUtaW5wdXQtY29udGFpbmVyIC5hbmFseXplLWlucHV0LWNvbnRlbnQgLmFuYWx5emUtaW5wdXQgLmFuYWx5emUtaW5wdXQtYm94IC5pbnB1dC1ib3ggaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMS40cmVtKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDAuMzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMCAwIDFyZW07XG59XG4uYW5hbHl6ZS1pbnB1dC1jb250YWluZXIgLmFuYWx5emUtaW5wdXQtY29udGVudCAuYW5hbHl6ZS1pbnB1dCAuYW5hbHl6ZS1pbnB1dC1ib3ggYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmJmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyzeInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analyze-input',
                templateUrl: './analyze-input.component.html',
                styleUrls: ['./analyze-input.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "border-input": a0 }; };
function BannerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, btn_r1.border));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, btn_r1.label), " ");
} }
class BannerComponent {
    constructor() {
        this.navBtns = [
            {
                type: 'img-speed-test',
                label: 'Image Speed Test'
            },
            {
                type: 'docs',
                label: 'Docs'
            },
            {
                type: 'pricing',
                label: 'Pricing'
            },
            {
                type: 'try-pilo-free',
                label: 'Try Pili Free'
            },
            {
                type: 'login',
                label: 'Login',
                border: true
            },
        ];
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 14, vars: 1, consts: [[1, "banner-container"], [1, "header-container"], [1, "logo"], [1, "nav-bar-container"], ["class", "nav-btn", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "banner-content"], [1, "banner-content-header"], [1, "banner-content-text"], [1, "try-pilo-btn"], [1, "nav-btn", 3, "ngClass"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BannerComponent_button_4_Template, 3, 6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Create The Fastest Mobile Experience For Your Website Images ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We help your website load faster by optimizing your images in real time and delive them to your visitors at maximum speed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Image optimization results in, better image quality, faster load times and more conversions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Try Pilo Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navBtns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n.banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background-image: url('logo.png');\n  background-size: contain;\n  height: 50px;\n  width: 100px;\n  background-repeat: no-repeat;\n}\n.banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .nav-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .nav-bar-container[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border: none;\n  padding: 0.3rem 1rem;\n}\n.banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .nav-bar-container[_ngcontent-%COMP%]   .nav-btn.border-input[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 1rem;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  color: #fff;\n  max-width: 50%;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-content-header[_ngcontent-%COMP%], .banner-container[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-content-text[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-content-text[_ngcontent-%COMP%] {\n  word-spacing: 0.15rem;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .try-pilo-btn[_ngcontent-%COMP%] {\n  background-color: #006cff;\n  color: #fff;\n  border: none;\n  border-radius: 2rem;\n  padding: 0.5rem 3rem;\n  font-size: 18px;\n  margin-bottom: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvRDpcXEFwcGxpY2F0aW9uc1xcdmliZW9zeXMtYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDRFI7QURHUTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNEVjtBRFNFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNQSjtBRFNJOztFQUVFLG1CQUFBO0FDUE47QURVSTtFQUNJLHFCQUFBO0FDUlI7QURXSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWNvbnRhaW5lciB7XHJcbiAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1iYXItY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAwLjI1cmVtO1xyXG5cclxuICAgICAgLm5hdi1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxuXHJcbiAgICAgICAgJi5ib3JkZXItaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1iYXItY29udGFpbmVyIHt9XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuYmFubmVyLWNvbnRlbnQtaGVhZGVyLFxyXG4gICAgLmJhbm5lci1jb250ZW50LXRleHQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItY29udGVudC10ZXh0IHtcclxuICAgICAgICB3b3JkLXNwYWNpbmc6IDAuMTVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRyeS1waWxvLWJ0biB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZjZmY7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5iYW5uZXItY29udGFpbmVyIC5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmJhbm5lci1jb250YWluZXIgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5oZWFkZXItY29udGFpbmVyIC5uYXYtYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5oZWFkZXItY29udGFpbmVyIC5uYXYtYmFyLWNvbnRhaW5lciAubmF2LWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5oZWFkZXItY29udGFpbmVyIC5uYXYtYmFyLWNvbnRhaW5lciAubmF2LWJ0bi5ib3JkZXItaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1jb250ZW50IC5iYW5uZXItY29udGVudC1oZWFkZXIsXG4uYmFubmVyLWNvbnRhaW5lciAuYmFubmVyLWNvbnRlbnQgLmJhbm5lci1jb250ZW50LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1jb250ZW50IC5iYW5uZXItY29udGVudC10ZXh0IHtcbiAgd29yZC1zcGFjaW5nOiAwLjE1cmVtO1xufVxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1jb250ZW50IC50cnktcGlsby1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2Y2ZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FooterComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, btn_r1), " ");
} }
class FooterComponent {
    constructor() {
        this.footerBtns = [
            'Try pilo free',
            'Pricing',
            'image speed test',
            'docs',
            'faq',
            'contact'
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 1, consts: [[1, "footer-container"], [1, "footer-sign-up"], [1, "footer-sign-up-content"], [1, "footer-icon"], [1, "footer-content"], [1, "content-head"], [1, "content-sub-head"], [1, "footer-sign-up-btn-box"], [1, "footer-base"], [1, "left-section"], [1, "icon"], [1, "right-section"], [4, "ngFor", "ngForOf"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Never Optimize An Image Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Image Optimization made simple, only one line of code to integrate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign Up Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A9 2018 Pilo, Inc. - All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FooterComponent_button_17_Template, 3, 3, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerBtns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".footer-container[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%] {\n  background-color: #282f41;\n  padding: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-content[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%] {\n  background-image: url('logo-2.PNG');\n  height: 100px;\n  width: 100px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 150%;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-content[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-content[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .content-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-content[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .content-sub-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-sign-up[_ngcontent-%COMP%]   .footer-sign-up-btn-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border: 1px solid #fff;\n  border-radius: 1rem;\n  padding: 0.35rem 1rem;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-base[_ngcontent-%COMP%] {\n  background-color: #1538c8;\n  padding: 1rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-base[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-base[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-image: url('logo-2.png');\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-size: 200%;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-right: 0.5rem;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-base[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%] {\n  display: flex;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-base[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: white;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXEFwcGxpY2F0aW9uc1xcdmliZW9zeXMtYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNDUjtBREVNO0VBQ0UsbUJBQUE7QUNBUjtBREVRO0VBQ0UscUJBQUE7QUNBVjtBREdRO0VBQ0UsZUFBQTtBQ0RWO0FET007RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNMUjtBRFVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDUko7QURVSTtFQUNFLGVBQUE7QUNSTjtBRFVNO0VBQ0UsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNSUjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEWU07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb250YWluZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAuZm9vdGVyLXNpZ24tdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmY0MTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZm9vdGVyLXNpZ24tdXAtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuZm9vdGVyLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby0yLlBORyk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcblxyXG4gICAgICAgIC5jb250ZW50LWhlYWQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQtc3ViLWhlYWQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItc2lnbi11cC1idG4tYm94IHtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC4zNXJlbSAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWJhc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MzhjODtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLTIucG5nKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1zaWduLXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmY0MTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1zaWduLXVwIC5mb290ZXItc2lnbi11cC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItc2lnbi11cCAuZm9vdGVyLXNpZ24tdXAtY29udGVudCAuZm9vdGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tMi5QTkcpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1zaWduLXVwIC5mb290ZXItc2lnbi11cC1jb250ZW50IC5mb290ZXItY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLXNpZ24tdXAgLmZvb3Rlci1zaWduLXVwLWNvbnRlbnQgLmZvb3Rlci1jb250ZW50IC5jb250ZW50LWhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLXNpZ24tdXAgLmZvb3Rlci1zaWduLXVwLWNvbnRlbnQgLmZvb3Rlci1jb250ZW50IC5jb250ZW50LXN1Yi1oZWFkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1zaWduLXVwIC5mb290ZXItc2lnbi11cC1idG4tYm94IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC4zNXJlbSAxcmVtO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1iYXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MzhjODtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWJhc2UgLmxlZnQtc2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItYmFzZSAubGVmdC1zZWN0aW9uIC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLTIucG5nKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWJhc2UgLnJpZ2h0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1iYXNlIC5yaWdodC1zZWN0aW9uIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.ts ***!
  \*******************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HowItWorksComponent {
    constructor() { }
    ngOnInit() {
    }
}
HowItWorksComponent.ɵfac = function HowItWorksComponent_Factory(t) { return new (t || HowItWorksComponent)(); };
HowItWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowItWorksComponent, selectors: [["app-how-it-works"]], decls: 28, vars: 0, consts: [[1, "how-it-works-container"], [1, "hiw-content"], [1, "hiw-content-header"], [1, "hiw-content-sub-header"], [1, "hiw-list-content"], [1, "hiw-list"], [1, "hiw-list-item"], [1, "hiw-tech-stack"], [1, "hiw-tech-stack-icon", "angular"], [1, "hiw-tech-stack-icon", "vue"], [1, "hiw-tech-stack-icon", "react"], [1, "hiw-sign-up-button"], [1, "hiw-image"]], template: function HowItWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Did we mention it's super easy to integrate? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register and get the code for your website or app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Copy our code into your HTML.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Replace in your project. all the image tags your using to use data-pila.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pilo works great for Single Page Applications but Integrates with any technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign Up Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.how-it-works-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 60%;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-content-header[_ngcontent-%COMP%] {\n  color: #1748d3;\n  margin-bottom: 3rem;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-content-sub-header[_ngcontent-%COMP%] {\n  color: #1a2031;\n  margin-bottom: 3rem;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-list-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-list-content[_ngcontent-%COMP%]   .hiw-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-list-content[_ngcontent-%COMP%]   .hiw-list[_ngcontent-%COMP%]   .hiw-list-item[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 0.75rem;\n  display: flex;\n  gap: 10px;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-list-content[_ngcontent-%COMP%]   .hiw-list[_ngcontent-%COMP%]   .hiw-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 40px);\n  vertical-align: top;\n  margin-left: 5px;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-list-content[_ngcontent-%COMP%]   .hiw-list[_ngcontent-%COMP%]   .hiw-list-item[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n  color: #fff;\n  display: inline-block;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  background: orange;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-sign-up-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-content[_ngcontent-%COMP%]   .hiw-sign-up-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 2px solid #aaa;\n  padding: 0.25rem 2rem;\n  background: transparent;\n  border-radius: 1rem;\n  color: #666;\n}\n.how-it-works-container[_ngcontent-%COMP%]   .hiw-image[_ngcontent-%COMP%] {\n  background-image: url('hiw.png');\n  background-repeat: no-repeat;\n  height: 400px;\n  background-size: contain;\n  background-position: center;\n  background-position-y: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvdy1pdC13b3Jrcy9EOlxcQXBwbGljYXRpb25zXFx2aWJlb3N5cy1hc3NpZ25tZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxob3ctaXQtd29ya3NcXGhvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QURFRjtBQ0NJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FEQ047QUNFSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBREFOO0FDR0k7RUFDRSxtQkFBQTtBREROO0FDR007RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUREUjtBQ0dRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FERFY7QUNHVTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FERFo7QUNJVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREZaO0FDUUk7RUFDRSxrQkFBQTtBRE5OO0FDUU07RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUROUjtBQ1dFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QURUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5ob3ctaXQtd29ya3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYwJTtcbn1cbi5ob3ctaXQtd29ya3MtY29udGFpbmVyIC5oaXctY29udGVudCAuaGl3LWNvbnRlbnQtaGVhZGVyIHtcbiAgY29sb3I6ICMxNzQ4ZDM7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uaG93LWl0LXdvcmtzLWNvbnRhaW5lciAuaGl3LWNvbnRlbnQgLmhpdy1jb250ZW50LXN1Yi1oZWFkZXIge1xuICBjb2xvcjogIzFhMjAzMTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5ob3ctaXQtd29ya3MtY29udGFpbmVyIC5oaXctY29udGVudCAuaGl3LWxpc3QtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uaG93LWl0LXdvcmtzLWNvbnRhaW5lciAuaGl3LWNvbnRlbnQgLmhpdy1saXN0LWNvbnRlbnQgLmhpdy1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmhvdy1pdC13b3Jrcy1jb250YWluZXIgLmhpdy1jb250ZW50IC5oaXctbGlzdC1jb250ZW50IC5oaXctbGlzdCAuaGl3LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbi5ob3ctaXQtd29ya3MtY29udGFpbmVyIC5oaXctY29udGVudCAuaGl3LWxpc3QtY29udGVudCAuaGl3LWxpc3QgLmhpdy1saXN0LWl0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmhvdy1pdC13b3Jrcy1jb250YWluZXIgLmhpdy1jb250ZW50IC5oaXctbGlzdC1jb250ZW50IC5oaXctbGlzdCAuaGl3LWxpc3QtaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbn1cbi5ob3ctaXQtd29ya3MtY29udGFpbmVyIC5oaXctY29udGVudCAuaGl3LXNpZ24tdXAtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvdy1pdC13b3Jrcy1jb250YWluZXIgLmhpdy1jb250ZW50IC5oaXctc2lnbi11cC1idXR0b24gYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2FhYTtcbiAgcGFkZGluZzogMC4yNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4uaG93LWl0LXdvcmtzLWNvbnRhaW5lciAuaGl3LWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oaXcucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMwcHg7XG59IiwiLmhvdy1pdC13b3Jrcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYwJTtcclxuXHJcbiAgLmhpdy1jb250ZW50IHtcclxuICAgIC5oaXctY29udGVudC1oZWFkZXIge1xyXG4gICAgICBjb2xvcjogIzE3NDhkMztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGl3LWNvbnRlbnQtc3ViLWhlYWRlciB7XHJcbiAgICAgIGNvbG9yOiAjMWEyMDMxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5oaXctbGlzdC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIC5oaXctbGlzdCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIC5oaXctbGlzdC1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI3MTMnO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaXctc2lnbi11cC1idXR0b24ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbSAycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oaXctaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oaXcucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMzBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-how-it-works',
                templateUrl: './how-it-works.component.html',
                styleUrls: ['./how-it-works.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Applications\vibeosys-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map