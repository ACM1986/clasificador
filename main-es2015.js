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
/* harmony import */ var _views_concepts_basis_rights_concepts_basis_rights_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/concepts-basis-rights/concepts-basis-rights.component */ "./src/app/views/concepts-basis-rights/concepts-basis-rights.component.ts");
/* harmony import */ var _views_glosary_glosary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/glosary/glosary.component */ "./src/app/views/glosary/glosary.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_register_program_register_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/register-program/register-program.component */ "./src/app/views/register-program/register-program.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_validations_validations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/validations/validations.component */ "./src/app/views/validations/validations.component.ts");
/* harmony import */ var _views_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin-dashboard/admin-dashboard.component */ "./src/app/views/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _views_user_acuse_user_acuse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user-acuse/user-acuse.component */ "./src/app/views/user-acuse/user-acuse.component.ts");











const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register-program', component: _views_register_program_register_program_component__WEBPACK_IMPORTED_MODULE_4__["RegisterProgramComponent"] },
    { path: 'validations', component: _views_validations_validations_component__WEBPACK_IMPORTED_MODULE_6__["ValidationsComponent"] },
    { path: 'admin-dashboard', component: _views_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdminDashboardComponent"] },
    { path: 'glosary', component: _views_glosary_glosary_component__WEBPACK_IMPORTED_MODULE_1__["GlosaryComponent"] },
    { path: 'concepts-basis-rights', component: _views_concepts_basis_rights_concepts_basis_rights_component__WEBPACK_IMPORTED_MODULE_0__["ConceptsBasisRightsComponent"] },
    { path: 'user-acuse', component: _views_user_acuse_user_acuse_component__WEBPACK_IMPORTED_MODULE_8__["UserAcuseComponent"] },
    //Redireccionamiento en caso de que no exista la ruta
    {
        path: '**',
        redirectTo: 'login'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".full-centered[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: center;\r\n}\r\n\r\n.full-left[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: left;\r\n}\r\n\r\n.full-right[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.no-margin[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n.margin-hori-10-5[_ngcontent-%COMP%] {\r\n  margin: 10px 5px;\r\n}\r\n\r\n.ma-l-70[_ngcontent-%COMP%] {\r\n  margin-left: 70px;\r\n}\r\n\r\n.bg-header-images[_ngcontent-%COMP%] {\r\n  background-color: #a8a8a8 !important;\r\n}\r\n\r\n.font-normal[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n\r\n.no-padding[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n\r\n.pd-10-l[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n}\r\n\r\n.pd-10-r[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.pd-10-t-b[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n}\r\n\r\n.shadow-box[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  padding: 5px 10px;\r\n  box-shadow: inset 0px 0px 9.5px -1.5px #00000069;\r\n  border-radius: 15px;\r\n  background-color: snow;\r\n  color: #3e5569;\r\n  cursor: move;\r\n}\r\n\r\n.position-selector[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  cursor: move;\r\n}\r\n\r\n.position-selector[_ngcontent-%COMP%]:hover {\r\n  background-color: #48226b;\r\n  color: white;\r\n}\r\n\r\n.genre-label[_ngcontent-%COMP%] {\r\n  padding: 2px 10px;\r\n  margin: 5px 0px;\r\n  border-radius: 15px;\r\n  color: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdEQUFnRDtFQUNoRCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1jZW50ZXJlZCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZ1bGwtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mdWxsLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWhvcmktMTAtNSB7XHJcbiAgbWFyZ2luOiAxMHB4IDVweDtcclxufVxyXG5cclxuLm1hLWwtNzAge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcblxyXG4uYmctaGVhZGVyLWltYWdlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC1ub3JtYWwge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucGQtMTAtbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucGQtMTAtciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBkLTEwLXQtYiB7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5zaGFkb3ctYm94IHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDkuNXB4IC0xLjVweCAjMDAwMDAwNjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xyXG4gIGNvbG9yOiAjM2U1NTY5O1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnBvc2l0aW9uLXNlbGVjdG9yIHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4ucG9zaXRpb24tc2VsZWN0b3I6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODIyNmI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2VucmUtbGFiZWwge1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _views_register_program_register_program_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/register-program/register-program.component */ "./src/app/views/register-program/register-program.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_validations_validations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/validations/validations.component */ "./src/app/views/validations/validations.component.ts");
/* harmony import */ var _views_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/admin-dashboard/admin-dashboard.component */ "./src/app/views/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _views_glosary_glosary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/glosary/glosary.component */ "./src/app/views/glosary/glosary.component.ts");
/* harmony import */ var _views_concepts_basis_rights_concepts_basis_rights_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/concepts-basis-rights/concepts-basis-rights.component */ "./src/app/views/concepts-basis-rights/concepts-basis-rights.component.ts");
/* harmony import */ var _views_user_acuse_user_acuse_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/user-acuse/user-acuse.component */ "./src/app/views/user-acuse/user-acuse.component.ts");




//Habilitando Biding


//Importación de Bootstrap

//Importación de las vistas/componentes








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_register_program_register_program_component__WEBPACK_IMPORTED_MODULE_7__["RegisterProgramComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _views_validations_validations_component__WEBPACK_IMPORTED_MODULE_9__["ValidationsComponent"],
        _views_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"],
        _views_glosary_glosary_component__WEBPACK_IMPORTED_MODULE_11__["GlosaryComponent"],
        _views_concepts_basis_rights_concepts_basis_rights_component__WEBPACK_IMPORTED_MODULE_12__["ConceptsBasisRightsComponent"],
        _views_user_acuse_user_acuse_component__WEBPACK_IMPORTED_MODULE_13__["UserAcuseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _views_register_program_register_program_component__WEBPACK_IMPORTED_MODULE_7__["RegisterProgramComponent"],
                    _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _views_validations_validations_component__WEBPACK_IMPORTED_MODULE_9__["ValidationsComponent"],
                    _views_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"],
                    _views_glosary_glosary_component__WEBPACK_IMPORTED_MODULE_11__["GlosaryComponent"],
                    _views_concepts_basis_rights_concepts_basis_rights_component__WEBPACK_IMPORTED_MODULE_12__["ConceptsBasisRightsComponent"],
                    _views_user_acuse_user_acuse_component__WEBPACK_IMPORTED_MODULE_13__["UserAcuseComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/classes/respuestas.class.ts":
/*!*********************************************!*\
  !*** ./src/app/classes/respuestas.class.ts ***!
  \*********************************************/
/*! exports provided: Respuestas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Respuestas", function() { return Respuestas; });
class Respuestas {
    constructor() {
        this.validaciones = {
            id: 0,
            idrespuesta: 0,
            validacion1: false,
            validacion1a: false,
            validacion1justificacion: "",
            validacion2: false,
            validacion2a: false,
            validacion2justificacion: "",
            validacion3: false,
            validacion3a: false,
            validacion3justificacion: "",
            validacion4: false,
            validacion4a: false,
            validacion4justificacion: "",
            validacion5: false,
            validacion5a: false,
            validacion5justificacion: "",
            validacion6: false,
            validacion6a: false,
            validacion6justificacion: "",
            validacion6comentarios: "",
            validacion7: false,
            validacion7a: false,
            validacion7justificacion: "",
            validacion7comentarios: ""
        };
        this.validacionesManuales = {
            id: 0,
            idrespuesta: 0,
            validacion1: false,
            validacion1a: false,
            validacion1justificacion: "",
            validacion2: false,
            validacion2a: false,
            validacion2justificacion: "",
            validacion3: false,
            validacion3a: false,
            validacion3justificacion: "",
            validacion4: false,
            validacion4a: false,
            validacion4justificacion: "",
            validacion5: false,
            validacion5a: false,
            validacion5justificacion: "",
            validacion6: false,
            validacion6a: false,
            validacion6justificacion: "",
            validacion6comentarios: "",
            validacion7: false,
            validacion7a: false,
            validacion7justificacion: "",
            validacion7comentarios: ""
        };
        this.idrespuestas = 0;
        this.dependencia = "";
        this.programa = "";
        this.usuario = "";
        this.usuarioEmail = "";
        this.titular = "";
        this.estatus = false;
        this.respuestasp1 = [];
        this.respuestasp2 = [];
        this.respuestas = {
            pregunta1complemento: "",
            pregunta2: "no",
            pregunta3: "no",
            pregunta3complemento: "",
            pregunta4: "entregaayudas",
            pregunta4complemento: "",
            pregunta5: "no",
            pregunta5otro: "",
            pregunta5complemento: "",
            pregunta6: "directamente",
            pregunta7: "unico",
            pregunta8: "no",
            pregunta8complemento: "",
            pregunta9: "federal",
            pregunta10: "educacionobligatoria",
            pregunta10complemento: "",
            pregunta11: "no",
            pregunta11complemento: "",
            pregunta12: "no",
            pregunta12complemento: "",
            aclaraciones: ""
        };
        this.validaciones = {
            id: 0,
            idrespuesta: 0,
            validacion1: false,
            validacion1a: false,
            validacion1justificacion: "",
            validacion2: false,
            validacion2a: false,
            validacion2justificacion: "",
            validacion3: false,
            validacion3a: false,
            validacion3justificacion: "",
            validacion4: false,
            validacion4a: false,
            validacion4justificacion: "",
            validacion5: false,
            validacion5a: false,
            validacion5justificacion: "",
            validacion6: false,
            validacion6a: false,
            validacion6justificacion: "",
            validacion6comentarios: "",
            validacion7: false,
            validacion7a: false,
            validacion7justificacion: "",
            validacion7comentarios: ""
        };
        this.program = {
            nombre_programa: "",
            idprograma: 0,
            alineacion_ods_meta: "",
            alineacion_ped_2017_2021: "",
            alineacion_pmp: "",
            alineacion_pnd_2013_2018: "",
            cantidad_hombres: "",
            cantidad_mujeres: "",
            cantidad: "",
            cla_programatica: "",
            clave_presupuestaria: "",
            definicion_programa: "",
            departamento: "",
            descipcion_fin: "",
            descipcion_objetivo: "",
            descripcion_alineacion_ods_meta: "",
            descripcion_alineacion_ped: "",
            descripcion_alineacion_pmp: "",
            descripcion_alineacion_pnd: "",
            descripcion_pmp: "",
            entidad: 0,
            nivel_alineacion_ods_meta: 0,
            nivel_alineacion_ped: "0",
            nivel_alineacion_pmp: 0,
            nivel_alineacion_pnd: 1,
            poblacion_objetivo: "",
            sujeto_social: "",
        };
    }
}


/***/ }),

/***/ "./src/app/classes/user.class.ts":
/*!***************************************!*\
  !*** ./src/app/classes/user.class.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.idusuarios = 0;
        this.usuario = "";
        this.nombre = "";
        this.apellidos = "";
        this.password = "";
        this.entidad = "";
        this.extension = "";
        this.email = "";
        this.rolusuario = 0;
        this.alreadyLoged = false;
        this.token = "";
    }
}


/***/ }),

/***/ "./src/app/services/api-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/api-data.service.ts ***!
  \**********************************************/
/*! exports provided: ApiDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataService", function() { return ApiDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _classes_user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/user.class */ "./src/app/classes/user.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class ApiDataService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        //Url testeo locales
        //baseURL: string = "http://localhost:3000/";
        //Url producción
        this.baseURL = "https://evaluadorapi.enbibo.com/";
        this.actualMessageServer = "";
        this.successMessage = false;
        this.failMessage = false;
        this.alreadyLoged = false;
        this.token = "";
        this.user = new _classes_user_class__WEBPACK_IMPORTED_MODULE_3__["User"]();
        let localUser = localStorage.getItem('user');
        if (!localUser) {
            console.log("Primer uso");
            localStorage.setItem('user', JSON.stringify(this.user));
        }
        else {
            this.user = JSON.parse(localUser);
        }
        this.catPrograms = new Array();
    }
    checkLogin(succesCallBack, errorCallBack) {
        /* console.log(this.user); */
        if (!this.alreadyLoged) {
            if (this.user.password.length > 1) {
                /* console.log("con sesion"); */
                this.doLogin(this.user.usuario, this.user.password).subscribe((result) => {
                    if (result.error) {
                        // en caso de que en el servidor NO haga el login
                        errorCallBack(result);
                    }
                    else {
                        // en caso de que en el servidor SI haga el login
                        let newSavedPass = new String(this.user.password);
                        this.user = result.data.user;
                        this.user.password = newSavedPass.toString();
                        this.token = result.data.token;
                        this.user.token = result.data.token;
                        localStorage.setItem('user', JSON.stringify(this.user));
                        succesCallBack(result);
                    }
                }, (error) => {
                    //this.showNotification(1,"Ups algo salio mal!",6000);
                    errorCallBack(error);
                });
            }
            else {
                /* console.log("sin sesion"); */
                errorCallBack("Sin sesion");
            }
        }
        else {
            /* console.log("aun sin logear"); */
            errorCallBack("aun sin logear");
        }
    }
    doLogin(username, password) {
        /* const headers = { 'content-type': 'application/json'}   */
        const data = { username: username, password: password };
        return this.http.post(this.baseURL + 'auth', data);
    }
    logOut() {
        localStorage.setItem('user', JSON.stringify(new _classes_user_class__WEBPACK_IMPORTED_MODULE_3__["User"]()));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.alreadyLoged = false;
        this.route.navigateByUrl('/');
    }
    getCatprograms(entidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* const headers = { 'content-type': 'application/json'}   */
            this.http.get(this.baseURL + 'catalogs/CatProgramas/' + entidad, {}).subscribe((response) => {
                this.catPrograms = response.data;
            });
        });
    }
    getRespuestas(entidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.get(this.baseURL + 'user/obtener-respuestas', { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
                ;
            }));
        });
    }
    getUserResponses(entidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.get(this.baseURL + 'user/user-responses', { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
                ;
            }));
        });
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                //console.log("intentando");
                this.http.get(this.baseURL + 'user/user-list', { headers: headers }).subscribe((response) => {
                    //console.log("comunico");
                    resolve(response);
                }, (error) => {
                    //console.log("error");
                    reject(error);
                });
            }));
        });
    }
    updateCreateUser(userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.post(this.baseURL + 'user/create-edit-user', userData, { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
            });
        });
    }
    saveRespuestas(respuestas) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.post(this.baseURL + 'user/save-respuestas', respuestas, { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
            });
        });
    }
    saveValidations(validaciones, idrespuestas) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.post(this.baseURL + 'user/update-validaciones/' + idrespuestas, validaciones, { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
            });
        });
    }
    sendEmail(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.user.token
                });
                this.http.post(this.baseURL + 'user/enviar-validacion/', data, { headers: headers }).subscribe((response) => {
                    resolve(response);
                });
            });
        });
    }
    closeNotification() {
        this.failMessage = false;
        this.successMessage = false;
        this.actualMessageServer = "";
    }
    showNotification(type, message, time) {
        this.actualMessageServer = message;
        switch (type) {
            case 0:
                this.successMessage = true;
                break;
            case 1:
                this.failMessage = true;
                break;
        }
        this.awaitTime(time, () => {
            this.failMessage = false;
            this.successMessage = false;
            this.actualMessageServer = "";
        });
    }
    awaitTime(ms, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sleep(ms).finally(() => {
                callback();
            });
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
ApiDataService.ɵfac = function ApiDataService_Factory(t) { return new (t || ApiDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ApiDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiDataService, factory: ApiDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pdfService/pdf-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/pdfService/pdf-service.service.ts ***!
  \************************************************************/
/*! exports provided: PdfServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfServiceService", function() { return PdfServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_validations_emails_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../views/validations/emails/email */ "./src/app/views/validations/emails/email.ts");
/* harmony import */ var _assets_js_smtp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/smtp */ "./src/assets/js/smtp.js");
/* harmony import */ var _assets_js_smtp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-data.service */ "./src/app/services/api-data.service.ts");




 //file path may change → 


pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__["pdfMake"].vfs;
class PdfServiceService {
    constructor(apiDataService) {
        this.apiDataService = apiDataService;
    }
    createPDF(respuestaSeleccionada, sendEmail) {
        //console.log(this.respuestaSeleccionada);
        //console.log(this.apiDataService.user);
        let fixMont = new Date().getUTCMonth().toString().length == 1 ? "0" + new Date().getUTCMonth() : new Date().getUTCMonth();
        let fixDay = new Date().getDate().toString().length == 1 ? "0" + new Date().getDate() : new Date().getDate();
        let fixDate = "" + new Date().getFullYear() + "-" + fixMont + "-" + fixDay;
        let data = {
            noRespuestas: respuestaSeleccionada.idrespuestas,
            nomReporte: 'CLASIFICADOR DE PROGRAMAS CON ENFOQUE SOCIAL',
            claveDep: respuestaSeleccionada.program.entidad,
            nomEntidad: respuestaSeleccionada.program.departamento,
            clavePrograma: respuestaSeleccionada.program.clave_presupuestaria,
            ejePrograma: "",
            nombrePrograma: respuestaSeleccionada.program.nombre_programa,
            clasiPragmatica: respuestaSeleccionada.program.cla_programatica,
            beneficiarios: "",
            defPrograma: respuestaSeleccionada.program.definicion_programa,
            numMujeres: respuestaSeleccionada.program.cantidad_mujeres,
            numHombres: respuestaSeleccionada.program.cantidad_hombres,
            total: Number.parseInt(respuestaSeleccionada.program.cantidad_mujeres) + Number.parseInt(respuestaSeleccionada.program.cantidad_hombres),
            sujetoSocial: respuestaSeleccionada.program.sujeto_social,
            claveAlineacionPED: respuestaSeleccionada.program.alineacion_ped_2017_2021,
            descripcionAlineacionPED: respuestaSeleccionada.program.descripcion_alineacion_ped,
            claveAlineacionODS: respuestaSeleccionada.program.alineacion_ods_meta,
            descripcionAlineacionODS: respuestaSeleccionada.program.descripcion_alineacion_ods_meta,
            presupuestoAuth: new Intl.NumberFormat("es-MX").format(20545),
            finPrograma: respuestaSeleccionada.program.descipcion_fin,
            propPrograma: respuestaSeleccionada.program.descipcion_objetivo //n
        };
        /* for (let index = 0; index < respuestaSeleccionada.respuestasp1.length; index++) {
          
          if(respuestaSeleccionada.respuestasp1[index] == "sujetoninasninos"){
            data.beneficiarios = data.beneficiarios + ",Niñas y niños de 0 a 11 años";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetoadolescentes"){
            data.beneficiarios = data.beneficiarios + ",Adolescentes de 12 a 17 años";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetojovenes"){
            data.beneficiarios = data.beneficiarios + ",Adolescentes de 18 a 29 años";
          }else if(respuestaSeleccionada.respuestasp1[index] == "mujeres"){
            data.beneficiarios = data.beneficiarios + ",Mujeres";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetomayores60"){
            data.beneficiarios = data.beneficiarios + ",Personas mayores de 60 a más";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetodiscapacidad"){
            data.beneficiarios = data.beneficiarios + ",Personas con discapacidad";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetoindigenas"){
            data.beneficiarios = data.beneficiarios + ",Personas indígenas";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetojornaleras"){
            data.beneficiarios = data.beneficiarios + ",Personas jornaleras";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetomigrantes"){
            data.beneficiarios = data.beneficiarios + ",Personas migrantes";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetoadultas30a59"){
            data.beneficiarios = data.beneficiarios + ",Personas adultas de 30 a 59";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetofamilias"){
            data.beneficiarios = data.beneficiarios + ",Familias o comunidades";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetosociedadcivil"){
            data.beneficiarios = data.beneficiarios + ",Organizaciones d ela sociedad civil";
          }else if(respuestaSeleccionada.respuestasp1[index] == "noaplica"){
            data.beneficiarios = data.beneficiarios + ",No aplica";
          }else if(respuestaSeleccionada.respuestasp1[index] == "sujetootro"){
            data.beneficiarios = data.beneficiarios + ",Otro ";
          }
        } */
        data.beneficiarios = respuestaSeleccionada.program.poblacion_objetivo;
        /*
            let validacion1texto = "";
            let validacion2texto = "";
            let validacion6texto = "";
            let validacion7texto = "";
        
            if(respuestaSeleccionada.validaciones.validacion1a == true){
              validacion1texto = "SI";
            }else{
              validacion1texto = "NO";
            }
        
            if(respuestaSeleccionada.validaciones.validacion2a == true){
              validacion2texto = "SI";
            }else{
              validacion2texto = "NO";
            }
        
            if(respuestaSeleccionada.validaciones.validacion6a == true){
              validacion6texto = "SI";
            }else{
              validacion6texto = "NO";
            }
        
            if(respuestaSeleccionada.validaciones.validacion7a == true){
              validacion7texto = "SI";
            }else{
              validacion7texto = "NO";
            } */
        let dataRespuestas = {
            pregunta1: respuestaSeleccionada.program.clave_presupuestaria + " " + respuestaSeleccionada.programa,
            pregunta2: "",
            pregunta3: "",
            pregunta4: "",
            pregunta5: "",
            pregunta6: "",
            pregunta7: "",
            pregunta8: "",
            pregunta9: "",
            pregunta10: "",
            pregunta11: "",
            pregunta12: ""
        };
        dataRespuestas.pregunta2 = respuestaSeleccionada.respuestas.pregunta1complemento + " :";
        respuestaSeleccionada.respuestasp1.forEach(respuesta => {
            if (respuesta == 'sujetoninasninos') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Niñas y niños de 0 a 11 años";
            }
            else if (respuesta == 'sujetoadolescentes') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Adolescentes de 12 a 17 años ";
            }
            else if (respuesta == 'sujetojovenes') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Adolescentes de 18 a 29 años";
            }
            else if (respuesta == 'mujeres') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Mujeres";
            }
            else if (respuesta == 'sujetomayores60') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas mayores de 60 a más";
            }
            else if (respuesta == 'sujetodiscapacidad') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas con discapacidad";
            }
            else if (respuesta == 'sujetoindigenas') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas indígenas";
            }
            else if (respuesta == 'sujetojornaleras') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas jornaleras";
            }
            else if (respuesta == 'sujetomigrantes') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas migrantes";
            }
            else if (respuesta == 'sujetoadultas30a59') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Personas adultas de 30 a 59";
            }
            else if (respuesta == 'sujetofamilias') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Familias o comunidades";
            }
            else if (respuesta == 'sujetosociedadcivil') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Organizaciones d ela sociedad civil";
            }
            else if (respuesta == 'noaplica') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- No aplica";
            }
            else if (respuesta == 'sujetootro') {
                dataRespuestas.pregunta2 = dataRespuestas.pregunta2 + "- Otro";
            }
        });
        dataRespuestas.pregunta3 = respuestaSeleccionada.respuestas.pregunta2 ? respuestaSeleccionada.respuestas.pregunta2 + " :" : "No ";
        respuestaSeleccionada.respuestasp2.forEach(element => {
            dataRespuestas.pregunta3 = dataRespuestas.pregunta3 + ", " + element;
        });
        dataRespuestas.pregunta4 = respuestaSeleccionada.respuestas.pregunta3 ? respuestaSeleccionada.respuestas.pregunta3 : "No ";
        if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('pobreza') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "- Personas en condición de pobreza";
        }
        else if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('pobrezaextrema') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "- Personas en condición de pobreza extrema";
        }
        else if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('vulnerable') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "- Personas en condición vulnerable";
        }
        else if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('zonaprioritariaestatal') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "- Personas habitantes de zonas de atención prioritaria estatales";
        }
        else if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('zonaprioritariafederal') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "-  Personas habitantes de zonas de atención prioritaria federales";
        }
        else if (respuestaSeleccionada.respuestas.pregunta3complemento.includes('potroobreza') == true) {
            dataRespuestas.pregunta4 = dataRespuestas.pregunta4 + "- Otro : " + respuestaSeleccionada.respuestas.pregunta3complemento.slice((respuestaSeleccionada.respuestas.pregunta3complemento.indexOf("otro")) + 5, respuestaSeleccionada.respuestas.pregunta3complemento.length);
        }
        dataRespuestas.pregunta5 = respuestaSeleccionada.respuestas.pregunta4complemento ? respuestaSeleccionada.respuestas.pregunta4complemento : " ";
        if (respuestaSeleccionada.respuestas.pregunta4.includes('ninguno') == false) {
            dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - " + respuestaSeleccionada.respuestas.pregunta5 ? respuestaSeleccionada.respuestas.pregunta5 : "No";
            dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - " + respuestaSeleccionada.respuestas.pregunta5complemento ? "Otro : " + respuestaSeleccionada.respuestas.pregunta5complemento : "";
            if (respuestaSeleccionada.respuestas.pregunta4.includes('entregaayudas') == true) {
                dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - El Programa entrega ayudas y subsidios directamente a la población";
            }
            //nope
            //if (respuestaSeleccionada.respuestas.pregunta5complemento.toString() == "Otro") {
            //  dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - Otro : " + (respuestaSeleccionada.respuestas.pregunta5otro.length == 0) ? respuestaSeleccionada.respuestas.pregunta5otro : "Sin Indicar";
            //}
            //nope
            //if (respuestaSeleccionada.respuestas.pregunta4.includes('ninguno') == false) {
            //  dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - " + respuestaSeleccionada.respuestas.pregunta5 ? respuestaSeleccionada.respuestas.pregunta5 : "No";
            //}
            //nope
            //if (respuestaSeleccionada.respuestas.pregunta4.includes('ninguno') == true) {
            //  dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - " + "No aplica";
            //}
            if (respuestaSeleccionada.respuestas.pregunta4.includes('desarrollocapacidades') == true) {
                dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - El Programa se enfoca al desarrollo de capacidades";
            }
            if (respuestaSeleccionada.respuestas.pregunta4.includes('desarrolloservicios') == true) {
                dataRespuestas.pregunta5 = dataRespuestas.pregunta5 + " - El Programa se enfoca al desarrollo de servicios públicos";
            }
        }
        else {
            dataRespuestas.pregunta5 = "No aplica";
        }
        if (respuestaSeleccionada.respuestas.pregunta4.includes('ninguno') == false) {
            dataRespuestas.pregunta6 = respuestaSeleccionada.respuestas.pregunta6 ? respuestaSeleccionada.respuestas.pregunta6 : "No";
        }
        else {
            dataRespuestas.pregunta6 = "No Aplica";
        }
        dataRespuestas.pregunta7 = respuestaSeleccionada.respuestas.pregunta7 ? respuestaSeleccionada.respuestas.pregunta7 : "No";
        dataRespuestas.pregunta8 = respuestaSeleccionada.respuestas.pregunta8 ? respuestaSeleccionada.respuestas.pregunta8 + " " : "No ";
        if (respuestaSeleccionada.respuestas.pregunta8.toString() == 'si') {
            dataRespuestas.pregunta8 = dataRespuestas.pregunta8 + respuestaSeleccionada.respuestas.pregunta8complemento ? respuestaSeleccionada.respuestas.pregunta8complemento : "";
        }
        if (respuestaSeleccionada.respuestas.pregunta9.includes('federal') == true) {
            dataRespuestas.pregunta9 = dataRespuestas.pregunta9 + ", Federal";
        }
        if (respuestaSeleccionada.respuestas.pregunta9.includes('estatal') == true) {
            dataRespuestas.pregunta9 = dataRespuestas.pregunta9 + ", Estatal";
        }
        if (respuestaSeleccionada.respuestas.pregunta9.includes('municipal') == true) {
            dataRespuestas.pregunta9 = dataRespuestas.pregunta9 + ", Municipal";
        }
        if (respuestaSeleccionada.respuestas.pregunta9.includes('ingresospropios') == true) {
            dataRespuestas.pregunta9 = dataRespuestas.pregunta9 + ", Ingresos Propios";
        }
        if (respuestaSeleccionada.respuestas.pregunta9.includes('otro') == true) {
            dataRespuestas.pregunta9 = dataRespuestas.pregunta9 + ", Otro : " + respuestaSeleccionada.respuestas.pregunta9.slice((respuestaSeleccionada.respuestas.pregunta9.indexOf("otro")) + 5, respuestaSeleccionada.respuestas.pregunta9.length);
            ;
        }
        if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'educacionobligatoria') {
            dataRespuestas.pregunta10 = "Educación obligatoria";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'promocionsalud') {
            dataRespuestas.pregunta10 = "Promoción de la salud, prevención y control de enfermedades transmisibles y atención médica";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'prevenirviolencia') {
            dataRespuestas.pregunta10 = "Prevenir, atender y erradicar la violencia de género";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'alimentacion') {
            dataRespuestas.pregunta10 = "Alimentación y nutrición";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'productosbasicos') {
            dataRespuestas.pregunta10 = "Abasto social de productos básicos";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'vivienda') {
            dataRespuestas.pregunta10 = "Vivienda";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'generacinoempleo') {
            dataRespuestas.pregunta10 = "Generación y conservación del empleo, actividades productivas y empresas del sector social de la economía";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'obrasinfraestructura') {
            dataRespuestas.pregunta10 = "Obras de infraestructura para agua potable, drenaje, electrificación, caminos y otras vías de comunicación, saneamiento ambiental y equipamiento urbano";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'desarrollopueblos') {
            dataRespuestas.pregunta10 = "Fomentar el desarrollo de los pueblos y las comunidades Indígenas en el estado";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'ninguno') {
            dataRespuestas.pregunta10 = "Ninguno";
        }
        else if (respuestaSeleccionada.respuestas.pregunta10.toString() == 'otro') {
            dataRespuestas.pregunta10 = "Otro : " + respuestaSeleccionada.respuestas.pregunta10complemento;
        }
        dataRespuestas.pregunta11 = respuestaSeleccionada.respuestas.pregunta11 ? respuestaSeleccionada.respuestas.pregunta11 + " " : "No ";
        if (respuestaSeleccionada.respuestas.pregunta11.toString() == 'si') {
            dataRespuestas.pregunta11 = dataRespuestas.pregunta11 + respuestaSeleccionada.respuestas.pregunta11complemento ? respuestaSeleccionada.respuestas.pregunta11complemento : "";
        }
        //dataRespuestas.pregunta12 = respuestaSeleccionada.respuestas.pregunta12 ? respuestaSeleccionada.respuestas.pregunta12 : "No";
        if (respuestaSeleccionada.respuestas.pregunta12.toString() == "si") {
            dataRespuestas.pregunta12 = "Sí,";
        }
        else {
            dataRespuestas.pregunta12 = "No";
        }
        dataRespuestas.pregunta12 = dataRespuestas.pregunta12 + (respuestaSeleccionada.respuestas.pregunta12complemento ? " " + respuestaSeleccionada.respuestas.pregunta12complemento : "");
        let comentario6 = "";
        let comentario7 = "";
        if (respuestaSeleccionada.validaciones.validacion6a == false &&
            (respuestaSeleccionada.validaciones.validacion1a == true || respuestaSeleccionada.validaciones.validacion2a == true)) {
            comentario6 = " (Nota: El Programa debe contar con Reglas de Operación)";
        }
        if (respuestaSeleccionada.validaciones.validacion5a &&
            (respuestaSeleccionada.respuestas.pregunta1complemento != 'funcionario' &&
                respuestaSeleccionada.respuestas.pregunta1complemento != 'noaplica') &&
            !respuestaSeleccionada.validaciones.validacion7a) {
            comentario7 = " (Nota: El Programa debe contar con Padrón de Beneficiarios)";
        }
        //Fix Validacion 3
        respuestaSeleccionada.respuestasp1.forEach(elem => {
            if (elem == "sujetoninasninos") {
                respuestaSeleccionada.validaciones.validacion3a = true;
            }
        });
        //a)      Nombre del Reporte (Clasificador de Programas con Enfoque Social) - OK
        //b)      Clave y nombre de la dependencia o entidad. - OK
        //c)      Clave, eje, y nombre del programa. - OK
        //d)      Clasificación programática. - OK
        //e)      Definición del Programa. - OK
        //f)       Población Objetivo (total y desagregada en hombres y mujeres) - OK
        //g)      Sujetos sociales. - OK
        //h)      Alineación al PED  - OK
        //i)      Alineación al Programa Sectorial
        //j)      Alineación a los ODS. - OK
        //k)      Presupuesto Autorizado. - OK
        //l)      Fuentes de financiamiento.
        //m)      Fin del Programa  - OK
        //n)      Propósito del Programa. - OK
        const documentDefinition = {
            // a string or { width: number, height: number }
            pageSize: 'A5',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'landscape',
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [10, 10, 10, 10],
            content: [{
                    style: 'tableExample',
                    table: {
                        widths: ['*', 'auto', '*'],
                        body: [
                            [{ text: '', rowSpan: 3, colSpan: 1, border: [false, false, false, false], }, { text: 'GOBIERNO DEL ESTADO DE CHIHUAHUA', alignment: 'center', border: [false, false, false, false] }, { text: 'Fecha Validacion ' + fixDate, alignment: 'right', fontSize: 7, border: [false, false, false, false] }],
                            ['', { text: data.nomReporte, alignment: 'center', border: [false, false, false, false] }, { text: 'No :' + data.noRespuestas, rowSpan: 2, colSpan: 1, border: [false, false, false, false], alignment: 'right', fontSize: 7 }],
                            ['', { text: 'EJERCICIO FISCAL 2021', alignment: 'center', border: [false, false, false, false] }, ''],
                        ]
                    }
                }, {
                    style: 'tableExample',
                    table: {
                        widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                        body: [
                            [{ text: '', alignment: 'center', rowSpan: 1, colSpan: 18, border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: data.claveDep + ' - ' + data.nomEntidad, alignment: 'center', fontSize: 7, rowSpan: 1, colSpan: 18, fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: '', alignment: 'center', rowSpan: 1, colSpan: 18, border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: data.clavePrograma + ' - ' + data.ejePrograma + ' - ' + data.nombrePrograma + ' / ' + data.clasiPragmatica, alignment: 'center', fontSize: 7, rowSpan: 1, colSpan: 18, fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'Definición del Programa', margin: [0, 5, 0, 0], alignment: 'center', fontSize: 8, rowSpan: 2, colSpan: 12, fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', { text: 'Beneficiarios', alignment: 'center', fontSize: 7, rowSpan: 1, colSpan: 6, fillColor: '#e5e5e5' }, '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', { text: data.beneficiarios, alignment: 'center', fontSize: 6, rowSpan: 1, colSpan: 6 }, '', '', '', '', ''],
                            [{ text: data.defPrograma, fontSize: 7, rowSpan: 3, colSpan: 12, }, '', '', '', '', '', '', '', '', '', '', '', { text: 'Mujeres', alignment: 'center', fontSize: 6, rowSpan: 1, colSpan: 2, fillColor: '#e5e5e5' }, '', { text: 'Hombres', alignment: 'center', fontSize: 6, rowSpan: 1, colSpan: 2, fillColor: '#e5e5e5' }, '', { text: 'Total', alignment: 'center', fontSize: 6, rowSpan: 1, colSpan: 2, fillColor: '#e5e5e5' }, ''],
                            [{ text: 'Sujeto Social', fontSize: 8, rowSpan: 1, colSpan: 12, alignment: 'center', fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', { text: data.numMujeres, alignment: 'center', fontSize: 6, rowSpan: 2, colSpan: 2, }, '', { text: data.numHombres, alignment: 'center', fontSize: 6, rowSpan: 2, colSpan: 2, }, '', { text: respuestaSeleccionada.program.cantidad, alignment: 'center', fontSize: 6, rowSpan: 2, colSpan: 2 }, ''],
                            [{ text: data.sujetoSocial, fontSize: 6, rowSpan: 2, colSpan: 12, alignment: 'center' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* ['', '', '', '', '', '', '', '', '', '', '', '', 's', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', 'a', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], */
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'ALINEACION', fontSize: 6, rowSpan: 2, colSpan: 18, alignment: 'center', fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'PED', fontSize: 6, rowSpan: 1, colSpan: 3, alignment: 'center' }, '', '', { text: data.claveAlineacionPED, fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center' }, '', { text: data.descripcionAlineacionPED, fontSize: 6, rowSpan: 1, colSpan: 13 }, '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'ODS', fontSize: 6, rowSpan: 1, colSpan: 3, alignment: 'center' }, '', '', { text: data.claveAlineacionODS, fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center' }, '', { text: data.descripcionAlineacionODS, fontSize: 6, rowSpan: 1, colSpan: 13 }, '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'Fin del programa', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: data.finPrograma, fontSize: 6, rowSpan: 1, colSpan: 18 }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'Proposito del programa', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: data.propPrograma, fontSize: 6, rowSpan: 1, colSpan: 18 }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: 'Resultados del Clasificador de Programas con Enfoque Social', fontSize: 8, rowSpan: 1, colSpan: 18, fillColor: '#e5e5e5', alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: '1.- ¿El Programa presupuestario es de enfoque social?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: respuestaSeleccionada.validaciones.validacion1a ? 'SI' : 'NO', fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '2.- ¿El Programa presupuestario coadyuva en el desarrollo social de las personas?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: respuestaSeleccionada.validaciones.validacion2a ? 'SI' : 'NO', fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '3.- ¿El Programa presupuestario va dirigido a sujetos de derecho prioritarios?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: respuestaSeleccionada.validaciones.validacion3a ? 'SI' : 'NO', fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '4.- ¿El Programa presupuestario se enfoca al desarrollo de capacidades en la población beneficiaria?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: respuestaSeleccionada.validaciones.validacion4a ? 'SI' : 'NO', fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '5.- ¿El Programa presupuestario otorga algún tipo de apoyo?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: respuestaSeleccionada.validaciones.validacion5a ? 'SI' : 'NO', fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '6.- ¿El Programa presupuestario está sujeto a reglas de operación?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: (respuestaSeleccionada.validaciones.validacion6a ? 'SI' : 'NO') + comentario6, fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            [{ text: '7.- ¿El Programa presupuestario cuenta con padrón general de beneficiarios?', fontSize: 6, rowSpan: 1, colSpan: 11, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', { text: (respuestaSeleccionada.validaciones.validacion7a ? 'SI' : 'NO') + comentario7, fontSize: 6, rowSpan: 1, colSpan: 7, alignment: 'center', border: [true, true, true, true] }, '', '', '', '', '', ''],
                            /*
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '','', '', '','', '', '','', '', '','', '', '','', '', ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '','', '', '','', '', '','', '', '','', '', '','', '', ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '','', '', '','', '', '','', '', '','', '', '','', '', ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '','', '', '','', '', '','', '', '','', '', '','', '', ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '','', '', '','', '', '','', '', '','', '', '','', '', ''], */
                            //FIRMAS
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, true] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, true] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: 'FIRMA DEL TITULAR DE LA DEPENDENCIA', fontSize: 5, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 5, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: 'FIRMA DEL RESPONSABLE DE DAR RESPUESTA AL CLASIFICADOR', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: respuestaSeleccionada.titular, fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: respuestaSeleccionada.usuario, fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return .5;
                        },
                        vLineWidth: function (i, node) {
                            return .5;
                        },
                    }
                }, {
                    style: 'tableExample',
                    table: {
                        widths: ['*', 'auto', '*'],
                        body: [
                            [{ text: '', rowSpan: 3, colSpan: 1, border: [false, false, false, false], }, { text: 'GOBIERNO DEL ESTADO DE CHIHUAHUA', alignment: 'center', border: [false, false, false, false] }, { text: 'Fecha Validacion ' + fixDate, alignment: 'right', fontSize: 7, border: [false, false, false, false] }],
                            ['', { text: data.nomReporte, alignment: 'center', border: [false, false, false, false] }, { text: 'No :' + data.noRespuestas, rowSpan: 2, colSpan: 1, border: [false, false, false, false], alignment: 'right', fontSize: 7 }],
                            ['', { text: 'EJERCICIO FISCAL 2021', alignment: 'center', border: [false, false, false, false] }, ''],
                        ]
                    }
                }, {
                    style: 'tableExample',
                    table: {
                        widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                        body: [
                            [{ text: data.claveDep + ' - ' + data.nomEntidad, alignment: 'center', fontSize: 7, rowSpan: 1, colSpan: 18, fillColor: '#e5e5e5' }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 1 */ [{ text: '1. CLAVE Y NOMBRE DEL PROGRAMA PRESUPUESTARIO', style: ['headerRespuestas'], fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta1, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 2 */ [{ text: '2. ¿CUÁL ES EL O LOS SUJETOS DE DERECHO QUE ATIENDE EL PROGRAMA?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta2, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 3 */ [{ text: '3. ¿EL PROGRAMA PRESUPUESTARIO ESTÁ ALINEADO A ALGÚN DERECHO HUMANO - SOCIAL?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta3, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 4 */ [{ text: '4. ¿EL PROGRAMA ATIENDE POBLACIÓN EN ALGUNA CONDICIÓN DE VULNERABILIDAD?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta4, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 5 */ [{ text: '5. ¿EN CUÁL O CUÁLES DE LAS SIGUIENTES CATEGORÍAS SE CLASIFICAN LOS BIENES Y/O SERVICIOS DEL PROGRAMA PRESUPUESTARIO?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta5, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 6 */ [{ text: '6. ¿EL APOYO SOCIAL SE ENTREGA DIRECTAMENTE O INDIRECTAMENTE A LA POBLACIÓN?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta6, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 7 */ [{ text: '7. ¿CON QUÉ FRECUENCIA EL PROGRAMA ENTREGA EL APOYO SOCIAL A LA MISMA PERSONA BENEFICIARIA?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta7, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 8 */ [{ text: '8. ¿EL PROGRAMA PRESUPUESTARIO COADYUVA AL CUMPLIMIENTO DE ALGUNO DE LOS OBJETIVOS DE LA POLÍTICA DE DESARROLLO SOCIAL Y HUMANO ESTATAL?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta8, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 9 */ [{ text: '9. ¿CUÁL ES LA PROCEDENCIA DE LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta9, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 10 */ [{ text: '10. LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO SON PRIORITARIOS Y DE INTERÉS PÚBLICO PORQUE ESTÁN DIRIGIDOS A:', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta10, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 11 */ [{ text: '11. ¿EL PROGRAMA PRESUPUESTARIO CUENTA CON PADRÓN DE BENEFICIARIOS?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta11, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* 12 */ [{ text: '12. ¿EL PROGRAMA PRESUPUESTARIO CUENTA CON REGLAS DE OPERACIÓN VIGENTES Y/O NORMATIVIDAD APLICABLE?', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: dataRespuestas.pregunta12, fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            /* Observaciones */ [{ text: 'Observaciones o aclaraciones de la Dependencia o Entidad', fontSize: 6, style: ['headerRespuestas'], rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: respuestaSeleccionada.respuestas.aclaraciones.length > 0 ? respuestaSeleccionada.respuestas.aclaraciones : "Ninguna", fontSize: 5, rowSpan: 1, colSpan: 18, alignment: 'left', border: [true, true, true, true] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            //FIRMAS
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, true] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, true] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: 'FIRMA DEL TITULAR DE LA DEPENDENCIA', fontSize: 5, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 5, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: 'FIRMA DEL RESPONSABLE DE DAR RESPUESTA AL CLASIFICADOR', fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: respuestaSeleccionada.titular, fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, '', { text: respuestaSeleccionada.usuario, fontSize: 6, rowSpan: 1, colSpan: 6, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', { text: '', fontSize: 6, rowSpan: 1, colSpan: 2, alignment: 'center', border: [false, false, false, false] }, ''],
                            [{ text: ' ', fontSize: 6, rowSpan: 1, colSpan: 18, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return .5;
                        },
                        vLineWidth: function (i, node) {
                            return .5;
                        },
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                headerRespuestas: {
                    fontSize: 6,
                    bold: true,
                    margin: [0, 0, 0, 0]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 0, 0, 0],
                    fontSize: 9,
                    color: 'black'
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
                alignment: 'justify'
            }
        };
        //Habilitar para enviar emails
        if (sendEmail == false) {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["createPdf"](documentDefinition).open();
        }
        else {
            const pdfDocGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["createPdf"](documentDefinition);
            pdfDocGenerator.getBase64((pdfBase64) => {
                //alert(data);
                /*this.sendEmail(
                  [ this.apiDataService.user.email ,respuestaSeleccionada.usuarioEmail, 'laura.teran@chihuahua.gob.mx'],
                  data,
                  documentDefinition,
                  pdfBase64)*/
                //console.log(pdfBase64);
                this.apiDataService.sendEmail({
                    toEmails: respuestaSeleccionada.usuarioEmail + ",laura.teran@chihuahua.gob.mx,alberto.cortes@chihuahua.gob.mx",
                    idRespuestas: respuestaSeleccionada.idrespuestas,
                    pdfBase64: pdfBase64
                })
                    .then((response) => {
                    //console.log("exito");
                    //console.log(response);
                    if (response.error == false) {
                        alert("Se a mandado un correo con el reporte a su email");
                        //Abre el pdf en una ventana
                        //pdfMake.createPdf(documentDefinition).open(); 
                        //console.log("exito mandando correo");
                    }
                    else {
                        alert("Error enviando email");
                        console.log(response.message);
                    }
                    //this.apiDataService.showNotification(0, "Validaciones guardadas con Exito!", 6000);
                }).catch((error) => {
                    console.log("error");
                    alert("Error 2 enviando email");
                    console.log(error);
                    //this.apiDataService.showNotification(1, "Error guardando validaciones!", 6000);
                });
            });
        }
    }
    sendEmail(toUserEmails, dataPdf, documentDefinition, pdfBase64) {
        Email.send({
            Host: 'smtp.elasticemail.com',
            Port: 2525,
            //Username: 'luismi.luu@gmail.com',
            //Password: 'CD71EF3F18D61EAC4DD8F549D65FF2E49ABE',
            //Username: 'clasificador@chihuahua.gob.mx',
            //Password: '8544CC6047C188E711D10459A5748FAB87E4',
            Username: 'alberto.cortes@chihuahua.gob.mx',
            Password: '116D694F078CA2F4819B66C4262C856EA0C2',
            To: /* 'luismi.luu@gmail.com' */ toUserEmails,
            Cc: /* 'luismi.luu@gmail.com' */ 'alberto.cortes@chihuahua.gob.mx',
            From: 'alberto.cortes@chihuahua.gob.mx',
            Subject: "Reporte de validacion del programa presupuestario : " + dataPdf.noRespuestas,
            Body: _views_validations_emails_email__WEBPACK_IMPORTED_MODULE_3__["email"],
            Attachments: [{
                    name: 'acuse-' + dataPdf.idrespuestas + '.pdf',
                    data: pdfBase64
                }],
        }).then(message => {
            if (message == "OK") {
                //alert(message); 
                alert("Se a mandado un correo con el reporte a su email");
                //Abre el pdf en una ventana
                //pdfMake.createPdf(documentDefinition).open(); 
                console.log("exito mandando correo");
            }
            else {
                console.log("error enviando correo");
                alert(message);
            }
            //console.log(message);
        }, (error) => {
            console.log("error enviando correo");
            console.log(error);
        });
    }
}
PdfServiceService.ɵfac = function PdfServiceService_Factory(t) { return new (t || PdfServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"])); };
PdfServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfServiceService, factory: PdfServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/user.class */ "./src/app/classes/user.class.ts");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








const _c0 = ["OpenEditUser"];
const _c1 = ["BtnCloseEditModal"];
function AdminDashboardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_div_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r458); const ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r457.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r442.apiDataService.actualMessageServer, " ");
} }
function AdminDashboardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r460); const ctx_r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r459.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r443.apiDataService.actualMessageServer, " ");
} }
function AdminDashboardComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todas las Entidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r445.selectedEntitie);
} }
function AdminDashboardComponent_a_66_Template(rf, ctx) { if (rf & 1) {
    const _r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_a_66_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r463); const entitie_r461 = ctx.$implicit; const ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r462.changeEntitieSelected(entitie_r461); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entitie_r461 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entitie_r461);
} }
function AdminDashboardComponent_tr_93_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_tr_93_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Validador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_tr_93_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capturador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_tr_93_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visualizador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminDashboardComponent_tr_93_span_10_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminDashboardComponent_tr_93_span_11_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminDashboardComponent_tr_93_span_12_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminDashboardComponent_tr_93_span_13_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_93_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470); const user_r464 = ctx.$implicit; const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r469.selectUser(user_r464); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r464 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r464.idusuarios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r464.nombre, " ", user_r464.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r464.entidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r464.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r464.rolusuario == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r464.rolusuario == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r464.rolusuario == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r464.rolusuario == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r464.extension);
} }
function AdminDashboardComponent_h5_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Creando Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_h5_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editando usuario #", ctx_r450.selectedUser.idusuarios, "");
} }
function AdminDashboardComponent_input_114_Template(rf, ctx) { if (rf & 1) {
    const _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_input_114_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r472); const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r471.selectedUser.usuario = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r451.selectedUser.usuario);
} }
function AdminDashboardComponent_input_115_Template(rf, ctx) { if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_input_115_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474); const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r473.selectedUser.usuario = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r452.selectedUser.usuario);
} }
function AdminDashboardComponent_button_146_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_button_146_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Validador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_button_146_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capturador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_button_146_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visualizador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_button_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminDashboardComponent_button_146_span_1_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminDashboardComponent_button_146_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminDashboardComponent_button_146_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminDashboardComponent_button_146_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r453.selectedUser.rolusuario == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r453.selectedUser.rolusuario == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r453.selectedUser.rolusuario == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r453.selectedUser.rolusuario == 3);
} }
function AdminDashboardComponent_button_147_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminDashboardComponent_button_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminDashboardComponent_button_147_span_1_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r454.selectedUser.rolusuario == 0);
} }
function AdminDashboardComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cambiar contrase\u00F1a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminDashboardComponent {
    constructor(apiDataService) {
        this.apiDataService = apiDataService;
        this.searchValue = "";
        this.page = 1;
        this.pageSize = 10;
        this.entities = [];
        this.selectedEntitie = "Todas";
        this.userList = new Array();
        this.userListFiltered = new Array();
        this.selectedUser = new _classes_user_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.password = "";
        this.newPassword = "";
        this.isNew = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    selectUser(respuesta) {
        this.selectedUser = JSON.parse(JSON.stringify(respuesta));
        this.selectedUser.password = "";
        this.password = "";
        this.newPassword = "";
        this.isNew = false;
        //console.log(this.selectedUser);
        this.openEditUser.nativeElement.click();
    }
    selectNewUser() {
        this.selectedUser = new _classes_user_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.password = "";
        this.newPassword = "";
        this.isNew = true;
        //console.log(this.selectedUser);
        this.openEditUser.nativeElement.click();
    }
    reloadData() {
        this.userList = [];
        this.userListFiltered = Array.from(this.userList);
        this.selectedUser = new _classes_user_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.apiDataService.getUsers().then((response) => {
            //console.log(response);
            //this.apiDataService.showNotification(0,response.message,6000);
            this.userList = response.data;
            this.userListFiltered = Array.from(this.userList);
            this.entities = [...new Set(this.userList.map(data => data.entidad))];
        }).catch((error) => {
            console.log("error");
            this.apiDataService.showNotification(0, error.message, 6000);
            console.log(error);
        });
    }
    changeTypeUser(newType) {
        this.selectedUser.rolusuario = newType;
    }
    updateUser() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.selectedUser.email).toLowerCase())) {
            this.apiDataService.showNotification(1, "Email invalido", 6000);
        }
        else if (this.isNew == true && this.password == "") {
            this.apiDataService.showNotification(1, "La contraseña no puede estar vaciá", 6000);
        }
        else if (this.password.length > 0 && this.password.length < 8) {
            this.apiDataService.showNotification(1, "La contraseña debe tener mínimo 8 caracteres", 6000);
        }
        else {
            if (this.password != this.newPassword) {
                this.apiDataService.showNotification(1, "Las contraseñas no coinciden", 6000);
            }
            else {
                this.selectedUser.password = this.password;
                this.apiDataService.updateCreateUser(this.selectedUser)
                    .then((response) => {
                    console.log("cerrando");
                    console.log(response);
                    if (response.error == true) {
                        this.apiDataService.showNotification(1, response.message, 6000);
                    }
                    else {
                        this.reloadData();
                        this.btnCloseEditModal.nativeElement.click();
                        this.apiDataService.showNotification(0, response.message, 6000);
                    }
                }).catch((error) => {
                    console.log("error");
                    console.log(error);
                });
            }
        }
    }
    filterByPEmail(event) {
        let searchValueTemp = event.charAt(0).toLowerCase() + event.slice(1);
        if (this.searchValue == "") {
            this.userListFiltered = Array.from(this.userList);
        }
        else {
            this.userListFiltered = this.userList.filter(function (user) {
                let fixed = user.email.charAt(0).toUpperCase() + event.slice(1);
                return user.email.toLowerCase().includes(searchValueTemp);
            });
        }
    }
    changeEntitieSelected(opc) {
        let searchValueTemp = opc.toString().charAt(0).toLowerCase() + opc.toString().slice(1);
        switch (opc) {
            case -1:
                this.selectedEntitie = "Todas";
                this.userListFiltered = Array.from(this.userList);
                break;
            default:
                this.selectedEntitie = opc.toString();
                this.userListFiltered = this.userList.filter(function (user) {
                    let fixed = user.entidad.charAt(0).toUpperCase() + opc.toString().slice(1);
                    return user.entidad.toLowerCase().includes(searchValueTemp);
                });
                break;
        }
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.openEditUser = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnCloseEditModal = _t.first);
    } }, decls: 174, vars: 30, consts: [[1, "body-div"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], [1, "container-fluid"], ["src", "/assets/images/logo-trans.png", 1, "logo-flotante"], ["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "card-box"], [1, "", 2, "text-align", "-webkit-center"], [1, "card", 2, "width", "100%", "min-height", "460px"], [1, "card-img-top", 2, "height", "40px", "background-color", "#4892a9", "margin", "10px"], [1, "card-body-fixed"], [1, "row", 2, "text-align", "-webkit-center"], [1, "col-sm-2", "menu-sidebar", 2, "text-align", "-webkit-center", "padding", "0px 45px"], [1, "", 2, "max-height", "50px", "margin-bottom", "15px"], [1, "", 2, "text-align", "left", "padding", "0px"], [2, "padding-top", "10px", "font-weight", "700", "font-size", "x-large"], [1, "p-b-10"], ["routerLink", "/register-program", "target", "_blank", "routerLinkActive", "active", 1, "link-menu"], ["routerLink", "/validations", "target", "_blank", "routerLinkActive", "active", 1, "link-menu"], [1, "col-sm-10", 2, "text-align", "-webkit-center", "padding", "0px 45px"], [1, "row", 2, "max-height", "50px", "margin-bottom", "15px", "align-items", "center", "justify-content", "space-between", "align-items", "center"], [1, "disp-flex-jsal-center", 2, "text-align", "left", "padding", "0px"], [2, "padding-top", "10px", "font-weight", "600", "font-size", "x-large"], [1, "p-l-10"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "outline-btn"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"], [1, "input-group", "input-group-sm", "mb-3", 2, "margin-bottom", "0rem!important", "height", "38px"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "height", "38px", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 2, "width", "100%"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "blu-btn", 2, "width", "100%", "z-index", "auto"], [4, "ngIf"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-l-10", 2, "text-align", "right", "padding", "0px"], [1, "btn", "btn-success", 2, "margin", "0px 10px", 3, "click"], [1, "fas", "fa-user-plus", 2, "color", "whitesmoke"], [1, "reload-btn", 3, "click"], [1, "fas", "fa-sync", 2, "color", "whitesmoke"], [1, "row"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "row", "p-b-30"], [1, "justify-end", 2, "width", "-webkit-fill-available", "text-align", "right", 3, "page", "pageSize", "collectionSize", "pageChange"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", 2, "display", "none"], ["OpenEditUser", ""], ["id", "exampleModal", "tabindex", "0", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", 2, "margin-top", "7%"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title", "id", "exampleModalLabel", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "input-group", "input-group-lg", "padding-inputs-user"], [1, "input-group-prepend", 2, "width", "40%"], ["id", "inputGroup-sizing-lg", 1, "input-group-text", 2, "width", "100%"], ["disabled", "", "style", "width: 60%;", "type", "text", "class", "form-control", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["style", "width: 60%;", "type", "text", "class", "form-control", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["placeholder", "Ingrese el nombre de la persona", "type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese los apellidos", "type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese un correo valido", "type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese la entidad", "type", "number", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese el numero de extension", "type", "number", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 2, "width", "60%"], ["style", "width: 100%;", "class", "btn btn-outline-secondary dropdown-toggle", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["disabled", "", "style", "width: 100%;", "class", "btn btn-outline-secondary dropdown-toggle", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], [1, "input-group-prepend", 2, "width", "50%"], ["type", "password", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["BtnCloseEditModal", ""], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], [3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"], ["data-target", "#modalValidacion", "data-toggle", "modal", "data-id", "", 1, "btn", "btn-danger", 3, "click"], ["id", "exampleModalLabel", 1, "modal-title"], ["disabled", "", "type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", 2, "width", "100%"], ["disabled", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", 2, "width", "100%"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_9_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminDashboardComponent_div_14_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminDashboardComponent_div_15_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Capturador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Validador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_46_listener() { return ctx.pageSize = 5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_48_listener() { return ctx.pageSize = 10; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_50_listener() { return ctx.pageSize = 15; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_57_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_57_listener($event) { return ctx.filterByPEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AdminDashboardComponent_span_61_Template, 2, 0, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AdminDashboardComponent_span_62_Template, 2, 1, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_64_listener() { return ctx.changeEntitieSelected(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AdminDashboardComponent_a_66_Template, 2, 1, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_69_listener() { return ctx.selectNewUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Nuevo Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_73_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Recargar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Entidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Accion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AdminDashboardComponent_tr_93_Template, 19, 10, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ngb-pagination", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AdminDashboardComponent_Template_ngb_pagination_pageChange_96_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AdminDashboardComponent_h5_104_Template, 2, 0, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AdminDashboardComponent_h5_105_Template, 2, 1, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, AdminDashboardComponent_input_114_Template, 1, 1, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, AdminDashboardComponent_input_115_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_120_listener($event) { return ctx.selectedUser.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_125_listener($event) { return ctx.selectedUser.apellidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_130_listener($event) { return ctx.selectedUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Entidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_135_listener($event) { return ctx.selectedUser.entidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_140_listener($event) { return ctx.selectedUser.extension = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Tipo de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, AdminDashboardComponent_button_146_Template, 5, 4, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, AdminDashboardComponent_button_147_Template, 2, 1, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_149_listener() { return ctx.changeTypeUser(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_151_listener() { return ctx.changeTypeUser(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Validador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_153_listener() { return ctx.changeTypeUser(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Capturador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_155_listener() { return ctx.changeTypeUser(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Visualizador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, AdminDashboardComponent_div_157_Template, 2, 0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Nueva Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_162_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Confirmar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_167_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 81, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_172_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Guardar Cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No. Usuarios ", ctx.pageSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEntitie == "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEntitie != "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](94, 26, ctx.userListFiltered, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.userList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.entidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.extension);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser.usuario != "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser.usuario == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".body-div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: auto;\r\n  background-image: url('img2.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n.img-reload[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n}\r\n.btnnu[_ngcontent-%COMP%] {\r\n    background-color: DodgerBlue; \r\n    border: none; \r\n    color: white; \r\n    padding: 12px 16px; \r\n    font-size: 16px; \r\n    cursor: pointer; \r\n  }\r\n\r\n.btnnu[_ngcontent-%COMP%]:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n.padding-inputs-user[_ngcontent-%COMP%]{\r\n    padding : 10px 0px;\r\n  }\r\n.disp-flex-jsal-center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n  max-height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  color: #000 !important;\r\n}\r\n.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\r\n  background-color: rgba(72, 146, 169 , .5);\r\n}\r\n.menu-sidebar[_ngcontent-%COMP%]{\r\n  border-right: solid 2px #4892a9;\r\n  box-shadow: 4px 0px 0px 0px rgba(40,46,56,0.17);\r\n}\r\n.link-menu[_ngcontent-%COMP%]{\r\n  border-left: solid 2px #282e38;\r\n  font-weight: 400;\r\n  font-size: 1.1em;\r\n  margin: 10px 0;\r\n  padding-left: 15px;\r\n  transition: .1s ease-in-out;\r\n}\r\n.link-menu[_ngcontent-%COMP%]:hover{\r\n  color: #4892a9 !important;\r\n  border-left: solid 2px #4892a9;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksNEJBQTRCLEVBQUUsb0JBQW9CO0lBQ2xELFlBQVksRUFBRSxtQkFBbUI7SUFDakMsWUFBWSxFQUFFLGVBQWU7SUFDN0Isa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsZUFBZSxFQUFFLDJCQUEyQjtFQUM5QztBQUVBLG9DQUFvQztBQUNwQztJQUNFLDJCQUEyQjtFQUM3QjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1kaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9pbWcyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4uaW1nLXJlbG9hZHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bm51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xyXG4gIH1cclxuXHJcbiAgLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4gIC5idG5udTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy1pbnB1dHMtdXNlcntcclxuICAgIHBhZGRpbmcgOiAxMHB4IDBweDtcclxuICB9XHJcbi5kaXNwLWZsZXgtanNhbC1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tbWVudSBhe1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxNDYsIDE2OSAsIC41KTtcclxufVxyXG5cclxuLm1lbnUtc2lkZWJhcntcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjNDg5MmE5O1xyXG4gIGJveC1zaGFkb3c6IDRweCAwcHggMHB4IDBweCByZ2JhKDQwLDQ2LDU2LDAuMTcpO1xyXG59XHJcbi5saW5rLW1lbnV7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjMjgyZTM4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5saW5rLW1lbnU6aG92ZXJ7XHJcbiAgY29sb3I6ICM0ODkyYTkgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogc29saWQgMnB4ICM0ODkyYTk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"] }]; }, { openEditUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['OpenEditUser']
        }], btnCloseEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['BtnCloseEditModal']
        }] }); })();


