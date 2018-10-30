(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                data: {
                    title: 'Tablero de Trabajo'
                }
            },
            {
                path: 'proyecto',
                loadChildren: 'app/dashboard/proyecto/proyecto.module#ProyectoModule'
            },
            {
                path: 'interventoria',
                loadChildren: 'app/dashboard/interventoria/interventoria.module#InterventoriaModule'
            },
            {
                path: 'contratista',
                loadChildren: 'app/dashboard/contratista/contratista.module#ContratistaModule'
            },
            {
                path: 'fuente-financiacion',
                loadChildren: 'app/dashboard/fuente-financiacion/fuente-financiacion.module#FuenteFinanciacionModule'
            },
            {
                path: 'factura',
                loadChildren: 'app/dashboard/factura/factura.module#FacturaModule'
            },
        ]
    }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-around\">\n        <div class=\"col-3 dash\" *ngFor=\"let i of navigationDashboard\">\n            <mat-card>\n                <mat-card-header>\n                    <div mat-card-avatar><mat-icon>{{i.icon}}</mat-icon></div>\n                    <mat-card-title>{{i.label}}</mat-card-title>\n                </mat-card-header>\n                <button class=\"btn-dash\" mat-flat-button [routerLink]=\"i.link\" routerLinkActive #rla=\"routerLinkActive\">Ir a {{i.label}}</button>\n            </mat-card>\n        </div>\n    </div>\n</div>\n<!-- <div [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\" class=\"container\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div> -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.navigationDashboard = [
            { link: '../proyecto', label: 'Proyectos', icon: 'assessment' },
            { link: '../contratista', label: 'Contratista', icon: 'people' },
            { link: '../fuente-financiacion', label: 'Fuentes de Financiación', icon: 'attach_money' },
            { link: '../interventoria', label: 'Interventoria', icon: 'bar_chart' },
            { link: '../factura', label: 'Factura', icon: 'money' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.goToHome = function () {
        this.router.navigate(['home']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")],
            animations: [_core__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"router.url != '/dashboard/home'\" color=\"accent\">\n  <div class=\"row  justify-content-around\">\n    <div class=\"col\">\n      <button mat-icon-button>\n        <mat-icon (click)=\"goToHome()\">home</mat-icon>\n      </button>\n    </div>\n    <div class=\"col\" *ngFor=\"let i of navigationDashboard\">\n      <button mat-button matLine  [routerLink]=\"i.link\" routerLinkActive #rla=\"routerLinkActive\"><mat-icon> {{i.icon}} </mat-icon>{{i.label}}</button>\n    </div>\n  </div>\n</mat-toolbar>\n<div [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootComponent = /** @class */ (function () {
    function RootComponent(router) {
        this.router = router;
        this.switch = true;
        this.navigationDashboard = [
            { link: 'proyecto', label: 'Proyectos', icon: 'assessment' },
            { link: 'contratista', label: 'Contratista', icon: 'people' },
            { link: 'fuente-financiacion', label: 'Fuentes de Financiación', icon: 'attach_money' },
            { link: 'interventoria', label: 'Interventoria', icon: 'bar_chart' },
            { link: 'factura', label: 'Factura', icon: 'money' }
        ];
    }
    RootComponent.prototype.ngOnInit = function () {
        this.showBar();
    };
    RootComponent.prototype.goToHome = function () {
        this.router.navigate(['dashboard/home']);
    };
    RootComponent.prototype.showBar = function () {
        if (this.router.url === '/home') {
            this.switch = false;
        }
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")],
            animations: [_core__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-dashboard-dashboard-module.js.map