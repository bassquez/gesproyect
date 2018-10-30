(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dashboard-factura-factura-module"],{

/***/ "./src/app/core/models/factura.model.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/factura.model.ts ***!
  \**********************************************/
/*! exports provided: Factura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factura", function() { return Factura; });
var Factura = /** @class */ (function () {
    function Factura() {
    }
    return Factura;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/factura-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/factura/factura-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FacturaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaRoutingModule", function() { return FacturaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/dashboard/factura/factura/factura.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/factura/root/root.component.ts");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/dashboard/factura/proyecto/proyecto.component.ts");
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
                redirectTo: 'i',
                pathMatch: 'full'
            },
            {
                path: 'i',
                component: _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_4__["ProyectoComponent"],
                data: {
                    title: 'Proyectos'
                }
            },
            {
                path: 'facturas/:id',
                component: _factura_factura_component__WEBPACK_IMPORTED_MODULE_2__["FacturaComponent"],
                data: {
                    title: 'Facturas'
                }
            }
        ]
    }];
var FacturaRoutingModule = /** @class */ (function () {
    function FacturaRoutingModule() {
    }
    FacturaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FacturaRoutingModule);
    return FacturaRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/factura.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/factura/factura.module.ts ***!
  \*****************************************************/
/*! exports provided: FacturaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaModule", function() { return FacturaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/dashboard/factura/factura/factura.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/factura/root/root.component.ts");
/* harmony import */ var _factura_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factura-routing.module */ "./src/app/dashboard/factura/factura-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/dashboard/factura/proyecto/proyecto.component.ts");
/* harmony import */ var _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facturas/facturas.component */ "./src/app/dashboard/factura/facturas/facturas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FacturaModule = /** @class */ (function () {
    function FacturaModule() {
    }
    FacturaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _factura_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_factura_factura_component__WEBPACK_IMPORTED_MODULE_2__["FacturaComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"], _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_6__["ProyectoComponent"], _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_7__["FacturasComponent"]]
        })
    ], FacturaModule);
    return FacturaModule;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/factura/factura.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/factura/factura/factura.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gp-toast [message]=\"toast.message\"></gp-toast>\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header class=\"row\">\n      <mat-card-title class=\"col-12\">\n          <h1>Proyecto {{_proyecto.identificacion | uppercase}}</h1>\n\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"row container-fluid\">\n      <section class=\"row align-items-center justify-content-around\">\n        <form [formGroup]=\"facturasForm\" (ngSubmit)=\"addFactura()\" class=\"form-signin container-fluid\">\n          <div class=\"row justify-content-center align-items-center\">\n            <div class=\"col\">\n              <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n                <mat-select placeholder=\"Proyectos\" [compareWith]=\"compareFn\" hidden name=\"proyecto\" [(value)]=\"_proyecto\"\n                  [disabled]=\"_proyecto.inversion !== 0\" (ngModelChange)=\"getFacturasPorProyecto()\" formControlName=\"proyecto\">\n                  <mat-option *ngFor=\"let proyecto of proyectos\" [value]=\"proyecto\">\n                    {{proyecto.identificacion}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field class=\"col\" color=\"accent\" appearance=\"fill\">\n              <mat-label>Fecha de factura</mat-label>\n              <input #fechaInicioS matInput [matDatepicker]=\"picker\" nombre=\"fecha\" formControlName=\"fecha\" placeholder=\"Choose a date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-select placeholder=\"Fuentes de Financiacion\" [(ngModel)]=\"fuente\" name=\"fuenteFinanciacion\"\n                formControlName=\"fuenteFinanciacion\">\n                <mat-option *ngFor=\"let fuente of fuentesPorProyecto\" [value]=\"fuente.fuenteProyecto\">\n                  {{fuente.fuenteProyecto.nombre}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <input matInput placeholder=\"Identificacion\" value=\"\" formControlName=\"identificacion\">\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <input matInput placeholder=\"Valor\" value=\"\" formControlName=\"valor\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <button mat-flat-button [disabled]=\"!facturasForm.valid\">Agregar Factura</button>\n          </div>\n        </form>\n      </section>\n      <div class=\"row align-items-center justify-content-around\">\n        <div class=\"table-responsive-md col\">\n          <table class=\"table mat-elevation-z5\" *ngIf=\"!isEditing\">\n            <thead class=\"\">\n              <tr>\n                <th scope=\"col\">Fuente de Financiacion</th>\n                <th scope=\"col\">Inversion</th>\n                <th scope=\"col\">Faltante por ejecutar</th>\n                <th scope=\"col\">Facturas</th>\n                <th scope=\"col\">Facturas Total</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"fuentesPorProyecto.length === 0\">\n              <tr>\n                <td colspan=\"4\">No se han agregado Fuentes Financiación.</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr *ngFor=\"let fs of facturasPorFuente\">\n                <td class=\"align-middle\" scope=\"row\">{{fs.fuente.fuenteProyecto.nombre}}</td>\n                <td class=\"align-middle\" scope=\"row\">{{fs.fuente.inversion | currency: 'COP'}}</td>\n                <td class=\"align-middle\" scope=\"row\">{{fs.fuente.inversion - fs.totalFacturas | currency: 'COP' }}</td>\n                <td class=\"align-middle\" scope=\"row\" *ngIf=\"fs.facturas.length > 0\">\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let f of fs.facturas\">\n                      <h4 mat-line><strong>Identificación: </strong>{{f.identificacion | uppercase}}</h4>\n                      <p mat-line><strong>Valor: </strong>{{f.valor | currency: 'COP'}} </p>\n                      <p mat-line><strong>Fecha: </strong>{{f.fecha | date : 'dd MMM yyyy'}} </p>\n\n                      <div class=\"col\">\n                        <button mat-stroked-button color=\"warn\" class=\"row\" (click)=\"deleteFactura(f)\">\n                          <i class=\"fa fa-trash\"></i> Delete\n                        </button>\n                        <button mat-stroked-button color=\"\" class=\"row\" (click)=\"enableEditing(f)\">\n                          <i class=\"fa fa-edit\"></i> Editar\n                        </button>\n                      </div>\n                    </mat-list-item>\n                  </mat-list>\n                </td>\n                <td class=\"align-middle\" scope=\"row\" *ngIf=\"fs.facturas.length === 0\">No hay Facturas para esta Fuente</td>\n                <td class=\"align-middle\" scope=\"row\">{{fs.totalFacturas | currency: 'COP'}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"container-fluid\" *ngIf=\"isEditing\">\n        <form #form=\"ngForm\" (ngSubmit)=\"editFactura(factura)\" class=\"form-signin container-fluid\">\n          <div class=\"row justify-content-center align-items-center\">\n            <div class=\"col\">{{factura.identificacion}}</div>\n            <div class=\"col\">{{factura.fuenteFinanciacion.nombre}}</div>\n            <div class=\"col\">\n              <mat-checkbox [(ngModel)]=\"factura.avalado\" [ngModelOptions]=\"{standalone: true}\">Avalado?</mat-checkbox>\n            </div>\n            <div class=\"col\">\n              <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n                <mat-label>Valor</mat-label>\n                <input type=\"number\" matInput placeholder=\"Valor\" required [(ngModel)]=\"factura.valor\" [ngModelOptions]=\"{standalone: true}\">\n              </mat-form-field>\n            </div>\n\n            <div class=\"col\">\n              <button mat-flat-button type=\"submit\" color=\"accent\" [disabled]=\"!form.form.valid\">Editar</button>\n              <button mat-flat-button type=\"button\" color=\"warn\" (click)=\"cancelEditing()\">\n                <i class=\"fa fa-times\"></i> Cancel</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/factura/factura/factura.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/factura/factura/factura.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/factura/factura/factura.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/factura/factura/factura.component.ts ***!
  \****************************************************************/
