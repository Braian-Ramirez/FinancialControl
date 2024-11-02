const mongoose = require("mongoose"); // Importando el componente mongoose
const gastoSchema = require("./gastos"); // Importando el esquema directamente
const costoSchema = require("./costos"); // Importando el esquema directamente
const ingresoSchema = require("./ingresos"); // Importando el esquema directamente
const bcrypt = require("bcrypt"); // Importando bcrypt

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  cedula: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  claveConfirmacion: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    default: Date.now,
  },
  gasto: [gastoSchema], // Usando el esquema directamente
  costo: [costoSchema], // Usando el esquema directamente
  ingreso: [ingresoSchema] // Usando el esquema directamente
});

// Método para encriptar la contraseña
userSchema.methods.encryptClave = async function(clave) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

module.exports = mongoose.model("Usuarios", userSchema);
