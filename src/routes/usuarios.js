const verifyToken = require('./validate_token'); // Importamos el middleware de verificación de token
const express = require("express");
const router = express.Router();
const usuarioSchema = require("../models/usuarios"); // Importamos el esquema de usuarios

// Crear un nuevo usuario (Create) - Protegido con verifyToken
router.post("/usuarios", verifyToken, (req, res) => {
    const usuario = new usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Obtener todos los usuarios (Read - Todos) - Sin protección
router.get("/usuarios", (req, res) => {
    usuarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un usuario por ID (Read - Individual) - Sin protección
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findById(id)
        .then((data) => {
            if (!data) return res.status(404).json({ message: "Usuario no encontrado" });
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar un usuario por ID (Update) - Protegido con verifyToken
router.put("/usuarios/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    const {  nombre, cedula, correo, clave, claveConfirmacion, telefono, fechaNacimiento} = req.body; // Ejemplo de campos
    usuarioSchema
        .updateOne({ _id: id }, { $set: {  nombre, cedula, correo, clave, claveConfirmacion, telefono, fechaNacimiento } })
        .then((data) => {
            if (data.modifiedCount === 0) return res.status(404).json({ message: "Usuario no actualizado o no encontrado" });
            res.json(data);
        })
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Eliminar un usuario por ID (Delete) - Protegido con verifyToken
router.delete("/usuarios/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .deleteOne({ _id: id })
        .then((data) => {
            if (data.deletedCount === 0) return res.status(404).json({ message: "Usuario no encontrado" });
            res.json({ message: "Usuario eliminado" });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;