/***/ }),

/***/ "./src/app/views/concepts-basis-rights/concepts-basis-rights.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/concepts-basis-rights/concepts-basis-rights.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConceptsBasisRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptsBasisRightsComponent", function() { return ConceptsBasisRightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ConceptsBasisRightsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConceptsBasisRightsComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.apiDataService.actualMessageServer, " ");
} }
function ConceptsBasisRightsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConceptsBasisRightsComponent_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.apiDataService.actualMessageServer, " ");
} }
class ConceptsBasisRightsComponent {
    constructor(apiDataService) {
        this.apiDataService = apiDataService;
    }
    ngOnInit() {
    }
}
ConceptsBasisRightsComponent.ɵfac = function ConceptsBasisRightsComponent_Factory(t) { return new (t || ConceptsBasisRightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"])); };
ConceptsBasisRightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConceptsBasisRightsComponent, selectors: [["app-concepts-basis-rights"]], decls: 208, vars: 3, consts: [["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "wrapper"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], [1, "card-box", 2, "text-align", "-webkit-center"], [1, "card"], [1, "card-body"], [1, "row", "full-centered", "no-margin", "pd-15", "title-table"], [1, "row", "no-margin"], [1, "col-3", "full-left", "pd-15", "description-table"], [1, "col-2", "full-left", "pd-15", "description-table"], [1, "col-7", "full-left", "pd-15", "description-table"], [1, "col-3", "full-left", "pd-15", "concept-table"], [1, "col-2", "full-left", "pd-15", "concept-table"], [1, "col-7", "full-left", "pd-15", "concept-table"], [1, "row", "full-centered", "no-margin", "pd-15", "description-table"], [1, "col-9", "full-left", "pd-15", "concept-table"], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], [3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"]], template: function ConceptsBasisRightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConceptsBasisRightsComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConceptsBasisRightsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConceptsBasisRightsComponent_Template_button_click_11_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " FUNDAMENTO JUR\u00CDDICO DEL CLASIFICADOR DE PROGRAMAS PRESUPUESTARIOS CON ENFOQUE SOCIAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Documento jur\u00EDdico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Art\u00EDculo(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Que a la letra dice... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Ley General de Desarrollo Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Art\u00EDculo 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Son derechos para el desarrollo social la educaci\u00F3n, la salud, la alimentaci\u00F3n, la vivienda, el disfrute de un medio ambiente sano, el trabajo y la seguridad social y los relativos a la no discriminaci\u00F3n en los t\u00E9rminos de la Constituci\u00F3n Pol\u00EDtica de los Estados Unidos Mexicanos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Ley de Desarrollo Social y Humano para el Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Art\u00EDculo 6; Fracciones I a la XI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " En el Estado de Chihuahua se reconocen y consideran, sin perjuicio de lo que se\u00F1alen otras disposiciones legales, los siguientes derechos sociales: A la salud y deporte; II. A la seguridad social; III. Al trabajo; IV. A la alimentaci\u00F3n y nutrici\u00F3n; V. A la Educaci\u00F3n; VI. A una vida libre de violencia de g\u00E9nero; VII. A la vivienda; VIII. Al medio ambiente sano; IX. A la no discriminaci\u00F3n en los t\u00E9rminos de la Constituci\u00F3n Pol\u00EDtica de los Estados Unidos Mexicanos, la particular del Estado, la presente ley y dem\u00E1s disposiciones aplicables; X. A la infraestructura social b\u00E1sica; y XI. A la participaci\u00F3n en los procesos de desarrollo social y humano. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Ley de Igualdad entre Mujeres y Hombres del Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Art\u00EDculo 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " La presente Ley es de orden p\u00FAblico, de inter\u00E9s social y de observancia general en el Estado de Chihuahua, y tiene por objeto regular, proteger y garantizar el cumplimiento de las obligaciones en materia de igualdad entre el hombre y la mujer, mediante la eliminaci\u00F3n de todas las formas de discriminaci\u00F3n contra la mujer en los \u00E1mbitos p\u00FAblico y privado, as\u00ED como el establecimiento de acciones afirmativas a favor de las mujeres y de mecanismos institucionales que establezcan criterios y orienten a las autoridades competentes del Estado de Chihuahua en el cumplimiento de esta Ley. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Ley de Igualdad entre Mujeres y Hombres del Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Art\u00EDculo 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Son sujetos de los derechos que establece esta Ley, las mujeres y los hombres que se encuentren en territorio estatal, que por raz\u00F3n de su sexo, independientemente de su edad, estado civil, profesi\u00F3n, cultura, origen \u00E9tnico o nacional, condici\u00F3n social, salud, religi\u00F3n, opini\u00F3n o capacidades diferentes, se encuentren con alg\u00FAn tipo de desventaja ante la violaci\u00F3n del principio de igualdad que esta Ley tutela. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Ley de Desarrollo Social y Humano para el Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Art\u00EDculo 17; Fracciones I a la VI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Los objetivos de la pol\u00EDtica estatal son: I. Garantizar las condiciones que aseguren el disfrute de los derechos sociales. II. Promover un desarrollo econ\u00F3mico con sentido social que propicie las condiciones para conservar el empleo, elevar el nivel de ingreso y mejorar su distribuci\u00F3n. III. Promover y fortalecer el desarrollo arm\u00F3nico regional y municipal. IV. Superar las condiciones de pobreza, desigualdad, marginaci\u00F3n, vulnerabilidad, discriminaci\u00F3n y exclusi\u00F3n presentes en la sociedad. V. Propiciar las condiciones para la participaci\u00F3n consciente, organizada y activa de la sociedad en la formulaci\u00F3n, ejecuci\u00F3n, evaluaci\u00F3n y control de los programas y proyectos, en los t\u00E9rminos de la presente ley; trat\u00E1ndose de pueblos y comunidades ind\u00EDgenas, se estar\u00E1 a las modalidades previstas en la ley de la materia. VI. Promover el desarrollo social y humano. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Ley General de Desarrollo Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Art\u00EDculo 18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Los programas, fondos y recursos destinados al desarrollo social son prioritarios y de inter\u00E9s p\u00FAblico, por lo cual ser\u00E1n objeto de seguimiento y evaluaci\u00F3n de acuerdo con esta Ley; y no podr\u00E1n sufrir disminuciones en sus montos presupuestales, excepto en los casos y t\u00E9rminos que establezca la C\u00E1mara de Diputados al aprobar el Presupuesto de Egresos de la Federaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Ley General de Desarrollo Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Art\u00EDculo 19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Son prioritarios y de inter\u00E9s p\u00FAblico: I. Los programas de educaci\u00F3n obligatoria; II. Las campa\u00F1as de prevenci\u00F3n y control de enfermedades transmisibles y los programas de atenci\u00F3n m\u00E9dica; III. Los programas dirigidos a las personas en condiciones de pobreza, marginaci\u00F3n o en situaci\u00F3n de vulnerabilidad; IV. Los programas dirigidos a zonas de atenci\u00F3n prioritaria; V. Los programas y acciones p\u00FAblicas para asegurar la alimentaci\u00F3n nutritiva y de calidad y nutrici\u00F3n materno-infantil; VI. Los programas de abasto social de productos b\u00E1sicos; VII. Los programas de vivienda; VIII. Los programas y fondos p\u00FAblicos destinados a la generaci\u00F3n y conservaci\u00F3n del empleo, a las actividades productivas sociales y a las empresas del sector social de la econom\u00EDa, y IX. Los programas y obras de infraestructura para agua potable, drenaje, electrificaci\u00F3n, caminos y otras v\u00EDas de comunicaci\u00F3n, saneamiento ambiental y equipamiento urbano. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Ley de Desarrollo Social y Humano para el Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Art\u00EDculo 24; Fracciones I a la XI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Los recursos destinados a programas y proyectos para el\ndesarrollo social y humano son prioritarios y de inter\u00E9s p\u00FAblico, por\nlo que ser\u00E1n objeto de seguimiento y evaluaci\u00F3n de acuerdo con\nesta ley y dem\u00E1s disposiciones aplicables, especialmente los\ndirigidos a:\nI. Educaci\u00F3n obligatoria;\nII. Promoci\u00F3n de la salud, prevenci\u00F3n y control de enfermedades\ntransmisibles y atenci\u00F3n m\u00E9dica;\nIII. Personas en condiciones de pobreza, desigualdad,\nmarginaci\u00F3n, discriminaci\u00F3n, exclusi\u00F3n o en situaci\u00F3n de\nvulnerabilidad;\nIV. Prevenir, atender y erradicar la violencia de g\u00E9nero;\nV. Zonas de atenci\u00F3n prioritaria;\nVI. Alimentaci\u00F3n y nutrici\u00F3n;\nVII. Abasto social de productos b\u00E1sicos;\nVIII. Vivienda;\nIX. Generaci\u00F3n y conservaci\u00F3n del empleo, actividades\nproductivas y empresas del sector social de la econom\u00EDa;\nX. Obras de infraestructura para agua potable, drenaje,\nelectrificaci\u00F3n, caminos y otras v\u00EDas de comunicaci\u00F3n, saneamiento\nambiental y equipamiento urbano; y\nXI. Atenci\u00F3n de personas y grupos vulnerables, v\u00EDctimas de\ndesastres naturales, cat\u00E1strofes o situaciones de emergencia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Ley de Desarrollo Social y Humano para el Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Art\u00EDculo 31 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " El Ejecutivo del Estado y los ayuntamientos deber\u00E1n elaborar y publicar en el Peri\u00F3dico Oficial, las reglas de operaci\u00F3n de los programas en la materia, incluidos en el presupuesto de egresos, as\u00ED como la metodolog\u00EDa, normatividad, calendarizaci\u00F3n y las asignaciones correspondientes a las diversas regiones y municipios de la entidad, sin perjuicio de transparentar de oficio la informaci\u00F3n p\u00FAblica establecida en la correspondiente ley. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Ley de Disciplina Financiera de las Entidades Federativas y los Municipios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Art\u00EDculo 13, fracci\u00F3n VII ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Una vez aprobado el Presupuesto de Egresos, para el ejercicio del gasto, las Entidades Federativas deber\u00E1n observar las disposiciones siguientes: VII.- En materia de subsidios se deber\u00E1 identificar la poblaci\u00F3n objetivo, el prop\u00F3sito o destino principal y la temporalidad de su otorgamiento. Los mecanismos de distribuci\u00F3n, operaci\u00F3n y administraci\u00F3n de los subsidios deber\u00E1n garantizar que los recursos se entreguen a la poblaci\u00F3n objetivo y reduzcan los gastos administrativos del programa correspondiente. La informaci\u00F3n se\u00F1alada en el p\u00E1rrafo anterior deber\u00E1 hacerse p\u00FAblica a trav\u00E9s de las p\u00E1ginas oficiales de Internet de las secretar\u00EDas de finanzas o sus equivalentes de los gobiernos locales, y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Ley General de Desarrollo Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Art\u00EDculo 10, fracci\u00F3n II ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Los beneficiarios de los programas de desarrollo social tienen los siguientes derechos y obligaciones: II) Acceder a la informaci\u00F3n necesaria de dichos programas, sus reglas de operaci\u00F3n, recursos y cobertura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Ley General de Transparencia y Acceso a la Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Art\u00EDculo 77, fracci\u00F3n XV, inciso o) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " En la Ley Federal y de las Entidades Federativas se contemplar\u00E1 que los sujetos obligados pongan a disposici\u00F3n del p\u00FAblico y mantengan actualizada, en los respectivos medios electr\u00F3nicos, de acuerdo con sus facultades, atribuciones, funciones u objeto social, seg\u00FAn corresponda, la informaci\u00F3n, por lo menos, de los temas, documentos y pol\u00EDticas que a continuaci\u00F3n se se\u00F1alan: XV. La informaci\u00F3n de los programas de subsidios, est\u00EDmulos y apoyos, en el que se deber\u00E1 informar respecto de los programas de transferencia, de servicios, de infraestructura social y de subsidio, en los que se deber\u00E1 contener lo siguiente: o) V\u00EDnculo a las reglas de operaci\u00F3n o Documento equivalente; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Ley de Presupuesto de Egresos, Contabilidad Gubernamental y Gasto P\u00FAblico del Estado de Chihuahua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Art\u00EDculo 136 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Los entes p\u00FAblicos y los municipios publicar\u00E1n en Internet la informaci\u00F3n sobre los montos pagados durante el periodo por concepto de ayudas y subsidios a los sectores econ\u00F3micos y sociales, identificando el nombre del beneficiario, y en lo posible la Clave \u00DAnica de Registro de Poblaci\u00F3n cuando el beneficiario sea persona f\u00EDsica, o el Registro Federal de Contribuyentes con Homo clave cuando sea persona moral o persona f\u00EDsica con actividad empresarial y profesional, y el monto recibido. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Ley General de Desarrollo Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Art\u00EDculo 27 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Con el prop\u00F3sito de asegurar la equidad y eficacia de los programas de desarrollo social, el Gobierno Federal, por conducto de la Secretar\u00EDa y los gobiernos de las entidades federativas y de los municipios, en el \u00E1mbito de sus respectivas competencias, integrar\u00E1n el Padr\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Ley General de Transparencia y Acceso a la Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Art\u00EDculo 70, fracci\u00F3n XV, inciso o) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " En la Ley Federal y de las Entidades Federativas se contemplar\u00E1 que los sujetos obligados pongan a disposici\u00F3n del p\u00FAblico y mantengan actualizada, en los respectivos medios electr\u00F3nicos, de acuerdo con sus facultades, atribuciones, funciones u objeto social, seg\u00FAn corresponda, la informaci\u00F3n, por lo menos, de los temas, documentos y pol\u00EDticas que a continuaci\u00F3n se se\u00F1alan: XV. La informaci\u00F3n de los programas de subsidios, est\u00EDmulos y apoyos, en el que se deber\u00E1 informar respecto de los programas de transferencia, de servicios, de infraestructura social y de subsidio, en los que se deber\u00E1 contener lo siguiente: q) Padr\u00F3n de beneficiarios mismo que deber\u00E1 contener los siguientes datos: nombre de la persona f\u00EDsica o denominaci\u00F3n social de las personas morales beneficiarias, el monto, recurso, beneficio o apoyo otorgado para cada una de ellas, unidad territorial, en su caso, edad y sexo; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " DERECHOS SOCIALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " DESCRIPCI\u00D3N DE LOS DERECHOS SOCIALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " ALIMENTACI\u00D3N Y\nNUTRICI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Toda persona tiene derecho a una nutrici\u00F3n adecuada, a no padecer de malnutrici\u00F3n\ny hambre a fin de poder desarrollarse plenamente y conservar sus capacidades\nf\u00EDsicas y mentales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " NO\nDISCRIMINACI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Todas las personas son iguales ante la ley y tiene derecho a la aplicaci\u00F3n de\nmedidas destinadas a proteger la salud y el bienestar de las personas; y a que se\nestablezcan y mantengan las condiciones adecuadas para alcanzar un estado\n\u00F3ptimo de bienestar f\u00EDsico, mental y social. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " EDUCACI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Toda persona tiene derecho a la educaci\u00F3n para el pleno desarrollo de la\npersonalidad humana y el fortalecimiento de las libertades fundamentales; favorecer\u00E1\nla comprensi\u00F3n, la tolerancia y la amistad entre todas las naciones y todos los grupos\n\u00E9tnicos o religiosos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " MEDIO AMBIENTE\nSANO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Toda persona tiene derecho a la protecci\u00F3n y mejora del medio ambiente para\npreservar el entorno propicio para la existencia y desarrollo de la vida humana. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " SALUD Y DEPORTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Toda persona tiene derecho a la aplicaci\u00F3n de medidas destinadas a proteger la\nsalud y el bienestar de las personas; y a que se establezcan y mantengan las\ncondiciones adecuadas para alcanzar un estado \u00F3ptimo de bienestar f\u00EDsico, mental y\nsocial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " SEGURIDAD SOCIAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Toda persona tiene derecho a la seguridad social y a obtener, mediante el esfuerzo\nnacional y la cooperaci\u00F3n internacional, habida cuenta de la organizaci\u00F3n y los\nrecursos de cada Estado, la satisfacci\u00F3n de los derechos econ\u00F3micos, sociales y\nculturales, indispensables a su dignidad y al libre desarrollo de su personalidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " TRABAJO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Toda persona tiene derecho al trabajo, a la libre elecci\u00F3n de su trabajo, a la\nprotecci\u00F3n contra el desempleo, a una remuneraci\u00F3n equitativa y satisfactoria, a\nfundar sindicatos y a sindicarse para la defensa de sus intereses, que le asegure, as\u00ED\ncomo a su familia, una existencia conforme a la dignidad humana. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " VIVIENDA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Toda persona tiene derecho a un nivel de vida adecuado que le asegure, as\u00ED como a\nsu familia, la provisi\u00F3n de una vivienda para mejora continua de las condiciones de\nexistencia en particular a las personas de ingresos reducidos y las familias\nnumerosas tanto en las zonas rurales como en las urbanas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " VIDA LIBRE DE\nVIOLENCIA DE\nG\u00C9NERO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Favorece su desarrollo y bienestar conforme a los principios de igualdad y de no\ndiscriminaci\u00F3n, as\u00ED como garantizar la democracia, el desarrollo integral y sustentable\nque fortalezca la soberan\u00EDa y el r\u00E9gimen democr\u00E1tico establecidos en la Constituci\u00F3n\nPol\u00EDtica de los Estados Unidos Mexicanos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " PARTICIPACI\u00D3N\nSOCIAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Derecho de las personas y organizaciones a intervenir e integrarse, individual o\ncolectivamente, en la formulaci\u00F3n, ejecuci\u00F3n y evaluaci\u00F3n de las pol\u00EDticas, programas\ny proyectos del desarrollo social y humano. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " INFRAESTRUCTURA\nSOCIAL B\u00C1SICA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Aquellas obras de infraestructura social que son necesarias para asegurar el disfrute\ny ejercicio de los Derechos Sociales , por ejemplo, infraestructura para agua potable,\nalcantarillado, drenaje y letrinas, urbanizaci\u00F3n, electrificaci\u00F3n rural y de colonias\npobres, infraestructura b\u00E1sica del sector salud y educativo, mejoramiento de\nvivienda, comedores, as\u00ED como mantenimiento de infraestructura.\nSe considera como Infraestructura Social B\u00E1sica ya que a trav\u00E9s de su desarrollo, se\nconsigue contribuir al avance en el cumplimiento de algunos de los indicadores de la\npobreza:\n\u2022 Rezago educativo\n\u2022 Acceso a los servicios de salud\n\u2022 Calidad y espacios en la vivienda\n\u2022 Acceso a los servicios b\u00E1sicos en vivienda\n\u2022 Acceso a la alimentaci\u00F3n\n\u2022 Grado de accesibilidad a carretera pavimentada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background-color: #e4edf2;\r\n    height: 100%;\r\n  }\r\n\r\n  \r\n.full-centered[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: center;\r\n}\r\n\r\n  \r\n.full-left[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: left;\r\n  text-align: left;\r\n}\r\n\r\n  \r\n.full-right[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: flex-end;\r\n  text-align: right;\r\n}\r\n\r\n  \r\n.no-margin[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n  \r\n.margin-hori-10-5[_ngcontent-%COMP%] {\r\n  margin: 10px 5px;\r\n}\r\n\r\n  \r\n.ma-l-70[_ngcontent-%COMP%] {\r\n  margin-left: 70px;\r\n}\r\n\r\n  \r\n.bg-header-images[_ngcontent-%COMP%] {\r\n  background-color: #a8a8a8 !important;\r\n}\r\n\r\n  \r\n.font-normal[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n\r\n  \r\n.no-padding[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n\r\n  \r\n.pd-10[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n  \r\n.pd-10-l[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n}\r\n\r\n  \r\n.pd-10-r[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n  \r\n.pd-10-t-b[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n}\r\n\r\n  \r\n.pd-15[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n  \r\n.title-table[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n  background-color: #122E5E;\r\n  color: whitesmoke;\r\n  border: 1px #000000 solid;\r\n}\r\n\r\n  \r\n.description-table[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  background-color: #e7e7e7;\r\n  color: #1a1a1a;\r\n  border: 1px #000000 solid;\r\n}\r\n\r\n  \r\n.concept-table[_ngcontent-%COMP%]{\r\n    color: #1a1a1a;\r\n    border: 1px #000000 solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uY2VwdHMtYmFzaXMtcmlnaHRzL2NvbmNlcHRzLWJhc2lzLXJpZ2h0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7O0FBR0Y7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29uY2VwdHMtYmFzaXMtcmlnaHRzL2NvbmNlcHRzLWJhc2lzLXJpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZGYyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5mdWxsLWNlbnRlcmVkIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZnVsbC1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZnVsbC1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm8tbWFyZ2luIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm1hcmdpbi1ob3JpLTEwLTUge1xyXG4gIG1hcmdpbjogMTBweCA1cHg7XHJcbn1cclxuXHJcbi5tYS1sLTcwIHtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG5cclxuLmJnLWhlYWRlci1pbWFnZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGE4YTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtbm9ybWFsIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBkLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucGQtMTAtbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucGQtMTAtciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBkLTEwLXQtYiB7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5wZC0xNSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnRpdGxlLXRhYmxlIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjJFNUU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAxcHggIzAwMDAwMCBzb2xpZDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRhYmxlIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbiAgYm9yZGVyOiAxcHggIzAwMDAwMCBzb2xpZDtcclxufVxyXG5cclxuLmNvbmNlcHQtdGFibGV7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGJvcmRlcjogMXB4ICMwMDAwMDAgc29saWQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptsBasisRightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-concepts-basis-rights',
                templateUrl: './concepts-basis-rights.component.html',
                styleUrls: ['./concepts-basis-rights.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/glosary/glosary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/glosary/glosary.component.ts ***!
  \****************************************************/
/*! exports provided: GlosaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlosaryComponent", function() { return GlosaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GlosaryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlosaryComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.apiDataService.actualMessageServer, " ");
} }
function GlosaryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlosaryComponent_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.apiDataService.actualMessageServer, " ");
} }
class GlosaryComponent {
    constructor(apiDataService) {
        this.apiDataService = apiDataService;
    }
    ngOnInit() {
    }
}
GlosaryComponent.ɵfac = function GlosaryComponent_Factory(t) { return new (t || GlosaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"])); };
GlosaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlosaryComponent, selectors: [["app-glosary"]], decls: 131, vars: 3, consts: [["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "wrapper"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], [1, "card-box", 2, "text-align", "-webkit-center"], [1, "card"], [1, "card-body"], [1, "row", "full-centered", "no-margin", "pd-15", "title-table"], [1, "row", "full-left", "no-margin", "pd-15", "description-table"], [1, "row", "no-margin"], [1, "col-3", "full-left", "pd-15", "description-table"], [1, "col-9", "full-left", "pd-15", "concept-table"], [1, "col-12", "full-left", "pd-15"], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], [3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"]], template: function GlosaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GlosaryComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlosaryComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlosaryComponent_Template_button_click_11_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " GLOSARIO DE T\u00C9RMINOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Para efectos del presente Clasificador de Programas Presupuestarios con Enfoque Social, se definen los siguientes conceptos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Apoyos sociales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Asignaciones tangibles o intangibles (servicios) que los Entes P\u00FAblicos otorgan a personas, instituciones y diversos sectores de la poblaci\u00F3n para prop\u00F3sitos sociales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Beneficiario/a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Persona de la poblaci\u00F3n atendida que re\u00FAne los requisitos de acuerdo con la normatividad correspondiente y que recibe un bien de forma directa o indirecta, a trav\u00E9s de una ayuda y/o subsidio del presupuesto p\u00FAblico. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Desarrollo de Capacidades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " El desarrollo de capacidades se refiere a las transformaciones que empoderan a las personas, los l\u00EDderes, las organizaciones y las sociedades. Es el proceso a trav\u00E9s del cual los individuos, organizaciones y sociedades obtienen, fortalecen o mantienen las capacidades para establecer y lograr sus propios objetivos de desarrollo a lo largo del tiempo (UNDP, 2009). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Derechos Sociales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Aquellos que se estipulan en el Art\u00EDculo 6 de la Ley de Desarrollo Social y Humano para el Estado de Chihuahua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Entes P\u00FAblicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Se refiere a los Poderes Ejecutivo, Legislativo y Judicial; Organismos Aut\u00F3nomos por disposici\u00F3n constitucional y Entidades de la Administraci\u00F3n P\u00FAblica Paraestatal del Poder Ejecutivo Estatal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Infraestructura social b\u00E1sica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Aquellas obras de infraestructura social que son necesarias para asegurar el disfrute y ejercicio de los Derechos Sociales , por ejemplo, infraestructura para agua potable, alcantarillado, drenaje y letrinas, urbanizaci\u00F3n, electrificaci\u00F3n rural y de colonias pobres, infraestructura b\u00E1sica del sector salud y educativo, mejoramiento de vivienda, comedores, as\u00ED como mantenimiento de infraestructura. Se considera como Infraestructura Social B\u00E1sica ya que a trav\u00E9s de su desarrollo, se consigue contribuir al avance en el cumplimiento de algunos de los indicadores de la pobreza: \u2022 Rezago educativo \u2022 Acceso a los servicios de salud \u2022 Calidad y espacios en la vivienda \u2022 Acceso a los servicios b\u00E1sicos en vivienda \u2022 Acceso a la alimentaci\u00F3n \u2022 Grado de accesibilidad a carretera pavimentada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Pol\u00EDtica P\u00FAblica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Corresponde a una soluci\u00F3n espec\u00EDfica de c\u00F3mo manejar los asuntos p\u00FAblicos, es un factor com\u00FAn de la pol\u00EDtica y de las decisiones del gobierno y de la oposici\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Padr\u00F3n de Beneficiarios(as) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Relaci\u00F3n de beneficiarios que incluye a las personas atendidas por los programas federales, estatales y especiales, cuyos criterios de selecci\u00F3n y perfil socioecon\u00F3mico se establece en las reglas de operaci\u00F3n de los programas presupuestarios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Reglas de Operaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Son un conjunto de disposiciones que precisan la forma de operar un programa, con el prop\u00F3sito de lograr los niveles esperados de eficacia, eficiencia, equidad y transparencia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Perspectiva de G\u00E9nero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Concepto que se refiere a la metodolog\u00EDa y los mecanismos que facilitan identificar, cuestionar y valorar la discriminaci\u00F3n, la desigualdad y la exclusi\u00F3n de las mujeres o de los hombres, que se pretende justificar con base en las diferencias biol\u00F3gicas entre mujeres y hombres, as\u00ED como las acciones que deben emprenderse para crear las condiciones de cambio que permitan avanzar en la construcci\u00F3n de la equidad de g\u00E9nero; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Poblaci\u00F3n Objetivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Poblaci\u00F3n que el Programa Presupuestario, tiene planeado o programado atender con los recursos disponibles, y que cumple con los criterios de elegibilidad establecidos en su normatividad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Poblaci\u00F3n Potencial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Poblaci\u00F3n total que presenta la necesidad y/o problema que justifica la existencia del Programa Presupuestario y que por lo tanto pudiera ser elegible para su atenci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Poblaci\u00F3n Atendida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Poblaci\u00F3n beneficiada por el Programa Presupuestario en un ejercicio fiscal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Programa Presupuestario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Oferta de soluci\u00F3n a un problema que padece una poblaci\u00F3n espec\u00EDfica; es una unidad de asignaci\u00F3n de recursos que se identifique financiera y contablemente, as\u00ED como una \"unidad b\u00E1sica de gerencia y control de resultados\" . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Subsidios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Las asignaciones de recursos previstos en los presupuestos de los Entes P\u00FAblicos, que se otorgan a los diferentes sectores de la sociedad para fomentar el desarrollo de actividades sociales o econ\u00F3micas prioritarias de inter\u00E9s general. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Vulnerabilidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Aquellas poblaciones consideradas como vulnerables por carencias sociales, que se define como la poblaci\u00F3n que presenta una o m\u00E1s carencias sociales, pero cuyo ingreso es superior a la l\u00EDnea de bienestar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Ley General de Desarrollo Social, Art. 31, numeral 4; Ley de Desarrollo Social y Humano para el Estado de Chihuahua, Art. 35, fracci\u00F3n IV. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Presupuesto de Egresos del Estado de Chihuahua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background-color: #e4edf2;\r\n    height: 100%;\r\n  }\r\n\r\n  \r\n.full-centered[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: center;\r\n}\r\n\r\n  \r\n.full-left[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: left;\r\n  text-align: left;\r\n}\r\n\r\n  \r\n.full-right[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  justify-content: flex-end;\r\n  text-align: right;\r\n}\r\n\r\n  \r\n.no-margin[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n  \r\n.margin-hori-10-5[_ngcontent-%COMP%] {\r\n  margin: 10px 5px;\r\n}\r\n\r\n  \r\n.ma-l-70[_ngcontent-%COMP%] {\r\n  margin-left: 70px;\r\n}\r\n\r\n  \r\n.bg-header-images[_ngcontent-%COMP%] {\r\n  background-color: #a8a8a8 !important;\r\n}\r\n\r\n  \r\n.font-normal[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n\r\n  \r\n.no-padding[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n\r\n  \r\n.pd-10[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n  \r\n.pd-10-l[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n}\r\n\r\n  \r\n.pd-10-r[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n  \r\n.pd-10-t-b[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n}\r\n\r\n  \r\n.pd-15[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n  \r\n.title-table[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n  background-color: #122E5E;\r\n  color: whitesmoke;\r\n  border: 1px #000000 solid;\r\n}\r\n\r\n  \r\n.description-table[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  background-color: #e7e7e7;\r\n  color: #1a1a1a;\r\n  border: 1px #000000 solid;\r\n}\r\n\r\n  \r\n.concept-table[_ngcontent-%COMP%]{\r\n    color: #1a1a1a;\r\n    border: 1px #000000 solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2xvc2FyeS9nbG9zYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOzs7QUFHRjtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9nbG9zYXJ5L2dsb3NhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWRmMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIFxyXG4uZnVsbC1jZW50ZXJlZCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZ1bGwtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZ1bGwtcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5vLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4taG9yaS0xMC01IHtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG59XHJcblxyXG4ubWEtbC03MCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn1cclxuXHJcbi5iZy1oZWFkZXItaW1hZ2VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhOGE4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb250LW5vcm1hbCB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5wZC0xMCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnBkLTEwLWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBkLTEwLXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wZC0xMC10LWIge1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4ucGQtMTUge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZS10YWJsZSB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyRTVFO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMXB4ICMwMDAwMDAgc29saWQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10YWJsZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gIGNvbG9yOiAjMWExYTFhO1xyXG4gIGJvcmRlcjogMXB4ICMwMDAwMDAgc29saWQ7XHJcbn1cclxuXHJcbi5jb25jZXB0LXRhYmxle1xyXG4gICAgY29sb3I6ICMxYTFhMWE7XHJcbiAgICBib3JkZXI6IDFweCAjMDAwMDAwIHNvbGlkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlosaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glosary',
                templateUrl: './glosary.component.html',
                styleUrls: ['./glosary.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r183.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r181.apiDataService.actualMessageServer, " ");
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r185.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r182.apiDataService.actualMessageServer, " ");
} }
class LoginComponent {
    constructor(apiDataService, route) {
        this.apiDataService = apiDataService;
        this.route = route;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
        this.apiDataService.checkLogin((success) => {
            //this.apiDataService.showNotification(0,success.message,6000);
            /* console.log(success) */
            switch (this.apiDataService.user.rolusuario) {
                case 0:
                    this.route.navigateByUrl('/admin-dashboard');
                    break;
                case 1:
                    this.route.navigateByUrl('/validations');
                    break;
                case 2: //Usuario que registra los programas
                    this.route.navigateByUrl('/register-program');
                    break;
                case 3:
                    this.route.navigateByUrl('/validations');
                    break;
            }
        }, (error) => {
            /* console.log("error") */
            /* console.log(error); */
            //this.apiDataService.showNotification(1,error.message,6000);
        });
    }
    login() {
        if (this.password == "" && this.username == "") {
            this.apiDataService.showNotification(1, "Usuario y/ó contraseña invalidos", 6000);
        }
        else if (this.username == "") {
            this.apiDataService.showNotification(1, "Usuario invalido", 6000);
        }
        else if (this.password == "") {
            this.apiDataService.showNotification(1, "Contraseña invalida", 6000);
        }
        else {
            this.apiDataService.doLogin(this.username, this.password).subscribe((result) => {
                if (result.error) {
                    // en caso de que en el servidor NO haga el login
                    this.apiDataService.showNotification(1, result.message, 6000);
                }
                else {
                    // en caso de que en el servidor SI haga el login
                    this.apiDataService.showNotification(0, result.message, 6000);
                    console.log(result);
                    this.apiDataService.user = result.data.user;
                    this.apiDataService.user.password = this.password;
                    this.apiDataService.token = result.data.token;
                    this.apiDataService.user.token = result.data.token;
                    //console.log(this.apiDataService.user);
                    this.apiDataService.awaitTime(0, () => {
                        localStorage.setItem('user', JSON.stringify(this.apiDataService.user));
                        switch (result.data.user.rolusuario) {
                            case 0:
                                this.route.navigateByUrl('/admin-dashboard');
                                break;
                            case 1:
                                this.route.navigateByUrl('/validations');
                                break;
                            case 2: //Usuario que registra los programas
                                this.route.navigateByUrl('/register-program');
                                break;
                            case 3:
                                this.route.navigateByUrl('/validations');
                                break;
                        }
                    });
                }
            }, (error) => {
                console.log("error");
                console.log(error);
                this.apiDataService.showNotification(1, "Ups algo salio mal!", 6000);
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 4, consts: [[1, "container-fluid", 2, "height", "100vh"], ["src", "/assets/images/logo-trans.png", 1, "logo-flotante"], ["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "row", "fullpage-centered", "disp-flex-aljs-center", 2, "background-image", "url(./assets/images/img2.jpg)", "background-size", "cover"], [1, "card-box", 2, "text-align", "-webkit-center"], [1, "card", 2, "width", "90%"], ["src", "/assets/images/fondo_titulo_login.jpg", 1, "card-img-top", 2, "height", "70px"], [1, "card-body", 2, "padding", "0px 45px"], [1, "row", "justify-center", 2, "padding", "10px 0"], [2, "padding-top", "10px", "font-weight", "600", "font-size", "x-large"], [1, "row"], [1, ""], ["placeholder", "Ingrese su usuario", 1, "input-group-text", "full-width", "text-left", 3, "ngModel", "ngModelChange"], [1, "", 2, "padding-top", "10px"], ["type", "password", "placeholder", "Ingrese su contrase\u00F1a", 1, "input-group-text", "full-width", "text-left", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "row", "justify-center", 2, "padding", "15px 0px"], [1, "btn", "btn-primary", "login-btn", 2, "background-color", "#29333f", "border-color", "transparent", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], ["href", "#", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio de sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_21_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".fullpage-centered[_ngcontent-%COMP%]{\r\n    height: -webkit-fill-available;\r\n    align-content: center;\r\n    background-position: center;\r\n}\r\n\r\n.logo-flotante[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 19px;\r\n    right: 19px;\r\n    height: 79px;\r\n}\r\n\r\n.disp-flex-aljs-center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n  box-shadow: 13px 12px 47px 0px rgba(84,84,84,.5);\r\n}\r\n\r\n.justify-center[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  transition: .3s ease-in-out;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  border-bottom: 1px solid #939393;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n  border-color: transparent !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHBhZ2UtY2VudGVyZWR7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvLWZsb3RhbnRle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxOXB4O1xyXG4gICAgcmlnaHQ6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDc5cHg7XHJcbn1cclxuLmRpc3AtZmxleC1hbGpzLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQtYm94IC5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDEzcHggMTJweCA0N3B4IDBweCByZ2JhKDg0LDg0LDg0LC41KTtcclxufVxyXG4uanVzdGlmeS1jZW50ZXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW5wdXR7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MzkzOTM7XHJcbn1cclxuLmxvZ2luLWJ0bntcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/register-program/register-program.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/register-program/register-program.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProgramComponent", function() { return RegisterProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function RegisterProgramComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_15_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", program_r36.idprograma);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", program_r36.clave_presupuestaria, " ", program_r36.nombre_programa, "");
} }
function RegisterProgramComponent_div_15_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_99_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.pregunta1.sujetoOtroText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r17.pregunta1.sujetoOtroText);
} }
function RegisterProgramComponent_div_15_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*Puede seleccionar varias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_15_div_122_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r39.pregunta2.derechos[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A la salud y deporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r41.pregunta2.derechos[1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A la seguridad social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r42.pregunta2.derechos[2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Al trabajo y el goce de sus condiciones equitativas y satisfactorias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r43.pregunta2.derechos[3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A la alimentaci\u00F3n y nutrici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r44.pregunta2.derechos[4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A la Educaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r45.pregunta2.derechos[5] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A una vida libre de violencia de g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r46.pregunta2.derechos[6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "A la vivienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r47.pregunta2.derechos[7] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Al medio ambiente sano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r48.pregunta2.derechos[8] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "A la no discriminaci\u00F3n en los t\u00E9rminos de la Constituci\u00F3n Pol\u00EDtica de los Estados Unidos Mexicanos, la particular del Estado, la presente ley y dem\u00E1s disposiciones aplicables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r49.pregunta2.derechos[9] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "A la infraestructura social b\u00E1sica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_122_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r50.pregunta2.derechos[10] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "A la participaci\u00F3n en los procesos de desarrollo social y humano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.pregunta2.derechos[10]);
} }
function RegisterProgramComponent_div_15_div_123_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r51.pregunta2.derechos[11] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A la vida, supervivencia y desarrollo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r53.pregunta2.derechos[12] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "De prioridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r54.pregunta2.derechos[13] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A la identidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r55.pregunta2.derechos[14] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A vivir en familia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r56.pregunta2.derechos[15] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Al descanso, la recreaci\u00F3n y el juego");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r57.pregunta2.derechos[16] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A la participaci\u00F3n y opini\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r58.pregunta2.derechos[17] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "A la asociaci\u00F3n y reuni\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r59.pregunta2.derechos[18] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "A la informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_123_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r60.pregunta2.derechos[19] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Al debido proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[15]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.pregunta2.derechos[19]);
} }
function RegisterProgramComponent_div_15_div_124_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r61.pregunta2.derechos[20] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A la vida con calidad e independencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r63.pregunta2.derechos[21] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A la integridad personal y la dignidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r64.pregunta2.derechos[22] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Al acceso a la justicia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r65.pregunta2.derechos[23] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A la atenci\u00F3n preferente y diferenciada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r66.pregunta2.derechos[24] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A la asistencia social cuando se encuentren en situaci\u00F3n de vulnerabilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r67.pregunta2.derechos[25] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A la protecci\u00F3n contra todo abuso, expltoaci\u00F3n y cualqueir forma de maltrato");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r68.pregunta2.derechos[26] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "A la recreaci\u00F3n y el esparcimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_124_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r69.pregunta2.derechos[27] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "A la participaci\u00F3n plena y efectiva en los \u00E1mbitos de inter\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[21]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[22]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[23]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[24]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[25]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r21.pregunta2.derechos[27]);
} }
function RegisterProgramComponent_div_15_div_125_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r70.pregunta2.derechos[28] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A la igualdad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r72.pregunta2.derechos[29] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A la equidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r73.pregunta2.derechos[30] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A la intimidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r74.pregunta2.derechos[31] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A la integridad f\u00EDsica, sicoemocional y sexual de las mujeres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r75.pregunta2.derechos[32] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A el patrimonio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_125_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r76.pregunta2.derechos[33] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A el pleno ejercicio de los derechos pol\u00EDticos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[28]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[29]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[30]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[31]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[32]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.pregunta2.derechos[33]);
} }
function RegisterProgramComponent_div_15_div_126_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_126_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r77.pregunta2.derechos[34] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A tener en los espacios p\u00FAblicos y privados, abiertos o cerrados, condiciones propicias para su libre y seguro desplazamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_126_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r79.pregunta2.derechos[35] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A disfrutar de los servicios p\u00FAblicos en igualdad de circustancias que cualquier personas sin discapacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_126_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r80.pregunta2.derechos[36] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A asociarse con la finalidad de contribuir a su \u00F3ptima integraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_126_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r81.pregunta2.derechos[37] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A gozar de trato preferente y contar con la ayuda necesaria por parte de quienes prestan atenci\u00F3n al p\u00FAblico en instituciones p\u00FAblicas y privadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r23.pregunta2.derechos[34]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r23.pregunta2.derechos[35]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r23.pregunta2.derechos[36]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r23.pregunta2.derechos[37]);
} }
function RegisterProgramComponent_div_15_div_145_label_28_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_145_label_28_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r83.pregunta3SeleccionOtro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r82.pregunta3SeleccionOtro);
} }
function RegisterProgramComponent_div_15_div_145_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*Puede seleccionar varias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r85.pregunta3Selecciones[0] = !ctx_r85.pregunta3Selecciones[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Personas en condici\u00F3n de pobreza");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r87.pregunta3Selecciones[1] = !ctx_r87.pregunta3Selecciones[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Personas en condici\u00F3n de pobreza extrema");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r88.pregunta3Selecciones[2] = !ctx_r88.pregunta3Selecciones[2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Personas en condici\u00F3n vulnerable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r89.pregunta3Selecciones[3] = !ctx_r89.pregunta3Selecciones[3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Personas habitantes de zonas de atenci\u00F3n prioritaria estatales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r90.pregunta3Selecciones[4] = !ctx_r90.pregunta3Selecciones[4]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Personas habitantes de zonas de atenci\u00F3n prioritaria federales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_145_Template_input_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r91.pregunta3Selecciones[5] = !ctx_r91.pregunta3Selecciones[5]; return ctx_r91.pregunta3SeleccionOtro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterProgramComponent_div_15_div_145_label_28_Template, 2, 1, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.pregunta3Selecciones[5] == true);
} }
function RegisterProgramComponent_div_15_div_162_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_162_div_60_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r93.pregunta5otro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.pregunta5otro);
} }
function RegisterProgramComponent_div_15_div_162_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tipo de apoyo social ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_162_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r95.selectEventP5($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Seleccione una opcion...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Acciones para el monitoreo, protecci\u00F3n, conservaci\u00F3n y/o reforestaci\u00F3n de recursos naturales (aire, agua, bosques, desiertos, selvas y vida silvestre)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Acciones para el suministro y/o supervisi\u00F3n del sistema de agua potable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Actividades recreativas y/o culturales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Alimentaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Apoyo a gestiones administrativas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Apoyo para actividades o proyectos de investigaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Apoyo para actividades o proyectos sociales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Apoyo para adquirir, edificar, terminar, ampliar o modificar la vivienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Apoyo para certificaciones o constancias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Apoyo para el desarrollo de proyectos culturales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Apoyo para el transporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Apoyo y/o financiamiento para el desarrollo, mejora o consolidaci\u00F3n de actividades o proyectos productivos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Beca");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Capacitaci\u00F3n, asesor\u00EDa u orientaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Compensaci\u00F3n garantizada al ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Constucci\u00F3n, mantenimiento, rehabilitaci\u00F3n y/o financiamiento de infraestructura y/u obra p\u00FAblica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Difusi\u00F3n o promoci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Est\u00EDmulo econ\u00F3mico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Financiamiento de servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Insumos o equipo para la producci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Legalizaci\u00F3n de la tenencia de la tierra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Libros y/o material did\u00E1ctico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Material para la salud");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Apoyo para tr\u00E1mites y servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Fortalecimiento de capacidades y/o habilidades para la vida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Servicios p\u00FAblicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "option", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Otro (especifique)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, RegisterProgramComponent_div_15_div_162_div_60_Template, 4, 1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.pregunta5.complemento == 27);
} }
function RegisterProgramComponent_div_15_div_167_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_167_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r97.pregunta4.complemento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r26.pregunta4.complemento);
} }
function RegisterProgramComponent_div_15_div_186_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_186_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r99.pregunta6 = "Directamente"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Directamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_186_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r101.pregunta6 = "Indirectamente"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Indirectamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_186_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r102.pregunta6 = "Directamente e indirectamente"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Directamente e Indirectamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_15_div_187_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_187_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r103.pregunta6 = "directamente"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Aplica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function RegisterProgramComponent_div_15_div_194_input_29_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_194_input_29_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r106.pregunta7Otro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r105.pregunta7Otro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
function RegisterProgramComponent_div_15_div_194_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r108.pregunta7 = "unico"; return ctx_r108.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00DAnica vez");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r110.pregunta7 = "mensual"; return ctx_r110.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r111.pregunta7 = "bimensual"; return ctx_r111.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Bimestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r112.pregunta7 = "trimestral"; return ctx_r112.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Trimestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r113.pregunta7 = "semestral"; return ctx_r113.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Semestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r114.pregunta7 = "anual"; return ctx_r114.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Anual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_194_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r115.pregunta7 = "otro"; return ctx_r115.pregunta7Otro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterProgramComponent_div_15_div_194_input_29_Template, 1, 3, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.pregunta7 == "otro");
} }
function RegisterProgramComponent_div_15_div_195_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_195_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r116.pregunta7 = "unico"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_15_div_212_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_div_212_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r118.selectEventP8($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Garantizar las condiciones que aseguren el disfrute de los derechos sociales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Promover un desarrollo econ\u00F3mico con sentido social que propicie las condiciones para conservar el empleo, elevar el nivel de ingreso y mejorar su distribuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Promover y fortalecer el desarrollo arm\u00F3nico regional y municipal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Superar las condiciones de pobreza, desigualdad, marginaci\u00F3n, vulnerabilidad, discriminaci\u00F3n y exlusi\u00F3n presentes en la sociedad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Propiciar las condiciones para la participaci\u00F3n consciente, organizada y activa de la sociedad en la formulaci\u00F3n, ejecuci\u00F3n, evaluaci\u00F3n y control de los programas y proyectos, en los t\u00E9rminos de la Ley de Desarrollo Humano y Social del Estado de Chihuahua, trat\u00E1ndose de pueblos y comunidades ind\u00EDgenas, se estar\u00E1 a las modalidades previstas en la ley de la materia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Promover el desarrollo social y humano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_15_label_242_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_label_242_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r120.pregunta9SeleccionOtro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r32.pregunta9SeleccionOtro);
} }
function RegisterProgramComponent_div_15_div_294_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_294_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r122.pregunta10.complemento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r33.pregunta10.complemento);
} }
function RegisterProgramComponent_div_15_div_310_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_310_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r124.pregunta11.complemento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r34.pregunta11.complemento);
} }
function RegisterProgramComponent_div_15_div_326_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_div_326_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r126.pregunta12.complemento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r35.pregunta12.complemento);
} }
function RegisterProgramComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Clasificaci\u00F3n program\u00E1tica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En virtud de que los recursos destinados a programas y proyectos para el desarrollo social y humano son prioritarios y de inter\u00E9s p\u00FAblico; y con el prop\u00F3sito de coadyuvar al pleno ejercicio de los derechos y el acceso al desarrollo social; es necesario determinar cu\u00E1les de los Programas presupuestarios cuentan con enfoque social, partiendo de la atenci\u00F3n a un derecho; y cu\u00E1les tienen por fin el desarrollo social, atendiendo a la situaci\u00F3n de vulnerabilidad que les coloca en desventaja. Esta clasificaci\u00F3n y distinci\u00F3n servir\u00E1 de herramienta de consulta y an\u00E1lisis de informaci\u00F3n para contribuir a la transparencia y a la rendici\u00F3n de cuentas, y a su vez omo instrumento a fin de determinar que Programas presupuestarios deben contar conReglas de Operaci\u00F3n y/o Padr\u00F3n Beneficiarios. Para ello, la Secretar\u00EDa de Desarrollo Social en coordinacion con la Secretaria de Hacienda, realiza un inventario estatal de los Programas presupuestarios a trav\u00E9s del Clasificador de Programas Presupuestarios con Enfoque Social 2021. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Glosario de T\u00E9rminos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Fundamento Jur\u00EDdico, y Derechos Sociales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "1/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Seleccione clave y nombre del Programa presupuestario.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_select_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r128.selectEventProgram($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegisterProgramComponent_div_15_option_35_Template, 2, 3, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "2/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00BFCu\u00E1l es el o los sujetos de derecho que atiende el Programa presupuestario?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "*Puede seleccionar varias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r130.pregunta1.sujetoninasninos = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Ni\u00F1as y ni\u00F1os de 0 a 11 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r131.pregunta1.sujetoadolescentes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Adolescentes de 12 a 17 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r132.pregunta1.sujetojovenes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "J\u00F3venes de 18 a 29 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r133.pregunta1.sujetomujeres = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Mujeres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r134.pregunta1.sujetomayores60 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Personas mayores 60 o m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r135.pregunta1.sujetodiscapacidad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Personas con discapacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r136.pregunta1.sujetoindigenas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Personas ind\u00EDgenas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r137.pregunta1.sujetojornaleras = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Personas jornaleras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r138.pregunta1.sujetomigrantes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Personas migrantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r139.pregunta1.sujetoadultas30a59 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Personas adultas de 30 a 59 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r140.pregunta1.sujetofamilias = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Familias o comunidades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r141.pregunta1.sujetosociedadcivil = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Organizaciones de la Sociedad Civil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r142.pregunta1.sujetootro = $event; })("change", function RegisterProgramComponent_div_15_Template_input_change_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r143.pregunta1.sujetoOtroText = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Otro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, RegisterProgramComponent_div_15_div_99_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_input_ngModelChange_102_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r144.pregunta1.noaplica = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "No aplica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "3/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\u00BFEl Programa presupuestario est\u00E1 alineado a alg\u00FAn derecho humano-social?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r145.pregunta2.value = "si"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_119_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r146.pregunta2.value = "no"; return ctx_r146.clearDataPregunta2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, RegisterProgramComponent_div_15_div_121_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, RegisterProgramComponent_div_15_div_122_Template, 35, 11, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, RegisterProgramComponent_div_15_div_123_Template, 29, 9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, RegisterProgramComponent_div_15_div_124_Template, 26, 8, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, RegisterProgramComponent_div_15_div_125_Template, 20, 6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, RegisterProgramComponent_div_15_div_126_Template, 14, 4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "4/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\u00BFEl programa atiende poblaci\u00F3n en alguna condici\u00F3n de vulnerabilidad?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r147.pregunta3.value = "si"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r148.pregunta3.value = "no"; return ctx_r148.pregunta3.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, RegisterProgramComponent_div_15_div_145_Template, 32, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "5/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "\u00BFEn cu\u00E1l o cu\u00E1les de las siguientes categor\u00EDas se clasifican los bienes y/o servicios del Programa presupuestario?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "*Seleccione m\u00EDnimo una opci\u00F3n. Puede seleccionar varias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_159_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r149.pregunta4Selecciones[0] = !ctx_r149.pregunta4Selecciones[0]; ctx_r149.pregunta5.value == "si" ? ctx_r149.pregunta5.value = " no" : ctx_r149.pregunta5.value = "si"; return ctx_r149.pregunta5.complemento == 1 ? ctx_r149.pregunta5.complemento = 0 : ctx_r149.pregunta5.complemento = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "El Programa entrega ayudas a la poblaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, RegisterProgramComponent_div_15_div_162_Template, 61, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_165_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r150.pregunta4Selecciones[1] = !ctx_r150.pregunta4Selecciones[1]; return ctx_r150.pregunta4.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "El Programa se enfoca al desarrollo de capacidades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](167, RegisterProgramComponent_div_15_div_167_Template, 4, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_170_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r151.pregunta4Selecciones[2] = !ctx_r151.pregunta4Selecciones[2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "El Programa se enfoca al desarrollo de servicios p\u00FAblicos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_174_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r152.pregunta4Selecciones[3] = !ctx_r152.pregunta4Selecciones[3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "El Programa desarrolla infraestructura social ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_178_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r153.pregunta4Selecciones[4] = !ctx_r153.pregunta4Selecciones[4]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Ninguno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "6/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "\u00BFEl apoyo se entrega directamente o indirectamente a la poblaci\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](186, RegisterProgramComponent_div_15_div_186_Template, 13, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](187, RegisterProgramComponent_div_15_div_187_Template, 5, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "7/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "\u00BFCon qu\u00E9 frecuencia el Programa presupuestario entrega el apoyo social a la misma persona beneficiaria? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](194, RegisterProgramComponent_div_15_div_194_Template, 30, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](195, RegisterProgramComponent_div_15_div_195_Template, 5, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "8/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "\u00BFEl Programa presupuestario coadyuva al cumplimiento de alguno de los objetivos de la pol\u00EDtica de desarrollo social y humano estatal?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_205_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r154.pregunta8.value = "si"; return ctx_r154.pregunta8.complemento = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_209_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r155.pregunta8.value = "no"; return ctx_r155.pregunta8.complemento = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](212, RegisterProgramComponent_div_15_div_212_Template, 14, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "9/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " \u00BFCu\u00E1l es la procedencia de los recursos destinados al Programa presupuestario?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "*Seleccione m\u00EDnimo una opci\u00F3n. Puede seleccionar varias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_224_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r156.pregunta9Selecciones[0] = !ctx_r156.pregunta9Selecciones[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Recurso Federal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_228_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r157.pregunta9Selecciones[1] = !ctx_r157.pregunta9Selecciones[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Recurso Estatal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_232_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r158.pregunta9Selecciones[2] = !ctx_r158.pregunta9Selecciones[2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Recurso Municipal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_236_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r159.pregunta9Selecciones[3] = !ctx_r159.pregunta9Selecciones[3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Ingresos Propios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_240_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r160.pregunta9Selecciones[4] = !ctx_r160.pregunta9Selecciones[4]; return ctx_r160.pregunta9SeleccionOtro = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](242, RegisterProgramComponent_div_15_label_242_Template, 2, 1, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "10/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Los recursos destinados al Programa presupuestario son prioritarios y de inter\u00E9s p\u00FAblico porque est\u00E1n dirigidos a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_252_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r161.pregunta10.value = "educacionobligatoria"; return ctx_r161.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Educaci\u00F3n obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_256_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r162.pregunta10.value = "promocionsalud"; return ctx_r162.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Promoci\u00F3n de la salud, prevenci\u00F3n y control de enfermedades transmisibles y atenci\u00F3n m\u00E9dica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_260_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r163.pregunta10.value = "prevenirviolencia"; return ctx_r163.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Prevenir, atender y erradicar la violencia de g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_264_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r164.pregunta10.value = "alimentacion"; return ctx_r164.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Alimentaci\u00F3n y nutrici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_268_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r165.pregunta10.value = "productosbasicos"; return ctx_r165.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Abasto social de productos b\u00E1sicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_272_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r166.pregunta10.value = "vivienda"; return ctx_r166.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Vivienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_276_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r167.pregunta10.value = "generacinoempleo"; return ctx_r167.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Generaci\u00F3n y conservaci\u00F3n del empleo, actividades productivas y empresas del sector social de la econom\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_280_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r168.pregunta10.value = "obrasinfraestructura"; return ctx_r168.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Obras de infraestructura para agua potable, drenaje, electrificaci\u00F3n, caminos y otras v\u00EDas de comunicaci\u00F3n, saneamiento ambiental y equipamiento urbano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_284_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r169.pregunta10.value = "desarrollopueblos"; return ctx_r169.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Fomentar el desarrollo de los pueblos y las comunidades ind\u00EDgenas en el estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_288_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r170.pregunta10.value = "ninguno"; return ctx_r170.pregunta10.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_292_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r171.pregunta10.value = "otro"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](294, RegisterProgramComponent_div_15_div_294_Template, 2, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "11/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "\u00BFEl Programa presupuestario cuenta con padr\u00F3n de beneficiarios? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_304_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r172.pregunta11.value = "si"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_308_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r173.pregunta11.value = "no"; return ctx_r173.pregunta11.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](310, RegisterProgramComponent_div_15_div_310_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "12/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "\u00BFEl Programa presupuestario cuenta con reglas de operaci\u00F3n vigentes y/o normatividad aplicable? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_320_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r174.pregunta12.value = "si"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterProgramComponent_div_15_Template_input_change_324_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r175.pregunta12.value = "no"; return ctx_r175.pregunta12.complemento = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](326, RegisterProgramComponent_div_15_div_326_Template, 2, 1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Datos del Capturista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Observaciones o aclaraciones de la Dependencia o Entidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "textarea", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterProgramComponent_div_15_Template_textarea_ngModelChange_355_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r176.aclaraciones = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Ver Acuses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterProgramComponent_div_15_Template_button_click_367_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r177.saveData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.apiDataService.catPrograms);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetoninasninos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetoadolescentes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetojovenes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetomujeres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetomayores60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetodiscapacidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetoindigenas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetojornaleras);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetomigrantes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetoadultas30a59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetofamilias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetosociedadcivil);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.sujetootro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta1.sujetootro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.pregunta1.noaplica);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si" && ctx_r14.pregunta1.sujetoninasninos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si" && ctx_r14.pregunta1.sujetomayores60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si" && ctx_r14.pregunta1.sujetomujeres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta2.value == "si" && ctx_r14.pregunta1.sujetodiscapacidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta3.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta5.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta4Selecciones[1] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta4Selecciones[4] == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta4Selecciones[4] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta4Selecciones[4] == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta4Selecciones[4] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta8.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta9Selecciones[4] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta10.value == "otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta11.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.pregunta12.value == "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nombre : ", ctx_r14.apiDataService.user.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Apellidos : ", ctx_r14.apiDataService.user.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Entidad : ", ctx_r14.apiDataService.user.entidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Extensi\u00F3n : ", ctx_r14.apiDataService.user.extension, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.aclaraciones);
} }
function RegisterProgramComponent_div_27_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_27_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ups! A ocurrido un error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_27_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Guardado Con Exito! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterProgramComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Guardando Respuestas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterProgramComponent_div_27_div_10_Template, 5, 0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterProgramComponent_div_27_div_11_Template, 9, 0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterProgramComponent_div_27_div_12_Template, 4, 0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.errorSave && !ctx_r15.succeesSave);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.errorSave);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.succeesSave);
} }
class RegisterProgramComponent {
    constructor(dom, apiDataService, route) {
        this.dom = dom;
        this.apiDataService = apiDataService;
        this.route = route;
        this.show = false;
        this.errorSave = false;
        this.succeesSave = false;
        this.showModal = false;
        this.pregunta1 = {
            //RESPUESTASP1 - Estas son las respuestas de la pregunta 1
            sujetoninasninos: false,
            sujetoadolescentes: false,
            sujetojovenes: false,
            sujetomujeres: false,
            sujetomayores60: false,
            sujetodiscapacidad: false,
            sujetoindigenas: false,
            sujetojornaleras: false,
            sujetomigrantes: false,
            sujetoadultas30a59: false,
            sujetofamilias: false,
            sujetosociedadcivil: false,
            sujetootro: false,
            noaplica: false,
            sujetoOtroText: '',
        };
        this.pregunta2 = {
            value: 'no',
            derechos: [
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false, false, false,
                false, false, false
            ]
        };
        this.pregunta3 = {
            value: 'no',
            complemento: "" //RESPUESTAS - Esta es la pregunta3complemento
        };
        //Variable de apoyo para el complemento de la variable pregunta3
        this.pregunta3Selecciones = [false, false, false, false, false, false];
        this.pregunta3SeleccionOtro = "";
        this.pregunta4 = {
            value: 'entregaayudas',
            complemento: "" //RESPUESTAS - Esta es la pregunta4complemento
        };
        //Variable de apoyo para la variable pregunta4
        this.pregunta4Selecciones = [false, false, false, false, false];
        this.pregunta5 = {
            value: 'no',
            complemento: 0 //RESPUESTAS - Esta es la pregunta5complemento
        };
        this.pregunta5otro = "";
        this.pregunta6 = "directamente";
        this.pregunta7 = "unico";
        this.pregunta7Otro = "";
        this.pregunta8 = {
            value: 'no',
            complemento: 0 //RESPUESTAS - Esta es la pregunta8complemento
        };
        this.pregunta9 = "";
        //Variable de apoyo para la variable pregunta4
        this.pregunta9Selecciones = [false, false, false, false, false];
        this.pregunta9SeleccionOtro = "";
        this.pregunta10 = {
            value: 'educacionobligatoria',
            complemento: '' //RESPUESTAS - Esta es la pregunta10complemento
        };
        this.pregunta11 = {
            value: 'no',
            complemento: '' //RESPUESTAS - Esta es la pregunta11complemento
        };
        this.pregunta12 = {
            value: 'no',
            complemento: '' //RESPUESTAS - Esta es la pregunta12complemento
        };
        this.dependencia = "";
        this.programapresupuestal = 0;
        this.aclaraciones = "";
        this.createNewHeadLink('stylesheet', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/animate.min.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/bootstrap.min.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/menu.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/style.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/responsive.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/icon_fonts/css/all_icons_min.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/skins/square/grey.css');
        this.createNewHeadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        this.createNewHeadScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
        this.createNewHeadScript('https://code.jquery.com/jquery-1.12.4.min.js');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/color_3.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/date_time_picker.css');
        this.createNewHeadLink('stylesheet', 'assets/cuestionary-files/css/custom.css');
        /* this.createNewHeadScript('assets/cuestionary-files/js/functions.js'); */
        this.createNewHeadScript('assets/cuestionary-files/js/prueba.js');
        this.createNewBodyScript('assets/cuestionary-files/js/jquery-3.2.1.min.js');
        this.createNewBodyScript('assets/cuestionary-files/js/common_scripts.js');
        this.createNewBodyScript('assets/cuestionary-files/js/velocity.min.js');
        this.createNewBodyScript('assets/cuestionary-files/js/main.js');
        /* this.createNewBodyScript('assets/cuestionary-files/js/functions.js'); */
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.show = false;
            this.apiDataService.checkLogin((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* console.log(success); */
                switch (this.apiDataService.user.rolusuario) {
                    case 0:
                        //this.route.navigateByUrl('/register-program');
                        yield this.loadData();
                        break;
                    case 1:
                        this.route.navigateByUrl('/validations');
                        break;
                    case 2: //Usuario que registra los programas
                        yield this.loadData();
                        break;
                    case 3:
                        this.route.navigateByUrl('/validations');
                        break;
                }
            }), (error) => {
                console.log("error");
                console.log(error);
                this.route.navigateByUrl('/');
            });
        });
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.apiDataService.getCatprograms((this.apiDataService.user.entidad == "") ? "105" : this.apiDataService.user.entidad);
            yield this.apiDataService.awaitTime(2200, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.initData();
                this.show = true;
                //ESTE SCRIPT PROVOCA ERRORES EN LOS COMPONENTES DE ANGULAR COMO BIDING O DIRECTIVAS
                /* this.createNewBodyScript('assets/cuestionary-files/js/functions.js'); */
                this.createNewBodyScript('assets/cuestionary-files/js/questionare_wizard_func.js');
            }));
        });
    }
    saveData() {
        this.showModal = true;
        let data = {};
        data.pregunta1 = this.pregunta1;
        data.pregunta2 = this.pregunta2;
        this.pregunta3.complemento = "";
        if (this.pregunta3Selecciones[0]) {
            this.pregunta3.complemento = this.pregunta3.complemento + "pobreza";
        }
        if (this.pregunta3Selecciones[1]) {
            this.pregunta3.complemento = this.pregunta3.complemento + ",pobrezaextrema";
        }
        if (this.pregunta3Selecciones[2]) {
            this.pregunta3.complemento = this.pregunta3.complemento + ",vulnerable";
        }
        if (this.pregunta3Selecciones[3]) {
            this.pregunta3.complemento = this.pregunta3.complemento + ",zonaprioritariaestatal";
        }
        if (this.pregunta3Selecciones[4]) {
            this.pregunta3.complemento = this.pregunta3.complemento + ",zonaprioritariafederal";
        }
        if (this.pregunta3Selecciones[5]) {
            this.pregunta3.complemento = this.pregunta3.complemento + ",otro," + this.pregunta3SeleccionOtro;
        }
        data.pregunta3 = this.pregunta3;
        /////////////////////////////////////////////////////////////////////////////////
        this.pregunta4.value = "";
        if (this.pregunta4Selecciones[0]) {
            this.pregunta4.value = this.pregunta4.value + "entregaayudas";
        }
        if (this.pregunta4Selecciones[1]) {
            this.pregunta4.value = this.pregunta4.value + ",desarrollocapacidades";
        }
        if (this.pregunta4Selecciones[2]) {
            this.pregunta4.value = this.pregunta4.value + ",desarrolloservicios";
        }
        if (this.pregunta4Selecciones[3]) {
            this.pregunta4.value = this.pregunta4.value + ",desarrolloinfraestructura";
        }
        if (this.pregunta4Selecciones[4]) {
            this.pregunta4.value = this.pregunta4.value + ",ninguno";
        }
        data.pregunta4 = this.pregunta4;
        data.pregunta5 = this.pregunta5;
        data.pregunta5otro = this.pregunta5otro;
        data.pregunta6 = this.pregunta6;
        //data.pregunta7 = this.pregunta7.toLocaleUpperCase() +' : '+this.pregunta7Otro;
        if (this.pregunta7 == 'otro') {
            data.pregunta7 = 'Otro : ' + this.pregunta7Otro;
        }
        else {
            data.pregunta7 = this.pregunta7;
        }
        data.pregunta8 = this.pregunta8;
        /////////////////////////////////////////////////////////
        this.pregunta9 = "";
        if (this.pregunta9Selecciones[0]) {
            this.pregunta9 = this.pregunta9 + "federal";
        }
        if (this.pregunta9Selecciones[1]) {
            this.pregunta9 = this.pregunta9 + ",estatal";
        }
        if (this.pregunta9Selecciones[2]) {
            this.pregunta9 = this.pregunta9 + ",municipal";
        }
        if (this.pregunta9Selecciones[3]) {
            this.pregunta9 = this.pregunta9 + ",ingresospropios";
        }
        if (this.pregunta9Selecciones[4]) {
            this.pregunta9 = this.pregunta9 + ",otro," + this.pregunta9SeleccionOtro;
        }
        data.pregunta9 = this.pregunta9;
        data.pregunta10 = this.pregunta10;
        data.pregunta11 = this.pregunta11;
        data.pregunta12 = this.pregunta12;
        data.dependencia = this.dependencia;
        data.programapresupuestal = this.programapresupuestal;
        data.usuario = this.apiDataService.user.idusuarios;
        data.estatus = 0;
        data.aclaraciones = this.aclaraciones;
        //console.log("data enviada");
        //console.log(data.pregunta7);
        this.apiDataService.saveRespuestas(data).then((response) => {
            console.log("simonki");
            console.log(response);
            this.apiDataService.awaitTime(2000, () => {
                this.succeesSave = true;
                this.apiDataService.user.alreadyLoged = true;
                this.apiDataService.user.token = this.apiDataService.token.toString();
                localStorage.setItem('user', JSON.stringify(this.apiDataService.user));
                this.apiDataService.awaitTime(3000, () => {
                    console.log("navegando");
                    const currentRoute = this.route.url;
                    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                        this.route.navigate([currentRoute]); // navigate to same route
                    });
                });
            });
        }).catch((error) => {
            console.log("error");
            console.log(error);
            this.apiDataService.awaitTime(2000, () => {
                this.errorSave = true;
            });
        });
    }
    createNewHeadLink(rel, href) {
        const link = this.dom.createElement('link');
        link.setAttribute('rel', rel); //Para ojas de estilo
        this.dom.head.appendChild(link);
        link.setAttribute('href', href);
    }
    createNewHeadScript(src) {
        const script = this.dom.createElement('script');
        this.dom.head.appendChild(script);
        script.setAttribute('src', src);
    }
    createNewBodyScript(src) {
        const script = this.dom.createElement('script');
        this.dom.body.appendChild(script);
        script.setAttribute('src', src);
    }
    selectEventP5(e) {
        this.pregunta5.complemento = e.target.value;
        this.pregunta5otro = "";
    }
    selectEventP8(e) {
        this.pregunta8.complemento = e.target.value;
    }
    selectEventProgram(e) {
        this.programapresupuestal = e.target.value;
    }
    clearDataPregunta2() {
        this.pregunta2.derechos = [
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false
        ];
    }
    initData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.apiDataService.catPrograms[0]) {
                this.programapresupuestal = this.apiDataService.catPrograms[0].idprograma;
            }
            else {
                this.programapresupuestal = 0;
            }
            this.pregunta1 = {
                sujetoninasninos: false,
                sujetoadolescentes: false,
                sujetojovenes: false,
                sujetomujeres: false,
                sujetomayores60: false,
                sujetodiscapacidad: false,
                sujetoindigenas: false,
                sujetojornaleras: false,
                sujetomigrantes: false,
                sujetoadultas30a59: false,
                sujetofamilias: false,
                sujetosociedadcivil: false,
                sujetootro: false,
                noaplica: false,
                sujetoOtroText: ""
            };
            this.clearDataPregunta2();
            this.pregunta3 = {
                value: 'no',
                complemento: ""
            };
            this.pregunta4 = {
                value: 'entregaayudas',
                complemento: ""
            };
            this.pregunta4 = {
                value: 'entregaayudas',
                complemento: "" //RESPUESTAS - Esta es la pregunta4complemento
            };
            this.pregunta5 = {
                value: 'no',
                complemento: 0 //RESPUESTAS - Esta es la pregunta5complemento
            };
            this.pregunta5otro = "";
            this.pregunta6 = "directamente";
            this.pregunta7 = "unico";
            this.pregunta8 = {
                value: 'no',
                complemento: 0 //RESPUESTAS - Esta es la pregunta8complemento
            };
            this.pregunta9 = "federal";
            this.pregunta10 = {
                value: 'educacionobligatoria',
                complemento: '' //RESPUESTAS - Esta es la pregunta10complemento
            };
            this.pregunta11 = {
                value: 'no',
                complemento: '' //RESPUESTAS - Esta es la pregunta11complemento
            };
            this.pregunta12 = {
                value: 'no',
                complemento: '' //RESPUESTAS - Esta es la pregunta12complemento
            };
            this.dependencia = this.apiDataService.user.entidad;
        });
    }
}
RegisterProgramComponent.ɵfac = function RegisterProgramComponent_Factory(t) { return new (t || RegisterProgramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterProgramComponent, selectors: [["app-register-program"]], decls: 74, vars: 5, consts: [["id", "preloader", 4, "ngIf"], ["id", "loader_form", 4, "ngIf"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white !important", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], ["id", "form_container"], ["class", "row", 4, "ngIf"], ["id", "home", 1, "clearfix"], ["href", "#0", 1, "animated_link"], [1, "cd-overlay-nav"], [1, "cd-overlay-content"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "", "aria-hidden", "true", "style", "height: -webkit-fill-available;margin: 0% 25%;position: absolute;top: 0px;width: -webkit-fill-available;", 4, "ngIf"], ["id", "terms-txt", "tabindex", "-1", "role", "dialog", "aria-labelledby", "termsLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "termsLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn_1"], ["id", "more-info", "tabindex", "-1", "role", "dialog", "aria-labelledby", "more-infoLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "more-infoLabel", 1, "modal-title"], ["id", "preloader"], ["data-loader", "circle-side"], ["id", "loader_form"], ["data-loader", "circle-side-2"], [1, "row"], [1, "col-lg-5"], ["id", "left_form", 2, "height", "100%"], ["src", "/assets/cuestionary-files/img/logosds.png", "width", "300px", "alt", ""], [1, "col-2", "no-margin"], ["id", "more_info", "data-toggle", "modal", "data-target", "#more-info"], [1, "pe-7s-info", 2, "color", "whitesmoke", "cursor", "pointer"], [1, "col-10", "no-margin"], ["routerLink", "/glosary", "target", "_blank", 2, "color", "whitesmoke !important"], ["routerLink", "/concepts-basis-rights", "target", "_blank", 2, "color", "whitesmoke !important"], [1, "col-lg-7"], ["id", "wizard_container"], ["id", "top-wizard"], ["id", "progressbar"], ["name", "example-1", "id", "wrapped", "method", "POST"], ["id", "website", "name", "website", "type", "text", "value", ""], ["id", "middle-wizard"], ["id", "step0", 1, "step"], [1, "main_question"], ["id", "principal"], ["name", "pcderechosocial", "id", "pcderechosocial", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "step1", 1, "step"], [1, "col-md-4"], [1, "form-group", "radio_input"], ["type", "checkbox", "value", "sujetoninasninos", "name", "sujetoninasninos", "id", "sujetoninasninos", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetoadolescentes", "name", "sujetoadolescentes", "id", "sujetoadolescentes", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetojovenes", "name", "sujetojovenes", "id", "sujetojovenes", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetomujeres", "name", "sujetomujeres", "id", "sujetomujeres", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetomayores60", "name", "sujetomayores60", "id", "sujetomayores60", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetodiscapacidad", "name", "sujetodiscapacidad", "id", "sujetodiscapacidad", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetoindigenas", "name", "sujetoindigenas", "id", "sujetoindigenas", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetojornaleras", "name", "sujetojornaleras", "id", "sujetojornaleras", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetomigrantes", "name", "sujetomigrantes", "id", "sujetomigrantes", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetoadultas30a59", "name", "sujetoadultas30a59", "id", "sujetoadultas30a59", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetofamilias", "name", "sujetofamilias", "id", "sujetofamilias", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetosociedadcivil", "name", "sujetosociedadcivil", "id", "sujetosociedadcivil", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "sujetootro", "name", "sujetootro", "id", "sujetootro", 1, "icheck", 3, "ngModel", "ngModelChange", "change"], ["id", "sujetoespecifico", 4, "ngIf"], ["type", "checkbox", "value", "noaplica", "name", "noaplica", "id", "noaplica", 1, "icheck", 3, "ngModel", "ngModelChange"], ["id", "step2", 1, "step"], [1, "col-md-6"], [1, "col-md-12"], ["type", "radio", "value", "si", "name", "palineado", "id", "palineado", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "no", "name", "palineado", "id", "palineado", "checked", "", 1, "icheck", "required", 3, "change"], ["class", "row", "id", "opciones", 4, "ngIf"], ["id", "divsujetoninasninos", 4, "ngIf"], ["id", "divmayores60", 4, "ngIf"], ["id", "divmujeres", 4, "ngIf"], ["id", "divdiscapacidad", 4, "ngIf"], [1, "step"], ["type", "radio", "value", "si", "name", "condicionvulnerabilidad", "id", "condicionvulnerabilidad", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "no", "name", "condicionvulnerabilidad", "id", "condicionvulnerabilidad", "checked", "", 1, "icheck", "required", 3, "change"], ["class", "row", "id", "condicionpobreza", 4, "ngIf"], [1, "form-group", "checkbox_input"], ["type", "checkbox", "value", "entregaayudas", "name", "subcategoriaprograma", "id", "subcategoriaprograma", 1, "icheck", "required", 3, "change"], [1, "row", 2, "margin", "0px"], ["id", "divasociales", 4, "ngIf"], ["type", "checkbox", "value", "desarrollocapacidades", "name", "subcategoriaprograma", "id", "subcategoriaprograma", 1, "icheck", "required", 3, "change"], ["id", "subprogramacapacidades", 4, "ngIf"], ["type", "checkbox", "value", "desarrolloservicios", "name", "subcategoriaprograma", "id", "subcategoriaprograma", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "desarrolloinfraestructura", "name", "subcategoriaprograma", "id", "subcategoriaprograma", 1, "icheck", "required", 3, "change"], ["class", "col-md-12", 4, "ngIf"], ["type", "radio", "value", "si", "name", "derechosocial", "id", "pdesarrollosocial", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "no", "name", "derechosocial", "id", "pdesarrollosocial", "checked", "", 1, "icheck", "required", 3, "change"], ["id", "divderechosocial", 4, "ngIf"], ["type", "checkbox", "value", "federal", "name", "procedenciarecurso", "id", "procedenciarecurso", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "estatal", "name", "procedenciarecurso", "id", "procedenciarecurso", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "municipal", "name", "procedenciarecurso", "id", "procedenciarecurso", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "ingresospropios", "name", "procedenciarecurso", "id", "procedenciarecurso", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "otro", "name", "procedenciarecurso", "id", "procedenciarecurso", 1, "icheck", "required", 3, "change"], [4, "ngIf"], ["type", "radio", "value", "educacionobligatoria", "name", "interespublico", "id", "interespublico", "checked", "", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "promocionsalud", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "prevenirviolencia", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "alimentacion", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "productosbasicos", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "vivienda", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "generacinoempleo", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "obrasinfraestructura", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "desarrollopueblos", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "ninguno", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "otro", "name", "interespublico", "id", "interespublico", 1, "icheck", "required", 3, "change"], ["id", "divinterespublico", 4, "ngIf"], ["type", "radio", "value", "si", "name", "cuentapadron", "id", "cuentapadron", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "no", "name", "cuentapadron", "id", "cuentapadron", "checked", "", 1, "icheck", "required", 3, "change"], ["id", "divcuentapadron", 4, "ngIf"], ["type", "radio", "value", "si", "name", "reglasoperacion", "id", "reglasoperacion", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "no", "name", "reglasoperacion", "id", "reglasoperacion", "checked", "", 1, "icheck", "required", 3, "change"], ["id", "divreglasoperacion", 4, "ngIf"], [1, "submit", "step"], [1, "form-group"], [2, "text-transform", "capitalize"], ["maxlength", "1000", "placeholder", "Escriba las aclaraciones que considere necesarias", "name", "textarea", "rows", "10", "cols", "50", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["id", "bottom-wizard"], [1, "col-6"], ["routerLink", "/user-acuse", "target", "_blank", "type", "button", "name", "acuses", 1, "btn", "blu-btn"], ["type", "button", "name", "backward", 1, "backward"], ["type", "button", "name", "forward", 1, "forward"], ["type", "", "name", "", 1, "submit", 3, "click"], [3, "value"], ["id", "sujetoespecifico"], ["type", "text", "name", "definasujeto", "id", "definasujeto", "placeholder", "Especifique", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "opciones", 1, "row"], [1, "col-md-6>"], ["type", "checkbox", "value", "1", "id", "cualDerecho", "name", "d1", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "2", "id", "cualDerecho", "name", "d2", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "3", "id", "cualDerecho", "name", "d3", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "4", "id", "cualDerecho", "name", "d4", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "5", "id", "cualDerecho", "name", "d5", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "6", "id", "cualDerecho", "name", "d6", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "7", "id", "cualDerecho", "name", "d7", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "8", "id", "cualDerecho", "name", "d8", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "9", "id", "cualDerecho", "name", "d9", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "10", "id", "cualDerecho", "name", "d10", 1, "", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "11", "id", "cualDerecho", "name", "d11", 1, "", 3, "ngModel", "ngModelChange"], ["id", "divsujetoninasninos"], ["id", "ninos"], ["type", "checkbox", "value", "12", "name", "d11", "id", "cualDerecho", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "13", "id", "cualDerecho", "name", "d12", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "14", "id", "cualDerecho", "name", "d13", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "15", "id", "cualDerecho", "name", "d14", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "16", "id", "cualDerecho", "name", "d15", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "17", "id", "cualDerecho", "name", "d16", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "18", "id", "cualDerecho", "name", "d17", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "19", "id", "cualDerecho", "name", "d18", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "20", "id", "cualDerecho", "name", "d19", 1, "icheck", 3, "ngModel", "ngModelChange"], ["id", "divmayores60"], ["id", "mayores60"], ["type", "checkbox", "value", "21", "id", "d20", "name", "cualDerecho", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "22", "id", "cualDerecho", "name", "d21", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "23", "id", "cualDerecho", "name", "d22", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "24", "id", "cualDerecho", "name", "d23", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "25", "id", "cualDerecho", "name", "d24", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "26", "id", "cualDerecho", "name", "d25", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "27", "id", "cualDerecho", "name", "d26", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "28", "id", "cualDerecho", "name", "d27", 1, "icheck", 3, "ngModel", "ngModelChange"], ["id", "divmujeres"], ["id", "mujeres"], ["type", "checkbox", "value", "29", "name", "d28", "name", "cualDerecho", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "30", "id", "cualDerecho", "name", "d29", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "31", "id", "cualDerecho", "name", "d30", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "32", "id", "cualDerecho", "name", "d31", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "33", "id", "cualDerecho", "name", "d32", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "34", "id", "cualDerecho", "name", "d33", 1, "icheck", 3, "ngModel", "ngModelChange"], ["id", "divdiscapacidad"], ["id", "discapacidad"], ["type", "checkbox", "value", "35", "id", "cualDerecho", "name", "d34", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "36", "id", "cualDerecho", "name", "d35", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "37", "id", "cualDerecho", "name", "d36", 1, "icheck", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "38", "id", "cualDerecho", "name", "d37", 1, "icheck", 3, "ngModel", "ngModelChange"], ["id", "condicionpobreza", 1, "row"], ["type", "checkbox", "value", "pobreza", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "pobrezaextrema", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "vulnerable", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "zonaprioritariaestatal", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "zonaprioritariafederal", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["type", "checkbox", "value", "otro", "name", "cpobreza", "id", "cpobreza", 1, "icheck", "required", 3, "change"], ["placeholder", "Especifique", "maxlength", "300", "type", "text", "value", "otro", "name", "cpobreza", "id", "cpobreza", 3, "ngModel", "ngModelChange"], ["id", "divasociales"], ["id", "capoyosocial", "name", "capoyosocial", 1, "form-control", 3, "change"], ["disabled", "", "value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["id", "tipoapoyo", 4, "ngIf"], ["id", "tipoapoyo"], ["maxlength", "500", "type", "text", "name", "especifiquecapacidades", "id", "especifiquecapacidades", "placeholder", "Especifique", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "subprogramacapacidades"], ["type", "text", "name", "especifiquecapacidades", "id", "especifiquecapacidades", "placeholder", "Especifique", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "radio", "value", "directamente", "name", "tipoentrega", "id", "tipoentrega", "checked", "", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "indirectamente", "name", "tipoentrega", "id", "tipoentrega", 1, "icheck", "required", 3, "change"], ["disabled", "", "type", "radio", "value", "directamente", "name", "tipoentrega", "id", "tipoentrega", "checked", "", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "unico", "name", "frecuenciaentrega", "id", "frecuenciaentrega", "checked", "", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "mensual", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "bimensual", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "trimestral", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "semestral", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "anual", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["type", "radio", "value", "otro", "name", "frecuenciaentrega", "id", "frecuenciaentrega", 1, "icheck", "required", 3, "change"], ["placeholder", "Especifique", "type", "text", "class", "", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Especifique", "type", "text", 1, "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["disabled", "", "type", "radio", "value", "unico", "name", "frecuenciaentrega", "id", "frecuenciaentrega", "checked", "", 1, "icheck", "required", 3, "change"], ["id", "divderechosocial"], ["type", "text", "value", "otro", "name", "procedenciarecurso", "id", "procedenciarecurso", "placeholder", "Especifique", 1, "", 3, "ngModel", "ngModelChange"], ["id", "divinterespublico"], ["type", "text", "name", "especifiqueinterespublico", "placeholder", "Especifique", 1, "form-control", "required", 3, "ngModel", "ngModelChange"], ["id", "divcuentapadron"], ["type", "text", "name", "ligapadron", "id", "ligapadron", "placeholder", "Escriba la liga en donde puede ser consultado", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "divreglasoperacion"], ["type", "text", "name", "ligareglas", "id", "ligareglas", "placeholder", "Escriba la liga en donde pueden ser consultadas", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "", "aria-hidden", "true", 2, "height", "-webkit-fill-available", "margin", "0% 25%", "position", "absolute", "top", "0px", "width", "-webkit-fill-available"], ["role", "document", 2, "height", "300px", "background-color", "aliceblue", "border-radius", "16p"], [2, "margin-top", "40%", "height", "260px"], ["id", "exampleModalLabel", 1, "modal-title", 2, "font-size", "xx-large"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["class", "sk-folding-cube", 4, "ngIf"], ["class", "", "style", "text-align: center; align-self: center;font-size: larger;", 4, "ngIf"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"], [1, "", 2, "text-align", "center", "align-self", "center", "font-size", "larger"], ["src", "assets/images/error.png", 2, "height", "50px"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["src", "assets/images/success.png", 2, "height", "50px"]], template: function RegisterProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterProgramComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterProgramComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterProgramComponent_Template_button_click_11_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterProgramComponent_div_15_Template, 369, 39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Direccion de planeaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Contacto Ext. 12648");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterProgramComponent_div_27_Template, 13, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, in porro albucius qui, in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "nec quod novum accumsan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, ", mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "in porro albucius qui");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ", in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "En caso de tener alg\u00FAn problema con el sistema de clasificador o necesitar mayor informaci\u00F3n comunicarse a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Extensi\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " 12669 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Correo electr\u00F3nico: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " laura.teran@chihuahua.gob.mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: ["label[_ngcontent-%COMP%]\r\n{\r\n    color: #000000 !important;\r\n    padding-left: 10px;\r\n}\r\n\r\n.radio_input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    \r\n    color: #999;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n    -webkit-font-smoothing: antialiased;\r\n    color: #222;\r\n    font-weight: 300;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n}\r\n\r\n.no-margin[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVnaXN0ZXItcHJvZ3JhbS9yZWdpc3Rlci1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZWdpc3Rlci1wcm9ncmFtL3JlZ2lzdGVyLXByb2dyYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsXHJcbntcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yYWRpb19pbnB1dCBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuaDYge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxubGFiZWwgaW5wdXR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubm8tbWFyZ2lue1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */", ".sk-folding-cube[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 70px;\n  height: 70px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n      -ms-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterProgramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-program',
                templateUrl: './register-program.component.html',
                styleUrls: ['./register-program.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/user-acuse/user-acuse.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/user-acuse/user-acuse.component.ts ***!
  \**********************************************************/
/*! exports provided: UserAcuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAcuseComponent", function() { return UserAcuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pdfService/pdf-service.service */ "./src/app/services/pdfService/pdf-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function UserAcuseComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r484 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAcuseComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r484); const ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r483.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r480.apiDataService.actualMessageServer, " ");
} }
function UserAcuseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r486 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAcuseComponent_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r486); const ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r485.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r481.apiDataService.actualMessageServer, " ");
} }
function UserAcuseComponent_tr_40_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sin Validar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserAcuseComponent_tr_40_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserAcuseComponent_tr_40_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sin Autorizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserAcuseComponent_tr_40_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAcuseComponent_tr_40_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r494); const respuesta_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r492.createPDF(respuesta_r487); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Descargar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserAcuseComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserAcuseComponent_tr_40_label_9_Template, 2, 0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserAcuseComponent_tr_40_label_10_Template, 2, 0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserAcuseComponent_tr_40_label_12_Template, 3, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserAcuseComponent_tr_40_button_13_Template, 3, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r487 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", respuesta_r487.idrespuestas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r487.dependencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r487.programa);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !respuesta_r487.estatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r487.estatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !respuesta_r487.estatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r487.estatus);
} }
class UserAcuseComponent {
    constructor(apiDataService, route, pdfServiceService) {
        this.apiDataService = apiDataService;
        this.route = route;
        this.pdfServiceService = pdfServiceService;
        this.respuestas = new Array();
    }
    ngOnInit() {
        this.respuestas = [];
        this.apiDataService.checkLogin((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(success);
            switch (this.apiDataService.user.rolusuario) {
                case 0:
                    this.reloadData();
                    break;
                case 1:
                    this.reloadData();
                    //console.log("smn");
                    //console.log(this.apiDataService.user);
                    break;
                case 2: //Usuario que registra los programas
                    //this.route.navigateByUrl('/register-program')
                    this.reloadData();
                    break;
                case 3:
                    this.reloadData();
                    break;
            }
        }), (error) => {
            /* console.log(error); */
            this.route.navigateByUrl('/');
        });
    }
    reloadData() {
        this.respuestas = [];
        //console.log("intentando")
        this.apiDataService.getUserResponses(this.apiDataService.user.entidad).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(response);
            this.respuestas = response.data.respuestas;
            for (let index = 0; index < this.respuestas.length; index++) {
                let arrFix = Array.from(this.respuestas[index].respuestasp2);
                this.respuestas[index].respuestasp2 = [];
                arrFix.forEach(element => {
                    if (element) {
                        this.respuestas[index].respuestasp2.push(element.derecho);
                        //console.log(element.derecho)
                    }
                    else {
                        //console.log("EEEEEEEEEE");
                        //console.log(arrFix);
                    }
                });
            }
            console.log(this.respuestas);
            //this.apiDataService.showNotification(0, "Respuestas Obtenidas con Exito!", 6000);
        })).catch((error) => {
            console.log("error");
            console.log(error);
            this.apiDataService.showNotification(1, "Error obteniendo respuestas!", 6000);
        });
    }
    createPDF(respuestaSeleccionada) {
        this.pdfServiceService.createPDF(respuestaSeleccionada, false);
    }
}
UserAcuseComponent.ɵfac = function UserAcuseComponent_Factory(t) { return new (t || UserAcuseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_4__["PdfServiceService"])); };
UserAcuseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserAcuseComponent, selectors: [["app-user-acuse"]], decls: 42, vars: 4, consts: [["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "wrapper"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], [1, "card-box", 2, "text-align", "-webkit-center"], [1, "card"], [1, "card-body"], [1, "row", 2, "display", "flex", "align-items", "center", "text-align", "start"], [1, "col-10", 2, "text-align", "center", "display", "flex"], [2, "margin", "0px"], [1, "fas", "fa-cloud-download-alt", 2, "color", "black"], [1, "fa-cloud-download-alt", 2, "color", "black"], [1, "col-2", 2, "text-align", "right"], [1, "reload-btn", 3, "click"], [1, "fas", "fa-sync", 2, "color", "whitesmoke"], [1, "table", "table-hover", 2, "max-width", "1440px", "width", "100%", "margin-top", "1em"], [1, "row"], [1, "full-centered", "col-2"], [1, "col-4"], ["class", "row", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], [3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"], [1, "full-centered"], [1, "col-2", "full-centered"], ["class", "full-centered", 4, "ngIf"], ["class", "btn blu-btn", 4, "ngIf"], ["class", "btn blu-btn", 3, "click", 4, "ngIf"], [1, "btn", "blu-btn"], [1, "fas", "fa-times-circle", 2, "color", "whitesmoke"], [1, "btn", "blu-btn", 3, "click"], [1, "fas", "fa-download", 2, "color", "whitesmoke"]], template: function UserAcuseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserAcuseComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserAcuseComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAcuseComponent_Template_button_click_11_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Descarga de acuses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAcuseComponent_Template_button_click_25_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Recargar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "ID Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Dependencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, UserAcuseComponent_tr_40_Template, 14, 7, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respuestas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".boton-flotante[_ngcontent-%COMP%]{\r\n\r\n    height: 79px;\r\n}\r\n\r\n.btnnu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 19px;\r\n    right: 19px;\r\n    background-color: DodgerBlue; \r\n    border: none; \r\n    color: white; \r\n    padding: 12px 16px; \r\n    font-size: 16px; \r\n    cursor: pointer; \r\n  }\r\n\r\n\r\n\r\n.btnnu[_ngcontent-%COMP%]:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  background-color: #e4edf2;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci1hY3VzZS91c2VyLWFjdXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QixFQUFFLG9CQUFvQjtJQUNsRCxZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLFlBQVksRUFBRSxlQUFlO0lBQzdCLGtCQUFrQixFQUFFLGlCQUFpQjtJQUNyQyxlQUFlLEVBQUUsb0JBQW9CO0lBQ3JDLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7O0FBRUEsb0NBQW9DOztBQUNwQztJQUNFLDJCQUEyQjtFQUM3Qjs7QUFDRjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyLWFjdXNlL3VzZXItYWN1c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3Rvbi1mbG90YW50ZXtcclxuXHJcbiAgICBoZWlnaHQ6IDc5cHg7XHJcbn1cclxuXHJcbi5idG5udSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE5cHg7XHJcbiAgICByaWdodDogMTlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xyXG4gIH1cclxuXHJcbiAgLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4gIC5idG5udTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbiAgfVxyXG4ud3JhcHBlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZGYyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserAcuseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-acuse',
                templateUrl: './user-acuse.component.html',
                styleUrls: ['./user-acuse.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_4__["PdfServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/validations/emails/email.ts":
/*!***************************************************!*\
  !*** ./src/app/views/validations/emails/email.ts ***!
  \***************************************************/
/*! exports provided: email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
const email = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Document</title>' +
    '<style>' +
    'body, p{' +
    'margin: 0;' +
    '}' +
    '.main{' +
    'width: 100%;' +
    'height: 100vh;' +
    'background-color: #282e38;' +
    'position: relative;' +
    '}' +
    '.structure{' +
    'position: relative;' +
    'background-color: white;' +
    'max-width: 650px;' +
    'width: 100%;' +
    'height: 100%;' +
    'margin: auto;' +
    '}' +
    '.head{' +
    'height: 15%;' +
    '}' +
    '.body{' +
    'text-align: center;' +
    'font-size: larger;' +
    'max-height: 100%;' +
    'height: auto;' +
    'padding: 0 30px;' +
    '}' +
    '.footer{' +
    'position: absolute;' +
    'bottom: 0;' +
    'left: 0;' +
    'background-color: #4892a9;' +
    'height: 70px;' +
    'color: white;' +
    'text-align: center;' +
    'padding: 30px;' +
    'font-size: medium;' +
    '}' +
    'img{' +
    'max-height: 60px;' +
    'height: 100%;' +
    'width: 100%;' +
    '}' +
    'table{' +
    'width: 100%;' +
    'padding: 10px 30px;' +
    '}' +
    '.descriptive-img{' +
    'max-height: 200px;' +
    'height: 100%;' +
    'width: 100%;' +
    '}' +
    '@media screen and ( max-width: 375px){' +
    '' +
    '            ' +
    '}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="main">' +
    '<div class="structure">' +
    '<div class="head">' +
    '<table>' +
    '<tr>' +
    '<td style="width: 40%;">' +
    '<img src="https://evaluadorp.web.app/assets/emails/images/gobierno.svg"> ' +
    '</td>' +
    '<td style="width: 60%; text-align: end;">' +
    '<img src="https://evaluadorp.web.app/assets/emails/images/unidos.svg">' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</div>' +
    '<div class="body">' +
    '<h2 style="padding-top: 20px;">Acuse de validaciones</h1>' +
    '<p style="padding-top: 40px;">Por medio del presente se le hace entrega de los resultados del clasificador de programas sociales correspondiente a su programa presupuestal para su impresion y entrega a la Secretaria de Hacienda</p>' +
    '<p style="padding-top: 40px;">Este correo tiene como fin informar acerca del comprobante de validación, para acceder a esta información favor de descargar el archivo que se encuentra anexado a este correo</p>' +
    '<img class="descriptive-img" style="padding-top: 60px;" src="https://evaluadorp.web.app/assets/emails/images/files.svg">' +
    '</div>' +
    '<div class="footer">' +
    '<p>Este correo tiene como único propósito el de informar acerca del estado de validación, favor de no responder a este correo en caso de dudas.</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</body>' +
    '</html>';


/***/ }),

