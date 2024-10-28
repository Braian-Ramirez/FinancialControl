const express = require("express");
const router = express.Router();
const costoSchema = require("../models/costos"); // Importamos el esquema de costos

// Creamos un nuevo costo (Create)
router.post("/costos", (req, res) => {
  const costo = new costoSchema(req.body);
  costo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

// Obtener todos los costos (Read - Todos)
router.get("/costos", (req, res) => {
    costoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ message: error.message }));
  });
  
  // Obtener un costo por ID (Read - Individual)
  router.get("/costos/:id", (req, res) => {
    const { id } = req.params;
    costoSchema
      .findById(id)
      .then((data) => {
        if (!data) return res.status(404).json({ message: "Costo no encontrado" });
        res.json(data);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });

  // Actualizar un costo por ID (Update)
router.put("/costos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, monto, fechaPago } = req.body;
    costoSchema
      .updateOne({ _id: id }, { $set: { nombre, descripcion, monto, fechaPago } })
      .then((data) => {
        if (data.modifiedCount === 0) return res.status(404).json({ message: "Costo no actualizado o no encontrado" });
        res.json(data);
      })
      .catch((error) => res.status(400).json({ message: error.message }));
  });
  
  // Eliminar un costo por ID (Delete)
  router.delete("/costos/:id", (req, res) => {
    const { id } = req.params;
    costoSchema
      .deleteOne({ _id: id })
      .then((data) => {
        if (data.deletedCount === 0) return res.status(404).json({ message: "Costo no encontrado" });
        res.json({ message: "Costo eliminado" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });

module.exports = router;