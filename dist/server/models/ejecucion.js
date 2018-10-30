"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ejecucionSchema = new Schema({
    proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
    usuario: String,
    idFactura: String,
    fuente: { type: Schema.Types.ObjectId, ref: 'FuenteFinanciacion' },
    valor: Number,
    fecha: Date,
    fechaCreacion: Date
});
var Ejecucion = mongoose.model('Ejecucion', ejecucionSchema);
exports.default = Ejecucion;
//# sourceMappingURL=ejecucion.js.map