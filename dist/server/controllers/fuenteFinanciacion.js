"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fuenteFinanciacion_1 = require("../models/fuenteFinanciacion");
var base_1 = require("./base");
var FuenteFCtrl = /** @class */ (function (_super) {
    __extends(FuenteFCtrl, _super);
    function FuenteFCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = fuenteFinanciacion_1.default;
        return _this;
    }
    return FuenteFCtrl;
}(base_1.default));
exports.default = FuenteFCtrl;
//# sourceMappingURL=fuenteFinanciacion.js.map