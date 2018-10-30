"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var interventoriaSchema = new Schema({
    proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
    interventor: String,
    informe: String,
    fechaCreacion: Date,
    ejecucion: Number,
    tipoinforme: String,
    facturasAvaladas: [{ type: Schema.Types.ObjectId, ref: 'Factura' }]
});
var Interventoria = mongoose.model('Interventoria', interventoriaSchema);
exports.default = Interventoria;
//# sourceMappingURL=interventoria.js.map