/***/ "./src/app/views/validations/validations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/validations/validations.component.ts ***!
  \************************************************************/
/*! exports provided: ValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsComponent", function() { return ValidationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_respuestas_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/respuestas.class */ "./src/app/classes/respuestas.class.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api-data.service */ "./src/app/services/api-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/pdfService/pdf-service.service */ "./src/app/services/pdfService/pdf-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












const _c0 = ["btnClose"];
function ValidationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r335); const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r334.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r187.apiDataService.actualMessageServer, " ");
} }
function ValidationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r337); const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r336.apiDataService.closeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r188.apiDataService.actualMessageServer, " ");
} }
function ValidationsComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Todas las Dependencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r190.selectedEntitie);
} }
function ValidationsComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    const _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_a_45_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r340); const entitie_r338 = ctx.$implicit; const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r339.changeEntitieSelected(entitie_r338); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entitie_r338 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entitie_r338);
} }
function ValidationsComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_tr_78_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_tr_78_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r346); const respuesta_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r344.selectRespuesta(respuesta_r341); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_tr_78_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_tr_78_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r349); const respuesta_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r347.selectRespuesta(respuesta_r341); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    const _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_tr_78_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351); const respuesta_r341 = ctx.$implicit; const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r350.selectRespuesta(respuesta_r341); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ValidationsComponent_tr_78_button_11_Template, 2, 0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ValidationsComponent_tr_78_button_12_Template, 2, 0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r341 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", respuesta_r341.idrespuestas, " Ver respuestas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r341.dependencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r341.programa);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](respuesta_r341.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !respuesta_r341.estatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r341.estatus);
} }
function ValidationsComponent_span_115_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ni\u00F1as y ni\u00F1os de 0 a 11 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Adolescentes de 12 a 17 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Adolescentes de 18 a 29 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Mujeres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas mayores de 60 a m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas con discapacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas ind\u00EDgenas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas jornaleras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas migrantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas adultas de 30 a 59 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Familias o comunidades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Organizaciones d ela sociedad civil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - No aplica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Otro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ValidationsComponent_span_115_span_1_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ValidationsComponent_span_115_span_2_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValidationsComponent_span_115_span_3_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ValidationsComponent_span_115_span_4_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ValidationsComponent_span_115_span_5_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValidationsComponent_span_115_span_6_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ValidationsComponent_span_115_span_7_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ValidationsComponent_span_115_span_8_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ValidationsComponent_span_115_span_9_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ValidationsComponent_span_115_span_10_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ValidationsComponent_span_115_span_11_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ValidationsComponent_span_115_span_12_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ValidationsComponent_span_115_span_13_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ValidationsComponent_span_115_span_14_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r352 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetoninasninos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetoadolescentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetojovenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "mujeres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetomayores60");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetodiscapacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetoindigenas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetojornaleras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetomigrantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetoadultas30a59");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetofamilias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetosociedadcivil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "noaplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r352 == "sujetootro");
} }
function ValidationsComponent_span_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r367 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", respuesta_r367, "");
} }
function ValidationsComponent_span_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas en condici\u00F3n de pobreza");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Persoersonas en condici\u00F3n de pobreza extrema");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas en condici\u00F3n vulnerable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas habitantes de zonas de atenci\u00F3n prioritaria estatales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas habitantes de zonas de atenci\u00F3n prioritaria federales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - Otro : ", ctx_r202.subStrPregunta3(ctx_r202.respuestaSeleccionada.respuestas.pregunta3complemento), "");
} }
function ValidationsComponent_span_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa entrega ayudas y subsidios directamente a la poblaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r204.respuestaSeleccionada.respuestas.pregunta5complemento ? ctx_r204.respuestaSeleccionada.respuestas.pregunta5complemento : "", "");
} }
function ValidationsComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r205.respuestaSeleccionada.respuestas.pregunta5otro ? ctx_r205.respuestaSeleccionada.respuestas.pregunta5otro : "Sin Indicar", "");
} }
function ValidationsComponent_span_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r206.respuestaSeleccionada.respuestas.pregunta5 ? ctx_r206.respuestaSeleccionada.respuestas.pregunta5 : "No", "");
} }
function ValidationsComponent_span_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa se enfoca al desarrollo de capacidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa se enfoca al desarrollo de servicios p\u00FAblicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa desarrolla infraestructura social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r212.respuestaSeleccionada.respuestas.pregunta6 ? ctx_r212.respuestaSeleccionada.respuestas.pregunta6 : "No", "");
} }
function ValidationsComponent_span_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_tr_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r214.respuestaSeleccionada.respuestas.pregunta8complemento ? ctx_r214.respuestaSeleccionada.respuestas.pregunta8complemento : "", "");
} }
function ValidationsComponent_span_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Federal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Estatal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Municipal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ingresos Propios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - Otro : ", ctx_r219.subStrPregunta3(ctx_r219.respuestaSeleccionada.respuestas.pregunta9), "");
} }
function ValidationsComponent_span_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Educaci\u00F3n obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Promoci\u00F3n de la salud, prevenci\u00F3n y control de enfermedades transmisibles y atenci\u00F3n m\u00E9dica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Prevenir, atender y erradicar la violencia de g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Alimentaci\u00F3n y nutrici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Abasto social de productos b\u00E1sicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vivienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Generaci\u00F3n y conservaci\u00F3n del empleo, actividades productivas y empresas del sector social de la econom\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Obras de infraestructura para agua potable, drenaje, electrificaci\u00F3n, caminos y otras v\u00EDas de comunicaci\u00F3n, saneamiento ambiental y equipamiento urbano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fomentar el desarrollo de los pueblos y las comunidades Ind\u00EDgenas en el estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Otro : ", ctx_r230.respuestaSeleccionada.respuestas.pregunta10complemento, "");
} }
function ValidationsComponent_tr_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r231.respuestaSeleccionada.respuestas.pregunta11complemento ? ctx_r231.respuestaSeleccionada.respuestas.pregunta11complemento : "", "");
} }
function ValidationsComponent_label_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r232.respuestaSeleccionada.respuestas.aclaraciones, "");
} }
function ValidationsComponent_label_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ni\u00F1as y ni\u00F1os de 0 a 11 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Adolescentes de 12 a 17 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Adolescentes de 18 a 29 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Mujeres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas mayores de 60 a m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas con discapacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas ind\u00EDgenas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas jornaleras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas migrantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas adultas de 30 a 59 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Familias o comunidades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Organizaciones d ela sociedad civil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - No aplica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Otro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_300_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ValidationsComponent_span_300_span_1_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ValidationsComponent_span_300_span_2_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValidationsComponent_span_300_span_3_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ValidationsComponent_span_300_span_4_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ValidationsComponent_span_300_span_5_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValidationsComponent_span_300_span_6_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ValidationsComponent_span_300_span_7_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ValidationsComponent_span_300_span_8_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ValidationsComponent_span_300_span_9_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ValidationsComponent_span_300_span_10_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ValidationsComponent_span_300_span_11_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ValidationsComponent_span_300_span_12_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ValidationsComponent_span_300_span_13_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ValidationsComponent_span_300_span_14_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r368 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetoninasninos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetoadolescentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetojovenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "mujeres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetomayores60");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetodiscapacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetoindigenas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetojornaleras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetomigrantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetoadultas30a59");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetofamilias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetosociedadcivil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "noaplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", respuesta_r368 == "sujetootro");
} }
function ValidationsComponent_span_307_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r383 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", respuesta_r383, "");
} }
function ValidationsComponent_span_318_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas en condici\u00F3n de pobreza");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_319_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas en condici\u00F3n de pobreza extrema");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_320_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas en condici\u00F3n vulnerable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas habitantes de zonas de atenci\u00F3n prioritaria estatales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_322_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Personas habitantes de zonas de atenci\u00F3n prioritaria federales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_323_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - Otro : ", ctx_r242.subStrPregunta3(ctx_r242.respuestaSeleccionada.respuestas.pregunta3complemento), "");
} }
function ValidationsComponent_span_336_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa entrega ayudas y subsidios directamente a la poblaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_337_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r244.respuestaSeleccionada.respuestas.pregunta5complemento ? ctx_r244.respuestaSeleccionada.respuestas.pregunta5complemento : "", "");
} }
function ValidationsComponent_span_338_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r245.respuestaSeleccionada.respuestas.pregunta5otro ? ctx_r245.respuestaSeleccionada.respuestas.pregunta5otro : "Sin Indicar", "");
} }
function ValidationsComponent_span_339_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r246.respuestaSeleccionada.respuestas.pregunta5 ? ctx_r246.respuestaSeleccionada.respuestas.pregunta5 : "No", "");
} }
function ValidationsComponent_span_340_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_341_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa se enfoca al desarrollo de capacidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_342_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa se enfoca al desarrollo de servicios p\u00FAblicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_343_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - El Programa desarrolla infraestructura social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_344_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_357_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r252.respuestaSeleccionada.respuestas.pregunta6 ? ctx_r252.respuestaSeleccionada.respuestas.pregunta6 : "No", "");
} }
function ValidationsComponent_span_358_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_tr_374_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r254.respuestaSeleccionada.respuestas.pregunta8complemento ? ctx_r254.respuestaSeleccionada.respuestas.pregunta8complemento : "", "");
} }
function ValidationsComponent_span_387_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Federal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_388_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Estatal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_389_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Municipal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_390_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - Ingresos Propios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_391_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - Otro : ", ctx_r259.subStrPregunta3(ctx_r259.respuestaSeleccionada.respuestas.pregunta9), "");
} }
function ValidationsComponent_span_398_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Educaci\u00F3n obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_399_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Promoci\u00F3n de la salud, prevenci\u00F3n y control de enfermedades transmisibles y atenci\u00F3n m\u00E9dica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_400_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Prevenir, atender y erradicar la violencia de g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_401_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Alimentaci\u00F3n y nutrici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_402_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Abasto social de productos b\u00E1sicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_403_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vivienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_404_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Generaci\u00F3n y conservaci\u00F3n del empleo, actividades productivas y empresas del sector social de la econom\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_405_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Obras de infraestructura para agua potable, drenaje, electrificaci\u00F3n, caminos y otras v\u00EDas de comunicaci\u00F3n, saneamiento ambiental y equipamiento urbano");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_406_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fomentar el desarrollo de los pueblos y las comunidades Ind\u00EDgenas en el estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_407_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_span_408_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Otro: ", ctx_r270.respuestaSeleccionada.respuestas.pregunta10complemento, "");
} }
function ValidationsComponent_tr_419_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r271.respuestaSeleccionada.respuestas.pregunta11complemento ? ctx_r271.respuestaSeleccionada.respuestas.pregunta11complemento : "", "");
} }
function ValidationsComponent_label_441_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r272.respuestaSeleccionada.respuestas.aclaraciones, "");
} }
function ValidationsComponent_label_442_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_466_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_467_Template(rf, ctx) { if (rf & 1) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_467_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r385); const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r384.respuestaSeleccionada.validaciones.validacion1a = !ctx_r384.respuestaSeleccionada.validaciones.validacion1a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_469_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_470_Template(rf, ctx) { if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_470_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r387); const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r386.respuestaSeleccionada.validaciones.validacion1a = !ctx_r386.respuestaSeleccionada.validaciones.validacion1a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_474_Template(rf, ctx) { if (rf & 1) {
    const _r389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_474_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r389); const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r388.respuestaSeleccionada.validaciones.validacion1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r278.respuestaSeleccionada.validaciones.validacion1);
} }
function ValidationsComponent_input_475_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_478_Template(rf, ctx) { if (rf & 1) {
    const _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_478_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r391); const ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r390.respuestaSeleccionada.validaciones.validacion1justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r280.respuestaSeleccionada.validaciones.validacion1justificacion);
} }
function ValidationsComponent_label_479_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r281.respuestaSeleccionada.validaciones.validacion1justificacion);
} }
function ValidationsComponent_img_484_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_485_Template(rf, ctx) { if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_485_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r393); const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r392.respuestaSeleccionada.validaciones.validacion2a = !ctx_r392.respuestaSeleccionada.validaciones.validacion2a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_487_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_488_Template(rf, ctx) { if (rf & 1) {
    const _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_488_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r395); const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r394.respuestaSeleccionada.validaciones.validacion2a = !ctx_r394.respuestaSeleccionada.validaciones.validacion2a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_492_Template(rf, ctx) { if (rf & 1) {
    const _r397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_492_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r397); const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r396.respuestaSeleccionada.validaciones.validacion2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r286.respuestaSeleccionada.validaciones.validacion2);
} }
function ValidationsComponent_input_493_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_496_Template(rf, ctx) { if (rf & 1) {
    const _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_496_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r399); const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r398.respuestaSeleccionada.validaciones.validacion2justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r288.respuestaSeleccionada.validaciones.validacion2justificacion);
} }
function ValidationsComponent_label_497_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r289.respuestaSeleccionada.validaciones.validacion2justificacion);
} }
function ValidationsComponent_img_502_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_503_Template(rf, ctx) { if (rf & 1) {
    const _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_503_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r401); const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r400.respuestaSeleccionada.validaciones.validacion3a = !ctx_r400.respuestaSeleccionada.validaciones.validacion3a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_505_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_506_Template(rf, ctx) { if (rf & 1) {
    const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_506_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r403); const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r402.respuestaSeleccionada.validaciones.validacion3a = !ctx_r402.respuestaSeleccionada.validaciones.validacion3a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_510_Template(rf, ctx) { if (rf & 1) {
    const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_510_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r404.respuestaSeleccionada.validaciones.validacion3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r294.respuestaSeleccionada.validaciones.validacion3);
} }
function ValidationsComponent_input_511_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_514_Template(rf, ctx) { if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_514_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r407); const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r406.respuestaSeleccionada.validaciones.validacion3justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r296.respuestaSeleccionada.validaciones.validacion3justificacion);
} }
function ValidationsComponent_label_515_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r297.respuestaSeleccionada.validaciones.validacion3justificacion);
} }
function ValidationsComponent_img_520_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_521_Template(rf, ctx) { if (rf & 1) {
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_521_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r409); const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r408.respuestaSeleccionada.validaciones.validacion4a = !ctx_r408.respuestaSeleccionada.validaciones.validacion4a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_523_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_524_Template(rf, ctx) { if (rf & 1) {
    const _r411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_524_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r411); const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r410.respuestaSeleccionada.validaciones.validacion4a = !ctx_r410.respuestaSeleccionada.validaciones.validacion4a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_528_Template(rf, ctx) { if (rf & 1) {
    const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_528_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r413); const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r412.respuestaSeleccionada.validaciones.validacion4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r302.respuestaSeleccionada.validaciones.validacion4);
} }
function ValidationsComponent_input_529_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_532_Template(rf, ctx) { if (rf & 1) {
    const _r415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_532_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r415); const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r414.respuestaSeleccionada.validaciones.validacion4justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r304.respuestaSeleccionada.validaciones.validacion4justificacion);
} }
function ValidationsComponent_label_533_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r305.respuestaSeleccionada.validaciones.validacion4justificacion);
} }
function ValidationsComponent_img_538_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_539_Template(rf, ctx) { if (rf & 1) {
    const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_539_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r417); const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r416.respuestaSeleccionada.validaciones.validacion5a = !ctx_r416.respuestaSeleccionada.validaciones.validacion5a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_541_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_542_Template(rf, ctx) { if (rf & 1) {
    const _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_542_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r419); const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r418.respuestaSeleccionada.validaciones.validacion5a = !ctx_r418.respuestaSeleccionada.validaciones.validacion5a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_546_Template(rf, ctx) { if (rf & 1) {
    const _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_546_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r421); const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r420.respuestaSeleccionada.validaciones.validacion5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r310.respuestaSeleccionada.validaciones.validacion5);
} }
function ValidationsComponent_input_547_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_550_Template(rf, ctx) { if (rf & 1) {
    const _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_550_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r423); const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r422.respuestaSeleccionada.validaciones.validacion5justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r312.respuestaSeleccionada.validaciones.validacion5justificacion);
} }
function ValidationsComponent_label_551_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r313.respuestaSeleccionada.validaciones.validacion5justificacion);
} }
function ValidationsComponent_img_556_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_557_Template(rf, ctx) { if (rf & 1) {
    const _r425 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_557_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r425); const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r424.respuestaSeleccionada.validaciones.validacion6a = !ctx_r424.respuestaSeleccionada.validaciones.validacion6a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_559_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_560_Template(rf, ctx) { if (rf & 1) {
    const _r427 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_560_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r427); const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r426.respuestaSeleccionada.validaciones.validacion6a = !ctx_r426.respuestaSeleccionada.validaciones.validacion6a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_strong_562_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Deber\u00EDa contar con ellas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_565_Template(rf, ctx) { if (rf & 1) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_565_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r429); const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r428.respuestaSeleccionada.validaciones.validacion6 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r319.respuestaSeleccionada.validaciones.validacion6);
} }
function ValidationsComponent_input_566_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_569_Template(rf, ctx) { if (rf & 1) {
    const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_569_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r431); const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r430.respuestaSeleccionada.validaciones.validacion6justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r321.respuestaSeleccionada.validaciones.validacion6justificacion);
} }
function ValidationsComponent_label_570_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r322.respuestaSeleccionada.validaciones.validacion6justificacion);
} }
function ValidationsComponent_img_575_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ValidationsComponent_button_576_Template(rf, ctx) { if (rf & 1) {
    const _r433 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_576_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r433); const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r432.respuestaSeleccionada.validaciones.validacion7a = !ctx_r432.respuestaSeleccionada.validaciones.validacion7a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_img_578_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} }
