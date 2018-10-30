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
var ejecucion_1 = require("../models/ejecucion");
var base_1 = require("./base");
var EjecucionCtrl = /** @class */ (function (_super) {
    __extends(EjecucionCtrl, _super);
    function EjecucionCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = ejecucion_1.default;
        _this.getForproyecto = function (req, res) {
            _this.model.find({ proyecto: req.params.proyecto }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('fuenteProyecto')
                .populate('proyecto');
        };
        return _this;
    }
    return EjecucionCtrl;
}(base_1.default));
exports.default = EjecucionCtrl;
//# sourceMappingURL=ejecucion.js.map