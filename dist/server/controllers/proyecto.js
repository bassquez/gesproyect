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
var base_1 = require("./base");
var proyecto_1 = require("../models/proyecto");
var UserCtrl = /** @class */ (function (_super) {
    __extends(UserCtrl, _super);
    function UserCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = proyecto_1.default;
        _this.addProyectoFuente = function (req, res) {
            proyecto_1.default.findOneAndUpdate({ _id: req.params.id }, { '$push': { 'fuenteFProyecto': req.params.fuenteFProyecto } }, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        _this.getAll2 = function (req, res) {
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            }).populate('contratista')
                .populate('interventor');
        };
        _this.getForproyecto = function (req, res) {
            _this.model.find({ proyecto: req.params.proyecto }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('fuenteProyecto')
                .populate('proyecto');
        };
        _this.getproyect = function (req, res) {
            _this.model.findOne({ _id: req.params.id }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('contratista')
                .populate('interventor');
        };
        _this.getByIdProyecto = function (req, res) {
            _this.model.findOne({ identificacion: req.params.identificacion }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('contratista')
                .populate('interventor');
        };
        _this.searchProyecto = function (req, res) {
            _this.model.find({ identificacion: { '$regex': req.params.identificacion, '$options': 'i' } }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            }).populate('contratista')
                .populate('interventor');
        };
        return _this;
    }
    return UserCtrl;
}(base_1.default));
exports.default = UserCtrl;
//# sourceMappingURL=proyecto.js.map