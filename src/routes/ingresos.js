const verifyToken = require('./validate_token'); // Importamos el middleware de verificación de token
const express = require("express");
const router = express.Router();
const ingresoSchema = require("../models/ingresos"); // Importamos el esquema de ingresos

// Crear un nuevo ingreso (Create) - Protegido con verifyToken
router.post("/ingresos", verifyToken, (req, res) => {
    const ingreso = new ingresoSchema(req.body);
    ingreso
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Obtener todos los ingresos (Read - Todos) - Sin protección
router.get("/ingresos", (req, res) => {
    ingresoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un ingreso por ID (Read - Individual) - Sin protección
router.get("/ingresos/:id", (req, res) => {
    const { id } = req.params;
    ingresoSchema
        .findById(id)
        .then((data) => {
            if (!data) return res.status(404).json({ message: "Ingreso no encontrado" });
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar un ingreso por ID (Update) - Protegido con verifyToken
router.put("/ingresos/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, monto, fecha } = req.body;
    ingresoSchema
        .updateOne({ _id: id }, { $set: { nombre, descripcion, monto, fecha } })
        .then((data) => {
            if (data.modifiedCount === 0) return res.status(404).json({ message: "Ingreso no actualizado o no encontrado" });
            res.json(data);
        })
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Eliminar un ingreso por ID (Delete) - Protegido con verifyToken
router.delete("/ingresos/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    ingresoSchema
        .deleteOne({ _id: id })
        .then((data) => {
            if (data.deletedCount === 0) return res.status(404).json({ message: "Ingreso no encontrado" });
            res.json({ message: "Ingreso eliminado" });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
