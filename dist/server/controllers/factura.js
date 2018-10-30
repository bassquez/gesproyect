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
var factura_1 = require("../models/factura");
var base_1 = require("./base");
var FfproyectoCtrl = /** @class */ (function (_super) {
    __extends(FfproyectoCtrl, _super);
    function FfproyectoCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = factura_1.default;
        _this.getForproyecto = function (req, res) {
            _this.model.find({ proyecto: req.params.proyecto }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('fuenteFinanciacion')
                .populate('proyecto');
        };
        _this.getForproyecto2 = function (req, res) {
            _this.model.find({ proyecto: req.params.proyecto, avalado: false }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        _this.getForFuente = function (req, res) {
            _this.model.find({ fuenteFinanciacion: req.params.fuente, proyecto: req.params.proyecto }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('fuenteFinanciacion')
                .populate('proyecto');
        };
        return _this;
    }
    return FfproyectoCtrl;
}(base_1.default));
exports.default = FfproyectoCtrl;
//# sourceMappingURL=factura.js.map