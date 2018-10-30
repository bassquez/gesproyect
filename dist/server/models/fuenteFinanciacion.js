"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// const Contratista = mongoose.model('Contratista');
var fuenteFinanciacionSchema = new mongoose.Schema({
    rubro: { type: String, unique: true, lowercase: true, trim: true },
    nombre: String,
    monto: Number,
    vencimiento: Date,
    usuario: String,
    fechaCreacion: Date
});
var FuenteFinanciacion = mongoose.model('FuenteFinanciacion', fuenteFinanciacionSchema);
exports.default = FuenteFinanciacion;
//# sourceMappingURL=fuenteFinanciacion.js.map