const verifyToken = require('./validate_token'); // Verificación de token si es necesario
const express = require("express");
const router = express.Router();
const userSchema = require("../models/usuarios"); 

// Crear un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Actualizar datos de usuario
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, correo, contraseña, contraseñaConfirmacion, telefono, fechaNacimento } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, cedula, correo, contraseña, contraseñaConfirmacion, telefono, fechaNacimento } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Borrar usuario
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Obtener todos los usuarios
router.get("/usuario", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
