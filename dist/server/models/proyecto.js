"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Contratista = mongoose.model('Contratista');
var proyectoSchema = new Schema({
    identificacion: { type: String, unique: true, lowercase: true, trim: true },
    objeto: String,
    plazo: Number,
    tipoPlazo: String,
    fechaInicio: Date,
    fechaFin: Date,
    inversion: Number,
    usuario: String,
    fechaCreacion: Date,
    contratista: { type: Schema.Types.ObjectId, ref: 'Contratista' },
    interventor: { type: Schema.Types.ObjectId, ref: 'User' }
});
var Proyecto = mongoose.model('Proyecto', proyectoSchema);
exports.default = Proyecto;
//# sourceMappingURL=proyecto.js.map