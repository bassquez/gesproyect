"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var facturaInterventoriaSchema = new Schema({
    factura: { type: Schema.Types.ObjectId, ref: 'Factura' },
    interventoria: { type: Schema.Types.ObjectId, ref: 'Interventoria' }
});
var FacturaInterventoria = mongoose.model('FacturaInterventoria', facturaInterventoriaSchema);
exports.default = FacturaInterventoria;
//# sourceMappingURL=facturaInterventoria.js.map