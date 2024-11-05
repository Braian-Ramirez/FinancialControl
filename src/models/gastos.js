const mongoose = require("mongoose");

const gastoSchema = mongoose.Schema({
  nombre: { 
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  fechaGasto: {
    type: Date,
    required: true,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
});

module.exports = mongoose.model("Gastos", gastoSchema);
 // Exportando solo el esquema // Exportando solo el esquema, no el modelo
