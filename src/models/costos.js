const mongoose = require("mongoose"); // Importando el componente mongoose

const costoSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Costos", costoSchema);
 // Exportando solo el esquema
