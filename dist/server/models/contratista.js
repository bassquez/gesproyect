"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var contratistaSchema = new mongoose.Schema({
    nombre: String,
    identificacion: { type: String, unique: true, lowercase: true, trim: true },
    tipoId: String,
    usuario: String,
    fechaCreacion: Date
});
var Contratista = mongoose.model('Contratista', contratistaSchema);
exports.default = Contratista;
//# sourceMappingURL=contratista.js.map