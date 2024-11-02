const mongoose = require("mongoose"); // Importando el componente mongoose

const ingresoSchema = mongoose.Schema({
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
  fecha: {
    type: Date,
    required: true,
  },
});

module.exports = ingresoSchema; // Exportando solo el esquema, no el modelo