/*! exports provided: FacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function() { return FacturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_proyecto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/models/proyecto.model */ "./src/app/core/models/proyecto.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/toast/toast.component */ "./src/app/shared/toast/toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_fuenteFinanciacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/fuenteFinanciacion.service */ "./src/app/core/services/fuenteFinanciacion.service.ts");
/* harmony import */ var _core_services_fuenteFinanciacionProyecto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/fuenteFinanciacionProyecto.service */ "./src/app/core/services/fuenteFinanciacionProyecto.service.ts");
/* harmony import */ var _core_services_proyecto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/proyecto.service */ "./src/app/core/services/proyecto.service.ts");
/* harmony import */ var _core_services_factura_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/factura.service */ "./src/app/core/services/factura.service.ts");
/* harmony import */ var _core_models_factura_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/models/factura.model */ "./src/app/core/models/factura.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FacturaComponent = /** @class */ (function () {
    function FacturaComponent(_route, formBuilder, router, toast, fuentesFinanciacionService, fuenteFinanaciacionProyectoService, proyectoService, facturaService) {
        this._route = _route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.fuentesFinanciacionService = fuentesFinanciacionService;
        this.fuenteFinanaciacionProyectoService = fuenteFinanaciacionProyectoService;
        this.proyectoService = proyectoService;
        this.facturaService = facturaService;
        this.isEditing = false;
        this.factura = new _core_models_factura_model__WEBPACK_IMPORTED_MODULE_9__["Factura"]();
        this.proyecto = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.fuenteFinanciacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.valor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this._proyecto = new _core_models_proyecto_model__WEBPACK_IMPORTED_MODULE_1__["Proyecto"]();
        this.identificacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.fecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.fuentesFinanciacion = [];
        this.facturasPorProyecto = [];
        this.proyectos = [];
        this.facturaValor = 0;
        this.fuentesPorProyecto = [];
        this.sumaFacturas = 0;
        this.f2 = [];
        this.facturasPorFuente = [];
    }
    FacturaComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getProyectoIdentificacion();
        this.facturasForm = this.formBuilder.group({
            proyecto: this.proyecto,
            fuenteFinanciacion: this.fuenteFinanciacion,
            identificacion: this.identificacion,
            valor: this.valor,
            fecha: this.fecha,
            avalado: false
        });
    };
    FacturaComponent.prototype.getProyectoIdentificacion = function () {
        var _this = this;
        this.proyectoService.getProyectoByIdentificacion(this.id).subscribe(function (data) { return _this._proyecto = data; }, function (error) { return console.log(error); }, function () {
            _this.facturasForm.get('proyecto').setValue(_this._proyecto);
            _this.getFacturasPorProyecto();
            _this.getFuentesPorProyecto();
        });
    };
    FacturaComponent.prototype.getfuentesFinanciacion = function () {
        var _this = this;
        this.fuentesFinanciacionService.getFuenteFinanciacions().subscribe(function (data) { return _this.fuentesFinanciacion = data; }, function (error) { return console.log(error); });
    };
    FacturaComponent.prototype.getFuentesPorProyecto = function () {
        var _this = this;
        this.fuenteFinanaciacionProyectoService.getFuenteFinanciacionProyecto(this._proyecto._id).subscribe(function (data) { return _this.fuentesPorProyecto = data; }, function (error) { return console.log(error); });
    };
    FacturaComponent.prototype.getProyectos = function () {
        var _this = this;
        this.proyectoService.getProyectos().subscribe(function (data) { return _this.proyectos = data; }, function (error) { return console.log(error); });
    };
    FacturaComponent.prototype.addFactura = function () {
        var _this = this;
        var i = 0;
        var enFacturasFuentes = false;
        while (i < this.facturasPorFuente.length) {
            var element = this.facturasPorFuente[i];
            if (element.fuente.fuenteProyecto._id === this.fuente._id) {
                console.log('Encontró');
                enFacturasFuentes = true;
                break;
            }
            i++;
        }
        if (enFacturasFuentes === true) {
            var e = this.facturasPorFuente[i];
            var suma = +e.totalFacturas + +this.valor.value;
            console.log(suma);
            console.log(e.fuente.inversion);
            if (suma > e.fuente.inversion) {
                this.toast.setMessage('La Factura no se guardo por que la fuente de finanaciacion se lleno', 'danger');
            }
            else {
                this.facturaService.addFactura(this.facturasForm.value).subscribe(function (res) {
                    _this.toast.setMessage('Se guardo exitosamente la fuente!', 'success');
                    // this.router.navigate(['//dashboard/proyecto/']);
                }, function (error) { return _this.toast.setMessage('La Factura no se guardo', 'danger'); }, function () { return _this.getFacturasPorProyecto(); });
                this.fuenteFinanciacion.reset();
                this.valor.reset();
                this.fuenteFinanciacion.clearValidators();
                this.valor.clearValidators();
            }
        }
    };
    FacturaComponent.prototype.deleteFactura = function (factura) {
        var _this = this;
        if (window.confirm('Estás segur@ que quieres Eliminar ' +
            factura.identificacion + ' de el proyecto ' + '?')) {
            this.facturaService.deleteFactura(factura).subscribe(function (data) { return _this.toast.setMessage('proyecto deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getFacturasPorProyecto(); });
        }
    };
    FacturaComponent.prototype.enableEditing = function (factura) {
        this.isEditing = true;
        this.factura = factura;
    };
    FacturaComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.factura = new _core_models_factura_model__WEBPACK_IMPORTED_MODULE_9__["Factura"]();
        this.toast.setMessage('Edición cancelada.', 'warning');
        // reload the cats to reset the editing
        this.getFacturasPorProyecto();
    };
    FacturaComponent.prototype.editFactura = function (factura) {
        var _this = this;
        this.facturaService.editFactura(factura).subscribe(function () {
            _this.isEditing = false;
            _this.factura = factura;
            _this.toast.setMessage('item editado con exito.', 'success');
            _this.getFacturasPorProyecto();
        }, function (error) { return console.log(error); });
    };
    FacturaComponent.prototype.getFacturasPorProyecto = function () {
        var _this = this;
        this.facturaService.getFactura(this._proyecto._id).subscribe(function (data) { return _this.facturasPorProyecto = data; }, function (error) { return console.log(error); }, function () {
            _this.facturaValor = 0;
            for (var index = 0; index < _this.facturasPorProyecto.length; index++) {
                _this.facturaValor = _this.facturaValor + _this.facturasPorProyecto[index].valor;
            }
            _this.facturasPorFuete();
        });
    };
    FacturaComponent.prototype.facturasPorFuete = function () {
        var _this = this;
        this.facturasPorFuente = [];
        var _loop_1 = function (f) {
            var fuente = this_1.fuentesPorProyecto[f];
            this_1.f = new Object();
            this_1.f2 = [];
            this_1.facturaService.getFacturaFuente(fuente.fuenteProyecto._id, this_1._proyecto._id).subscribe(function (data) {
                _this.sumaFacturas = 0;
                _this.f2 = data;
                for (var index = 0; index < _this.f2.length; index++) {
                    _this.sumaFacturas = _this.sumaFacturas + _this.f2[index].valor;
                }
                _this.f = {
                    fuente: fuente,
                    facturas: data,
                    totalFacturas: _this.sumaFacturas
                };
                _this.facturasPorFuente.push(_this.f);
            }, function (error) { return console.log(error); });
        };
        var this_1 = this;
        for (var f = 0; f < this.fuentesPorProyecto.length; f++) {
            _loop_1(f);
        }
    };
    FacturaComponent.prototype.compareFn = function (proyecto1, proyecto2) {
        return proyecto1 && proyecto2 ? proyecto1.identificacion === proyecto2.identificacion : proyecto1 === proyecto2;
    };
    FacturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-factura',
            template: __webpack_require__(/*! ./factura.component.html */ "./src/app/dashboard/factura/factura/factura.component.html"),
            styles: [__webpack_require__(/*! ./factura.component.scss */ "./src/app/dashboard/factura/factura/factura.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
            _core_services_fuenteFinanciacion_service__WEBPACK_IMPORTED_MODULE_5__["FuenteFinanciacionService"],
            _core_services_fuenteFinanciacionProyecto_service__WEBPACK_IMPORTED_MODULE_6__["FuenteFinanciacionProyectoService"],
            _core_services_proyecto_service__WEBPACK_IMPORTED_MODULE_7__["ProyectoService"],
            _core_services_factura_service__WEBPACK_IMPORTED_MODULE_8__["FacturaService"]])
    ], FacturaComponent);
    return FacturaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/facturas/facturas.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/factura/facturas/facturas.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  facturas works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/factura/facturas/facturas.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/factura/facturas/facturas.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/factura/facturas/facturas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/factura/facturas/facturas.component.ts ***!
  \******************************************************************/
