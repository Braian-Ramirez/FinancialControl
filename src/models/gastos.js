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
});

module.exports = mongoose.model("Gasto", gastoSchema);
