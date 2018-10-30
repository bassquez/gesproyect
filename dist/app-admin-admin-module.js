(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user/admin-user.component */ "./src/app/admin/admin-user/admin-user.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/admin/register-user/register-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'admin-user',
                pathMatch: 'full'
            },
            {
                path: 'admin-user',
                component: _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_3__["AdminUserComponent"],
                data: {
                    title: 'Administrar Usuarios'
                }
            },
            {
                path: 'register-user',
                component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"],
                data: {
                    title: 'Registrar Usuario'
                }
            }
        ]
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-user/admin-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gp-toast [message]=\"toast.message\"></gp-toast>\n<mat-card class=\"container\">\n  <mat-card-header>\n    <mat-card-title>\n      <h1 matBadge=\"{{users.length}}\">Usuarios Registrados</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"table-responsive-sm\" *ngIf=\"!isEditing\">\n\n      <table class=\"table\">\n        <thead class=\"\">\n          <tr>\n            <th scope=\"col\">Username</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"users.length === 0\">\n          <tr>\n            <td colspan=\"4\">\n              <h1>There are no registered users.</h1>\n            </td>\n          </tr>\n        </tbody>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.username}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.role}}</td>\n            <td>\n              <button mat-raised-button (click)=\"enableEditing(user)\">\n                <i class=\"fa fa-trash\"></i> Editar\n              </button>\n              <button mat-raised-button color=\"warn\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n                <i class=\"fa fa-trash\"></i> Borrar\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\" *ngIf=\"isEditing\">\n      <form #form=\"ngForm\" [formGroup]=\"editForm\" (ngSubmit)=\"edit(user)\" class=\"form-signin container-fluid\">\n        <mat-card-header class=\"row\">\n          <mat-card-title class=\"col-12\">Registro de Usuario</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"row container-fluid\">\n\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>username</mat-label>\n              <input type=\"text\" matInput name=\"username\" formControlName=\"username\" disabled [ngModel]=\"nombre.value + '.' + apellido.value | lowercase\">\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Email</mat-label>\n              <input type=\"text\" matInput [(ngModel)]=\"user.email\" placeholder=\"Email\" name=\"email\" formControlName=\"email\" />\n              <mat-error *ngIf=\"email.invalid\">{{correoErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Identificación</mat-label>\n              <input type=\"text\" [(ngModel)]=\"user.identificacion\" matInput placeholder=\"Identificacion\" name=\"identificacion\"\n                formControlName=\"identificacion\" />\n              <mat-error *ngIf=\"identificacion.invalid\">{{identificacionErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Nombre</mat-label>\n              <input type=\"text\" matInput [(ngModel)]=\"user.nombre\" placeholder=\"Nombre\" name=\"nombre\" formControlName=\"nombre\" />\n              <mat-error *ngIf=\"nombre.invalid\">{{nombreErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Apellido</mat-label>\n              <input type=\"text\" matInput [(ngModel)]=\"user.apellido\" placeholder=\"Apellido\" name=\"apellido\"\n                formControlName=\"apellido\" />\n              <mat-error *ngIf=\"apellido.invalid\">{{apellidoErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Cargo</mat-label>\n              <input type=\"text\" matInput [(ngModel)]=\"user.cargo\" placeholder=\"Cargo\" name=\"cargo\" formControlName=\"cargo\" />\n              <mat-error *ngIf=\"cargo.invalid\">{{cargoErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"col\" appearance=\"fill\">\n                <mat-label>Rol</mat-label>\n                <mat-select [(value)]=\"role\" [(ngModel)]=\"user.role\" name=\"role\" placeholder=\"Rol\" formControlName=\"role\">\n                  <mat-option>None</mat-option>\n                  <mat-option value=\"admin\">Admin</mat-option>\n                  <mat-option value=\"user\">User</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field class=\"col\" appearance=\"fill\">\n                  <mat-label>Contraseña</mat-label>\n                  <input matInput id=\"password\" [type]=\"!hide ? 'password' : 'text'\" name=\"password\" formControlName=\"password\"\n                    placeholder=\"Password\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                  <mat-error *ngIf=\"password.invalid\">{{passErrorMessage()}}</mat-error>\n                </mat-form-field>\n          </div>\n        </mat-card-content>\n        <mat-card-actions class=\"row \">\n          <div class=\"row justify-content-center align-items-center\">\n            <button mat-flat-button type=\"submit\" color=\"accent\" [disabled]=\"!form.form.valid\">Editar</button>\n            <button mat-flat-button type=\"button\" color=\"warn\" (click)=\"cancelEditing()\">\n              <i class=\"fa fa-times\"></i> Cancel</button>\n          </div>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n\n<!--\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Username</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"users.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no registered users.</td>\n        </tr>\n      </tbody>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.username}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n              <i class=\"fa fa-trash\"></i> Delete\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/toast/toast.component */ "./src/app/shared/toast/toast.component.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/models/user.model */ "./src/app/core/models/user.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminUserComponent = /** @class */ (function () {
    function AdminUserComponent(formBuilder, auth, toast, userService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
        this.isEditing = false;
        this.user = new _core_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"];
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30),
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)
        ]);
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.nombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.apellido = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.cargo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.identificacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.hide = false;
    }
    AdminUserComponent.prototype.correoErrorMessage = function () {
        return this.email.hasError('required') ? 'Debe ingresar email' :
            this.email.hasError('email') ? 'No es un email valido' :
                '';
    };
    AdminUserComponent.prototype.passErrorMessage = function () {
        return this.password.hasError('required') ? 'Debe ingresar Contraseña' :
            this.password.hasError('minlength') ? 'La contraseña debe tener almenos 6 caracteres' :
                this.password.hasError('maxlength') ? 'La contraseña debe tener menos de 15 caracteres' :
                    '';
    };
    AdminUserComponent.prototype.nombreErrorMessage = function () {
        return this.nombre.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    AdminUserComponent.prototype.apellidoErrorMessage = function () {
        return this.apellido.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    AdminUserComponent.prototype.identificacionErrorMessage = function () {
        return this.identificacion.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    AdminUserComponent.prototype.cargoErrorMessage = function () {
        return this.cargo.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    AdminUserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.editForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
            nombre: this.nombre,
            apellido: this.apellido,
            identificacion: this.identificacion,
            cargo: this.cargo
        });
    };
    AdminUserComponent.prototype.edit = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function () {
            _this.isEditing = false;
            _this.user = user;
            _this.toast.setMessage('Usuario editado con exito.', 'success');
            _this.getUsers();
        }, function (error) { return console.log(error); });
    };
    AdminUserComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.user = new _core_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.toast.setMessage('Edición cancelada.', 'warning');
        this.getUsers();
    };
    AdminUserComponent.prototype.enableEditing = function (user) {
        this.isEditing = true;
        this.user = user;
    };
    AdminUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminUserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (window.confirm('Estás segur@ que quieres Eliminar ' + user.username + '?')) {
            this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
        }
    };
    AdminUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-admin-user',
            template: __webpack_require__(/*! ./admin-user.component.html */ "./src/app/admin/admin-user/admin-user.component.html"),
            styles: [__webpack_require__(/*! ./admin-user.component.scss */ "./src/app/admin/admin-user/admin-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_1__["ToastComponent"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user/admin-user.component */ "./src/app/admin/admin-user/admin-user.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/admin/register-user/register-user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_3__["AdminUserComponent"], _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar >\n  <a mat-tab-link\n     *ngFor=\"let i of admin\"\n     [routerLink]=\"i.link\"\n     routerLinkActive #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\">\n    {{i.label}}\n  </a>\n</nav>\n\n<div [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\" class=\"container\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.admin = [
            { link: 'admin-user', label: 'Administrar Usuarios' },
            { link: 'register-user', label: 'Registrar Usuario' }
        ];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin/admin.component.scss")],
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/register-user/register-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/register-user/register-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gp-toast [message]=\"toast.message\"></gp-toast>\n<div class=\"container-fluid \">\n  <div class=\"row justify-content-center \">\n    <mat-card class=\"col-12 col-md-8\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" class=\"form-signin container-fluid\">\n        <mat-card-header class=\"row\">\n          <mat-card-title class=\"col-12\">Registro de Usuario</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"row container-fluid\">\n\n          <div class=\"row justify-content-center align-items-center\">\n            <i class=\"material-icons\">face</i>\n            <mat-form-field color=\"accent\" [ngClass]=\"setClassUsername()\" class=\"col\" appearance=\"fill\">\n              <mat-label>username</mat-label>\n              <input type=\"text\" matInput name=\"username\" formControlName=\"username\" disabled [ngModel]= \"nombre.value + '.' + apellido.value | lowercase\">\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <i class=\"material-icons\">email</i>\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Email</mat-label>\n              <input type=\"text\" matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\" />\n              <mat-error *ngIf=\"email.invalid\">{{correoErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Identificación</mat-label>\n              <input type=\"text\" matInput placeholder=\"Identificacion\" name=\"identificacion\" formControlName=\"identificacion\" />\n              <mat-error *ngIf=\"identificacion.invalid\">{{identificacionErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Nombre</mat-label>\n              <input type=\"text\" matInput placeholder=\"Nombre\" name=\"nombre\" formControlName=\"nombre\" />\n              <mat-error *ngIf=\"nombre.invalid\">{{nombreErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Apellido</mat-label>\n              <input type=\"text\" matInput placeholder=\"Apellido\" name=\"apellido\" formControlName=\"apellido\" />\n              <mat-error *ngIf=\"apellido.invalid\">{{apellidoErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <mat-form-field color=\"accent\" class=\"col\" appearance=\"fill\">\n              <mat-label>Cargo</mat-label>\n              <input type=\"text\" matInput placeholder=\"Cargo\" name=\"cargo\" formControlName=\"cargo\" />\n              <mat-error *ngIf=\"cargo.invalid\">{{cargoErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <i class=\"material-icons\">supervisor_account</i>\n            <mat-form-field class=\"col\" appearance=\"fill\">\n              <mat-label>Rol</mat-label>\n              <mat-select [(value)]=\"role\" name=\"role\" placeholder=\"Rol\" formControlName=\"role\">\n                <mat-option>None</mat-option>\n                <mat-option value=\"admin\">Admin</mat-option>\n                <mat-option value=\"user\">User</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"row justify-content-center align-items-center\">\n            <i class=\"material-icons\">lock_outline</i>\n            <mat-form-field class=\"col\" appearance=\"fill\">\n              <mat-label>Contraseña</mat-label>\n              <input matInput id=\"password\" \n              [type]=\"!hide ? 'password' : 'text'\"\n               name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              <mat-error *ngIf=\"password.invalid\">{{passErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n        </mat-card-content>\n        <mat-card-actions class=\"row \">\n          <button mat-flat-button type=\"submit\" [disabled]=\"!registerForm.valid\">Agregar</button>\n        </mat-card-actions>\n      </form>\n    </mat-card>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/register-user/register-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/register-user/register-user.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/register-user/register-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/register-user/register-user.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/toast/toast.component */ "./src/app/shared/toast/toast.component.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function passwordMatchValidator(g) {
    return g.get('password').value === g.get('passwordConfirm').value
        ? null : { 'mismatch': true };
}
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
        ]);
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.nombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.apellido = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.cargo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.identificacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.hide = false;
    }
    RegisterUserComponent.prototype.correoErrorMessage = function () {
        return this.email.hasError('required') ? 'Debe ingresar email' :
            this.email.hasError('email') ? 'No es un email valido' :
                '';
    };
    RegisterUserComponent.prototype.passErrorMessage = function () {
        return this.password.hasError('required') ? 'Debe ingresar Contraseña' :
            this.password.hasError('minlength') ? 'La contraseña debe tener almenos 6 caracteres' :
                this.password.hasError('maxlength') ? 'La contraseña debe tener menos de 15 caracteres' :
                    '';
    };
    RegisterUserComponent.prototype.nombreErrorMessage = function () {
        return this.nombre.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    RegisterUserComponent.prototype.apellidoErrorMessage = function () {
        return this.apellido.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    RegisterUserComponent.prototype.identificacionErrorMessage = function () {
        return this.identificacion.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    RegisterUserComponent.prototype.cargoErrorMessage = function () {
        return this.cargo.hasError('required') ? 'Debe ingresar Contraseña' :
            '';
    };
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
            nombre: this.nombre,
            apellido: this.apellido,
            identificacion: this.identificacion,
            cargo: this.cargo
        });
    };
    RegisterUserComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterUserComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterUserComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterUserComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/admin/admin-user']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gp-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/admin/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.scss */ "./src/app/admin/register-user/register-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module.js.map