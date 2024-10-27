const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  contraseñaConfirmacion: {
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
});

// Método para encriptar la contraseña
userSchema.methods.encryptClave = async (clave) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

module.exports = mongoose.model("Usuarios", userSchema);
