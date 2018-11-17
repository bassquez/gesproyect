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
var interventoria_1 = require("../models/interventoria");
var base_1 = require("./base");
var InterventoriaCtrl = /** @class */ (function (_super) {
    __extends(InterventoriaCtrl, _super);
    function InterventoriaCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = interventoria_1.default;
        _this.getForproyecto = function (req, res) {
            _this.model.find({ proyecto: req.params.proyecto }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            })
                .populate('proyecto');
        };
        _this.getForId = function (req, res) {
            _this.model.findOne({ _id: req.params.id }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            })
                .populate('proyecto');
        };
        return _this;
    }
    return InterventoriaCtrl;
}(base_1.default));
exports.default = InterventoriaCtrl;
//# sourceMappingURL=interventoria.js.map