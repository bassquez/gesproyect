"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var facturaSchema = new Schema({
    proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
    fuenteFinanciacion: { type: Schema.Types.ObjectId, ref: 'FuenteFinanciacion' },
    valor: Number,
    identificacion: String,
    fecha: Date,
    avalado: Boolean
});
var Factura = mongoose.model('Factura', facturaSchema);
exports.default = Factura;
//# sourceMappingURL=factura.js.map