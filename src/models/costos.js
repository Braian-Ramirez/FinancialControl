const mongoose = require("mongoose"); // Importando el componente mongoose

const costoSchema = mongoose.Schema({
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
  fechaPago: {
    type: Date,
    required: true,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId, // Tipo de referencia
    ref: "Usuarios", // Nombre del modelo que se referencia
    required: true,
  },
});

module.exports = costoSchema; // Exportando solo el esquema
