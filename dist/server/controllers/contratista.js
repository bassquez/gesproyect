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
var contratista_1 = require("../models/contratista");
var base_1 = require("./base");
var ContratistaCtrl = /** @class */ (function (_super) {
    __extends(ContratistaCtrl, _super);
    function ContratistaCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = contratista_1.default;
        _this.getPorId = function (req, res) {
            _this.model.find({ identificacion: req.params.identificacion }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        return _this;
    }
    return ContratistaCtrl;
}(base_1.default));
exports.default = ContratistaCtrl;
//# sourceMappingURL=contratista.js.map