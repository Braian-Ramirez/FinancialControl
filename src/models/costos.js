const mongoose = require("mongoose"); // importando el componente mongoose

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
});

module.exports = mongoose.model("Costo", costoSchema);