/*! exports provided: FacturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasComponent", function() { return FacturasComponent; });
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

var FacturasComponent = /** @class */ (function () {
    function FacturasComponent() {
    }
    FacturasComponent.prototype.ngOnInit = function () {
    };
    FacturasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-facturas',
            template: __webpack_require__(/*! ./facturas.component.html */ "./src/app/dashboard/factura/facturas/facturas.component.html"),
            styles: [__webpack_require__(/*! ./facturas.component.scss */ "./src/app/dashboard/factura/facturas/facturas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FacturasComponent);
    return FacturasComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/proyecto/proyecto.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/factura/proyecto/proyecto.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-around\">\n    <mat-form-field color=\"accent\" class=\"col-5\" appearance=\"fill\">\n      <input matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"sProyecto\" placeholder=\"Busca Aqui\" (keyup)=\"search()\" class=\"search-input\" />\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let proyecto of proyectos \" [value]=\"proyecto.identificacion\">\n          <span>{{proyecto.identificacion}}</span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </div>\n  <div class=\"row justify-content-around\">\n    <div class=\"col-4\">\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let proyecto of proyectos\" (click)=\"factura(proyecto)\">\n          <mat-icon class=\"lista\" mat-list-icon>assessment</mat-icon>\n          <h1 class=\"lista\" mat-line><strong>Proyecto: </strong>{{proyecto.identificacion | uppercase}}</h1>\n          <p class=\"lista\" mat-line> <strong>Contratista: </strong>{{proyecto.contratista.nombre | uppercase}} </p>\n          <p class=\"lista\" mat-line> <strong>Terminación: </strong>{{proyecto.fechaFin | date : 'dd MMM yyyy'}} </p>\n          <p class=\"lista\" mat-line> <strong>Interventor: </strong>{{proyecto.interventor.nombre + ' ' +proyecto.interventor.apellido\n            | uppercase}} </p>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/factura/proyecto/proyecto.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/factura/proyecto/proyecto.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/factura/proyecto/proyecto.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/factura/proyecto/proyecto.component.ts ***!
  \******************************************************************/
/*! exports provided: ProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoComponent", function() { return ProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/proyecto.service */ "./src/app/core/services/proyecto.service.ts");
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



var ProyectoComponent = /** @class */ (function () {
    function ProyectoComponent(proyectoService, router) {
        this.proyectoService = proyectoService;
        this.router = router;
        this.proyectos = [];
        this.sProyecto = '';
    }
    ProyectoComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ProyectoComponent.prototype.getProyectos = function () {
        var _this = this;
        this.proyectoService.getProyectos().subscribe(function (data) { return _this.proyectos = data; }, function (error) { return console.log(error); });
    };
    ProyectoComponent.prototype.search = function () {
        var _this = this;
        if (this.sProyecto === '') {
            this.getProyectos();
        }
        else {
            this.proyectoService.searchProyecto(this.sProyecto).subscribe(function (data) { return _this.proyectos = data; }, function (error) { return console.log(error); });
        }
    };
    ProyectoComponent.prototype.factura = function (proyecto) {
        this.router.navigate(['/dashboard/factura/facturas/' + proyecto.identificacion]);
    };
    ProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-proyecto',
            template: __webpack_require__(/*! ./proyecto.component.html */ "./src/app/dashboard/factura/proyecto/proyecto.component.html"),
            styles: [__webpack_require__(/*! ./proyecto.component.scss */ "./src/app/dashboard/factura/proyecto/proyecto.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProyectoComponent);
    return ProyectoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/factura/root/root.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/factura/root/root.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/factura/root/root.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/factura/root/root.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/factura/root/root.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/factura/root/root.component.ts ***!
  \**********************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
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
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/factura/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/factura/root/root.component.scss")],
            animations: [_core__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-dashboard-factura-factura-module.js.map