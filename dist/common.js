(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/models/proyecto.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/proyecto.model.ts ***!
  \***********************************************/
/*! exports provided: Proyecto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proyecto", function() { return Proyecto; });
var Proyecto = /** @class */ (function () {
    function Proyecto() {
    }
    return Proyecto;
}());



/***/ }),

/***/ "./src/app/core/services/factura.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/factura.service.ts ***!
  \**************************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacturaService = /** @class */ (function () {
    function FacturaService(http) {
        this.http = http;
    }
    FacturaService.prototype.getFacturas = function () {
        return this.http.get('/api/facturas');
    };
    FacturaService.prototype.countFacturas = function () {
        return this.http.get('/api/factura/count');
    };
    FacturaService.prototype.addFactura = function (factura) {
        return this.http.post('/api/factura', factura);
    };
    FacturaService.prototype.getFactura = function (idProyecto) {
        return this.http.get("/api/factura/proyecto/" + idProyecto);
    };
    FacturaService.prototype.getFactura2 = function (idProyecto) {
        return this.http.get("/api/factura/proyecto2/" + idProyecto);
    };
    FacturaService.prototype.getFacturaFuente = function (fuente, proyecto) {
        return this.http.get("/api/factura/fuente/" + fuente + "/" + proyecto);
    };
    FacturaService.prototype.editFactura = function (factura) {
        return this.http.put("/api/factura/" + factura._id, factura, { responseType: 'text' });
    };
    FacturaService.prototype.deleteFactura = function (factura) {
        return this.http.delete("/api/factura/" + factura._id, { responseType: 'text' });
    };
    FacturaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FacturaService);
    return FacturaService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map