// const verifyToken = require('./validate_token'); // Verificación de token si es necesario
const express = require("express");
const router = express.Router();
const userSchema = require("../models/usuarios"); 

// Crear un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = new userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar datos de usuario
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, correo, contraseña, contraseñaConfirmacion, telefono, fechaNacimiento } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, cedula, correo, contraseña, contraseñaConfirmacion, telefono, fechaNacimiento } })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Borrar usuario
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