function ValidationsComponent_button_579_Template(rf, ctx) { if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_579_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r435); const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r434.respuestaSeleccionada.validaciones.validacion7a = !ctx_r434.respuestaSeleccionada.validaciones.validacion7a; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_strong_581_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Deber\u00EDa contar con padr\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationsComponent_input_584_Template(rf, ctx) { if (rf & 1) {
    const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_584_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r437); const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r436.respuestaSeleccionada.validaciones.validacion7 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r328.respuestaSeleccionada.validaciones.validacion7);
} }
function ValidationsComponent_input_585_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 99);
} }
function ValidationsComponent_input_588_Template(rf, ctx) { if (rf & 1) {
    const _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_input_588_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r439); const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r438.respuestaSeleccionada.validaciones.validacion7justificacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r330.respuestaSeleccionada.validaciones.validacion7justificacion);
} }
function ValidationsComponent_label_589_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r331.respuestaSeleccionada.validaciones.validacion7justificacion);
} }
function ValidationsComponent_button_591_Template(rf, ctx) { if (rf & 1) {
    const _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_button_591_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r441); const ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r440.sendResponse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Validar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ValidationsComponent {
    constructor(apiDataService, route, pdfServiceService) {
        this.apiDataService = apiDataService;
        this.route = route;
        this.pdfServiceService = pdfServiceService;
        this.statusSelected = false;
        this.data = [{
                eid: 'e101',
                ename: 'ravi',
                esal: 1000
            }, {
                eid: 'e102',
                ename: 'ram',
                esal: 2000
            }, {
                eid: 'e103',
                ename: 'rajesh',
                esal: 3000
            }];
        this.searchValue = "";
        this.page = 1;
        this.pageSize = 10;
        this.entities = [];
        this.selectedEntitie = "Todas";
        this.respuestas = new Array();
        this.respuestasFiltered = Array.from(this.respuestas);
        this.respuestaSeleccionada = new _classes_respuestas_class__WEBPACK_IMPORTED_MODULE_2__["Respuestas"]();
    }
    ngOnInit() {
        this.respuestas = [];
        this.respuestasFiltered = Array.from(this.respuestas);
        this.respuestaSeleccionada = new _classes_respuestas_class__WEBPACK_IMPORTED_MODULE_2__["Respuestas"]();
        this.apiDataService.checkLogin((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(success);
            switch (this.apiDataService.user.rolusuario) {
                case 0:
                    this.reloadData();
                    break;
                case 1:
                    this.reloadData();
                    //console.log("smn");
                    //console.log(this.apiDataService.user);
                    break;
                case 2: //Usuario que registra los programas
                    this.route.navigateByUrl('/register-program');
                    break;
                case 3:
                    this.reloadData();
                    break;
            }
        }), (error) => {
            /* console.log(error); */
            this.route.navigateByUrl('/');
        });
    }
    subStrPregunta3(texto) {
        return texto.slice((texto.indexOf("otro")) + 5, texto.length);
    }
    filterByProgramName(event) {
        let searchValueTemp = event.charAt(0).toLowerCase() + event.slice(1);
        if (this.searchValue == "") {
            this.respuestasFiltered = Array.from(this.respuestas);
        }
        else {
            this.respuestasFiltered = this.respuestas.filter(function (respuesta) {
                let fixed = respuesta.programa.charAt(0).toUpperCase() + event.slice(1);
                return respuesta.programa.toLowerCase().includes(searchValueTemp);
            });
        }
    }
    //Funciones para exportar a exel
    exportAsXLSX() {
        let data = [];
        data = [{
                idrespuestas: this.respuestaSeleccionada.idrespuestas,
                dependencia: this.respuestaSeleccionada.dependencia,
                estatus: this.respuestaSeleccionada.estatus ? "Validado" : "Sin Validar",
                usuario: this.respuestaSeleccionada.usuario,
                pregunta1: " ",
                pregunta1complemento: this.respuestaSeleccionada.respuestas.pregunta1complemento,
                pregunta2: this.respuestaSeleccionada.respuestas.pregunta2,
                pregunta2complemento: " ",
                pregunta3: this.respuestaSeleccionada.respuestas.pregunta3,
                pregunta3complemento: this.respuestaSeleccionada.respuestas.pregunta3complemento,
                pregunta4: this.respuestaSeleccionada.respuestas.pregunta4,
                pregunta4complemento: this.respuestaSeleccionada.respuestas.pregunta4complemento,
                pregunta5: this.respuestaSeleccionada.respuestas.pregunta5,
                pregunta5complemento: this.respuestaSeleccionada.respuestas.pregunta5complemento,
                pregunta6: this.respuestaSeleccionada.respuestas.pregunta6,
                pregunta7: this.respuestaSeleccionada.respuestas.pregunta7,
                pregunta8: this.respuestaSeleccionada.respuestas.pregunta8,
                pregunta8complemento: this.respuestaSeleccionada.respuestas.pregunta8complemento,
                pregunta9: this.respuestaSeleccionada.respuestas.pregunta9,
                pregunta10: this.respuestaSeleccionada.respuestas.pregunta10,
                pregunta10complemento: this.respuestaSeleccionada.respuestas.pregunta10complemento,
                pregunta11: this.respuestaSeleccionada.respuestas.pregunta11,
                pregunta11complemento: this.respuestaSeleccionada.respuestas.pregunta11complemento,
                pregunta12: this.respuestaSeleccionada.respuestas.pregunta12,
                validacion1: this.respuestaSeleccionada.validaciones.validacion1 ? "Validado" : "Sin Validar",
                validacion1a: this.respuestaSeleccionada.validaciones.validacion1a ? "Validado" : "Sin Validar",
                validacion1justificacion: this.respuestaSeleccionada.validaciones.validacion1justificacion,
                validacion2: this.respuestaSeleccionada.validaciones.validacion2 ? "Validado" : "Sin Validar",
                validacion2a: this.respuestaSeleccionada.validaciones.validacion2a ? "Validado" : "Sin Validar",
                validacion2justificacion: this.respuestaSeleccionada.validaciones.validacion2justificacion,
                validacion3: this.respuestaSeleccionada.validaciones.validacion3 ? "Validado" : "Sin Validar",
                validacion3a: this.respuestaSeleccionada.validaciones.validacion3a ? "Validado" : "Sin Validar",
                validacion3justificacion: this.respuestaSeleccionada.validaciones.validacion3justificacion,
                validacion4: this.respuestaSeleccionada.validaciones.validacion4 ? "Validado" : "Sin Validar",
                validacion4a: this.respuestaSeleccionada.validaciones.validacion4a ? "Validado" : "Sin Validar",
                validacion4justificacion: this.respuestaSeleccionada.validaciones.validacion4justificacion,
                validacion5: this.respuestaSeleccionada.validaciones.validacion5 ? "Validado" : "Sin Validar",
                validacion5a: this.respuestaSeleccionada.validaciones.validacion5a ? "Validado" : "Sin Validar",
                validacion5justificacion: this.respuestaSeleccionada.validaciones.validacion5justificacion,
                validacion6: this.respuestaSeleccionada.validaciones.validacion6 ? "Validado" : "Sin Validar",
                validacion6a: this.respuestaSeleccionada.validaciones.validacion6a ? "Validado" : "Sin Validar",
                validacion6comentarios: this.respuestaSeleccionada.validaciones.validacion6comentarios,
                validacion6justificacion: this.respuestaSeleccionada.validaciones.validacion6justificacion,
                validacion7: this.respuestaSeleccionada.validaciones.validacion7 ? "Validado" : "Sin Validar",
                validacion7a: this.respuestaSeleccionada.validaciones.validacion7a ? "Validado" : "Sin Validar",
                validacion7comentarios: this.respuestaSeleccionada.validaciones.validacion7comentarios,
                validacion7justificacion: this.respuestaSeleccionada.validaciones.validacion7justificacion,
                idprograma: this.respuestaSeleccionada.program.idprograma,
                nombre_programa: this.respuestaSeleccionada.programa,
                alineacion_ods_meta: this.respuestaSeleccionada.program.alineacion_ods_meta,
                alineacion_ped_2017_2021: this.respuestaSeleccionada.program.alineacion_ped_2017_2021,
                alineacion_pmp: this.respuestaSeleccionada.program.alineacion_pmp,
                alineacion_pnd_2013_2018: this.respuestaSeleccionada.program.alineacion_pnd_2013_2018,
                cantidad_hombres: this.respuestaSeleccionada.program.cantidad_hombres,
                cantidad_mujeres: this.respuestaSeleccionada.program.cantidad_mujeres,
                cla_programatica: this.respuestaSeleccionada.program.cla_programatica,
                clave_presupuestaria: this.respuestaSeleccionada.program.clave_presupuestaria,
                definicion_programa: this.respuestaSeleccionada.program.definicion_programa,
                departamento: this.respuestaSeleccionada.program.departamento,
                descipcion_fin: this.respuestaSeleccionada.program.descipcion_fin,
                descipcion_objetivo: this.respuestaSeleccionada.program.descipcion_objetivo,
                descripcion_alineacion_ods_meta: this.respuestaSeleccionada.program.descripcion_alineacion_ods_meta,
                descripcion_alineacion_ped: this.respuestaSeleccionada.program.descripcion_alineacion_ped,
                descripcion_alineacion_pmp: this.respuestaSeleccionada.program.descripcion_alineacion_pmp,
                descripcion_alineacion_pnd: this.respuestaSeleccionada.program.descripcion_alineacion_pnd,
                descripcion_pmp: this.respuestaSeleccionada.program.descripcion_pmp,
                entidad: this.respuestaSeleccionada.program.entidad,
                nivel_alineacion_ods_meta: this.respuestaSeleccionada.program.nivel_alineacion_ods_meta,
                nivel_alineacion_ped: this.respuestaSeleccionada.program.nivel_alineacion_ped,
                nivel_alineacion_pmp: this.respuestaSeleccionada.program.nivel_alineacion_pmp,
                nivel_alineacion_pnd: this.respuestaSeleccionada.program.nivel_alineacion_pnd,
                poblacion_objetivo: this.respuestaSeleccionada.program.poblacion_objetivo,
                sujeto_social: this.respuestaSeleccionada.program.sujeto_social,
            }];
        let cont = 0;
        this.respuestaSeleccionada.respuestasp1.forEach(element => {
            let newRows = { pregunta1: element };
            if (this.respuestaSeleccionada.respuestasp2.length > cont) {
                newRows = { pregunta1: element, pregunta2complemento: this.respuestaSeleccionada.respuestasp2[cont] };
            }
            data.push(newRows);
            cont++;
            if (this.respuestaSeleccionada.respuestasp1.length < (cont + 1)) {
                for (let index = cont + 1; index < this.respuestaSeleccionada.respuestasp2.length; index++) {
                    let newRows = { pregunta2complemento: this.respuestaSeleccionada.respuestasp2[index] };
                    data.push(newRows);
                }
            }
        });
        this.exportAsExcelFile(data, 'Respuestas_' + this.respuestaSeleccionada.idrespuestas);
    }
    exportAllAnswers() {
        //console.log(this.respuestas);
        let data = [];
        for (let index = 0; index < this.respuestas.length; index++) {
            let pregunta1Fix = "";
            this.respuestas[index].respuestasp1.forEach(element => {
                pregunta1Fix = pregunta1Fix + "," + element;
            });
            let pregunta2Fix = "";
            this.respuestas[index].respuestasp2.forEach(element => {
                pregunta2Fix = pregunta2Fix + "," + element;
            });
            if (this.respuestas[index].validaciones != null && this.respuestas[index].program != null) {
                this.respuestas[index].respuestasp1.forEach(elem => {
                    if (elem == "sujetoninasninos") {
                        this.respuestas[index].validaciones.validacion3a = true;
                    }
                });
                let element = {
                    IdRespuestas: this.respuestas[index].idrespuestas,
                    Estatus: this.respuestas[index].estatus == true ? "Validado" : "No validado",
                    IdPrograma: this.respuestas[index].program.idprograma,
                    NombrePrograma: this.respuestas[index].programa,
                    ClavePresupuestaria: this.respuestas[index].program.clave_presupuestaria,
                    Entidad: this.respuestas[index].dependencia,
                    nombreUsuario: this.respuestas[index].usuario,
                    pregunta1: pregunta1Fix,
                    pregunta1complemento: this.respuestas[index].respuestas.pregunta1complemento,
                    pregunta2: this.respuestas[index].respuestas.pregunta2,
                    pregunta2complemento: pregunta2Fix,
                    pregunta3: this.respuestas[index].respuestas.pregunta3,
                    pregunta3complemento: this.respuestas[index].respuestas.pregunta3complemento,
                    pregunta4: this.respuestas[index].respuestas.pregunta4,
                    pregunta4complemento: this.respuestas[index].respuestas.pregunta4complemento,
                    pregunta5: this.respuestas[index].respuestas.pregunta5,
                    pregunta5complemento: this.respuestas[index].respuestas.pregunta5complemento,
                    pregunta6: this.respuestas[index].respuestas.pregunta6,
                    pregunta7: this.respuestas[index].respuestas.pregunta7,
                    pregunta8: this.respuestas[index].respuestas.pregunta8,
                    pregunta8complemento: this.respuestas[index].respuestas.pregunta8complemento,
                    pregunta9: this.respuestas[index].respuestas.pregunta9,
                    pregunta10: this.respuestas[index].respuestas.pregunta10,
                    pregunta10complemento: this.respuestas[index].respuestas.pregunta10complemento,
                    pregunta11: this.respuestas[index].respuestas.pregunta11,
                    pregunta11complemento: this.respuestas[index].respuestas.pregunta11complemento,
                    pregunta12: this.respuestas[index].respuestas.pregunta12,
                    pregunta12complemento: this.respuestas[index].respuestas.pregunta12complemento,
                    aclaraciones: this.respuestas[index].respuestas.aclaraciones,
                    validacion1: this.respuestas[index].validaciones.validacion1a ? 'SI' : 'NO',
                    validacion2: this.respuestas[index].validaciones.validacion2a ? 'SI' : 'NO',
                    validacion3: this.respuestas[index].validaciones.validacion3a ? 'SI' : 'NO',
                    validacion4: this.respuestas[index].validaciones.validacion4a ? 'SI' : 'NO',
                    validacion5: this.respuestas[index].validaciones.validacion5a ? 'SI' : 'NO',
                    validacion6: this.respuestas[index].validaciones.validacion6a ? 'SI' : 'NO',
                    validacion6comentario: "",
                    validacion7: this.respuestas[index].validaciones.validacion7a ? 'SI' : 'NO',
                    validacion7Comentario: "",
                };
                if (this.respuestas[index].validaciones.validacion6a == false &&
                    (this.respuestas[index].validaciones.validacion1a == true || this.respuestas[index].validaciones.validacion2a == true)) {
                    element.validacion6comentario = " (Nota: El Programa debe contar con Reglas de Operación)";
                }
                if (this.respuestas[index].validaciones.validacion5a &&
                    (this.respuestas[index].respuestas.pregunta1complemento != 'funcionario' &&
                        this.respuestas[index].respuestas.pregunta1complemento != 'noaplica') &&
                    !this.respuestas[index].validaciones.validacion7a) {
                    element.validacion7Comentario = " (Nota: El Programa debe contar con Padrón de Beneficiarios)";
                }
                data.push(element);
            }
            else {
                console.log(this.respuestas[index]);
            }
        }
        this.exportAsExcelFile(data, 'Reporte Programas Presupuestarios ' + new Date().toUTCString());
    }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        let dateFix = "" + new Date().getDate() + "_" + new Date().getMonth() + "_" + new Date().getFullYear() + "_";
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, fileName + '_fecha_' + dateFix + EXCEL_EXTENSION);
    }
    //Fin de las funciones para exportar a exel
    reloadData() {
        this.respuestas = [];
        this.respuestaSeleccionada = new _classes_respuestas_class__WEBPACK_IMPORTED_MODULE_2__["Respuestas"]();
        //console.log("intentando")
        this.apiDataService.getRespuestas(this.apiDataService.user.entidad).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(response);
            this.respuestas = response.data.respuestas;
            for (let index = 0; index < this.respuestas.length; index++) {
                const element = this.respuestas[index];
                let arrFix = Array.from(this.respuestas[index].respuestasp2);
                this.respuestas[index].respuestasp2 = [];
                arrFix.forEach(element => {
                    if (element) {
                        this.respuestas[index].respuestasp2.push(element.derecho);
                        //console.log(element.derecho)
                    }
                    else {
                        //console.log("EEEEEEEEEE");
                        //console.log(arrFix);
                    }
                });
            }
            //console.log(this.respuestas);
            this.entities = response.data.entities;
            this.selectedEntitie = "Todas";
            this.respuestasFiltered = Array.from(this.respuestas);
            this.changeStateSelected(true); //////////////////////////////////////////////////////////////////////
            //this.apiDataService.showNotification(0, "Respuestas Obtenidas con Exito!", 6000);
        })).catch((error) => {
            console.log("error");
            console.log(error);
            this.apiDataService.showNotification(1, "Error obteniendo respuestas!", 6000);
        });
    }
    changeEntitieSelected(opc) {
        let searchValueTemp = opc.toString().charAt(0).toLowerCase() + opc.toString().slice(1);
        switch (opc) {
            case -1:
                this.selectedEntitie = "Todas";
                this.respuestasFiltered = Array.from(this.respuestas);
                break;
            default:
                this.selectedEntitie = opc.toString();
                this.respuestasFiltered = this.respuestas.filter(function (respuesta) {
                    let fixed = respuesta.dependencia.charAt(0).toUpperCase() + opc.toString().slice(1);
                    return respuesta.dependencia.toLowerCase().includes(searchValueTemp);
                });
                break;
        }
    }
    changeStateSelected(opc) {
        this.statusSelected = opc;
        this.respuestasFiltered = this.respuestas.filter((respuesta) => {
            return respuesta.estatus == this.statusSelected;
        });
    }
    selectRespuesta(respuesta) {
        this.respuestaSeleccionada = JSON.parse(JSON.stringify(respuesta));
        if (this.respuestaSeleccionada.validaciones == null) {
            let dataFix = new _classes_respuestas_class__WEBPACK_IMPORTED_MODULE_2__["Respuestas"]();
            this.respuestaSeleccionada.validaciones = JSON.parse(JSON.stringify(dataFix.validaciones));
            this.respuestaSeleccionada.validaciones.idrespuesta = respuesta.idrespuestas;
        }
        else {
            if (this.respuestaSeleccionada.estatus == true) {
                console.log(this.respuestaSeleccionada.respuestasp1);
                this.respuestaSeleccionada.validaciones = JSON.parse(JSON.stringify(this.respuestaSeleccionada.validacionesManuales));
                this.respuestaSeleccionada.respuestasp1.forEach(elem => {
                    if (elem == "sujetoninasninos") {
                        this.respuestaSeleccionada.validaciones.validacion3a = true;
                    }
                });
            }
        }
        console.log(this.respuestaSeleccionada);
    }
    sendResponse() {
        //console.log(this.apiDataService.user);}
        //this.createPDF();
        //console.log(this.respuestaSeleccionada.validaciones);
        this.apiDataService.saveValidations(this.respuestaSeleccionada.validaciones, this.respuestaSeleccionada.idrespuestas)
            .then((response) => {
            //console.log("cerrando");
            //console.log(response);
            this.apiDataService.showNotification(0, "Validaciones guardadas con Exito!", 6000);
            this.apiDataService.getRespuestas(this.apiDataService.user.entidad).then((response) => {
                this.respuestas = response.data.respuestas;
                this.btnClose.nativeElement.click();
                //this.pdfServiceService.createPDF(this.respuestaSeleccionada);
            }).catch((error) => {
                console.log("error");
                console.log(error);
            });
        }).catch((error) => {
            console.log("error");
            console.log(error);
            this.apiDataService.showNotification(1, "Error guardando validaciones!", 6000);
        });
    }
    createPDF() {
        this.pdfServiceService.createPDF(this.respuestaSeleccionada, false);
    }
    sendPDFByEmail() {
        this.pdfServiceService.createPDF(this.respuestaSeleccionada, true);
    }
    sendEmail() {
        this.apiDataService.sendEmail({})
            .then((response) => {
            console.log("exito");
            console.log(response);
            //this.apiDataService.showNotification(0, "Validaciones guardadas con Exito!", 6000);
        }).catch((error) => {
            console.log("error");
            console.log(error);
            //this.apiDataService.showNotification(1, "Error guardando validaciones!", 6000);
        });
    }
}
ValidationsComponent.ɵfac = function ValidationsComponent_Factory(t) { return new (t || ValidationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_7__["PdfServiceService"])); };
ValidationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationsComponent, selectors: [["app-validations"]], viewQuery: function ValidationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnClose = _t.first);
    } }, decls: 598, vars: 177, consts: [["class", "alert alert-success notificacion-flotante", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning notificacion-flotante", "role", "alert", 4, "ngIf"], [1, "wrapper"], [1, "navbar-custom"], [1, "navbar-box", 2, "height", "-webkit-fill-available", "align-items", "center"], [1, "", 2, "color", "aliceblue"], ["src", "/assets/images/logo-trans.png", 2, "height", "40px"], [1, ""], [2, "color", "white", "padding", "0px 37px", "font-size", "x-large"], ["type", "button", 1, "log-out-btn", 3, "click"], [1, "fas", "fa-door-open"], [1, "card-box", 2, "text-align", "-webkit-center"], [1, "card"], [1, "card-body"], [1, "row", 2, "justify-content", "flex-end"], [1, "row", 2, "display", "flex", "align-items", "center", "text-align", "start"], [1, "col-2"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "outline-btn"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"], [1, "col-3"], [1, "input-group", "input-group-sm", "mb-3", 2, "margin-bottom", "0rem!important", "height", "38px"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 2, "height", "38px", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 2, "width", "100%"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "blu-btn", 2, "width", "100%", "z-index", "auto"], [4, "ngIf"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-1"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", 2, "width", "100%", "z-index", "auto"], ["class", "btn btn-info", 4, "ngIf"], ["class", "btn btn-danger", 4, "ngIf"], [1, "col-2", 2, "text-align", "right"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-file-excel-o", 2, "color", "whitesmoke"], [1, "reload-btn", 3, "click"], [1, "fas", "fa-sync", 2, "color", "whitesmoke"], [1, "table", "table-hover", 2, "max-width", "1440px", "width", "100%", "margin-top", "1em"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col", 2, "text-align", "right"], [1, "justify-end", 2, "width", "-webkit-fill-available", "text-align", "right", 3, "page", "pageSize", "collectionSize", "pageChange"], ["id", "modalRegistro", "name", "modalRegistro", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-lg", 2, "display", "none"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "myLargeModalLabel", 1, "modal-title"], ["id", "modal-body", 1, "modal-body"], [1, "table", "table-hover"], [2, "width", "10px"], ["style", "text-transform: capitalize;", 4, "ngIf"], [2, "text-transform", "capitalize"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", "text-left"], ["id", "modalValidacion", "name", "modalValidacion", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "false", 1, "modal", "fade", "bs-example-modal-lg", 2, "display", "none"], ["modalValidacion", ""], [1, "fa", "fa-file-excel-o", 2, "color", "gainsboro"], ["id", "modal-body-2", 1, "modal-body"], ["src", "assets/images/success.png", "width", "30", "height", "30", 4, "ngIf"], [3, "click", 4, "ngIf"], ["src", "assets/images/disapproval.png", "width", "30", "height", "30", 4, "ngIf"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "class", "custom-control-input", "id", "valida1", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["checked", "", "disabled", "", "type", "checkbox", "class", "custom-control-input", "id", "valida1", 4, "ngIf"], ["for", "valida1", 1, "custom-control-label"], ["type", "text", "class", "form-control", "placeholder", "Escriba su justificaci\u00F3n", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "custom-control-label", "for", "valida1", 4, "ngIf"], ["type", "checkbox", "class", "custom-control-input", "id", "valida2", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida2", 1, "custom-control-label"], ["type", "checkbox", "class", "custom-control-input", "id", "valida3", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida3", 1, "custom-control-label"], ["type", "checkbox", "class", "custom-control-input", "id", "valida4", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida4", 1, "custom-control-label"], ["type", "checkbox", "class", "custom-control-input", "id", "valida5", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida5", 1, "custom-control-label"], ["type", "checkbox", "class", "custom-control-input", "id", "valida6", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida6", 1, "custom-control-label"], ["type", "checkbox", "class", "custom-control-input", "id", "valida7", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "valida7", 1, "custom-control-label"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "text-left"], ["btnClose", ""], ["role", "alert", 1, "alert", "alert-success", "notificacion-flotante"], [3, "click"], ["role", "alert", 1, "alert", "alert-warning", "notificacion-flotante"], [1, "btn", "btn-info"], [1, "btn", "btn-danger"], ["data-target", "#modalRegistro", "data-toggle", "modal", "data-id", "", "id", "verRespuestas", 1, "btn", "btn-info", 3, "click"], ["class", "btn btn-danger", "data-target", "#modalValidacion", "data-toggle", "modal", "data-id", "", 3, "click", 4, "ngIf"], ["data-target", "#modalValidacion", "data-toggle", "modal", "data-id", "", "class", "btn btn-info", 3, "click", 4, "ngIf"], ["data-target", "#modalValidacion", "data-toggle", "modal", "data-id", "", 1, "btn", "btn-danger", 3, "click"], ["data-target", "#modalValidacion", "data-toggle", "modal", "data-id", "", 1, "btn", "btn-info", 3, "click"], ["src", "assets/images/success.png", "width", "30", "height", "30"], ["src", "assets/images/disapproval.png", "width", "30", "height", "30"], ["type", "checkbox", "id", "valida1", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["checked", "", "disabled", "", "type", "checkbox", "id", "valida1", 1, "custom-control-input"], ["type", "text", "placeholder", "Escriba su justificaci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida2", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida3", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida4", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida5", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida6", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "valida7", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function ValidationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ValidationsComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ValidationsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_11_listener() { return ctx.apiDataService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_25_listener() { return ctx.pageSize = 5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_27_listener() { return ctx.pageSize = 10; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_29_listener() { return ctx.pageSize = 15; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Nombre Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationsComponent_Template_input_ngModelChange_36_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function ValidationsComponent_Template_input_ngModelChange_36_listener($event) { return ctx.filterByProgramName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ValidationsComponent_span_40_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ValidationsComponent_span_41_Template, 2, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_a_click_43_listener() { return ctx.changeEntitieSelected(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ValidationsComponent_a_45_Template, 2, 1, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ValidationsComponent_span_49_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ValidationsComponent_span_50_Template, 2, 0, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_a_click_52_listener() { return ctx.changeStateSelected(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Validado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_a_click_55_listener() { return ctx.changeStateSelected(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "No Validado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_59_listener() { return ctx.exportAllAnswers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Guardar Reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_63_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Recargar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "ID Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Dependencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ValidationsComponent_tr_78_Template, 13, 6, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ngb-pagination", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ValidationsComponent_Template_ngb_pagination_pageChange_82_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Respuestas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Complemento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " 1. CLAVE Y NOMBRE DEL PROGRAMA PRESUPUESTARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "2. \u00BFCU\u00C1L ES EL O LOS SUJETOS DE DERECHO QUE ATIENDE EL PROGRAMA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, ValidationsComponent_span_115_Template, 15, 14, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " 3. \u00BFEL PROGRAMA PRESUPUESTARIO EST\u00C1 ALINEADO A ALG\u00DAN DERECHO HUMANO - SOCIAL? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, ValidationsComponent_span_122_Template, 3, 1, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " 4. \u00BFEL PROGRAMA ATIENDE POBLACI\u00D3N EN ALGUNA CONDICI\u00D3N DE VULNERABILIDAD? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, ValidationsComponent_span_133_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, ValidationsComponent_span_134_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, ValidationsComponent_span_135_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, ValidationsComponent_span_136_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, ValidationsComponent_span_137_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, ValidationsComponent_span_138_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " 5. \u00BFEN CU\u00C1L O CU\u00C1LES DE LAS SIGUIENTES CATEGOR\u00CDAS SE CLASIFICAN LOS BIENES Y/O SERVICIOS DEL PROGRAMA PRESUPUESTARIO? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, ValidationsComponent_span_151_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, ValidationsComponent_span_152_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, ValidationsComponent_span_153_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](154, ValidationsComponent_span_154_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, ValidationsComponent_span_155_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, ValidationsComponent_span_156_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](157, ValidationsComponent_span_157_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](158, ValidationsComponent_span_158_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, ValidationsComponent_span_159_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " 6. \u00BFEL APOYO SOCIAL SE ENTREGA DIRECTAMENTE O INDIRECTAMENTE A LA POBLACI\u00D3N? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, ValidationsComponent_span_172_Template, 3, 1, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, ValidationsComponent_span_173_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " 7. \u00BFCON QU\u00C9 FRECUENCIA EL PROGRAMA ENTREGA EL APOYO SOCIAL A LA MISMA PERSONA BENEFICIARIA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " 8. \u00BFEL PROGRAMA PRESUPUESTARIO COADYUVA AL CUMPLIMIENTO DE ALGUNO DE LOS OBJETIVOS DE LA POL\u00CDTICA DE DESARROLLO SOCIAL Y HUMANO ESTATAL? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, ValidationsComponent_tr_189_Template, 4, 1, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " 9. \u00BFCU\u00C1L ES LA PROCEDENCIA DE LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, ValidationsComponent_span_202_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](203, ValidationsComponent_span_203_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](204, ValidationsComponent_span_204_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](205, ValidationsComponent_span_205_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](206, ValidationsComponent_span_206_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, " 10. LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO SON PRIORITARIOS Y DE INTER\u00C9S P\u00DABLICO PORQUE EST\u00C1N DIRIGIDOS A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](213, ValidationsComponent_span_213_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](214, ValidationsComponent_span_214_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](215, ValidationsComponent_span_215_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](216, ValidationsComponent_span_216_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](217, ValidationsComponent_span_217_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](218, ValidationsComponent_span_218_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](219, ValidationsComponent_span_219_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](220, ValidationsComponent_span_220_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](221, ValidationsComponent_span_221_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](222, ValidationsComponent_span_222_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](223, ValidationsComponent_span_223_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, " 11. \u00BFEL PROGRAMA PRESUPUESTARIO CUENTA CON PADR\u00D3N DE BENEFICIARIOS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](234, ValidationsComponent_tr_234_Template, 4, 1, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, " 12. \u00BFEL PROGRAMA PRESUPUESTARIO CUENTA CON REGLAS DE OPERACI\u00D3N VIGENTES Y/O NORMATIVIDAD APLICABLE? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " Observaciones o aclaraciones de la Dependencia o Entidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](256, ValidationsComponent_label_256_Template, 3, 1, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](257, ValidationsComponent_label_257_Template, 3, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Respuestas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_268_listener() { return ctx.createPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, " Ver Acuse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_271_listener() { return ctx.sendPDFByEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, " Enviar Acuse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Complemento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " 1. CLAVE Y NOMBRE DEL PROGRAMA PRESUPUESTARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "2. \u00BFCU\u00C1L ES EL O LOS SUJETOS DE DERECHO QUE ATIENDE EL PROGRAMA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](300, ValidationsComponent_span_300_Template, 15, 14, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, " 3. \u00BFEL PROGRAMA PRESUPUESTARIO EST\u00C1 ALINEADO A ALG\u00DAN DERECHO HUMANO - SOCIAL? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](307, ValidationsComponent_span_307_Template, 3, 1, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, " 4. \u00BFEL PROGRAMA ATIENDE POBLACI\u00D3N EN ALGUNA CONDICI\u00D3N DE VULNERABILIDAD? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](318, ValidationsComponent_span_318_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](319, ValidationsComponent_span_319_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](320, ValidationsComponent_span_320_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](321, ValidationsComponent_span_321_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](322, ValidationsComponent_span_322_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](323, ValidationsComponent_span_323_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " 5. \u00BFEN CU\u00C1L O CU\u00C1LES DE LAS SIGUIENTES CATEGOR\u00CDAS SE CLASIFICAN LOS BIENES Y/O SERVICIOS DEL PROGRAMA PRESUPUESTARIO? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](336, ValidationsComponent_span_336_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](337, ValidationsComponent_span_337_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](338, ValidationsComponent_span_338_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](339, ValidationsComponent_span_339_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](340, ValidationsComponent_span_340_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](341, ValidationsComponent_span_341_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](342, ValidationsComponent_span_342_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](343, ValidationsComponent_span_343_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](344, ValidationsComponent_span_344_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " 6. \u00BFEL APOYO SOCIAL SE ENTREGA DIRECTAMENTE O INDIRECTAMENTE A LA POBLACI\u00D3N? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](357, ValidationsComponent_span_357_Template, 3, 1, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](358, ValidationsComponent_span_358_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, " 7. \u00BFCON QU\u00C9 FRECUENCIA EL PROGRAMA ENTREGA EL APOYO SOCIAL A LA MISMA PERSONA BENEFICIARIA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, " 8. \u00BFEL PROGRAMA PRESUPUESTARIO COADYUVA AL CUMPLIMIENTO DE ALGUNO DE LOS OBJETIVOS DE LA POL\u00CDTICA DE DESARROLLO SOCIAL Y HUMANO ESTATAL? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](374, ValidationsComponent_tr_374_Template, 4, 1, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, " 9. \u00BFCU\u00C1L ES LA PROCEDENCIA DE LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](387, ValidationsComponent_span_387_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](388, ValidationsComponent_span_388_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](389, ValidationsComponent_span_389_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](390, ValidationsComponent_span_390_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](391, ValidationsComponent_span_391_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, " 10. LOS RECURSOS DESTINADOS AL PROGRAMA PRESUPUESTARIO SON PRIORITARIOS Y DE INTER\u00C9S P\u00DABLICO PORQUE EST\u00C1N DIRIGIDOS A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](398, ValidationsComponent_span_398_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](399, ValidationsComponent_span_399_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](400, ValidationsComponent_span_400_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](401, ValidationsComponent_span_401_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](402, ValidationsComponent_span_402_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](403, ValidationsComponent_span_403_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](404, ValidationsComponent_span_404_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](405, ValidationsComponent_span_405_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](406, ValidationsComponent_span_406_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](407, ValidationsComponent_span_407_Template, 3, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](408, ValidationsComponent_span_408_Template, 3, 1, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, " 11. \u00BFEL PROGRAMA PRESUPUESTARIO CUENTA CON PADR\u00D3N DE BENEFICIARIOS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](419, ValidationsComponent_tr_419_Template, 4, 1, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, " 12. \u00BFEL PROGRAMA PRESUPUESTARIO CUENTA CON REGLAS DE OPERACI\u00D3N VIGENTES Y/O NORMATIVIDAD APLICABLE? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, " Observaciones o aclaraciones de la Dependencia o Entidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](441, ValidationsComponent_label_441_Template, 3, 1, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](442, ValidationsComponent_label_442_Template, 3, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "Validacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Comentarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Validaci\u00F3n SDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Justificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](461, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "El Programa Presupuestario es de enfoque social");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](466, ValidationsComponent_img_466_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](467, ValidationsComponent_button_467_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](469, ValidationsComponent_img_469_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](470, ValidationsComponent_button_470_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](474, ValidationsComponent_input_474_Template, 1, 1, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](475, ValidationsComponent_input_475_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](476, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](478, ValidationsComponent_input_478_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](479, ValidationsComponent_label_479_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "El Programa Presupuestario coadyuva en el desarrollo social de las personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](484, ValidationsComponent_img_484_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](485, ValidationsComponent_button_485_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](487, ValidationsComponent_img_487_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](488, ValidationsComponent_button_488_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](492, ValidationsComponent_input_492_Template, 1, 1, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](493, ValidationsComponent_input_493_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](494, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](496, ValidationsComponent_input_496_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](497, ValidationsComponent_label_497_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "\u00BFEl Programa presupuestario va dirigido a sujetos de derecho prioritarios?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](502, ValidationsComponent_img_502_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](503, ValidationsComponent_button_503_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](505, ValidationsComponent_img_505_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](506, ValidationsComponent_button_506_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](510, ValidationsComponent_input_510_Template, 1, 1, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](511, ValidationsComponent_input_511_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](514, ValidationsComponent_input_514_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](515, ValidationsComponent_label_515_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "El Programa Presupuestario se enfoca al desarrollo de capacidades en la poblaci\u00F3n beneficiaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](520, ValidationsComponent_img_520_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](521, ValidationsComponent_button_521_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](523, ValidationsComponent_img_523_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](524, ValidationsComponent_button_524_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](528, ValidationsComponent_input_528_Template, 1, 1, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](529, ValidationsComponent_input_529_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](530, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](532, ValidationsComponent_input_532_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](533, ValidationsComponent_label_533_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "El programa otorga alg\u00FAn tipo de apoyo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](538, ValidationsComponent_img_538_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](539, ValidationsComponent_button_539_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](541, ValidationsComponent_img_541_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](542, ValidationsComponent_button_542_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](546, ValidationsComponent_input_546_Template, 1, 1, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](547, ValidationsComponent_input_547_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](548, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](550, ValidationsComponent_input_550_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](551, ValidationsComponent_label_551_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "El programa est\u00E1 sujeto a Reglas de Operaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](556, ValidationsComponent_img_556_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](557, ValidationsComponent_button_557_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](559, ValidationsComponent_img_559_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](560, ValidationsComponent_button_560_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](562, ValidationsComponent_strong_562_Template, 2, 0, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](565, ValidationsComponent_input_565_Template, 1, 1, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](566, ValidationsComponent_input_566_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](567, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](569, ValidationsComponent_input_569_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](570, ValidationsComponent_label_570_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](573, "El programa cuenta con padr\u00F3n general de beneficiarios?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](575, ValidationsComponent_img_575_Template, 1, 0, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](576, ValidationsComponent_button_576_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](578, ValidationsComponent_img_578_Template, 1, 0, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](579, ValidationsComponent_button_579_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](581, ValidationsComponent_strong_581_Template, 2, 0, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](584, ValidationsComponent_input_584_Template, 1, 1, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](585, ValidationsComponent_input_585_Template, 1, 0, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](588, ValidationsComponent_input_588_Template, 1, 1, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](589, ValidationsComponent_label_589_Template, 2, 1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](591, ValidationsComponent_button_591_Template, 2, 0, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "button", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationsComponent_Template_button_click_595_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](597, " Guardar Exel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiDataService.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiDataService.failMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.apiDataService.user.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("No. Respuestas ", ctx.pageSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedEntitie == "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedEntitie != "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statusSelected == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statusSelected == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](79, 173, ctx.respuestasFiltered, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.respuestasFiltered.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" - ", ctx.respuestaSeleccionada.program.clave_presupuestaria, " ", ctx.respuestaSeleccionada.programa, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta1complemento ? ctx.respuestaSeleccionada.respuestas.pregunta1complemento : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respuestaSeleccionada.respuestasp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respuestaSeleccionada.respuestasp2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta2 ? ctx.respuestaSeleccionada.respuestas.pregunta2 : "No", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("pobreza") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("pobrezaextrema"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("vulnerable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("zonaprioritariaestatal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("zonaprioritariafederal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("otro"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta3 ? ctx.respuestaSeleccionada.respuestas.pregunta3 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("entregaayudas") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta5complemento.toString() == "Otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrollocapacidades") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrolloservicios") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrolloinfraestructura") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta4complemento ? ctx.respuestaSeleccionada.respuestas.pregunta4complemento : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta7 ? ctx.respuestaSeleccionada.respuestas.pregunta7 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta8.toString() == "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta8 ? ctx.respuestaSeleccionada.respuestas.pregunta8 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("federal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("estatal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("municipal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("ingresospropios") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("otro"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "educacionobligatoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "promocionsalud");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "prevenirviolencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "alimentacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "productosbasicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "vivienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "generacinoempleo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "obrasinfraestructura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "desarrollopueblos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "ninguno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta11 ? ctx.respuestaSeleccionada.respuestas.pregunta11 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta11.toString() == "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta12complemento ? ctx.respuestaSeleccionada.respuestas.pregunta12complemento : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta12 ? ctx.respuestaSeleccionada.respuestas.pregunta12 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.aclaraciones.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.aclaraciones.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" - ", ctx.respuestaSeleccionada.program.clave_presupuestaria, " ", ctx.respuestaSeleccionada.programa, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta1complemento ? ctx.respuestaSeleccionada.respuestas.pregunta1complemento : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respuestaSeleccionada.respuestasp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.respuestaSeleccionada.respuestasp2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta2 ? ctx.respuestaSeleccionada.respuestas.pregunta2 : "No", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("pobreza") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("pobrezaextrema"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("vulnerable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("zonaprioritariaestatal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("zonaprioritariafederal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta3complemento.includes("otro"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta3 ? ctx.respuestaSeleccionada.respuestas.pregunta3 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("entregaayudas") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta5complemento.toString() == "Otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrollocapacidades") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrolloservicios") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("desarrolloinfraestructura") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta4complemento ? ctx.respuestaSeleccionada.respuestas.pregunta4complemento : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta4.includes("ninguno") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta7 ? ctx.respuestaSeleccionada.respuestas.pregunta7 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta8.toString() == "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta8 ? ctx.respuestaSeleccionada.respuestas.pregunta8 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("federal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("estatal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("municipal") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("ingresospropios") == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta9.includes("otro"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "educacionobligatoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "promocionsalud");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "prevenirviolencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "alimentacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "productosbasicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "vivienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "generacinoempleo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "obrasinfraestructura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "desarrollopueblos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "ninguno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta10.toString() == "otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta11 ? ctx.respuestaSeleccionada.respuestas.pregunta11 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.pregunta11.toString() == "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta12complemento ? ctx.respuestaSeleccionada.respuestas.pregunta12complemento : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.respuestaSeleccionada.respuestas.pregunta12 ? ctx.respuestaSeleccionada.respuestas.pregunta12 : "No", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.aclaraciones.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.respuestas.aclaraciones.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion1a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion1a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion1a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion1a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion2a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion2a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion2a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion2a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion3a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion3a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion3a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion3a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion4a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion4a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion4a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion4a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion5a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion5a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion5a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion5a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion6a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion6a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion6a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion6a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion6a == false && (ctx.respuestaSeleccionada.validaciones.validacion1a == true || ctx.respuestaSeleccionada.validaciones.validacion2a == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion7a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion7a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion7a && ctx.respuestaSeleccionada.estatus == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.validaciones.validacion7a && ctx.respuestaSeleccionada.estatus == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion5a && (ctx.respuestaSeleccionada.respuestas.pregunta1complemento != "funcionario" && ctx.respuestaSeleccionada.respuestas.pregunta1complemento != "noaplica") && !ctx.respuestaSeleccionada.validaciones.validacion7a);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuestaSeleccionada.validaciones.validacion1 && ctx.respuestaSeleccionada.validaciones.validacion2 && ctx.respuestaSeleccionada.validaciones.validacion3 && ctx.respuestaSeleccionada.validaciones.validacion4 && ctx.respuestaSeleccionada.validaciones.validacion5 && ctx.respuestaSeleccionada.validaciones.validacion6 && ctx.respuestaSeleccionada.validaciones.validacion7 && !ctx.respuestaSeleccionada.estatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: [".boton-flotante[_ngcontent-%COMP%]{\r\n\r\n    height: 79px;\r\n}\r\n\r\n.btnnu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 19px;\r\n    right: 19px;\r\n    background-color: DodgerBlue; \r\n    border: none; \r\n    color: white; \r\n    padding: 12px 16px; \r\n    font-size: 16px; \r\n    cursor: pointer; \r\n  }\r\n\r\n\r\n\r\n.btnnu[_ngcontent-%COMP%]:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  background-color: #e4edf2;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCLEVBQUUsb0JBQW9CO0lBQ2xELFlBQVksRUFBRSxtQkFBbUI7SUFDakMsWUFBWSxFQUFFLGVBQWU7SUFDN0Isa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsZUFBZSxFQUFFLDJCQUEyQjtFQUM5Qzs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUNGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b24tZmxvdGFudGV7XHJcblxyXG4gICAgaGVpZ2h0OiA3OXB4O1xyXG59XHJcblxyXG4uYnRubnUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxOXB4O1xyXG4gICAgcmlnaHQ6IDE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlOyAvKiBCbHVlIGJhY2tncm91bmQgKi9cclxuICAgIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogU2V0IGEgZm9udCBzaXplICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cclxuICB9XHJcblxyXG4gIC8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIG1vdXNlLW92ZXIgKi9cclxuICAuYnRubnU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUm95YWxCbHVlO1xyXG4gIH1cclxuLndyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWRmMjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-validations',
                templateUrl: './validations.component.html',
                styleUrls: ['./validations.component.css']
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_pdfService_pdf_service_service__WEBPACK_IMPORTED_MODULE_7__["PdfServiceService"] }]; }, { btnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['btnClose']
        }] }); })();


/***/ }),

/***/ "./src/assets/js/smtp.js":
/*!*******************************!*\
  !*** ./src/assets/js/smtp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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

module.exports = __webpack_require__(/*! C:\laragon\www\repoclasificador\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map