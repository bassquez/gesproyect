"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var fuenteFinanciacionProyectoSchema = new Schema({
    proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
    fuenteProyecto: { type: Schema.Types.ObjectId, ref: 'FuenteFinanciacion' },
    inversion: Number
});
var FuenteFinanciacionProyecto = mongoose.model('FuenteFinanciacionProyecto', fuenteFinanciacionProyectoSchema);
exports.default = FuenteFinanciacionProyecto;
//# sourceMappingURL=fuenteFinanciacionProyecto.js.map