//const verifyToken = require('./validate_token');
const express = require("express");
const router = express.Router();
const gastoSchema = require("../models/gastos");

// Crear un nuevo gasto
router.post("/gastos", (req, res) => {
    const gasto = new gastoSchema(req.body);
    gasto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});

 //Actualizar datos de gasto
router.put("/gastos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, monto, fechaPago } = req.body;
    gastoSchema
        .updateOne({ _id: id }, { $set: { nombre, descripcion, monto, fechaPago } })
        .then((data) => {
            if (data.modifiedCount === 0) {
                return res.status(404).json({ message: "Gasto no encontrado o no actualizado" });
            }
            res.json(data);
        })
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Obtener todos los gastos
router.get("/gastos", (req, res) => {
    gastoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Borrar gasto
router.delete("/gastos/:id", (req, res) => {
    const { id } = req.params;
    gastoSchema
        .deleteOne({ _id: id })
        .then((data) => {
            if (data.deletedCount === 0) {
                return res.status(404).json({ message: "Gasto no encontrado" });
            }
            res.json({ message: "Gasto eliminado" });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});
module.exports = router;